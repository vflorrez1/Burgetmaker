import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
      return (
        <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className="LayoutContent">
        {props.children}
        </main>
       </Aux>
      ) 
};  

export default layout;