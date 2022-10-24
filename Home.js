import React, { Component } from 'react'
import Footer from "./Footer";
import AbInfo from './AbInfo'
import App from '../App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

export class Home extends Component {
  render() {
    return (
        <div>
        <div className='presentation'>
          <div className='presentation-text'>Широкий ассортимент товаров</div>
          <Link to="Shop"><button className='presentation-button'>
            <p>Перейти</p>
          </button></Link>
        </div>
        <AbInfo />
        {<Footer />}
        </div>
    )
  }
}

export default Home