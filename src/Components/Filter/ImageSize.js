const ImageSize = ({ imageSize, setImageSize }) => {

    const toggleImageSize = (size) => {
        if (imageSize.includes(size)) {
            setImageSize(imageSize.filter(item => item !== size));
        } else {
            setImageSize([...imageSize, size]);
        }
    };

    return <div className="licenses">
        <h3>Image Size</h3>
        <div className="list">
            <div className="single">
                <label htmlFor='small'>
                    <span><input type='checkbox' id='small' onClick={() => toggleImageSize('small')} /></span>
                    <div className="text">
                        small
                    </div>
                </label>
            </div>

            <div className="single">
                <label htmlFor='medium'>
                    <span><input type='checkbox' id='medium' onClick={() => toggleImageSize('medium')} /></span>
                    <div className="text">
                        medium
                    </div>
                </label>
            </div>

            <div className="single">
                <label htmlFor='large'>
                    <span><input type='checkbox' id='large' onClick={() => toggleImageSize('large')} /></span>
                    <div className="text">
                        large
                    </div>
                </label>
            </div>

        </div>
    </div>
}
export default ImageSize;