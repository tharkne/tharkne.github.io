import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Homepage from './pages/Homepage'
import { pageEnum } from './siteEnums'

import { makeStyles } from '@material-ui/core'

function pageSwitcher(page, setPage){
  switch(page){
    case pageEnum.HOME:
      return (<Homepage setPage={setPage} />)
    case pageEnum.PROGRAMMING:
      return (<Programming setPage={setPage} />)
    case pageEnum.ART:
      return (<Art setPage={setPage} />)
    case pageEnum.ABOUT:
      return (<About setPage={setPage} />)
    case pageEnum.RESUME:
      return (<Resume setPage={setPage} />)
  }
}

function App() {
  const [page, setPage] = useState(0); 

  return (
    <div className="App">
      <Header>
        { pageSwitcher(page, setPage) }
      </Header>
    </div>
  );
}

export default App;
