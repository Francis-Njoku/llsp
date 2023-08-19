import * as React from 'react'

import Sidebar from "./Sidebar";
import { NavHeader } from "./HeaderAuth";

function Template( {page, children}: any ) {

  const nav = {
    currentPage: page
  }

  return (
    <React.Fragment>
      <div className="container-center-horizontal" style={{background: "#f9f9f9"}}>
          <NavHeader/>

          <Sidebar {...nav} />

          {children}
      </div>   
        
    </React.Fragment>
  )
}

export default Template

