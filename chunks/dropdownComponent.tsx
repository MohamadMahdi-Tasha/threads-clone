// Making nextJS to render this component in client side
'use client';

// Importing Part
import {useState} from "react";

// Defining type of props
interface propsTypes {
    children: any;
}

// Exporting dropdown component as default
export default function DropdownComponent({children}:propsTypes):JSX.Element {
    // Implementing State
    const [isOpened, setOpened] = useState(false);

    // Return JSX
    return (
        <div className={'relative'}>
            <button className={'btn-animation'} onClick={() => setOpened((prevState) => !prevState)}>
                <svg aria-label="More" color="rgb(243, 245, 247)" fill="rgb(243, 245, 247)" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <circle cx="12" cy="12" fill="none" r="10" stroke="white" stroke-width="2"></circle>
                    <path clip-rule="evenodd" d="M7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5Z" fill-rule="evenodd"></path>
                    <path clip-rule="evenodd" d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z" fill-rule="evenodd"></path>
                    <path clip-rule="evenodd" d="M16.5 13.5C15.6716 13.5 15 12.8284 15 12C15 11.1716 15.6716 10.5 16.5 10.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5Z" fill-rule="evenodd"></path>
                </svg>
            </button>
            <div
                data-opened={isOpened}
                className={'absolute right-0 overflow-hidden top-full data-[opened="true"]:w-[200px] data-[opened="false"]:w-[50px] data-[opened="true"]:opacity-100 data-[opened="false"]:opacity-0 rounded-xl bg-themeColor/10 transition-all backdrop-blur flex flex-col border border-barcelonaMediaOutline/10 [&>button:not(:last-of-type)]:border-b-2 [&>button:not(:last-of-type)]:border-b-barcelonaMediaOutline data-[opened="false"]:invisible data-[opened="true"]:visible'}
            >
                {children}
            </div>
        </div>
    );
}