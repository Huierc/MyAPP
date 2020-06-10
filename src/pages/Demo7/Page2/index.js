import React, { Component } from 'react';
import {Card, Col, Switch, Table} from 'antd';

class Page2 extends Component {
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '胡彦祖',
                age: 52,
                address: '西湖区湖底公园1号',
            },
            {
                key: '4',
                name: '胡彦祖',
                age: 62,
                address: '西湖区湖底公园1号',
            },
            {
                key: '5',
                name: '胡彦祖',
                age: 72,
                address: '西湖区湖底公园1号',
            },
            {
                key: '6',
                name: '胡彦祖',
                age: 82,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'name',
            },
            {
                title: '网站地址',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '类型',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '创建时间',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '状态',
                dataIndex: 'address',
                key: 'address',
                render:() => {
                    return <Switch />
                }
            },
            {
                title: '操作',
                dataIndex: 'address',
                key: 'address',
                render: () => (
                    <span>
                        <a >删除</a>
                    </span>
                ),
            },
        ];
        function onChange(checked) {
            console.log(`switch to ${checked}`);
        }
        return (
            <Card>
                <h3>网站监测管理</h3>
                <Table dataSource={dataSource} height={400} columns={columns} />;
            </Card>

        )
    }
}

export default Page2;