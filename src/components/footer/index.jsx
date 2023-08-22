import React, { useState } from 'react'

import FacebookIcon from '../../assets/icons/facebook.svg'
import LinkedinIcon from '../../assets/icons/Vector(4).svg'
import InstagramIcon from '../../assets/icons/Vector(3).svg'
import YoutubeIcon from '../../assets/icons/Vector(5).svg'
import VisaIcon from '../../assets/icons/Vector(2).svg'
import MastercardIcon from '../../assets/icons/Vector (1).svg'

import VTEXImage from '../../assets/images/logo footer.png'
import MaeztraImage from '../../assets/images/[2019-05]-Maeztra---Logo----cor.png'
import VTEXImageLight from '../../assets/images/logo footer-light.png'
import MaeztraImageLight from '../../assets/images/maeztra-logo-light.png'

import './style.scss'

function Footer() {
  const [columnInfo, setColumnInfo] = useState(false)
  const [columnAccount, setColumnAccount] = useState(false)
  const [columnFindUs, setColumnFindUs] = useState(false)

  return (
    <div className="maeztra-footer">

      <div className="maeztra-footer-columns-desktop">
        <div className="maeztra-footer-left">
          <span className="bold">Informações</span>
          <span>Quem Somos</span>
          <span>Prazo de Envio</span>
          <span>Trocas e Devoluções</span>
          <span>Promoções e Cupons</span>
        </div>
        <div className="maeztra-footer-middle">
          <span className="bold">Minha Conta</span>
          <span>Minha Conta</span>
          <span>Meus Pedidos</span>
          <span>Cadastre-se</span>
        </div>
        <div className="maeztra-footer-right">
          <span className="bold">Onde nos encontrar</span>
          <span>Lojas</span>
          <span>Endereço</span>
        </div>
      </div>

      <div className="maeztra-footer-columns-mobile">
        <div className="maeztra-footer-left">
          <div className="maeztra-footer-show-column">
            <span className="bold">Informações</span>
            <span className="bold maeztra-footer-toogle-btn" onClick={() => setColumnInfo(!columnInfo)}>
              {columnInfo ? "-" : "+"}
            </span>
          </div>
          {columnInfo && (
            <>
              <span>Quem Somos</span>
              <span>Prazo de Envio</span>
              <span>Trocas e Devoluções</span>
              <span>Promoções e Cupons</span>
            </>
          )}
        </div>
        <div className="maeztra-footer-middle">
          <div className="maeztra-footer-show-column">
            <span className="bold">Minha Conta</span>
            <span className="bold maeztra-footer-toogle-btn" onClick={() => setColumnAccount(!columnAccount)}>
              {columnAccount ? "-" : "+"}
            </span>
          </div>
          {columnAccount && (
            <>
              <span>Minha Conta</span>
              <span>Meus Pedidos</span>
              <span>Cadastre-se</span>
            </>
          )}
        </div>
        <div className="maeztra-footer-right">
        <div className="maeztra-footer-show-column">
          <span className="bold">Onde nos encontrar</span>
          <span className="bold maeztra-footer-toogle-btn" onClick={() => setColumnFindUs(!columnFindUs)}>
            {columnFindUs ? "-" : "+"}
          </span>
        </div>
          {columnFindUs && (
            <>
              <span>Lojas</span>
              <span>Endereço</span>
            </>
          )}
        </div>
      </div>
      <div className="maeztra-footer-bottom">
        <div className="maeztra-footer-bottom-images">
            <img src={FacebookIcon} alt="Facebook Icon" onClick={() => window.open('https://www.facebook.com/maeztraconsultoria/?locale=pt_BR', '_blank')} />
            <img src={LinkedinIcon} alt="Linkedin Icon" onClick={() => window.open('https://www.linkedin.com/company/maeztra/', '_blank')} />
            <img src={InstagramIcon} alt="Instagram Icon" onClick={() => window.open('https://www.instagram.com/maeztra_consultoria/?hl=pt-br', '_blank')} />
            <img src={YoutubeIcon} alt="Youtube Icon" onClick={() => window.open('https://www.youtube.com/@maeztra', '_blank')} />
        </div>
        <div className="maeztra-footer-bottom-images">
            <img src={VisaIcon} alt="Visa Icon" onClick={() => window.open('https://www.visa.com.br/', '_blank')} />
            <img src={MastercardIcon} alt="Mastercard Icon" onClick={() => window.open('https://www.mastercard.com.br/', '_blank')} />
            <img src={VisaIcon} alt="Visa Icon" onClick={() => window.open('https://www.visa.com.br/', '_blank')} />
            <img src={MastercardIcon} alt="Mastercard Icon" onClick={() => window.open('https://www.mastercard.com.br/', '_blank')} />
        </div>
        <div className="maeztra-footer-bottom-images">
            <div>
              <div onClick={() => window.open('https://vtex.com/', '_blank')}>
                <span>Powered by</span>
                <img src={VTEXImage} alt="VTEX Logo" className="maeztra-footer-image-dark" />
                <img src={VTEXImageLight} alt="VTEX Logo" className="maeztra-footer-image-light" />
              </div>
              <div onClick={() => window.open('https://maeztra.com/', '_blank')}>
                <span>Developed by</span>
                <img src={MaeztraImage} alt="Maeztra Logo" className="maeztra-footer-image-dark" />
                <img src={MaeztraImageLight} alt="VTEX Logo" className="maeztra-footer-image-light" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer