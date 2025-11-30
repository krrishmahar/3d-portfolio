import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.dev variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 400 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Create another div like below with eye icon to show live preview */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{name} </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.dev>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My Work</p>
        <h2 className="section-head-text">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-wl-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quis
          animi minus amet nesciunt facilis earum nisi sed, excepturi a
          architecto perspiciatis aut rerum vero voluptatum praesentium
          recusandae ipsum maiores. Tenetur provident atque architecto fugit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          exercitationem maxime corporis suscipit, totam ea, illum ipsa incidunt
          sint porro id veritatis!
        </motion.p>
      </div>
      <div className="flex">
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};
const WorkSection = SectionWrapper(Works, "works");
export default WorkSection;
