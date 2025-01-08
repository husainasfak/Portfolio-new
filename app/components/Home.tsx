

import { JS, React, TS } from "./Icons"


const Home = () => {
  return (
    <div className="max-h-screen h-screen max-w-[720px] mx-auto pt-[40px]">
      <h1 className="font-head text-5xl font-bold text-white">Hello👋, I am Ashfaq</h1>
      <div className="mt-[36px]">
        <div className="text-md grid grid-cols-[1fr_20fr]"><span>👉</span> <p>A passionate and driven full-stack developer from India.</p> </div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">👉 <p>3+ years of experience.</p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">👉 <p className="flex">Proficient in modern web technologies like &nbsp; <span className="flex items-center gap-2">
          <JS />
          <TS />
          <React />
        </span> </p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">👉 <p>Skilled in building responsive, user-focused interfaces and developing robust, scalable backend systems.</p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">👉 <p>Always eager to learn and explore new tools and techniques to create innovative and high-quality solutions.</p></div>
      </div>


      

    </div>
  )
}

export default Home