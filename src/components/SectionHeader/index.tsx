import React from 'react'
import css from "./SectionHeader.module.css"

export default function SectionHeader({title}) {
  return (
    <h6 className={css.sectionHeader}>{title}</h6>
  )
}
