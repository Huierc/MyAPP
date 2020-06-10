import React,{Component} from 'react'
import {Chart,Coord,Axis,Tooltip,Geom} from 'bizcharts'
import { DataSet } from '@antv/data-set';
import { Icon } from 'antd';
//柱形图
export default class ShaoShuMinZuQingKuang extends Component{
    //初始化state
    state = {
        data :[
            {
                nation: "满族",
                count: 300
            },{
                nation: "汉族",
                count: 1000
            },{
                nation: "维吾尔族",
                count: 400
            },{
                nation: "蒙古族",
                count: 100
            },{
                nation: "回族",
                count: 500
            },
        ]
    }
    //渲染
    render() {
        const {data} = this.state
        const height = 400; // 高度设置，默认值
        const ds = new DataSet();// dateset数据集方法
        const dv = ds.createView().source(data);//数据转换
        // 初始化参数
        dv.source(data).transform({
            type:"sort-by",//
            fields: [ 'count' ],
            order: 'ASC'
        })
        return (
            <Chart height={height} data={dv} padding={[30, 20, 60, 50]}  forceFit>
                <Icon type="aliwangwang" />  少数民族TOP5
                <Coord transpose />
                <Axis
                    name="nation"
                    label={{
                        offset: 12
                    }}
                />
                <Axis name="count" />
                <Tooltip />
                <Geom type="interval" position="nation*count" />
            </Chart>
        )
    }
}
