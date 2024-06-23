/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((p) => !p)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <Button
        className={cls.links}
        theme={ButtonVariant.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>

      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad alias amet corporis dolor expedita
        harum incidunt maiores molestias nesciunt nihil omnis possimus tempore voluptates voluptatibus. Adipisci
        cum ex facere nemo odio possimus qui quod recusandae voluptas? Asperiores delectus ipsum magnam minus
        mollitia neque perspiciatis provident quas saepe temporibus. Beatae blanditiis corporis dicta
        exercitationem impedit ipsum, laudantium maiores nihil rerum voluptate! Alias, doloribus fugit iusto
        natus nesciunt officia? Adipisci aliquid dolores expedita, harum iusto, nobis obcaecati quam quia rerum
        sed sit totam vero. Beatae corporis cumque debitis eveniet ipsum iusto magni maxime minus nam nesciunt
        perspiciatis placeat provident repellat, sit sunt vel voluptatibus. Accusantium autem cum debitis
        deleniti dolorem eligendi enim esse eveniet, fugiat id illum iure molestias nam nisi nulla odio omnis
        optio quas recusandae rem, reprehenderit saepe sapiente sequi suscipit tenetur ut, velit voluptatibus!
        Amet ducimus eaque eveniet itaque magnam provident voluptates? Aperiam dignissimos dolor est inventore
        ipsam, magnam nulla qui repudiandae? Ad adipisci aperiam architecto autem dolor ex facere hic, in
        incidunt, molestiae molestias odit officiis quasi quibusdam similique sit sunt totam voluptatibus?
        Architecto commodi ea laborum maxime quaerat. Alias aliquam corporis, doloremque illo maxime nam nemo
        neque non numquam praesentium quia quo reprehenderit veniam voluptas voluptatem?
      </Modal>
    </div>
  )
}
