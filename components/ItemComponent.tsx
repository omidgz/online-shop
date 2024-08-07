"use client";

import * as React from "react";
import { ItemType } from "../types/Item";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";


export default function ItemComponent(props: ItemType) {
  return <>
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>
          <Badge bg="primary">
            {props.title}
          </Badge>
        </Card.Title>
        <Card.Text style={{ height: '15rem' }}>
          {props.description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  </>;
}

