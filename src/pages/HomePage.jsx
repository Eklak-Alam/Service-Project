import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Autoplay } from "swiper/modules"; // Import Autoplay from the modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay styles if needed
import FeaturePosts from "./FeaturePosts";

const images = [
  "https://c4.wallpaperflare.com/wallpaper/244/890/464/high-resolution-images-of-nature-3840x2160-wallpaper-preview.jpg",
  "https://images.alphacoders.com/103/103111.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WsjKIF09NLy5w3SlySiqZIK5UzMVALJZDg&s",
  "https://img.pikbest.com/origin/09/31/20/216pIkbEsTT57.jpg!w700wp",
  "https://img.pikbest.com/origin/09/31/20/20HpIkbEsTWX9.jpg!w700wp",
];

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Swiper Image Slider */}
      <div className="h-[300px] md:h-[400px] relative overflow-hidden px-4 container mx-auto py-6">
        <Swiper
          modules={[Autoplay]} // Register the Autoplay module
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show 1 slide at a time
          loop={true} // Infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 seconds
          centeredSlides={true} // Center the active slide
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Feature Posts */}
      <div className="container mx-auto">
        <FeaturePosts />
      </div>
    </div>
  );
}

export default HomePage;
