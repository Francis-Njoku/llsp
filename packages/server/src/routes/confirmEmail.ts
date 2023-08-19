import { Request, Response } from "express";
import { User } from "../entity/User";
import { sendFeedbackEmail } from '../utils/sendEmail';
import { redis } from "../redis";

export const confirmEmail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = await redis.get(id);
  const email = await redis.get('email');
  if (userId) {
    await User.update({ id: userId }, { confirmed: true });
    // Send Email to notify user that email has been activated
    const emailSubject: string = `Welcome to LSPR, let's get you started!`;
    const emailBody: 
      string = `Thank you for choosing to learn with LSPR Nigeria. We're happy to welcome you.`;
    
    await sendFeedbackEmail(`${email}`, emailSubject, emailBody);
    
    // await redis.del(id);
    await redis.pipeline([
      ["del", "id"],
      ["del", "email"]
    ]).exec();
    // res.redirect(`${process.env.FRONTEND_HOST}/signin`);
    res.redirect(`${process.env.FRONTEND_HOST}`);
  } else {
    res.send("invalid");
  }
};