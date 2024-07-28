import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";

import {parseDate} from "@internationalized/date";

import e1 from "/images/Event1.jpg";
import e2 from "/images/Event2.jpg";
import e3 from "/images/Event3 copy.jpg";
import e4 from "/images/Event4.jpg";
import e5 from "/images/Event5.jpg";

function Component() {
  const committees = [
    {
      id: "e1",
      name: "Recycling Camp",
      agenda: "Join Our Recycling Camp: Educating, Engaging, and Empowering",
      desc: `
During our Recycling Camp, participants will engage in hands-on activities, workshops, and educational sessions led by experts in environmental conservation. They will learn practical skills such as sorting recyclables, understanding recycling symbols, and creating upcycled crafts from reusable materials.`,
      img: e1,
      date: "2024-08-02",
    },
    {
      id: "e2",
      name: "Project Paws",
      agenda: ` Saving dogs from exploitation and cruelty`,
      desc: `Project Paws is a compassionate initiative aimed at improving the lives of street dogs through humane and proactive measures. Our mission is to provide essential care, medical attention, and shelter to stray dogs in need. By rescuing and rehabilitating these animals, we strive to reduce their suffering and ensure they lead healthier, happier lives.

Through a network of dedicated volunteers and animal welfare professionals, Project Paws offers regular feeding programs, medical treatments, and vaccination drives. These efforts not only address immediate health concerns but also contribute to controlling the population of stray dogs through spaying and neutering initiatives.
`,
      img: e2,
      date: "2024-08-09",
    },
    {
      id: "e3",
      name: "Go EV!",
      agenda: `Reducing Carbon Footprint*.`,

      desc: `"Go EV!" stands as a powerful call to action in the global movement towards sustainable transportation. As we face unprecedented environmental challenges, transitioning to electric vehicles (EVs) represents a pivotal step towards reducing carbon emissions, improving air quality, and securing a cleaner future for generations to come.

Embracing EVs means embracing innovation and progress. These vehicles are not just a mode of transport but a catalyst for change, revolutionizing how we think about mobility. With zero tailpipe emissions, EVs help mitigate the harmful effects of traditional fossil fuel vehicles on our environment and public health. They offer quieter, smoother rides and require less maintenance, making them not only eco-friendly but also practical and cost-effective choices for consumers and businesses alike.`,

      img: e3,
      date: "2024-08-16",
    },
    {
      id: "e4",
      name: "Tree Plantation",
      agenda: " To educate and eradicate cutting of trees from our country",
      desc: `Trees play a crucial role in improving air quality, absorbing carbon dioxide, and providing habitat for wildlife. Through our drive, we aim to increase green cover in our community, beautify our surroundings, and create a healthier environment for all.

Participating in the Plantation Drive is more than just planting trees; it's about taking tangible steps towards a sustainable future. Whether you're an individual, a local business, or a community organization, you can make a significant impact by joining us. Together, we can make our neighborhoods cleaner, greener, and more resilient to environmental challenges.
`,
      img: e4,
      date: "2024-08-24",
    },
    {
      id: "e5",
      name: `Clean the Beech Mission`,
      agenda: `Join Our Beach Cleaning Event: Preserving Coastal Beaut`,

      desc: `During the Beach Cleaning event, volunteers of all ages and backgrounds gather to remove litter, debris, and plastics from the shoreline. Through collective effort and dedication, we aim to reduce pollution in our oceans, safeguard marine life, and maintain the natural beauty of our coastal areas.

Participants not only contribute to the immediate cleanliness of the beach but also raise awareness about the importance of responsible waste disposal and the impact of plastic pollution on marine ecosystems. By taking action at the local level, we demonstrate our commitment to global environmental sustainability goals.
`,

      img: e5,
      date: "2024-08-31",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Events | GVI";
  }, []);

  return (
    <>
      <div className="pt-[10vh] w-full min-h-[100vh]">
        <div className="w-full flex  items-center flex-col">
          <div className="py-[10vh]">
            <h1 className="pl-4 text-center w-full h-[10vh] mb-10 flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              Upcoming Events
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
                      <div className="flex gap-x-4 w-full justify-centre items-centre">
                        <Calendar
                          aria-label="Date (No Selection)"
                          prevButton="disabled"
                          isReadOnly
                          value={parseDate((`${committee.date}`))}
                        />
                      </div>
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
