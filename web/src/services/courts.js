import { http } from './config';

export default {
  getCourts: () => {
    return http.get('courts/report');
  }
}