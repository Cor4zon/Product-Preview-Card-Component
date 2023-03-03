import React, {Image} from 'react';
import styled from 'styled-components';
import IconCart from '../../assets/images/icon-cart.svg';

const Button = () => {
    return (
        <StyledButton>
            <TextButton><CartIconImg src={IconCart} alt="cart" />Add to Cart</TextButton>
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.div`
    background: #3D8168;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    
    display: flex;
    justify-content: center;
`;

const TextButton = styled.p`

    text-align: center;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
`;

const CartIconImg = styled.img`
    margin-right: 10px;
`;