// Importing Part
import type { Metadata } from 'next';
import './index.css';

// Exporting meta data of pages
export const metadata: Metadata = {
    title: 'Threads clone - Made by mahdi tasha',
    description: 'Threads clone (by meta) made by mohamad mahdi tasha with next.js and tailwind css',
    keywords: 'next-js next js javascript react resume-project resume github threads clone meta instagram',
    themeColor: '#242526',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: 'manifest.json'
}

// Exporting Root Layout as default which takes children as props
// and returns html template of pages
export default function RootLayout({children}:{children:React.ReactNode}) {
    return (
        <html lang="en">
            <body className={'bg-themeColor font-primary'}>
                {children}
            </body>
        </html>
    )
}