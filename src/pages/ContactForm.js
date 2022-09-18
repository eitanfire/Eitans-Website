function ContactForm(props) {
    const {
        iframeSource = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdEXj9fvaH2tjn1C4FqV-h25e1eKh8NmNR2oR1jjzeJLCK-aQ/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'
    } = props;
    return <div className="ContactForm" dangerouslySetInnerHTML={{ __html: iframeSource }}></div>;
}

export default ContactForm;