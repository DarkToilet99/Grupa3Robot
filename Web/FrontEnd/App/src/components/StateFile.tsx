import { useState } from "react"
import { mockedData } from "../common/HardcodedData";

export enum Screens {
    Loading,
    Autentificare,
    Pacienti,
    IstoricPacient,
    Register
  }

export const useApp=()=>{
    const [screens,setScreens]=useState<number>(Screens.Loading);
    const [headerVisible,setHeaderVisible]=useState<boolean>(true);
    const [searchCriteria,setSearchCriteria]=useState("");
    const [headerTitle,setHeaderTitle]=useState("");
    const [backButtonVisible,setBackButtonVisible]=useState(false)


const navigateToPacienti =()=>{
    setHeaderVisible(false);
    setScreens(Screens.Pacienti);
    setBackButtonVisible(false);
}

const navigateToRegister=()=>{
    setBackButtonVisible(true)
    setHeaderVisible(true);
    setScreens(Screens.Register);
    setHeaderTitle("Inregistrare");
}

const navigateToAutentificare=()=>{
    setBackButtonVisible(false)
    setHeaderVisible(true);
    setScreens(Screens.Autentificare)
    setHeaderTitle("Autentificare");
}

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
            navigateToRegister,
            navigateToIstoricPacient,
            headerTitle,
            backButtonVisible
        };

  }

  