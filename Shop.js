import React, { useState } from 'react'
import Footer from "./Footer";
import Items from "./Items";
import AbInfo from './AbInfo'
import ShowFullItem from "./ShowFullItem";
import Order from './Order';
import Home from './Home';
import Beauty from './Beauty';
import Item from "./Item";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} грн</p>
  </div>)
}
const showNothing = () => {
  return ( <div className='empty'>
      <h2>Корзина пуста</h2>
  </div>)
}

export class Shop extends React.Component {
  render() {
    return (
    <div>
      <div className='shop'>
      <div className='catalog'>Каталог</div>
      <div className='categories-1'>
        <Link className='category-1' to="beauty">
          <p>Красота и уход</p>
        </Link>
        <Link className='category-2' to="beauty">
            <p>Премием косметика</p>
        </Link>
        <Link className='category-3' to="beauty">
          <p>Товары для детей</p>
        </Link>
        <Link className='category-4' to="beauty">
          <p>Текстиль</p>
        </Link>
        <Link className='category-5' to="beauty">
          <p>Cредства для стирки </p>
        </Link>
        </div>
        <div className='categories-2'>
        <Link className='category-6' to="beauty">
          <p>Чистящие средства </p> 
        </Link>
        <Link className='category-7' to="beauty">
          <p>Швабры</p>
        </Link>
        <Link className='category-8' to="beauty">
          <p>БАДы</p>
        </Link>
        <Link className='category-9' to="beauty">
          <p>Гигиена</p>
        </Link>
        <Link className='category-10' to="beauty">
          <p>Функциональное питание </p>
        </Link>
      </div>
        <Routes>
            <Route path='beauty/*' element={<Beauty />} />
        </Routes>
      </div>
      </div>
    )
  }
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem : !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders:[...this.state.orders, item] })
  }
}


export default Shop