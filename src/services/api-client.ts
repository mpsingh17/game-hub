import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "78545154d8b945ddba23815225ab4dc7"
    }
});