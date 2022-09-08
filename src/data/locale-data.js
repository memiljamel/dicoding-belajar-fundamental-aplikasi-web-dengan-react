function getLocale() {
  return localStorage.getItem('locale');
}

function putLocale(locale) {
  return localStorage.setItem('locale', locale);
}

export {
  getLocale,
  putLocale,
};