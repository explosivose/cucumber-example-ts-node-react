const REACT_APP_API_URL = process.env.REACT_APP_API_URL || '';

export const makeRequest = async <T = unknown>(
  path: string,
  options: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
): Promise<T | undefined> => {
  const url = `${REACT_APP_API_URL}/${path}`;
  try {
    const response = await fetch(url, options);
    const data = (await response.json()) as unknown;
    if (response.ok) {
      return data as Promise<T>;
    } else {
      console.error(data);
    }
  } catch (error) {
    console.error(error);
  }
};
