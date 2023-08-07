// Defining type of props
import users from '@/app/api/user';
import NameAndProfileComponent from "@/components/nameAndProfileComponent";
import BioComponent from "@/components/bioComponent";
import InfoBottomComponent from "@/components/infoBottomComponent";

// Defining type of props
interface typeOfProps {
    id: string;
}

// Exporting userInfo component as default
export default function UserInfoComponent({id}:typeOfProps):JSX.Element {
    // Finding user in api
    const userInApi:any = users.find(item => item.id === id)

    // Return JSX
    return (
        <div className={'mb-5'}>
            <NameAndProfileComponent title={userInApi.title} img={userInApi.img.src} id={id}/>
            <BioComponent content={userInApi.content}  />
            <InfoBottomComponent id={id} followersCount={userInApi.followersCount} link={userInApi.link} />
        </div>
    );
}