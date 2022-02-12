import cliente from "./client";

const endpoint = "/avistamientos/new";

export const newAvistamiento = (
  date,
  size,
  color,
  location,
  amount,
  email,
  departamento,
  municipio,
  vereda,
  spider_image_uri
) => {
  const data = new FormData();

  data.append("date", date);
  data.append("size", size);
  data.append("color", color);
  data.append("location", location);
  data.append("amount", amount);
  data.append("email", email);
  data.append("departamento", departamento);
  data.append("municipio", municipio);
  data.append("vereda", vereda);
  data.append("spider_image_url", spider_image_uri);

  return cliente.post(endpoint, data);

  export default {
    newAvistamiento,
  };
};
