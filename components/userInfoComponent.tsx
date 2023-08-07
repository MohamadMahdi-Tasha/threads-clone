// Defining type of props
import NameAndProfileComponent from "@/components/nameAndProfileComponent";
import BioComponent from "@/components/bioComponent";
import InfoBottomComponent from "@/components/infoBottomComponent";

interface typeOfProps {
    id: string;
}

// Exporting userInfo component as default
export default function UserInfoComponent({id}:typeOfProps):JSX.Element {
    // Return JSX
    return (
        <div className={'mb-5'}>
            <NameAndProfileComponent title={'title'} img={'img'} id={id}/>
            <BioComponent content={'content'}  />
            <InfoBottomComponent id={id} followersCount={2} link={'link'} />
        </div>
    );
}