import image1 from '../assets/team/1.png'
import image2 from '../assets/team/2.png'
import image3 from '../assets/team/3.png'
import image4 from '../assets/team/4.png'
import image5 from '../assets/team/5.png'
import image6 from '../assets/team/6.png'


//Name of the car manufacturers i gathered
export const manufacturers = [
    "Audi",
    "BMW",
    "Fiat",
    "Ford",
    "Ferarri",
    "General Motors",
    "Honda",
    "Hyundai",
    "Jaguar", 
    "Land Rover",
    "Kia",
    "Lamboghini",
    "Mazda",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Peugeot",
    "Renault",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
  ];
  
  manufacturers.sort();

//List of Team Members for the Meet the team page

  export const team = [
    {
        imageUrl : image1,
        name: "Darren Smith",
        position: "CEO and Founding Partner",
    },
    {
        imageUrl : image2,
        name: "Rick Sanches",
        position: "Founding Partner",
    },
    {
        imageUrl : image3,
        name: "Amanda Sikeyi",
        position: "Marketing Director",
    },
    {
        imageUrl : image4,
        name: "Lyne Smalling",
        position: "Operations Officer",
    },
    {
        imageUrl : image5,
        name: "Godsave Martin",
        position: "Digital Strategist",
    },
    {
        imageUrl : image6,
        name: "Tessa Van Dijk",
        position: "Director Of Operations",
    },
]


//Calculating the Car Rental Price based upon the given mileage of the car

export const CalculateCarRent = ({city_mpg, year}) => {
    const basePricePerDay = 50; //Average Base rental price in usd (Zimbaber)

    const mileageFactor = 0.1; //Additional rate per mile in Zimbabwe

    const ageFactor = 0.05; //Additional rate per year of vehicle in Zimbabwe

    //Calculate additiona rate based on mileage and age

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear()- year) * ageFactor;

    //calculate total rent per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

//Generating car image urls since our api doesnt have images 
export const generateCarImageUrl = ({carGroup}) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    url.searchParams.append('customer', '');
    url.searchParams.append('make', `${carGroup.make}`);
    url.searchParams.append('modelFamily', carGroup.model.split(''));
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${carGroup.year}`);
    //url.searchParams.append('angle', `${angle}`);
     return `${url}`;

}