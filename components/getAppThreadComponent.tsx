// Making nextJS to render this component in client side
'use client';

// Importing part
import {useState} from "react";
import DownloadModalComponent from "@/components/downloadModalComponent";

// Exporting get app component as default
export default function GetAppThreadComponent():any {
    // Defining state of component
    const [isModalOpened, setModalOpened] = useState(false);

    // Return JSX
    return (
        <div className={'py-[20px] border-y border-y-barcelonaMediaOutline flex items-center justify-between gap-5 mb-10'}>
            <DownloadModalComponent closeFunction={() => setModalOpened(false)} isOpened={isModalOpened} />
            <span className={'text-white text-md'}>👋 Get the app to like, reply and post.</span>
            <button className={'text-black bg-white rounded-[10px] btn-animation text-sm px-[20px] py-[5px]'} onClick={() => setModalOpened(true)}>Get</button>
        </div>
    );
}