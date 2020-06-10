import React ,{Component}from "react";
import { Table ,Icon} from 'antd';


export default class YuJingQingKuang extends Component{

    render() {
        const columns = [
            {
                title: '预警类型',
                dataIndex: 'alarmType',
                align:"center",

            },
            {
                title: '红色预警',
                dataIndex: 'red_alarm',
                align:"center",
            },
            {
                title: '橙色预警',
                dataIndex: 'orange_alarm',
                align:"center",
            },{
                title: '黄色预警',
                dataIndex: 'yellow_alarm',
                align:"center",
            },{
                title: '蓝色预警',
                dataIndex: 'blue_alarm',
                align:"center",
            },
        ];

        const data = [
            {
                key: '1',
                alarmType: '失联',
                red_alarm: 0,
                orange_alarm: 0,
                yellow_alarm:1,
                blue_alarm:0
            }, {
                key: '2',
                alarmType: '网络',
                red_alarm: 1,
                orange_alarm: 0,
                yellow_alarm:2,
                blue_alarm:0
            }, {
                key: '3',
                alarmType: '挂科',
                red_alarm: 0,
                orange_alarm: 3,
                yellow_alarm:1,
                blue_alarm:2
            }, {
                key: '4',
                alarmType: '逃课',
                red_alarm: 3,
                orange_alarm: 2,
                yellow_alarm:1,
                blue_alarm:1
            }, {
                key: '5',
                alarmType: '合计',
                red_alarm: 5,
                orange_alarm: 6,
                yellow_alarm:2,
                blue_alarm:1
            }
        ];
        return (
            <div>
                <Icon type="qq" />  预警情况
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </div>
        )
    }
}

