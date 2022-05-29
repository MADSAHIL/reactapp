import axios from "axios";
export const getData = async () => {
  let response = await axios.get("http://localhost:8080/backend/DataLoading");
  let data = response.data.actors;
  data.map((actor, index)=>({...actor,"id":index}))
  return data;
};
