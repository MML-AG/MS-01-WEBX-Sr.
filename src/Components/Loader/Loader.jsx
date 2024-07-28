import { Image } from "@nextui-org/react";

function Component() {
    return (
        <div className="flex fixed h-[100vh] w-full items-center justify-center">
            <div className="aspect-square w-[15%] flex justify-center items-center bg-center bg-contain bg-no-repeat pb-5" style={{
                backgroundImage: 'url(/loaderBgWhite.png)'
            }}>
                <div className="aspect-square w-[70%] bg-center bg-contain bg-no-repeat mb-7 animate-[spin_5s_infinite_linear] duration-[10s]
                " style={{
                        backgroundImage: 'url(/loaderWhite.png)',
                    }}>
                </div>
            </div>
        </div>
    )
}

export default Component;