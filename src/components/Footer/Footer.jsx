import React from 'react'
import SectionHeader from '../SectionHeader/index.tsx'
import css from "./Footer.module.css"

function Footer() {
  return (
    <section className={css.footer} data-scroll-section>
      <SectionHeader title='Made in'/>
<h1 className={css.location} id='location-text'>Rio Di Janiro</h1>
    </section>
  )
}

export default Footer