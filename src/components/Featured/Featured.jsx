import React from 'react'
import photos from '../utils/data'
import "./style.scss";
import { useEffect, useRef } from "react";

function Featured() {
  const [firstUrl, secondUrl] = photos;
  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);

  useEffect(() => {
    const revealImageOnScroll = (ref) => {
      if (ref.current && ref.current.getBoundingClientRect().top <= window.innerHeight * 0.75) {
        ref.current.classList.add("is-reveal");
      }
    };

    window.addEventListener("scroll", () => {
      revealImageOnScroll(firstImgRef);
      revealImageOnScroll(secondImgRef);
    });

    return () => window.removeEventListener("scroll", revealImageOnScroll);
  }, []);

  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img ref={firstImgRef} src={firstUrl} alt="img" data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img ref={secondImgRef} src={secondUrl} alt="img" data-scroll />
      </div>
    </section>
  );
}


export default Featured