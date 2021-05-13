import { useState } from "react"

export enum Screens {
    Autentificare,
    Pacienti
  }

export const useApp=()=>{
    const [screens,setScreens]=useState<number>(Screens.Autentificare);


const navigateToPacienti =()=>{
    setScreens(Screens.Pacienti);
}

    return {screens,
navigateToPacienti};

  }

  