import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import EthnicChart from './EthnicChart';
import RecordChart from './RecordChart';
import GraduateChar from './GraduateChar';
import ConsumeChart from './ConsumeChart';
import WarningChart from './WarningChart';

class BizChart extends Component {
    render() {
        const lineData = [
            { country: "中国", population: 100 },
            { country: "英国", population: 60 },
            { country: "美国", population: 70 },
            { country: "内蒙古", population: 20 },
            { country: "朝鲜", population: 10 },
            { country: "西藏", population: 50 },
            { country: "印度", population: 30 },
            { country: "梵蒂冈", population: 50 },
            { country: "俄罗斯", population: 60 },
            { country: "韩国", population: 52 }
           
        ];

        const RecordData = [
            { month: "学霸", 上学期: 7.0, 下学期: 3.9 },
            { month: "学优", 上学期: 6.9, 下学期: 4.2 },
            { month: "学良", 上学期: 9.5, 下学期: 5.7 },
            { month: "学中", 上学期: 14.5, 下学期: 8.5 },
            { month: "学渣", 上学期: 18.4, 下学期: 11.9 }           
        ];

        const GraduateData = [
            { country: "就业", population: 100 },
            { country: "创业", population: 60 },
            { country: "留学", population: 70 },
            { country: "国外读研", population: 20 },
            { country: "本校读研", population: 10 },
            { country: "国内其他学校读研", population: 50 },
            { country: "失业", population: 30 }
           
        ];

        const ConsumeData = [
            { type: "入不敷出", value: 100 },
            { type: "土豪", value: 80 },
            { type: "小康家庭", value: 60 },
            { type: "普通大众", value: 40 }
           
        ];
        
        

        return (
            <React.Fragment>
                <Card >
                    <Row>
                   
                        <Col span={12}>
                            <h3>{"\u2620"}少数名族情况TOP10</h3>
                            <EthnicChart
                                data={lineData}
                            />
                        </Col>
                        <Col span={12}>
                            <h3>{"\u2620"}学习成绩</h3>
                            <RecordChart
                                data={RecordData}                              
                            />
                        </Col>
                        <Col span={12}>
                            <h3>{"\u2620"}毕业情况</h3>
                            <GraduateChar
                                data={GraduateData}                              
                            />
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                    <Col span={12}>
                            <h3>{"\u2620"}本学期消费情况</h3>
                            <ConsumeChart
                                data={ConsumeData}                              
                            />
                        </Col>
                        <Col span={12}>
                            <h3>{"\u2620"}预警情况</h3>
                            <WarningChart
                                                             
                            />
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        )
    }
}

export default BizChart;