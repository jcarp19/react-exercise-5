import axios from "axios";
import joke from "../models/joke";

export default function getJokes(): Promise<joke> {
    return axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.data);
};