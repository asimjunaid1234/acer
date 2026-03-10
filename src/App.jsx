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
       <header className='w-full h-[108px] flex flex-col'>
      <div className='w-full h-[42px] flex bg-[#303030]'>
        <div>
          <img src={acerbrands} alt="" className='hidden xl:block' />
        </div>
        <div className='flex justify-center items-center lg:ml-75 sm:ml-40 md:ml-50 text-white'>
          Discover the Best Deals at Acer Store – Shop Now!
        </div>
        <img src={loclog} alt="" className='hidden xl:block ml-90' />
        <img src={perlog} alt="" className='hidden xl:block' />
        <img src={cartlog} alt="" className='hidden xl:block' />
      </div>
      <div className='w-full h-[66px] flex justify-centers'>

        <img src={droplog} alt="" className='xl:hidden w-15 h-15' />
        <img src={acerlogo} alt="" className='w-20 ml-5' />
        <div className=' pl-60  justify-center items-center hidden xl:flex ' >
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

<div className="w-full overflow-x-auto lg:overflow-visible">
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
<section className='w-full h-[100px] flex justify-center items-center mb-[20px]'>
  <h1 className='font-bold text-3xl text-gray-950'>Discover More with Acer</h1>
</section>



<section className='w-full h-[420px] grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-7 '>
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
    
    </>
  )
}

export default App
