import axios from '@utils/axios';

export default async function hanlder(req, res) {
  const { id } = req.query;
  try {
    const { data } = await axios.get(
      `/images/search?limit=10&breed_ids=${id}&order=desc`
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).end(error.message);
  }
}
