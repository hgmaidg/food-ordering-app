import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero py-6">
      <div className="py-20">
        <h1 className="text-6xl font-semibold leading-snug">
          Everything is better <br /> with a
          <span className="text-primary"> Pizza</span>
        </h1>
        <p className="my-8 text-gray-500 text-lg">
          Pizza is missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-2 text-sm mt-10">
          <button className="bg-primary text-white px-8 py-2 rounded-full flex items-center gap-2 uppercase ">
            Order Now
            <Right />
          </button>
          <button className="bg-white text-primary px-8 py-2 rounded-full flex items-center gap-2 text-gray-500 font-semibold ">
            View Menu
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src="/pizza.png" layout="fill" objectFit="contain" alt="pizza" />
      </div>
    </section>
  );
}
