import React, {Component} from 'react';
import Grandson from './Grandson';
import PropsTypes  from 'prop-types';

class Father extends Component {
    constructor(props, context) {
        super()
        console.log(props, context);
    }
    render() {
        return (
            <div>
                <h1>爸爸{this.props.a}---{this.context.a}</h1>
                <Grandson a={this.props.a} />
                <button onClick={this.context.setA}>爸爸改a</button>
            </div>
        );
    }
}
Father.contextTypes = {
    a: PropsTypes.number.isRequired,
    setA: PropsTypes.func.isRequired
};
export default Father;