import {FaArrowLeft, FaSearch} from 'react-icons/fa';
import {BiDotsHorizontal} from 'react-icons/bi';
import {IoMdHeartEmpty} from 'react-icons/io';
import {BsDot, BsPlayCircle} from 'react-icons/bs';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import motivated from '../static/motivated.png';
import balance from '../static/balance.png';
import fireburn from '../static/fireburn.jpg';
import best from '../static/best.jpg';
import passion from '../static/passion.jpg';
import discover from '../static/discover.png';
import giveup from '../static/giveup.png';

const styles = {
    h1: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#871bff",
        textAlign: "center"
    },
    wrapper: {
        display: "block",
        padding: '.5rem 1.5rem'
        
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        gap: "10px"
    },
    searchDateBox: {
        background: "#eee",
        padding: ".5rem 2rem",
        borderRadius: "999px",
    },
    gray: {
        color: "#999"
    },
    input: {
        display: "block",
        background: "none",
        outline: "none",
        textAlign: "center",
        border: "none",
        color: "#555",
        width: "100%"
    },
    subtitle: {
        textAlign: "center",
        fontSize: "smaller",
        color: "#bbb",
        margin: "-0.2rem 0 1.5rem"
    },
    pill:{
        width: "100%",
        borderRadius: "999px",
        padding: ".5rem",
        color: "#999",
        background:"#eee",
        textAlign: "center",
        fontSize: "smaller"
    },
    recommended:{
        position: 'relative',
        padding: "1rem",
        borderRadius: "20px"
    },
    cover: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#871bff25",
    },
    heart: {
        display: "grid",
        placeContent: "center",
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "30px",
        height: "30px",
        borderRadius: "9999px",
        background: "#1114",
    }
}

const settings = {
    gutter: 30,
    loop: false,
    lazyload: true,
    nav: false,
    controls: false,
    mouseDrag: true
};

const recommendedations = [
    {
        author: "Mark William guided series on",
        title: "Stay motivated Everyday",
        image: motivated
    },
    {
        author: "Hillary Speilberg talks",
        title: "Balance your life out",
        image: balance
    },
]

const whatsNew = [
    {
        image: discover,
        title: "Discovering Purpose",
        category: "Article",
        duration: 3
    },
    {
        image: best,
        title: "The best is yet to be",
        category: "Video",
        duration: 4
    },
    {
        image: passion,
        title: "What is passion?",
        category: "Podcast",
        duration: 3
    },
    {
        image: giveup,
        title: "Never give up",
        category: "Audio",
        duration: 4
    },
]

const colors = ['#ecdcff', '#ebc8c8', '#c8ebe8', '#ebdcc8'];
let c_i = 0;
const colorChange = (index) => {
    if(index > 3){
        index = index - 1;
    }
    c_i = index % 4;
    return colors[c_i];
}

const Resources = () => {
    return(
        <div>
            <div style={styles.wrapper}>
                {/* Header */}
                <div className="flex-box" style={styles.flex}>
                    <div className="">
                        <FaArrowLeft />
                    </div>
                    <div className="" style={{width: '100%'}}>
                        <h1 className="" style={styles.h1}>Resources</h1>
                    </div>
                </div>
                <p className="" style={styles.subtitle}>Get motivational books, videos, podcasts</p>

                {/* Seacrh By Date */}
                <div className="">
                    <div className="" style={{...styles.flex, ...styles.searchDateBox, marginBottom: "1rem"}}>
                        <FaSearch style={styles.gray} />
                        <div className="" style={{width: '100%'}}>
                            <input className="" style={{...styles.input}} placeholder="Search by title" />
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="">
                    <div className="" style={styles.flex}>
                        <div className="pill active" style={styles.pill}>All</div>
                        <div style={styles.pill}>Books</div>
                        <div style={styles.pill}>Audio</div>
                        <div style={styles.pill}>Videos</div>
                        <div><BiDotsHorizontal style={{fontSize: "20px"}} /></div>
                    </div>
                </div>
            </div>

            {/* Recommended */}
            <div className="resources-container" style={{padding: "0 0 0 1.5rem", margin: "1rem auto", overflow: "hidden"}}>
                <div>
                    <h1 style={{...styles.h1, textAlign:"left", fontSize:"1rem"}}>Recommended for you</h1>
                    {/* <div className="slider" style={{...styles.flex, gap: "1.5rem", width: "170vw"}}> */}
                        <TinySlider settings={settings} style={{ display: "flex", gap: "1.5rem", width: "170vw" }}>
                            {/* 
                                If you do intend to use this
                                Loop through your data here
                            */}
                            {recommendedations.map(({title, author, image}, index) => {
                                return (
                                    <div className="" style={{...styles.flex, ...styles.recommended, width: "85vw", justifyContent: "space-around", background: colorChange(index)}} key={index}>
                                        <div>
                                            <p className="" style={{fontSize: ".7rem", color: "#777", margin: "0 0 .5rem"}}>{author}</p>
                                            <p className="" style={{fontSize: "1.3rem", fontWeight: "bold", color: "#000", margin: "0 0 .5rem"}}>
                                                {title}
                                            </p>
                                            <div style={{display: "inline-flex"}}>
                                                <div style={{...styles.flex, display: "inline-flex", gap: "0", margin:"0 5px 0 0", justifyContent: "flex-start"}}>
                                                    <BsDot style={{fontSize: "1.3rem"}} /> <span style={{fontSize: ".6rem", color: "#777"}}>Daily Podcast</span>
                                                </div>
                                                <div style={{...styles.flex, display: "inline-flex", gap: "0", margin:"0 5px 0 0", justifyContent: "flex-start"}}>
                                                    <BsDot style={{fontSize: "1.3rem"}} /> <span style={{fontSize: ".6rem", color: "#777"}}>3mins</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* eslint-disable-next-line */}
                                        <img style={{width: "35%", height: "auto", borderRadius: "20px"}} src={image} />
                                    </div>
                                );
                            })
                            }
                        </TinySlider>
                    {/* </div> */}
                </div>
            </div>

            {/* Today Sections */}
            <div style={styles.wrapper}>
                <div>
                    <h1 style={{...styles.h1, textAlign:"left", fontSize:"1rem"}}>Today's Selections</h1>
                    <div>
                        <div className="" style={{...styles.recommended, overflow: 'hidden', background: `url(${fireburn})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                            <div className="cover" style={styles.cover}></div>
                            <div style={{padding: "1rem .5rem", display: "flex", alignItems: "center", position: "relative"}}>
                                <div style={{width: "33.33%"}}></div>
                                <div style={{width: "33.33%", display: "grid", placeContent: "center"}}>
                                    <BsPlayCircle style={{color: '#fff', fontSize: '3.5rem'}} />
                                </div>
                                <div style={{width: "33.33%"}}>
                                    <h1 style={{...styles.h1, textAlign:"left", fontSize:"1.2rem", color: "#fff"}}>Keep the fire burning</h1> 
                                    <div style={{display: "inline-flex", justifyContent: "flex-start"}}>
                                        <div style={{...styles.flex, display: "inline-flex", gap: "0", margin:"0 5px 0 0", justifyContent: "flex-start"}}>
                                            <BsDot style={{fontSize: "1.3rem", color: "#fff"}} />
                                            <span style={{fontSize: ".6rem", color: "#fff"}}>Video</span>
                                        </div>
                                        <div style={{...styles.flex, display: "inline-flex", gap: "0", margin:"0 5px 0 0", justifyContent: "flex-start"}}>
                                            <BsDot style={{fontSize: "1.3rem", color: "#fff"}} />
                                            <span style={{fontSize: ".6rem", color: "#fff"}}>3mins</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Whats New Sections */}
            <div style={styles.wrapper}>
                <div>
                    <h1 style={{...styles.h1, textAlign:"left", fontSize:"1rem"}}>What's New - Get Inspired</h1>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "20px",
                    }}>
                        {whatsNew.map(({image, title, category, duration}, index) => {
                            return (
                                <div style={{width: "100%"}} key={index}>
                                    <div className="" style={{
                                        ...styles.recommended,
                                        overflow: 'hidden',
                                        background: `url(${image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "100px",
                                    }}>
                                        <div className="heart" style={styles.heart}>
                                            <IoMdHeartEmpty style={{color: "#fff"}} />
                                        </div>
                                    </div>
                                    <div className="">
                                        <p style={{fontSize: "smaller", margin: "0", padding: ".7rem 0 0"}}>{title}</p>
                                        <div style={{display: "inline-flex", justifyContent: "flex-start"}}>
                                            <div style={{...styles.flex, display: "inline-flex", gap: "0", margin:"0 5px 0 0", justifyContent: "flex-start"}}>
                                                <BsDot style={{fontSize: "1.3rem"}} />
                                                <span style={{fontSize: ".6rem", color: "#777"}}>{category}</span>
                                            </div>
                                            <div style={{...styles.flex, display: "inline-flex", gap: "0", margin:"0 5px 0 0", justifyContent: "flex-start"}}>
                                                <BsDot style={{fontSize: "1.3rem"}} />
                                                <span style={{fontSize: ".6rem", color: "#777"}}>{duration}mins</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resources;