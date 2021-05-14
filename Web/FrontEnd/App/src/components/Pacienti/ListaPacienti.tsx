import {List} from 'antd';
import { ItemPacient } from './ItemList';
export const ListaPacienti=()=>{
  
  const listData = [];
for(let i=0;i<12;i++)
{
  listData.push({
    title: `Pacient `,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
};

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
    dataSource={listData}
    renderItem={item => (      
    <ItemPacient  item={item}></ItemPacient>
    )}
  />
  );
}
