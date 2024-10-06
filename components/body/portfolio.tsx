import Link from "next/link";
import style from "./portfolio.module.css";

export default function Information() {
  return (
    <div className={style.container}>
      <h2 className={style.h1Headings} id="intro">
        Introduction
        <span className={style.tooltip}>
          <ul>
            <li>Name : Nisar Ahmed</li>
            <li>Age : 26</li>
          </ul>
        </span>
      </h2>

      <h2 className={style.h1Headings}>
        Skills
        <span className={style.tooltip}>
          <ul>
            <li>Frontend </li>
            <li>Backend </li>
          </ul>
        </span>
      </h2>

      <h2 className={style.h1Headings}>
        Education
        <span className={style.tooltip}>My Educational : Matric</span>
      </h2>

      <h2 className={style.h1Headings}>
        Projects
        <span className={style.tooltip}>
          <ul>
            <li>Header Navigation</li>
            <li>Portfolio Project</li>
          </ul>
        </span>
      </h2>

      <h2 className={style.h1Headings}>
        Contacts
        <span className={style.tooltip}>
          <ul>
            <li>Email : "bhuttonisar60@gmail.com"</li>
            <li>Phone : 923492029262</li>
            <li>Address : Karachi Landhi Malir</li>
          </ul>
        </span>
      </h2>
    </div>
  );
}
