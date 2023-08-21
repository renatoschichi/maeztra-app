import EarthIcon from '../../assets/icons/Tipbar05.svg'
import StockIcon from '../../assets/icons/Tipbar04.svg'
import ChangeIcon from '../../assets/icons/Tipbar03.svg'
import PromotionIcon from '../../assets/icons/Tipbar02.svg'
import DeliveryIcon from '../../assets/icons/Tipbar01.svg'

import './style.scss'

function Tipbar() {
  return (
    <div className="maeztra-tipbar">
      <h2>Por que comprar na Maeztra?</h2>
      <div className="maeztra-tipbar-items">

        <div className="maeztra-tipbar-card">
          <img src={EarthIcon} alt="Maeztra Tipbar Icon" />
          <div className="maeztra-tipbar-card-text">
            <span>Produtos importados</span>
            <p>Produtos de Alta Qualidade</p>
          </div>
        </div>

        <div className="maeztra-tipbar-card">
          <img src={StockIcon} alt="Maeztra Tipbar Icon" />
          <div className="maeztra-tipbar-card-text">
            <span>Estoque no Brazil</span>
            <p>Produtos mais perto de você!</p>
          </div>
        </div>

        <div className="maeztra-tipbar-card">
          <img src={ChangeIcon} alt="Maeztra Tipbar Icon" />
          <div className="maeztra-tipbar-card-text">
            <span>Trocas Garantidas</span>
            <p>Trocas em até 48 horas, vejas as regras</p>
          </div>
        </div>

        <div className="maeztra-tipbar-card">
          <img src={PromotionIcon} alt="Maeztra Tipbar Icon" />
          <div className="maeztra-tipbar-card-text">
            <span>Ganhe 5% off</span>
            <p>Pagando à vista no Cartão</p>
          </div>
        </div>

        <div className="maeztra-tipbar-card">
          <img src={DeliveryIcon} alt="Maeztra Tipbar Icon" />
          <div className="maeztra-tipbar-card-text">
            <span>Frete Grátis</span>
            <p>Em compras acima de R$ 499,00</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Tipbar