import React from 'react';
import  DoctoMobileImg from "./DoctoMobileImg.jpg"
import  DoctoImgBannière from "./DoctoBannièreDesktop.png"
import "./MainPageGlobal.css"

const MainPageGlobal =() =>{
    return (
        <div>
            <div>
                <img className="img-MainPageGlobalMobile" src={DoctoMobileImg} alt="doctor"/>
                <img className="img-MainPageGlobalDesktop" src={DoctoImgBannière} alt="doctor"/>
            </div>
        </div>
    )

}

export default MainPageGlobal