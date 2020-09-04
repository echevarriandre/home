import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api/links/';

class LinkService {
  getAll() {
    return axios.get(API_BASE_URL);
  }

  getLinkById(id) {
    return axios.get(API_BASE_URL + id);
  }

  updateLinkById(id, data) {
    return axios.post(API_BASE_URL + id, data);
  }

  deleteLinkById(id) {
    return axios.delete(API_BASE_URL + id);
  }
}

export default new LinkService();