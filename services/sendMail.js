import axios from 'axios';

export const sendContactMail = async (nome, email, phone, text) => {
  const data = {
    nome, email, phone, text
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}