import style from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
      <div className={style.container}>
        <footer className={style.footer}>
          <ul className={style.coreCourses}>
            <h1 className={style.core}>Core Courses</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul className={style.advanceCourses}>
            <h1 className={style.advance}>Advance Courses</h1>
            <li>Next.Js</li>
            <li>Python</li>
            <li>Artificial Intelligence</li>
          </ul>
          <ul className={style.social}>
            <h1 className={style.links}>Social Links</h1>
            <Link href={"https://www.google.com"}>Google</Link>
            <Link href={"https://www.youtube.com"}>YouTube</Link>
            {/* <Link href={"https://www.facebook.com"}>FaceBook</Link> */}
            <Link href={"https://www.twitter.com"}>Twitter</Link>
          </ul>
        </footer>
      </div>
    );
}
