import React from 'react';
import './Qanda.css';
function Qanda(){
  return(
     <div className="container">
       <h1 className='Head'>Travel Questions and Answers</h1>
       <p className='Para1'>“Good Apps are hard to find. <br></br>If your Appy and you know it, share, review!”</p>
     <h1 className='bbottom'> </h1>
     <h5 className='Colorsubhead1'>"Q"</h5>
     <h5 className='Subhead1'> Promoth</h5>  
     <h5 className='Colorsubhead2'> yesterday</h5>
     <p className='Para2'><b>United Kingdom:How much is an MOT test for a Mini Cooper</b><br></br><b>Hatchback car</b></p>
     <p className='Subpara1'>View 1 answer</p>
     
     
     <h5 className='Colorsubhead3'>"Q"</h5>
     <h5 className='Subhead2'> Manas</h5>
     <h5 className='Colorsubhead4'> Saturday</h5>
     <p className='Para3'><b>Ellendale(Delaware) to San Francisco: What to expect</b><br></br><b>I'm travelling w.My dog</b></p>
     <p className='Subpara2'>View 2 answer</p>
     
     
     <h4 className='Head2'><b>Commenting As,</b></h4>
     <img className='comm' src='https://res.cloudinary.com/dd7ksmffx/image/upload/v1670430072/20221119_160930_dwdkhn.png' alt='' height={50} width={50}></img>
     <h5 className='comm1'><b>727821TUCS121MAGESHPRABU G</b></h5>
     <p className='comm2'><b>@i_magesh_</b></p>


    
     <img className='imgpromoth' src="https://res.cloudinary.com/dd7ksmffx/image/upload/v1670430533/pngfind_zw8hgt.png" alt='' height={50} width={50}></img>
     <img className='imgmanas' src="https://res.cloudinary.com/dd7ksmffx/image/upload/v1670431156/WhatsApp_Image_2022-11-26_at_10_pwh5wm.png" alt='' height={50} width={50}></img>
     <input type="text" className='textbox' placeholder=' Add a comment...'></input>
    <button className='button1'><b>Submit</b></button>
    <p className='bottom'><b>By completing this action you are creating and agree to YouTube's Trems of Service.</b></p>
     <h3 className='bottompro'><b>About</b></h3>
     <h3 className='bottompromax'><b>Us</b></h3>
     </div>
  )
}
export default Qanda;