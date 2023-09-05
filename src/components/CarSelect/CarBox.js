import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <BoxCars key={id} >
          {/* car */}
          <PickCar>
            {carLoad && <Loader></Loader>}
            <Image
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </PickCar>

          {/* description */}
          <Wrap>
            <p>
            <span>${car.price}</span> / rent per day
            </p>
              
            <Table>
              <Column>
                <Data>Model</Data>
                <Data>{car.model}</Data>
              </Column>

              <Column>
                <Data>Mark</Data>
                <Data>{car.mark}</Data>
              </Column>

              <Column>
                <Data>Year</Data>
                <Data>{car.year}</Data>
              </Column>

              <Column>
                <Data>Doors</Data>
                <Data>{car.doors}</Data>
              </Column>

              <Column>
                <Data>AC</Data>
                <Data>{car.air}</Data>
              </Column>

              <Column>
                <Data>Transmission</Data>
                <Data>{car.transmission}</Data>
              </Column>

              <Column>
                <Data>Fuel</Data>
                <Data>{car.fuel}</Data>
              </Column>
            </Table>
            {/* btn cta */}
            
            <Link to="/vehicles">
            <Button>Reserve Now</Button>
            </Link>
            
          </Wrap>
        </BoxCars>
      ))}
    </>
  );
}

export default CarBox;

const BoxCars = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 0.7;

@media screen and (max-width:600px){
  flex-direction: column;
}
`
const PickCar = styled.div`
flex: 0.6;
display: flex;
align-items: center;
justify-content: center;
`

const Button = styled.button`
margin-bottom:5px;
box-shadow: none;
border: none;
width: 100%;
font-size: 12px;
margin-top: 10px;
@media screen and (max-width:768px){
  font-size: 15px;
}
`

const Table = styled.table`
border: solid 1px lightgrey;
width: 100%;
`


const Column = styled.tr`
border-bottom: 1px solid #dddddd;

&:nth-of-type(even){
  background-color: #f3f3f3;
}
&:last-of-type{
  border-bottom: 2px solid #009879;
}
`

const Data = styled.td`
padding: 2% 5%;
@media screen and (max-width:425pc){
  padding: 12px 15px;
}

`

const Wrap = styled.div`
flex: 0.4;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0px 5%;

>p{
  background-color: #fa4226;
  color: white;
  font-weight: 200;
  padding: 3%;

  >span{
    color: white;
    font-weight: 700;
  }
}
`

const Loader = styled.span` 
  width: 48px;
  height: 48px;
  border: 5px solid rgba(0, 0, 0, 0.2588235294);
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  right: 43%;

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  `

const Image = styled.img`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
object-fit: contain;
`