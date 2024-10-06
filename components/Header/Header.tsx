import style from "./Header.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <ul className={style.header}>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/portfolio"}><li>Portfolio</li></Link>
                <Link href={"/about"}><li>About Us</li></Link>
                <Link href={"/contect"}><li>Contect Us</li></Link>
            </ul>
        </div>
    )
}