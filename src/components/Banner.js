import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header1.jpg"
import { useState ,useEffect } from "react"



export const Banner = () => {

    const [loopNum , setLoopNum]=useState(0);
    const [isDeleting,setISDeleting]=useState(false);
    const toRotate =["Ethical hacker","web developer","programmer","and a learner"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;


    useEffect(()=>{
        let ticket = setInterval(()=>{
            tick();
        },delta)

        return ()=> {clearInterval(ticket)};
    },[text])


    const tick =() =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length +1);
        setText(updatedText);


        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)

        }
        if (!isDeleting && updatedText === fullText){
            setISDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setISDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Curiosity is the wick in the candle of learning.</span>
                        <p className="anish">{`Hi I'm Anish `}</p>
                        <div ><span className="wrap">{text}</span>
                        </div>
                        <p>I am a student who is dedicated in his passion always stand out of crowd because I of curiosity. I am active, enthusiastic, diligent,and ambitious with good communication, problem solving, decision making skills and is openness to criticism.
                        </p>
                        <button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="heading"/>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}