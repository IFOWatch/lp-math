import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import Pair from "./components/Pair"
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col } from 'react-bootstrap'

class App extends Component {

  componentDidMount() {
    this.loadBlockchainData()
    this.getBNBPrice() 
  }

  async getBNBPrice() {
      const bnbPriceUrl = "https://api.binance.com/api/v3/avgPrice?symbol=BNBBUSD"
      fetch(bnbPriceUrl).then(res => res.json()).then(json => {
        console.log(json)
        this.setState({ bnbPrice: parseFloat(json.price) })
      })
  }

  async loadBlockchainData() {
    const web3 = new Web3("https://bsc-dataseed.binance.org/")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { bnbPrice: '[loading from binance...]' }
  }

  render() {
    return (
      <div className="container">
        <h1>BSC PancakeSwap LP Math</h1>
        <p>BNB price: {this.state.bnbPrice}</p>
        <ul>
          <Pair />
          <Pair />
          <Pair />
        </ul>
        <Button variant="success">Add new LP</Button>
      </div>
    );
  }
}

export default App;
