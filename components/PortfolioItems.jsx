import React from 'react'
import projectimage1  from "../assets/sc-1.jpg"
import projectimage2  from "../assets/sc-2.jpg"
import projectimage3  from "../assets/sc-3.jpg"

function PortfolioItems() {
  return (
    <>
        <div className="header">
            <div className="info">
                <h5>Recent Projects</h5>
                <h3>Our Portfolio</h3>
            </div>
            <button><i className='bx bxl-youtube'></i> Visit </button>
        </div>

        <div className="portfo-items">
            <div className="item">
                <img src={projectimage1} />
                <div className="info">
                    <h4>Portfolio #1</h4>
                    <p>
                       Dubai Projects. Going on
                    </p>
                    <a href="#">View in Youtube <i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="item">
                <img src={projectimage2} />
                <div className="info">
                    <h4>Portfolio #2</h4>
                    <p>
                        Abu Dhabi Projects. Going on
                    </p>
                    <a href="#">View in Youtube <i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="item">
                <img src={projectimage3} />
                <div className="info">
                    <h4>Portfolio#3</h4>
                    <p>
                        Dubai Projects. Going on
                    </p>
                    <a href="#">View in Youtube <i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default PortfolioItems