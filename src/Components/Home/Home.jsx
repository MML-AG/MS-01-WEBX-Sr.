import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  RangeCalendar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Countdown from "react-countdown";
import { CalendarDate } from "@internationalized/date";
import { Button, ButtonGroup, Image, Tabs, Tab } from "@nextui-org/react";
import image from "/bgimg.jpg";
import { useNavigate } from "react-router-dom";

import Arrow from "../../../public/Arrow";

import { useAuth0 } from "@auth0/auth0-react";
const base = import.meta.env.BASE_URL;

const core = [
  {
    src: "/images/Event1.jpg",
    id: "e1",
    name: "Recycling Camp",
    post: "2/8/24",
    link: "https://youtu.be/4rcWLy2MgDQ?si=C24o5UTFjjLNBPtY",
    desc: "At GVI, we are passionate about promoting environmental sustainability through our Recycling Camp initiative. This camp is designed to educate participants of all ages about the importance of recycling, waste reduction, and responsible waste management practices.",
  },
  {
    src: "/images/Event2.jpg",
    id: "e2",
    name: "Project Paws",
    post: "9/8/24",
    link: "https://youtu.be/lmboaugl6zg?si=CZquRY4XrcXtBarb",
    desc: "Project Paws is a compassionate initiative aimed at improving the lives of street dogs through humane and proactive measures. Our mission is to provide essential care, medical attention, and shelter to stray dogs in need. By rescuing and rehabilitating these animals, we strive to reduce their suffering and ensure they lead healthier, happier lives. ",
  },
  {
    src: "/images/Event3.jpg",
    id: "e3",
    name: "Go EV",
    post: "16/8/24",
    link: "https://youtu.be/0sMKYut0pmQ?si=uhYkGfTgcW7RXgok",
    desc: "Go EV! stands as a powerful call to action in the global movement towards sustainable transportation. As we face unprecedented environmental challenges, transitioning to electric vehicles (EVs) represents a pivotal step towards reducing carbon emissions, improving air quality, and securing a cleaner future for generations to come.",
  },
  {
    src: "/images/Event4.jpg",
    id: "e4",
    name: "Tree Plantation",
    post: "24/8/24",
    link: "https://youtu.be/uTAVw1sbpno?si=j7oPD7X-f46oYbOE",
    desc: "At GVI, we are committed to environmental stewardship and sustainability. Our Plantation Drive is a proactive initiative aimed at combating climate change and enhancing our ecosystem through the planting of trees and native vegetation.",
  },
  {
    src: "/images/Event5.jpg",
    id: "e5",
    name: "Clean the Beech Mission",
    post: "31/8/24",
    link: "https://youtu.be/JtGsdiYdObQ?si=y8sm6FnWbQWotX_w",
    desc: "GVI invites you to participate in our Beach Cleaning event, where we come together to protect and preserve our coastal environments. This initiative is part of our commitment to environmental conservation and ensuring our beaches remain clean and beautiful for everyone to enjoy.",
  },
];

const item = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Component() {
  useEffect(() => {
    document.title = "Home | Study Nexus";
  }, []);

  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="pt-[10vh] w-full min-h-[100vh]">
      {/* <video autoplay muted loop className="fixed z-0 w-full">
        <source src={backGroundVideo} type="video/mp4" />
        </video> */}

      <div className="w-full h-[100vh] font-generica font-semibold text-center">
        <div
          className="w-full h-full absolute  bg-cover bg-fixed opacity-[0.4]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-full h-full pt-[10vh] flex justify-center items-center flex-col gap-10">
          {isAuthenticated && (
            <div>
              <h1 className="text-8xl">Welcome {user.name}</h1>
            </div>
          )}

          {!isAuthenticated && (
            <div>
              <Image
                draggable={false}
                src={base + "logoNT.png"}
                width={450}
                className=""
              />
              <h1 className="text-5xl">
                Plan<span className="text-6xl">.</span> Pursue
                <span className="text-6xl">.</span> Progress
                <span className="text-6xl">.</span>
              </h1>{" "}
            </div>
          )}
        </div>
      </div>

      

      {isAuthenticated && (
        <div>
          <div className="min-h-[70vh] flex justify-center items-center flex-col text-center py-20">
            <div className="w-full h-[8vh] m-1 flex justify-center items-center font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-kurale bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              GREEN VILLAGE INITIATIVE
            </div>
            <div className="w-full  m-1 mt-5 flex justify-center items-center text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-kurale bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              Next Event : Recycling Camp
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
              <Countdown
                date={new Date("2024-08-02T10:00:00")}
                intervalDelay={1000}
                precision={0}
                renderer={(props) => (
                  <div className="h-full w-full col-span-2 flex justify-center items-center font-reguilar text-2xl md:text-3xl lg:text-4xl gap-4 ml-4 mr-4">
                    <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">
                      {props.days} Days
                    </div>
                    <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">
                      {props.hours} Hours
                    </div>
                    <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">
                      {props.minutes < 10 ? "0" + props.minutes : props.minutes}{" "}
                      Minutes
                    </div>
                    <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">
                      {props.seconds < 10 ? "0" + props.seconds : props.seconds}{" "}
                      Seconds
                    </div>
                  </div>
                )}
              />
              <div className="flex justify-center mb-3 mt-5">
                <RangeCalendar
                  prevButton="disabled"
                  isReadOnly
                  aria-label="Display Calendar"
                  title="Volunteer Now"
                  defaultValue={{
                    start: new CalendarDate(2024, 8, 2, 10, 0, 0, "UTC"),
                    end: new CalendarDate(2024, 8, 5, 9, 0, 0, "UTC"),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="min-h-[80vh] w-full flex items-center flex-col p-7 mb-7">
            <Card className="max-w-[80%]">
              <CardHeader className="flex items-center">
                <p className="pl-4 text-center w-full h-[10vh] flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
                  Our Mission
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className=" w-full flex text-sm md:text-lg lg:text-xl pl-4">
                  Greetings!
                  <br />
                  <br />
                  At Green Village Initiative, our mission is centered around
                  promoting sustainable development practices within our
                  community and beyond. We are committed to fostering a greener
                  future by implementing initiatives that reduce carbon
                  footprints, promote recycling, and enhance green spaces. .
                  <br />
                  <br />
                  Through collaborative efforts and community engagement, we aim
                  to raise awareness about environmental issues and inspire
                  actionable steps towards sustainability. Our initiatives are
                  designed to not only mitigate environmental impact but also to
                  create lasting benefits for current and future generations. We
                  believe in the power of education and empowerment. By
                  educating our community about the importance of sustainable
                  living and providing practical solutions, we encourage
                  individuals and businesses to adopt eco-friendly practices in
                  their daily lives and operations.
                  <br />
                  <br />
                  From organizing local clean-up drives to advocating for
                  renewable energy solutions, our projects are diverse and
                  impactful. We work closely with local authorities, businesses,
                  and volunteers to ensure our efforts are aligned with broader
                  environmental goals and contribute positively to our
                  surroundings. Join us in our journey towards a healthier
                  planet and a more resilient community. Together, we can make a
                  significant difference in preserving our natural resources and
                  building a sustainable future for all.
                  <br />
                  <br />
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="pt-[10vh] w-full min-h-[100vh]">
            <p className="pl-4 text-center w-full h-[10vh] mb-10 flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              Upcoming Events
            </p>
            <div className="flex flex-col items-center gap-4">
              <div
                className="p-5 mb-12 sm:w-[80vw] md:w-[70vw] w-full lg:w-[70vw] grid grid-cols-5 gap-10"
                animate="visible"
              >
                {core.map((image, index) => (
                  <>
                    {index % 2 === 1 && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={item}
                        className="flex flex-col col-span-2 gap-2 justify-center items-end"
                      >
                        {/* <p className="text-md md:text-xl font-semibold">
                      {image.name}
                    </p>
                    <p className="text-sm md:text-lg">{image.post}</p>
                    <p className="text-sm md:text-lg">{image.desc}</p> */}
                        <Card className="max-w-[100%] p-5">
                          <CardHeader className="flex items-center">
                            <p className="pl-4 text-center w-full h-[10vh]flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
                              <p className="text-md md:text-4xl font-semibold">
                                {image.name}
                              </p>
                            </p>
                          </CardHeader>
                          <Divider />
                          <CardBody>
                            <p className="text-sm md:text-lg text-center w-full">
                              {image.post}
                            </p>
                            <p className="text-sm md:text-lg">{image.desc}</p>
                            <div className="flex justify-center">
                              <p className="w-full flex justify-center items-center font-code text-xs font-bold text-n-1 uppercase tracking-wider p-3">
                                <Button onClick={() => navigate(`/Events`)}>
                                  {" "}
                                  Explore more <Arrow />{" "}
                                </Button>
                              </p>
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>
                    )}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={item}
                      className="col-span-3"
                    >
                      <Image
                        loading="eager"
                        classNames={{ wrapper: "col-span-3" }}
                        key={index}
                        src={image.src}
                        alt={"Image of " + image.post}
                      />
                    </motion.div>
                    {index % 2 === 0 && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={item}
                        className="flex flex-col col-span-2 gap-2 justify-center items-start"
                      >
                        <Card className="max-w-[100%] p-5">
                          <CardHeader className="flex items-center">
                            <p className="pl-4 text-center w-full h-[10vh]flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
                              <p className="text-md md:text-4xl font-semibold">
                                {image.name}
                              </p>
                            </p>
                          </CardHeader>
                          <Divider />
                          <CardBody>
                            <p className="text-sm md:text-lg text-center w-full">
                              {image.post}
                            </p>
                            <p className="text-sm md:text-lg">{image.desc}</p>
                            <p className="w-full flex justify-center items-center font-code text-xs font-bold text-n-1 uppercase tracking-wider p-3">
                              <Button onClick={() => navigate(`/Events`)}>
                                {" "}
                                Explore more <Arrow />{" "}
                              </Button>
                            </p>
                          </CardBody>
                        </Card>
                      </motion.div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Component;
