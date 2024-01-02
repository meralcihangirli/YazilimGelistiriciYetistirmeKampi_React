import axios from "axios"

export default class UserService{
getUsers(){
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

getByUserName(name){
    return axios.get('https://jsonplaceholder.typicode.com/users/?name='+ name)
}

}