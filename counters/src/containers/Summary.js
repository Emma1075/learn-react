import React, {
  PropTypes,
  Component
} from 'react';
import * as Actions from '../reducers/actions.js';
import {
  connect
} from 'react-redux';
import Summary from '../components/Summary'

class SummaryContainer extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  }

  render() {
    return (
      <Summary value={this.props.value} />
    )
  }
}

function mapStateToProps(state) {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return {
    value: sum
  }
}


// 两次函数执行，产生容器组件
export default connect(mapStateToProps)(SummaryContainer);