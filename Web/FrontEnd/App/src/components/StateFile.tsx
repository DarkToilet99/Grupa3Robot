import { useState } from "react"
import axios from 'axios';
import { Doctori, Pacienti, Tratament } from "../common/common";

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
    const [bearerToken,setBearerToken]=useState("")
    const [inregMedic,setInregMedic]=useState(0);
    const [datePacienti,setDatePacienti]=useState<Pacienti[]>([])
    const [dateDoctori,setDateDoctori]=useState<Doctori>({nume:"",parola:"",prenume:"",codParafa:0})
    const [detaliiPacient,setDetaliiPacient]=useState({pacientId:0,nume:'',prenume:'',pacientCNP:0,varsta:0,sex:true,telefon:0,profesie:'',locDeMunca:'',email:'',tratamente:{pacientId:0,diagnostic:"",pat:0,medicament:""}})
    const [parolaInregistrare,setParolaInregistrare]=useState("");
    const [pacientDeSters,setPacientDeSters]=useState(0)

    const  getPacienti= async ()=>{
      axios
      .get("https://localhost:44327/pacients/pacientiMedic",{params:{codParafa:inregMedic}})
      .then( async raspuns=>{
         setDatePacienti(raspuns.data);
         console.log(raspuns.data)
        })
      .catch(e=>console.log(e))
    }



const autentificare=()=>{
    axios
    .post<string>("https://localhost:44344/auth",  
        {Username:"admin",
         Password:"admin"}
       ,{
        headers: {
            "Content-Type": "application/json"
          }
    }
    )
    .then(raspuns=>{
        setBearerToken(raspuns.data.toString())
            axios
            .get<Doctori>("https://localhost:44327/medics",
            {params:{codParafa:inregMedic,parola:parolaInregistrare},
                headers:{'Authorization': 'Bearer ' + raspuns.data}
        })
        .then(raspuns=>{
            setDateDoctori(raspuns.data)
            setScreens(Screens.Loading);
            if(datePacienti!=null)
            navigateToPacienti();
        })
    })
    .catch(e=>console.log(e))
    
        
}

const stergerePacient=()=>{
    axios
        .delete("https://localhost:44327/pacients",
        {params:{codParafa:inregMedic},
        data:{pacientCNP:pacientDeSters}
})
          
        .then(a=>getPacienti())
      .catch(e=>console.log(e))
  }

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

const navigateToIstoricPacient=async ()=>{
    setScreens(Screens.IstoricPacient);
}
const DatePacienti=()=>{
    console.log(searchCriteria);

        return datePacienti.filter((_) => (_.nume).toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase()) || (_.pacientCNP.toString().includes(searchCriteria)))

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
            setPacientDeSters,
            stergerePacient
        };

    }
  