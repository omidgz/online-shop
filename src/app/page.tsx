import ItemComponent from "../../components/ItemComponent";
import { ItemType } from "../../types/Item";
import Stack from "react-bootstrap/Stack"


const items: Array<ItemType> = [
  {
    id: 0,
    img: "next.svg",
    title: "title1",
    description: "Viverra ut quam purus facilisis sapien. Litora purus natoque auctor penatibus suspendisse donec. Mattis venenatis inceptos congue litora magnis consectetur quam. Egestas accumsan nullam aliquet dictumst lobortis. Tellus nibh netus interdum maximus sociosqu mi.",
  },
  {
    id: 1,
    img: "next.svg",
    title: "title2",
    description: " Metus facilisis mattis fermentum cras duis litora fusce. Amet mauris parturient augue vitae odio proin etiam pellentesque. Iaculis molestie eu amet vestibulum rhoncus litora habitasse vel.",
  },
];

export default function Home() {
  return (
    <>
      <Stack direction="horizontal" gap={3}>

      {items.map((item) => (
        <>
          <ItemComponent
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        </>

      ))}

      </Stack>
    </>
  );
}
