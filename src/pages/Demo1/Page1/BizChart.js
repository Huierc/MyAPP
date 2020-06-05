import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import LineChart from './LineChart';

class BizChart extends Component {
    render() {
        const lineData = [
            { month: "Jan", Tokyo: 7.0, London: 3.9 },
            { month: "Feb", Tokyo: 6.9, London: 4.2 },
            { month: "Mar", Tokyo: 9.5, London: 5.7 },
            { month: "Apr", Tokyo: 14.5, London: 8.5 },
            { month: "May", Tokyo: 18.4, London: 11.9 },
            { month: "Jun", Tokyo: 21.5, London: 15.2 },
            { month: "Jul", Tokyo: 25.2, London: 17.0 },
            { month: "Aug", Tokyo: 26.5, London: 16.6 },
            { month: "Sep", Tokyo: 23.3, London: 14.2 },
            { month: "Oct", Tokyo: 18.3, London: 10.3 },
            { month: "Nov", Tokyo: 13.9, London: 6.6 },
            { month: "Dec", Tokyo: 9.6, London: 4.8 }
        ];

        return (
            <React.Fragment>
                <Card title={'折线图'}>
                    <Row>
                        <Col span={12}>
                            <h3>悬浮提示框默认内容</h3>
                            <LineChart
                                data={lineData}
                            />
                        </Col>
                        <Col span={12}>
                            <h3>悬浮提示框自定义内容（添加单位）</h3>
                            <LineChart
                                data={lineData}
                                geomTooltip={['type*value', (type, item) => {
                                    return {
                                        name: type,
                                        value: item + '次'
                                    };
                                }]}
                            />
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        )
    }
}

export default BizChart;