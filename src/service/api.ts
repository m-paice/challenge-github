import axios from "axios";

export default axios.create({
    baseURL: process.env.URL_API || "https://api.github.com",
    headers: {
        "Content-Type": "Application/json",
    },
});
