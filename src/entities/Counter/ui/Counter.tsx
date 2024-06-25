import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '..'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const { t } = useTranslation('main')

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <br />
      <br />
      <Button
        data-testid="counter-increment"
        onClick={increment}
      >
        {t('Увеличить')}
      </Button>
      <Button
        data-testid="counter-decrement"
        onClick={decrement}
      >
        {t('Уменьшить')}
      </Button>
    </div>
  )
}
