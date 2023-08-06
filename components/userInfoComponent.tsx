// Defining type of props
import NameAndProfileComponent from "@/components/nameAndProfileComponent";
import BioComponent from "@/components/bioComponent";
import InfoBottomComponent from "@/components/infoBottomComponent";

interface typeOfProps {
    title: string;
    id: string;
    img: string;
    content: string;
    followersCount: number;
    link?: string;
}

// Exporting userInfo component as default
export default function UserInfoComponent({
    title,
    id,
    img,
    content,
    followersCount,
    link
}:typeOfProps):JSX.Element {
    // Return JSX
    return (
        <div className={'mb-5'}>
            <NameAndProfileComponent title={title} img={img} id={id}/>
            <BioComponent content={content}  />
            <InfoBottomComponent id={id} followersCount={followersCount} link={link} />
        </div>
    );
}