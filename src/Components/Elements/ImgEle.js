import { dummyImage } from '../../utils/icons';

const ImgEle = ({ url, foreign_landing_url }) => {
    return <a href={foreign_landing_url} className="img">
        {url ? <img src={url} /> : <div className='dummyImage'>{dummyImage}</div>}
    </a>
}
export default ImgEle;