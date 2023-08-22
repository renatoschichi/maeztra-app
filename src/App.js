import Header from './components/header'
import Carousel from './components/carousel/index.jsx'
import Tipbar from './components/tipbar'
import Partnerships from './components/partnerships'
import MostRequested from './components/most-requested/index'
import GenericBanner from './components/generic-banner/index'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

import carouselData from './data/carouselData.json'

import './global.scss'
import ModalNewsletter from './components/modal-newsletter'

function App() {
  return (
    <div>
      <ModalNewsletter />
      <Header />
      <Carousel data={carouselData.slides} />
      <Tipbar />
      <Partnerships />
      <MostRequested data={carouselData.mostRequestedCards} />
      <GenericBanner />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App