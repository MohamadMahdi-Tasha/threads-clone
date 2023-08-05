// Defining type of props
interface typeOfProps {
    content: string;
}

// Exporting bio component as default
export default function BioComponent({content}:typeOfProps):JSX.Element {
    // Returning JSX
    return (
        <p className={'text-white mb-5'}>{content}</p>
    );
}
