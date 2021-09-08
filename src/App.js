import * as React from 'react';
import Form from './components/Form';
import InterestsTable from './components/InterestsTable';
import defaultState from './defaultState';
import './App.css';

function App() {
  const [state, setState] = React.useState(defaultState);
  // console.log(state);

  return (
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <Form onUpdate={(variables) => setState(variables)} />
      <hr />
      {/* <InterestsTable state={state} /> */}
      <InterestsTable {...state} />
    </div>
  );
}

export default App;
