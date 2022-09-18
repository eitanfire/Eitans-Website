import '../App.css';

export default function Calendar(props) {
  const {
    iframeSource = '<iframe src="https://calendar.google.com/calendar/embed?height=250&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=Y19jbGFzc3Jvb202YzY5MTlkZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20xNGI2MTk3NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21hYWMzY2YwYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb202NzM3YTc2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=c2VwdGVtYmVyc2Nob29sLm9yZ18ydjdqNDlhaDlkN2Y5M2FxbmdrYm4zazllMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=c2VwdGVtYmVyc2Nob29sLm9yZ19ubzgwYzhoMzNlczR0bDFmdm04bm0ybXZxb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230047a8&color=%23b80672&color=%230047a8&color=%23c26401&color=%230B8043&color=%233F51B5&color=%234285F4&showTitle=0" style="border:solid 1px #777" width="100%" height="250" frameborder="0" scrolling="no"></iframe>'
  } = props;
  return <div className="Calendar" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}