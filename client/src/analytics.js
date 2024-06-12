import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-FCQ1T9WKGC'); 
};

export const logPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};
