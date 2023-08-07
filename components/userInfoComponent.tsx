// Defining type of props
import NameAndProfileComponent from "@/components/nameAndProfileComponent";
import BioComponent from "@/components/bioComponent";
import {ThreadsAPI} from "threads-api";
import InfoBottomComponent from "@/components/infoBottomComponent";

interface typeOfProps {
    id: string;
}

// Exporting userInfo component as default
export default function UserInfoComponent({id}:typeOfProps):JSX.Element {
    // Using threads api
    const threadsAPI = new ThreadsAPI();
    const username = '_junhoyeo';
    const userID =  threadsAPI.getUserIDfromUsername(username);
    console.log(userID)

    // Return JSX
    return (
        <div className={'mb-5'}>
            <NameAndProfileComponent title={'title'} img={'img'} id={id}/>
            <BioComponent content={'content'}  />
            <InfoBottomComponent id={id} followersCount={2} link={'link'} />
        </div>
    );
}