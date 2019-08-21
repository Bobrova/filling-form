export const validateValue = (text, title) => {
  switch (title) {
    case 'name':
      if (/\d/.test(text)) {
        return "Поле не должно содержать цифры";
      }
      else {
        return '';
      }
    default:
        return '';
  }
}