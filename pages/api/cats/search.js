import axios from '@utils/axios';

export default async function hanlder(req, res) {
  const { searchQuery } = req.query;
  try {
    const { data } = await axios.get(`/breeds/search?q=${searchQuery}`);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).end(error.message);
  }
}
