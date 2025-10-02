import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './Hero.css';

export default function Hero() {
  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);

  useEffect(() => {
    const anim1 = lottie.loadAnimation({
      container: animation1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Software.json', // أول أنيميشن
    });

    const anim2 = lottie.loadAnimation({
      container: animation2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Sdoftware.json', // ثاني أنيميشن
    });

    const anim3 = lottie.loadAnimation({
      container: animation3.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Techd.json', // ثالث أنيميشن
    });

    return () => {
      anim1.destroy();
      anim2.destroy();
      anim3.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-background">
        <svg className="hero-wave" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L40,197.3C80,171,160,117,240,96C320,75,400,85,480,117.3C560,149,640,203,720,202.7C800,203,880,149,960,112C1040,75,1120,53,1200,53.3C1280,53,1360,75,1400,85.3L1440,96L1440,320L0,320Z"></path>
        </svg>
      </div>

      <div className="hero-inner">
        <div className="hero-left">
          <h1>Welcome to  Smart Vision</h1>
          <p>We build amazing web solutions</p>
          {/* <button className="btn-primary">Get Started</button> */}
        </div>

        <div className="hero-right">
          <div className="hero-images">
            <div className="hero-image large" ref={animation1}></div>
            <div className="hero-image small" ref={animation2}></div>
            <div className="hero-image small" ref={animation3}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
