import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useEffect } from "react";
import upi from "/upiid.jpg";

function Component() {
  useEffect(() => {
    document.title = "Donate | GVI";
  }, []);

  return (
    <div className="pt-[10vh] w-full min-h-[100vh]">
      <div className="flex justify-center items-centre w-full h-[110vh]">
        <Card className="py-4 flex w-[35vw] justify-center items-centre">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-centre justify-centre">
            <p className="w-full h-[8vh] m-1 flex justify-center items-center font-bold text-4xl font-kurale bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              Donate for the future
            </p>
            <h4 className="font-bold text-2xl mt-5">
              UPI ID - 9415336120@pthdfc
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 w-full flex items-centre justify-centre">
            <Image
              alt="Card background"
              className="object-cover rounded-xl m-auto w-full flex justify-center items-centre"
              src={upi}
              width={500}
            />
          </CardBody>
        </Card>
        <Card className="py-4 flex w-[35vw] justify-center items-centre ml-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-centre justify-centre">
            <p className="w-full h-[8vh] m-1 flex justify-center items-center font-bold text-4xl font-kurale bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text">
              How we use your donations 
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 w-full flex items-centre justify-centre">
          <p className="w-full flex text-md pl-4">Donations play a crucial role in supporting our mission at Green Village Initiative. We deeply value the trust and generosity of our donors. Here's how donations are typically used:

<br></br><br></br>1. Programs and Services: The majority of donations go directly towards funding our core programs and services. These may include initiatives such as environmental conservation projects, educational programs, community outreach efforts, or providing essential services to those in need.

<br></br><br></br>2. Operational Support: Donations also contribute to the day-to-day operations of our organization. This includes covering administrative costs, staffing, overhead expenses, and maintaining necessary infrastructure. Operational support ensures that our organization functions smoothly and efficiently, enabling us to focus on our mission without interruption.

<br></br><br></br>3. Impact and Expansion: Some donations are allocated towards expanding our impact and reach. This could involve scaling up successful programs, launching new initiatives, or investing in innovative solutions that address emerging challenges. Your support allows us to grow our efforts and make a greater difference in the communities we serve.

<br></br><br></br>Every donation, regardless of size, plays a critical role in advancing our mission and creating positive change. We are grateful for your support and remain dedicated to maximizing the impact of every dollar donated towards building a better future for all.</p>
          </CardBody>
        </Card>
        </div>
    </div>
  );
}

export default Component;
