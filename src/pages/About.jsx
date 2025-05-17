import React, { useEffect, useState } from 'react';
import '../assets/css/About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__about">
            <h1 className={`about__title animate-on-scroll ${isVisible ? 'visible' : ''}`}>ABOUT</h1>
            <h2 className={`about__name animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              TETSUHIRO MUNEYUKI
              <span className={`about__name-position animate-on-scroll ${isVisible ? 'visible' : ''}`}>WEB DESIGNER</span>
            </h2>
            <p className={`about__sentence animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              1990年、愛媛県今治市生まれ。<br /><br />
              
              これまでにフロントエンドエンジニアとして、<br className="line-break" />
              PHP、Vue.js (Options API)、JavaScript、GASなどを駆使し、<br className="line-break" />
              数多くのプロジェクトを経験。<br /><br />

              現在、大学に通いながら、<br className="line-break" />
              React、Vue.js（Composition API）、Javaの技術力を向上中。<br /><br />

              短期的にはフロントエンドエンジニアとして技術を極め、<br className="line-break" />
              長期的にはジェネラリストとして幅広く活躍したいと考えています。 
              <br /><br />     

              ※このページはReactで作られています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
