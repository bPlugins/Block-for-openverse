import { dummyImage } from '../../utils/icons';

const ImgEle = ({ url, foreign_landing_url, imageHyperLink }) => {
    return <a href={imageHyperLink ? imageHyperLink : foreign_landing_url} className="img" target='__blank'>
        {url ? <img src={url} /> : <div className='dummyImage'>{dummyImage}</div>}
    </a>
}
export default ImgEle;