import axios from 'axios'

export const useRegister = async (data: {}) => {
    const response = await axios.post('http://localhost:8888/register', data)

    if (response.status >= 200 && response.status < 300) {
        return response.data
    } else {
        return response.data
    }
}

export const useLogin = async (data: {}) => {
    const response = await axios.post('http://localhost:8888/login', data);

    if (response.status >= 200 && response.status < 300) {
        return response.data
    } else {
        return response.data
    }
}

export const isValidVCode = async (data: {}) => {
    const response = await axios.post('http://localhost:8888/verify', data);

    if (response.status >= 200 && response.status < 300) {
        return response.data
    } else {
        return response.data
    } 
}
