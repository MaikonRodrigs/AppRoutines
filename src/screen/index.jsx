import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import Routines from '../assets/data/Routines'


function Screen() {
  const [hours, setHours] = useState('1:40')
  const [currentArray, setCurrentArray] = useState(1)

  const seHou = useCallback(() => {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    const time = horas + ':' + minutos
    setHours(time)

    // if (horas < 9) {
    //   const time = '0' + horas + ':' + minutos
    //   setHours(time)
    // } else {
    //   const time = horas + ':' + minutos
    //   setHours(time)
    // }

    // if (horas >= 9 && minutos >= 9) {
    //   const time = horas + ':' + minutos
    //   setHours(time)
    // }

    // if (horas >= 9 && minutos <= 9) {
    //   const time = horas + ':' + '0' + minutos
    //   setHours(time)
    // }

    // if (horas <= 9 && minutos <= 9) {
    //   const time = '0' + horas + ':' + '0' + minutos
    //   setHours(time)
    // }
  }, [])


  function next() {
    setHours(currentArray + 1)
  }

  useEffect(() => {
    seHou()
    console.log(hours)
    setInterval(() => {
      seHou()
    }, 60000)
  }, [])

  const data = Routines.routine

  function routine(i) {
    return (
      <S.Container>
        <S.Card >
          <S.Img background={data[i].background} >
            <S.Header>
              <S.TasksAppIcon />
              <S.User>Maikon</S.User>
            </S.Header>
          </S.Img>
          <S.Description>
            {data[i]?.title}
          </S.Description>
          <S.DoMore>
            {data[i]?.description.toLowerCase()}
          </S.DoMore>
          <S.RowTimed>
            <S.Timed>{data[i]?.hour}</S.Timed>
            <S.NextMore>
              <S.ArrowCircleRightIcon />
              <S.TimedNext>{data[i]?.next}</S.TimedNext>
            </S.NextMore>
          </S.RowTimed>
        </S.Card>
        <S.NextCard >
          <S.Img background={data[i + 1].background}>
            <S.Header>
              <S.TasksAppIcon />
              <S.User>Maikon</S.User>
            </S.Header>
          </S.Img>
          <S.Description>
            {data[i + 1]?.title}
          </S.Description>
          <S.DoMore>
            {data[i + 1]?.description.toLowerCase()}
          </S.DoMore>
          <S.RowTimed>
            <S.Timed>{data[i + 1]?.hour}</S.Timed>
            <S.NextMore>
              <S.ArrowCircleRightIcon />
              <S.TimedNext>{data[i + 1]?.next}</S.TimedNext>
            </S.NextMore>
          </S.RowTimed>
        </S.NextCard>
      </S.Container >
    )
  }
  if (hours >= '8:40' && hours <= '8:50') { return routine(0) }
  if (hours >= '8:50' && hours <= '9:00') { return routine(1) }
  if (hours >= '9:00' && hours <= '9:15') { return routine(2) }
  if (hours >= '09:15' && hours <= '10:20') { return routine(3) }
  if (hours >= '10:20' && hours <= '10:40') { return routine(4) }
  if (hours >= '10:40' && hours <= '11:45') { return routine(5) }
  if (hours >= '11:45' && hours <= '12:15') { return routine(6) }
  if (hours >= '12:15' && hours <= '14:00') { return routine(7) }
  if (hours >= '14:00' && hours <= '14:15') { return routine(8) }
  if (hours >= '14:15' && hours <= '16:00') { return routine(9) }
  if (hours >= '16:00' && hours <= '16:20') { return routine(10) }
  if (hours >= '16:20' && hours <= '18:00') { return routine(11) }
  if (hours >= '18:00' && hours <= '18:15') { return routine(12) }
  if (hours >= '18:15' && hours <= '19:00') { return routine(13) }
  if (hours >= '19:00' && hours <= '19:20') { return routine(14) }
  if (hours >= '19:20' && hours <= '21:00') { return routine(15) }
  if (hours >= '21:00' && hours <= '22:00') { return routine(16) }
  if (hours >= '22:00' && hours <= '22:20') { return routine(17) }
  if (hours >= '22:20' && hours <= '23:59') { return routine(18) }
  if (hours >= '00:01' && hours <= '00:20') { return routine(19) }
  if (hours >= '00:20' && hours <= '00:30') { return routine(21) }
  if (hours >= '00:30' && hours <= '00:50') { return routine(22) }
  if (hours >= '1:50' && hours <= '8:40') { return routine(23) }

}




export default Screen;