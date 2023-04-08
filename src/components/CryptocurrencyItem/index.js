import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props

  const {currencyLogo, currencyName, euroValue, usdValue} = currencyItem

  return (
    <li className="table-container">
      <img src={currencyLogo} alt={currencyName} className="logo" />
      <p className="coin-type">{currencyName}</p>
      <p className="usd">{usdValue}</p>
      <p className="euro">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
