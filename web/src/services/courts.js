import { http } from './config';

export default {
  getCourts: () => {
    return http.get('courts/report');
  },
  getCourt: (court_id, user_id) => {
    return http.get('courts/report/' + court_id + '/' + user_id);
  }
}