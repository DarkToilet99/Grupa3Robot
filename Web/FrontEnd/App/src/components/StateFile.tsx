import { useState } from "react"

export enum Screens {
    Autentificare,
    Pacienti
  }

export const useApp=()=>{
    const [screens,setScreens]=useState<number>(Screens.Autentificare);
    const [headerVisible,setHeaderVisible]=useState<boolean>(true);


const navigateToPacienti =()=>{
    setHeaderVisible(false)
    setScreens(Screens.Pacienti);
}

    return {screens,
navigateToPacienti,
headerVisible};

  }

  