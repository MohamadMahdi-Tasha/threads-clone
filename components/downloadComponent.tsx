// Imporing part
import DownloadQrCodeComponent from "@/components/downloadQrCodeComponent";

// Exporting download component as default
export default function DownloadComponent():JSX.Element {
    // Return JSX
    return (
        <div>
            <DownloadQrCodeComponent />
            <h1 className={'text-center text-white font-bold text-4xl mb-[20px] lg:hidden block'}>Threads</h1>
            <h6 className={'text-center text-white font-bold'}>Get the app</h6>
        </div>
    );
}
