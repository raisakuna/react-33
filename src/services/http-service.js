import axiosInstance from "../config/axios.config";

class HttpService {
  config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  setConfig = (reqConfig) => {
    if (reqConfig.file || reqConfig.files) {
      this.config = {
        ...this.config,
        headers: {
          ...this.config.headers,
          "Content-Type": "multipart/form-data",
        },
      };
    }
    if (reqConfig.auth) {
      this.config = {
        ...this.config,
        params: {
          ...this.config,
        },
      };
    }
  };

  getConfig = () => {};
  getRequest = () => {};
}

postRequest = async (url, data = {}, config = null) => {
  try {
    const response = await axiosInstance.post(url, data, {});
    return response;
  } catch (exception) {
    console.log("postRequest", exception);
    throw exception;
  }
};

patchRequest = () => {};

putRequest = () => {};
deleteRequest = () => {};

export default HttpService;
