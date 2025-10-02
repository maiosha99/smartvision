import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد الـ AOS
import './BusinessTools.css';

export default function BusinessTools() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // تفعيل AOS عند تحميل الـ component
    AOS.init();

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Dashboard.json', // المسار إلى ملف الـ JSON
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="business-section">
      <div className="business-left" data-aos="fade-left" data-aos-duration="1000">
        <h2>Business Automation Tools</h2>
        <p>
          We build smart tools that help businesses run more efficiently.
          From HR and project management to CRM and ERP systems, we've got you covered.
        </p>
        <ul className="business-list">
          <li>📋 HR Systems</li>
          <li>📂 Project Management Tools</li>
          <li>📞 CRM Integration</li>
          <li>⚙️ ERP Customization</li>
        </ul>
        <button className="business-btn">Automate your business</button>
      </div>

      <div className="business-right" data-aos="fade-right" data-aos-duration="1000">
        {/* العنصر الخاص بـ Lottie Animation */}
        <div ref={animationContainer} style={{ width: '100%', height: '500px' }}></div>
      </div>
    </section>
  );
}
