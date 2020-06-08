import React, { Component } from 'react';
import { G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util } from "bizcharts"
import { DataSet } from '@antv/data-set';

// 学习图
class ConsumeChart extends Component {

  render() {

    const height = 350; // 高度设置，默认值
    const data = this.props.data; // 数据
    const ds = new DataSet(); // dateset数据集方法
    const dv = ds.createView().source(data); // 数据转换
    let fields = [], nameKey; // 获取关键字
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

      let max = 0;
    data.forEach(function(obj) {
      if (obj.value > max) {
        max = obj.value;
      }
    }); // 自定义 other 的图形，增加两条线



    G2.Shape.registerShape("interval", "sliceShape", {
      draw(cfg, container) {
        const points = cfg.points;
        const origin = cfg.origin._origin;
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
    return (
        <Chart data={data} height={height} forceFit>
        <Coord type="theta" radius={0.8} />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="value"
          color="type"
          shape="sliceShape"
        >
         <Label
              content="value"
              formatter={(val, item) => {
                return item.point.type + ': ' + val+'%';
              }}      
            />
        </Geom>
      </Chart>
    )
  }
}

export default ConsumeChart;