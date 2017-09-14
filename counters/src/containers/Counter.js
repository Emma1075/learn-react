import React, {
  PropTypes,
  Component
} from 'react';
import * as Actions from '../reducers/actions.js';
import {
  connect
} from 'react-redux';
import Counter from '../components/Counter'

class CounterContainer extends Component {
  static propTypes = {
    value: PropTypes.any,
    onIncrement: PropTypes.any,
    onDecrement: PropTypes.any
  }

  constructor() {
    super();
  }

  render() {
    return (
      <Counter 
        caption={this.props.caption} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        value={this.props.value} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

// 两次函数执行，产生容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);