import ItemComponent from "../../components/ItemComponent";
import { ItemType } from "../../types/Item";

const items: Array<ItemType> = [
  {
    id: 0,
    text: "text",
  },
  {
    id: 1,
    text: "text1",
  },
];

export default function Home() {
  return (
    <>
      {items.map((item) => (
        <>
          <ItemComponent key={item.id} id={item.id} text={item.text} />
        </>

      ))}

    </>
  );
}
