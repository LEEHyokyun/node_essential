import React from 'react'
import styled from "styled-components"

const color = 'black'

import logo from './logo.svg';
//import './App.css';

const Component = styled.div`
  display : ${props => props.isLoaded? 'block' : 'none'};
  color: ${color};
`

function App() {
  return (
    <Component isLoaded>complete</Component>
  )
}

export default App;
