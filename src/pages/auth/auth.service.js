import HttpService from "../../services/http-service";

class AuthService extends HttpService {
  registerUser = (data) => {
    this.postRequest("auth/register", data, { file: true });
  };
}

const authSvc = new AuthService();
export default authSvc;
