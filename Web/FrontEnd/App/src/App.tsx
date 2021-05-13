
import React from 'react';
import './App.css';
import { SiteHeader } from './components/Header';
import { NormalLoginForm } from './components/LoginForm';
import { Navigation } from './components/Navigation';
import { Pacienti } from './components/Pacienti';
import {useApp} from './components/StateFile'


export const App= ()=>{
  const {screens,navigateToPacienti}=useApp();
  console.log(screens)
  return (
  <div style={{maxHeight:"600px", maxWidth:"1920px"}} >
  <SiteHeader />
      <Navigation activeScreen={screens}>
      <div style={{marginRight:"700px", marginLeft:"750px",marginTop:"200px"}}>
        <NormalLoginForm navigateToPacienti={navigateToPacienti} />
        </div>
        <Pacienti />
        <div></div>
      </Navigation>
      </div>
  );
}

export default App;
