import React, { Component } from 'react';
import { connect } from "react-redux";
import { Popover, Icon } from 'antd';
import './topcomponent.css';
import { clearLocal, getLocal } from '../../../utils';
import { loginAction } from '../../../redux/actions/loginAction'

class TopComponent extends Component {
    state = {
        changePassShow: false,
    }
    changePass = () => {
        this.setState({
            changePassShow: true,
        });
    }
    handleOk = (values) => {
        this.setState({
            changePassShow: false,
        });
        // const userId = JSON.parse(localStorage.getItem('userInfo')).id + '';
        // const data = { userId, originalPassword: values.oldPass, currentPassword: values.newPass, isEncrypt: false }
        // postAction("/bigdata/system/user/update/password", data).then(
        //     (res) => {
        //         if (res.success) {
        //             message.success('密码修改成功！');
        //             this.setState({
        //                 changePassShow: false,
        //             });
        //         } else {
        //             message.warn(res.obj);
        //         }
        //     }
        // )
    }
    handleCancel = () => {
        this.setState({
            changePassShow: false,
        });
    }
    render() {
        const userName = JSON.parse(getLocal("userInfo")).name;
        const content = (<div>
            {/* <p><a onClick={this.changePass}><Icon type="form" theme="outlined" style={{ marginRight: 5 }} />修改密码</a></p> */}
            <p style={{ marginBottom: 0 }}><a onClick={this.props.logout}><Icon type="poweroff" theme="outlined" style={{ marginRight: 5 }} />退出登录</a></p>
        </div>);
        return (
            <div className='topcomponent'>
                <p>Demo平台</p>
                <Popover content={content}>
                    <span className="username">
                        欢迎，{userName}
                    </span>
                </Popover>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout() {
            clearLocal();
            const action = loginAction(false);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(TopComponent)