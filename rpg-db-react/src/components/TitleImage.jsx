import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './generalStyle.css';

export default function TitleImage(props) {
    return (
        <div>
            <Container sx={{ width: '48%' }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '2.5rem',
                        color: '#F95F62',
                        fontWeight: '600',
                        margin: '120px 0 30px',
                        textAlign: 'center',
                    }}>
                    {props.title}
                </Typography>
                <div className='title-img-container'>
                    <img className='title-img' src={props.src} alt={props.alt}></img>
                </div>
            </Container>
            <div className='summary-text'>
                <p>
                    D&D’s 5th edition (5E), which was first previewed under the moniker of “D&D Next” as part of a public playtest with 175,000 registered players,
                    forges a new direction in order to differentiate itself from D&D 3/3.5 and 4th editions.
                    The new edition eschews the complexity of 3/3.5 in favor of streamlining rules, and it removes cumbersome modifiers that slowed the game to a crawl.
                    Where 4E created a highly balanced but homogenized and codified set of powers for each class,
                    5E returns to more differentiated classes with their own sense of purpose and feel.
                    <br /> <br />
                    In some ways, the new edition returns to the concept of the Dungeon Master (DM) as active storyteller.
                    Previous editions had moved D&D towards a tactical combat system that prized structure and complexity with "story" becoming the thing that simply
                    happened in the moments between multi hour combats.
                    <br /> <br />
                    Mechanically, the largest change here is the removal of the modifiers found in previous editions.
                    They are now few and far between, distilled down into "advantage" and "disadvantage."
                    Attacking from above with the cover of darkness but also from behind? Your character has advantage.
                    Trying to track a hooked horror without a light source and in the rain? Make a check with disadvantage.
                    The DM, without having to consult a chart, can easily define the circumstances of an attack, skill test, or ad hoc maneuver from the player.
                    Having advantage confers the ability to roll two d20s during your check and keeping the highest result; disadvantage requires keeping the lowest result.
                    It’s a simple enough change on the surface that makes all the difference in the world during play.
                </p>
            </div>
        </div>
    );
}