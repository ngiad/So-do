import axios from "axios"

const Request_base = axios.create({
    baseURL : "https://loainguycap.ceid.gov.vn/api/"
})

export default Request_base