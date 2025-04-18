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
              1990年、愛媛県今治市生まれ。<br />
              <br />
              2025年3月まで、ゴリラクリニック（SBC湘南美容外科グループ）にて、<br className="line-break" />
              Webサイト全般の保守運用および開発を担当。<br /><br />
              
              PHP、Vue.js (Option API)、Next.js、JavaScript、GASなどを駆使し、<br className="line-break" />
              数多くのプロジェクトを経験。<br /><br />

              現在、大学に通いながら、さらにスキルを磨くべく転職活動を行っており、<br className="line-break" />
              React、Next.js、TypeScriptを中心に技術力を向上させています。<br /><br />

              ※このページはReactで作られています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
