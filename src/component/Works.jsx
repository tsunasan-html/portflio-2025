import React, { useState, useEffect } from 'react';
import '../assets/css/Works.css';
import { Link } from 'react-router-dom';

import works01 from '../assets/works01/img01.png';
import works02 from '../assets/works02/img01.png';
import works03 from '../assets/works03/img01.png';
import works04 from '../assets/works04/img01.png';
import  worksComingSoon from '../assets/coming-soon.png';


function Works() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const titleElement = document.querySelector('.content__title');
    const imageElements = document.querySelectorAll('.works_listItem_eyecatch');

    if (titleElement) titleObserver.observe(titleElement);
    imageElements.forEach((el) => {
      imageObserver.observe(el);
    });

    return () => {
      if (titleElement) titleObserver.unobserve(titleElement);
      imageElements.forEach((el) => {
        imageObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__works">
            <h1 className={`content__title ${isTitleVisible ? 'visible' : ''}`}>WORKS</h1>
            <ul className="works_list">
              <li className="works_listItem">
                <Link to="/works01" className="">
                  <img 
                    src={works01} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className="works_title">PRICING TOOLS</h2>
                  </div>
                </Link>
              </li>
              <li className="works_listItem">
                <Link target="_blank" to="https://gorilla.clinic/" className="">
                  <img 
                    src={works02} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className="works_title">I Worked Here</h2>
                  </div>
                </Link>
              </li>
              <li className="works_listItem">
                <Link to="/works" target="_blank" className="">
                  <img
                    src={worksComingSoon} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className="works_title">Comming Soon...</h2>
                  </div>
                </Link>
              </li>
              <li className="works_listItem">
                <Link to="/works" target="_blank" className="">
                  <img 
                    src={worksComingSoon} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className="works_title">Comming Soon...</h2>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Works;
