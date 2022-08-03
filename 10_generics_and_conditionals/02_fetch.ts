interface FetchResponse<T = string> {
  status: number;
  headers: Headers;
  data: T;
}

async function fetchJSON<T>(url: string): Promise<FetchResponse<T>> {
  const response = await fetch(url);
  return {
    status: response.status,
    headers: response.headers,
    data: await response.json(),
  };
}

// IIFE
(async () => {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const { data } = await fetchJSON<Todo>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(data.title);
  console.log(data.userId);
})();
