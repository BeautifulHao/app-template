/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { getLocalstorage } from '../util';

const initTheme = () => {
  const url = `${process.env.PUBLIC_URL}/static/css/theme/`;
  const theme = getLocalstorage('theme') || 'default';
  const metaTheme = document.getElementsByName(
    'meta-theme-set',
  )[0] as HTMLMetaElement;
  const bodyThemeClassName = `theme-${theme}`;

  if (theme !== metaTheme.content) {
    const linkTheme = document.getElementById('link-theme-css');
    if (linkTheme) {
      linkTheme.setAttribute('href', `${url}${theme}.min.css`);
    }
    metaTheme.setAttribute('content', theme);
  }

  const bodyDocClassList = Array.from(document.documentElement.classList);
  bodyDocClassList.forEach((item) => {
    if (item.indexOf('theme-') !== -1 && item !== bodyThemeClassName) {
      document.documentElement.classList.remove(item);
    }
  });

  document.body.classList.add(bodyThemeClassName);
};

export default initTheme;
