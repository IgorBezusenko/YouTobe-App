import React from "react";
import { List } from "antd";
import { compose } from "redux";
import { connect } from "react-redux";

const Favourites = (props) => {
  console.log("data", props.data);
  return (
    <List
      size="large"
      bordered
      dataSource={props.data}
      renderItem={(item) => <List.Item>{item.text}</List.Item>}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.favourite.data,
  };
};

export default compose(connect(mapStateToProps, null))(Favourites);
