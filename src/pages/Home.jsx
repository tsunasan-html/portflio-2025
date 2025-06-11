import About from './About';
import Contact from './Contact';
import Works from './Works';
import Footer from '../component/Footer'; 
import Layout from "../component/Layout"; 
import Scroll from "../component/Scroll"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';

const title = "TETSUHIRO MUNEYUKI";
const subtitle = "IT IS A WEB DEVELOPER'S PORTFOLIO.";

function Home() {
  // return (
  //   <Layout>
  //     <div className="main-visual">
  //       <Scroll />
  //       <div>
  //         <h1 style={{lineHeight: '1.2'}} className="main-visual__title">
  //           {title.split("").map((char, index) => (
  //             <span key={index}>
  //               {char}
  //             </span>
  //           ))}
  //           <span className="main-visual__subtitle">
  //             {subtitle}
  //           </span>
  //         </h1>
  //       </div>
  //     </div>

  //     <div style={{ position: 'relative', zIndex: 2 }}>
  //       <About />
  //       <Works />
  //       <Contact />
  //       <Footer />
  //     </div>
  //   </Layout>
  // );
    return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      textAlign: "center"
    }}>
     <h2>
        We have moved&nbsp;
        <FontAwesomeIcon icon={faTruckMoving} style={{ color: "#555" }} />
      </h2>
      <p><a href="https://react-portfolio-ten-flax.vercel.app/">Click here to go to the new location.</a></p>
    </div>
  );
}

export default Home;
