
import Img1 from '../../assets/img_1.jpg'
import './About.css'
const About=()=>{
    return(
        <>
        
      <div className='about'><img src={Img1}/></div>
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

      </div>
      
      </>
        

    )

    
}
export default About