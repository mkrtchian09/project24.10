import React, { Component, useState } from 'react'
import Items from './Items'
import ShowFullItem from './ShowFullItem'
import Shop from './Shop'
import Item from './Item'
import Order from './Order'

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

export class ScCos extends Component {
    constructor(props){
        super(props)
        this.state = {
          orders: [],
          length: 0,
          items: [
            {
              id: 1,
              title: '',
              img: 'aquamagic1.jpg',
              desc: 'Набор для ухода за телом',
              category: 'aquamagic',
              price: '1613'
            },
            {
              id: 2,
              title: 'NEGA MINI.',
              img: 'aquamagic2.jpg',
              desc: 'Набор для ухода за телом',
              category: 'aquamagic',
              price: '617'
            },
            {
              id: 3,
              title: 'LASKA MINI.',
              img: 'aquamagic3.jpg',
              desc: 'Набор для ухода за лицом, шеи и декольте',
              category: 'aquamagic',
              price: '617'
            },
          ],
          showFullItem: false,
          fullItem: {}
        }
        this.onShowItem = this.onShowItem.bind(this)
      }
  render() {
    return (
      <div>
        <Items onShowItem={this.onShowItem} items ={this.state.items} onAdd={this.addToOrder} />
        {this.state.showFullItem && 
        <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
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

export default ScCos