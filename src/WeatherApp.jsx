import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox weatherInfo={weatherInfo}/>
    </div>
  );
}
