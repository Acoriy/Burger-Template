
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../Layouts/ReviewCard";
import Slider from "react-slick/lib/slider";

const Review = () => {
  const reviewData = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur modi minima aspernatur architecto? Eaque atque molestias numquam harum sint ducimus exercitationem tempore, vel vero laborum tempora at quis perspiciatis.",
      name: "Alex Thompson",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur modi minima aspernatur architecto? Eaque atque molestias numquam harum sint ducimus exercitationem tempore, vel vero laborum tempora at quis perspiciatis.",
      name: "Emily Rodrigez",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur modi minima aspernatur architecto? Eaque atque molestias numquam harum sint ducimus exercitationem tempore, vel vero laborum tempora at quis perspiciatis.",
      name: "Jordan Patel",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur modi minima aspernatur architecto? Eaque atque molestias numquam harum sint ducimus exercitationem tempore, vel vero laborum tempora at quis perspiciatis.",
      name: "Morgan Harper",
    },
    {
      id: 5,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur modi minima aspernatur architecto? Eaque atque molestias numquam harum sint ducimus exercitationem tempore, vel vero laborum tempora at quis perspiciatis.",
      name: "Jordan Morales",
    },
    
  ];

  const setting = {
    dots: true,
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrow: false,
    responsive: [
      {
        breakPoint: 1023,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakPoint: 768,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakPoint: 480,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return <div className="bg-white dark:bg-slate-900 dark:text-secondary ">
     <h1 className="font-semibold text-4xl text-center text-secondary tracking-[0.5px] pt-24">Our Review</h1>
     <div className="py-10 mx-4 md:mx-0">
        <Slider {...setting}>
            {reviewData.map((item)=>(
                <ReviewCard key={item.id} desc={item.desc} name={item.name}/>
            ))}
        </Slider>
     </div>
  </div>;
};

export default Review;
