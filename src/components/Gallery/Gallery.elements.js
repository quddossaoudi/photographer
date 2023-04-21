import styled from "styled-components";

export const Div = styled.section`
  /* position: relative; */
  color: var(--light-chocolate);
  height: 100vh;
  overscroll-behavior: none;
  background-color: var(--almond-dark);

  .gallery-counter {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
    mix-blend-mode: difference;
    line-height: 16px;
    color: var(--light-chocolate);
    font-family: var(--ubuntu-font);
    font-weight: 600;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    display: inline-block;

    .divider {
      content: "";
      background-color: var(--white-antique);
      width: 6.25vw;
      margin: 7px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  .gallery {
    overscroll-behavior: none;
    height: 80vh;
    padding: 10vh 0;
    width: 400%;
    background-color: var(--almond-dark);
    display: flex;
    flex-wrap: nowrap;
  }
  .gallery-item {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .gallery-item-info {
    position: absolute;
    bottom: 10%;
    z-index: 1;
    transform: translateX(-20%);
    color: var(--almond-bg);

    &__title {
      line-height: 6vw;
      font-family: var(--poppins-font);
      font-weight: 600;
      font-size: 6vw;
      -webkit-font-smoothing: antialiased;
    }
    &__subtitle {
      position: relative;
      line-height: 6vw;
      font-family: var(--maragsa-font);
      color: transparent;
      font-weight: 400;
      font-size: 6vw;
      -webkit-text-stroke: 2px var(--almond-bg);
      -webkit-font-smoothing: antialiased;
    }
    &__category {
      position: relative;
      line-height: 24px;
      font-family: var(--poppins-font);
      font-weight: 400;
      font-size: 24px;
      margin-top: 2vh;
      -webkit-font-smoothing: antialiased;
    }
  }

  .gallery-item-wrapper {
    aspect-ratio: 16/9;
    height: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 200px;
    width: 100vw;
    will-change: transform;
    &.is-reveal {
      .gallery-item-image {
        transform: scale(1);
        filter: none;
      }
    }
  }

  .gallery-item-image {
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: scale(0.7);
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
  }
`;
