import * as React from "react";
import { ViewMe, UpdatePassword } from "@lspr/controller";

import { Password, defaultFormValues } from "./ui/Index";

export class UpdatePasswordConnector extends React.PureComponent {
  render() {
    return (
      <ViewMe>
        {(data) => {
          if (!data.match) {
            return <div>...loading</div>;
          }

          const {
            id: _,
            role: ___,
            onboarded: __,
            createdOn: _____,
            updatedAt: ____,
            // confirmed: _________,
            // forgotPasswordLocked: __________,
            // suspended: ___________,
            // isLocked: ____________,
            // lastLoggedIn: ________________,
            ...match
          } = data.match;

          return (
            <UpdatePassword>
              {({ updateUser }) => (
                <Password
                  initialValues={
                    {
                      ...defaultFormValues,
                      ...match,
                    } as any
                  }
                  submit={async (values: any) => {
                    const { __typename: ____, ...newValues } = values as any;

                    await updateUser({
                      variables: {
                        input: newValues,
                      },
                    });

                  }}
                />
              )}
            </UpdatePassword>
          );
        }}
      </ViewMe>
    );
  }
}
