import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Grandson extends Component {
    constructor(props, context) {
        super();
        console.log(props, context);
    }
    render() {
        return (
            <div>
                <h1>孙子{this.props.a}---{this.context.a}</h1>
                <button onClick={this.context.setA}>孙子改a</button>
            </div>
        );
    }
}
Grandson.contextTypes = {
    a: PropTypes.number.isRequired,
    setA: PropTypes.func.isRequired
}
export default Grandson;