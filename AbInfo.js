import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <section className='about'>
      <div className='about-text'>Перспективы, которыми мы обладаем</div>
          <div className='conteiner'>
              <div className='about-1'>
                <h2>Маркетинг</h2>
                <p>Нового поколения</p>
              </div>
              <div className='about-2'>
                <h2>Дополнительный заработок</h2>
                <p>Уверенность в завтрашнем дне</p>
              </div>
              <div className='about-3'>
                <h2>Бизнес</h2>
                <p>Возможность быстрого старта </p>
              </div>
              <div className='about-4'>
                <h2>Пошаговая инструкция</h2>
                <p>Четкое руководство к действиям </p>
              </div>
          </div>
    <div className='conteiner-about'>
      <div className='about-logo'></div>
      </div>
    </section>
    )
  }
}

export default About