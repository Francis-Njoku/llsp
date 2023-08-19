import * as React from "react";
import { ViewMe, UpdateUser } from "@lspr/controller";

import { Setting, defaultFormValues } from "./ui/Index";

export class UpdateSettingConnector extends React.PureComponent {
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
            <UpdateUser>
              {({ updateUser }) => (
                <Setting
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
            </UpdateUser>
          );
        }}
      </ViewMe>
    );
  }
}
