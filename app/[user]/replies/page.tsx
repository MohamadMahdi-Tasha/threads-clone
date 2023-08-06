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
            <section>
                <header>
                    <UserInfoComponent
                        title={'بلاگر درسي | ساينا شيخ نواز جاهد ( سايلي)'}
                        id={'sylie.jahed'}
                        img={'https://picsum.photos/100/100'}
                        content={"#سایلی👩‍⚕️ هستمبا من همراه باش تا برای زندگیمون #برنامه_ریزی کنیمو شايد فراتر بريم..🚀سفارش دفترشطرنجي سايلي🗒️👇🏻"}
                        followersCount={35000}
                        link={'https://www.google.com'}
                    />
                    <ThreadsOrRepliesComponent activePart={'replies'} id={'sylie.jahed'} />
                </header>
                <main>
                    <ThreadComponent />
                    <ThreadComponent />
                </main>
            </section>
            <FooterComponent />
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}