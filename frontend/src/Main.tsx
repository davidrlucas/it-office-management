import React from 'react';
import './css/style.scss';

import Workspace from './pages/workspace/Workspace';
import SideMenu from './pages/menu/SideMenu';

class Main extends React.Component {
    render(){

        return (
            <div id="background">
                <SideMenu/>
                <Workspace/>
            </div>
        );
    }
}

export default Main;