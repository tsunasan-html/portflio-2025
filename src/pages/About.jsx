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
              2021年7月にゴリラクリニック（SBC湘南美容外科グループ）に入社し、<br className="line-break" />
              Webサイト全般の保守運用および開発を担当。<br /><br />
              
              主にPHP,Vue.jsを使用したお問い合わせフォームの保守運用に従事し、<br className="line-break" />
              開発業務ではJS,GASを活用したフロントエンド開発などを経験。<br /><br />

              また、VPSサーバーへのSSH接続を通じてデータベースの構築、<br className="line-break" />
              Next.js,TypeScriptで開発されたWebサイトの保守運用にも携わり、<br className="line-break" />
              幅広い技術領域での業務を経験。<br /><br />

              現在は、React,Next.js,TypeScriptでの開発スキルを向上中。<br />
              ※このページはReactで作られています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
