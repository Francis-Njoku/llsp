import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@lspr/controller";

import { ChangePasswordView } from "./ui/ChangePasswordView";

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{
    key: string;
  }>
> {
  onFinish = () => {
    this.props.history.push("/signin");
  };

  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props;
    
    return (
      <ChangePasswordController>
        {({ submit }) => (
          <ChangePasswordView
            onFinish={this.onFinish}
            token={key}
            submit={submit}
          />
        )}
      </ChangePasswordController>
    );
  }
}