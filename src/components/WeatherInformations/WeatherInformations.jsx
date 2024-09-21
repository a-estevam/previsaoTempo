import './WeatherInformations.css'

function WeatherInformations({weather}) {

  // Verifica se o objeto weather e suas propriedades existem
  // if (!weather || !weather.weather || !weather.weather[0]) {
  //     return <p>Carregando informações meteorológicas...</p>;
  // }

  console.log(weather);

  return (
      <div>
          <h2>{weather.name}</h2>
          <div>
          <img 
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
              alt={`Ícone do clima ${weather.weather[0].description}`} 
          />
          <p>{Math.round(weather.main.temp)}ºC</p>
          </div>
          <p>{weather.weather[0].description}</p>
          <div>
            <p>sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
            <p>umidade: {weather.main.humidity}%</p>
            <p>Pressão: {weather.main.pressure}hPa</p>
            
          </div>

          
      </div>
  );
}

export default WeatherInformations;
