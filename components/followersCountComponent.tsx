// Making nextJS to render this component in client side
'use client';

// Importing part
import {useState} from "react";
import DownloadModalComponent from "@/components/downloadModalComponent";

// Defining type of props
interface propsTypes {
    followersCount: number;
}

// Exporting followers count component as default
export default function FollowersCountComponent({followersCount}:propsTypes):any {
    // Defining state of component
    const [isModalOpened, setModalOpened] = useState(false);

    // Conditional Rendering
    if (followersCount !== 0) {
        return (
            <>
                <DownloadModalComponent closeFunction={() => setModalOpened(false)} isOpened={isModalOpened} />
                <span className={'text-gray-500 text-sm truncate hover:underline cursor-pointer'} onClick={() => setModalOpened(true)}>
                    <span className={'mr-1'}>{followersCount.toLocaleString()}</span>
                    followers
                </span>
            </>
        )
    } else {
        return false;
    }
}