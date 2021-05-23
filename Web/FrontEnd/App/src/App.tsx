
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
    bearerToken,
    autentificare,
    getPacienti,
    dateDoctori,
    setDetaliiPacient,
    detaliiPacient,
    inregMedic,
    setParolaInregistrare,
    setPacientDeSters,stergerePacient
   }=useApp();
  return (
    
  <div style={{maxHeight:"600px", maxWidth:"1920px"}} >
  <SiteHeader backButtonVisible={backButtonVisible} navigateToAutentificare={navigateToAutentificare} headerTitle={headerTitle} headerVisible={headerVisible} />
      <Navigation activeScreen={screens}>
        <Loading navigateToAutentificare={navigateToAutentificare}></Loading>
      <div style={{ marginLeft:"750px",width:"400px",marginTop:"200px"}}>
        <NormalLoginForm setParolaInregistrare={setParolaInregistrare} getPacienti={getPacienti} setInregMedic={setInregMedic} navigateToAutentificare={navigateToAutentificare} navigateToPacienti={autentificare} navigateToRegister={navigateToRegister} />
        </div>
        <PacientiPage stergerePacient={stergerePacient} setPacientDeSters={setPacientDeSters} getPacienti={getPacienti} detaliiPacient={detaliiPacient} inregMedic={inregMedic} setDetaliiPacient={setDetaliiPacient} bearerToken={bearerToken} stareRobot={stareRobotMocked[0].ocupat} navigateToIstoricPacienti={navigateToIstoricPacient} dataDoctori={dateDoctori} navigateToAutentificare={navigateToAutentificare} data={DatePacienti()} setSearchCriteria={setSearchCriteria}/>
       <IstoricPacient dataPacient={detaliiPacient} dataTransporturi={mockedTransport} dataDoctori={dateDoctori} navigateToPacienti={navigateToPacienti}></IstoricPacient>
       <div style={{width:"400px", marginLeft:"750px",marginTop:"200px"}}>
       <RegisterForm  navigateToAutentificare={navigateToAutentificare} ></RegisterForm>
       </div>
      </Navigation>
      </div>
  );
}

export default App;
