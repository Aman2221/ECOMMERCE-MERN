import React, { useRef, useState } from 'react'
import Button from "@material-tailwind/react/Button";
import { useStateValue } from "../StateProviser";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import "material-icons/css/material-icons.min.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Input from "@material-tailwind/react/Input";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = () => {

    const [{basket}] = useStateValue();
    const buttonRef = useRef();
    const [CardNumber, setCardNumber] = useState();
    const [error, setError] = useState('');
    const handleError = () => {
        if(CardNumber?.length === 16){
            setError('✔️')
        }
        if(CardNumber?.length >= 16){
            setError(`Invalid Card Number`)
        }
    }
    const handleBuy = () => {
        console.log(basket);
    }
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        {
            basket.length > 0 ? (
                <div className='cart'>
                {
                    basket.map(product => (
                    <div className='cartItems'>
                        <div className='ProductImages'>
                            <img src={product.imgSrc} alt="image"/>
                        </div>
                        <div className='productDetails'>
                            <h1>{product.name}</h1>
                            <h2>{product.description}</h2>
                            <h3>{product.price}</h3>
                             <Button
                                color="red"
                                type="button"
                                onClick={(e) => setShowModal(true)}
                                ripple="light"
                            >
                                Buy now
                            </Button>
                        </div>
                        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                            <ModalHeader toggler={() => setShowModal(false)}>
                                <LocationOnIcon/> ADD ADDRESS
                            </ModalHeader>
                            <ModalBody>
                             <InputIcon
                                type="text"
                                color="lightBlue"
                                size="regular"
                                outline={true}
                                placeholder="Country/Region"
                                /><br/>
                                <InputIcon
                                type="text"
                                color="lightBlue"
                                size="regular"
                                outline={true}
                                placeholder="Mobile number"
                                /><br/>
                                <InputIcon
                                type="text"
                                color="lightBlue"
                                size="regular"
                                outline={true}
                                placeholder="Landmark, Area, PIN code"
                                /><br/>
                                <InputIcon
                                type="text"
                                color="lightBlue"
                                size="regular"
                                outline={true}
                                placeholder="PIN code"
                                /><br/>
                                <Input
                                    type="text"
                                    color="lightBlue"
                                    size="Regular"
                                    outline={true}
                                    placeholder="16 digit card number"
                                    error={error}
                                    onChange={handleError}
                                    onChange={(e) => {
                                        setCardNumber(e.target.value);
                                        handleError()
                                    }
                                    }
                                /><br/>
                            <p className="text-base leading-relaxed text-gray-600 font-normal">
                                This product will be delivered to you in <br/> 3-4 business days 🙂
                            </p>
                            </ModalBody>
                            <ModalFooter>
                            <Button 
                                color="red"
                                buttonType="link"
                                onClick={(e) => setShowModal(false)}
                                ripple="dark"
                            >
                                Cancel
                            </Button>

                            <Button
                                color="white"
                                onClick={(e) => {   
                                    handleBuy()
                                }}
                                id='displayNoneBTN'
                            >  
                            </Button>
                            {
                                    CardNumber?.length === 16 ? (
                                        <PayPalScriptProvider options={{ "client-id": "test" }}>
                                            <PayPalButtons style={{ layout: "horizontal" }} />
                                        </PayPalScriptProvider>
                                    ) : (
                                        <Button color="green" ref={buttonRef} ripple="light" onClick={handleError}>
                                                Confirm
                                        </Button>   
                                    )
                            }
                                <Popover placement="right" ref={buttonRef}>
                                    <PopoverContainer>
                                        <PopoverHeader >Invalid ❌</PopoverHeader>
                                        <PopoverBody>
                                            <p className="text-base leading-relaxed text-gray-600 font-normal">
                                                Please fill all fields properly or  {error}
                                            </p>
                                        </PopoverBody>
                                    </PopoverContainer>   
                                </Popover>
                            </ModalFooter>
                        </Modal>
                    </div>
            ))
        }
        </div>
            ) : (
                <div className='emptyCartMessage'>
                    <h1>Your Cart is Empty</h1>
                </div>
            )
        }
        </>
    )
}

export default Cart
