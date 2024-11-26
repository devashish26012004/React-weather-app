import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ weatherInfo }) {
  let IMG_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  let COLD_URL =
    "https://images.unsplash.com/photo-1640955788205-46267ab3b3cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1493936734716-77ba6da66365?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

  return (
    <div className="infoBox">
      <h1>Weather Info</h1>
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                weatherInfo.humidity > 80
                  ? RAIN_URL
                  : weatherInfo.temp > 20
                  ? HOT_URL
                  : COLD_URL
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherInfo.city} &nbsp;
                {weatherInfo.humidity > 80 ? (
                  <WaterDropIcon />
                ) : weatherInfo.temp > 20 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component="span"
              >
                <p>Temprature : {weatherInfo.temp}&deg;C</p>
                <p>Humidity : {weatherInfo.humidity}</p>
                <p>Min-temprature : {weatherInfo.tempMin}</p>
                <p>Max-temprature : {weatherInfo.tempMax}</p>
                <p>
                  The weather can be described as <i>{weatherInfo.weather}</i>{" "}
                  and feels like {weatherInfo.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
