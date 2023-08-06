// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import DownloadQrCodeComponent from "@/components/downloadQrCodeComponent";
import UserInfoComponent from "@/components/userInfoComponent";
import ThreadsOrRepliesComponent from "@/components/threadsOrRepliesComponent";

// Exporting user page (functional component) as default
export default function UserPage():JSX.Element {
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
                    <ThreadsOrRepliesComponent activePart={'threads'} />
                </header>
                <main>
                    <ThreadComponent />
                </main>
            </section>
            <FooterComponent />
            <DownloadQrCodeComponent className={'fixed right-[20px] bottom-[20px]'} />
        </HolderComponent>
    );
}