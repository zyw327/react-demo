import React, {Component} from 'react'
import First from './First';
class App extends Component{
    constructor() {
        super();
        this.a = 1000;
        this.state = {
            a : 100,
            b: 3,
            c: 0,
            d: 5
        };
    }
    add() {
        this.a++;
        console.log(this.a);
        console.log(this);
    }
    badd() {
        this.setState({a: this.state.a + 1});
        console.log(this);
    }
    getD(number) {
        this.setState({d: number});
    }

    setD(number) {
        this.setState({d: number});
    }

    render() {
        return (
            <div>
                <First a={this.state.a} b="777" c={88} setD={(this.setD).bind(this)} d={this.state.d}></First>
                <h1>我是react，很高兴遇见你</h1>
                <p>{this.a}</p>
                <p>{this.state.a}</p>
                <p>d: {this.state.d}</p>
                <button onClick={this.add.bind(this)}>按我啊</button>
                <button onClick={this.badd.bind(this)}>按我啊</button>
            </div>
        );
    }
}

module.exports = App;
