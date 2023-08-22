import FacebookIcon from '../../assets/icons/facebook.svg'
import LinkedinIcon from '../../assets/icons/Vector(4).svg'
import InstagramIcon from '../../assets/icons/Vector(3).svg'
import YoutubeIcon from '../../assets/icons/Vector(5).svg'
import VisaIcon from '../../assets/icons/Vector(2).svg'
import MastercardIcon from '../../assets/icons/Vector (1).svg'

import VTEXImage from '../../assets/images/logo footer.png'
import MaeztraImage from '../../assets/images/[2019-05]-Maeztra---Logo----cor.png'

import './style.scss'

function Footer() {
  return (
    <div className="maeztra-footer">
      <div className="maeztra-footer-columns">
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
      <div className="maeztra-footer-bottom">
        <div className="maeztra-footer-bottom-images">
            <img src={FacebookIcon} alt="Facebook Icon" />
            <img src={LinkedinIcon} alt="Linkedin Icon" />
            <img src={InstagramIcon} alt="Instagram Icon" />
            <img src={YoutubeIcon} alt="Youtube Icon" />
        </div>
        <div className="maeztra-footer-bottom-images">
            <img src={VisaIcon} alt="Visa Icon" />
            <img src={MastercardIcon} alt="Mastercard Icon" />
            <img src={VisaIcon} alt="Visa Icon" />
            <img src={MastercardIcon} alt="Mastercard Icon" />
        </div>
        <div className="maeztra-footer-bottom-images">
            <div>
              <div>
                <span>Powered by</span>
                <img src={VTEXImage} alt="VTEX Logo" />
              </div>
              <div>
                <span>Developed by</span>
                <img src={MaeztraImage} alt="Maeztra Logo" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer