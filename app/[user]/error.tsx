// Making nextJS to render this component in client side
'use client';

// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import ThemeTogglerComponent from "@/components/themeTogglerComponent";
import UserPageDownloadComponent from "@/components/userPageDownloadComponent";

// Exporting error page (functional component) as default
export default function Error():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent small>
            <header className={'py-[20px] flex items-center justify-center'}><ThemeTogglerComponent /></header>
            <section className={'mb-10'}><h3 className={'text-white text-center'}>The Person You Look For Is Not Found!</h3></section>
            <UserPageDownloadComponent />
        </HolderComponent>
    );
}