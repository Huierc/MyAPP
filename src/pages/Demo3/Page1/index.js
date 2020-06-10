import React, { Component } from 'react';
import {Card, Breadcrumb, Row, Col} from 'antd';
import ShaoShuMinZuQingKuang from "../components/ShaoShuMinZuQingKuang";
import XueXiChengJi from "../components/XueXiChengJi";
import BiYeQingKuang from "../components/BiYeQingKuang";
import BenXueQiXiaoFeiQingKuang from "../components/BenXueQiXiaoFeiQingKuang";
import YuJingQingKuang from "../components/YuJingQingKuang";
class ModalCont extends Component {

    render() {
        return (
            <div>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item>Demo3</Breadcrumb.Item>
                    <Breadcrumb.Item>示例</Breadcrumb.Item>
                </Breadcrumb>
                <div className="common-content">
                    <Card>
                        <Row>
                            <Col span={12}>
                                <ShaoShuMinZuQingKuang/>

                            </Col>
                            <Col span={12}>
                                <XueXiChengJi/>
                                <BiYeQingKuang/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <BenXueQiXiaoFeiQingKuang/>
                            </Col>
                            <Col span={16}>
                                <YuJingQingKuang/>
                            </Col>
                        </Row>


                    </Card>
                </div>
            </div>
        )
    }
}

export default ModalCont;
