import React, {Component} from 'react'
import {PropTypes} from 'prop-types';
class First extends Component {

    constructor(props){
        super();
        this.state = {
            f: 3,
            c: props.c,
            d: props.d
        }
        this.setD = () => {
            this.setState({d: this.state.d + 1});
            props.setD(this.state.d + 1);
        }
    }
    render() {
        return (
            <div>
                <hr />
                <h1>你好我是子组件</h1>
                <p>a:{this.props.a}</p>
                <p>b:{this.props.b}</p>
                <p>c:{this.state.c}</p>
                <p>d:{this.state.d}</p>
                <p>f:{this.state.f}</p>
                <hr />
                <p>
                    <button onClick={() => {this.setState({f: this.state.f + 1});console.log(this)}}>按我更改c的值</button>
                </p>
                <p>
                    <button onClick={this.setD}>按我更改d的值</button>
                </p>
            </div>
        );
    }
}
First.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    c: PropTypes.number.isRequired
}
module.exports = First;