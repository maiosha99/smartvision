import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد الـ AOS
import './Integrations.css';

export default function Integrations() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // تفعيل AOS عند تحميل الـ component
    AOS.init();

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Data Dashboard Lottie Animation.json', // المسار إلى ملف الـ JSON
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="integration-section">
      <div className="integration-left" data-aos="fade-right" data-aos-duration="1000">
        <h2>Third-Party Integrations</h2>
        <p>
          We connect your systems with the tools you already use. From payments to logistics,
          we make everything work together smoothly.
        </p>
        <ul className="integration-list">
          <li>🔌 APIs & Webhooks</li>
          <li>💸 Payment Gateways</li>
          <li>🚚 Logistics Platforms</li>
          <li>📩 Email & SMS Services</li>
        </ul>
        <button className="integration-btn">Explore integrations</button>
      </div>

      <div className="integration-right" data-aos="fade-left" data-aos-duration="1000">
        {/* العنصر الخاص بـ Lottie Animation */}
        <div ref={animationContainer} style={{ width: '100%', height: '500px' }}></div>
      </div>
    </section>
  );
}
