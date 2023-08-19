import Header from './components/header'
import Carousel from './components/carousel/index.jsx'
import Tipbar from './components/tipbar'
import Partnerships from './components/partnerships'

import carouselData from './data/carouselData.json'

import './global.scss'

function App() {
  return (
    <div>
      <Header />
      <Carousel data={carouselData.slides} />
      <Tipbar />
      <Partnerships />
    </div>
  )
}

export default App;