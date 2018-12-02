export default () => {
  const response = Math.round(Math.random() * 1000);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};
