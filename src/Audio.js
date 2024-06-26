import React, { useState, useRef, useEffect } from 'react';
import { dummyImage, pause, play } from './utils/icons';
import { licensesTypeFIter, secondsToMmSs, shortenTitle } from './utils/functions';
import ImgEle from './Components/Elements/ImgEle';

const Audio = ({ clientId, item, index, audioRefs, togglePlay, currentlyPlaying, isPlaying, selectWidthItem, playerWidth, calculatedWaves, items }) => {
    const { thumbnail, id, title, creator, category, license, url, titleHyperLink, imageHyperLink } = item || {};
    const rightRef = useRef();

    console.log(titleHyperLink);

    useEffect(() => {
        if (playerWidth) {
            let shouldUpdate = true;
            const audio = audioRefs.current[item.id];
            const durationTimestamp = rightRef.current?.querySelector('.duration.timestamp');
            const progressTimestamp = rightRef.current?.querySelector('.progress.timestamp');

            // set duration to the timestamp dom
            audio.addEventListener('loadedmetadata', function () {
                durationTimestamp.innerText = secondsToMmSs(audio.duration);
            })

            const svgWave = rightRef.current?.querySelector('.svg-wave')
            const svgElement = rightRef.current?.querySelector('.fill-yellow')


            audio.addEventListener('timeupdate', function () {
                const currentWidth = (playerWidth / this.duration) * this.currentTime
                const rects = svgWave.querySelectorAll('rect');
                const maxRectsToBeCollored = rects.length / playerWidth * currentWidth;

                // set black color to the wave which is already played 
                if (shouldUpdate) {
                    rects.forEach((rect, index) => {
                        if (index <= maxRectsToBeCollored) {
                            rect.classList.add('fill-black')
                        }
                    })
                }
                svgElement.setAttribute('width', currentWidth);

                // set Current time / progress 
                progressTimestamp.innerText = secondsToMmSs(audio.currentTime);
                if (currentWidth < 35) {
                    progressTimestamp.style.left = (currentWidth) + 'px'
                } else {
                    progressTimestamp.style.left = (currentWidth - 35) + 'px'
                }
            })


            // set player current time when click on the wave
            svgWave.addEventListener('click', (e) => {
                window.e = e;
                audio.currentTime = parseInt(audio.duration / playerWidth * e.offsetX);
            });


            // set wave color to black when mouse hover on the wave
            rightRef.current?.querySelector('.wave')?.addEventListener('mouseover', function (e) {
                const rects = svgWave.querySelectorAll('rect');
                const maxRectsToBeCollored = Math.floor(rects.length / playerWidth * e.offsetX);
                rects.forEach((rect, index) => {
                    if (index < maxRectsToBeCollored) {
                        rect.classList.add('fill-black')
                    } else {
                        rect.classList.remove('fill-black');
                    }
                })
                // console.log(rects.length / playerWidth * e.offsetX)
                shouldUpdate = false;
            })

            // set wave color to dark when mouse out from the wave
            rightRef.current?.querySelector('.wave')?.addEventListener('mouseout', function (e) {
                const rects = svgWave.querySelectorAll('rect');
                rects.forEach((rect, index) => {
                    rect.classList.remove('fill-black');
                })

                const currentWidth = (playerWidth / audio.duration) * audio.currentTime
                const maxRectsToBeCollored = Math.floor(rects.length / playerWidth * currentWidth);
                // console.log({ maxRectsToBeCollored })
                rects.forEach((rect, index) => {
                    if (index < maxRectsToBeCollored) {
                        rect.classList.add('fill-black')
                    } else {
                        rect.classList.remove('fill-black');
                    }
                })
                shouldUpdate = true;
            })
        }
    }, [playerWidth])

    return <div className='audio'>
        <div className="left">
            <ImgEle url={thumbnail} imageHyperLink={imageHyperLink} />
            <a href={titleHyperLink ? titleHyperLink : `https://openverse.org/audio/${id}`}>
                {items?.isTitle && <div className="title">{shortenTitle(title, 10)}</div>}
                {items?.isCreator && <div className="creator"><span>by</span> {shortenTitle(creator, 20)}</div>}

                {items?.isLicenses && <div className="licenses">
                    <div className="category">{category}</div> {licensesTypeFIter(license, true)}
                    {license}
                </div>}
            </a>
        </div>
        <div className="right" ref={rightRef}>
            <div className="playBtn">
                <audio ref={ref => audioRefs.current[item.id] = ref} controls>
                    <source src={url} type="audio/mpeg" />
                </audio>
                <div className="btn" onClick={() => togglePlay(item.id)}>
                    {currentlyPlaying === id ? (isPlaying ? pause : play) : play}
                </div>
                {/* <button >{isPlaying ? 'Pause' : 'Play'}</button> */}
            </div>
            <div className="wave relative" ref={selectWidthItem} style={{ overflow: 'hidden' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${playerWidth || 500} 64`} preserveAspectRatio="none" className="absolute inset-0 h-full svg-current-position" data-v-6984d82a="">
                    <rect x="0" y="0" width="0" height="100%" className="fill-yellow" data-v-6984d82a=""></rect>
                </svg>
                <svg className='absolute svg-wave bottom-0' xmlns="http://www.w3.org/2000/svg" width={playerWidth} height="44" viewBox={`0 0 ${playerWidth || 500} 44`}>
                    {calculatedWaves?.find(wave => item.id === wave.id)?.points.map((item, i) => <rect className='origin-bottom transform transition-transform duration-500 scale-y-100 fill-dark-charcoal-20-alpha' key={i} x={i * 4} y={44 - (item * 44)} width="2" height={item * 44} />)}
                </svg>
                <div className="progress timestamp z-10 transform bg-yellow -translate-x-full">
                    00:00
                </div>
                <div className="duration timestamp bg-background-var right-0" data-v-6984d82a="">
                    00:00
                </div>
            </div>
        </div>
    </div>
}
export default Audio;