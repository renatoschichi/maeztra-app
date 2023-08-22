import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'

import BgNewsletter from '../../assets/images/bg-newsletter.jpg'
import EmailIcon from '../../assets/icons/newsletter-mail-icon.svg'
import SendIcon from '../../assets/icons/.svg'

import 'react-toastify/dist/ReactToastify.css'
import './style.scss'

function ModalNewsletter() {
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000);

    return () => clearTimeout(timer)
  }, [])

  const handleSendEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      toast.error('Por favor, insira um e-mail válido.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      return
    }

    setTimeout(() => {
      toast.success('E-mail enviado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setEmail('')
    }, 1000)
  }

  return (
    <>
      {isOpen && (
    <div className="maeztra-modal-newsletter">
      <div className="maeztra-modal-newsletter-image">
        <img src={BgNewsletter} alt="Newsletter Img" />
      </div>
      <div className="maeztra-modal-newsletter-content">
        <h4 onClick={() => setIsOpen(false)}>FECHAR</h4>
        <img src={EmailIcon} alt="Email Icon" />
        <p>Bem Vindo à MAEZTRA</p>
        <span>Receba em Primeira mão</span>
        <span className="bold">desconto e ofertas exclusivas</span>
        <InputMask
          mask=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Digite seu e-mail"
        />
        <button className="maeztra-btn" onClick={handleSendEmail}>
          Enviar
          <img src={SendIcon} alt="Send Icon" />
        </button>
      </div>
    </div>
    )}
    </>
  )
}

export default ModalNewsletter