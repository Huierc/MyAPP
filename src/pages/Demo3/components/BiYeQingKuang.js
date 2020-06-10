import React ,{Component} from "react";
import {Chart,Axis,Tooltip,Geom} from 'bizcharts'
import { Icon } from 'antd';


export default class BiYeQingKuang extends Component {
    render() {
        const height = 200; // 高度设置，默认值
        const data = [
            {
                type: "就业",
                count: 38
            },
            {
                type: "创业",
                count: 52
            },
            {
                type: "留学",
                count: 61
            },
            {
                type: "国外读研",
                count: 145
            },
            {
                type: "本校读研",
                count: 48
            },
            {
                type: "失业",
                count: 38
            },
            {
                type: "其他",
                count: 38
            }
        ];
        const cols = {
            sales: {
                tickInterval: 20
            }
        };
        return (
            <div>
                <Chart height={height} data={data} scale={cols} forceFit>
                    <Icon type="weibo" />  毕业情况
                    <Axis name="type" />
                    <Axis name="count" />
                    <Tooltip
                         crosshairs={{
                             type: "y"
                         }}
                    />
                    <Geom type="interval" position="type*count" />
                </Chart>
            </div>
        );
    }
}

