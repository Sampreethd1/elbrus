import axios from "axios";

export const postData = async (msg: string) => {
  try {
    const response = await axios.post(
      "https://test-elbrus-dtdrbuc4h0e8awbh.canadacentral-01.azurewebsites.net/generate",
      {
        message: msg,
      }
    );
    return response.data;
  } catch (err) {
    console.error("test api")
  }
};
