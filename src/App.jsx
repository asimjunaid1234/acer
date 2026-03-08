import { useState, useEffect } from 'react'
import './App.css'
import acerbrands from './image/acerbrands.png'
import loclog from './image/loclog.png'
import perlog from './image/perlog.png'
import cartlog2 from './image/cartlog2.png'
import cartlog from './image/cartlog.png'
import serlog from './image/serlog.png'
import droplog from './image/droplog.png'
import acerlogo from './image/acerlogo.svg'
import slide1 from './image/slide1.avif'
import slide2 from './image/slide2.avif'
import slide3 from './image/slide3.mp4'
import slide4 from './image/slide4.mp4'

function App() {
  const [count, setCount] = useState(0)

    const slides = [
    { type: "image", src: slide1 },
    { type: "image", src: slide2 },
    { type: "video", src: slide3 },
    { type: "video", src: slide4 }
  ]

const [currentSlide, setCurrentSlide] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 4000)

  return () => clearInterval(interval)
}, [])

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

<button
onClick={() =>
setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)
}
className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/40 rounded-full text-black"
>
‹
</button>

<button
onClick={() =>
setCurrentSlide(prev => (prev + 1) % slides.length)
}
className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/40 rounded-full text-black"
>
›
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
<section className='w-full h-[565px] bg-blue-300'>
  <header className='h-[185px] flex justify-center items-center'>
    <h1 className='font-bold text-4xl'>Browse Popular Categories</h1>
  </header>
</section>


     
    </>
  )
}

export default App
