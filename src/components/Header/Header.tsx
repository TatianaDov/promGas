import React from "react";
import logo from "../../assets/logo.png";
import iconMail from "../../assets/IconMail.svg";
import avatar from "../../assets/Avatar.png";

function Header() {
  return (
    <div className="flex justify-between py-2 px-6">
      <div>
        <img src={logo} />
      </div>
      <div className="flex justify-between items-center">
        <select className="w-64 h-8 border-slate-400 bg-white border-2 rounded outline-none"></select>
        <img src={iconMail} className="w-8 h-8 mx-4" />
        <img src={avatar} className="w-8 h-8 mr-2" />
        <div>
          <h4 className="font-bold text-base">Роль пользователя</h4>
          <p className="text-xs">Доп.информация</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
