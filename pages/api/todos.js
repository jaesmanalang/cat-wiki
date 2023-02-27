// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const todos = [
    {
      id: '1',
      title: 'Walk the dog',
    },
    {
      id: '2',
      title: 'Wash the dishes',
    },
    {
      id: '3',
      title: 'Learn React QUery',
    },
    {
      id: '4',
      title: 'Get some exercise',
    },
    {
      id: '5',
      title: 'Sleep for 8 hours',
    },
  ];
  res.status(200).json({
    todos,
  });
}
