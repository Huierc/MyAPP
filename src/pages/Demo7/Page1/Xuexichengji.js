import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';

// 柱状图
class Xuexichengji extends Component {

  render() {
      const data = this.props.data1; // 数据
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
          type: "fold",
          fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."],
          // 展开字段集
          key: "月份",
          // key字段
          value: "月均降雨量" // value字段
      });

      return (
          <div>
              <Chart height={200} data={dv} forceFit>
                  <Axis name="月份" />
                  <Axis name="月均降雨量" />
                  <Legend />
                  <Tooltip
                      crosshairs={{
                          type: "y"
                      }}
                  />
                  <Geom
                      type="interval"
                      position="月份*月均降雨量"
                      color={"name"}
                      adjust={[
                          {
                              type: "dodge",
                              marginRatio: 1 / 32
                          }
                      ]}
                  />
              </Chart>
          </div>
    )
  }
}

export default Xuexichengji;