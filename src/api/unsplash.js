import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        AUTHORIZATION: 'Client-ID 0ijEtIk_sCV97ZYPTrzPTpga3DIWi7UOtKo41HoN0EI'
    }, 
    
})