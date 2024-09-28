import type { StoryFn } from '@storybook/react/'

export const CssSBDecorator = (cssClass: string) => {
  const DecoratedStoryComponent = (StoryComponent: StoryFn) => (
    <div className={cssClass}>
      <StoryComponent />
    </div>
  )

  DecoratedStoryComponent.displayName = 'CssSBDecorator'
  return DecoratedStoryComponent
}
