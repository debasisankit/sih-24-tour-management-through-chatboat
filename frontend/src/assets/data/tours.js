import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Manali",
    city: "Himachal Pradesh ",
    distance: 300,
    address:'Somewhere',
    price: 5000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 5,
      },
      {
        name: "Debasis",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Rafting in Rishikesh",
    city: "Rishikesh,Uttarakhand",
    distance: 400,
    address:'Somewhere',
    price: 8000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Jaisalmer Fort",
    city: " Jaisalmer  Rajasthan",
    distance: 500,
    address:'Somewhere',
    price: 7000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Echo Point, Munnar",
    city: "Munnar . Kerala",
    distance: 500,
    address:'Somewhere',
    price: 6000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Kasol",
    city: " Parvati Valley Himachal Pradesh",
    distance: 500,
    address:'Somewhere',
    price: 7500,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Golden Temple",
    city: " Amritsar Punjab",
    distance: 500,
    address:'Somewhere',
    price: 6000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Jaganath Temple",
    city: "Puri Odisha",
    distance: 500,
    address:'Somewhere',
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Delhi",
    city: " Golden Triangle India ",
    distance: 500,
    address:'Somewhere',
    price: 4500,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
