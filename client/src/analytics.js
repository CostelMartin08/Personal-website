import ReactGA from 'react-ga4';

localStorage.setItem('access', false);

let isGAInitialized = localStorage.getItem('access');

export const initGA = () => {
  ReactGA.initialize('G-FCQ1T9WKGC');
  localStorage.setItem('access', true);

};

console.log(isGAInitialized)
export const logPageView = (pageName, sectionName) => {
  if (isGAInitialized) {
    ReactGA.send({
      hitType: "pageview",
      page: pageName,
      title: sectionName,
    });
  }
};

export const logEventView = (action) => {
  if (isGAInitialized) {
    ReactGA.event({
      category: "User Interaction",
      action: action,
    });
  }
}

export function deleteAnalyticsCookies() {

  const cookies = document.cookie.split(";");

  cookies.forEach(cookie => {
    const equalsPosition = cookie.indexOf("=");
    const name = equalsPosition > -1 ? cookie.substr(0, equalsPosition) : cookie;
    const trimmedName = name.trim();

    if (trimmedName.startsWith('_ga') || trimmedName.startsWith('_gid') || trimmedName.startsWith('_gat')) {

      document.cookie = `${trimmedName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=martinescuconstantin.com`;
    }
  });
}
