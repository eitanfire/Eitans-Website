import { Card, CardBody } from 'reactstrap';
import { Col, Row, Container } from 'reactstrap';
import year from "../utils/currentYear.js";
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';

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
                    <Row>
                    {/* <Col className='col-10'> */}
                    {<h3>Let me tell you a little bit about myself.</h3>}

                    {<p>I grew up in Boulder, Colorado. I attended Foothill Elementary, Centennial Middle School and graduated from Boulder High School. I attended St. John’s College for my undergraduate studies. I took a year off in between my sophomore and junior year of college and worked on a kibbutz in Israel. There I had the chance to stock shelves in a store, dig ditches, tend gardens, and I even took care of animals in a petting zoo!</p>}

                    {<p>At the end of college I met, Haley, the love of my life and the woman who would become my wife. She liked me at first but she did not fall madly in love with me until I won a
                        <span className='growing' id='pie'> 🥧 </span>eating contest. I continued to pursue my interest in becoming a teacher by working at the Santa Fe Children’s Museum and at the Boys & Girls Club. Haley and I moved to Oregon together and lived there for several years while she finished college. I went to graduate school to learn how to become a better teacher at Lewis & Clark College.</p>}

                    {<p>Haley and I moved back to my hometown of Boulder, Colorado in 2010. I have been a classroom teacher for the last {year-2010} years. During the week you will find me teaching social studies at September High School. Thank you for welcoming me. I look forward to learning more about you.</p>}
                    {/* <img id='eitansProfilePic'
                                 src={Eitan} alt='Eitans profile' 
                                 /> */}
                    {/* </Col> */}
                    {/* <Col className='col-1'
                            >
                                <img id='eitansProfilePic'
                                 src={Eitan} alt='Eitans profile' 
                                 />
                            </Col> */}
                            </Row>
                </CardBody>
            </Card>
        </Container>

    );
};
export default EitansIntro;