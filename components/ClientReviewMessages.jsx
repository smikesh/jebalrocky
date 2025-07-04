import React from 'react'
import customer1 from "../assets/us-1.jpg"
import customer2 from "../assets/us-2.jpg"
import customer3 from "../assets/us-3.jpg"
const ClientReviewMessages = () => {
  return (
    <div className="customers">
    <div className="item">
        <div className="rating">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
        </div>
        <p>
            Professional service and very good manners and timely updates from their office staffs.
            I recommend Jebal Rocky.
        </p>
        <div className="user">
            <img src={customer1} />
            <div className="info">
                <h5>Dianne Russell</h5>
               
            </div>
        </div>
    </div>
    <div className="item">
        <div className="rating">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
        </div>
        <p>
             Started working with them for the last "5 Years". I recommend Jebal Rocky for any Engineering and Oil field services.
        </p>
        <div className="user">
            <img src={customer2} />
            <div className="info">
                <h5>Kristian Watson</h5>
                
            </div>
        </div>
    </div>
    <div className="item">
        <div className="rating">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
        </div>
        <p>
            Great professional service. No negative feedback as compared to other service providers we are dealing with. We recommend.
        </p>
        <div className="user">
            <img src={customer3} />
            <div className="info">
                <h5>Kathryn Murphy</h5>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default ClientReviewMessages