import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import { RouteProps, Route, RouteComponentProps, Redirect } from "react-router";
import { meQuery } from "../Me"
import { MeQuery } from "../../schemaTypes";

type Props = RouteProps;

class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;

    if (!data || data.loading) {
      // loading screen
      return null;
    }

    if(data) {
      if (data.me ) {
        // user already logged in
        return (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { next: routeProps.location.pathname }
            }}
          />
        );
      }
    }

    const Component = component as any;

    return <Component {...routeProps} />;
  };

  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

export const StaticRoute = graphql<Props, MeQuery>(meQuery)(C);