import React, { useState } from 'react'
import "../components/Home.css"

import { MdNavigateNext } from "react-icons/md";
import { GrFormPreviousLink } from "react-icons/gr";



const slides = [
    { name: "Switzerland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", image: "https://i.ibb.co/qCkd9jS/img1.jpg" },
    { name: "Finland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", image: "https://i.ibb.co/jrRb11q/img2.jpg" },
    { name: "Iceland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", image: "https://i.ibb.co/NSwVv8D/img3.jpg" },
    { name: "Australia", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", image: "https://i.ibb.co/Bq4Q0M8/img4.jpg" },
    { name: "Netherland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", image: "https://i.ibb.co/jTQfmTq/img5.jpg" },
    { name: "Ireland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", image: "https://i.ibb.co/RNkk6L0/img6.jpg" },
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };


    return (
        <div className="container">
            <div className="slide">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`item ${index === current ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {index === current && (
                            <div className="content">
                                <div className="name">{slide.name}</div>
                                <div className="des">{slide.description}</div>
                                <button>See More</button>
                                <button>Disi1</button>
                                <button>See More2</button>
                                <button>See More3</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="button">
                <button className="prev" onClick={prevSlide}><GrFormPreviousLink /></button>
                <button className="next" onClick={nextSlide}><MdNavigateNext /></button>
            </div>
        </div>
    )
}

export default Home