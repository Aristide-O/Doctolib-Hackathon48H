import React from 'react';
import  DoctoMobileImg from "/Users/ariomega/Desktop/Doctolib/Doctolib-Hackathon48H/src/images/DoctoMobileImg.jpg"
import  DoctoImgBannière from "/Users/ariomega/Desktop/Doctolib/Doctolib-Hackathon48H/src/images/DoctoBannièreDesktop.png"
import "./MainPageGlobal.css"

class MainPageGlobal extends React.Component {
render () {
    return (
        <div>
            <div>
                <img className="img-MainPageGlobalMobile" src={DoctoMobileImg} alt="image photo doctor"/>
                <img className="img-MainPageGlobalDesktop" src={DoctoImgBannière} alt="image photo doctor"/>
            </div>
        </div>
    )
}
}

export default MainPageGlobal