import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import WorksWith from "@/components/Home/WorksWith";

import img from "/public/protein_2.png";
import img2 from "/public/hero-bg.png";
import Footer from "@/components/Home/Footer";
import AdvantagesBlock from "@/components/Home/AdvantagesBlock";
import CTABlock from "@/components/Home/CTABlock";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-[calc(100%-48px)] overflow-y-auto">
        <main className="w-full h-full">
          <Hero />
          <WorksWith />
          {/* <Slider
            blockTitle="Популярные товары"
            items={[
              {
                id: 1,
                title: "Protein Ultra Hyper Boost Duper Mega Titanic",
                price: 2100,
                avgRating: 4,
                img: img
              },
              { id: 2, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 3, title: "Protein", price: 2100, avgRating: 4, img: img },
              { id: 4, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 5, title: "Protein", price: 2100, avgRating: 4, img: img },
              { id: 6, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 7, title: "Protein", price: 2100, avgRating: 4, img: img },
              { id: 8, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 9, title: "Protein", price: 2100, avgRating: 4, img: img },
              {
                id: 10,
                title: "Protein",
                price: 2100,
                avgRating: 4,
                img: img2
              },
              { id: 11, title: "Protein", price: 2100, avgRating: 4, img: img },
              {
                id: 12,
                title: "Protein",
                price: 2100,
                avgRating: 4,
                img: img2
              },
              { id: 13, title: "Protein", price: 2100, avgRating: 4, img: img }
            ]}
          /> */}
          <AdvantagesBlock />
          {/* <Slider
            blockTitle="Новые поступления"
            items={[
              {
                id: 1,
                title: "Protein Ultra Hyper Boost Duper Mega Titanic",
                price: 2100,
                avgRating: 4,
                img: img
              },
              { id: 2, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 3, title: "Protein", price: 2100, avgRating: 4, img: img },
              { id: 4, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 5, title: "Protein", price: 2100, avgRating: 4, img: img },
              { id: 6, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 7, title: "Protein", price: 2100, avgRating: 4, img: img },
              { id: 8, title: "Protein", price: 2100, avgRating: 4, img: img2 },
              { id: 9, title: "Protein", price: 2100, avgRating: 4, img: img },
              {
                id: 10,
                title: "Protein",
                price: 2100,
                avgRating: 4,
                img: img2
              },
              { id: 11, title: "Protein", price: 2100, avgRating: 4, img: img },
              {
                id: 12,
                title: "Protein",
                price: 2100,
                avgRating: 4,
                img: img2
              },
              { id: 13, title: "Protein", price: 2100, avgRating: 4, img: img }
            ]}
          /> */}
          <CTABlock />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
