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
    Util} from "bizcharts"

// 柱状图
class Benxueqiqingkuang extends Component {

  render() {

    const data = this.props.data3; // 数据
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
        <div>
            <Chart data={data} forceFit>
                <Coord type="theta" radius={0.8} />
                <Tooltip />
                <Geom
                    type="intervalStack"
                    position="value"
                    color="type"
                    shape="sliceShape"
                >
                    <Label content="type" />
                </Geom>
            </Chart>
        </div>
    )
  }
}

export default Benxueqiqingkuang;