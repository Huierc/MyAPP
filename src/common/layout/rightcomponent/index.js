import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { asyncComponent } from '../../../utils';
import './rightcomponent.css'

//获取到异步组件
const dPage1 = asyncComponent(() => import('../../../pages/Demo1/Page1'));
const dPage2 = asyncComponent(() => import('../../../pages/Demo1/Page2'));

const tPage1 = asyncComponent(() => import('../../../pages/Demo2/Page1'));
const tPage2 = asyncComponent(() => import('../../../pages/Demo2/Page2'));

const sPage1 = asyncComponent(() => import('../../../pages/Demo3/Page1'));
const sPage2 = asyncComponent(() => import('../../../pages/Demo3/Page2'));

const ePage1 = asyncComponent(() => import('../../../pages/Demo4/Page1'));
const ePage2 = asyncComponent(() => import('../../../pages/Demo4/Page2'));

const rPage1 = asyncComponent(() => import('../../../pages/Demo5/Page1'));
const rPage2 = asyncComponent(() => import('../../../pages/Demo5/Page2'));

const yPage1 = asyncComponent(() => import('../../../pages/Demo6/Page1'));
const yPage2 = asyncComponent(() => import('../../../pages/Demo6/Page2'));

const uPage1 = asyncComponent(() => import('../../../pages/Demo7/Page1'));
const uPage2 = asyncComponent(() => import('../../../pages/Demo7/Page2'));

class RightComponent extends React.Component {
    render() {
        return (
            <div className='rightcomponent'>
                <div className='scrollcontainer'>
                    <Switch>
                        <Route path="/mainframe/demo1/page1" component={dPage1} />
                        <Route path="/mainframe/demo1/page2" component={dPage2} />
                        <Route path="/mainframe/demo2/page1" component={tPage1} />
                        <Route path="/mainframe/demo2/page2" component={tPage2} />
                        <Route path="/mainframe/demo3/page1" component={sPage1} />
                        <Route path="/mainframe/demo3/page2" component={sPage2} />
                        <Route path="/mainframe/demo4/page1" component={ePage1} />
                        <Route path="/mainframe/demo4/page2" component={ePage2} />
                        <Route path="/mainframe/demo5/page1" component={rPage1} />
                        <Route path="/mainframe/demo5/page2" component={rPage2} />
                        <Route path="/mainframe/demo6/page1" component={yPage1} />
                        <Route path="/mainframe/demo6/page2" component={yPage2} />
                        <Route path="/mainframe/demo7/page1" component={uPage1} />
                        <Route path="/mainframe/demo7/page2" component={uPage2} />
                        <Route path="/" render={(props) => <Redirect to='/mainframe/demo1/page1' />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(RightComponent)