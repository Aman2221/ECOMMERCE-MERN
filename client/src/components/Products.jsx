import React, { useRef, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import './styles/App.css'
import { useStateValue } from '../StateProviser'
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";

export default function Products({name, description, imgSrc, price}) {
    
    const [showModal, setShowModal] = useState(false);
    const [{basket}, dispatch] = useStateValue();
    const buttonRef = useRef();
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
    }
  return (
        <Card className='card'>
            <CardImage className='CardImage'
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
                    onClick={(e) => setShowModal(true)}
                    ripple="light"
                >
                    ADD TO CART
                </Button>
                <h4>{price}</h4>
            </div> 
            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    ADD TO CART
                </ModalHeader>
                <ModalBody>
                <p className="text-base leading-relaxed text-gray-600 font-normal">
                    Do you want to add this product to your cart ?
                </p>
                </ModalBody>
                <ModalFooter>
                <Button 
                    color="red"
                    buttonType="link"
                    onClick={(e) => setShowModal(false)}
                    ripple="dark"
                >
                    No
                </Button>

                <Button
                    color="green"
                    onClick={(e) => {   
                        handleCart()
                        setShowModal(false) 
                    }}
                    ripple="light"
                >
                    yes
                </Button>
                </ModalFooter>
            </Modal>
            </CardFooter>
            </Card>
  );
}