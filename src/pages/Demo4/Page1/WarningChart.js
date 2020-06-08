import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';

class WarningChart extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              name: '失联',
              red: 32,
              orange: 0,
              yellow: 0,
              blue: 0,

            },
            {
                key: '2',
                name: '网络',
                red: 32,
                orange: 0,
                yellow: 0,
                blue: 0,
  
              },
              {
                key: '3',
                name: '挂科',
                red: 32,
                orange: 0,
                yellow: 0,
                blue: 0,
  
              },
              {
                key: '4',
                name: '逃课',
                red: 32,
                orange: 0,
                yellow: 0,
                blue: 0,
  
              },
              {
                key: '5',
                name: '消费',
                red: 2,
                orange: 1,
                yellow: 0,
                blue: 5,
  
              },
              {
                key: '6',
                name: '夜归',
                red: 32,
                orange: 0,
                yellow: 0,
                blue: 0,
  
              },
              {
                key: '7',
                name: '合计',
                red: 32,
                orange: 0,
                yellow: 0,
                blue: 0,
  
              },
          ];
          
          const columns = [
            {
              title: '预警类型',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '红色预警',
              dataIndex: 'red',
              key: 'red',
            },
            {
              title: '橙色预警',
              dataIndex: 'orange',
              key: 'orange',
            },
            {
                title: '黄色预警',
                dataIndex: 'yellow',
                key: 'yellow',
              },
              {
                title: '蓝色预警',
                dataIndex: 'blue',
                key: 'blue',
              },
          ];
          return( <Table dataSource={dataSource} columns={columns} pagination={false }/>)
         
    }
}


export default WarningChart;