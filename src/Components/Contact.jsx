import { useState, useEffect, useRef } from "react";
import {
  RangeCalendar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

function Component() {
  const currLocation = {
    latitude: 26.887926682692324, 
    longitude: 80.94213960084427,}

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(17);
  maptilersdk.config.apiKey = "IalOQ02822zuJQcKKurw";

    var popup = new maptilersdk.Popup({offset: 25}).setText('Green Village Initiative Head Office');

  useEffect(() => {
    if (map.current && currLocation.lat) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.SATELLITE,
      zoom: zoom,
      interactive: false,
      center: [currLocation.longitude, currLocation.latitude],
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setPopup(popup)
      .setLngLat([currLocation.longitude, currLocation.latitude])
      .addTo(map.current);
  }, [currLocation.longitude, currLocation.latitude]);

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    document.title = "Contact | GVI";
  }, []);

  return (
    <div className="pt-[10vh] w-full min-h-[100vh]">
      <p className="pl-4 text-center w-full  flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
        Contact Us
      </p>
      <div className="pt-[10vh] w-full min-h-[100vh] flex justify-center">
        <div className="w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] py-8">
          <Card>
            <Skeleton
              isLoaded={!loading2}
              classNames={{
                content: "h-[80vh] w-full",
              }}
            >
              <iframe
                onLoad={() => setLoading2(false)}
                className="w-full h-full"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdEeyF27Ovo0TB0uPEj6sCxRBCboXqOFheXj469jFB_RbbVPg/viewform?usp=sf_link"
              />
            </Skeleton>
          </Card>

          <div className="map-wrap w-full h-[100vh] mt-10 flex justify-center items-center">
            <div ref={mapContainer} className="map h-[75vh] w-[75vh]"></div>

            <Card className="max-w-[80%] ml-12">
          <CardHeader>
            <p className=" text-center w-full font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
          Office Location
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className=" w-full flex text-sm md:text-lg lg:text-xl pl-4">
              Modern School Aliganj, Lucknow Uttar Pradesh, India
            </p>
          </CardBody>
          <Divider />
          <CardHeader>
            <p className=" text-center w-full font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-generica bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
          Our Socials
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className=" w-full flex text-sm md:text-lg lg:text-xl pl-4">
              Instagram:- @GVI
              <br></br>
              Facebook:- Green Village Initiative
            </p>
          </CardBody>

        </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
