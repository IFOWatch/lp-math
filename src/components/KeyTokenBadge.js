import React from "react"
import { Badge } from 'react-bootstrap'

const buttonStyle = {
    marginLeft: '5px',
    marginRight: '5px'
}

class KeyTokenBadge extends React.Component {
    constructor(props) {
      super(props)
      this.variant = (props.name === "BNB") ? "warning" : "secondary"
      this.name = props.name
      this.state = {price: "(loading...)", name: this.name}
    }

    componentDidMount() {
        if (this.name === "BNB") {
            this.getBNBPrice()
            setInterval(() => { this.getBNBPrice() }, 5000);
        } else if (this.name === "BUSD") {
            this.getBUSDPrice()
            setInterval(() => { this.getBUSDPrice() }, 5000);
        }
    }

    async getBNBPrice() {
        const bnbPriceUrl = "https://api.binance.com/api/v3/avgPrice?symbol=BNBBUSD"
        fetch(bnbPriceUrl).then(res => res.json()).then(json => {
            let newPrice = parseFloat(json.price).toFixed(2)
            this.setState({ price: newPrice }, () => {
                console.log("updating data")
                this.props.updateData(newPrice)
            })
        })
    }

    async getBUSDPrice() {
        let newPrice = 1
        this.setState({ price: newPrice }, () => {
            this.props.updateData(newPrice)
        })
    }
  
    render() {
      return (
        <span>
            <Badge variant={this.variant} style={buttonStyle}>{this.name}: ${this.state.price}</Badge>
        </span>
      );
    }
  }

export default KeyTokenBadge;