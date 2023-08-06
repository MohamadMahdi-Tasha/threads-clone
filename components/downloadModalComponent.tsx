// importing Part
import DownloadQrCodeComponent from "@/components/downloadQrCodeComponent";
import ModalComponent from "@/chunks/modalComponent";

// Defining type of props
interface typeOfProps {
    isOpened: boolean;
    closeFunction: any;
}

// Exporting download modal component as default
export default function DownloadModalComponent({isOpened, closeFunction}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <ModalComponent isOpened={isOpened} closeFunction={closeFunction}>
            <DownloadQrCodeComponent />
        </ModalComponent>
    );
}
