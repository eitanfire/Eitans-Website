import '../App.css';

export default function StudentDashboard(props) {
    const {
      iframeSource = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTgUvYmg_rKUU71PxfGdJiWA00h1CunDqBC6kh_I3f4EFJO-BVPz8njvTm2KOPTtRxHFJbYbbXcFfxr/pub?embedded=true"></iframe>'
    } = props;
    return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
  }

