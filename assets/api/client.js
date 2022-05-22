import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.104:9000/api",
});

// client.get('/listings').then(response => {
// if(!response.ok){
//     response.problem
// }
// });

export default apiClient;
