import '../../styles/blocks/hero.scss'
import TradeForm from '../partials/TradeForm'

function Hero() {
    return (
      <section className="block hero">
            <div className="wrapper">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <TradeForm />
                    </div>
                </div>
            </div>
      </section>
  )
}

export default Hero