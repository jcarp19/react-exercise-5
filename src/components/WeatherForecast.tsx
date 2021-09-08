import {useState, useEffect} from "react";
import getWeather from "../services/getWeather";
import Period from "../models/Period";

export default function WeatherForecast () {
    const [weather, setWeather] = useState<Period[]>([]);

    useEffect(() => {getWeather().then(data => setWeather(data))}, []);

    return (
        <div>
            {weather?.map((locale, index) => {
                return (
                    <div key={index}>
                        <h3>{locale.name}</h3>
                        <h4>{locale.temperature}</h4>
                        <p><img src={locale.icon} alt=""/></p>
                        <p>{locale.detailedForecast}</p>
                    </div>
                )
            })}
            <h3></h3>
            <p></p>
            <p><img src="" alt=""/></p>
            <p></p>
        </div>
    )
};