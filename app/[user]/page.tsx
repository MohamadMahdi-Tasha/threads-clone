// Making nextJS to render this component in client side
'use client';

// Importing Part
import {usePathname} from "next/navigation";
import users from '@/app/api/user';
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import ThreadComponent from "@/components/threadComponent";
import FooterComponent from '@/components/footerComponent';
import UserInfoComponent from "@/components/userInfoComponent";
import ThreadsOrRepliesComponent from "@/components/threadsOrRepliesComponent";
import UserPageDownloadComponent from "@/components/userPageDownloadComponent";

// Exporting user page (functional component) as default
export default function UserPage():JSX.Element {
    // Using path name of url
    const pathNameHook:string = usePathname();
    const pathname:string = pathNameHook.slice(1, pathNameHook.length);
    const userInApi:any = users.find(item => item.id === pathname);
    const userThreads:any = userInApi.threads;

    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}>
                <header>
                    <UserInfoComponent id={pathname}/>
                    <ThreadsOrRepliesComponent activePart={'threads'} id={pathname} />
                </header>
                <main className={'[&>div:not(:last-of-type)]:border-b [&>div:not(:last-of-type)]:pb-[15px] dark:[&>div:not(:last-of-type)]:border-b-barcelonaMediaOutline [&>div:not(:last-of-type)]:border-b-black/20 flex flex-col gap-5'}>
                    {
                        userThreads.map(thread => <ThreadComponent
                            id={pathname}
                            threadId={thread.threadId}
                            img={thread.img.src}
                            content={thread.content}
                            date={thread.date}
                            likesCount={thread.likesCount}
                            commentsObject={thread.replies}
                        />)
                    }
                </main>
            </section>
            <FooterComponent img={userInApi.img.src} id={userInApi.id} />
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}