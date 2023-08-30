import Government from "../app/img/Government.jpeg";
import Fugitives from "../app/img/Come_and_Join_Us_Brothers.jpg";
import Programming from "../app/img/programming-banner.png";
import Survival from "../app/img/survive-the-world-banner.png";
import ColdWar from "../app/img/ColdWar.jpg";
import "../App.css";
// import "../courseTheme.css";

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
            href="https://classroom.google.com/c/NTIzNTQ0MzM4NTI4/a/NTIzNzY0ODIxNDM2/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Cold War
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/w/NTIzNTQ0MzM4NTI4/t/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1iXyCNXjkfTFJy5DpO2tUF3MuDKHf9dFkl9pTCKcmpJQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1o7sDNjC6nyFCqWwQ-P4NhdoaasZe9GojpOpb-nxuPX0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cold War 🪖 Syllabus
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
        <span id="icon">🇺🇸</span> US History of the 1800s
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Fugitives}
        alt="US History of the 1800s banner"
      />
    ),
    content: (
      <>
        <div className="col-12" id="uSHistColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTIzNTQyMzk3Mjg2/a/NjE5OTAxNDA2MzU2/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for US History of the 1800s
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/w/NTIzNTQyMzk3Mjg2/t/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1Z39uXtE1NEC3MVlQwPt-WjK1fJDBj0YzF0aQjssoYOA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1qWOf9x49jP8lp0h4ov1ShzeTX5FrUtgCkW0sXjOEGek/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            US History of the 1800s 🇺🇸 Syllabus
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
        <span id="icon"> 👩🏿‍💻 </span> Programming
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Programming}
        alt="Programming and Web Development  banner"
      />
    ),
    content: (
      <>
        <div id="programmingColor">
          {/* <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTA5MjE0NTAzMzkw/a/NTE2MDYyNDg3MzIy/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Programming and Web Development 
          </a> */}

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/w/NTIzNTQ0NDk5OTU4/t/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1WjDPLyE6bn7bbq1AWPDyLj3vLUvgBibL_16e2_TViUM/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1KWyrsDH9Jsuqh8LoqS6EzOx1yjPSyyK_Ut7PGm2PdFI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programming and Web Development 👩🏿‍💻 Syllabus
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
        <span id="icon">🗽</span> Government
      </span>
    ),
    image: (
      <img
        className="classImage mx-auto d-none d-xxl-block"
        src={Government}
        alt="World Wars banner"
      />
    ),
    content: (
      <>
        <div id="governmentColor">
          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTIzNTQ0NjMwNTQ0/a/NTIzNzkxMTQ1NzU3/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Government
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/c/NTIzNTQ0NjMwNTQ0"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1JYHPc44KjabOynCVk2p1XROe4OZuLllRo_kKBwWG-w4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/u/0/d/1UQVEhTZW8fx2mRYXL3iSMJlie4VKqxsUebjh69cDVPc/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Government 🗽 Syllabus
          </a>
        </div>
      </>
    ),
  },
  {
    id: 8,
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
            href="https://classroom.google.com/c/NTIzNTQ0MzY4OTAz/a/NjE5OTAyMzg0NzU4/details"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✏️ Warm-Up Questions for Survive the World!
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://classroom.google.com/w/NTIzNTQ0MzY4OTAz/t/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Classroom Page
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/11zngy-feCi3cO8GU7kg_uhJJ-vh4J7AI8ITwTRaoANY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌈 Honors & Extra Credit
          </a>

          <a
            role="button"
            className="btn btn-light btn-link"
            href="https://docs.google.com/document/d/1DFMKTT-n9TBZgan_KpDOfjtFcIELoUDQXerk0ZZMqmk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Survive the World! 🧭 Syllabus
          </a>
        </div>
      </>
    ),
  },
];
