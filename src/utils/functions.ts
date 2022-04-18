export const changeUrl = (path: string) => {
  window.history.replaceState(null, document.title, path);
};
