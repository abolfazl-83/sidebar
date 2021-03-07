import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import {
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap
} from './sidebarElements';
import sidebarData from '../../data/sidebarData';
import Submenu from '../Submenu/index';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <IconContext.Provider value = {{ color : '#fff'}}>
            <Nav>
                <NavIcon to = '#'>
                    <FaIcons.FaBars onClick = {showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar = {sidebar}>
                <SidebarWrap>
                    <NavIcon to = '#'>
                        <AiIcons.AiOutlineClose onClick = {showSidebar} />
                    </NavIcon>
                    {
                        sidebarData.map((item, index) => {
                            return <Submenu key = {index + 1} item = {item} />
                        })
                    }
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;