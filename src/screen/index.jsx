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
    // console.log('hours:' + time + ' || '+ 'useState:' + hours)
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
    console.log(hours)
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

  if (hours >= '840' && hours <= '850') { return routine(0) }
  if (hours >= '850' && hours <= '90') { return routine(1) }
  if (hours >= '90' && hours <= '915') { return routine(2) }
  if (hours >= '915' && hours <= '1020') { return routine(3) }
  if (hours >= '1020' && hours <= '1040') { return routine(4) }
  if (hours >= '1040' && hours <= '1145') { return routine(5) }
  if (hours >= '1145' && hours <= '1215') { return routine(6) }
  if (hours >= '1215' && hours <= '1400') { return routine(7) }
  if (hours >= '1400' && hours <= '1415') { return routine(8) }
  if (hours >= '1415' && hours <= '1600') { return routine(9) }
  if (hours >= '1600' && hours <= '1620') { return routine(10) }
  if (hours >= '1620' && hours <= '1800') { return routine(11) }
  if (hours >= '1800' && hours <= '1815') { return routine(12) }
  if (hours >= '1815' && hours <= '190') { return routine(13) }
  if (hours >= '190' && hours <= '1920') { return routine(14) }
  if (hours >= '1920' && hours <= '210') { return routine(15) }
  if (hours >= '210' && hours <= '220') { return routine(16) }
  if (hours >= '220' && hours <= '2220') { return routine(17) }
  if (hours >= '2220' && hours <= '00') { return routine(18) }
  if (hours >= '00' && hours <= '020') { return routine(19) }
  if (hours >= '020' && hours <= '030') { return routine(21) }
  if (hours >= '030' && hours <= '050') { return routine(22) }
  if (hours >= '150' && hours <= '840') { return routine(23) }
  else { return routine(23) }
}


export default Screen;