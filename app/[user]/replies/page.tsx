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

// Exporting user replies page (functional component) as default
export default function UserRepliesPage():JSX.Element {
    // Using path name of url
    const pathNameHook:string = usePathname();
    const pathname:string = pathNameHook.split('/')[1];
    const userInApi:any = users.find(item => item.id === pathname);

    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}>
                <header>
                    <UserInfoComponent id={pathname}/>
                    <ThreadsOrRepliesComponent activePart={'replies'} id={pathname} />
                </header>
                {
                    (userInApi.replies[0] !== undefined)
                        ? (
                            <main className={'[&>div:not(:last-of-type)]:border-b [&>div:not(:last-of-type)]:pb-[15px] [&>div:not(:last-of-type)]:border-b-barcelonaMediaOutline flex flex-col gap-5'}>
                                {
                                    userInApi.replies.map(item => (
                                        <ThreadComponent
                                            img={item.img.src}
                                            content={item.content}
                                            likesCount={item.likesCount}
                                            id={item.id}
                                            commentsObject={[]}
                                        />
                                    ))
                                }
                            </main>
                        ) : false
                }
            </section>
            <FooterComponent id={pathname} img={userInApi.img.src} />
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}