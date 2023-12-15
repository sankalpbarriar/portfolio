import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='w-3/2 m-auto'>
        <div className="mt-20">
        <Slider {...settings}>
            {data.map((d)=>{       //iterate through array
                <div className='bg-white h-[450px] text-black rounded-xl flex justify-center'>
                    <div className='rounded-t-xl'>
                       <img src={d.img} alt=""className="h-50 w-51" />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                      <p className='text-xl font-semibold'>{d.name}</p>
                      <p>{d.review}</p>
                      <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                    </div>
                </div>
            })}
          </Slider>
        </div>
    </div>
  )
}

export default Projects


//Array of objects
const data=[
    {
    name: `Movie Guide`,
    img:`src/assets/proj1.png`,
    review: `Lorem ipsum dolor sit amet, consecturera`
    },
    {
    name: `Recipe App`,
    img:`src/assets/proj2.png`,
    review: `Lorem ipsum dolor sit amet, consecturera`
    },
    {
    name: `Password Generator`,
    img:`src/assets/proj3.png`,
    review: `Lorem ipsum dolor sit amet, consecturera`
    },
    {
    name: `To-Do App`,
    img:`src/assets/proj4.png`,
    review: `Lorem ipsum dolor sit amet, consecturera`
    },
]