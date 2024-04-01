import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subHeader={"Our Story"}
          mainHeder={"About Us "}
        ></SectionHeader>
        <div className="text-gray-500 max-w-xl mx-auto mt-6 flex flex-col gap-4">
          <p className="">
            <span className="text-2xl">🍕</span> Welcome to{" "}
            <span className="text-primary font-bold italic">Pi Pizza</span>{" "}
            <span className="text-2xl">🍕</span>
            <br />
            Crafting joy in every slice since 2024, we at HCMC are passionate
            about delivering the freshest, stone-baked pizzas to your table. Our
            community is our family, and we cherish the moments that turn into
            memories over a shared meal. For a taste of our dedication, visit us
            for dine-in, takeout, or delivery.
          </p>
          <p>
            Crafting joy in every slice since 2024, we at HCMC are passionate
            about delivering the freshest, stone-baked pizzas to your table. Our
            community is our family, and we cherish the moments that turn into
            memories over a shared meal. For a taste of our dedication, visit us
            for dine-in, takeout, or delivery.
          </p>
        </div>
      </section>
      <section className="text-center my-16">
        <SectionHeader subHeader={"Don't Hesitate"} mainHeder={"Contact"} />
        <div className="mt-4">
          <a
            className="text-2xl underline text-gray-500"
            href="tel:+84123456789"
          >
            +(84) 123 456 789
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500">
        &copy; 2024 All Rights Reserved
      </footer>
    </>
  );
}
