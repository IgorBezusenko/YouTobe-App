import React, { useState } from "react";
import { Modal } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import FormInput from "../forms/form-input";

const ModalWindow = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    props.addFavourite();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <HeartOutlined
        onClick={() => {
          showModal();
          console.log("click");
        }}
        style={{
          fontSize: 16,
          color: "#1890ff",
        }}
      />
      <Modal
        title="Сохранить запрос"
        visible={isModalVisible}
        okText="Сохранить"
        cancelText="Не сохранять"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormInput
          label={"Запрос"}
          name={"request"}
          rules={[]}
          disabled
          placeholder={props.value}
        />
        <FormInput
          label={"Название"}
          name={"itemName"}
          rules={[
            {
              required: true,
              message: "Укажите название!",
            },
          ]}
          placeholder="Укажите название"
        />
      </Modal>
    </>
  );
};

export default ModalWindow;
