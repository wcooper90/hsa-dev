/* eslint-disable camelcase */
import React from 'react'
import { Container, Header, Text, Small } from './styles'

const Weather = ({
  weather: {
    weather: [{ description }],
    main: {
      temp_min, temp_max, temp, feels_like,
    },
    name,
  },
}) => (
  <Container>
    <Header>{`It's ${temp}˚`}</Header>
    <Small> {`Feels like: ${feels_like}`}</Small>
    <Text>
      {`Forecast: ${description}.
    High: ${temp_max}˚.
    Low: ${temp_min}˚.`}
    </Text>
  </Container>
)

export default Weather
