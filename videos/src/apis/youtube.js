import axios from 'axios'

const KEY = 'AIzaSyBVRuSjSV0_HJbiOskGyzuGAaCNCEs_PEc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})