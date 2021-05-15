import { useState } from "react"
import { mockedData } from "../common/HardcodedData";

export enum Screens {
    Loading,
    Autentificare,
    Pacienti,
    IstoricPacient
  }

export const useApp=()=>{
    const [screens,setScreens]=useState<number>(Screens.Loading);
    const [headerVisible,setHeaderVisible]=useState<boolean>(true);
    const [searchCriteria,setSearchCriteria]=useState("");


const navigateToPacienti =()=>{
    setHeaderVisible(false);
    setScreens(Screens.Pacienti);
}

const navigateToAutentificare=()=>{
    setHeaderVisible(true);
setScreens(Screens.Autentificare)}

const navigateToIstoricPacient=()=>{
    setScreens(Screens.IstoricPacient);
}
const DatePacienti=()=>{
    console.log(searchCriteria)
    return mockedData.filter((_) => _.numePacient.includes(searchCriteria));
}

    return {screens,
            navigateToPacienti,
            headerVisible,
            setSearchCriteria,
            DatePacienti,
            navigateToAutentificare,
            navigateToIstoricPacient
        };

  }

  