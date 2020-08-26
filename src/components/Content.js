import React, {useState, useEffect} from 'react'


import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, Button } from 'reactstrap';


const Content = (props) => {
    const [people, setPeople] = useState(
        [
            {
                id: 1,
                name: 'Ufuk',
                img: 'https://ca.slack-edge.com/T46AWSPQD-U46BJCHPC-c502aad6dcac-512',
            },
            {
                id: 2,
                name: 'Semih',
                img: 'https://ca.slack-edge.com/T46AWSPQD-U4669772P-de273f87dd2e-512',
            },
            {
                id: 3,
                name: 'Esat',
                img: 'https://ca.slack-edge.com/T46AWSPQD-U48AD5RUN-g8ce436d2faf-512',
            },
            {
                id: 4,
                name: 'Nesli',
                img: 'https://ca.slack-edge.com/T46AWSPQD-U010HRMUS2Y-22e139d11c08-512',
            },
            {
                id: 5,
                name: 'Görkem',
                img: 'https://ca.slack-edge.com/T46AWSPQD-UT4JD6XL5-gea3bd75d0e3-512',
            },
            {
                id: 6,
                name: 'Zeynel',
                img: 'https://ca.slack-edge.com/T46AWSPQD-UT44D9RTN-71cd3d89f671-512',
            },
        ]
    );
    const [heros, setHeros] = useState(
        [
            {
                id: 11,
                name: 'Captain ABD',
                img: 'https://img.etimg.com/thumb/msid-69139984,width-1200,height-900,imgsize-220108,overlay-etpanache/photo.jpg',
            },
            {
                id: 12,
                name: 'Thor',
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg',
            },
            {
                id: 13,
                name: 'Iron Man',
                img: 'https://media1.popsugar-assets.com/files/thumbor/XS4YnHClQ1RZMm7gMWAtPORSNA0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/1f2e59ed5ae773b06f2879.82877284_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg',
            },
            {
                id: 14,
                name: 'Batman',
                img: 'https://media.vanityfair.com/photos/5f36ca51ea4a2b0e8b864555/master/w_1600%2Cc_limit/batman-michael-keaton.jpg',
            },
            {
                id: 15,
                name: 'Black Widow',
                img: 'https://www.nme.com/wp-content/uploads/2018/02/Black-Widow-Avengers.jpg',
            },
            {
                id: 16,
                name: 'HULK',
                img: 'https://i.ytimg.com/vi/jolXso_OO-c/maxresdefault.jpg',
            },
            {
                id: 17,
                name: 'SpiderMan',
                img: 'https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
            },
        ]
    );
    const [weptileHero, setWeptileHero] = useState([]);

    const [firstPerson, setFirstPerson] = useState(0);
    const [secondPerson, setSecondPerson] = useState(0);
    const [pairs, setpairs] = useState('');
    useEffect(() => {
        let getting = localStorage.getItem('pairs');
        if (getting !== '' && getting !== null) {
            setpairs(getting);
            const splitted = getting.split('-');
            splitted.forEach(sp => {
                if (sp === null || sp === '') return;
                const innerSp = sp.split('.');
                weptileHero.push([people[people.findIndex(pe => pe.id === parseInt(innerSp[0]))], heros[heros.findIndex(pe => pe.id === parseInt(innerSp[1]))]])
            })
        }
    }, [])
    return (
        <Container>
            <div>
            <div>
                <Container>
                    Selected Hero Person Pairs
                </Container>
            </div>
            {
                weptileHero.length === 0 ? 'There is no any pair!' : weptileHero.map(wh => {
                    return <Row>
                        <div>
                            <Container>
                                {wh[0].name} --- {wh[1].name}
                            </Container>
                        </div>
                        <Col>
                            <Card>
                                <CardImg top style={{maxWidth: '100px'}} src={wh[0].img} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{wh[0].name}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top style={{maxWidth: '100px'}} src={wh[1].img} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{wh[1].name}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                })
            }
            </div>
            <div>
                <Container>
                    Weptile
                </Container>
            </div>
            <Row>
                {
                    people.map(person => {
                        return (
                            <Col>
                                <Card>
                                    <CardImg top style={{maxWidth: '100px'}} src={person.img} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>{person.name}</CardTitle>
                                    <Button onClick={() => setFirstPerson(person.id)}>Select</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            
            <div>
                <Container>
                    Heros
                </Container>
            </div>
            <Row>
            {
                    heros.map(hero => {
                        return (
                            <Col>
                                <Card>
                                    <CardImg top style={{maxWidth: '100px', height: '100px'}} src={hero.img} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle style={{fontSize: '15px'}}>{hero.name}</CardTitle>
                                    <Button onClick={() => {
                                        setSecondPerson(hero.id);
                                        let newpairs;
                                        if (pairs !== '')
                                            newpairs = pairs.concat(`${firstPerson}.${hero.id}-`)
                                        else
                                            newpairs = `${firstPerson}.${hero.id}-`;
                                        weptileHero.push([people[people.findIndex(p => p.id === firstPerson)], hero]);
                                        setpairs(newpairs);
                                        localStorage.removeItem('pairs');
                                        localStorage.setItem('pairs', newpairs);
                                        setFirstPerson(0);
                                        setSecondPerson(0);
                                    }}>Select</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Content;
