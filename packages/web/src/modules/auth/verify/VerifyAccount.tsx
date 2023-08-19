import * as React from "react";

class C extends React.PureComponent {
  render() {
    return (
      <div className="content content-fixed content-auth-alt">
        <div className="container d-flex justify-content-center ht-100p">
          <div className="mx-wd-300 wd-sm-450 ht-100p d-flex flex-column align-items-center justify-content-center">
            <div className="wd-80p wd-sm-300 mg-b-15">
              <img src="https://via.placeholder.com/2083x1466" className="img-fluid" alt="" />
            </div>

            <h4 className="tx-20 tx-sm-24">Verify Account</h4>
            <p className="tx-color-03 mg-b-30 tx-center">
              An email has been sent to your inbox. Please follow the link to verify your account.
            </p>
            
          </div>
        </div>
      </div>
    );
  }
}

export const VerifyAccountPage = (C);