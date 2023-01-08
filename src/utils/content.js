import Film from '../app/img/film-banner.png';
import Epics from '../app/img/epics-banner.png';
import Programming from '../app/img/programming-banner.png';
import Survival from '../app/img/survive-the-world-banner.png';
import WorldWars from '../app/img/world-wars-banner.png';
import Philosophy from '../app/img/flammarion-engraving.jpg';
import Policing from '../app/img/Policing-in-America.png';
import Finance from '../app/img/personal-finance.png';
import '../App.css';

export const accordionData = [
  {
    id: 0,
    current: true,
    icon: <span className="icons">📽</span>,
    title: (
      <span>
        <span id="icon">📽</span> Film
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Film}
        alt="Film banner"
      />
    ),
    content: (
      <>
        <div className="col-12" id="filmColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NDk3NTAxMzY5NjMw/a/NTAyODU3ODI3MzE3/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Film
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/u/1/c/NDk3NTAxMzY5NjMw"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NDk3NTAxMzY5NjMw/a/NDk3NTc1OTA5MDQx/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/1/d/1yR1lESYS7ZWYixmg3kjDqU4PGZwXBjFEgef_vt8vqZk/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Description
          </a>
        </div>
      </>
    ),
  },
  {
    id: 1,
    current: true,
    icon: <span className="icons">👩🏿‍💻</span>,
    title: (
      <span>
        <span id="icon">👩🏿‍💻</span> Programming
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Programming}
        alt="Programming banner"
      />
    ),
    content: (
      <>
        <div id="programmingColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTM4NTIyMjY5MzUz/a/NDk4NDgxNTIyOTI0/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Programming
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/u/1/c/NTM4NTIyMjY5MzUz"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTM4NTIyMjY5MzUz/a/NDk4MDM2MTM2NDg5/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/1/d/1zsWaLaGfaWAjilx5ikrSGXRmq20ydaqAyRf_RKMhbUY/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Description
          </a>
        </div>
      </>
    ),
  },
  {
    id: 2,
    current: true,
    icon: "⚔",
    title: (
      <span>
        <span id="icon">⚔</span> Epics
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Epics}
        alt="Epics banner"
      />
    ),
    content: (
      <>
        <div id="epicsColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NDk3NTAxNDI0OTQz/a/NTU4ODY2MjUxNDU3/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Epics
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/u/1/c/NDk3NTAxNDI0OTQz"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NDk3NTAxNDI0OTQz/a/NTQ0NDk3OTU4NDY4/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1V_O_Gi1ILTeoalAuvUfy9bhWXfGj85VPNt3p3Ei2bQc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Description
          </a>
        </div>
      </>
    ),
  },
  {
    id: 3,
    current: true,
    title: (
      <span>
        <span id="icon">🧭</span> Survive the World!
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Survival}
        alt="Survive the World banner"
      />
    ),
    content: (
      <>
        <div id="stwColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NTAzNDQ1NTEwODQ2/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Survive the World!
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/u/1/c/NTI2MzY3MTY1NDY0"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NDk4MDA2NTE2NDI2/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1TdTq_k_Nu9NzwealS8cJjohWcGZoSXSDdl4LHLXUm5Y/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Description
          </a>
        </div>
      </>
    ),
  },
  {
    id: 4,
    current: false,
    title: (
      <span>
        <span id="icon">🪖</span> World Wars
      </span>
    ),
    image: (
      <img
        className="wwClassImage mx-auto d-none d-xxl-block"
        src={WorldWars}
        alt="World Wars banner"
      />
    ),
    content: (
      <>
        <div id="wwColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1aduRAWAIs3UNez2uYMAIZokIgf-Db-sHLtPIYHZWcLo/edit?usp=sharing"
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
            Honors & Extra Credit
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
        className="philosophyClassImage mx-auto d-none d-xxl-block"
        src={Philosophy}
        alt="Philosophy banner"
      />
    ),
    content: (
      <>
        <div id="philosophyColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/10I7LpBpv2NQFEmr84Kd5S4vOdel0hha6eEgMy69fSoM/edit?usp=sharing"
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
            Honors & Extra Credit
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
        className="philosophyClassImage mx-auto d-none d-xxl-block"
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
            href="https://docs.google.com/document/d/192s8n1GHmTQB9OSLKdc4hO_JsdvdsgxZFT41WgdtB2I/edit?usp=sharing"
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
            Honors & Extra Credit
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
        className="philosophyClassImage mx-auto d-none d-xxl-block"
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
            href="https://docs.google.com/document/d/1OFQJpZ7O67ml0oybKAh2GPXM3AF-bh8rOFWtNdamB18/edit?usp=sharing"
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
            Honors & Extra Credit
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