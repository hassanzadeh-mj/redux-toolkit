import axios,{  } from "axios";


axios.defaults.baseURL='https://jsonplaceholder.typicode.com';

const responsBody = (response) =>response.data;
const  sleep = (ms)=> (response)=>
    new Promise (resolve=> setTimeout (()=> resolve(response),ms))

const requests ={
get:(url)=> axios.get(url).then(sleep(1000)).then(responsBody),
}


 const Activities={
poste:()=>requests.get('/posts')
}
export default{
Activities
}