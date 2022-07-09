import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="../../assets/img/logo.png" alt="logo" />
        </div>
        <nav className="header__nav">
          <NavLink exact to="/" activeClassName="is-active">
            Спец техника
          </NavLink>
          <NavLink to="#" activeClassName="is-active">
            Запчасти
          </NavLink>
          <NavLink to="/service" activeClassName="is-active">
            Услуги сервиса
          </NavLink>
          <NavLink to="#" activeClassName="is-active">
            Услуги консалтинга
          </NavLink>
          <NavLink to="#" activeClassName="is-active">
            Контакты
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
