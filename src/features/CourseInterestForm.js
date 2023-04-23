function CourseInterestForm(props) {
  const {
    iframeSource = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOVlIaiTYDxpjdue7VtUMKjtLtxDF3Vvz46TZT_lVbuxsQoQ/viewform?embedded=true" width="1366" height="768" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
  } = props;
  return (
    <div
      className="CourseInterestForm"
      dangerouslySetInnerHTML={{ __html: iframeSource }}
    ></div>
  );
}

export default CourseInterestForm;

