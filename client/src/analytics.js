import ReactGA from 'react-ga4';

localStorage.setItem('access', false);

let isGAInitialized = sessionStorage.getItem('access');

export const initGA = () => {
  ReactGA.initialize('G-FCQ1T9WKGC');
  localStorage.setItem('access', true);

};

export const logPageView = (page, title) => {

  if (isGAInitialized) {

    ReactGA.send({ hitType: 'pageview', page: page, title: title });
  }

};

export function deleteAnalyticsCookies() {
  const cookies = document.cookie.split(";");

  cookies.forEach(cookie => {
    const equalsPosition = cookie.indexOf("=");
    const name = equalsPosition > -1 ? cookie.substr(0, equalsPosition) : cookie;
    const trimmedName = name.trim();

    if (trimmedName.startsWith('_ga') || trimmedName.startsWith('_gid') || trimmedName.startsWith('_gat')) {

      document.cookie = `${trimmedName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });
}
