import {List} from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { Pacienti } from '../../common/common';
import { ItemPacient } from './ItemList';

export interface ListaPacientiProps{
  data:Pacienti[];
  navigateToIstoricPacienti:()=>void;
  setDetaliiPacient:(detalii:Pacienti)=>void;
}

export const ListaPacienti=({data,navigateToIstoricPacienti,setDetaliiPacient}:ListaPacientiProps)=>{
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
                <ItemPacient setDetaliiPacient={setDetaliiPacient} navigateToIstoricPacienti={navigateToIstoricPacienti} itemPacient={item}></ItemPacient>
            )}
       />
  );
}
