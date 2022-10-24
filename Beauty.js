import React, { Component, useState } from 'react'
import Shop from './Shop';
import App from '../App';
import Items from './Items';
import ShowFullItem from './ShowFullItem';
import Item from './Item';
import ScCos from './ScCos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter
} from "react-router-dom";
  

export class Beauty extends Component {
    constructor(props){
        super(props)
        this.state = {
          orders: [],
          length: 0,
          items: [
            {
              id: 1,
              title: 'Nega',
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
  render(props) {
    return (
    <div>
        <div className='beauty-img'>
            <div className='beauty-text'>Красота и уход</div>
        </div>
        <div className='podcategory'>
            <Link to="sc_cos"><p>Уходовая косметика</p></Link>
            <p>Декоративная косметика</p>
            <p>Минеральная косметика </p>
        </div>
        <div className='podcategory'>
            <p>Nice Code</p>
            <p>Эфирные масла</p>
        </div>

        <Items onShowItem={this.onShowItem} items ={this.state.items} onAdd={this.addToOrder} />
        {this.state.showFullItem && 
        <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Routes>
            <Route path='sc_cos' element={<ScCos />}  />
            {/* <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} /> */}
        </Routes>
    </div>
    )
  }
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem : !this.state.showFullItem})
  }
}

export default Beauty