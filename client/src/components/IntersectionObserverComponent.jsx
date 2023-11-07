import { useEffect } from "react";

function IntersectionObserverComponent({ componentRefs, setCurrentIndex }) {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.id;
          if (index !== -1) {
            setCurrentIndex(parseInt(index));

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
}

export default IntersectionObserverComponent;