// Making nextJS to render this component in client side
'use client';

// Importing Part
import {useState} from "react";
import DownloadModalComponent from "@/components/downloadModalComponent";
import DownloadQrCodeComponent from "@/components/downloadQrCodeComponent";

// Creating and exporting user pages download section's component and exporting it as default
export default function UserPageDownloadComponent():JSX.Element {
    // Defining state of component
    const [isModalOpened, setModalOpened] = useState(false);

    // Return JSX
    return (
        <div className={'xl:block hidden'}>
            <DownloadModalComponent closeFunction={() => setModalOpened(false)} isOpened={isModalOpened} />
            <DownloadQrCodeComponent withoutBottom onClick={() => setModalOpened(true)} />
        </div>
    );
}