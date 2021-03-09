const getLocalstorage = (name: string): string => {
  const theme = window.localStorage.getItem(name);
  return theme || '';
};

export { getLocalstorage };
