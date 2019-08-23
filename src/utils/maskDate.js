const maskDate = (value) => {
  let result = value.replace(/[^0-9.]/g, '').slice(0, 10);
  if (result.length !== 0) {
    const onePoint = result.replace(/(^\d{2})(\d{2})/, ['$1', '$2'].join('.'));
    const twoPoints = onePoint.replace(/(.\d{2})(\d{4}$)/, ['$1', '$2'].join('.'));
    result = twoPoints;
  }

  return result;
};

export default maskDate;
