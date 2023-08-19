import * as React from "react";
import { CheckOutlined } from "@ant-design/icons";

export const Finish = () => (
  <div id='success-alert'>
    <div className="wrapper">
      <div className="icon">
        <CheckOutlined />
      </div>

      <div className="text">
        <p>Message sent!</p>
        <p>Message sent successfuly, we'll contact you shortly.</p>
      </div>
    </div>
  </div>
);