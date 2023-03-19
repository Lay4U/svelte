const baseUrl = 'http://localhost:8080';

export async function fetchAPI(method, url, data) {
  const response = await fetch(baseUrl + url, {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null
  });

  if (!response.ok) {
    const text = await response.text();
    const result = JSON.parse(text);
    throw new Error(`Error ${result.status}: ${result.statusText}`);
  }

  return await response.json();
}

