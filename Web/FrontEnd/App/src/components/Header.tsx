import { PageHeader } from 'antd';

export interface HeaderProps{
  headerVisible:boolean;
}

export const SiteHeader= ({headerVisible}:HeaderProps) => {
    return(
      <>
      {headerVisible?(
      <PageHeader
          style={{marginLeft:"760px"}}
          className="site-page-header"
          title={<h1>Autentificare</h1>}
        backIcon
      />
      ):(<div></div>)}
  </>
    );
};