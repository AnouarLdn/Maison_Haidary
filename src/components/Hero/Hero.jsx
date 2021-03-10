import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron" style = {{background:"linear-gradient(to bottom, pink, yellow)"}}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || ''}{' '}
            <span className="text-color-main">{name || ''}</span>
            <br />
            {subtitle || ""}
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("Création de site vitrine")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Création de platforme E-Commerce")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(`Création de site "Click and Collect"`)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(`Création d'Application Mobile`)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Développement Web")
                    .start();
                }}/>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Découvrez nous'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
