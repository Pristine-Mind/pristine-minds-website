import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

const submitClientForm = (formData) => {
    return axios.post(`${API_URL}/client/`, formData);
};

const submitContactForm = (formData) => {
    return axios.post(`${API_URL}/contact/`, formData);
}
export { submitClientForm, submitContactForm };


