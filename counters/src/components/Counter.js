import React, {
  Component,
  PropTypes
} from 'react'

class Counter extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleClickIncremet() {
    if (this.props.onIncrement) {
      this.props.onIncrement();
    }
  }

  handleClickDecrement() {
    if (this.props.onDecrement) {
      this.props.onDecrement();
    }
  }

  render() {
    return (
      <div className="counter">
        <a className="btn" onClick={this.handleClickIncremet.bind(this)}>+</a>
        <a className="btn" onClick={this.handleClickDecrement.bind(this)}>-</a>
        <span className="conter-text">{this.props.caption} count: {this.props.value}</span>
      </div>
    )
  }
}


export default Counter