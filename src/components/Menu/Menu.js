import React from "react";
import { Menu as Mn, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Menu.scss";

const Menu = () => {
  return (
    <Mn
      className="micons"
      menuButton={
        <MenuButton>
          <AccountCircleSharpIcon className="menu" />
          Sign in
        </MenuButton>
      }
    >
      <MenuItem>
        <HomeIcon />
        <i>
          <a href="https://nest.com/">My nest home </a>
        </i>
      </MenuItem>
      <MenuItem>
        <PostAddIcon />
        <i>
          <a href="https://clck.ru/Su7zJ">Order status</a>
        </i>
      </MenuItem>
      <MenuItem>
        <CloudUploadIcon />
        <i>
          <a href="https://clck.ru/Su7y5">Subscriptions</a>
        </i>
      </MenuItem>
      <MenuItem>
        <SettingsIcon />
        <i>
          <a href="https://clck.ru/Su7vv"> Settings </a>
        </i>
      </MenuItem>
    </Mn>
  );
};

export default Menu;
