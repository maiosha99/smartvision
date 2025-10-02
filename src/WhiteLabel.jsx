import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد الـ AOS
import './WhiteLabel.css';

export default function WhiteLabel() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // تفعيل AOS عند تحميل الـ component
    AOS.init();

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Animated Dashboards.json', // المسار إلى ملف الـ JSON
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="white-section">
      <div className="white-left" data-aos="fade-left" data-aos-duration="1000">
        <h2>White-Label Products</h2>
        <p>
          We provide ready-to-go solutions that you can fully brand and customize as your own — from POS systems to eLearning platforms.
        </p>
        <ul className="white-list">
          <li>🛍 POS System</li>
          <li>📅 Booking Platform</li>
          <li>🎓 eLearning Solutions</li>
          <li>📊 Analytics Dashboards</li>
        </ul>
        <button className="white-btn">Request demo</button>
      </div>

      <div className="white-right" data-aos="fade-right" data-aos-duration="1000">
        {/* العنصر الخاص بـ Lottie Animation */}
        <div ref={animationContainer} style={{ width: '100%', height: '500px' }}></div>
      </div>
    </section>
  );
}
