import { Modal} from 'antd';

export interface ModalStergerePacientProps
{
    setIsModalVisible:(isModalVisible:boolean)=>void;
    isModalVisible:boolean;
}

export const ModalStergerePacient = ({isModalVisible,setIsModalVisible}:ModalStergerePacientProps) => {

  const handleOk = () => {
    setIsModalVisible(false);
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
