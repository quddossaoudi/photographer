import React from 'react'
import css from "./SectionHeader.module.css"

export default function SectionHeader({title}) {
  return (
    <h6 className={css.sectionHeader} data-scroll-section>{title}</h6>
  )
}
