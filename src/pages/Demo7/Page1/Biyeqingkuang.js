import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';

// 柱状图
class Biyeqingkuang extends Component {

  render() {

    const data = this.props.data2; // 数据
      const cols = {
          sales: {
              tickInterval: 20
          }
      };
    return (
        <div>
            <Chart height={200} data={data} scale={cols} forceFit>
                <Axis name="year" />
                <Axis name="sales" />
                <Tooltip
                    // crosshairs用于设置 tooltip 的辅助线或者辅助框
                    // crosshairs={{
                    //  type: "y"
                    // }}
                />
                <Geom type="interval" position="year*sales" />
            </Chart>
        </div>
    )
  }
}

export default Biyeqingkuang;