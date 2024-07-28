import { Image } from '@nextui-org/react';
import { Marker } from '../../Icons';

const base = import.meta.env.BASE_URL

function Component() {
    return (
        <div id='footer' className='w-full grid grid-cols-1 md:grid-cols-2 pt-12 pb-12 pl-8 pr-8 gap-8 bg-[rgb(20,18,18)] text-white'>
            <div className='w-full flex justify-center items-center flex-col gap-8'>
                <div>
                    <p className='text-2xl font-semibold mb-4 bg-gradient-to-r from-green-700 to-yellow-200 inline-block text-transparent bg-clip-text'> Go. Green. Global.</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='flex items-center justify-center'>
                        <Marker className='inline row-span-3' size={40} />
                    </div>
                    <div>
                        <p className='text'>
                            &nbsp;MS - 01
                        </p>
                        <p className='text'>
                            Modern School,
                        </p>
                        <p className='text'>
                            Hackathon.
                        </p>
                    </div>
                </div>
            </div >
            <div className='w-full flex justify-center items-center'>
                <Image src={base + 'logoNT.png'} width={150} />
            </div>
            <div className='w-full flex justify-center items-center'>
            </div>
        </div >
    );
}

export default Component;