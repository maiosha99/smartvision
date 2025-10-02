import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد الـ AOS
import './EcommerceIntegration.css';

export default function EcommerceIntegration() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // تفعيل AOS عند تحميل الـ component
    AOS.init();

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/Big Data Centre Isomatric Animation (Json).json',
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="ecom-section">
      <div className="ecom-left" data-aos="fade-right" data-aos-duration="1000">
        <h2>E-commerce & Payment Integration</h2>
        <p>
          Seamlessly integrate secure and scalable payment solutions into your platforms.
          We support everything from global gateways to custom checkout flows.
        </p>

        <ul className="ecom-list">
          <li>💳 Stripe / PayPal Integration</li>
          <li>🛒 Custom Checkout Experiences</li>
          <li>🔐 Secure Transactions</li>
          <li>🌍 Global Payment Support</li>
        </ul>

        <button className="ecom-btn">Talk to an expert</button>
      </div>

      <div className="ecom-right" data-aos="fade-left" data-aos-duration="1000">
        {/* العنصر الخاص بـ Lottie Animation */}
        <div ref={animationContainer} style={{ width: '100%', height: '500px' }}></div>
      </div>
    </section>
  );
}
