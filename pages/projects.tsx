import Head from 'next/head';
import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

import styles from './projects.module.css';

import mixitup from "mixitup";

const HaileePortfolio = () => {
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window !== 'undefined') {
      // Dynamically import ScrollReveal and mixitup
      Promise.all([import('scrollreveal'), import('mixitup')]).then(([ScrollRevealModule, mixitupModule]) => {
        const ScrollReveal = ScrollRevealModule.default;
        const mixitup = mixitupModule.default;

        // Initialize ScrollReveal animations
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: true,
        });

        // Define your ScrollReveal animations here
        sr.reveal('.nav__menu', { delay: 100, scale: 0.1, origin: 'bottom', distance: '300px' });
        // ... more reveal calls

        // Initialize mixitup for filtering portfolio items
        mixitup('.work__container', {
          selectors: {
            target: '.work__card',
          },
          animation: {
            duration: 300,
          },
        });

        // Scroll Header Function
        const scrollHeader = () => {
          const header = document.getElementById('header');
          if (header) {
            if (window.scrollY >= 50) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header');
          }
        };

        // Add scroll event listener
        window.addEventListener('scroll', scrollHeader);

        // Cleanup function
        return () => {
          window.removeEventListener('scroll', scrollHeader);
          sr.clean('.nav__menu'); // Add other selectors as needed
        };
      });

      // Initialize Swiper
      new Swiper('.swiper-container', {
        // Swiper configuration
      });
    }
  }, []);


  return (
    <>
      <div className={styles.projectsWrapper}>
        <div className={styles.baseStyles}>
      <Head>
        <title>Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*=============== FAVICON ===============*/}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="assets/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="assets/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="assets/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#a789d4" />
      </Head>
      <header className={styles.header} id="header">
        <nav className={`${styles.nav} container`}>
          <a href="#" className={styles['nav__logo']}>
            Hailee
          </a>
          <div className={styles['nav__menu']}>
            <ul className={styles['nav__list']}>
              <li className={styles['nav__item']}>
                <a href="#home" className={styles['nav__link']}>
                  <i className={`${styles.bx} ${styles['bx-home']}`} />
                </a>
              </li>
              <li className={styles['nav__item']}>
                <a href="#about" className={styles['nav__link']}>
                  <i className={`${styles.bx} ${styles['bx-user']}`} />
                </a>
              </li>
              <li className={styles['nav__item']}>
                <a href="#skills" className={styles['nav__link']}>
                  <i className={`${styles.bx} ${styles['bx-book']}`} />
                </a>
              </li>
              <li className={styles['nav__item']}>
                <a href="#work" className={styles['nav__link']}>
                  <i className={`${styles.bx} ${styles['bx-briefcase-alt-2']}`} />
                </a>
              </li>
              <li className={styles['nav__item']}>
                <a href="#contact" className={styles['nav__link']}>
                  <i className={`${styles.bx} ${styles['bx-message-square-dots']}`} />
                </a>
              </li>
            </ul>
          </div>
          <i className={`${styles.bx} ${styles['bx-moon']} ${styles['change-theme']} ${styles['change-theme-button']}`} id="theme-button" />
        </nav>
      </header>

      <main className="main">
        {/*=============== HOME ===============*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <span className="home__greeting">Hello</span>
              <h1 className="home__name">Haliee Keys</h1>
              <h3 className="home__education">Frontend Developer</h3>
              <div className="home__button">
                <a download href="assets/pdf/hailee-Cv.pdf" className="button button--ghost">Download CV</a>

                <a href="#about" className="button">
                  About
                </a>
              </div>
            </div>
            <div className="home__handle">
              <img src="assets/img/perfil.png" alt="" className="home__img" />
            </div>
            <div className="home__social">
              <a href="#" target="_blank" className="home__social-link">
                <i className="bx bxl-linkedin" />
              </a>
              <a href="#" target="_blank" className="home__social-link">
                <i className="bx bxl-github" />
              </a>
              <a href="#" target="_blank" className="home__social-link">
                <i className="bx bxl-dribbble" />
              </a>
            </div>
            <a href="#about" className="home__scroll">
              <i className="bx bx-mouse home__scroll-icon" />
              <span className="home__scroll-name">Scroll Down</span>
            </a>
          </div>
        </section>
        {/*=============== ABOUT ===============*/}
        <section className="about section" id="about">
          <span className="section__subtitle">My Intro</span>
          <h2 className="section__title">About Me</h2>
          <div className="about__container container grid">
            <img src="assets/img/about.jpg" alt="" className="about__img" />
            <div className="about__data">
              <div className="about__info">
                <div className="about__box">
                  <i className="bx bx-award about__icon" />
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">8 Years Working</span>
                </div>
                <div className="about__box">
                  <i className="bx bx-briefcase-alt about__icon" />
                  <h3 className="about__title">Completed</h3>
                  <span className="about__subtitle">48+ Projects</span>
                </div>
                <div className="about__box">
                  <i className="bx bx-support about__icon" />
                  <h3 className="about__title">Support</h3>
                  <span className="about__subtitle">Online 24/7</span>
                </div>
              </div>
              <p className="about__description">
                Frontend Developer. I create web pages with UI / UX user interfaces,
                I have years of experience and many clients are happy with the woek
                i did.
              </p>
              <a href="#contact" className="button about__button-contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>
        {/*=============== SKILLS ===============*/}
        <section className="skills section" id="skills">
          <span className="section__subtitle">My Abilities</span>
          <h2 className="section__title">My Experience</h2>
          <div className="skills__container container grid">
            <div className="skills__content">
              <h3 className="skills__title">Frontend Development</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">CSS/SCSS</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Javascript</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__content">
              <h3 className="skills__title">Backend Development</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Node JS</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">MySQL</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bxs-badge-check" />
                    <div>
                      <h3 className="skills__name">Mongo DB</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=============== SERVICES ===============*/}
        <section className="services section">
          <span className="section__subtitle">My Services</span>
          <h2 className="section__title">What I Offer</h2>
          <div className="services__container container grid">
            <div className="services__card">
              <div className="serv">
                <h3 className="services__title">
                  Product <br /> Designing
                </h3>
                <span className="services__button">
                  See More <i className="bx bx-right-arrow services__icon" />
                </span>
              </div>
              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close" />
                  <h3 className="services__modal-title">Product Designing</h3>
                  <p className="services__modal-description">
                    I design and develop the consumer products with creative ability
                    and hands-on approach which stisfies the customers and markets
                    needs and trends.
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I develop the user interfaces.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        Web Page design and development.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I create the UX element interactions.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I position your company brand.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        Create modern 3-D experiences.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__card">
              <h3 className="services__title">
                UI/UX <br /> Designing
              </h3>
              <span className="services__button">
                See More <i className="bx bx-right-arrow services__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close" />
                  <h3 className="services__modal-title">UI/UX Designing</h3>
                  <p className="services__modal-description">
                    I design and develop the consumer products with creative ability
                    and hands-on approach which stisfies the customers and markets
                    needs and trends.
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I develop the user interfaces.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        Web Page design and development.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I create the UX element interactions.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I position your company brand.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        Create modern 3-D experiences.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__card">
              <h3 className="services__title">
                Visual <br /> Designing
              </h3>
              <span className="services__button">
                See More <i className="bx bx-right-arrow services__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close" />
                  <h3 className="services__modal-title">Visual Designing</h3>
                  <p className="services__modal-description">
                    I design and develop the consumer products with creative ability
                    and hands-on approach which stisfies the customers and markets
                    needs and trends.
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I develop the user interfaces.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        Web Page design and development.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I create the UX element interactions.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        I position your company brand.
                      </p>
                    </li>
                    <li className="services__modal-item">
                      <i className="bx bx-check-circle" />
                      <p className="services__modal-info">
                        Create modern 3-D experiences.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=============== WORK ===============*/}
        <section className="work section" id="work">
          <span className="section__subtitle">My Portfolio</span>
          <h2 className="section__title">Recent Works</h2>
          <div className="work__filters">
            <span className="work__item active-work" data-filter="all">
              All
            </span>
            <span className=" work__item" data-filter=".web">
              Web
            </span>
            <span className=" work__item" data-filter=".movil">
              Movil
            </span>
            <span className=" work__item" data-filter=".design">
              Design
            </span>
          </div>
          <div className="work__container container grid">
            <div className="work__card mix web">
              <img src="assets/img/work1.jpg" alt="" className="work__img" />
              <h3 className="work__title">Web Design</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon" />
              </a>
            </div>
            <div className="work__card mix movil">
              <img src="assets/img/work2.jpg" alt="" className="work__img" />
              <h3 className="work__title">App Movil</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon" />
              </a>
            </div>
            <div className="work__card mix design">
              <img src="assets/img/work3.jpg" alt="" className="work__img" />
              <h3 className="work__title">Brand Design</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon" />
              </a>
            </div>
            <div className="work__card mix web">
              <img src="assets/img/work4.jpg" alt="" className="work__img" />
              <h3 className="work__title">Web Design</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon" />
              </a>
            </div>
            <div className="work__card mix movil">
              <img src="assets/img/work5.jpg" alt="" className="work__img" />
              <h3 className="work__title">App Movil</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon" />
              </a>
            </div>
          </div>
        </section>
        {/*=============== TESTIMONIALS ===============*/}
        <section className="testimonial section">
          <span className="section__subtitle">My clients say</span>
          <h2 className="section__title">Testimonials</h2>
          <div className="testimonial__container container swiper">
            <div className="swiper-wrapper">
              <div className="testimonial__card swiper-slide">
                <img
                  src="assets/img/testimonial1.png"
                  alt=""
                  className="testimonial__img"
                />
                <h3 className="testimonial__name">Jhon Doe</h3>
                <p className="testimonial__description">
                  A really good job, all aspects of the project were done well. Very
                  creative and thoughtful. I was very impressed and would recommend
                  this to anyone.
                </p>
              </div>
              <div className="testimonial__card swiper-slide">
                <img
                  src="assets/img/testimonial2.png"
                  alt=""
                  className="testimonial__img"
                />
                <h3 className="testimonial__name">Ada Hill</h3>
                <p className="testimonial__description">
                  A really good job, all aspects of the project were done well. Very
                  creative and thoughtful. I was very impressed and would recommend
                  this to anyone.
                </p>
              </div>
              <div className="testimonial__card swiper-slide">
                <img
                  src="assets/img/testimonial3.png"
                  alt=""
                  className="testimonial__img"
                />
                <h3 className="testimonial__name">Jessica Park</h3>
                <p className="testimonial__description">
                  A really good job, all aspects of the project were done well. Very
                  creative and thoughtful. I was very impressed and would recommend
                  this to anyone.
                </p>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </section>
        {/*=============== CONTACT ===============*/}
        <section className="contact section" id="contact">
          <span className="section__subtitle">Get in touch</span>
          <h3 className="section__title">Contact Me</h3>
          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title contact__title-info">Talk to me</h3>
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bx-mail-send contact__card-icon" />
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">user@gmail.com</span>
                  <a
                    href="mailto:example@domain.com"
                    target="_blank"
                    className="contact__button" rel="noreferrer"
                  >
                    Write Me{" "}
                    <i className="bx bx-right-arrow contact__button-icon" />
                  </a>
                </div>
                <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon" />
                  <h3 className="contact__card-title">Whatsapp</h3>
                  <span className="contact__card-data">6969696969</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=+916969696969&text=Hey there!"
                    target="_blank"
                    className="contact__button" rel="noreferrer"
                  >
                    Write Me{" "}
                    <i className="bx bx-right-arrow contact__button-icon" />
                  </a>
                </div>
                <div className="contact__card">
                  <i className="bx bxl-twitter contact__card-icon" />
                  <h3 className="contact__card-title">Twitter</h3>
                  <span className="contact__card-data">usertw</span>
                  <a
                    href="https://twitter.com/usertw"
                    target="_blank"
                    className="contact__button" rel="noreferrer"
                  >
                    Write Me{" "}
                    <i className="bx bx-right-arrow contact__button-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact__content">
              <h3 className="contact__title contact__title-form">
                Write Me your Message
              </h3>
              <form action="" className="contact__form">
                <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">
                    Mail
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div contact__form-area">
                  <label htmlFor="" className="contact__form-tag">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Write your Message"
                    className="contact__form-input "
                    defaultValue={""}
                  />
                </div>
                <button className="button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Hailee</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li className="footer__item">
              <a href="#work" className="footer__link">
                Work
              </a>
            </li>
            <li className="footer__item">
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="bx bxl-facebook footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="bx bxl-twitter footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="bx bxl-linkedin footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="bx bxl-instagram footer__social-icon" />
              </a>
            </li>
          </ul>
          <span className="footer__copy">© 2022 S44WN. All rights reserved.</span>
        </div>
      </footer>
        </div>
      </div>
    </>
  );
};

export default HaileePortfolio;
