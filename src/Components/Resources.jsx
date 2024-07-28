import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";


function Component() {
    const items = [
        {
          src: "/images/Event1.jpg",
          id: "e1",
          name: "Recycling Camp",
          post: "2/8/24",
          link: "https://youtu.be/4rcWLy2MgDQ?si=C24o5UTFjjLNBPtY",
          desc: "At GVI, we are passionate about promoting environmental sustainability through our Recycling Camp initiative. This camp is designed to educate participants of all ages about the importance of recycling, waste reduction, and responsible waste management practices.",
        },
        {
          src:"/images/Event2.jpg",
          id: "e2",
          name: "Project Paws",
          post: "9/8/24",
          link: "https://youtu.be/lmboaugl6zg?si=CZquRY4XrcXtBarb",
          desc: "Project Paws is a compassionate initiative aimed at improving the lives of street dogs through humane and proactive measures. Our mission is to provide essential care, medical attention, and shelter to stray dogs in need. By rescuing and rehabilitating these animals, we strive to reduce their suffering and ensure they lead healthier, happier lives. ",
        },
        {
          src:"/images/Event3.jpg",
          id:"e3",
          name: "Go EV",
          post: "16/8/24",
          link: "https://youtu.be/0sMKYut0pmQ?si=uhYkGfTgcW7RXgok",
          desc: "Go EV! stands as a powerful call to action in the global movement towards sustainable transportation. As we face unprecedented environmental challenges, transitioning to electric vehicles (EVs) represents a pivotal step towards reducing carbon emissions, improving air quality, and securing a cleaner future for generations to come.",
        },
        {
          src:"/images/Event4.jpg",
          id: "e4",
          name: "Tree Plantation",
          post: "24/8/24",
          link: "https://youtu.be/uTAVw1sbpno?si=j7oPD7X-f46oYbOE",
          desc: "At GVI, we are committed to environmental stewardship and sustainability. Our Plantation Drive is a proactive initiative aimed at combating climate change and enhancing our ecosystem through the planting of trees and native vegetation.",
        },
        {
          src:"/images/Event5.jpg",
          id:"e5",
          name: "Clean the Beech Mission",
          post: "31/8/24",
          link:"https://youtu.be/JtGsdiYdObQ?si=y8sm6FnWbQWotX_w",
          desc: "GVI invites you to participate in our Beach Cleaning event, where we come together to protect and preserve our coastal environments. This initiative is part of our commitment to environmental conservation and ensuring our beaches remain clean and beautiful for everyone to enjoy.",
        },
      ];

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Resources | GVI'
    }, [])

    return (
        <>
            <div className="pt-[10vh] w-full min-h-[100vh]">
                <div className="w-full flex  items-center flex-col">
                    <div className="py-[5vh] text-center">
                        <p className="w-full h-[8vh] m-1 flex justify-center items-center font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">Resources</p>
                        <p className="pt-[2.5vh]">Click on your respective project name to view its guide.</p>
                    </div>
                    <div className="min-h-[80vh] w-full flex items-center flex-col">
                        <div className="grid grid-cols-5 grid-rows-1 w-full">
                            {items.map((item) => (
                                <div className='w-full h-[30vh] hover:z-10 md:h-[40vh] xl:h-[80vh] bg-primary-100 brightness-75 transition-all hover:brightness-100 hover:scale-[105%] flex justify-end items-center flex-col bg-cover bg-center data-[low=true]:hidden data-[low=true]:md:flex' key={item.id} onClick={() => window.open(base + 'resources/' + item.filename, '_blank').focus()}
                                    style={{
                                        backgroundImage: `url(${item.src})`,
                                        backgroundPosition: item.position || 'center',
                                    }}
                                    transition={{ duration: 0 }}
                                    data-low={item.low ? 'true' : 'false'}
                                >
                                    <div className='h-[10vh] w-full'>
                                        <h2 className='text-3xl text-center text-white'><Button onClick={() => window.open(`${item.link}`, '_blank').focus()} radius="md" className="bg-gradient-to-tr from-green-700 to-yellow-200 text-white shadow-lg font-semibold mr-[2vw]" color="secondary" variant="shadow">{item.name}</Button></h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Component;