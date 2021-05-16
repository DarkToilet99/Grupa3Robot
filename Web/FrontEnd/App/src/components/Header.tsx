import { Button, PageHeader } from 'antd';
import React from 'react';

export interface HeaderProps{
  headerVisible:boolean;
  headerTitle:string;
  navigateToPacienti:()=>void;
  backButtonVisible:boolean;
}

export const SiteHeader= ({headerVisible,headerTitle,navigateToPacienti,backButtonVisible}:HeaderProps) => {
    return(
      <>
      {headerVisible?(
        <>
        {backButtonVisible?(<Button size="large" style={{marginLeft:"1600px"}} onClick={()=>{navigateToPacienti()}}>🡸 Inapoi</Button>):(<div></div>)}
      
      <PageHeader
          style={{marginLeft:"760px"}}
          className="site-page-header"
          title={<h1>{headerTitle}</h1>}
        backIcon
      />
      </>
      ):(<div></div>)}
  </>
    );
};