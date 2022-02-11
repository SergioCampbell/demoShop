import { useEffect, useState } from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Inventory } from "../interface/interface";
import DATA from '../data/data';
import './card.css'

export default function Products(inventory: Inventory) {
    const [inventary, seInventary] = useState([] as any[]);
    const [isOpen, setOpen] = useState(false);

    const update = async () => {
        let algo: any = await DATA;
        seInventary(algo)
        setOpen(true)
        //console.log('algo: ',algo)
    }

    useEffect(() => {
        update()
    },[])
    console.log('inventary: \n', inventary)
    return (
        <div className="col-sm col-md-4">
            {inventary.map((item, index) => (
                <Card key={index} className="mt-4 mb-3">
                    < CardHeader >
                        <CardImg src={`https://via.placeholder.com/2700/9975fa/FFFFFF/?text=Cover photo goes here :D`} 
                        alt="Cover photo goes here :D" 
                        className="imageCard" />
                        <Card.Subtitle className="mb-2 text-muted">Producto {item.shop.name} • Color: {item.products[0].color.name}</Card.Subtitle>
                    </CardHeader>
                    <Card.Body>
                        <Card.Title>{item.products[0]?.description}</Card.Title>
                        <Card.Text> 
                            Tipo: {item.products[0]?.productType} - 
                            Referencia: {item.products[0]?.reference}  <br />
                            {!isOpen ? <span className="text-muted fs-8">
                            Dimmensions: <br />
                            - height {item.products[0]?.shipping.height} <br />
                            - width: {item.products[0]?.shipping.width}<br />
                            - long: {item.products[0]?.shipping.long}<br />
                            - volume: {item.products[0]?.shipping.volume}<br />
                            - weight: {item.products[0]?.shipping.weight}
                            </span> : <button className="btn btn-outline-secondary btn-sm mt-2 mb-2" onClick={() => {setOpen(false)}}>More details</button>}
                        <br /> 
                        <span className="badge rounded-pill animated">${item.products[0]?.salePriceTotal}</span>
                        </Card.Text>
                        <Button variant="danger">Do somenthing</Button>
                    </Card.Body>
                </Card>
            )
            )}
        </div>
    )
}
