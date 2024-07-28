import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import p1 from "/p1.jpg";
import p2 from "/p2.jpg";
import p3 from "/p3.jpg";
import p4 from "/p4.jpg";
import p5 from "/p5.jpg";

function Component() {
  const committees = [
    {
      id: "p1",
      name: "Workshop with Village Residents",
      agenda: "Promoting Sustainable Development in Our Village",
      desc: `
During the workshop, we will explore the principles of sustainable development, delve into practical examples of sustainable practices, and discuss how these can be applied within our community. Participants will have the opportunity to brainstorm and plan community-driven projects that promote environmental conservation and enhance community well-being.
Whether you are interested in reducing waste, conserving energy, or improving local resources, this workshop will provide valuable insights and actionable steps to make a positive impact in our village. Together, we can build a more sustainable future for generations to come.`,
      img: p1,
    },
    {
      id: "p2",
      name: "500+ Trees Planted in the City",
      agenda: ` Planting 500 Trees for a Greener Village`,
      desc: `Join us in a village-wide campaign to plant 500 trees, aiming to enhance our environment and community. The campaign will begin with a launch event, featuring introductions and planting demonstrations. Community planting days will follow, allowing hands-on participation at designated sites. We will ensure ongoing tree health through regular monitoring and maintenance efforts. The campaign will conclude with a celebratory event to acknowledge our achievements and reflect on our collective impact toward a greener future.`,
      img: p2,
    },
    {
      id: "p3",
      name: "Literacy Campaign about Carbon Footprint",
      agenda: ` Literacy Campaign for Carbon Footprint*.`,

      desc: `Engage in our village-wide literacy campaign focused on understanding and reducing carbon footprints. The campaign will commence with an educational launch event introducing the concept and importance of carbon footprint literacy. Participants will then partake in interactive sessions and workshops to learn practical ways to measure, reduce, and offset carbon footprints in daily life. Ongoing engagement will include community-wide initiatives, such as awareness drives and practical demonstrations, aiming to empower individuals to make informed choices for a sustainable future. The campaign will culminate in a closing event celebrating achievements and fostering a commitment to ongoing carbon footprint literacy within our community.`,

      img: p3,
    },
    {
      id: "p4",
      name: "Plastic Recycling Workshop",
      agenda: " To educate and eradicate the use of plastic from our country",
      desc: `Participate in our village workshop dedicated to plastic recycling, aimed at promoting environmental sustainability. The workshop will commence with an introduction to the importance of plastic recycling and its impact on our community and environment. Participants will engage in hands-on sessions to learn about sorting, cleaning, and processing different types of plastic waste. Practical demonstrations will showcase creative ways to upcycle plastics into useful products. The workshop will conclude with a discussion on sustainable practices and strategies to implement effective plastic recycling initiatives within our village, fostering a cleaner and greener environment for all.`,
      img: p4,
    },
    {
      id: "p5",
      name: `Destributing LPG Cylinders`,
      agenda: ` To distribute LPG cylinders to promote sustainable and eco-friendly development`,

      desc: `Join us in our village-wide initiative to distribute LPG cylinders, promoting cleaner and safer cooking solutions. The campaign will kick off with a distribution launch event, where the importance of clean cooking and the benefits of LPG will be highlighted. Residents will have the opportunity to receive LPG cylinders and participate in educational sessions on safe handling, efficient usage, and environmental benefits. Ongoing efforts will focus on monitoring usage and providing support for maintenance and safety. The campaign will conclude with a community celebration to recognize participation and encourage sustained adoption of cleaner cooking practices across our village.`,

      img: p5,
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Projects | GVI";
  }, []);

  return (
    <>
      <div className="pt-[10vh] w-full min-h-[100vh]">
        <div className="w-full flex  items-center flex-col">
          <div className="py-[10vh]">
            <h1 className="pl-4 text-center w-full h-[10vh] mb-10 flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              Previous Projects
            </h1>
          </div>
          {committees.map((committee) => (
            <section
              id={committee.id}
              style={{ backgroundImage: `url(${committee.img}` }}
              className="bg-cover bg-center w-full bg-fixed min-h-[100vh]"
            >
              <div className="flex justify-center items-center flex-col w-full min-h-[100vh] bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(0,0,0,0.7)] text-black dark:text-white">
                <div className="container flex px-5 py-[15vh] items-center justify-center flex-col w-full h-full">
                  <div className="text-center lg:w-2/3 w-full grid gap-5">
                    <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium ">
                      {committee.name}
                    </h1>
                    <h2 className="text-2xl font-medium">
                      <div className="p-4 my-4 border-s-4 border-primary-300/50 bg-gray-50/50 dark:border-primary-500/50 dark:bg-gray-800/50 col-span-11 rounded">
                        <p className="text-2xl italic hover:not-italic font-medium leading-relaxed">
                          "{committee.agenda.trim()}"
                        </p>
                      </div>
                    </h2>
                    <p className="mb-8 leading-relaxed text-lg text-justify indent-10">
                      {committee.desc}
                    </p>
                    <div className="w-full flex justify-centre items-centre">
                   
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
export default Component;
