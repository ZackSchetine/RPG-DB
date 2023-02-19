import * as React from 'react';
import Typography from '@mui/material/Typography';
import './generalStyle.css';

export default function MonsterDescription(props) {
    return (
        <div className='monster-container'>
            <Typography
                variant="h6"
                sx={{
                    fontSize: '2.5rem',
                    color: '#F95F62',
                    fontWeight: '600',
                    margin: '55px 0 40px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                }}>
                {props.monster.name}
            </Typography>
            <div className='monster-description'>
                <div className='monster-desc-cont1'>
                    <img className='monster-img' src={props.monster.image} alt={props.alt}></img>
                    <div className='monster-text'>
                        <text>
                            {props.monster.description}
                        </text>
                    </div>
                </div>

                <div className="monster-desc-cont2">
                    <div className='traits'>
                        <div className='properties'>
                            {props.monster.properties.map((properties) => (
                                <div className='attribute-container'>
                                    <div className='properties-name'>{properties.name}:</div>
                                    <div className='properties-value'>{properties.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className='attributes'>
                            {props.monster.attributes.map((attributes) => (
                                <div className='attribute-container'>
                                    <div className='attribute-name'>{attributes.name}:</div>
                                    <div className='attribute-value'>{attributes.value}</div>
                                    <div className='attribute-mod'>
                                        (<span className="attribute-mod-value">{attributes.mod}</span>)
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='monster-skills'>
                        {props.monster.skills.map((skills) => (
                            <span>
                                <h3 className='skill-title'>{skills.typeName}</h3>
                                {skills.skillList.map((skillList) => (
                                    <div className='monster-skills-cont'>
                                        <div className='skill-name'>{skillList.name}:</div>
                                        <div>{skillList.value}</div>
                                    </div>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}