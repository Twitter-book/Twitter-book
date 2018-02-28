import React from 'react';
import EightbyEight from '../../images/8x8book.svg'
import FourtbyTen from '../../images/14x11book.svg'

export default function Step3(props) {
    return (
        <div className="stepOneContainer">
            <h1>Book title, subtitle, and back subtitle</h1>
            <div className='stepThreeText'>
                <div className='bookOutside'>
                    {props.selectedSize === 'small' ? <div style={{ textAlign: 'center', position: 'relative' }}><h1>8x8</h1><img src={EightbyEight} alt="" style={{ backgroundColor: `${props.selectedColor}`, height: '150px' }} /></div> : null}
                    {props.selectedSize === 'medium' ? <div style={{ textAlign: 'center' }}><h1>10x10</h1><img src={EightbyEight} alt="" style={{ backgroundColor: `${props.selectedColor}`, height: '170px' }} /></div> : null}
                    {props.selectedSize === 'large' ? <div style={{ textAlign: 'center' }}><h1>14x11</h1><img src={FourtbyTen} alt="" style={{ backgroundColor: `${props.selectedColor}`, height: '200px' }} /></div> : null}
                    <div className='outsideBookContext'>
                        <div className='selectedBack'>{props.backText}</div>
                        <div className='frontContext'>
                            <div className='selectedTitle'>{props.title}</div>
                            <div className='selectedSubtitle'>{props.subtitle}</div>
                        </div>
                    </div>
                </div>
                <div className='inputStack'>
                    <input type="text" placeholder="Title" onChange={e => props.handleTitleInput(e.target.value)}></input>
                    <input type="text" placeholder="Subtitle" onChange={e => props.handleSubtitleInput(e.target.value)}></input>
                    <input type="text" placeholder="Back" onChange={e => props.handleBackInput(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

