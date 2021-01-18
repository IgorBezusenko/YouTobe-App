import React from "react";
import { Input, Space } from "antd";
import { Typography } from "antd";
import ModalWindow from "../modal-window/modal-window";
import { connect } from "react-redux";
import { saveFavourite } from "../redux/favouriteReducer";

const { Title } = Typography;
const { Search } = Input;

const SearchPanel = (props) => {
  const onSearch = (value) => {
    console.log(value);
  };

  const addFavourite = (value) => {
    props.saveFavourite(value);
  };

  const suffix = <ModalWindow addFavourite={addFavourite} />;
  return (
    <div className="search">
      <Space direction="vertical">
        <Title level={2}>Поиск видео</Title>
        <Search
          placeholder="Что хотите посмотреть?"
          enterButton="Найти"
          size="large"
          suffix={suffix}
          style={{ width: 686, height: 52 }}
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

const mapDispatchToProps = {
  saveFavourite,
};

export default connect(null, mapDispatchToProps)(SearchPanel);
