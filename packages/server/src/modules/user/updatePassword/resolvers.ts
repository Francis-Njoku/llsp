import * as bcrypt from "bcryptjs";
import { changePasswordSchema } from "@lspr/common";

import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";
import { expiredKeyError } from "./errorMessages";
import { formatYupError } from "../../../utils/formatYupError";
import { DateTime } from "luxon";
import { sendFeedbackEmail } from '../../../utils/sendEmail';

export const resolvers: ResolverMap = {
  Mutation: {
    updatePasswordChange: async (
      _,
      { newPassword }: GQL.IUpdatePasswordChangeOnMutationArguments,
      { session }
    ) => {

      const userId = await session.userId;
      if (!userId) {
        return [
          {
            path: "newPassword",
            message: expiredKeyError
          }
        ];
      }

      try {
        await changePasswordSchema.validate(
          { newPassword },
          { abortEarly: false }
        );
      } catch (err) {
        return formatYupError(err);
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await User.update(
        { id: userId },
        {
          password: hashedPassword,
          updatedAt: DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)
        }
      );

      // Send Feedback email for changed password
      const link = `<a href="https://playarone.com/support" target="_blank">Playarone Support</a>`;
      const emailBody: string = `Your Playarone password has been successfully updated.
      If you did not request this password change or believe you’re receiving this email as an error, please contact ${link} for immediate assistance.`;
      
      await sendFeedbackEmail(`${session.userEmail}`, 'Your Playarone password has been changed successfully', emailBody);

      return null;
      
    }
  }
};