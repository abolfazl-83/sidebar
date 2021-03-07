import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const sidebarData = [
    {
        title : 'Overview',
        path : '/overview',
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title : 'Users',
                path : '/overview/users',
                icon : <IoIcons.IoIosPaper />
            },
            {
                title : 'Revenue',
                path : '/overview/revenue',
                icon : <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title : 'Reports',
        path : '/reports',
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,
        subNav : [
            {
                title : 'Reports 1',
                path : '/reports/Reports1',
                icon : <IoIcons.IoIosPaper />
            },
            {
                title : 'Reports 2',
                path : '/reports/Reports2',
                icon : <IoIcons.IoIosPaper />
            },
            {
                title : 'Reports 3',
                path : '/reports/Reports3',
                icon : <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title : 'Support',
        path : '/support',
        icon : <AiIcons.AiFillHome />,
    }
];

export default sidebarData;