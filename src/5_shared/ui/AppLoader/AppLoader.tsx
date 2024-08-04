import { classNames } from '5_shared/lib/classNames/classNames'
import { Loader } from '5_shared/ui/AppLoader/Loader/Loader'
import cls from './AppLoader.module.scss'

export const AppLoader = () => (
  <div
    className={classNames(cls['page-loader'], {}, [])}
  >
    <Loader />
  </div>
)
