import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function Todos() {
  const { data, isLoading, isError } = useQuery(['todos'], () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
      res.json()
    );
  });

  return (
    <div className="container">
      {isLoading ? (
        <div className="text-2xl">Loading plase wait....</div>
      ) : (
        <div>
          <ul className="max-w-md mx-auto px-4 flex flex-col gap-2">
            {data.map((todo) => (
              <li className="bg-gray-100 p-2">{todo.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
