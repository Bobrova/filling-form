export const validateValue = (text, title) => {
  if (text !== '') {
    if (title === 'name' || title === 'surname') {
      if (/[A-Za-z]/.test(text)) {
        return 'Только русские буквы';
      }
      if (/\d/.test(text)) {
        return 'Поле не должно содержать цифры';
      }
      if (/^[а-я]{1}/.test(text)) {
        return 'Должно начинаться с большой буквы';
      }
      if (/^[А-Я]+[а-я]?/.test(text)) return '';
      return 'Некорректные данные, только русские буквы начинающиеся с заглавной.';
    }
    if (title === 'dateOfBirth') {
      if (
        /(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d/.test(
          text,
        )
      ) {
        return '';
      }
      return 'Некоректная дата';
    }
    if (title === 'phone') {
      if (/^\+7/.test(text) || /^8/.test(text)) {
        if (/^[+]??\d[\d(\\) -]{4,13}\d$/.test(text)) {
          return '';
        }
        return 'Некорректный ввод';
      }
      return 'Некорректный ввод. Должно начинаться с +7 или 8 и содержать только цифры';
    }
    if (title === 'email') {
      if (/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(text)) {
        return '';
      }
      return 'Введите корректный e-mail.';
    }
  }
};
