import React from 'react';
import { Icon } from 'antd';

const config = [
    {
        name: 'Demo1',
        icon: <i className="iconfont icon-shujumofang" style={{ marginRight: 8 }}></i>,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo1/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo1/page2'
        }]
    },
    {
        name: 'Demo2',
        icon: <i className="iconfont icon-guiji" style={{ marginRight: 8 }}></i>,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo2/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo2/page2'
        }]
    },
    {
        name: 'Demo3',
        icon: <Icon type="radar-chart" theme="outlined" />,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo3/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo3/page2'
        }]
    },
    {
        name: 'Demo4',
        icon: <Icon type="radar-chart" theme="outlined" />,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo4/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo4/page2'
        }]
    },
    {
        name: 'Demo5',
        icon: <Icon type="radar-chart" theme="outlined" />,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo5/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo5/page2'
        }]
    },
    {
        name: 'Demo6',
        icon: <Icon type="radar-chart" theme="outlined" />,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo6/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo6/page2'
        }]
    },
    {
        name: 'Demo7',
        icon: <Icon type="radar-chart" theme="outlined" />,
        subMenus: [{
            name: 'page1',
            url: '/mainframe/Demo7/page1'
        }, {
            name: 'page2',
            url: '/mainframe/Demo7/page2'
        }]
    },
]

export default config;