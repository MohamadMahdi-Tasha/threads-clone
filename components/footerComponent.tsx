// Exporting footer component as default
export default function FooterComponent():JSX.Element {
    // Returning JSX
    return (
        <footer>
            <div>
                <div>
                    <img src="https://picsum.photos/100/100" alt="threads"/>
                    <img src="https://picsum.photos/100/100" alt="sylie.jahed"/>
                </div>
                <span>Get the Threads app to see more from sylie.jahed.</span>
                <a href="#"><button>Get Threads</button></a>
            </div>
            <ul>
                <li>
                    &copy;
                    <span>{new Date().getFullYear()}</span>
                </li>
                <li><a href="#">Threads Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
        </footer>
    );
}
