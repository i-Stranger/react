import { Carousel } from 'react-carousel-minimal';
import './slider.css'
import Img12 from './ss.png'
import Img13 from './ss1.png'

const Slider = () => {
    const data = [
        {
          image: Img12,
          caption: "San Francisco"
        },
        {
          image: Img12,
          caption: "Scotland"
        },
        {
          image: Img13,
          caption: "Darjeeling"
        },
        {
          image: Img13,
          caption: "San Francisco"
        },
        {
          image: Img12,
          caption: "Scotland"
        },
        {
          image: Img13,
          caption: "Darjeeling"
        },
        {
          image: Img12,
          caption: "sanfransisco"
        },
        {
          image: Img13,
          caption: "Scotland"
        },
        {
          image: Img12,
          caption: "Darjeeling"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }    
    return (
        <>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="600px"
            height="300px"
            // captionStyle={captionStyle}
            radius="0px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
            textAlign: "center",
            maxWidth: "600px",
            maxHeight: "300px",
            margin: "100px auto",
            }}
          />
        </div>
        </>
    )
}
export default Slider
