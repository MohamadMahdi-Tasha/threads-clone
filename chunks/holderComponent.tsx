// Defining type of props
interface propsTypes {
    children: any;
    small?: boolean;
}

// Exporting holder component as default
export default function HolderComponent({children, small}:propsTypes):JSX.Element {
    // Returning JSX
    return (
        <div className={`${(small) ? 'max-w-[600px]' : 'max-w-[1200px]'} mx-auto px-[10px] lg:py-0 py-[10px]`}>
            {children}
        </div>
    );
}