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
class RecordChart extends Component {

  render() {

    const height = 175; // 高度设置，默认值
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
    // 初始化参数
    dv.source(data).transform({
      type: 'fold',
      fields: fields.length > 0 ? fields : ['null'],
      key: 'type',
      value: 'value'
    });
    let scales = this.props.scales || { value: { min: 0 } };
    
    return (
        <Chart height={height} data={dv} scale={scales} padding={[30, 20, 60, 50]} forceFit>
        {this.props.noLegend ? null : <Legend marker={'circle'} />}
        <Axis name={nameKey} />
        <Tooltip crosshairs={{ type: "y" }} />
        <Geom
            type="interval"
            position={nameKey + "*value"}
            color={['type', this.props.colors]} tooltip={this.props.geomTooltip}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        {this.props.children}
      </Chart>
    )
  }
}

export default RecordChart;