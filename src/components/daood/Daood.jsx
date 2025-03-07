import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Daood = () => {
    let [Hadith, setHadith] = useState([])
    let [info,setinfo] = useState([])
    async function getAhadith() {
        const data = await axios.get('https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=500');
        setHadith([...data.data.items]);    
      setinfo(data.data.data)
    }
    useEffect(function () {
        getAhadith();
    }, [setHadith])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,             // Index of the initial slide
        // autoplay: true,              // Autoplay slides
        autoplaySpeed: 3000,         // Autoplay interval in milliseconds
        pauseOnHover: true, 
    };
    return (
        <div className='hadith'>
        <div className='address'><h1>أحاديث</h1><span className='span1'></span> <span className='span2'></span></div>
        <div className='inf'><h3> داوود </h3></div>
        <Slider className='slider' {...settings}>
                 {Hadith.map(function(item){
                    return(
                        <>
                        <div key={item} className='hadithh'>
                        <p className='pp'>{item.arab}</p>
                        </div>
                        <p>500/{item.number}</p>
                        </>
                    )
                 })}
        </Slider>
    </div>
    )

}
