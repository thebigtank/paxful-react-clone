import '../../styles/partials/tradeapp.scss'
import btcICO from '../../assets/bitcoin.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RegularButton from '../partials/RegularButton'

function TradeApp() {
    return (
        <div className="trade__app">
            <div className="form__group">
                <div className="top__grp">
                    <span className="label">buy</span>
                    <button className="btn switch-trade">
                        <span className="title">sell</span>
                        <i className="ico"><FontAwesomeIcon icon="fa-solid fa-angle-right" /></i>
                    </button>
                </div>
                <div className="crypto__selector">
                    <button className="btn selected__crypto">
                        <div className="coin">
                            <img src={btcICO} alt="btc ico" />
                            <span>bitcoin</span>
                        </div>
                        <i className="ico"><FontAwesomeIcon icon="fa-solid fa-angle-down" /></i>
                    </button>
                </div>
                <div className="crypto__rate">
                    <span className="amt">1 btc = </span>
                    <div className="grp">
                        <span className="rate__val">11,764.621.4 ngn</span>
                        <i className="ico"><FontAwesomeIcon icon="fa-solid fa-arrow-trend-up" /></i>
                    </div>
                </div>
            </div>
            <div className="form__group">
                <div className="top__grp">
                    <span className="label">pay via</span>
                </div>
                <div className="payment__selector">
                    <div className="selected__payment">
                        <span>Select payment method (350+)</span>
                        <RegularButton btnClassName="btn border__btn" title="Show all" />
                    </div>
                </div>
                <div className="payments__list">
                    
                </div>
            </div>
        </div>
  )
}

export default TradeApp