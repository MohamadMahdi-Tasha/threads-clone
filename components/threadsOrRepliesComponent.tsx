// Defining type of props
interface threadsOrRepliesComponentTypeOfProps {
    activePart: string;
}

interface buttonTypeOfProps {
    children: string;
    isActive: boolean;
}

// Exporting threads or replies component as default
export default function ThreadsOrRepliesComponent({activePart}:threadsOrRepliesComponentTypeOfProps):JSX.Element {
    // Small inner component
    function ButtonComponent({children, isActive}:buttonTypeOfProps) {
        // Returning JSX
        return (
            <a className={
                (isActive)
                    ? 'w-[50%] border-b border-b-white text-white'
                    : 'w-[50%] border-b border-b-barcelonaMediaOutline text-barcelonaMediaOutline'
            } href="#">
                <button className={'py-[10px] w-full text-center'}>{children}</button>
            </a>
        );
    }

    // Returning JSX
    return (
        <div className={'flex mb-3'}>
            <ButtonComponent isActive={(activePart === 'threads')}>Threads</ButtonComponent>
            <ButtonComponent isActive={(activePart === 'replies')}>Replies</ButtonComponent>
        </div>
    );
}

