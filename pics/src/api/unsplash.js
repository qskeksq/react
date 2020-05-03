import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rkJ2BUkBtpO45etHxNJpgM1KuTAFAfzZcPetiq_XE_M' 
    }
})

