import * as React from "react";
import { ItemType} from "../types/Item";

export default function ItemComponent(props: ItemType){
      return <>{props.text}</>;
}

