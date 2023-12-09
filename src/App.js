import logo from './logo.svg';
import './App.css';
import Img1 from './img_1.jpg'
import Img2 from './img_2.jpg'
import Img3 from './img_3.jpg'
import Img4 from './img_4.jpg'
import Img5 from './img_5.jpg'
import Img6 from './img_6.jpg'
import Img7 from './img_7.jpg'
import Img8 from './img_8.jpg'
import Img9 from './img_9.jpg'
import Img10 from './img_10.jpg'
import Img11 from './person_3.jpg'
import Img12 from './compenents/slider/ss.png'
import Navbar from './compenents/navabr/navbar'
import Home from './compenents/home/home'
import Photos from './compenents/Photos/Photos'
import About from './compenents/about/About'
import Testimonial from './compenents/Testimonial/testimonial'
import Blog from './compenents/blog/blog'
import Contact from './compenents/contact/contact'
import React from 'react';
import Slider from './compenents/slider/slider';









function App() {
  return (
    <>
    
    <Navbar/> 
    
     <div id='home'>
    <Home/>
    </div>
    <div id='photos'>
      <Photos/>
    </div>
    <div id='about'>
    <About/>
    </div>
    <div id='testimonial'>
    <Testimonial/>
    </div>
    <div id='blog'>
    <Blog/>
    </div>
    <div id='contact'>
    <Contact/>
    </div>






    
    








    
    {/* <div className='nav2'>
    <h2 className='logo2'>SNAP</h2>
    <div className='drawer'></div>


    </div>
      <div className='landing'>
        <h2 className='logo'>SNAP</h2>
        <ul className='nav'>
          <li>HOME</li>
          <li>PHOTOS</li>
          <li>ABOUT</li>
          <li>TESTIMONIAL</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
        <div className='logos'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div> */}

      {/* <div className='landing2'>
        <h1 className='heading'>SNAP</h1>
        <p>A Free Onepage Bootstrap Template by <span style={{color:"#DD4A48",background:"transparent"}}>   Untree.co.</span> Under 
         licensed <span style={{color:"#DD4A48",background:"transparent"}}>Creative Common Attribution 3.0</span></p>
        <button className='bt1'>AVAILABLE FOR HIRE
        </button>   
      </div> */}

      {/* <div className='page2'>

        <h1 className='hd1'>Photos</h1>

        <div className='pic'><img src={Img1} alt=''/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img2} alt=''/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img3} alt=''/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img4} alt=''/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img5} alt=''/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img6}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img7}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img8}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img9}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img10}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img1}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img2}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img3}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img4}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img5}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img6}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img7}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img8}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img9}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img10}/><i class="fa-solid fa-eye"></i></div>
        <div className='pic'><img src={Img5}/><i class="fa-solid fa-eye"></i></div>




      </div> */}




      {/* <div className='about'><img src={Img1}/></div>
      <div className='about2'>
        <h1>Hi I'm Jessica Cameron</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aperiam a velit. Harum eligendi quod reiciendis quos ullam libero est dolor, <span style={{color:'red'}}>corporis dolores assumenda</span>, delectus, quidem voluptatibus dolorum temporibus enim! <br></br> <br></br>Neque facilis soluta, accusantium quaerat, adipisci porro animi, hic fugiat id vero placeat dolorem accusamus sapiente odio consequatur debitis beatae eius quos alias. In recusandae magnam quis ipsum, asperiores mollitia!</p>

        <h1 className='hd2'>Services</h1>


        <div className='text'>
          <div className='t2'><i class="fa-solid fa-check"></i><p>Optio eveniet ex laborum</p></div>
          <div className='t2'><i class="fa-solid fa-check"></i><p>Optio eveniet ex laborum</p></div>
          <div className='t2'><i class="fa-solid fa-check"></i><p>Inventore sapiente tenetur</p></div>
          <div className='t2'><i class="fa-solid fa-check"></i><p>Inventore sapiente tenetur</p></div>
          <div className='t2'><i class="fa-solid fa-check"></i><p>Ipsam aliquam esse</p></div>
          <div className='t2'><i class="fa-solid fa-check"></i><p>Ipsam aliquam esse</p></div>

        </div>

      </div> */}

      {/* <div className='test'>
      <h1 className='hd3'>Testimonial</h1>
      <div className='circle'>
        <img src={Img11}/>
      </div>

      <h4>Ben Cawford</h4>
      <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur quis facilis quam optio voluptate totam placeat, doloremque. Sit repellat ipsum dolor fugit similique itaque maxime saepe ipsam. Velit, harum!”</p>

      <button className='bt4'><i class="fa-solid fa-chevron-left"></i></button>
      <button className='bt5'><i class="fa-solid fa-chevron-right"></i></button>
      </div> */}


      {/* <div className='blog'>
        <h1>Blog</h1>

        <div className='blog1'>
          <div className='blog2'><img src={Img1}/></div>
          <div className='blogt'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
            <br></br>
            <p>Posted by Ben Jones on<span style={{color:'red'}}> Jan 18, 2019</span>
            <br></br>
            <br></br>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?</p>
          </div>

        </div>




        <div className='blog1'>
          <div className='blog2'><img src={Img2}/></div>
          <div className='blogt'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
            <br></br>
            <p>Posted by Ben Jones on<span style={{color:'red'}}> Jan 18, 2019</span>
            <br></br>
            <br></br>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?</p>
          </div>
          
          
        
        
        </div>
        <div className='blog1'>
        <div className='blog2'><img src={Img3}/></div>
        <div className='blogt'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
            <br></br>
            <p>Posted by Ben Jones on<span style={{color:'red'}}> Jan 18, 2019</span>
            <br></br>
            <br></br>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?</p>
          </div>



        </div>
        <div className='blog1'>
        <div className='blog2'><img src={Img4}/></div>
        <div className='blogt'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
            <br></br>
            <p>Posted by Ben Jones on<span style={{color:'red'}}> Jan 18, 2019</span>
            <br></br>
            <br></br>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?</p>
          </div>
     
        
        </div>


      


      </div> */}



      {/* <div className='numbers'>
        <div className='num1'>1</div>
        <div className='num1'>2</div>
        <div className='num1'>3</div>
        <div className='num1'>...</div>
        <div className='num1'>7</div>



     
        </div> */}

{/* 
        <div className='contact'>
          <h1>Contact</h1>
          <div className='inp'>
          <input placeholder='First Name'></input>
          <input placeholder='Last Name'/>
          <input className='in2' placeholder='Email'/>
          <input className='in2' placeholder='Subject'/>
          <input className='in3' placeholder='Message'/>
          
          </div>
          <button className='endbt'><h2>Send Message</h2></button>
         



        </div> */}







      


    




    </>
  );
}

export default App;
