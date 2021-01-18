import React, { useState } from "react";
import { Modal } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import FormInput from "../forms/form-input";
import { connect } from "react-redux";
import { saveFavourite } from "../redux/favouriteReducer";

const ModalWindow = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
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
        onOk={() => {
          props.addFavourite();
          handleOk();
        }}
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
const mapDispatchToProps = {
  saveFavourite,
};

export default connect(null, mapDispatchToProps)(ModalWindow);
