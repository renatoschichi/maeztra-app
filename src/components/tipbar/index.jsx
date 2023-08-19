import React, { useState } from "react"

import EarthIcon from '../../assets/icons/Tipbar05.svg'
import StockIcon from '../../assets/icons/Tipbar04.svg'
import ChangeIcon from '../../assets/icons/Tipbar03.svg'
import PromotionIcon from '../../assets/icons/Tipbar02.svg'
import DeliveryIcon from '../../assets/icons/Tipbar01.svg'

import './style.scss'

const tipbar = [
  {
    image: EarthIcon,
    span: 'Produtos importados',
    p: 'Produtos de Alta Qualidade'
  },
  {
    image: StockIcon,
    span: 'Estoque no Brazil',
    p: 'Produtos mais perto de você!'
  },
  {
    image: ChangeIcon,
    span: 'Trocas Garantidas',
    p: 'Trocas em até 48 horas, vejas as regras'
  },
  {
    image: PromotionIcon,
    span: 'Ganhe 5% off',
    p: 'Pagando à vista no Cartão'
  },
  {
    image: DeliveryIcon,
    span: 'Frete Grátis',
    p: 'Em compras acima de R$ 499,00'
  }
]

function Tipbar() {
  const [products, setProducts] = useState(tipbar)

  return (
    <div className="maeztra-tipbar">
      <h2>Por que comprar na Maeztra?</h2>
      <div className="maeztra-tipbar-items">

        {products.map((product) => (
          <div className="maeztra-tipbar-card">
            <img src={product.image} alt="Maeztra Tipbar Icon" />
            <span>{product.span}</span>
            <p>{product.p}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Tipbar