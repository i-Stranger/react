import './navbar.css'
const Navbar = () => {
    return (
        <>
         <div className='nav2'>
            <h2 className='logo2'>SNAP</h2>
            <div className='drawer'></div>
            </div>
                <div className='landing'>
                <h2 className='logo'>SNAP</h2>
                <ul className='nav'>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#photos'>PHOTOS</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#testimonial'>TESTIMONIAL</a></li>
                    <li><a href='#blog'>BLOG</a></li>
                    <li><a href='#contact'>CONTACT</a></li>
                </ul>
                <div className='logos'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                </div>
        </>
    )
}
export default Navbar