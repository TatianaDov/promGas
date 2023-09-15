import React from "react";
import iconAdd from "../../assets/iconAdd.svg";
function Menu() {
  return (
    <div className="bg-white m-4 max-w-[470px]">
      <div className="flex mt-[19px] justify-between mx-4">
        <p>Мои выступления</p>
        <button className="bg-sky-500 flex w-[189px] h-[32px] text-white items-center pl-[16px] rounded  text-sm">
          Новое выступление
          <img className="ml-[13px]"src={iconAdd} />
        </button>
      </div>
      <select className="w-[438px] h-[40px] bg-slate-400 mx-4 mt-[24px] rounded outline-none"></select>
    </div>
  );
}
export default Menu;
