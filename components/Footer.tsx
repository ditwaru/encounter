import { FacebookIcon, InstagramIcon } from "./icons/Social"

export const Footer = () => {
    return (
    <footer className="flex flex-col gap-1 items-center justify-center bg-orange-100 h-20 py-3">
        <div className="flex gap-2">
            <a href='https://www.instagram.com/encounternationlive' target="_blank"><InstagramIcon /></a>
            <a href='https://www.facebook.com/encounternationlive' target="_blank"><FacebookIcon /></a>
        </div>
        <p>©2025 Encounter Church</p>
    </footer>
    )
}