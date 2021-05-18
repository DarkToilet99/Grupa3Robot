
import React from 'react';
import './App.css';
import { mockedDoctori, mockedTransport, stareRobotMocked } from './common/HardcodedData';
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
    backButtonVisible,
    setInregMedic,
    bearerToken }=useApp();
  return (
  <div style={{maxHeight:"600px", maxWidth:"1920px"}} >
  <SiteHeader backButtonVisible={backButtonVisible} navigateToAutentificare={navigateToAutentificare} headerTitle={headerTitle} headerVisible={headerVisible} />
      <Navigation activeScreen={screens}>
        <Loading navigateToAutentificare={navigateToAutentificare}></Loading>
      <div style={{ marginLeft:"750px",width:"400px",marginTop:"200px"}}>
        <NormalLoginForm setInregMedic={setInregMedic} navigateToAutentificare={navigateToAutentificare} navigateToPacienti={navigateToPacienti} navigateToRegister={navigateToRegister} />
        </div>
        <PacientiPage bearerToken={bearerToken} stareRobot={stareRobotMocked[0].Ocupat} navigateToIstoricPacienti={navigateToIstoricPacient} dataDoctori={mockedDoctori} navigateToAutentificare={navigateToAutentificare} data={DatePacienti()} setSearchCriteria={setSearchCriteria}/>
       <IstoricPacient dataTransporturi={mockedTransport} dataDoctori={mockedDoctori} navigateToPacienti={navigateToPacienti}></IstoricPacient>
       <div style={{width:"400px", marginLeft:"750px",marginTop:"200px"}}>
       <RegisterForm  navigateToPacienti={navigateToPacienti} ></RegisterForm>
       </div>
      </Navigation>
      </div>
  );
}

export default App;
