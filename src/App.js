import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import Pair from "./components/Pair"
import AppFooter from "./components/AppFooter"
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col } from 'react-bootstrap'
import KeyTokenBadge from './components/KeyTokenBadge';


const getEth = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    return window.ethereum.enable();
  }
  return false;
}

class App extends Component {

  constructor(props) {
    super(props)
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
    this.state = {
      mmConnected: false,
      account: "",
      accountDisplayable: "",
      bnbPrice: 0,
      busdPrice: 0,
      coinList: [] }
    this.handleBNBUpdate = this.handleBNBUpdate.bind(this);
  }

  componentDidMount() {
    // this.loadBlockchainData()
    // TODO: make this stuff work
    // this.loadCoinGeckoData()
  }

  async loadCoinGeckoData() {
    fetch("https://api.coingecko.com/api/v3/coins/list").then(res => res.json()).then(json => {
      this.setState({ coinList: json })
    })
  }

  async loadBlockchainData() {
    const accounts = await getEth();
    const accountDisplayable = `${accounts[0].substr(0, 6)}...${accounts[0].substr(-4)}`
    this.setState({account: accounts[0], accountDisplayable: accountDisplayable, mmConnected: true})
    /*
    const web3 = new Web3("https://bsc-dataseed.binance.org/")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    */
  }



  handleBNBUpdate = newPrice => {
    this.setState({bnbPrice: newPrice})
  }

  handleBUSDUpdate = newPrice => {
    this.setState({busdPrice: newPrice})
  }

  render() {
    const lBnbPrice = this.state.bnbPrice;
    const token0PerLP = 0.2;
    const token1PerLP = 0.8;
    const token0Name = "BOG";
    const token1Name = "BNB";
    const token0Contract = "0xd7b729ef857aa773f47d37088a1181bb3fbf0099";
    const token1Contract = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";

    const connectButton = this.state.mmConnected ?
    <Button className="float-right" variant="light" onClick={this.loadBlockchainData}>{this.state.accountDisplayable}</Button>:
    <Button className="float-right" variant="light" onClick={this.loadBlockchainData}>Connect to MetaMask</Button>;

    const mmConnected = this.state.mmConnected;

    return (
      <div className="container">
        <Row>
          <Col>
            <h1>BSC PancakeSwap LP Math</h1>
          </Col>
          {false &&
            <Col>
              {connectButton}
            </Col>
          }
        </Row>
        <p>
          Key tokens: {this.bnbBadge}
          <KeyTokenBadge name="BNB" updateData={this.handleBNBUpdate} />
          <KeyTokenBadge name="BUSD" updateData={this.handleBUSDUpdate} />
        </p>
        <ul>
          <Pair mmConnected={mmConnected} token0Name={token0Name} token1Name={token1Name} token0Contract={token0Contract} token1Contract={token1Contract} token1Price={lBnbPrice} />
        </ul>
        <Button disabled={true} variant="success" onClick={() => console.log("add")}>Add new LP -- coming soon</Button>
        <AppFooter />
      </div>
    );
  }
}

export default App;
