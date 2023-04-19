import React from 'react'
import css from './Featured.module.css'
import photos from '../utils/data'
function Featured() {
  const [firstUrl, secondUrl] = photos
  return (
    <section className= {css.featuredSection}>
    <div className={css.featuredRowLayout}>
    <h6>green</h6>
    <img src ={firstUrl}/>
   </div>
  <div className={css.featuredColumnLayout}>
   <h6>lily</h6>
   <img src={secondUrl}/>
      </div>
    </section>
  )
}

export default Featured