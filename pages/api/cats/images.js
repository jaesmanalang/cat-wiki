import axios from '@utils/axios';

export default async function handler(req, res) {
  const response = await axios.get('/images/search?limit=10&breed_ids=beng');
  console.log('rresponse: ', response);
  res.status(200).json({
    data: response.data,
  });
}
