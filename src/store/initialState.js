const getFromStorage = () => {
  const data = localStorage.getItem('filling-form-3F');
  if (data) {
    return JSON.parse(data);
  }
  return false;
};

export const initialState = getFromStorage() || {
  fields: {
    name: {
      title: 'name',
      text: '',
      error: '',
    },
    surname: {
      title: 'surname',
      text: '',
      error: '',
    },
    address: {
      title: 'address',
      text: '',
      error: '',
    },
    dateOfBirth: {
      title: 'dateOfBirth',
      text: '',
      error: '',
    },
    email: {
      title: 'email',
      text: '',
      error: '',
    },
    phone: {
      title: 'phone',
      text: '',
      error: '',
    },
    AdditionalInformation: {
      title: 'AdditionalInformation',
      text: '',
      error: '',
    },
  },
};
