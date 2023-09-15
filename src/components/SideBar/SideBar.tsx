import React, { useState } from "react";
import iconButton from "../../assets/iconBackward.png";
import iconSideBar from "../../assets/iconSideBar.svg";
import iconData from "../../assets/iconData.svg";
import iconAddFile from "../../assets/iconAddFile.svg";
import iconTv from "../../assets/iconTV.svg";
import iconSelectOpen from "../../assets/iconSelectOpen.svg";
import iconSelectClose from "../../assets/iconSelectClose.svg";
import {selectDataItem,selectDataDashBoard} from "../../constants/sideBarConstants"


function SideBar() {
  const [dataItemState, setDataItemState] = useState<boolean>(false);
  const [dashBoardState, setDashBoardState] = useState<boolean>(false);

  const handleDataItemClick = () => {
    setDataItemState(!dataItemState);
  };
  const handleDashBoardClick = () => {
    setDashBoardState(!dashBoardState);
  };
 
  return (
    <div className="bg-white justify-between flex flex-col p-4 w-[390px] h-[900px] border-t-2">
      <div>
        {" "}
        <button>
          <img src={iconButton} />
        </button>
        <div className="flex border-b-2 items-center">
          <img className="w-[16px] h-[20px]" src={iconSideBar} />
          <p className="ml-2 my-6 text-sm">Главная</p>
        </div>
        <div>
          <div className="flex my-6 w-[312px]">
            <img className="w-[16px] h-[20px]" src={iconAddFile} />
            <div className="flex flex-col ml-2 text-xs  w-full ">
              <div className="flex items-center  w-full justify-between">
                <p className="mb-2">Менеджер данных</p>
                <button  className="mr-[5px]"onClick={handleDataItemClick}>
                  {dataItemState ? (
                    <img src={iconSelectOpen} />
                  ) : (
                    <img src={iconSelectClose} />
                  )}
                </button>
              </div>

              {selectDataItem.map((item) => {
                return dataItemState ? (
                  <a className="mb-2" key={item.id}>
                    {item.name}
                  </a>
                ) : null;
              })}
            </div>
          </div>

          <div className="flex w-[312px] mb-8 ">
            <img className="w-[16px] h-[20px]" src={iconData} />
            <div className="flex flex-col ml-2 text-xs w-full">
              <div className="flex items-center w-full justify-between">
                <p className="mb-2">Дашборды</p>
                <button  className="mr-[5px]" onClick={handleDashBoardClick}>
                  {dashBoardState ? (
                    <img src={iconSelectOpen} />
                  ) : (
                    <img src={iconSelectClose} />
                  )}
                </button>
              </div>
              {selectDataDashBoard.map((item) => {
                return dashBoardState ? (
                  <a className="mb-2" key={item.id}>
                    {item.name}
                  </a>
                ) : null;
              })}
            </div>
          </div>
          <div className="flex items-center">
            <img src={iconTv} />
            <a className="ml-2 text-xs text-blue-500">Презентер</a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[10px]">
          <p>
            ИСДР<span className="text-[10px] text-slate-500"> v 1.0.0</span>
          </p>
          <p className="text-[10px] text-slate-500">Дата обновления: </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
