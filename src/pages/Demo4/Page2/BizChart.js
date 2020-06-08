import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import Chart from './Chart';


class BizChart extends Component {
    render() {
    
        
        

        return (
            <React.Fragment>
                <Card >
                    <Row>
                   
                        <Col >
                            <h3>网站监测管理</h3>
                            <Chart/>
                        </Col>
                        
                    </Row>
                </Card>
                
            </React.Fragment>
        )
    }
}

export default BizChart;