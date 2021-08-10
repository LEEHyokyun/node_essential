import React from 'react'
import styled from "styled-components"

const color = 'black'

import logo from './logo.svg';
//import './App.css';

const Component = styled.div`
  display : ${props => props.isLoaded? 'block' : 'none'};
  color: ${color};
`

const Wrapper = styled(Component)`
  background-color: gray;
  margin: 20px;
`

function App() {
  return (
    <Wrapper isLoaded>
      <Component isLoaded>complete</Component>
    </Wrapper>
  )
}

export default App;
