import React from 'react'
import { Link } from 'react-router-dom'
import css from './StartGame.module.css'


export const StartGame = () => {
  return (
    <section className={css.container}>
      <div className={css.wrapper}>
        <img className={css.img}/>
        <div className={css.wrapper_block}>
        <h1 className={css.title}>Who wants to be a millionaire?</h1>
        <Link to="/game" className={css.link}>
           Start
        </Link>
      </div>
      </div>
    </section>
  )
}
