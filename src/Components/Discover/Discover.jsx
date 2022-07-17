import React, { useState } from 'react'
import './Discover.css';
// import RedVelvetCake from '../../Images/redVelvetCake.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Gallery1 from '../../Images/gallery1.webp';
import Gallery2 from '../../Images/gallery2.webp';
import Gallery3 from '../../Images/gallery3.webp';
import Gallery4 from '../../Images/gallery4.webp';


const Discover = () => {
    const images = [
        { image: Gallery1 },
        { image: Gallery2 },
        { image: Gallery3 },
        { image: Gallery4 },
    ];
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [isValid, setIsValid] = useState();
    const subscribe = () => {
        setIsClicked(true);
        console.log(name);
        if (name !== '' && email !== '' && subject !== '' && message !== '') {
            setIsValid(true);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setIsValid(false);
        }
        setTimeout(() => {
            setIsClicked(false);
            setIsValid();
        }, 2000);
    }
    return (
        <div className='main-wrapper'>
            <div className="top-section">
                <h1 style={{
                    fontSize: '80px',
                    color: 'white'
                }}>Urban Nomad</h1>
                <h1 style={{
                    fontSize: '80px',
                    color: 'white'
                }}>Adventures</h1>
                <p style={{
                    fontSize: '20px',
                    color: 'white'
                }}>Experience Oregon like a local</p>
            </div>

            {/* <hr style={{ backgroundColor: '#3B3B3B', width: '83px', height: '3px', alignSelf: 'center', border: 'none', marginBottom: '33px' }} /> */}

            <div className='middle-section'>
                {/* our story section */}
                <div className="quote-div">

                    <div className='quote-section'>
                        <h1 style={{
                            fontWeight: '800'
                        }}>This Is Our Story</h1>
                        <p style={{
                            // marginTop: '92px',
                            fontFamily: 'Libre Baskerville, serif',
                            fontWeight: '400',
                            fontSize: '20px',
                            // letterSpacing: '2.86px',
                            color: 'black',
                            marginBottom: '21px',
                            textAlign: 'center',
                            width: '700px'
                        }}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the undoubtable source.
                        </p>
                        <button style={{
                            padding: '10px',
                            backgroundColor: '#EFE9E6',
                            border: '1px solid black',
                            cursor:'pointer'
                        }}>
                            <p>Read More</p>
                        </button>
                    </div>
                    {/* <div className="quote-image">
                        <img className="image3" width={320} height={440} src={Image3} />
                    </div> */}
                </div>

                {/* facility section */}
                <div style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '76px',
                    paddingBottom: '76px'
                }}>
                    <h1 style={{
                        fontWeight: '600',
                        fontSize: '40px'
                    }}>What Makes Us Special</h1>
                    < div className="restaurant-services-section" >
                        <div className="restaurant-service">
                            {/* <img width={26} height={32} src={HighQuality} /> */}
                            <h1 className="service-type">Local Expert Guides</h1>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="restaurant-service">
                            {/* <img width={22} height={32} src={RoyalTaste} /> */}
                            <h1 className="service-type">Handpicked Adventures</h1>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="restaurant-service">
                            {/* <img width={28} height={32} src={QuickService} /> */}
                            <h1 className="service-type">Hidden Gem Destination</h1>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div >
                </div>


            </div>
            {/* gallery */}
            <div className="gallery-wrapper">
                <h1 style={{
                    textAlign: 'center'
                }}>A Taste Of Our Adventure</h1>
                <Slide>

                    {images.map((image, i) => {
                        return (
                            <div key={i} style={{
                                backgroundColor: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    'backgroundImage': `url(${image.image})`,
                                    width: '90vw',
                                    height: '700px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center'
                                }}>
                                </div>
                            </div>
                        )
                    })}

                </Slide>
                <button style={{
                    padding: '10px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    width: 'fit-content',
                    alignSelf: 'center',
                    cursor:'pointer'

                }}>
                    <p>Learn More</p>
                </button>
            </div>

            {/* testimonials section */}
            <div style={{
                backgroundColor:'#EFE9E6',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '76px',
                paddingBottom: '76px',
                width: '100%'
            }}>
                <h1 style={{
                    fontWeight: '600',
                    fontSize: '40px'
                }}>Testimonials</h1>
                < div style={{
                    // backgroundColor: 'white'
                }} className="restaurant-services-section" >
                    <div className="restaurant-service">
                        {/* <img width={26} height={32} src={HighQuality} /> */}
                        <p style={{
                            fontWeight: '700'
                        }} className="service-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <h1 style={{
                            fontWeight: '400'
                        }} className="service-type">Scott Lowe</h1>
                    </div>
                    <div className="restaurant-service">
                        {/* <img width={22} height={32} src={RoyalTaste} /> */}
                        <p style={{
                            fontWeight: '700'
                        }} className="service-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <h1 style={{
                            fontWeight: '400'
                        }} className="service-type">The Robertsons</h1>
                    </div>
                    <div className="restaurant-service">
                        {/* <img width={28} height={32} src={QuickService} /> */}
                        <p style={{
                            fontWeight: '700'
                        }} className="service-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <h1 style={{
                            fontWeight: '400'
                        }} className="service-type">Jody and Tom Larson</h1>
                    </div>
                </div >
            </div>

            {/* quote section */}
            <div className="adventure-quote-wrapper">
                <h1 style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '46px',
                }}>
                    “Not all those who wander <br /> are lost.”
                </h1>
                <p style={{
                    color: 'white',
                    fontSize: '20px'
                }}>J.R.R. Tolkien</p>
            </div>

            {/* form section */}
            <div style={{
                backgroundColor: 'white',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '70px'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    marginBottom: '10px'
                }}>Ask Us Anything</h1>
                <p style={{
                    marginBottom: '10px'
                }}>500 Terry Francois Street San Francisco, CA 94158</p>
                <p style={{
                    marginBottom: '10px'
                }}>info@mysite.com | 123-456-7890</p>
                <div className="form">
                    <div className="input-section">
                        <input onChange={(e) => {
                            setName(e.target.value)
                        }} value={name} className="input-field" placeholder="NAME" />
                    </div>
                    <div className="input-section">
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} value={email} className="input-field" placeholder="EMAIL" />
                    </div>
                    <div className="input-section">
                        <input onChange={(e) => {
                            setSubject(e.target.value)
                        }} value={subject} className="input-field" placeholder="SUBJECT" />
                    </div>
                    <div style={{
                        marginBottom: '28px',
                        height: '160px'
                    }} className="input-section">
                        <textarea
                            style={{
                                height: '160px',
                                overflow: 'hidden'
                            }}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            value={message}
                            className="input-field"
                            placeholder="MESSAGE" />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '105px'
                    }}>
                        <button style={{
                            width: 'fit-content',
                            alignSelf: 'center',
                            backgroundColor: 'black',
                            border: 'none',
                            cursor:'pointer'
                        }} onClick={() => {
                            subscribe();
                        }}>
                            <div style={{
                                padding: '10px 20px',

                            }}>
                                <p style={{
                                    color: 'white'
                                }}>
                                    SUBMIT
                                </p>
                                {/* <img style={{ marginBottom: '3px' }} width={20.01} height={10} src={ArrowWhite} /> */}
                            </div>
                        </button>
                        {
                            isClicked ? (
                                isValid ? (
                                    <h1 style={{
                                        textAlign: 'end',
                                        fontSize: '20px',
                                        marginTop: '10px'
                                    }}>Message sent successfuly!</h1>
                                ) : (
                                    <h1 style={{
                                        textAlign: 'end',
                                        fontSize: '20px',
                                        color: 'orange',
                                        marginTop: '10px'
                                    }}>Please fill all the fields!</h1>
                                )
                            ) :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;