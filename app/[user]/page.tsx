// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import NameAndProfileComponent from "@/components/nameAndProfileComponent";
import BioComponent from "@/components/bioComponent";
import InfoBottomComponent from "@/components/infoBottomComponent";
import ThreadsOrRepliesComponent from "@/components/threadsOrRepliesComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import DownloadComponent from '@/components/downloadComponent';

// Exporting user page (functional component) as default
export default function UserPage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent small>
            <DownloadComponent />
            <header><ThemeTogglerComponent /></header>
            <section>
                <header>
                    <div>
                        <NameAndProfileComponent />
                        <BioComponent />
                        <InfoBottomComponent />
                    </div>
                    <ThreadsOrRepliesComponent />
                </header>
                <main>
                    <ThreadComponent />
                </main>
            </section>
            <FooterComponent />
        </HolderComponent>
    );
}