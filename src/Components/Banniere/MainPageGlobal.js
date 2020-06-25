import React from 'react';
import  DoctoMobileImg from "../Banniere/DoctoMobileImg.jpg"
import  DoctoImgBannière from "../Banniere/DoctoBannièreDesktop.png"
import "./MainPageGlobal.css"

const MainPageGlobal = ()=> {
    
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