import Img1 from '../../assets/img_1.jpg'
import Img2 from '../../assets/img_2.jpg'
import Img3 from '../../assets/img_3.jpg'
import Img4 from '../../assets/img_4.jpg'
import './blog.css'
const Blog =()=>{
    return(
        <>
           <div className='blog'>
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


      


      </div>



      <div className='numbers'>
        <div className='num1'>1</div>
        <div className='num1'>2</div>
        <div className='num1'>3</div>
        <div className='num1'>...</div>
        <div className='num1'>7</div>



     
        </div>
        
        </>
    )
    
}
export default Blog 