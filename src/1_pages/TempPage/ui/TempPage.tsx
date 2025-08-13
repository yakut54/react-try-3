import {
  FC, memo, useRef,
} from 'react'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { tempPageReducer } from '1_pages/TempPage/model/slice/tempPageSlice'
import { useVirtualizer } from '@tanstack/react-virtual'
import { PageWrapper } from '2_widgets/PageWrapper/PageWrapper'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './TempPage.module.scss'

const reducer: ReducersList = {
  tempPage: tempPageReducer,
}

const TempPage: FC = memo(() => {
  // The scrollable element for your list
  const parentRef = useRef(null)

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  })

  return (
    <DynamicModuleLoader reducers={reducer}>
      <PageWrapper
        className={classNames(cls['temp-page'], {}, [])}
      >
        <>
          {/* The scrollable element for your list */}
          <div
            ref={parentRef}
            style={{
              height: '100%',
              overflow: 'auto', // Make it scroll!
              width: '100%',
            }}
          >
            {/* The large inner element to hold all of the items */}
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
              }}
            >
              {/* Only the visible items in the virtualizer, manually positioned to be in view */}
              {rowVirtualizer.getVirtualItems().map((virtualItem) => (
                <div
                  key={String(virtualItem.key)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  {virtualItem.index}
                </div>
              ))}
            </div>
          </div>
        </>
      </PageWrapper>
    </DynamicModuleLoader>
  )
})

TempPage.displayName = 'TempPage'

export default TempPage
