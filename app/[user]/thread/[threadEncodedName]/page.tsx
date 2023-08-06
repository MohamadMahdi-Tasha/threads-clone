// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import GetAppThreadComponent from '@/components/getAppThreadComponent';
import UserPageDownloadComponent from "@/components/userPageDownloadComponent";

// Exporting user page (functional component) as default
export default function ThreadPage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}>
                <header className={'mb-10'}>
                    <ThreadComponent />
                </header>
                <GetAppThreadComponent />
                <main className={'[&>div:not(:last-of-type)]:border-b [&>div:not(:last-of-type)]:pb-[15px] [&>div:not(:last-of-type)]:border-b-barcelonaMediaOutline flex flex-col gap-5'}>
                    <ThreadComponent />
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