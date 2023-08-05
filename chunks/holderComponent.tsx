// Defining type of props
interface propsTypes {
    children: any;
}

// Exporting holder component as default
export default function HolderComponent({children}:propsTypes):JSX.Element {
    // Returning JSX
    return (
        <div className={'max-w-[1200px] mx-auto px-[10px] lg:py-0 py-[10px]'}>
            {children}
        </div>
    );
}