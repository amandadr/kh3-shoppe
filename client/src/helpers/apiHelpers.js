const baseUrl = "http://localhost:3001";

export const fetchAccessories = async () => {
  const response = await fetch(`${baseUrl}/accessories`);
  return response.json();
};

export const fetchArmor = async () => {
  const response = await fetch(`${baseUrl}/armor`);
  return response.json();
};

export const fetchItems = async () => {
  const response = await fetch(`${baseUrl}/items`);
  return response.json();
};

export const fetchKeyblades = async () => {
  const response = await fetch(`${baseUrl}/keyblades`);
  return response.json();
};

export const fetchShields = async () => {
  const response = await fetch(`${baseUrl}/shields`);
  return response.json();
};

export const fetchStaves = async () => {
  const response = await fetch(`${baseUrl}/staffs`);
  return response.json();
};
