// Making nextJS to render this component in client side
'use client';

// Importing Part
import DropdownButtonComponent from "@/chunks/dropdownButtonComponent";
import DropdownComponent from "@/chunks/dropdownComponent";

// Exporting copy link dropdown component as default
export default function CopyLinkDropdownComponent():JSX.Element {
    // Return JSX
    return (
        <DropdownComponent>
            <DropdownButtonComponent onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy link</DropdownButtonComponent>
            <DropdownButtonComponent onClick={() => alert('Report Button Clicked!!!')} textIsRed>Report</DropdownButtonComponent>
        </DropdownComponent>
    );
}