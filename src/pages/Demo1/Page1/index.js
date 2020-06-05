import React, { Component } from 'react';
import { Breadcrumb, Card } from 'antd';
import BizChart from './BizChart'


class Analysis extends Component {
    render() {
        return (
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item>Demo</Breadcrumb.Item>
                    <Breadcrumb.Item>示例</Breadcrumb.Item>
                </Breadcrumb>
                <div className="common-content">
                    <Card>
                        <BizChart />
                    </Card>
                </div>
            </div>
        )
    }
}

export default Analysis;