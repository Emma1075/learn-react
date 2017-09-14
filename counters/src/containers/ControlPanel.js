import React, {
  Component
} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

class ControlPanel extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;