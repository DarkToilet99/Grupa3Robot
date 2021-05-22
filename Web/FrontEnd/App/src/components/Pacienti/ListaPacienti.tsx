import {List} from 'antd';
import axios from 'axios';
import { Pacienti } from '../../common/common';
import { ItemPacient } from './ItemList';

export interface ListaPacientiProps{
  data:Pacienti[];
  navigateToIstoricPacienti:()=>void;
  setDetaliiPacient:(detalii:Pacienti)=>void;
  setPacientDeSters:(pacientCnp:number)=>void;
  stergerePacient:()=>void;
}

export const ListaPacienti=({data,navigateToIstoricPacienti,setDetaliiPacient,setPacientDeSters,stergerePacient}:ListaPacientiProps)=>{
  return(
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
               console.log(page);
          },
           pageSize: 10,
           }}
            dataSource={data}
            renderItem={item => (      
                <ItemPacient stergerePacient={stergerePacient} setPacientDeSters={setPacientDeSters} setDetaliiPacient={setDetaliiPacient} navigateToIstoricPacienti={navigateToIstoricPacienti} itemPacient={item}></ItemPacient>
            )}
       />
  );
}
