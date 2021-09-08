import axios from "axios";
import  Period from "../models/Period";

export default function getWeather(): Promise<Period[]> {
    return axios
    .get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(response => {
        return response.data.properties.periods;
    });
};