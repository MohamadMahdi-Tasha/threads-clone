// Defining type of props
interface propsTypes {
    children: string;
    textIsRed?: boolean;
    onClick: any;
}

// Exporting dropdown button component as default
export default function DropdownButtonComponent({children, textIsRed, onClick}:propsTypes):JSX.Element {
    // Returning JSX
    return (
        <button onClick={onClick} className={
            `text-start whitespace-nowrap bg-transparent hover:bg-black/20 transition-all p-[15px] text-sm 
            ${(textIsRed) ? 'text-red-600' : 'text-white'}`
        }>
            {children}
        </button>
    );
}
