function MakeAShoutOutForm(props) {
  const {
    iframeSource = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9FraSzXKZmIeUdwHzxXEzN3G7cjN-hnVqxg1RIOn7lFeYag/viewform?usp=sf_link width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
  } = props;
  return (
    <div
      className="MakeAShoutOutForm"
      dangerouslySetInnerHTML={{ __html: iframeSource }}
    ></div>
  );
}

export default MakeAShoutOutForm;
