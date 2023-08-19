import * as React from "react";
import { Field, FieldProps } from "formik";
// import { SearchOutlined } from "@ant-design/icons";

import { InputField } from "../../shared/InputField";
import { TextAreaField } from "../../shared/TextAreaField";

class C extends React.PureComponent<FieldProps<any>> {
  render() {
    return(
      <div id='send-message'>
        <div className="group-42">
          <div className="full-name sen-normal-fuscous-gray-16px">Full Name</div>
          <div className="overlap-group-3 border-1px-greybebebe">
            <Field
            name="name"
            className="text-168 sen-normal-silver-16px"
            component={InputField} 
            useNumberComponent={false}/>
          </div>
        </div>

        <p className="overlap-group3-item">How Do You Want Us To Contact You?</p>
        <div className="flex-row-1">
          <div className="group-44">
            <div className="group-43 border-1px-primary-colour1f365d">
              <div className="rectangle-19"></div>
            </div>
            <div className="through-email sen-normal-gray-16px">Through Email</div>
          </div>

          <a href="/">
            <div className="group-34">
              <div className="rectangle-18 border-1px-greybebebe"></div>
              <div className="through-phone sen-normal-gray-16px">Through Phone</div>
            </div>
          </a>
        </div>

        <div className="overlap-group border-1px-greybebebe">
          <Field
          name="email"
          className="text-171 sen-normal-silver-16px"
          component={InputField} 
          useNumberComponent={false}/>
        </div>
        
        <div className="group-49">
            <div className="subject sen-normal-fuscous-gray-16px">Subject</div>
            <div className="overlap-group border-1px-greybebebe">
              <Field
              name="subject"
              className="text-169 sen-normal-silver-16px"
              component={InputField} 
              useNumberComponent={false}/>
            </div>
        </div>

        <div className="overlap-group3-item">Message</div>
        <div className="overlap-group4 border-1px-greybebebe">
          <Field
          name="message"
          className="text-170 sen-normal-silver-16px"
          component={TextAreaField} />
        </div>

        <div className="group-51">
          <div className="send-message sen-normal-white-16px">Send Message</div>
          <img className="iconly-bold-send" src="../../assets/img/iconly-bold-send@2x.svg" alt="" />
        </div>
      </div>
    );
  }
}

export const Email = (C);
