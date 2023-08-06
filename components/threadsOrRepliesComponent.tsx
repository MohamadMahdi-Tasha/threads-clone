// Importing Part
import Link from 'next/link';

// Defining type of props
interface threadsOrRepliesComponentTypeOfProps {
    activePart: string;
    id: string;
}

interface buttonTypeOfProps {
    children: string;
    isActive: boolean;
    href: string;
}

// Exporting threads or replies component as default
export default function ThreadsOrRepliesComponent({activePart, id}:threadsOrRepliesComponentTypeOfProps):JSX.Element {
    // Small inner component
    function ButtonComponent({children, isActive, href}:buttonTypeOfProps) {
        // Returning JSX
        return (
            <Link className={
                (isActive)
                    ? 'w-[50%] border-b border-b-white text-white'
                    : 'w-[50%] border-b border-b-barcelonaMediaOutline text-barcelonaMediaOutline'
            } href={href}>
                <button className={'py-[10px] w-full text-center'}>{children}</button>
            </Link>
        );
    }

    // Returning JSX
    return (
        <div className={'flex mb-3'}>
            <ButtonComponent href={`/${id}`} isActive={(activePart === 'threads')}>Threads</ButtonComponent>
            <ButtonComponent href={`/${id}/replies`} isActive={(activePart === 'replies')}>Replies</ButtonComponent>
        </div>
    );
}

