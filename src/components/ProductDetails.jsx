import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

const ProductDetails = ({cartItems,handleCart}) => {
  const [otherProducts, setOtherProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, price, images, description, category, id } = location.state;
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id}/products?limit=0&offset=19`)
      setOtherProducts(response.data);
    }  getData();
    
  }, [])
  function shortTitle(name){
    const l=name.length;
    const Name=name.split(' ');
    // console.log(Name.length);
    return Name[Name.length-1 ];
  }

  // console.log(otherProducts);
  return (
    <div style={{ padding: "30px 60px" }}>
      <Row>
        <Col lg={1} style={{ marginTop: 80 }}>
          {
            images.map((image, index) => {
              return (

                <img key={index} src={image} width={"120px"} height={"120px"} style={{ margin: "15px 5px", boxSizing: "content-box", borderRadius: 15 }} />
              )
            })
          }
        </Col>
        <Col lg={4}>
          <Card style={{ width: "23rem", margin: '1rem', border: "none" }}>
            <Card.Img style={{ width: "22rem", borderRadius: "15px" }} src={images[0]} />
            <Card.Title style={{ marginTop: "4px" }} >{title}</Card.Title>
            <Card.Text style={{ marginBottom: "4px" }}> $ {price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button 
            onClick={()=>{
              if(id in cartItems){
                const existingItem=cartItems[id]  ;
                console.log("true")
                handleCart({[id]:{title,price,quantity: existingItem.quantity + 1}})
              }
              else{
                handleCart({[id]:{title,price,quantity:1}})
              }

              // navigate("/cart")
            }}
            style={{ width: "120px", }}>Add to cart</Button>
          </Card>
        </Col>
        <Col style={{ margin: "0 10px" }} >
          <h4>Other related products</h4>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {
              otherProducts.map((product) => {
                if(product.id==id) return; 
                return (
                  <Card key={product.id} style={{ width: "7rem", margin: '1rem', border: "none" }}>
                    <Card.Img src={product.images[0]} />
                    <p style={{fontWeight:600,marginBottom:3}}>{shortTitle(product.title)}</p>
                    <Card.Text style={{fontWeight:400,marginBottom:3}}>$ {product.price}</Card.Text>
                    <Button onClick={() => (navigate(`/products/:${product.id}`, { state: product }))} style={{ width: "120px" }}>View item</Button>
                  </Card>
                )
              })
            }
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default ProductDetails
