import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord} from "bizcharts"
import { DataSet } from '@antv/data-set';

// 柱状图
class Shaoshumingzuqingkuang extends Component {

  render() {
    const data = this.props.data; // 数据
    let ds = new DataSet();
    let dv = ds.createView().source(data);
    dv.source(data).transform({
      type: "sort",

      callback(a, b) {
        // 排序依据，和原生js的排序callback一致
        return a.population - b.population > 0;
      }
    });



    return (
        <Chart height={400} data={data} forceFit>
          <Coord transpose />
          <Axis
              name="nation"
              label={{
                offset: 12
              }}
          />
          <Axis name="population" />
          <Tooltip />
          <Geom type="interval" position="nation*population" />
        </Chart>

    )
  }
}

export default Shaoshumingzuqingkuang;