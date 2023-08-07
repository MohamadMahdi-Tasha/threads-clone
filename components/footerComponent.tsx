// Importing Part
import ThreadsImage from '@/public/img/img-logo.png';

// Defining type of props
interface propsType {
    img: any;
    id: string;
}

// Exporting footer component as default
export default function FooterComponent({img, id}:propsType):JSX.Element {
    // Returning JSX
    return (
        <footer className={'mb-10'}>
            <div className={'bg-black rounded-[20px] flex flex-col items-center justify-center p-[30px] mb-10'}>
                <div className={'relative mb-12'}>
                    <img src={ThreadsImage.src} alt="threads" className={'rounded-full w-[100px] h-[100px]'}/>
                    <img src={img} alt={id} className={'absolute rounded-full w-[100px] object-cover top-[40%] left-[40%] h-[100px] border-black border-4'}/>
                </div>
                <span className={'text-gray-500/50 text-md mb-8'}>Get the Threads app to see more from sylie.jahed.</span>
                <a href="#" className={'text-white px-[30px] py-[8px] btn-animation rounded-[10px] text-sm border border-barcelonaMediaOutline'}><button>Get Threads</button></a>
            </div>
            <ul className={'flex flex-wrap items-center justify-center gap-4'}>
                <li className={'text-barcelonaMediaOutline text-xs'}>
                    &copy;
                    <span>{new Date().getFullYear()}</span>
                </li>
                <li><a className={'text-barcelonaMediaOutline text-xs hover:underline'} href="#">Threads Terms</a></li>
                <li><a className={'text-barcelonaMediaOutline text-xs hover:underline'} href="#">Privacy Policy</a></li>
                <li><a className={'text-barcelonaMediaOutline text-xs hover:underline'} href="#">Cookies</a></li>
            </ul>
        </footer>
    );
}
