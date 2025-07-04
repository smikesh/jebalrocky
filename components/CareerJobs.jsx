import React from 'react'
import {data} from './JobData'
export default function CareerJobs() {
    window.addEventListener('click', (e) => {
        if (e.target === popupDiv) {
          popupDiv.style.display = 'none';
        }
      });
  return (
    <div className='jobs'>
        {
          data.map((job)=>(
            <div className="job" key={job.id}>
                <div className="left">
                
                    <h5>{job.title}</h5>  
                    <div className="posting_date">Posting date : {job.post_date}</div>
                    <div>No of vacancy : <b>{job.no_of_vecancy}</b></div>
                    <div className="description">
                    
                    {job.description}
                    
                    </div>
                </div>
                <div className="right">
                    <button className='apply' onClick={()=>{
                        popupDiv.style.display = 'block';
                    }}>Apply</button>
                </div>
            
           

        </div>
          )

     


          )
        }
       
       

       
       
    </div>
  )
}
