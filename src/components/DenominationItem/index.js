import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="list-values">
      <button type="button" className="button" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
