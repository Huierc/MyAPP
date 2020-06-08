import { Table,Switch,Pagination} from 'antd';
import React, { Component } from 'react';


class Chart extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              id: 1,
              website: 'www.baidu.com',
              name: '百度',
              type: '搜索引擎',
              time: '2020-09-18',
              state: 0,
            },
            {
                key: '2',
                id: 2,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
              {
                key: '3',
                id: 3,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
              {
                key: '4',
                id: 4,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
              {
                key: '5',
                id: 5,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
              {
                key: '6',
                id: 6,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
              {
                key: '7',
                id: 7,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
              {
                key: '8',
                id: 8,
                website: 'www.baidu.com',
                name: '百度',
                type: '搜索引擎',
                time: '2020-09-18',
                state: 0,
              },
           
          ];
          function onChange(checked) {
            console.log(`switch to ${checked}`);
          }
          const columns = [
            {
              title: '序号',
              dataIndex: 'id',
              key: 'id',
              width: '8%',
            },
            {
              title: '网站地址',
              dataIndex: 'website',
              key: 'website',
            },
            {
              title: '名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
              },
              {
                title: '创建时间',
                dataIndex: 'time',
                key: 'time',
              },
              {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                render: () => <Switch defaultChecked onChange={onChange} />
              },
              {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => <a>Delete</a>,
              },
          ];

          
          function onChange(pageNumber) {
            console.log('Page: ', pageNumber);
          }
          

          return( 
                  <Table bordered  dataSource={dataSource} columns={columns} pagination={{pageSize: 5}} 
                  /> 
            )      
         
    }
}


export default Chart;