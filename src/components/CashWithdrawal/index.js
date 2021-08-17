import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    cash: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)

    return (
      <div className="App-container">
        <div className="card-container">
          <div className="head-part">
            <div className="logo">
              <p className="initial">{initial}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="Amount-Section">
            <p className="your-balance">Your Balance</p>
            <div>
              <h1 className="amount">{cash}</h1>
              <p className="desc">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
