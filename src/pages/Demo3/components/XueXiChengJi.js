import React ,{Component} from "react";
import {Chart,Axis,Tooltip,Geom,Legend} from 'bizcharts'
import { DataSet } from '@antv/data-set';
import { Icon } from 'antd';

export default class XueXiChengJi extends Component{

    render() {
        const height = 200; // 高度设置，默认值
        let fields = [], nameKey; // 获取关键字
        const data = [

            {
                name: "上学期",
                "学霸": 98,
                "学优": 85,
                "学良": 74,
                "学中": 62,
                "学差": 35
            },
            {
                name: "下学期",
                "学霸": 90,
                "学优": 80,
                "学良": 70,
                "学中": 60,
                "学差": 50
            }
        ];

        const ds = new DataSet();
        const dv = ds.createView().source(data);
        if (data && data[0]) {
            nameKey = Object.keys(data[0])[0]; // 获取json第一个对象的第一个键名称
            // 获取json对象子节点除去第一个键的其他键字段集合
            Object.keys(data[0]).forEach((item, index) => {
                if (index !== 0) {
                    fields.push(item);
                }
            })
        } else {
            // 无数据时
            return (<div>暂无数据</div>);
        }

        dv.transform({
            type:"fold",
            fields:fields.length>0?fields: ['null'],
            key:"type",
            value: 'value'
        })
        return (
            <Chart height={height} data={dv} padding={[30, 20, 60, 50]} forceFit>
                <Icon type="windows" />  学习成绩
                <Axis name="type" />
                <Axis name="value" />
                <Legend />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom
                    type="interval"
                    position={"type*value"}
                    color={"name"}
                    adjust={[
                        {
                            type: "dodge",
                            marginRatio: 0
                        }
                    ]}
                />

            </Chart>
        )
    }
}

