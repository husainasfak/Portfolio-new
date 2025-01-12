import type { MetaFunction } from "@remix-run/node";
import { Pickaxe } from "lucide-react";
export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio - Ashfaq" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {

  return (
    <div className="max-h-screen h-screen max-w-[720px] mx-auto pt-[40px]">
      <h1 className="font-head text-4xl font-bold text-white">Hello👋, I am Ashfaq</h1>
      <div className="mt-[24px]">
        <div className="text-md grid grid-cols-[1fr_20fr]"><span>👉</span> <p className="flex items-center gap-2">A passionate and driven full-stack developer from India<img src="/india.png" alt="India" width={20} height={20}/></p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">🌟 <p>3+ years of experience.</p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">💻 <p>Skilled in building responsive, user-focused interfaces and developing robust, scalable backend systems.</p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">🎢 <p>Always eager to learn and explore new tools and techniques to create innovative and high-quality solutions.</p></div>
        <div className="text-md mt-3 grid grid-cols-[1fr_20fr]">😇 <p>Let&apos;s talk how we can work together!</p></div>
      </div>
      <div className="mt-[60px]">
        <p className="text-xl text-white font-bold flex items-center gap-3"><Pickaxe fill="white"/>Side Works</p>
      </div>
    </div>
  );
}


