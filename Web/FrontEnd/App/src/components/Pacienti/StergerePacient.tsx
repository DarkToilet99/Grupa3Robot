import { Modal} from 'antd';

export interface ModalStergerePacientProps
{
    setIsModalVisible:(isModalVisible:boolean)=>void;
    isModalVisible:boolean;
    stergerePacient:()=>void;
}

export const ModalStergerePacient = ({isModalVisible,setIsModalVisible,stergerePacient}:ModalStergerePacientProps) => {

  const handleOk = () => {
    setIsModalVisible(false);
    stergerePacient()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Stergere Pacient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Sunt sigur" cancelText="Nu" >
        Esti sigur ca vrei sa stergi acest pacient?
      </Modal>
    </>
  );
};
