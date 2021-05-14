import { Button } from "antd"

export interface ItemListProps{
    item:{ title: string;
        description: string;
        content: string;}
}

export const ItemPacient =({item}:ItemListProps)=>{
    
    return (
        <div style={{ borderBottom:"1px solid LightGray",borderLeft:"1px solid LightGray",borderRight:"1px solid LightGray", padding:"2px"}}>
            <text style={{marginLeft:"30px"}} >{item.title}</text>
            <text style={{marginLeft:"200px"}}>SECTIE ATI</text>
            <Button style={{marginLeft:"300px", marginTop:"4px"}}>Vizualizare</Button>
            <Button style={{marginLeft:"29px", marginTop:"4px"}}>Eliminare</Button>
        </div>
    )
}
