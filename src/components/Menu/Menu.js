import React from "react";
import { Menu as Mn, MenuItem, MenuButton } from "@szhsin/react-menu";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import { Home , PostAdd ,CloudUpload, Settings} from "@material-ui/icons";
import "@szhsin/react-menu/dist/index.css";
import "./Menu.scss";

const Menu = () => {
  return (
    <Mn
      className="micons"
      menuButton={
        <MenuButton >
          <AccountCircleSharpIcon className="menu"  />
          Sign in
        </MenuButton>
      }
    >
      <MenuItem >
      <Home/>
        {/* <HomeIcon  /> */}
        <i className='app-i'>
          <a href="https://nest.com/">My nest home </a>
        </i>
      </MenuItem>
      <MenuItem>
        <PostAdd />
        <i className='app-i'>
          <a href="https://clck.ru/Su7zJ">Order status</a>
        </i>
      </MenuItem>
      <MenuItem>
        <CloudUpload />
        <i className='app-i'>
          <a href="https://clck.ru/Su7y5">Subscriptions</a>
        </i>
      </MenuItem>
      <MenuItem>
        <Settings />
        <i className='app-i'>
          <a href="https://clck.ru/Su7vv"> Settings </a>
        </i>
      </MenuItem>
    </Mn>
  );
};

export default Menu;
