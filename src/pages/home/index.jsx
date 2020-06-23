import React from 'react'
import { ipcRenderer } from 'electron'
import { NavLink, Switch, Route, Redirect } from 'dva/router'
import Title from '../../components/title'
import Main from '../main'
import Friend from '../firend'
import More from '../more'
import Wallet from '../wallet'
import { connect } from 'dva'
import './index.less'
class App extends React.Component {
    componentDidMount() {
        ipcRenderer.send('message', 'hello electron')
        ipcRenderer.on('message', (event, arg) => {
            console.log(arg, new Date(Date.now()))
        })
        const ws = new WebSocket('ws://localhost:8087');
        console.log('ws',ws)
        ws.onopen = function () {
            ws.send('123')
            ws.send({"op":"query","args":["BTCUSDT"]})
            console.log('open')
        }
        ws.onmessage = function (data) {
            console.log('onmessage',data)
        }
        ws.onerror = function (error) {
            console.log('onerror',error)
        }
        ws.onclose = function () {
            console.log('onclose')
        }
    }
    componentWillUnmount() {
        ipcRenderer.removeAllListeners()
    }
    render() {
        console.log(this.props)
        return (
            <div className="wrap">
                {/* <div className="nav">
                    <NavLink to="/home/main">Home</NavLink>
                    <NavLink to="/home/firend">Friend</NavLink>
                    <NavLink to="/home/more">More</NavLink>
                </div> */}
                <div className="content">
                    <Title></Title>
                    <Switch>
                        <Route path="/home/main" component={Main}></Route>
                        <Route path="/home/firend" component={Friend}></Route>
                        <Route path="/home/more" component={More}></Route>
                        <Route path="/home/wallet" component={Wallet}></Route>
                        <Redirect to="/home/main"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
export default connect(
    ({ main }) => ({
        test: main.main
    })
)(App)
// ipcRenderer.sendSync('sync-message','sync-message')