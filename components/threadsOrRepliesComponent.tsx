// Exporting threads or replies component as default
export default function ThreadsOrRepliesComponent():JSX.Element {
    // Returning JSX
    return (
        <div className={'flex mb-3'}>
            <a className={'w-[50%] border-b border-b-white text-white'} href="#"><button className={'py-[10px] w-full text-center text-white'}>Threads</button></a>
            <a className={'w-[50%] border-b border-b-barcelonaMediaOutline text-barcelonaMediaOutline'} href="#"><button className={'py-[10px] w-full text-center text-white'}>Replies</button></a>
        </div>
    );
}

