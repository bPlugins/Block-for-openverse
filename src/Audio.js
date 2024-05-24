import React, { useState, useRef } from 'react';
import { dummyImage, pause, play } from './utils/icons'
import { licensesTypeFIter, shortenTitle } from './utils/functions';
import ImgEle from './Components/Elements/ImgEle';

const Audio = ({ clientId, item, index, audioRefs, togglePlay, currentlyPlaying, isPlaying, selectWidthItem, playerWidth, calculatedWaves, items }) => {
    const { thumbnail, id, title, creator, category, license, url } = item || {};

    return <div className='audio'>
        <div className="left">
            <ImgEle url={thumbnail} />
            <a href={`https://openverse.org/audio/${id}`}>
                {items?.isTitle && <div className="title">{shortenTitle(title, 10)}</div>}
                {items?.isCreator && <div className="creator"><span>by</span> {shortenTitle(creator, 20)}</div>}

                {items?.isLicenses && <div className="licenses">
                    <div className="category">{category}</div> {licensesTypeFIter(license, true)}
                    {license}
                </div>}
            </a>
        </div>
        <div className="right">
            <div className="playBtn">
                <audio ref={ref => audioRefs.current[item.id] = ref} controls>
                    <source src={url} type="audio/mpeg" />
                </audio>
                <div className="btn" onClick={() => togglePlay(item.id)}>
                    {currentlyPlaying === id ? (isPlaying ? pause : play) : play}
                </div>
                {/* <button >{isPlaying ? 'Pause' : 'Play'}</button> */}
            </div>
            <div className="wave" ref={selectWidthItem} style={{ overflow: 'hidden' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={playerWidth} height="64" viewBox={`0 0 ${playerWidth} 64`}>
                    {calculatedWaves?.find(wave => item.id === wave.id)?.points.map((item, i) => <rect key={i} x={i * 4} y={64 - (item * 64)} width="2" height={item * 64} />)}
                </svg>
            </div>
        </div>
    </div>
}
export default Audio;