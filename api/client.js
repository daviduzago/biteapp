import { create } from "apisauce";

const apiClient = create({
    baseURL= "https://biteapp-movil.herokuapp.com/api",
});

export default apiClient;