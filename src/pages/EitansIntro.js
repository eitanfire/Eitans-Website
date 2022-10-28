import { Card, CardBody } from 'reactstrap';
import { Col, Row, Container } from 'reactstrap';

const EitansIntro = () => {
    return (
        < Container id='infoCard'>
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            <h1 id='rainbowText'>Hi I'm Eitan</h1>
                        </Col>
                    </Row>
                    {<h3>Let me tell you a little bit about myself.</h3>}

                    {<p>I grew up in Boulder, Colorado. I attended Foothill Elementary, Centennial Middle School and graduated from Boulder High School. I attended St. John’s College for my undergraduate studies. I took a year off in between my sophomore and junior year of college and worked on a kibbutz in Israel. There I had the chance to stock shelves in a store, dig ditches, tend gardens, and I even took care of animals in a petting zoo!</p>}

                    {<p>At the end of college I met, Haley, the love of my life and the woman who would become my wife. She liked me at first but she did not fall madly in love with me until I won a
                        <span style={{ fontSize: 20 }}> 🥧 </span>eating contest. I continued to pursue my interest in becoming a teacher by working at the Santa Fe Children’s Museum and at the Boys & Girls Club. Haley and I moved to Oregon together and lived there for several years while she finished college. I went to graduate school to learn how to become a better teacher at Lewis & Clark College.</p>}

                    {<p>Haley and I moved back to my hometown of Boulder, Colorado in 2010. During the week you will find me teaching social studies at September High School. Thank you for welcoming me. I look forward to learning more about you.</p>}
                </CardBody>
            </Card>
        </Container>

    );
};
export default EitansIntro;