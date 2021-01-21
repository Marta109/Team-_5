import React from "react";
import Menu from "../../components/Menu/Menu";
import "./Header.scss";
const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-txt">
        Nest.com has moved to the Google Store.
        <a href="https://store.google.com/us/category/google_nest?hl=en-US&GoogleNest">
          <b>&#160;Learn more &#160;➤</b>
        </a>
      </div>
      <div className="app-links">
        <a className="app-links" href="//nest.com/support/" data-test="support">
          Support
        </a>
        <Menu />
      </div>
      <div>
        <a href="//nest.com" className="logo" title="Nest" itemprop="url">
          nest
        </a>
      </div>
    </div>
  );
};

export default Header;
