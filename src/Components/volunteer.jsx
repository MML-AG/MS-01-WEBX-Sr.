import { useState, useEffect } from "react";
import {Card, Skeleton } from "@nextui-org/react";

function Component() {
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);

    useEffect(() => {
        document.title = 'Volunteer | GVI'
    }, [])


    return (
        <div className="pt-[10vh] w-full min-h-[100vh] flex justify-center">
            <div className="w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] py-8">
                        <Card>
                            <Skeleton isLoaded={!loading2} classNames={{
                                content: "h-[80vh] w-full"
                            }}>
                                <iframe onLoad={() => setLoading2(false)} className="w-full h-full" src="https://docs.google.com/forms/d/e/1FAIpQLScZ6yF2BS99jF1Y_9xN38uEbL5I30xCIvWUAmA2DjJa5R2S5A/viewform" />
                            </Skeleton>
                        </Card>
            </div>
        </div>
    );
}


export default Component;