import React, { useRef, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import './styles/App.css'
import { useStateValue } from '../StateProviser'
import ClosingAlert from "@material-tailwind/react/ClosingAlert";


export default function Products({name, description, imgSrc, price}) {
    
    const [{basket}, dispatch] = useStateValue();
    const [validcart, setValidCart] = useState(false);
    const handleCart = (e) => {
        dispatch({
            type : 'ADD_ITEM',
            item : {
                name,
                description,
                imgSrc,
                price
            }
        })
        setValidCart(true);
    }

  return (
        <Card className='card'>
            <CardImage id='cardImg' className='CardImage'
                src={imgSrc}
                alt="Product Image"
            />

            <CardBody className='cardBody'>
                <h1 color='red'>{name}</h1>
                <Paragraph color="gray">
                {description}
                </Paragraph>
            </CardBody>

            <CardFooter>
            <div className="card_footer">
                <Button
                    color="red"
                    type="button"
                    onClick={handleCart}
                    ripple="light"
                >
                    ADD TO CART
                </Button>
                <h4>{price}</h4>
            </div> 
            </CardFooter>
            {
                validcart ? (
                    <ClosingAlert color="lightBlue">
                        Product added to your cart
                    </ClosingAlert>
                ) : (
                    <div></div>
                )
            }
            </Card>
  );
}