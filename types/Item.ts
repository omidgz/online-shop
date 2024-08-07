export type ItemType={
  id: number;
  img: string
  title: string
  description: string
}

export type ItemsProps = {
  items:Array<ItemType>
}