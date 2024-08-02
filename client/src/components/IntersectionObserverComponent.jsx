import { useEffect } from "react";
import { logPageView } from "../analytics";

function IntersectionObserverComponent({ componentRefs, setCurrentIndex }) {

  useEffect(() => {

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const callback = (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const index = entry.target.id;

          if (index !== -1) {
            setCurrentIndex(parseInt(index));
            
            logPageView(
              entry.target.getAttribute('data-page-name'),
              
              entry.target.getAttribute('name')
            );
          }
        }

      })

    }

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
}

export default IntersectionObserverComponent;