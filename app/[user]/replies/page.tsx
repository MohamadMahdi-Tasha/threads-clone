// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import UserInfoComponent from "@/components/userInfoComponent";
import ThreadsOrRepliesComponent from "@/components/threadsOrRepliesComponent";
import UserPageDownloadComponent from "@/components/userPageDownloadComponent";

// Exporting user replies page (functional component) as default
export default function UserRepliesPage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}>
                <header>
                    <UserInfoComponent id={'sylie.jahed'}/>
                    <ThreadsOrRepliesComponent activePart={'replies'} id={'sylie.jahed'} />
                </header>
                <main className={'[&>div:not(:last-of-type)]:border-b [&>div:not(:last-of-type)]:pb-[15px] [&>div:not(:last-of-type)]:border-b-barcelonaMediaOutline flex flex-col gap-5'}>
                    <ThreadComponent />
                    <ThreadComponent />
                    <ThreadComponent />
                </main>
            </section>
            <FooterComponent />
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}