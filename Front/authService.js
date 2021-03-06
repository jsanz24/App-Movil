import axios from 'axios';

export default class authService {
	constructor() {
		this.service = axios.create({baseURL:`${process.env.REACT_APP_API_URL}/auth`});
	}
	logout = () => {
		return this.service.get('/logout').then((data) => data.data);
	};

	loggedin = () => {
		return this.service.get('/loggedin').then((data) => {
			return data.data
		});
	};

	login = (username,password) => {
		return this.service.post(`/login`,{username,password}).then((data) => data.data);
	};
	
	signup = (username,password) => {
		return this.service.post(`/signup`,{username,password}).then((data) => data.data);
	};
	
}
