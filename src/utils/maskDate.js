const maskDate = (value) => {
  let result = value.replace(/\D/g, '').slice(0, 8);
  if (result.length !== 0) {
    const onePoint = result.replace(/(\d{2})(\d)/, ['$1', '$2'].join('.'));
    const twoPoints = onePoint.replace(/(\d{2})(\d)/, ['$1', '$2'].join('.'));
    result = twoPoints;
  }

  return result;
};

export default maskDate;
