import { Button, PageHeader } from 'antd';
import React from 'react';

export interface HeaderProps{
  headerVisible:boolean;
  headerTitle:string;
  navigateToAutentificare:()=>void;
  backButtonVisible:boolean;
}

export const SiteHeader= ({headerVisible,headerTitle,navigateToAutentificare,backButtonVisible}:HeaderProps) => {
    return(
      <>
      {headerVisible?(
        <div style={{display:"flex"}}>
      <PageHeader
          style={{marginLeft:"800px"}}
          className="site-page-header"
          title={<h1>{headerTitle}</h1>}
        backIcon
      />
      {backButtonVisible?(<Button size="large" style={{marginLeft:"750px", marginTop:"50px"}} onClick={()=>{navigateToAutentificare()}}>🡸 Inapoi</Button>):(<div></div>)}
      </div>
      ):(<div></div>)}
  </>
    );
};