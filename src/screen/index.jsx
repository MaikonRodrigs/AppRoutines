import React, { useCallback, useEffect, useState, useMemo } from 'react';

import * as S from './styles';
import Routines from '../assets/data/Routines'

import * as I from '../assets/images/index'

function Screen() {
  const data = Routines.routine

  const [hours, setHours] = useState('')

  const seHou = useCallback(() => {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const time = `${horas}${minutos}`
    setHours(time)

    if (horas < 9) {
      const time = `'0' + ${horas} + ${minutos}`
      setHours(time)
    } else {
      const time = `${horas}${minutos}`
      setHours(time)
    }

    if (horas >= 9 && minutos >= 9) {
      const time = `${horas}${minutos}`
      setHours(time)
    }

    if (horas >= 9 && minutos <= 9) {
      const time = `${horas} + '0' + ${minutos}`
      setHours(time)
    }

    if (horas <= 9 && minutos <= 9) {
      const time = `'0' + ${horas} + '0' + ${minutos}`
      setHours(time)
    }

  }, [])

  function Array(i) {
    if (data[i]?.background === 'morning') { return I.Morning }
    if (data[i]?.background === 'coffe') { return I.Coffe }
    if (data[i]?.background === 'daily') { return I.Daily }
    if (data[i]?.background === 'work_0') { return I.Work_0 }
    if (data[i]?.background === 'run') { return I.Run }
    if (data[i]?.background === 'hungry') { return I.Hungry }
    if (data[i]?.background === 'eat_1') { return I.Eat_1 }
    if (data[i]?.background === 'work_2') { return I.Work_2 }
    if (data[i]?.background === 'work_1') { return I.Work_1 }
    if (data[i]?.background === 'banho') { return I.Banho }
    if (data[i]?.background === 'eat') { return I.Eat }
    if (data[i]?.background === 'relax_2') { return I.Relax_2 }
    if (data[i]?.background === 'study') { return I.Study }
    if (data[i]?.background === 'gaming') { return I.Gaming }
    if (data[i]?.background === 'eat') { return I.Eat }
    if (data[i]?.background === 'water') { return I.Water }
    if (data[i]?.background === 'relax_1') { return I.Relax_1 }
    if (data[i]?.background === 'sleep') { return I.Sleep_1 }
    if (data[i]?.background === 'sleep_1') { return I.Sleep }
  }

  useEffect(() => {
    Array()
    seHou()
    console.log('horas:' + hours)
    setInterval(() => {
      seHou()
      Array()
    }, 30000)
  }, [])

  function routine(i) {
    return (
      <S.Container>
        <S.Card >
          <S.Img background={() => Array(i)}>
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
      </S.Container >
    )
  }

  if (hours >= '0840' && hours <= '0850') { return routine(0) }
  if (hours >= '0850' && hours <= '0090') { return routine(1) }
  if (hours >= '0900' && hours <= '0915') { return routine(2) }
  if (hours >= '0915' && hours <= '1020') { return routine(3) }
  if (hours >= '1020' && hours <= '1040') { return routine(4) }
  if (hours >= '1040' && hours <= '1145') { return routine(5) }
  if (hours >= '1145' && hours <= '1215') { return routine(6) }
  if (hours >= '1215' && hours <= '1400') { return routine(7) }
  if (hours >= '1400' && hours <= '1415') { return routine(8) }
  if (hours >= '1415' && hours <= '1600') { return routine(9) }
  if (hours >= '1600' && hours <= '1620') { return routine(10) }
  if (hours >= '1620' && hours <= '1800') { return routine(11) }
  if (hours >= '1800' && hours <= '1815') { return routine(12) }
  if (hours >= '1815' && hours <= '1900') { return routine(13) }
  if (hours >= '1900' && hours <= '1920') { return routine(14) }
  if (hours >= '1920' && hours <= '2100') { return routine(15) }
  if (hours >= '2100' && hours <= '2200') { return routine(16) }
  if (hours >= '2200' && hours <= '2220') { return routine(17) }
  if (hours >= '2220' && hours <= '2359') { return routine(18) }
  if (hours >= '0000' && hours <= '0030') { return routine(19) }
  if (hours >= '0020' && hours <= '0030') { return routine(20) }
  if (hours >= '0030' && hours <= '0100') { return routine(22) }
  if (hours >= '0100' && hours <= '0130') { return routine(23) }
  else { return routine(23) }
}


export default Screen;