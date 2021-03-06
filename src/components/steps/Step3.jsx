import React from 'react';
import { SwatchesPicker } from 'react-color';
import EightbyEight from '../../images/8x8book.svg'
import FourtbyTen from '../../images/14x11book.svg'

export default function Step3(props) {
    return (
        <div className="stepOneContainer">
            <div className='stepThreeText'>
                <div className='bookOutside'>
                    {props.selectedSize === 'small' ? <div style={{ textAlign: 'center', position: 'relative' }}><img src={EightbyEight} alt="" style={{ backgroundColor: `${props.selectedColor}`, height: '150px' }} /><h1 style={{ color: 'silver', marginTop: '30px' }}>8x8</h1></div> : null}
                    {props.selectedSize === 'medium' ? <div style={{ textAlign: 'center' }}><img src={EightbyEight} alt="" style={{ backgroundColor: `${props.selectedColor}`, height: '170px' }} /><h1 style={{ color: 'silver', marginTop: '30px' }}>10x10</h1></div> : null}
                    {props.selectedSize === 'large' ? <div style={{ textAlign: 'center' }}><img src={FourtbyTen} alt="" style={{ backgroundColor: `${props.selectedColor}`, height: '200px' }} /><h1 style={{ color: 'silver', marginTop: '30px' }}>14x11</h1></div> : null}
                    <div className='outsideBookContext'>
                        <div className='selectedBack' style={{ color: `${props.textColor}` }}>{props.backText}</div>
                        <div className='frontContext' style={{ color: `${props.textColor}` }}>
                            <div className='selectedTitle'>{props.title}</div>
                            <div className='selectedSubtitle'>{props.subtitle}</div>
                        </div>
                    </div>
                </div>
                <div className='inputStack'>
                    <input type="text" placeholder="Title" onChange={e => props.handleTitleInput(e.target.value)}></input>
                    <input type="text" placeholder="Subtitle" onChange={e => props.handleSubtitleInput(e.target.value)}></input>
                    <input type="text" placeholder="Back" onChange={e => props.handleBackInput(e.target.value)}></input>
                    <h1>Text Color</h1>
                    <SwatchesPicker onChange={(color, event) => props.handleTextChange(color, event)} />
                </div>
            </div>
        </div>
    )
}

