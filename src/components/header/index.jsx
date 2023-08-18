import Logo from '../../assets/images/logo-maeztra-novo.png'

import UserIcon from '../../assets/icons/user.svg'
import HeartIcon from '../../assets/icons/heart.svg'
import CartIcon from '../../assets/icons/shoppingbag.svg'
import DressIcon from '../../assets/icons/dress.svg'

import './style.scss'

function Header() {
  return (
    <div className="maeztra-header">

      <div className="maeztra-header-promotion-text">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>

      <div className="maeztra-header-content">
        <img src={Logo} alt="Maeztra Logo" onClick={() => window.location.reload()} />

        <div className="maeztra-input">
          <input
            type="text"
            placeholder="O Que Você Busca?"
          />
          <button className="maeztra-btn maeztra-btn-search">
            Buscar
          </button>
        </div>

        <div className="maeztra-header-buttons">
          <button className="maeztra-btn-account">
            <span>
              <img src={UserIcon} alt="User Icon" />
            </span>
            Minha conta
          </button>
          <button className="maeztra-btn-account">
            <span>
              <img src={HeartIcon} alt="Heart Icon" />
            </span>
            Minha conta
          </button>
          <button className="maeztra-btn-account">
            <span>
              <img src={CartIcon} alt="Cart Icon" />
            </span>
            Meu carrinho
          </button>
        </div>
      </div>

      <div className="maeztra-header-menu-items">
        <div>
          <button>
            <span>
              <img src={DressIcon} alt="User Icon" />
            </span>
            Novidades
          </button>
          <button>Vestidos</button>
          <button>Roupas</button>
          <button>Sapatos</button>
          <button>Lingerie</button>
          <button>Acessórios</button>
          <button>OUTLET</button>
        </div>
      </div>

    </div>
  )
}

export default Header