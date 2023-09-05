import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";
import { styled } from "styled-components";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-Button" : "";
  };

  return (
    <>
      <Main>
        <Container>
          <Wrap>
            <Title>
              <h2>Top Vehicle Models</h2>
              <h1>Most <span>Requested</span> Vehicles</h1>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </Title>
            <Content>
              {/* pick car */}
              <ContentBox>
                <Button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </Button>
                <Button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </Button>
                <Button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </Button>
                <Button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </Button>
                <Button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </Button>
                <Button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </Button>
              </ContentBox>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </Content>
          </Wrap>
        </Container>
      </Main>
    </>
  );
}

export default PickCar;

const Main = styled.div`
z-index: 5;
padding: auto 10px;
`
const Container = styled.div`

`
const ContentBox = styled.div`
display: flex;
flex-direction: column;
flex:0.3;
justify-content: center;
align-items: center;
`

const Wrap = styled.div``

const Title = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: auto 10px;
text-align: center;
margin-bottom: 10px;
`

const Content = styled.div`
display: flex;
width: 100%;

@media screen and (max-width:768px){
  flex-direction: column;
}

`

const Button = styled.button`
z-index:5;
background: lightgrey;
margin-bottom:5px;
box-shadow: none;
border: none;
width: 75%;
font-size: 12px;
color: gray;
&:hover{
  color: white;
}

`