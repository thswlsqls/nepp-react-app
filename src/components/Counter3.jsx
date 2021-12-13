import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + action.number };
    case 'DECREMENT':
      return { ...state, value: state.value - action.number };
    default:
      return state;
  }
}

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT', number: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', number: 10 })}>
        -10
      </button>
    </div>
  );
};

export default Counter3;
