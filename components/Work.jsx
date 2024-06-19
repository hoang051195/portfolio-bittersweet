"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

import { PROJECT_CATEGORY } from "@/utils/constants";

const projectData = [
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.REACT_JS,
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: PROJECT_CATEGORY.FULLSTACK,
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: PROJECT_CATEGORY.NEXT_JS,
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: PROJECT_CATEGORY.NEXT_JS,
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: PROJECT_CATEGORY.FULLSTACK,
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: PROJECT_CATEGORY.FULLSTACK,
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: PROJECT_CATEGORY.REACT_JS,
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: PROJECT_CATEGORY.NEXT_JS,
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.REACT_JS,
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
