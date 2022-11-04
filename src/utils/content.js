import Film from '../app/img/film-banner.png';
import Epics from '../app/img/epics-banner.png';
import Programming from '../app/img/programming-banner.png';
import Survival from '../app/img/survive-the-world-banner.png';
import '../App.css';

export const accordionData = [
  {
    id: "Film",
    icon: <span className='icons'>📽</span>,
    title: <span ><span id='icon'>📽</span>  Film</span>,
    image: <img className="classImage mx-auto d-none d-xxl-block" src={Film} alt='Film banner' />,
    content:
      < >
        <div className='col-12' id='filmColor'>
          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NDk3NTAxMzY5NjMw/a/NTAyODU3ODI3MzE3/details' target="_blank" rel="noopener noreferrer">
            ✏️ Warm-Up Questions for Film
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/u/1/c/NDk3NTAxMzY5NjMw' target="_blank" rel="noopener noreferrer">
            📚 Classroom Page
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NDk3NTAxMzY5NjMw/a/NDk3NTc1OTA5MDQx/details' target="_blank" rel="noopener noreferrer">
            Honors & Extra Credit
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://docs.google.com/document/u/1/d/1yR1lESYS7ZWYixmg3kjDqU4PGZwXBjFEgef_vt8vqZk/edit' target="_blank" rel="noopener noreferrer">
            Course Description
          </a>

        </div>
      </>
  },
  {
    id: "Programming",
    icon: <span className='icons'>👩🏿‍💻</span>,
    title: <span ><span id='icon'>👩🏿‍💻</span>  Programming</span>,
    image: <img className="classImage mx-auto d-none d-xxl-block" src={Programming} alt='Programming banner' />,
    content:
      < >
        <div id='programmingColor' >
          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NTM4NTIyMjY5MzUz/a/NDk4NDgxNTIyOTI0/details' target="_blank" rel="noopener noreferrer">
            ✏️ Warm-Up Questions for Programming
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/u/1/c/NTM4NTIyMjY5MzUz' target="_blank" rel="noopener noreferrer">
            📚 Classroom Page
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NTM4NTIyMjY5MzUz/a/NDk4MDM2MTM2NDg5/details' target="_blank" rel="noopener noreferrer">
            Honors & Extra Credit
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://docs.google.com/document/u/1/d/1zsWaLaGfaWAjilx5ikrSGXRmq20ydaqAyRf_RKMhbUY/edit' target="_blank" rel="noopener noreferrer">
            Course Description
          </a>

        </div>
      </>
  },
  {
    id: "Epics",
    icon: '⚔',
    title: <span ><span id='icon'>⚔</span>  Epics</span>,
    image: <img className="classImage mx-auto d-none d-xxl-block" src={Epics} alt='Epics banner' />,
    content:
      < >
        <div id='epicsColor'>
          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NDk3NTAxNDI0OTQz/a/NTU4ODY2MjUxNDU3/details' target="_blank" rel="noopener noreferrer">
            ✏️ Warm-Up Questions for Epics
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/u/1/c/NDk3NTAxNDI0OTQz' target="_blank" rel="noopener noreferrer">
            📚 Classroom Page
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NDk3NTAxNDI0OTQz/a/NTQ0NDk3OTU4NDY4/details' target="_blank" rel="noopener noreferrer">
            Honors & Extra Credit
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://docs.google.com/document/d/1V_O_Gi1ILTeoalAuvUfy9bhWXfGj85VPNt3p3Ei2bQc/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
            Course Description
          </a>
        </div>
      </>
  },
  {
    id: "STW",
    title: <span ><span id='icon'>🧭</span>  Survive the World!</span>,
    image: <img className="classImage mx-auto d-none d-xxl-block" src={Survival} alt='Survive the World banner' />,
    content:
      < >
        <div id='stwColor'>
          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NTAzNDQ1NTEwODQ2/details' target="_blank" rel="noopener noreferrer">
            ✏️ Warm-Up Questions for Survive the World!
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/u/1/c/NTI2MzY3MTY1NDY0' target="_blank" rel="noopener noreferrer">
            📚 Classroom Page
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://classroom.google.com/c/NTI2MzY3MTY1NDY0/a/NDk4MDA2NTE2NDI2/details' target="_blank" rel="noopener noreferrer">
            Honors & Extra Credit
          </a>

          <a
            role='button'
            className='btn btn-light btn-link'
            href='https://docs.google.com/document/d/1TdTq_k_Nu9NzwealS8cJjohWcGZoSXSDdl4LHLXUm5Y/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
            Course Description
          </a>
        </div>
      </>

  }
];