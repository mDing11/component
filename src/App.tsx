import React from 'react';
import Button from './components/Button'
import Alert from './components/Alert'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button btnType="primary" onClick={e => { console.log(console.log('nihao')) }} size="sm">你好</Button>
      <Alert type="success" title="确认弹框"/>
    </div>
  );
}

export default App;
