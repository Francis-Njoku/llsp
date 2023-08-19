import * as React from 'react'

import { NavHeader } from "./Header";
import Footer from "./Footer";

function Template( {page, children}: any ) {
  const nav = {
    currentPage: page
  }

  return (
    <React.Fragment>
      <div className="container-center-horizontal">
        <NavHeader {...nav}/>
    
        {children}
        
        <Footer />
      </div>   
        
    </React.Fragment>
  )
}

export default Template

