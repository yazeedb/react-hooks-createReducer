export default () => {
  const response = Math.round(Math.random() * 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(response);
      reject('Server error! Please try again.');
    }, 1000);
  });
};
