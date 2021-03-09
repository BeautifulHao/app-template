/* eslint-disable @typescript-eslint/restrict-template-expressions */
const getLocalstorage = () => {
  const theme = window.localStorage.getItem('theme');
  return theme || '';
};

const initTheme = () => {
  const url = `${process.env.PUBLIC_URL}/static/css/theme/`;
  const theme = getLocalstorage() || 'default';
  const metaTheme = document.getElementsByName('meta-theme-set')[0];
  const bodyThemeClassName = `theme-${theme}`;

  if (theme !== metaTheme) {
    document
      .getElementById('link-theme-css')
      .setAttribute('href', `${url}${theme}.min.css`);
    metaTheme.setAttribute('content', theme);
  }

  const bodyDocClassList = Array.from(document.documentElement.classList);
  bodyDocClassList.forEach((item) => {
    if (item.indexOf('theme-') !== '-1' && item !== bodyThemeClassName) {
      document.documentElement.classList.remove(item);
    }
  });

  document.body.classList.add(bodyThemeClassName);
};

export default initTheme;
