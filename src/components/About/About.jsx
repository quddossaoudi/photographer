import React from 'react'
import SectionHeader from '../SectionHeader/index.tsx'
import css from './About.module.css'

function About() {
  return (
    <section className= {css.aboutSection} data-scroll-section>
      <SectionHeader title="about"/>
      <p id="headline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio dolorum eveniet ducimus fuga quasi nam beatae tempore facere libero placeat assumenda totam, quo nostrum non laboriosam exercitationem vitae? Dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio temporibus necessitatibus perspiciatis ipsam minus eligendi labore quas? Delectus repellendus debitis enim aspernatur dolor deleniti laudantium esse hic dolorum modi.
      </p>
    </section>
  )
}

export default About