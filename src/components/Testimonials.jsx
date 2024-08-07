import { useEffect } from 'react';
import { feedback } from '../constants';
import styles from '../styles';
import FeedbackCard from './FeedbackCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2} data-aos="fade-right">
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6" data-aos="fade-left" data-aos-delay="300">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} data-aos="zoom-in" data-aos-delay="500" />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
