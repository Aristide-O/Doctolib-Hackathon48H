import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <a href='https://www.doctolib.fr/' target="_blank" rel="noopener noreferrer" ><img src='https://upload.wikimedia.org/wikipedia/commons/1/19/Logo_Doctolib.svg' alt='logo doctolib'/></a>
      </div>
      <div className='footer-names'>
        <p className='footer-title'>Created by :</p>
        <div className='name'>
          <p>Aristide OUEDRAOGO</p>
        </div>
        <div className='name'>
          <p>Mohamed ABIDI</p>
        </div>
        <div className='name'>
          <p>Loukman BAÏSM</p>
        </div>
        <div className='name'>
          <p>Mohamed LABABIDI</p>
        </div>
        <div className='name'>
          <p>Walid MAHERSIA</p>
        </div>
      </div>
      <div className='footer-logo'>
        <a href='https://www.wildcodeschool.com/fr-FR' target="_blank" rel="noopener noreferrer" ><img src='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png' alt='logo wcs'/></a>
      </div>
    </div>
    )
}

export default Footer

