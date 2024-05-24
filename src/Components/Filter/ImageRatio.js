const ImageRation = ({ imageRatio, setImageRatio }) => {

    const toggleImageRatio = (ratio) => {
        if (imageRatio.includes(ratio)) {
            setImageRatio(imageRatio.filter(item => item !== ratio));
        } else {
            setImageRatio([...imageRatio, ratio]);
        }
    };

    return <div className="licenses">
        <h3>Aspect ratio</h3>
        <div className="list">
            <div className="single">
                <label htmlFor='tall'>
                    <span><input type='checkbox' id='tall' onClick={() => toggleImageRatio('tall')} /></span>
                    <div className="text">
                        tall
                    </div>
                </label>
            </div>

            <div className="single">
                <label htmlFor='wide'>
                    <span><input type='checkbox' id='wide' onClick={() => toggleImageRatio('wide')} /></span>
                    <div className="text">
                        wide
                    </div>
                </label>
            </div>

            <div className="single">
                <label htmlFor='square'>
                    <span><input type='checkbox' id='square' onClick={() => toggleImageRatio('square')} /></span>
                    <div className="text">
                        square
                    </div>
                </label>
            </div>
        </div>
    </div>
}
export default ImageRation;