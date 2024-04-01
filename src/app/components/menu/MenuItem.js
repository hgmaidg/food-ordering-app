/* eslint-disable @next/next/no-img-element */
export default function MenuItem({ children }) {
  return (
    <div className="text-center bg-gray-100 rounded-3xl p-4 hover:bg-gray-200 hover:shadow-lg hover:shadow-black/20 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizza"
          className="max-h-auto max-h-28 mx-auto"
        />
      </div>
      <h4 className="text-primary my-3 font-semibold text-xl">Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum hello everyone my name is peparoni
      </p>
      <button className="mt-4 bg-primary text-white px-8 py-2 rounded-full">
        Add To Cart $12
      </button>
    </div>
  );
}
