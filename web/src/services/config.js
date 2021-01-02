import axios from 'axios';
export const http = axios.create({
  baseURL: 'http://society.filipeveronezi.dev.br:3000/'
})