
import React from 'react';
import './App.css';
import { mockedDoctori, mockedTransport } from './common/HardcodedData';
import { SiteHeader } from './components/Header';
import { IstoricPacient } from './components/IstoricPacient/IstoricPacient';
import { Loading } from './components/Loading';
import { NormalLoginForm } from './components/LoginForm';
import { Navigation } from './components/Navigation';
import { PacientiPage } from './components/Pacienti/PacientiPage';
import { RegisterForm } from './components/Register';
import {useApp} from './components/StateFile'


export const App= ()=>{
  const {
    screens,
    navigateToPacienti,
    headerVisible,
    setSearchCriteria,
    DatePacienti,
    navigateToAutentificare,
    navigateToIstoricPacient,
    navigateToRegister,
    headerTitle,
    backButtonVisible }=useApp();
  console.log(screens)
  return (
  <div style={{maxHeight:"600px", maxWidth:"1920px"}} >
  <SiteHeader backButtonVisible={backButtonVisible} navigateToPacienti={navigateToPacienti} headerTitle={headerTitle} headerVisible={headerVisible} />
      <Navigation activeScreen={screens}>
        <Loading navigateToAutentificare={navigateToAutentificare}></Loading>
      <div style={{marginRight:"700px", marginLeft:"750px",marginTop:"200px"}}>
        <NormalLoginForm navigateToAutentificare={navigateToAutentificare} navigateToPacienti={navigateToPacienti} navigateToRegister={navigateToRegister} />
        </div>
        <PacientiPage navigateToIstoricPacienti={navigateToIstoricPacient} dataDoctori={mockedDoctori} navigateToAutentificare={navigateToAutentificare} data={DatePacienti()} setSearchCriteria={setSearchCriteria}/>
       <IstoricPacient dataTransporturi={mockedTransport} dataDoctori={mockedDoctori} navigateToPacienti={navigateToPacienti}></IstoricPacient>
       <div style={{marginRight:"700px", marginLeft:"750px",marginTop:"200px"}}>
       <RegisterForm navigateToPacienti={navigateToPacienti} navigateToRegister={navigateToRegister}></RegisterForm>
       </div>
      </Navigation>
      </div>
  );
}

export default App;
