import { useState, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";



function Component() {
  useEffect(() => {
    document.title = "Impact | GVI";
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pt-[10vh] w-full min-h-[100vh] grid grid-col-3 grid-row-3 items-center justify-center gap-5">
      {/* <video autoplay muted loop className="fixed z-0 w-full">
        <source src={backGroundVideo} type="video/mp4" />
      </video> */}
<p className="pl-4 text-center w-full mb-5 flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
        Testimonials
      </p>
      <Marquee>
      <Card className="max-w-[340px] mr-12 ml-12">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Radhika Sri</h4>
            <h5 className="text-small tracking-tight text-default-400">@radhika</h5>
          </div>
        </div>
      
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          The Green Village Initiative promotes sustainable development and is the most reliable non-profit organisation.
        </p>
        <span className="pt-2">
          #GrowGreenGlobal 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">59</p>
          <p className=" text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    <Card className="max-w-[340px] mr-12">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-2.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Naman Singh</h4>
            <h5 className="text-small tracking-tight text-default-400">@namanSingh</h5>
          </div>
        </div>
      
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          The NGO helps lots of people and provides them with everything they requrire.
        </p>
        <span className="pt-2">
          #GOGREEN
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">98</p>
          <p className=" text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">49.5K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    
    <Card className="max-w-[340px] mr-12">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-3.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Anshika</h4>
            <h5 className="text-small tracking-tight text-default-400">@anshika</h5>
          </div>
        </div>
      
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          The initiative encouraged me to buy a EV car and I am enjoying it.
        </p>
        <span className="pt-2">
          #Go_EV
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">434</p>
          <p className=" text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">452K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>

    <Card className="max-w-[340px] mr-12">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-4.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Abhijeet Kumar</h4>
            <h5 className="text-small tracking-tight text-default-400">@abhi-beast</h5>
          </div>
        </div>
      
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I have worked with this NGO and can support that they do real work.
        </p>
        <span className="pt-2">
          #TeamTrees 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4.4K</p>
          <p className=" text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">912K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-5.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Akshat Goel</h4>
            <h5 className="text-small tracking-tight text-default-400">@goelJiTopper</h5>
          </div>
        </div>
        
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I got 99% in boards due to the help provided by this NGO. I am grateful to them.
        </p>
        <span className="pt-2">
          #IamATopper 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card></Marquee>
    
   
    </div>
  );
}

export default Component;
