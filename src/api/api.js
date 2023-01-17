export default class Api {
    constructor() {
        this.client = null;
        this.api_url = "localhost:9001";
    }


    init = () => {
        let headers = {
            Accept: "application/json",
        };

        this.client = axios.create({baseURL:this.api_url, headers:headers});
    }  
}