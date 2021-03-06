import React, { Component, PropTypes } from 'react';
import { fetchData } from '../actions/counter';
import { Link } from 'react-router';

class Counter extends Component {
  render() {
    console.log('render Counter');
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        <Link to='/about'>Go to about</Link>
      </p>
    );
  }
}

Counter.fetchData = fetchData;

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
