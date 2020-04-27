import React from 'react'
import { connect } from 'dva'
import {Button} from 'antd'
class App extends React.Component {
    handleAdd = () => {
        this.props.dispatch({
            type: 'home/add',
            val: 5,
            res: 1
        })
    }
    handleAddAsync=()=>{
        this.props.dispatch({
            type: 'home/addAsync'
        })
    }
    handleDel = () => {
    }
    render() {
        const { homes } = this.props
        return (
            <div>
                <Button type="primary" onClick={this.handleAdd}>add</Button>&nbsp;&nbsp;
                <Button type="primary" onClick={this.handleAddAsync}>async</Button>&nbsp;&nbsp;
                <Button onClick={this.handleDel}>{homes}</Button>
            </div>
        )
    }
}
export default connect(
    ({ home, main }) => ({
        homes: home.num,
        mains: main.main
    })
)(App)