import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import Routines from '../assets/data/Routines'
import SVG from '../assets/images/sleep.svg'
const url_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'


function renderImage(id) {
  return (
    `${url_img}${id}.png`
  )
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

function Screen() {
  const [hours, setHours] = useState('')
  const seHou = useCallback(() => {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();

    if (horas < 9) {
      const time = '0' + horas + ':' + minutos
      setHours(time)
    } else {
      const time = horas + ':' + minutos
      setHours(time)
    }

    if (horas >= 9 && minutos >= 9) {
      const time = horas + ':' + minutos
      setHours(time)
    }

    if (horas >= 9 && minutos <= 9) {
      const time = horas + ':' + '0' + minutos
      setHours(time)
    }

    if (horas <= 9 && minutos <= 9) {
      const time = '0' + horas + ':' + '0' + minutos
      setHours(time)

    }
  }, [])


  useEffect(() => {
    seHou()
    setInterval(() => {
    }, 60000)
  }, [])

  const data = Routines.routine

  function routine(i) {
    return (
      <S.Container>
        <S.Row backgroundColor={data[i]?.backgroundColor}>
          <S.Card>
            {/* <S.Title>{data[i]?.title}</S.Title>
            <S.Details>{data[i]?.description}</S.Details>
            {hours} */}
            <S.Hour>{hours}</S.Hour>
          </S.Card>
        </S.Row>
      </S.Container >
    )
  }

  if (hours === '2:40') {
    return (
      <S.Container>
        {routine(0)}
      </S.Container >

    )
  }

  if (hours > '05:07') { return routine(10) }
  if (hours === '08:50') { return routine(1) }
  if (hours === '09:00') { return routine(2) }
  if (hours === '09:15') { return routine(3) }
  if (hours === '10:20') { return routine(4) }
  if (hours === '10:40') { return routine(5) }
  if (hours === '11:45') { return routine(6) }
  if (hours === '12:15') { return routine(7) }
  if (hours === '14:15') { return routine(8) }
  if (hours === '3:35') { return routine(9) }
  // if (hours === '8:50') { return routine(10) }
  // if (hours === '8:50') { return routine(11) }
  // if (hours === '8:50') { return routine(12) }
  // if (hours === '8:50') { return routine(13) }
  // if (hours === '8:50') { return routine(14) }
  // if (hours === '8:50') { return routine(15) }
  // if (hours === '8:50') { return routine(16) }
  // if (hours === '8:50') { return routine(17) }
  // if (hours === '8:50') { return routine(18) }
  // if (hours === '8:50') { return routine(19) }
  // if (hours === '8:50') { return routine(20) }
  // if (hours === '8:50') { return routine(21) }
  // if (hours === '8:50') { return routine(22) }
  // if (hours === '8:50') { return routine(23) }
  // if (hours === '01:00') {
  return (
    <S.Container>
      <S.Row backgroundColor="black">
        <S.Card>
          <S.Title>Sleep</S.Title>
          {/* <S.NightShelterIcon /> */}
          <S.Img src={renderImage('143')} />
          <S.Sleep>
            {hours}
          </S.Sleep>
        </S.Card>
      </S.Row>
    </S.Container >
  )
  // }


}




export default Screen;