import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductsGallery = () => {
    const [products,setProducts]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        async function getProduct(){
            const response=await axios.get("https://api.escuelajs.co/api/v1/products")
            // console.log(response);
            setProducts(response.data);
        }
        getProduct();
    })
    

  return (
    <div>
        <h2>Select Products </h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {
                products.map((product)=>{
                    return(
                        <Card key={product.id} style={{width:"18rem",margin:'1rem',border:"none"}}>
                             <Card.Img src={product.images[0]}/>
                             <Card.Title >{product.title}</Card.Title>
                             <Card.Text>$ {product.price}</Card.Text>
                             <Button onClick={()=>(navigate(`/products/:${product.id}`,{state:product}))} style={{display:"relative",bottom:0,width:"120px"}}>View item</Button>
                        </Card>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default ProductsGallery
