import React from 'react';
import  DoctoMobileImg from "./DoctoMobileImg.jpg"
import  DoctoImgBannière from "./DoctoBannièreDesktop.png"
import "./MainPageGlobal.css"

const MainPageGlobal =() =>{
    return (
        <div>
            <div>
                <img className="img-MainPageGlobalMobile" src={DoctoMobileImg} alt="image photo doctor"/>
                <img className="img-MainPageGlobalDesktop" src={DoctoImgBannière} alt="image photo doctor"/>
            </div>
        </div>
    )

}

export default MainPageGlobal