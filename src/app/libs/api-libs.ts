export async function getAllData(resource: string) {
  try {
    const response = await fetch(`${process.env.NEXT_API_BASE_URL}${resource}`);
    const data = await response.json();

    return data.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

export async function getSpecifiedData(resource: string, query: string) {
  try {
    const response = await fetch(`${process.env.NEXT_API_BASE_URL}${resource}/${query}`);
    const data = await response.json();

    return data.data[0];
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}
