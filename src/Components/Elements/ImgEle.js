import { dummyImage } from '../../utils/icons';

const ImgEle = ({ url }) => {
    return <div className="img">
        {url ? <img src={url} /> : <div className='dummyImage'>{dummyImage}</div>}
    </div>
}
export default ImgEle;