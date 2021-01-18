import React from "react";
import { Menu } from "antd";
import logoIcon from "../assets/image/sibdev-logologo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Menu style={{ color: "#1390e5" }} mode="horizontal">
        {<img src={logoIcon} alt={"cover"} />}
        <Menu.Item key="1">
          <NavLink to={"/search-panel"}>Поиск</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={"/favourite"}>Избранное</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to={"/login"}>Вход</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
