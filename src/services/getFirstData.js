import axios from "axios";

export async function getFirstData() {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=yellow+flowers&image_type=photo&pretty=true`);

        return response;
    } catch (err) {
        return err.response;
    }
}