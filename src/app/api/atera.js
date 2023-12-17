import { ateraAPI } from '@/lib/api'

export default async (req, res) => {
    try {
      const response = await ateraAPI.post('/contacts', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Server error' });
    }
  };