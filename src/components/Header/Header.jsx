import React from 'react'
import css from './Header.module.css'

function Header() {
  return (
    <section className={css.headerContainer}>
    <ul className={css.headerMenu}>
    <li>intro</li>
    <li>about</li>
    <li>featured</li>
    </ul>
<h1 id="header-text">Art Object</h1>
    </section>
  )
}

export default Header