import React, { Component } from 'react';
import { Card, Row,Table, Col } from 'antd';
import Shaoshumingzuqingkuang from './Shaoshumingzuqingkuang';
import Xuexichengji from './Xuexichengji';
import Biyeqingkuang from './Biyeqingkuang';
import Benxueqiqingkuang from './Benxueqiqingkuang';



class BizChart extends Component {



    render() {
        const data = [
            {
                nation: "汉族",
                population: 131744
            },
            {
                nation: "印度",
                population: 104970
            },
            {
                nation: "美国",
                population: 29034
            },
            {
                nation: "印尼",
                population: 23489
            },
            {
                nation: "巴西",
                population: 18203
            }
        ];

        const data1 = [
            {
                name: "London",
                "Jan.": 18.9,
                "Feb.": 28.8,
                "Mar.": 39.3,
                "Apr.": 81.4,
                "May.": 47,
                "Jun.": 20.3,
                "Jul.": 24,
                "Aug.": 35.6
            },
            {
                name: "Berlin",
                "Jan.": 12.4,
                "Feb.": 23.2,
                "Mar.": 34.5,
                "Apr.": 99.7,
                "May.": 52.6,
                "Jun.": 35.5,
                "Jul.": 37.4,
                "Aug.": 42.4
            }
        ];


        const data2 = [
            {
                year: "1951 年",
                sales: 38
            },
            {
                year: "1952 年",
                sales: 52
            },
            {
                year: "1956 年",
                sales: 61
            },
            {
                year: "1957 年",
                sales: 145
            },
            {
                year: "1958 年",
                sales: 48
            },
            {
                year: "1959 年",
                sales: 38
            },
            {
                year: "1960 年",
                sales: 38
            },
            {
                year: "1962 年",
                sales: 38
            }
        ];

        const data3 = [
            {
                type: "分类一",
                value: 27
            },
            {
                type: "分类二",
                value: 25
            },
            {
                type: "分类三",
                value: 18
            },
            {
                type: "分类四",
                value: 15
            },
            {
                type: "分类五",
                value: 10
            },
            {
                type: "Other",
                value: 5
            }
        ];

        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '胡彦祖',
                age: 52,
                address: '西湖区湖底公园1号',
            },
            {
                key: '4',
                name: '胡彦祖',
                age: 62,
                address: '西湖区湖底公园1号',
            },
            {
                key: '5',
                name: '胡彦祖',
                age: 72,
                address: '西湖区湖底公园1号',
            },
            {
                key: '6',
                name: '胡彦祖',
                age: 82,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
        ];

        return (
            <React.Fragment>
                <Card title={'少数名族情况TOP10'}>
                    <Row>
                        <Col span={12}>
                            <Shaoshumingzuqingkuang
                                data={data}
                            />
                        </Col>
                        <Col span={12}>
                            <Xuexichengji data1={data1}/>
                            <Biyeqingkuang data2={data2}/>
                        </Col>
                    </Row>
                </Card>
                <Card title={'本学期消费情况'}>
                    <Row>
                        <Col span={12}>
                            <Benxueqiqingkuang
                                data3={data3}
                            />
                        </Col>
                        <Col span={12}>
                            <Table dataSource={dataSource} height={400} columns={columns} />;
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        );
    }
}

export default BizChart;