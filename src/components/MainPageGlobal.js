import React from 'react';
import  DoctoImg from "/Users/ariomega/Desktop/Doctolib/Doctolib-Hackathon48H/src/images/DoctoImg.jpg"
import "./MainPageGlobal.css"

class MainPageGlobal extends React.Component {
render () {
    return (
        <div>
            <div>
                <img className="img-MainPageGlobal" src={DoctoImg} alt="image photo doctor"/>
            </div>
        </div>
    )
}
}

export default MainPageGlobal