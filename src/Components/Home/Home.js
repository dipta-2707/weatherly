import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import Humidity from "../Highlights/Humidity";
import SunriseDown from "../Highlights/SunriseDown";
import Wind from "../Highlights/Wind";
import Visibility from "../Highlights/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import cityImage from "../../Assets/city.jpg";
import TodayIcon from "@mui/icons-material/Today";
import CountUp from "react-countup";
import Cloud from "../Highlights/Cloud";

function Home(props) {
  const [weater, setWeather] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [search, setSearch] = useState("Dhaka");
  const { REACT_APP_WAPI_KEY } = process.env;
  const [des, setDes] = useState("");
  let dataBackup;
  const getWeather = async () => {
    try {
      console.log("......................log data..............");
      console.log(search);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${REACT_APP_WAPI_KEY}`
      ).catch((e) => {
        console.log(e);
      });
      const data = await response.json();
      // have to add search backup try catch
      if (data?.weather[0]?.description) {
        setWeather(data);
      }
      setDes(data?.weather[0]?.description);
      console.log(des);
      console.log(data);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      setImageUrl(iconUrl);
    } catch (e) {
      console.log("catch log");
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("press");
    getWeather();
  };

  function timeConverter(time) {
    var date = new Date(time * 1000);
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  }

  const styles = {
    cityImagesBox: {
      backgroundImage: `url(${cityImage})`,
      backgroundSize: "cover",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFFFFF",
    },
    leftBox:{
      height: "100vh",
    },

  };
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];
  return (
    <Box>
      <Grid container>
        <Grid item className="box-temp" xs={12} p={2} sm={3} style={styles.leftBox}>
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                onChange={handleSearch}
                placeholder="Search For Places..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            </form>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={imageUrl} height="200px" width="200px" alt="icon" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h1">
              <CountUp end={Math.round(weater?.main?.temp - 273.15)} />
              ??c
            </Typography>
            <Typography variant="h5">{des}</Typography>
            <TodayIcon sx={{ color: "#4c35ae" }} />
            <Typography variant="subtitle2">{dayName}</Typography>

            <Box
              style={styles.cityImagesBox}
              py={2}
              mt={2}
              width="100%"
              height="130px"
            >
              <Typography variant="h4">
                {weater?.name},{weater?.sys?.country}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} p={1}>
          <Typography variant="h4" pl={2}>
            Highlights
          </Typography>
          <Grid container>
            <Grid item xs={6} sm={4}>
              {" "}
              <SunriseDown
                sunRise={timeConverter(weater?.sys?.sunrise)}
                sunDown={timeConverter(weater?.sys?.sunset)}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Humidity humidity={weater?.main?.humidity} />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Wind speed={weater?.wind?.speed} />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Visibility visibility={weater?.visibility / 1000} />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Cloud cloud={weater?.clouds?.all} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
