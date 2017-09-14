import React, {
	Component,
	PropTypes
} from 'react'

class Summary extends Component {
	static propTypes = {
		value: PropTypes.number
	}

	render() {
		return (
			<div className="summary">Total Count: {this.props.value}</div>
		)
	}
}

export default Summary