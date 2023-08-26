import WorldWars from "../app/img/world-wars-banner.png";
import Philosophy from "../app/img/flammarion-engraving.jpg";
import Policing from "../app/img/Policing-in-America.png";
import Finance from "../app/img/personal-finance.png";
import ColdWar from "../app/img/ColdWar.jpg"; 
import "../App.css";

export const fall2023Classes = [
  {
    id: 4,
    current: false,
    title: (
      <span>
        <span id="icon">☭</span> The Cold War
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={ColdWar}
        alt="World Wars banner"
      />
    ),
    content: (
      <>
        <div id="coldWarColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA3NjcyOTIwMzQx/a/NTEzNzE2OTAxMzEy/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for World Wars
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA3NjcyOTIwMzQx"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1qyaBJao8d0oCy4QQy3gE0ZU5gMrj8NFthYPGozGDLXo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1pFXZZSM4JTPlYSubkZdx7pmhi6WH4iJn-4wv4QxK3ns/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            World Wars 🪖 Syllabus
          </a>
        </div>
      </>
    ),
  },
  {
    id: 5,
    current: false,
    title: (
      <span>
        <span id="icon">📜</span> Philosophy
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Philosophy}
        alt="Philosophy banner"
      />
    ),
    content: (
      <>
        <div className="col-12" id="philosophyColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA5MjE0NDMwMTA0/a/NTA5MjE0NDMwMTYy/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Philosophy
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/w/NTA5MjE0NDMwMTA0/t/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/11uwCD9deuqqwRTq3koyCVn617a4iuIdZZGun7IAfypk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1f50lrY9zCxiUIGwmdcVfJ5Gcf4JhdBwsTTJIbHI5yN8/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Philosophy 📜 Syllabus
          </a>
        </div>
      </>
    ),
  },
  {
    id: 6,
    current: false,
    title: (
      <span>
        <span id="icon">🚔</span> Policing in America
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Policing}
        alt="Policing in America banner"
      />
    ),
    content: (
      <>
        <div id="policingColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA5MjE0NTAzMzkw/a/NTE2MDYyNDg3MzIy/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Policing in America
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA5MjE0NTAzMzkw"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1mhwSCIjBwzfaKKMl-H7ecx9wZOsvXxOQ_Mj6GOlOOfM/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1LrmPa4sHF-5WnsfPI0ifDxzIn53MGaSzu9SfwYhDvnw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policing in America 🚔 Syllabus
          </a>
        </div>
      </>
    ),
  },
  {
    id: 7,
    current: false,
    title: (
      <span>
        <span id="icon">💰</span> Personal Finance
      </span>
    ),
    image: (
      <img
        className="mx-auto d-none d-xxl-block"
        src={Finance}
        alt="Personal Finance banner"
      />
    ),
    content: (
      <>
        <div id="financeColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA5MjE0NDg2OTYw/a/NTEzNzE3MjM2NjQ4/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Personal Finance
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/w/NTA5MjE0NDg2OTYw/t/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1bkEJ6qf1NTSnN5maJxNwx_I8-fZLWNJ6ahemsFS5oWY/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1V1xNswBmC4NU-OxA8Xii4aCyvo5vFkVeglKfBPCLzv8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Finance 💰 Syllabus
          </a>
        </div>
      </>
    ),
  },
];
