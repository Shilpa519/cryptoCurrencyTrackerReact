import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrienciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="cryptocurrencies-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="currency-image"
            />
            <ul className="main-list">
              <div className="table-container">
                <p className="coin-type">Coin Type</p>
                <p className="usd">USD</p>
                <p className="euro">EURO</p>
              </div>
              <ul className="list-items-container">
                {currencyList.map(item => (
                  <CryptocurrencyItem key={item.id} currencyItem={item} />
                ))}
              </ul>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrienciesList
