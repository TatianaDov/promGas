import React from "react";
import iconPlay from "../../assets/iconPlay.svg";
import buttonDlete from "../../assets/buttonDelete.svg";
import buttonUpdate from "../../assets/buttonUpdate.svg";
import imageDefault from "../../assets/imageDefault.png"
function Frame() {
  return (
    <div className="bg-white w-full my-4 mr-4">
      <div className="flex mx-4 mt-4 justify-between">
        <button className="bg-slate-100 text-slate-400 flex w-[189px] h-[32px] items-center pl-[16px] text-sm rounded">
          <img className="mr-[12px]" src={iconPlay} />
          Запустить просмотр
        </button>
        <div>
          <button className="mr-[12px]">
            <img src={buttonUpdate} />
          </button>
          <button>
            <img src={buttonDlete} />
          </button>
        </div>
      </div>
      <div className="h-[94%] flex flex-col justify-center items-center">
        <img className="w-[420px] " src={imageDefault}/>
        <h3 className="text-2xl mt-[24px] mb-[8px]">Здесь пока ничего нет</h3>
        <p className="text-base text-slate-400">Будьте первым,добавьте выступление</p>
      </div>
    </div>
  );
}

export default Frame;
