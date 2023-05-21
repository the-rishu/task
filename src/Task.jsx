import React from 'react'
import Logo from './images/Logo.png'
import banner from './images/banner.png'
import Group from './images/Group.png'
import G95 from './images/G95.png'
import G3 from './images/G3.png'
import second from './images/Group 218.png'
import path from './images/Path 68.png'
import msg from './images/ici-online-communication.png'
import path2 from './images/ici-adhesives.png'
import Group3 from './images/Group 110.png'
import gs from './images/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable.png'
import fimage from './images/Vector Smart Object.png'

import './Task.css'
const Task = () => {
  return (
    <>
       <div className='first-section'>
          <div className='left'>
                <img src={Logo} alt="" />
                <div className='text-1'>
                    <span>Take your graphics protection</span><br />
                    <span>to the next level with dol</span><br />
                    <span>Max overlaminates</span>
                </div>
                <div className='text-2'>
                  <span>Pair with MPI 1105 wraspping film</span><br />
                  <span>for ramped up protection</span>
                </div>
                <div className='icons'>
                  <div > 
                    <img className='icon-image' src={Group} alt="" /><br />
                    <span>Maximun</span><br />
                    <span>Durability</span>
                  </div>
                  <div>
                    <img  className='icon-image' src={G95} alt="" /><br />
                    <span>Enhanced </span><br />
                    <span>Apperance</span>
                  </div>
                  <div>
                    <img  className='icon-image' src={G3} alt="" /><br />
                    <span>High Gloss</span><br />
                    <span>Finish</span>
                  </div>
                </div>
          </div>

          <div className='right'>
              <img className='first-image' src={banner} alt="" />
          </div>
          <div className="first-3">  
            <h3>Connect with us</h3>
            <p>for outstanding protective overlaminates</p>
            <div className='first-3-1'>
                <div>
                  <label htmlFor="">First Name</label><br />
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Last Name</label><br />
                  <input type="text" name="" id="" />
                </div>
            </div>
            <div className='first-3-1'>
                <div>
                  <label >Email</label><br />
                  <input type="email" name="" id="" />
                </div>
                <div>
                  <label >Contact Number</label><br />
                  <input type="text" name="" id="" />
                </div>
            </div>
            <div className='first-3-1'>
                <div>
                  <label>Company</label><br />
                  <input type="email" name="" id="" />
                </div>
                <div>
                  <label > State</label><br />
                 <select className='opt'> 
                 <option value="">Calfornia</option>
                 </select>
                </div>
            </div>
            <div className='first-3-2'>
              <label htmlFor="">How would you describe yourself?</label><br />
             <select name="" id="">
              <option value="">Installer</option>
             </select>
            </div>
            <div className='first-3-2'>
              <label htmlFor="">Preferred Distributor:</label><br />
             <select name="" id="">
              <option value="">Aerotect</option>
             </select>
            </div>
            <div className='first-3-3'>
              <label htmlFor="">Additional Information</label><br />
              <textarea name="" id="" cols="50" rows="5"></textarea>
            </div>
            <div className='first-3-4'>
              <input type="checkbox" name="" id="" />
             <p> I'd like to receive promotions, product information and service offers from Avery Dennison.</p>
            </div>
            <button className='btn-3'>Submit</button>
          </div>
       </div>
       <div className="second-section">
        <div className="left-2">
            <h1>DOL Max Overlaminate Films</h1><br />
            <span>Printed graphics deserve maximum protection, DOL Max is the solution.</span>
            <h4>Features & Benefits:</h4>
            <ul>
              <li><span>Premium vertical durability of up to 7 years and up to 2 years horizontal</span>  <br /><span>durability protection.</span></li><br />
              <li><span>The high gloss finish enhances the appearance of graphics and adds a</span> <br /><span>special touch to help your graphics stand out.</span></li><br />
              <li><span>Our digital overlaminates can be used on a variety of substrates,</span> <br /><span>including banners, vehicle graphics, outdoor signage, and more.</span></li>
            </ul>
            <button >Inquire now </button>
        </div>
        <div className="right-2">
          <img className='second-image' src={second} alt="" />
        </div>
       </div>

       <div className='third-section'>
          <div className='left-3'>
            <img className='third-image' src={gs} alt="" />
          </div>

          <div className='right-3'>
            <h1>Why us?</h1>
          <div className='right-3-2'>

            <div className='right-3-2-1'>
              <div className="img-box">  
                <img src={Group3} alt="" />
              </div>
              <div className='text-3'>
                <h4>Quality Products</h4>
                <span> Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</span>
              </div>
            </div>

            <div  className='right-3-2-1'>
                <div className="img-box">  
                  <img src={path2} alt="" />
                </div>
              <div className='text-3'>
                <h4>Multiple Options </h4>
                <span> We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition. </span>
              </div>
            </div>


            <div  className='right-3-2-1'>
                <div className="img-box">  
                    <img src={msg} alt="" />
                </div>
              <div className='text-3'>
                <h4>Expertise and Support</h4>
                <span>  Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond. </span>
              </div>
            </div>


            <div  className='right-3-2-1'>
                <div className="img-box"> 
                    <img src={path} alt="" />
                </div>
              <div className='text-3'>
                <h4>Durability Assurance </h4>
                <span> Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</span>
              </div>
            </div>
        </div>
        <button >Request a call back </button>
      </div>
    </div>
    <div className='four-section'>
      <div className='four-1'>
        <p>Best Solutions from</p>
        <img src={fimage} alt="" />
      </div>
      <div className='four-2'>
        <p>DOL Max Overlaminate Films</p>
        <p>Why us</p>
        <p>Enquire now</p>
      </div>
      <div className='four-3'>
        <p>Avery Dennison Overlaminate </p>
        <p>Avery Dennison Overlaminate Films</p>
        <p> Avery Dennison Digital Overlaminate Films</p>
        <p> Avery Dennison DOL Max</p>
      </div>
      <div className='four-4'>
        <p>Overlaminate </p>
        <p>Overlaminate Films</p>
        <p> Digital Overlaminate Films</p>
      </div>
    </div>
    <div className="section-5">
      <p>© 2023 Avery Dennison Label Packaging Material. All rights reserved.</p>
    </div>
    </>
  )
}

export default Task