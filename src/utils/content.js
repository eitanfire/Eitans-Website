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
            href="https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NTAzNDQ1NTEwODQ2/details"
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
            href="https://docs.google.com/document/d/1Y24ztS0Nq0CdnGA0GsknjeM9htEkPRdQRSZBOUqGjCU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1Y3mZ5Dw_IFe98il3b0MksRGwGa1lOuypOtqtY0MB5h4/edit?usp=sharing"
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
        alt="World Wars banner"
      />
    ),
    content: (
      <>
        <div id="philosophyColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NTAzNDQ1NTEwODQ2/details"
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
            href="https://docs.google.com/document/d/1Y24ztS0Nq0CdnGA0GsknjeM9htEkPRdQRSZBOUqGjCU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1Y3mZ5Dw_IFe98il3b0MksRGwGa1lOuypOtqtY0MB5h4/edit?usp=sharing"
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
        alt="World Wars banner"
      />
    ),
    content: (
      <>
        <div id="policingColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NTAzNDQ1NTEwODQ2/details"
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
            href="https://docs.google.com/document/d/1Y3mZ5Dw_IFe98il3b0MksRGwGa1lOuypOtqtY0MB5h4/edit?usp=sharing"
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
        alt="World Wars banner"
      />
    ),
    content: (
      <>
        <div id="financeColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NTAzNDQ1NTEwODQ2/details"
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
            href="https://docs.google.com/document/d/1Y24ztS0Nq0CdnGA0GsknjeM9htEkPRdQRSZBOUqGjCU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1Y3mZ5Dw_IFe98il3b0MksRGwGa1lOuypOtqtY0MB5h4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Description
          </a>
        </div>
      </>
    ),
  },
];