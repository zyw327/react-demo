import React, {Component} from 'react';
import Father from './Father';
import PropsTypes  from 'prop-types';

//context上下文数据是单向流动，只能由父级传给子级，父级可以通过传函数的方式进行双向绑定

class Grandfather extends Component {
    constructor() {
        super();
        this.state = {
            a: 1000
        };
    }

    // 得到孩子上下文,实际上这里表示一种设置，返回一个对象，这个对象就是现在这个家族体系共享的上下文。将上下文中的a值变为自己状态中的a值
    getChildContext() {
        return {
            a: this.state.a,
            setA: (this.setA).bind(this)
        }
    }
    
    setA() {
        this.setState({a: this.state.a - 1});
    }

    render() {
        return (
            <div>
                <h1>爷爷{this.state.a}</h1>
                <Father a={this.state.a}></Father>
                <button onClick={() => {this.setState({a: this.state.a - 1})}}>爷爷改a</button>
            </div>
        );
    }
}
// 设置child的上下文的类型
Grandfather.childContextTypes = {
    a: PropsTypes.number.isRequired,
    setA: PropsTypes.func.isRequired
}
export default Grandfather;