import React, {useState} from 'react';
import {
    SidebarLink,
    SidebarLabel,
    DropDownLink
} from './submenuElements';


const Submenu = ({item}) => {
    const[subnav, setSubnav] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav);
    }
    return (
        <React.Fragment>
            <SidebarLink to = {item.path} onClick = {item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropDownLink to = {item.path} key = {index + 1}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropDownLink>
                );
            })}
        </React.Fragment>
    );
};

export default Submenu;