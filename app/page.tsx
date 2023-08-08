// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import DownloadComponent from "@/components/downloadComponent";

// Exporting home page (functional component) as default
export default function HomePage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent>
            <header className={'lg:flex hidden min-h-[10vh] items-center'}>
                <h1 className={'dark:text-white text-black font-bold text-2xl'}>Threads</h1>
            </header>
            <main className={'flex justify-center items-center lg:min-h-[90vh] min-h-[auto]'}>
                <DownloadComponent />
            </main>
        </HolderComponent>
    );
}