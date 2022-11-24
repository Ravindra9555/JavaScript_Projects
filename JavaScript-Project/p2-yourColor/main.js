const zodiac = document.getElementById("zodiac");
const body = document.body;
const changebackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "#fc0303";
      break;
    case "taurus":
      body.style.backgroundColor = "yellow";
      break;
    case "gimini":
      body.style.backgroundColor = "blue";
      break;
    case "cancer":
      body.style.backgroundColor = "green";
      break;
    case "virgo":
      body.style.backgroundColor = "#AAFF33";
      break;
    case "leo":
      body.style.backgroundColor = "#33FF8D";
      break;
    case "libra":
      body.style.backgroundColor = "#33A3FF";
      break;
    case "sco":
      body.style.backgroundColor = "#FFB733";
      break;
    case "sag":
      body.style.backgroundColor = "#FF33B0";
      break;
    case "aqua":
      body.style.backgroundColor = "#3306A3";
      break;
    case "cap":
      body.style.backgroundColor = "#A38906";
      break;
    case "pis":
      body.style.backgroundColor = "#24A306";
      break;
    default:
      break;
  }
};
