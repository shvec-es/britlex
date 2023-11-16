import { Component } from 'react';
import { getData } from 'api/api';

export class Weather extends Component {
  state = {
    weatherInfo: null,
  };

  componentDidMount = () => {
    getData('Dnipro')
      .then(data => this.setState({ weatherInfo: data }))
      .catch(err => console.log(err));
  };

  componentDidUpdate = prevProps => {
    if (prevProps.query !== this.props.query)
      getData(this.props.query)
        .then(data => this.setState({ weatherInfo: data }))
        .catch(err => console.log(err));
  };

  render() {
    const { weatherInfo } = this.state;

    return (
      <section>
        {weatherInfo && (
          <>
            <h2>City: {weatherInfo.name}</h2>
            <h3>Country: {weatherInfo.sys.country}</h3>
            <p>Temperature: {parseInt(weatherInfo.main.temp - 270)}C</p>
            <p>Cloudly {weatherInfo.clouds.all}%</p>
            <p>Wind {weatherInfo.wind.speed}</p>
            <p onClick={() => this.props.toShowForm()}>
              Do you want to know weather in another city?
            </p>
          </>
        )}
      </section>
    );
  }
}
