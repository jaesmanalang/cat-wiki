import axios from '@utils/axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('/breeds/search?breed_ids=beng,sava,norw');
    const breeds = response.data;
    res.status(200).json(breeds);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).end(error.message);
  }
}
