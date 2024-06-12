import { useEffect } from "react";
import { logPageView } from '../analytics.js';

function IntersectionObserverComponent({ componentRefs, setCurrentIndex }) {

  /*const [currentIndex, setCurrentindex] = useState(null);
  const [history, setHistory] = useState([]);
*/

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

          /*       setHistory(prevHistory => [...prevHistory, index]);
       
                 entry.target.classList.add('animated-class');
       
                 const prevElement = document.getElementById(history[history.length - 2]);
       
                 if (prevElement) {
                   prevElement.classList.remove('animated-class');
                 } */

          if (index !== -1) {
            setCurrentIndex(parseInt(index));
            logPageView(entry.target.getAttribute('data-page-name'));
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