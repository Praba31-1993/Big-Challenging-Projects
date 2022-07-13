import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup,Container, Row,Col } from "react-bootstrap";

export default function ApiCard() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState();

  const Users = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      setData(persons);
      console.log("PersonsData", data);
    });
  };
  useEffect(() => {
    Users();
  }, []);
  const ClickData=(i)=>{
    console.log("index",i)
    setIndex(i)
      
  }
  return (
    <>
    <h1>Welcome to Api Datas</h1><hr/>
      <p style={{display:"flex", flexWrap: "wrap"}} >
        {data.map((list, i) => {

          return (
            
            <Row key={list.id}>

              <Col >
                
              <Card style={{ width: "18rem", margin:"5px", border:index===i?"1px solid blue":"1px dotted black"}}>
              <Card.Header>Name: {list.name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>ID: {list.id}</ListGroup.Item>
                
                <ListGroup.Item>Index: {i}</ListGroup.Item>
                <ListGroup.Item>UserName: {list.username}</ListGroup.Item>
                <ListGroup.Item>Email: {list.email}</ListGroup.Item>
                <ListGroup.Item>City: {list.address.city}</ListGroup.Item>
                {/* <ListGroup.Item>{list.email}</ListGroup.Item> */}
                {/* <ListGroup.Item>{list.email}</ListGroup.Item> */}
                {/* <button className="btn btn-primary" onClick={ApiData}>Submit</button> */}
              </ListGroup>
              <button className="btn btn-outline-primary" onClick={e=>ClickData(i)}>Submit</button>
            </Card>

              </Col>
            </Row>
                                 // </div>
          );
        })}
      </p>
    </>
  );
}
