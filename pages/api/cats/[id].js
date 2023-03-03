import axios from '@utils/axios';

export default async function hanlder(req, res) {
  const { id } = req.query;
  try {
    const { data } = await axios.get(`/breeds/${id}`);
    res.status(200).json({ ...data });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).end(error.message);
  }
}
