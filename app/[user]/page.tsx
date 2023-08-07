// Importing Part
import { ThreadsAPI } from 'threads-api';
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import UserInfoComponent from "@/components/userInfoComponent";
import ThreadsOrRepliesComponent from "@/components/threadsOrRepliesComponent";
import UserPageDownloadComponent from "@/components/userPageDownloadComponent";

// Exporting user page (functional component) as default
export default function UserPage():JSX.Element {
    // Using hooks
    const threadsAPI = new ThreadsAPI();

    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}>
                <header>
                    <UserInfoComponent id={'sylie.jahed'}/>
                    <ThreadsOrRepliesComponent activePart={'threads'} id={'sylie.jahed'} />
                </header>
                <main className={'[&>div:not(:last-of-type)]:border-b [&>div:not(:last-of-type)]:pb-[15px] [&>div:not(:last-of-type)]:border-b-barcelonaMediaOutline flex flex-col gap-5'}>
                    <ThreadComponent />
                </main>
            </section>
            <FooterComponent />
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}