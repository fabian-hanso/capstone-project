import React from 'react'
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header>Test</Header>
    </div>
  );
}

export default App;

const Header = styled.header `
  width: 100%;
  height: 50%;
  background-color: red;
`;