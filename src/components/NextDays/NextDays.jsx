import "./NextDays.css";

function NextDays({ weather5Days }) {
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);



  console.log(nextFiveDays);

  return (
    <div>
      <h2>Previsão para os Próximos 5 Dias</h2>
      {nextFiveDays.map(forecast => (
        <div key={forecast.dt}>
          <p>{new Date(forecast.dt * 1000).toLocaleDateString('pt-br', {day: '2-digit', weekday: 'long'})}</p>
          <img 
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} 
            alt={forecast.weather[0].description} 
          />
          <p>{forecast.weather[0].description}</p>
          <p>{Math.round(forecast.main.temp_min)} min. / {Math.round(forecast.main.temp_max)} máx.</p>
        </div>
      ))}
    </div>
  );
}

export default NextDays;
