import {
  FC, memo, SVGProps, VFC,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { ArticleView } from '4_entities/Article'
import TileIcon from '5_shared/assets/icons/tiled.svg'
import ListIcon from '5_shared/assets/icons/list.svg'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { Icon } from '5_shared/ui/Icon/Icon'
import cls from './ArticleViewSwitcher.module.scss'

interface ArticleViewSwitcherProps {
    className?: string,
    view: ArticleView,
    // eslint-disable-next-line no-unused-vars
    onViewClick?: (view: ArticleView) => void
}

type ViewType = { view: ArticleView, icon: VFC<SVGProps<SVGSVGElement>> }

const viewTypes: ViewType[] = [
  { view: 'tile', icon: TileIcon },
  { view: 'list', icon: ListIcon },
]

export const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo((props: ArticleViewSwitcherProps) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div
      className={classNames(cls['article-view-switcher'], {}, [className])}
    >
      {
        viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            theme={ButtonVariant.CLEAR}
            onClick={onClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={
                classNames('', { [cls.selected]: view === viewType.view }, [])
              }
            />
          </Button>
        ))
      }
    </div>
  )
})

ArticleViewSwitcher.displayName = 'ArticleViewSwitcher'
