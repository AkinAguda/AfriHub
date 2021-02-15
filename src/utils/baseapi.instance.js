import axios from "axios";

const AUTH_TOKEN = localStorage.getItem("auth_afrihub");
export const APP_URL = process.env.REACT_APP_AFRIHUB_BASE_API;

export const API_HEADERS = {
	Authorization: `Bearer ${AUTH_TOKEN}`,
};

const instance = axios.create({
	baseURL: APP_URL,
	...(AUTH_TOKEN && {
		headers: API_HEADERS,
	}),
})

export async function GET_REQUEST(url, headers = {}) {
	try {
		const { data } = await instance.get(url, headers);
		return data;
	} catch (error) {
		return error.data;
	}
}

export async function POST_REQUEST(url, payload = {}, headers = {}) {
	try {
		const { data } = await instance.post(url, payload, headers);
		return data;
	} catch (error) {
		return error;
	}
}
