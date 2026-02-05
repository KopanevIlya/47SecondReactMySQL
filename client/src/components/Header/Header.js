import React from "react";
import { FaBars, FaPhone, FaShoppingCart, FaLocationArrow } from "react-icons/fa";
import "./Header.css";
import {useNavigate} from "react-router-dom"





const Header = () => {
  
  const navigate = useNavigate();
  return  (
 
  <header className="header">
    <div className="header__top">
      <div className="header__logo-block">
        <img src="/Group.png" alt="ОфисДирект" className="header__logo" />
      </div>
      <input
        type="text"
        placeholder="Название модели или артикул"
        className="header__search"
      />
      <div className="header__contacts">
        <div className="header__phone">
          <FaPhone className="header__phone-icon" />
          <span>+7 495 221-06-75</span>
        </div>
        <button className="header__callback">Заказать звонок</button>
      </div>
    </div>
    <div className="header__bottom">
      <div className="header__menu">
        <button className="header__catalog">
          <FaBars /> Каталог
        </button>
        <a href="#" className="header__link">О продукте</a>
        <a href="#" className="header__link">Отзывы</a>
        <a href="#" className="header__link">Доставка и оплата</a>
        <a href="#" className="header__link">Контакты</a>
      </div>
      <div className="header__actions">
        <div className="header__city">
          <FaLocationArrow />
          <span>Москва</span>
        </div>
        <div className="header__cart" onClick={()=> navigate('/cart')}>
          <FaShoppingCart />
          <span>Моя корзина</span>
          <span className="header__cart-count">+1</span>
        </div>
      </div>
    </div>
  </header>
);
}

export default Header;

