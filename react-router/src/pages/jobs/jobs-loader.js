export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");

  return response.json();
};

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:5000/jobs/${id}`);

  if (!response.ok) {
    throw Error("Cannot load data");
  }

  return response.json();
};
