import React from 'react' 
import { connect } from 'dva'
import {Button} from 'antd'

@connect(({wallet})=>({wallet:wallet.data}))
export default class WalletComponent extends React.Component {
    constructor(){
      super()
    }
    render(){
        const { wallet } = this.props;
        return <div>
            {Object.keys(wallet).map(key=><div key={key}>
                <Button>{key}</Button>
                <Button>{wallet[key]}</Button>
            </div>)}
        </div>
    }
}