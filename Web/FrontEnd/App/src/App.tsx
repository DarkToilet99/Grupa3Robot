
import React from 'react';
import './App.css';
import { mockedDoctori } from './common/HardcodedData';
import { SiteHeader } from './components/Header';
import { IstoricPacient } from './components/IstoricPacient/IstoricPacient';
import { NormalLoginForm } from './components/LoginForm';
import { Navigation } from './components/Navigation';
import { PacientiPage } from './components/Pacienti/PacientiPage';
import {useApp} from './components/StateFile'


export const App= ()=>{
  const {screens,navigateToPacienti,headerVisible,setSearchCriteria, DatePacienti ,navigateToAutentificare,navigateToIstoricPacient }=useApp();
  console.log(screens)
  return (
  <div style={{maxHeight:"600px", maxWidth:"1920px"}} >
  <SiteHeader headerVisible={headerVisible} />
      <Navigation activeScreen={screens}>
      <div style={{marginRight:"700px", marginLeft:"750px",marginTop:"200px"}}>
        <NormalLoginForm navigateToAutentificare={navigateToAutentificare} navigateToPacienti={navigateToPacienti} />
        </div>
        <div>
        <PacientiPage navigateToIstoricPacienti={navigateToIstoricPacient} dataDoctori={mockedDoctori} navigateToAutentificare={navigateToAutentificare} data={DatePacienti()} setSearchCriteria={setSearchCriteria}/>
       </div> 
       <div>
       <IstoricPacient></IstoricPacient>
       </div>
      </Navigation>
      </div>
  );
}

export default App;
