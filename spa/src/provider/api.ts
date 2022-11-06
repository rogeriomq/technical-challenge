import axios, { AxiosInstance } from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
export const api:AxiosInstance = axios.create({ baseURL: `${BASE_URL}/api` })
