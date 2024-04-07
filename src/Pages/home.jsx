import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  margin-left: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 50px;
  background-color: #f0f0f0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #666;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e8e41;
  }
`;

const LordosisDetection = () => {
  return (
    <Container>
      <Content>
        <Title>Welcome to Lordosis Detection</Title>
        <Subtitle>
          Our app uses state-of-the-art computer vision algorithms to detect lordosis
          and help you track your progress over time.
        </Subtitle>
        <Button>Register Patient</Button>
      </Content>
      <Image src="/lordosis-image.jpg" alt="Lordosis example" />
    </Container>
  );
};

export default LordosisDetection;