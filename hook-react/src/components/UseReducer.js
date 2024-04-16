import React, { useReducer } from 'react';

const initialState = {
  name: '',
  lastName: '',
  birthYear: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_LAST_NAME':
      return { ...state, lastName: action.payload };
    case 'SET_BIRTH_YEAR':
      return { ...state, birthYear: action.payload };
    default:
      return state;
  }
}

const MyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e, type) => {
    dispatch({ type: type, payload: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) => handleChange(e, 'SET_NAME')}
          placeholder="Ім'я"
        />
        <button onClick={() => dispatch({ type: 'SET_NAME', payload: state.name })}>Ім'я</button>
      </div>
      <div>
        <input
          type="text"
          value={state.lastName}
          onChange={(e) => handleChange(e, 'SET_LAST_NAME')}
          placeholder="Прізвище"
        />
        <button onClick={() => dispatch({ type: 'SET_LAST_NAME', payload: state.lastName })}>Прізвище</button>
      </div>
      <div>
        <input
          type="text"
          value={state.birthYear}
          onChange={(e) => handleChange(e, 'SET_BIRTH_YEAR')}
          placeholder="Рік народження"
        />
        <button onClick={() => dispatch({ type: 'SET_BIRTH_YEAR', payload: state.birthYear })}>Рік народження</button>
      </div>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MyComponent;
