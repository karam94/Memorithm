using System.Collections.Generic;
using memorithm.Models;

namespace memorithm.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
