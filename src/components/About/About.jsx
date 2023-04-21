import React, {useEffect, useRef,useState} from 'react'
import SectionHeader from '../SectionHeader/index.tsx'
import useOnScreen from "../hooks/useOnScreen";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import cn from "classnames";
import './style.scss'



function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
    className={cn("about-section", { "is-reveal": reveal })}
    data-scroll-section
  >
    <SectionHeader title="about" />
    <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      Flirty Flowers is a blog about flowers and the floral designers who make
      Flirty Flowers is a blog about flowers and the floral designers who make
      Flirty Flowers is a blog about flowers and the floral designers who make
    </p>
  </section>
  )
}

export default About