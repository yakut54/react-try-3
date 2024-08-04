import { Button } from '5_shared/ui/Button/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '..'

export const Counter = () => {
  const dispatch = useAppDispatch()
  const counterValue = useAppSelector(getCounterValue)

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
