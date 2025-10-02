import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد الـ AOS

import './CustomSolutions.css';

export default function CustomSolutions() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // تفعيل AOS عند تحميل الـ component
    AOS.init();

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Mobile App Showcase-1.json',
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="custom-section">
      <div className="custom-left" data-aos="fade-left" data-aos-duration="1000">
        {/* إضافة حركة للعنوان */}
        <h2>
          Custom Software Solutions
        </h2>

        <p>
          We build tailored digital products based on your exact needs:
        </p>

        <ul className="custom-list">
          <li>📱 Mobile apps (iOS / Android)</li>
          <li>💻 Web platforms</li>
          <li>⚙️ Internal business tools</li>
          <li>☁️ Cloud-based systems</li>
        </ul>

        <button className="custom-btn">See case studies</button>
      </div>

      <div className="custom-right" data-aos="fade-right" data-aos-duration="1000">
        {/* العنصر الخاص بـ Lottie Animation */}
        <div ref={animationContainer} style={{ width: '100%', height: '500px' }}></div>
      </div>
    </section>
  );
}
