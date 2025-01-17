import { useState, useEffect, useRef } from 'react';
import { dummyImage, pause, play } from './utils/icons'
import { licensesTypeFIter } from './utils/functions';
import MyAudio from './Audio';
import Image from './Image';

const Layout = ({ attributes, clientId }) => {
    const { columns, mediaData, items, audio } = attributes;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null); // State to track currently playing audio item
    const audioRefs = useRef({});
    const selectWidthItem = useRef();
    const [waves, setWaves] = useState([]);
    const [calculatedWaves, setCalculatedWaves] = useState([]);
    const [playerWidth, setPlayerWidth] = useState(null);

    const fetchWaves = async (missingWaves) => {
        // console.log(`${bpovSearchData?.ajaxUrl}?action=bpov_getWave&nonce=${bpov_getWave?.nonce}&missingWaves=${JSON.stringify(missingWaves)}`)
        const response = await fetch(`${bpovSearchData?.ajaxUrl}?action=bpov_getWave&nonce=${bpov_getWave?.nonce}&clientId=${clientId}&missingWaves=${JSON.stringify(missingWaves)}`);
        const res = await response.json();
        console.log(res)
        if (res.success) {
            return res.data;
        } else {
            console.error('Error:', res.data);
            return null;
        }

        // const response = await fetch(`https://api.openverse.engineering/v1/audio/${id}/waveform/`)
        // const data = await response.json();
        // return data.points;
    };

    useEffect(() => {
        const getWaves = async () => {
            const missingWaves = [];
            console.log(missingWaves);
            if (Array.isArray(mediaData)) {
                mediaData.map((item, i) => {
                    if (item.waveform) {
                        // console.log(item.id)
                        if (!waves.find(wave => wave.id == item.id)) {
                            missingWaves.push(item.id)
                            // const points = await fetchWaves(item.id);

                            // tempWaves = [...tempWaves, { id: item.id, points: points }]
                            // if (i === mediaData.length - 1) {
                            //     resolve(tempWaves);
                            // }
                        }
                    }
                });
                // const myPromise = new Promise((resolve, reject) => {
                //     let tempWaves = [];
                //     console.log({ missingWaves })
                //     // console.log({ tempWaves })
                // });
                if (missingWaves.length > 0) {
                    const response = await fetchWaves(missingWaves);
                    // console.log('missingWaves', response);
                    setWaves(response)
                }
                // resolve(response);
            }
        }

        getWaves()
    }, [mediaData]);

    const getCalculatedPoints = (width, id) => {
        const points = waves.find(wave => wave.id === id)?.points;
        if (!width || !points) {
            return []
        }
        const dividerValue = width / 4;
        const nextNumber = points.length / dividerValue;
        const filteredPoints = [];
        for (let i = 0; i < points.length; i += nextNumber) {
            filteredPoints.push(points[Math.floor(i)]);
        }
        if (Array.isArray(filteredPoints)) {
            return filteredPoints;
        }
        return [];
    }

    useEffect(() => {
        let calWaves = [];
        waves.map(wave => {
            const points = getCalculatedPoints(playerWidth, wave.id);
            calWaves = [...calWaves, { id: wave.id, points }];
        });
        setCalculatedWaves(calWaves);

    }, [waves, playerWidth]);

    useEffect(() => {

        setPlayerWidth(selectWidthItem?.current?.offsetWidth);
        window.div = selectWidthItem.current;

    }, [columns, audio]);

    const togglePlay = (id) => {
        const audioRef = audioRefs.current[id];
        if (!audioRef) return;

        if (audioRef.paused) {
            // If clicked item is different from currently playing item, pause the currently playing item
            if (currentlyPlaying !== id && currentlyPlaying !== null) {
                audioRefs.current[currentlyPlaying].pause();
            }
            audioRef.play();
            setCurrentlyPlaying(id);
            setIsPlaying(true);
        } else {
            audioRef.pause();
            setCurrentlyPlaying(null);
            setIsPlaying(false);
        }
    };


    useEffect(() => {
        if (Array.isArray(mediaData)) {
            // Create a new object to hold audio refs for each item
            const refs = {};
            mediaData.forEach(item => {
                const audio = new Audio(item.url);
                refs[item.id] = audio;
            });
            // Update the audioRefs with the new object containing audio refs
            audioRefs.current = refs;
        }
    }, [mediaData]);

    return <div className={`bpovLayout columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
        {mediaData?.map((item, index) => {
            // const waves = item?.waveform ? singleIdSet(item?.id) : [];
            const { waveform, url, foreign_landing_url, title, creator_url, creator, license_url, license, license_version } = item || {};
            const waves = [];
            return <div className='singleItem' key={index} style={{ overflow: 'hidden' }}>
                {waveform ?
                    <MyAudio items={items} clientId={clientId} item={item} index={index} audioRefs={audioRefs} togglePlay={togglePlay} currentlyPlaying={currentlyPlaying} isPlaying={isPlaying} selectWidthItem={selectWidthItem} playerWidth={playerWidth} calculatedWaves={calculatedWaves} /> :

                    <Image item={item} items={items} />
                }
            </div>
        })}
    </div>
}
export default Layout;
