export const validateValue = (text, title) => {
  if (text !== "") {
    switch (title) {
      case "name":
        if (/[A-Za-z]/.test(text)) {
          return "Только русские буквы";
        }
        if (/\d/.test(text)) {
          return "Поле не должно содержать цифры";
        }
        if (/^[а-я]{1}/.test(text)) {
          return "Должно начинаться с большой буквы";
        }
        if (/^[А-Я]+[а-я]?/.test(text)) return "";
        else {
          return "Некорректные данные, только русские буквы начинающиеся с заглавной.";
        }
      case "surname":
        if (/[A-Za-z]/.test(text)) {
          return "Только русские буквы";
        }
        if (/\d/.test(text)) {
          return "Поле не должно содержать цифры";
        }
        if (/^[а-я]{1}/.test(text)) {
          return "Должно начинаться с большой буквы";
        }
        if (/^[А-Я]+[а-я]?/.test(text)) return "";
        else {
          return "Некорректные данные, только русские буквы начинающиеся с заглавной.";
        }
      case "dateOfBirth":
        if (
          /(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d/.test(
            text
          )
        ) {
          return "";
        } else {
          return "Некоректная дата";
        }
      case "phone":
        if (/^\+79/.test(text) || /^89/.test(text)) {
          if (/^\+79\d+$/.test(text) || /^89\d+$/.test(text)) {
            if (/^\+79\d{8}/.test(text) || /^89\d{8}/.test(text)) {
              return "";
            } else {
              return "Некорректная длина";
            }
          } else {
            return "Должно содержать только цифры";
          }
        } else {
          return "Некорректный ввод. Должно начинаться с +7 или 89 и содержать только цифры";
        }
      default:
        return "";
    }
  } else {
    return "";
  }
};