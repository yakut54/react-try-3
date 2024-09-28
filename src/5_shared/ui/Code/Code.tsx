import { FC, memo, useCallback } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import CopyIcon from '5_shared/assets/icons/copy.svg'
import cls from './Code.module.scss'

interface CodeProps {
    className?: string
    textCode: string
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, textCode } = props

  const onCopy = useCallback(() => {
    window.navigator.clipboard.writeText(textCode)
  }, [textCode])

  return (
    <pre
      className={classNames(cls.code, {}, [className])}
    >
      <Button
        onClick={onCopy}
        className={cls['copy-btn']}
        theme={ButtonVariant.CLEAR}
      >
        <CopyIcon className={cls['copy-icon']} />
      </Button>
      <code>
        {textCode}
      </code>
    </pre>
  )
})

Code.displayName = 'Code'
