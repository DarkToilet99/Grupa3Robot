import {List} from 'antd';
import { Pacienti } from '../../common/common';
import { ItemPacient } from './ItemList';

export interface ListaPacientiProps{
  data:Pacienti[];
  navigateToIstoricPacienti:()=>void;
}

export const ListaPacienti=({data,navigateToIstoricPacienti}:ListaPacientiProps)=>{
  


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
                <ItemPacient navigateToIstoricPacienti={navigateToIstoricPacienti} item={item}></ItemPacient>
            )}
       />
  );
}
