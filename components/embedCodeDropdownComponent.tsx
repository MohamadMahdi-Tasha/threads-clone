// Making nextJS to render this component in client side
'use client';

// Importing Part
import DropdownButtonComponent from "@/chunks/dropdownButtonComponent";
import DropdownComponent from "@/chunks/dropdownComponent";

// Exporting embedd code dropdown component as default
export default function EmbedCodeDropdownComponent():JSX.Element {
    // Return JSX
    return (
        <DropdownComponent>
            <DropdownButtonComponent onClick={() => alert('asd')}>Copy link</DropdownButtonComponent>
            <DropdownButtonComponent onClick={() => alert('asd')}>Get embed code</DropdownButtonComponent>
            <DropdownButtonComponent textIsRed onClick={() => alert('asd')}>report</DropdownButtonComponent>
        </DropdownComponent>
    );
}