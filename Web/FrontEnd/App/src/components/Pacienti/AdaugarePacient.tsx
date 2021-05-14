import { Input, Modal} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

export interface ModalAdaugarePacientProps
{
    setIsModalVisible:(isModalVisible:boolean)=>void;
    isModalVisible:boolean;
}

export const AdaugarePacient = ({isModalVisible,setIsModalVisible}:ModalAdaugarePacientProps) => {

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Adaugare Pacient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Adauga" cancelText="Inapoi" >
        <Input style={{marginBottom:"5px"}} placeholder="CNP"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Nume"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Prenume"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Varsta"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Sex"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Telefon"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Profesie"></Input>
        <Input style={{marginBottom:"5px"}} placeholder="Pat"></Input>
        <TextArea style={{marginBottom:"5px"}} placeholder="Diagnostic"></TextArea>
        <TextArea style={{marginBottom:"5px"}} placeholder="Medicament"></TextArea>
      </Modal>
    </>
  );
};
