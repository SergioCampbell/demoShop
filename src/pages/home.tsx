import { useEffect, useState } from "react";
import { Button, Row, Col, Container, Nav, NavLink, Card } from "react-bootstrap";
import './pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import CardHeader from "react-bootstrap/esm/CardHeader";
import Products from "../components/products";
import MyNav from "../components/Navbar";

export default function Home(inv: any) {
    let params = useParams();
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        hola()
    }, [])

    let url = '../data.json'

    const hola = () => {
        fetch(url)
            .then(response => response.json())
            .then(response => console.log(response))
    }
    const thisDate = new Date()
    let create = thisDate.getTime()
    return (
        <>
            <MyNav />
        <Container>
            <h2>Welcome, {params.username} :D</h2>

            <section className="mt-5 container-fluid">
                <h4>Product List</h4> <span>total products: {}</span>
                <div className="row">
                    <Products id={0} warehouse_id={0} product_id={2} stock={0} available={0} reserved={0} active={0} />
                </div>
            </section>
        </Container >
        </>
    )
}