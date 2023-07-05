import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import icon1 from "./images/icon_1.png";
import icon2 from "./images/icon_2.png";
import icon3 from "./images/icon_3.png";
import icon4 from "./images/icon_4.png";
import icon5 from "./images/icon_5.png";
import text from "./images/text.png";
import logoc from "./images/logo_content.png";
import photo from "./images/photo.png";
import copyImg from "./images/copy-icon.png";
import toker from "./images/toke_red.png";
import tokeg from "./images/toke_green.png";
import tokey from "./images/toke_yellow.png";
import tokeb from "./images/toke_blue.png";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [isCopied, setIsCopied] = useState(false);
  const copyContract = () => {
    navigator.clipboard.writeText("0xDeCBa0E08FD08a3d2545225EF5904bA3134a789C");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <div className="App">
      <div className="Head">
        <img src={logo1} alt="logo" data-aos="fade-left" />
      </div>
      <div className="Hero">
        {/* <h1 data-aos="fade-left" data-aos-delay="1000">
          $XBOX <span>2.0</span>
        </h1> */}
        <img src={logo2} alt="logo" data-aos="fade-left" data-aos-delay="700" />
        <div className="Contract" data-aos="fade" data-aos-delay="2000">
          <div className="CTitle">
            <h2>CONTRACT ADDRESS</h2>
          </div>
          <div className="Copier">
            <h2>0xDeCBa0E08FD08a3d2545225EF5904bA3134a789C</h2>
            <img
              src={copyImg}
              alt="copy button"
              onClick={() => copyContract()}
            />
          </div>
        </div>
      </div>
      <div className="Links1">
        <div className="Icons" data-aos="fade">
          <a href="https://etherscan.io/" target="_blank" className="Icon">
            <img src={icon1} alt="icon" />
            <p>Etherscan</p>
          </a>
          <a href="https://app.uniswap.org/" target="_blank" className="Icon">
            <img src={icon2} alt="icon" />
            <p>Uniswap</p>
          </a>
          <a href="https://twitter.com/" target="_blank" className="Icon">
            <img src={icon3} alt="icon" />
            <p>Twitter</p>
          </a>
          <a href="https://www.coingecko.com/" target="_blank" className="Icon">
            <img src={icon4} alt="icon" />
            <p>CoinGecko</p>
          </a>
          <a href="https://web.telegram.org/" target="_blank" className="Icon">
            <img src={icon5} alt="icon" />
            <p>Telegram</p>
          </a>
        </div>
      </div>
      <div className="Mosaic">
        <div className="Tokenomics" data-aos="fade-up" data-aos-delay="100">
          <div className="TokeButtons">
            <img
              src={tokey}
              alt="tokenomics"
              className="tup"
              data-aos="fade"
              data-aos-delay="1000"
            />
            <img
              src={tokeb}
              alt="tokenomics"
              className="tleft"
              data-aos="fade"
              data-aos-delay="1200"
            />
            <img
              src={toker}
              alt="tokenomics"
              className="tright"
              data-aos="fade"
              data-aos-delay="1400"
            />
            <img
              src={tokeg}
              alt="tokenomics"
              className="tdown"
              data-aos="fade"
              data-aos-delay="1600"
            />
          </div>
        </div>
        <div className="CRight">
          <div className="Description">
            <div className="DLeft">
              {/* <h2 data-aos="fade" data-aos-delay="2000">
              <span>XBOX</span> is the biggest gaming
              <br /> platform <span>since 2001</span> and kept inviting to
              <br /> <span>"JUMP IN"</span>. Enjoy a fun and joyous
              <br /> adventure with <span>$XBOX</span>.
            </h2> */}
              <img
                src={text}
                alt="description"
                data-aos="flip-left"
                data-aos-delay="200"
              />
            </div>
            <div className="DRight">
              <img
                src={logoc}
                alt="logo"
                data-aos="flip-left"
                data-aos-delay="400"
              />
            </div>
          </div>
          <div className="Photo" data-aos="fade-up" data-aos-delay="700">
            <img src={photo} alt="controler and earphone" />
          </div>
        </div>
      </div>
      <div className="Footer">
        <div className="Socials">
          <a href="https://twitter.com/" target="_blank" className="Icon">
            <img src={icon3} alt="icon" />
            <p>Twitter</p>
          </a>
          <a href="https://web.telegram.org/" target="_blank" className="Icon">
            <img src={icon5} alt="icon" />
            <p>Telegram</p>
          </a>
        </div>
        <p>©2023 Xbox 2.0. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
