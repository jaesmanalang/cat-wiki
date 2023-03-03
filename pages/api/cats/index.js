import axios from '@utils/axios';

export default async function hanlder(req, res) {
  const { limit } = req.query;
  const limitParam = limit ? `?limit=${limit}` : '';

  try {
    const { data } = await axios.get(`/breeds${limitParam}`);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).end(error.message);
  }
}
