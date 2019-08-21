const maskDate = (value) => {
  let result = value.replace(/\D/g, '').slice(0, 8);
  if (result.length !== 0) {
    let onePoint = result.replace(/(\d{2})(\d)/, ['$1', '$2'].join('.'));
    let twoPoints = onePoint.replace(/(\d{2})(\d)/, ['$1', '$2'].join('.'));
    result = twoPoints;
  }

  return result;
}

export default maskDate;