import { useEffect } from "react";
import { logPageView } from '../analytics.js';

const IntersectionObserverComponent = ({ componentRefs, setCurrentIndex }) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-page-name');
          if (index) {
            setCurrentIndex(parseInt(entry.target.id));
            logPageView(index); 
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    componentRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [componentRefs, setCurrentIndex]);

  return null;
};

export default IntersectionObserverComponent;
