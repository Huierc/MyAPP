import React ,{Component}from "react";
import {Chart,Geom,Tooltip,Coord,Label,Shape,} from 'bizcharts'
import { Icon } from 'antd';

export default class BenXueQiXiaoFeiQingKuang extends Component{



    render() {
        const height = 400;
        const data = [
            {
                type: "土豪",
                value: 100
            },
            {
                type: "普罗大众",
                value: 80
            },
            {
                type: "小康家庭",
                value: 60
            },
            {
                type: "入不敷出",
                value: 40
            }
        ];
        let max = 0;
        let total = 0;
        data.forEach((obj)=>{
            if (obj.value>max){
                max = obj.value
            }
            total = total + obj.value;
        })
        data.forEach((obj)=>{
            obj.total = total;
        })

        Shape.registerShape("interval", "sliceShape", {
            draw(cfg, container) {
                const points = cfg.points;
                const origin = cfg.origin._origin;//获取data中的对象
                const percent = origin.value / max;
                const xWidth = points[2].x - points[1].x;
                const width = xWidth * percent;
                let path = [];
                path.push(["M", points[0].x, points[0].y]);
                path.push(["L", points[1].x, points[1].y]);
                path.push(["L", points[0].x + width, points[2].y]);
                path.push(["L", points[0].x + width, points[3].y]);
                path.push("Z");
                path = this.parsePath(path);
                return container.addShape("path", {
                    attrs: {
                        fill: cfg.color,
                        path: path
                    }
                });
            }
        });

        class SliderChart extends React.Component {
            render() {
                return (
                    <Chart height={height} data={data}  padding={[30, 20, 60, 50]} forceFit>
                        <Icon type="apple" />  本学期消费情况
                        <Coord type="theta" radius={0.5} />
                        <Tooltip showTitle={false}/>
                        <Geom
                            type="intervalStack"
                            position="value"
                            color="type"
                            shape="sliceShape"
                        >

                           <Label
                                content={[
                                    "value*total*type",(value,total,type)=>{
                                    return type + "：" + (Math.round(value*100/total))+"%"
                                    }
                                ]}
                           />
                        </Geom>
                    </Chart>
                );
            }
        }
        return (
            <div>
                <SliderChart />
            </div>
        );
    }
}

