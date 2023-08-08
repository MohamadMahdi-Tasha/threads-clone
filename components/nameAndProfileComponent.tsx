// Making nextJS to render this component in client side
'use client';

// Importing Part
import Link from "next/link";
import {useState} from "react";
import ModalComponent from "@/chunks/modalComponent";

// Defining type of props
interface typeOfProps {
    title: string,
    id: string,
    img: string
}

// Exporting name and profile component as default
export default function NameAndProfileComponent({title,id,img}:typeOfProps):JSX.Element {
    // Defining state of component
    const [isProfileModalOpened, setProfileModalOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'lg:flex-row flex-col flex lg:items-center justify-between items-start gap-5 mb-5'}>
            <div>
                <h1 className={'dark:text-white text-black font-bold text-2xl mb-2 truncate'}>{title}</h1>
                <div className={'flex lg:flex-row flex-col lg:items-center items-start gap-3 flex-wrap'}>
                    <h6 className={'dark:text-white text-black font-normal'}>{id}</h6>
                    <Link href={'/'} className={'bg-gray-700/30 dark:text-gray-400 text-black px-[10px] py-[3px] rounded-3xl text-xs'}>Threads clone</Link>
                </div>
            </div>
            <img onClick={() => setProfileModalOpened(true)} className={'lg:w-[100px] w-full lg:h-[100px] h-[200px] object-cover lg:rounded-full btn-animation cursor-pointer'} src={img} alt="sylie.jahed"/>
            <ModalComponent isOpened={isProfileModalOpened} closeFunction={() => setProfileModalOpened(false)}>
                <img className={'w-[200px] h-[200px] rounded-full'} src={img} alt={id}/>
            </ModalComponent>
        </div>
    );
}
