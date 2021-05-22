import { Input, List } from "antd"
import React from "react";
import { Pacienti, Transporturi } from "../../common/common";
import { ItemTransport } from "./ItemTransport";

export interface IstoricTransporturiProps{
    data:Transporturi[];
}

export const IstoricTransporturi=({data}:IstoricTransporturiProps)=>{
    return(<div style={{width:"700px",height:"335px",border:"1px solid LightGrey",marginTop:"60px"}}>
        <Input placeholder="Transport Actual"></Input>
        <Input defaultValue="Transporturi Efectuate"></Input>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
               console.log(page);
          },
           pageSize: 4,
           }}
            dataSource={data}
            renderItem={item => (      
                <ItemTransport item={item}></ItemTransport>
            )}
            />
    </div>);
}