import React, { Component } from 'react';
import {Breadcrumb, Card} from "antd";
import BizChart7 from "../../Demo7/Page1/BizChart";


class Page7 extends Component {
    render() {
        return (
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item>DEMO7</Breadcrumb.Item>
                    <Breadcrumb.Item>例子</Breadcrumb.Item>
                </Breadcrumb>
                <div className="common-content">
                    <Card>
                        <BizChart7 />
                    </Card>
                </div>
            </div>
        )
    }
}

export default Page7;