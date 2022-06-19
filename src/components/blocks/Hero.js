import '../../styles/blocks/hero.scss'
import TradeApp from '../partials/TradeApp'

function Hero() {
    return (
      <section className="block hero">
            <div className="wrapper">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <TradeApp />
                    </div>
                </div>
            </div>
      </section>
  )
}

export default Hero