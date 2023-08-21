import CommaLogo from '../../assets/images/Qoc0YF7.png.png'
import MelissaLogo from '../../assets/images/cHLLxR4.png.png'
import Forever21Logo from '../../assets/images/JOTNQgl.png.png'
import ZaraLogo from '../../assets/images/PN0nOAY.png.png'
import AnnTylorLogo from '../../assets/images/qZ1WvYA.png.png' 

import './style.scss'

function Partnerships() {
  return (
    <div className="maeztra-partnerships">
      <h2>Marcas Parceiras</h2>

      <div className="maeztra-partnerships-images">
        <img src={CommaLogo} alt="Comma Logo" />
        <img src={MelissaLogo} alt="Melissa Logo" />
        <img src={Forever21Logo} alt="Forever 21 Logo" />
        <img src={ZaraLogo} alt="Zara Logo" />
        <img src={AnnTylorLogo} alt="Ann Tylor Logo" />
      </div>
    </div>
  )
}

export default Partnerships