import React from 'react';
import MobileImg from '../../assets/images/image-product-mobile.jpg';
import DesktopImg from '../../assets/images/image-product-desktop.jpg';
import styled from 'styled-components';
import Button from '../button/Button';

const Card = () => {
  return (
    <CardWrapper>
      <StyledImage />
      <ContentWrapper>
        <Perfume>PERFUME</Perfume>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </Description>
        <PriceWrapper>
          <PriceText>$149.99</PriceText>
          <OldPriceText>$169.99</OldPriceText>
        </PriceWrapper>
        <Button />
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 28px 16px;
  background-color: white;
  border-radius: 10px;

  @media (min-width: 500px) {
    flex-direction: row;
    max-width: 600px;
    max-height: 450px;
  }
`;

const StyledImage = styled.div`
  border-radius: 10px 10px 0 0;
  background-image: url(${MobileImg});
  background-size: cover;
  min-width: 343px;
  min-height: 240px;

  @media (min-width: 500px) {
    border-radius: 10px 0 0 10px;
    min-width: 300px;
    min-height: 450px;
    background-image: url(${DesktopImg});
  }
`;

const ContentWrapper = styled.div`
  padding: 0 24px;
  padding-bottom: 24px;
  text-align: left;

    @media (min-width: 500px) {
      padding: 32px 24px;
  }
`;

const Title = styled.p`
  margin-top: 12px;
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #1c232b;

    @media (min-width: 500px) {
      margin-top: 20px;
      margin-bottom: 24px;
  }
`;

const Perfume = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 5px;
  color: #6c7289;

  margin-bottom: 20px;

    @media (min-width: 500px) {
      margin: 0
  }
`;

const Description = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  color: #6c7289;

  margin-top: 16px;
  margin-bottom: 24px;

  @media (min-width: 500px) {
    margin-top: 24px;
    margin-bottom: 29px;
  }
`;

const PriceText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #3d8168;
  margin: 0;
`;

const OldPriceText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  text-decoration-line: line-through;
  color: #6c7289;

  margin-left: 19px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;


  margin-top: 24px;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    margin-top: 29px;
    margin-bottom: 30px;
  }
`