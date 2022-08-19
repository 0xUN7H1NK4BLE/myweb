import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgress from "./Circularprogress";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My best skill was that I was coachable. I was a sponge and aggressive to learn<br></br>Except all thes skills I have a good communication skills and problem solving skills.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">


                            <div className="item">
                            <CircularProgress size={160} strokeWidth={20} percentage={80} color="rgb(121,9,89)" />
                                <h5 style={{paddingTop:"20px"}}>Ethical Hacking</h5>
                            </div>
                            <div className="item">
                            <CircularProgress size={160} strokeWidth={20} percentage={75} color="rgb(121,9,89)" />
                                <h5 style={{paddingTop:"20px"}}>Web Development</h5>
                            </div>
                            <div className="item">
                            <CircularProgress size={160} strokeWidth={20} percentage={70} color="rgb(121,9,89)" />
                                <h5 style={{paddingTop:"20px"}}>Networking</h5>
                            </div>

                            <div className="item">
                            <CircularProgress size={160} strokeWidth={20} percentage={93} color="rgb(121,9,89)" />
                                <h5 style={{paddingTop:"20px"}}>Linux</h5>
                            </div>

                            <div className="item">
                            <CircularProgress size={160} strokeWidth={20} percentage={80} color="rgb(121,9,89)" />
                                <h5 style={{paddingTop:"20px"}}>Programming</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}