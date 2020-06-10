import React, { Component } from 'react';
import { Table, Switch ,Card} from 'antd';

export default class Page2 extends Component {

    render() {
        //columns配置
        const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
                width:'60px',
                align:'center'
            },
            {
                title: '网站地址',
                dataIndex: 'web_loc',
                key: 'web_loc',
                align:'center'
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                align:'center'
            },
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                align:'center'
            },
            {
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
                align:'center'
            },
            {
                title: '状态',
                key: 'status',
                align:'center',
                render:() => {
                    return <Switch />
                }
            },
            {
                title: '操作',
                key: 'action',
                align:'center',
                render: () => (
                    <span>
                        <a >删除</a>
                    </span>
                ),
            },
        ];
        //分页器配置
        const pagination = {
            showQuickJumper:true,
            defaultCurrent:1,
            defaultPageSize:5,
            showTotal:(total)=>(`共${total}条数据`)
        }

        const data = [
            {
                index: '1',
                web_loc: 'www.baidu.com',
                name: '百度一下,你就知道',
                type: '搜索引擎',
                createTime: '2020-06-06',
            },{
                index: '2',
                web_loc: 'www.baidu.com',
                name: '百度一下,你就知道1',
                type: '搜索引擎',
                createTime: '2020-06-06',
            },{
                index: '3',
                web_loc: 'www.baidu.com',
                name: '百度一下,你就知道2',
                type: '搜索引擎',
                createTime: '2020-06-06',
            },{
                index: '4',
                web_loc: 'www.baidu.com',
                name: '百度一下,你就知道3',
                type: '搜索引擎',
                createTime: '2020-06-06',
            },{
                index: '5',
                web_loc: 'www.baidu.com',
                name: '百度一下,你就知道4',
                type: '搜索引擎',
                createTime: '2020-06-06',
            },{
                index: '6',
                web_loc: 'www.baidu.com',
                name: '百度一下,你就知道5',
                type: '搜索引擎',
                createTime: '2020-06-06',
            },
        ];
        //初始化分页的total
        pagination.total = data.length;
        return (
            <Card>
                <h3>网站监测管理</h3>
                <Table columns={columns} dataSource={data} bordered={true} pagination={pagination}/>
            </Card>
        )
    }
}
