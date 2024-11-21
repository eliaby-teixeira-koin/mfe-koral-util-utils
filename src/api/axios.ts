import axios, { type AxiosHeaders } from "axios";
import { setEnviroment } from "../helpers/config";
import type { RequestProps } from "./interface";

const API_URL = setEnviroment();

const TIMEOUT = Number(process.env.REACT_APP_TIMEOUT || "5000");

const defaultHeaders = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

const axiosInstance = axios.create({
	baseURL: API_URL,
	timeout: TIMEOUT,
	headers: defaultHeaders,
});

export function requestApi({
	path,
	method = "get",
	body = {},
	headers = {} as AxiosHeaders,
}: RequestProps) {
	return axiosInstance[method](path, body, {
		headers: {
			...defaultHeaders,
			...headers,
		},
	});
}
