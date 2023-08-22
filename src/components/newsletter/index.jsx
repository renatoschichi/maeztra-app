import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './style.scss'

function Newsletter() {
  const [email, setEmail] = useState('')

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
    <div className="maeztra-newsletter">
      <label>Receba Nossa Newsletter</label>
      <div className="maeztra-input">
        <InputMask
          mask=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Digite seu e-mail"
        />
        <button className="maeztra-btn maeztra-btn-send" onClick={handleSendEmail}>
          Enviar
        </button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Newsletter