const { fetch } = window;

export const getTodos: () => Promise<string[]> = () => {
  return fetch('/api/todos')
    .then(response => response.json());
};
