import './contact.css'
const Contact =()=>{
    return(
        <>
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
         



        </div>
        
        
        </>
    )

}
export default Contact 