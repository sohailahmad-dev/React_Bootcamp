import React, { useRef } from "react";
import './CustomSlider.css'
import Slider from "react-slick";
import Card from "../card/Card";
import nextIcon from '../../assets/imgs/next.png'
import prev from '../../assets/imgs/prev.png'
import useDeviceType from "../../hooks/useDeviceType";

export default function CustomSlider() {

    let sliderRef = useRef(null);
    let isMobile = useDeviceType();

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="custom-slider-header">
                <div className="slider-heading">Off-Market Properties</div>
                <div className="custom-slider-icons">
                    <img src={prev} onClick={previous} alt="previous-icon" />
                    <img src={nextIcon} onClick={next} alt="next-icon" />
                </div>
            </div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </Slider>
        </>
    );
}
