import * as React from "react";
// import { Link } from "react-router-dom";
import { ViewMe } from "@lspr/controller";
import { Avatar } from "antd";

class C extends React.PureComponent{
  render(){
    return (
      <ViewMe>
        {data => {
          if (!data.match) {
            return <div>...loading</div>;
          }

          return (
            <div className="header-auth">
                {/* <div className="group-container">
                    <div className="group-13375">
                        <img className="frame-1" src="../../assets/img/frame-38@2x.svg" alt="" />
                    </div>
                    <div className="overlap-group">
                        <div className="number sen-normal-white-13px">0</div>
                    </div>
                </div>

                <img className="vector-305" src="../../assets/img/vector-305@2x.svg" alt="" /> */}
                
                <div className="group-14007">
                    <Avatar
                    size={{ xs: 2, sm: 10, md: 20, lg: 44, xl: 35, xxl: 45 }}
                    src={
                        data.match.firstname ? 
                        `https://ui-avatars.com/api/?background=9fafb5&color=141618&length=1&rounded=true&format=svg&name=${data.match?.firstname}` : 
                        `https://ui-avatars.com/api/?background=9fafb5&color=141618&length=1&rounded=true&format=svg&name=${data.match?.email}`
                    }
                    alt="avatar" 
                    className="mr-10" />
                    
                    <div className="alt">
                      <div className="adenike-adesanoye sen-normal-gravel-16px">
                        {data.match.firstname ? `${data.match.firstname} ${data.match.lastname}` : data.match.email}
                      </div>
                      <span>Student</span>
                    </div>
                </div>
            </div>
          ); 
        }}
      </ViewMe>
    )
  }
}

export const NavHeader = C;