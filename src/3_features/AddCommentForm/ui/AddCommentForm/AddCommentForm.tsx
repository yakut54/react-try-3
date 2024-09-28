import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '5_shared/ui/Input/Input'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { getAddCommentFormText } from '../../model/selectors/getAddCommentForm'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string
    // eslint-disable-next-line no-unused-vars
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation('comments')
  const text = useAppSelector(getAddCommentFormText)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(cls['add-comment-form'], {}, [className])}
      >
        <Input
          value={text}
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          onChange={onCommentTextChange}
        />
        <Button
          onClick={onSendHandler}
          theme={ButtonVariant.BACKGROUND_INVERTED_OUTLINE}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

AddCommentForm.displayName = 'AddCommentForm'

export default AddCommentForm
