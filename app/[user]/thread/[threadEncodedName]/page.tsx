// Making nextJS to render this component in client side
'use client';

// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import GetAppThreadComponent from '@/components/getAppThreadComponent';
import UserPageDownloadComponent from "@/components/userPageDownloadComponent";
import {usePathname} from "next/navigation";
import user from "@/app/api/user";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

// Exporting user page (functional component) as default
export default function ThreadPage():JSX.Element {
    // Using path name of url
    const pathNameHook:string = usePathname();
    const idOfThread:string = pathNameHook.split('/')[3];
    const idOfUser:string = pathNameHook.split('/')[1];
    const userInApi:any = user.find(item => item.id === idOfUser);
    const threads:any = userInApi.threads;
    const thread = threads.find(thread => thread.threadId === idOfThread)

    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}>
                <header className={'mb-10'}>
                    <ThreadComponent
                        id={thread.id}
                        img={thread.img.src}
                        content={thread.content}
                        likesCount={thread.likesCount}
                        date={thread.date}
                        threadId={idOfThread}
                        commentsObject={thread.replies}
                    />
                </header>
                <GetAppThreadComponent />
                {
                    (thread.replies[0] !== undefined)
                        ? (
                            <main className={'[&>div:not(:last-of-type)]:border-b [&>div:not(:last-of-type)]:pb-[15px] [&>div:not(:last-of-type)]:border-b-barcelonaMediaOutline flex flex-col gap-5'}>
                                {
                                    thread.replies.map(item => (
                                        <ThreadComponent
                                            replie
                                            id={item.id}
                                            img={item.img.src}
                                            content={item.content}
                                            likesCount={item.likesCount}
                                        />
                                    ))
                                }
                            </main>
                        ) : false
                }
            </section>
            <FooterComponent img={userInApi.img.src} id={userInApi.id} />
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}