import React,{useState} from 'react'
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour;

    const navigate = useNavigate()



    const [ credentials, setCredentials] = useState({
        userId: '01',
        userEmail:'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:'',
    })
    const handleChange = e => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
    };

    const serviceFee = 500;
    const totalAmout = Number(price) * Number(credentials.guestSize) + Number(serviceFee);


    const handleClick =e=>{
        e.preventDefault();
        
        navigate("/thank-you");
    };



  return ( 
  <div className="booking">
    <div className="booking__top d-flex align-item-center justify-content-between">
        <h3>₹{price} <span>/per person</span></h3>
        <span className='tour__rating d-flex align-item-center'>
            <i class="ri-star-fill" ></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
            
            </span>
    </div>

    {/*======================== Booking Form ======================*/}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
                <input 
                type="text"
                 placeholder='Full Name'
                 id='fullName' 
                 required 
                 onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <input 
                type="number"
                 placeholder='Phone No.'
                 id='phone' 
                 required 
                 onChange={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-item-center justify-content-between'>
                <input 
                type="date"
                 placeholder='Select date' id='bookAt'
                 required 
                 onChange={handleChange} />
                <input 
                type="number"
                 placeholder='Guest' id='guestSize'
                 required 
                 onChange={handleChange} />
            </FormGroup>

        </Form>
    </div>


    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-item-center gap-1'>
                    ₹{price}<i class="ri-close-fill"></i>1 person
                    </h5>
                <span>₹{price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>₹{serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>₹{totalAmout}</span>
            </ListGroupItem>
        </ListGroup>
        <button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</button>
    </div>
  </div>
  )
}

export default Booking
