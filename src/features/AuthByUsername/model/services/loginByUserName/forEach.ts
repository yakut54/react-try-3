export type Callback = () => boolean

export type ForEachProps = {
    items: number[]
    callback: Callback
}

export function forEach(options: ForEachProps) {
  const { items, callback } = options

  items.forEach(callback)
}
