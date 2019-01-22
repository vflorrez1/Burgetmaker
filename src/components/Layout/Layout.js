import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'

const layout = (props) => {
      return (
        <Aux>
        <Toolbar/>
        <main className="LayoutContent">
        {props.children}
        </main>
       </Aux>
      ) 
};  

export default layout;