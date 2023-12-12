import React, { useEffect } from "react";

function MakeAShoutOutForm(props) {
      useEffect(() => {
        document.title = "Shout Out";
      }, []);

  const {
    iframeSource = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1mbudXHnlsOPuj0JeH5wrDXuZcU5uCgvV0YcKmem1CsSs2w/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
  } = props;
  return (
    <div
      className="MakeAShoutOutForm"
      dangerouslySetInnerHTML={{ __html: iframeSource }}
    ></div>
  );
}

export default MakeAShoutOutForm;
