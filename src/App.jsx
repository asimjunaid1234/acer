import { useState, useEffect } from 'react'
import './App.css'
import acerbrands from './image/acerbrands.png'
import loclog from './image/loclog.png'
import perlog from './image/perlog.png'
import cartlog2 from './image/cartlog2.png'
import cartlog from './image/cartlog.png'
import w11 from './image/Windows-11.png'
import pcg from './image/PCGamePass_2.png'
import w11p from './image/Windows-11-Pro_1.png'
import vero from './image/vero-family.png'
import serlog from './image/serlog.png'
import droplog from './image/droplog.png'
import acerlogo from './image/acerlogo.svg'
import fb from './image/fb.png'
import it from './image/it.png'
import x from './image/x.png'
import yt from './image/yt.png'
import slide1 from './image/slide1.avif'
import slide2 from './image/slide2.avif'
import slide3 from './image/slide3.mp4'
import slide4 from './image/slide4.mp4'
import laptops from './image/laptops.avif'
import desktops from './image/desktops.avif'
import monitors from './image/monitors.avif'
import projectors from './image/projectors.avif'
import acerChromebooks from './image/acer-chromebooks.avif'
import graphicCards from './image/graphic-cards.avif'


function App() {
  const [count, setCount] = useState(0)

    const slides = [
    { type: "image", src: slide1 },
    { type: "image", src: slide2 },
    { type: "video", src: slide3 },
    { type: "video", src: slide4 }
  ]
  const categories = [
  { name: "Laptops", img: laptops },
  { name: "Desktops", img: desktops },
  { name: "Monitors", img: monitors },
  { name: "Projectors", img: projectors },
  { name: "Acer Chromebooks", img: acerChromebooks },
  { name: "Graphic Cards", img: graphicCards }
]

const [currentSlide, setCurrentSlide] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 4000)

  return () => clearInterval(interval)
}, [])

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length)
}

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
}

  return (
    <>
       <header className='w-full h-auto flex flex-col'>
      <div className='w-full h-auto flex bg-[#303030] py-1'>
        <div className='hidden xl:flex flex-1 '>
          <img src={acerbrands} alt="" className='hidden xl:block' />
        </div>
        <div className='flex justify-center items-center flex-1  text-white '>
          Discover the Best Deals at Acer Store – Shop Now!
        </div>
        <div className=' hidden xl:flex flex-1 justify-end'>
        <img src={loclog} alt="" className='hidden xl:block ' />
        <img src={perlog} alt="" className='hidden xl:block' />
        <img src={cartlog} alt="" className='hidden xl:block' />
        </div>
      </div>
      <div className='w-full h-auto flex-1 flex justify-centers py-3'>

        <img src={droplog} alt="" className='xl:hidden w-15 h-15' />
        <img src={acerlogo} alt="" className='w-20 ml-5' />
        <div className=' flex-1 justify-center items-center hidden xl:flex ' >
          <ul className='flex list-none gap-10 items-center justify-center font-medium text-xl'>
            <li>Store</li>
            <li>AI</li>
            <li>Products</li>
            <li>Buisness</li>
            <li>Education</li>
            <li>Support</li>
            <li>Events</li>
          </ul>
        </div>
<div className="flex items-center ml-auto gap-5 pr-6">
          <img src={serlog} alt="" className='w-9 h-9' />
         <img src={cartlog2} alt="" className='block xl:hidden w-7 h-7  sm:ml-5' />
        </div>
      </div>

     </header>
   <section className="w-full h-[520px] relative overflow-hidden">

{slides.map((slide, index) => (

slide.type === "image" ? (

<img
key={index}
src={slide.src}
className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
index === currentSlide ? "opacity-100" : "opacity-0"
}`}
/>

) : (

<video
key={index}
src={slide.src}
autoPlay
muted
loop
className={`absolute w-full h-full object-cover ${
index === currentSlide ? "opacity-100" : "opacity-0"
}`}
/>

)

))}

{/* BUTTONS */}
<button
  onClick={prevSlide}
  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/40 rounded-full flex items-center justify-center transition hover:bg-green-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth="3"
    fill="none"
    className="w-7 h-7"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
  </svg>
</button>

<button
  onClick={nextSlide}
  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/40 rounded-full flex items-center justify-center transition hover:bg-green-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth="3"
    fill="none"
    className="w-7 h-7"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
  </svg>
</button>

<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
{slides.map((_, index) => (
<div
key={index}
className={`h-1 w-20 ${
index === currentSlide ? "bg-green-500" : "bg-gray-400"
}`}
></div>
))}
</div>

</section>
<section className="w-full py-20 bg-gray-100 text-center">

<h2 className="text-4xl font-semibold mb-16">
Browse Popular Categories
</h2>

<div className="w-full overflow-x-auto ">
<div className="flex flex-nowrap lg:justify-center gap-10 px-6">

{categories.map((item, i) => (
<div
key={i}
className="flex flex-col items-center min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
>

<img
src={item.img}
alt={item.name}
className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mb-3"
/>

<p className="text-gray-700 text-sm sm:text-base text-center font-medium">
{item.name}
</p>

</div>
))}

</div>
</div>



</section>
<section className='w-full h-auto flex justify-center items-center py-6'>
  <h1 className='font-bold text-3xl text-gray-950'>Discover More with Acer</h1>
</section>





<section className='w-full h-auto grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-7 px-5 py-5 '>

<div className='flex flex-col '>
  <img src={w11} alt=""  />
<h1 className='font-medium text-3xl mt-3'>Windows 11</h1>
<h2 className='font-medium text-2xl mt-3'>Introducing Windows 11</h2>
<p className='text-xl text-green-500 mt-7'>Learn More</p>
</div>
<div className='flex flex-col '>
  <img src={pcg} alt=""  />
<h1 className='font-medium text-3xl mt-3'>PC GAME PASS</h1>
<h2 className='font-medium text-2xl mt-3'>Three-month trial included with your new Acer laptop.</h2>
<p className='text-xl text-green-500 mt-7'>Learn More</p>
</div>
<div className='flex flex-col '>
  <img src={vero} alt=""  />
<h1 className='font-medium text-3xl mt-3'>Acer Vero</h1>
<h2 className='font-medium text-2xl mt-3'>Green PC Products</h2>
<p className='text-xl text-green-500 mt-7'>Learn More</p>
</div>
<div className='flex flex-col '>
  <img src={w11p} alt=""  />
<h1 className='font-medium text-3xl mt-3'>Windows 11 Pro</h1>
<h2 className='font-medium text-2xl mt-3'>Windows 11 Pro for Acer business laptops

</h2>
<p className='text-xl text-green-500 mt-7'>Learn More</p>
</div>
</section>

<section>
  
</section>

<footer className='w-full bg-gray-100 '>
  <section className='w-full h-auto  py-5 flex justify-center items-center bg-gray-50'>
    <h1 className='font-semibold text-center w-full'>Back To Top</h1>
  </section>
  
  <section className='w-full h-auto bg-gray-100 grid grid-cols-1 xl:grid-cols-4 text-xl'>
    <div className='pl-5 mt-5'>
      <ul className=' flex flex-col list-none xl:gap-2.5  '>
        <li className='font-medium flex items-center'> <span> Products</span> <svg xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  className="w-5 h-5 ml-auto xl:hidden">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7" />
</svg></li>
        <li className='hidden xl:block' >Laptops</li>
        <li className='hidden xl:block'>Acer Chromebooks</li>
        <li className='hidden xl:block'>Tablet and Phones</li>
        <li className='hidden xl:block'>Monitors</li>
        <li className='hidden xl:block'>Projectors</li>
        <li className='hidden xl:block'>Digital Signage</li>
        <li className='hidden xl:block'>Electronics & Accessories</li>
        <li className='hidden xl:block'>Networking</li>
        <li className='hidden xl:block'>eMobility</li>
        <li className='hidden xl:block'>Handheld Gaming</li>
        <li className='hidden xl:block'>Appliances</li>
        <li className='hidden xl:block'>Sustainable Products</li>
        <li></li>

      </ul>
    </div>
    <div className='mt-5 pl-5'>
      <ul className='flex flex-col list-none gap-2.5 '>
        <li className='font-medium flex items-center'><span>Support</span> <svg xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  className="w-5 h-5 ml-auto xl:hidden">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7" />
</svg>
        </li>
        <li className='hidden xl:block'>Acer ID</li>
        <li className='hidden xl:block'>Register a Product</li>
        <li className='hidden xl:block'>Acer Community</li>
        <li className='hidden xl:block'>Drivers and Manuals</li>
        <li className='hidden xl:block'>Acer Answers</li>
        <li className='hidden xl:block'>Contact Support</li>

      </ul>
    </div>
    <div className='mt-5 pl-5'>
      <ul className=' flex flex-col list-none gap-2.5 '>
        <li className='font-medium flex items-center'><span>Resources </span><svg xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  className="w-5 h-5 ml-auto xl:hidden">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7" />
</svg>
        </li>
        <li className='hidden xl:block'>Acer Corner</li>
        <li className='hidden xl:block'>Acer Global Account Portal</li>
        <li className='hidden xl:block'>Find a Store</li>
        <li className='hidden xl:block'>Acer Technologies</li>
        <li className='hidden xl:block'>McAfee</li>

      </ul>
    </div>
    <div className='mt-5 pl-5'>
      <ul className=' flex flex-col list-none gap-2.5 '>
        <li className='font-medium flex items-center'><span>About Acer</span> <svg xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  className="w-5 h-5 ml-auto xl:hidden">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7" />
</svg>
        </li>
        <li className='hidden xl:block'>Contact Us</li>
        <li className='hidden xl:block'>Investor Relations</li>
        <li className='hidden xl:block'>Press</li>
        <li className='hidden xl:block'>Awards</li>
        <li className='hidden xl:block'>Events</li>
        <li className='font-medium xl:mt-7 mt-4 flex items-center '><span>Sustainability </span> <svg xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  className="w-5 h-5 ml-auto xl:hidden">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7" />
</svg></li>
        <li className='hidden xl:block'>Corporate Social Responsibility</li>
        <li className='hidden xl:block'>Product Carbon Footprint</li>
        <li className='hidden xl:block'>Project Humanity</li>
        <li className='hidden xl:block'>Earthion</li>


      </ul>
    </div>

  </section>
  <div className="w-[90%] h-[3px] mt-5 bg-gray-400 mx-auto "></div>
  <section className=' w-full h-auto bg-gray-100'>
<div className='flex justify-center w-full h-auto] bg-gray-100'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="m-10 h-9 mx-4">
  <path d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.7v-2.88h2.7V9.8c0-2.67 1.59-4.15 4.02-4.15 1.16 0 2.37.2 2.37.2v2.6h-1.33c-1.31 0-1.72.81-1.72 1.64v1.97h2.93l-.47 2.88h-2.46v7A10 10 0 0 0 22 12z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" class="m-10 h-9 mx-4">
  <rect x="3" y="3" width="18" height="18" rx="5"/>
  <circle cx="12" cy="12" r="4"/>
  <circle cx="17.5" cy="6.5" r="1"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="m-10 h-9 mx-4">
  <path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-5.35-6.995L3.5 22H1l7.01-8.01L2 2h6.828l4.84 6.338L18.244 2zm-2.39 18h1.89L8.29 4H6.3l9.553 16z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="m-10 h-9 mx-4">
  <path d="M23 12s0-3.5-.44-5.05a2.9 2.9 0 0 0-2.05-2.05C18.95 4.5 12 4.5 12 4.5s-6.95 0-8.51.4A2.9 2.9 0 0 0 1.44 6.95C1 8.5 1 12 1 12s0 3.5.44 5.05a2.9 2.9 0 0 0 2.05 2.05c1.56.4 8.51.4 8.51.4s6.95 0 8.51-.4a2.9 2.9 0 0 0 2.05-2.05C23 15.5 23 12 23 12zM9.75 15.5v-7l6 3.5-6 3.5z"/>
</svg>
</div>
<div className='w-full h-auto bg-gray-100'></div>
  </section>
  <section>
    <ul className='flex flex-wrap justify-center items-center py-4'>
      <li className='px-4 border-r border-gray-400'>Privacy Policy</li>
      <li className='px-4 border-r border-gray-400'>Cookie Policy</li>
      <li className='px-4 border-r border-gray-400'>Legal Notice</li>
      <li className='px-4 border-r border-gray-400'>Additional Legal Information</li>
      <li className='px-4 border-r border-gray-400'>Accessibility Policy</li>
      <li className='px-4 border-r border-gray-400'>Cookies Settings</li>
    </ul>
  </section>
  <section className='w-full flex justify-center items-center '>
    <svg xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  className="w-5 h-5 ">
  <circle cx="12" cy="12" r="10"/>
  <path d="M2 12h20"/>
  <path d="M12 2a15 15 0 0 1 0 20"/>
  <path d="M12 2a15 15 0 0 0 0 20"/>
</svg><span className='flex pl-2'>India - English</span>
  </section>
  <section className='flex justify-center items-center py-5'>
    © 2026 Acer Inc.
  </section>
  
</footer>
    </>
  )
}

export default App
