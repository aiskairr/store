import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "./assets",
});

export const getProducts = async () => axiosInstance.get("/products.json");
export const getBrands = async () => axiosInstance.get("/brands.json");
export const setOrder = async (data) =>
  axios.post(
    "https://app.aaccent.su/js/confirm.php",
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://your-app.com",
      },
    }
  );
