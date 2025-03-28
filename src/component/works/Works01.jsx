import React, { useEffect, useState } from 'react';
import '../../assets/css/WorksEach.css';
import Footer from '../Footer';

import img01 from '../../assets/images/works01/img01.png';
import img02 from '../../assets/images/works01/img02.png';
import img03 from '../../assets/images/works01/img03.png';

const images = [
  { src: img01, alt: "", className: "works_photoListItem--full", animate: "fadein scrollin" },
  { src: img02, alt: "", className: "works_photoListItem--full", animate: "fadein scrollin" },
  { src: img03, alt: "", className: "works_photoListItem--full", animate: "fadein scrollin" },
];

function Works01() {
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
          <section className="content__works_each">
            <h1 className={`content__title animate-on-scroll ${isVisible ? 'visible' : ''}`}>WORKS</h1>
            <h2 className={`works_each__name animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              PRICING TOOLS
              <span className={`works_each__name-position animate-on-scroll ${isVisible ? 'visible' : ''}`}>WEB DESIGNER< br/>FRONT-END DEVELOPMENT</span>
            </h2>
            <p className={`works_sentence animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              <strong>「WEB料金シミュレーションによる業務の効率化」</strong>
              <br />
              これまで料金計算は電卓による手作業だったが、ツール導入により、料金計算・割引適用・分割払いシミュレーションを一括で簡潔に処理できるように。
              これにより、カウンセラーはお客様への提案に専念できるようになり、業務効率が向上。<br />
              さらに、看護師は施術中にiPadを活用し、お客様が気になる他の商品についても即座に金額を提示可能に。この迅速な対応により、お客様への提案がスムーズに行われ、売上の向上にも貢献。
            </p>
            <ul className="works_photoList">
              <li className={`works_photoListItem works_photoListItem--full animate-on-scroll ${isVisible ? 'visible' : ''}`}>
                <h3>1.料金計算</h3>
                <img src={img01} alt="Image 1" className="fadein scrollin" />
                <p className="works_sentence">
                  ユーザーが選択したチェックボックスの料金を自動的に計算。<br />
                  割引や他施術の組み合わせを考慮した計算が可能。
                </p>
              </li>
              <li className={`works_photoListItem works_photoListItem--full animate-on-scroll ${isVisible ? 'visible' : ''}`}>
                <h3>2.割引適用</h3>
                <img src={img02} alt="Image 2" className="fadein" />
                <p className="works_sentence">
                  10%、20%など施術ごとに割引が可能。<br />
                  複数の割引適用後の合計金額も自動計算。
                </p>
              </li>
              <li className={`works_photoListItem works_photoListItem--full animate-on-scroll ${isVisible ? 'visible' : ''}`}>
                <h3>3.分割払いシミュレーション</h3>
                <img src={img03} alt="Image 3" className="fadein" />
                <p className="works_sentence">
                  ユーザーが希望する分割回数を選択すると、毎月の支払い額を表示。<br />
                  金利や手数料を加味した分割料金を計算。
                </p>
              </li>
              <li className={`works_photoListItem works_photoListItem--full animate-on-scroll ${isVisible ? 'visible' : ''}`}>
                <h3>4.クリニック以外では使用不可（アクセス制限）</h3>
                <p className="works_sentence">
                  クリニックのWiFiに接続している場合のみ、シミュレーションツールを利用可能。<br />
                  IPアドレスでアクセス制限を実施。
                </p>
              </li>
            </ul>

            <p className={`works_sentence animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              下記はReactで作成した簡易的な料金シミュレーション。
              <br /> 
              <a className="works_sentenc__a" href="https://price-simulation.vercel.app/" target="_blank" rel="noopener noreferrer">
                VISIT WEBSITE
              </a>
              （※PC推奨）
              <br />
              <strong>ID:</strong> port<br />
              <strong>PW:</strong> folio
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Works01;
