import '../../styles/partials/tradeform.scss'
import btcICO from '../../assets/bitcoin.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TradeForm() {
    return (
        <form action="">
            <div className="form__group">
                <div className="top__grp">
                    <label htmlFor="">buy</label>
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
                    <p>
                        <span className="amt">1 btc = </span>
                        <span className="rate__val">11,764.621.4 ngn</span>
                    </p>
                    <i className="ico"><FontAwesomeIcon icon="fa-solid fa-arrow-trend-up" /></i>
                </div>
            </div>
        </form>
  )
}

export default TradeForm