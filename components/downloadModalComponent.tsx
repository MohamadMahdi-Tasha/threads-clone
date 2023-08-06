// Making nextJS to render this component in client side
'use client';

// importing Part
import DownloadQrCodeComponent from "@/components/downloadQrCodeComponent";

// Defining type of props
interface typeOfProps {
    isOpened: boolean;
    closeFunction: any;
}

// Exporting download modal component as default
export default function DownloadModalComponent({isOpened, closeFunction}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <div data-opened={isOpened} className={'fixed top-0 left-0 min-h-[100vh] bg-themeColor/80 backdrop-blur w-full h-full z-20 overflow-auto transition-all data-[opened="true"]:opacity-100 data-[opened="true"]:visible data-[opened="false"]:opacity-0 data-[opened="false"]:invisible'}>
            <div className={'flex items-center p-[10px] mb-[20px]'}>
                <button onClick={closeFunction} className={'btn-animation w-[40px] h-[40px] bg-gray-200 flex items-center justify-center rounded-full'}>
                    <svg aria-label="Close" color="rgb(119, 119, 119)" fill="rgb(119, 119, 119)" height="18" role="img" viewBox="0 0 24 24" width="18">
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line>
                    </svg>
                </button>
            </div>
            <div className={'flex justify-center items-center px-[10px]'}>
                <DownloadQrCodeComponent />
            </div>
        </div>
    );
}
