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
        <div className={'flex items-center justify-between gap-5 mb-5'}>
            <div>
                <h1 className={'text-white font-bold text-2xl mb-2'}>{title}</h1>
                <div className={'flex items-center gap-3'}>
                    <h6 className={'text-white font-normal'}>{id}</h6>
                    <Link href={'/'} className={'bg-gray-700/30 text-gray-400 px-[10px] py-[3px] rounded-3xl text-xs'}>Threads clone</Link>
                </div>
            </div>
            <img onClick={() => setProfileModalOpened(true)} className={'w-[100px] h-[100px] rounded-full btn-animation cursor-pointer'} src={img} alt="sylie.jahed"/>
            <ModalComponent isOpened={isProfileModalOpened} closeFunction={() => setProfileModalOpened(false)}>
                <img className={'w-[200px] h-[200px] rounded-full'} src={img} alt="sylie.jahed"/>
            </ModalComponent>
        </div>
    );
}
