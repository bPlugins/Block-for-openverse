import ImgEle from './Components/Elements/ImgEle';


const Image = ({ item, items }) => {
    const { url, foreign_landing_url, title, creator, creator_url, license_version, license_url, license, } = item;
    return <div href={foreign_landing_url} className='imgArea'>
        <ImgEle foreign_landing_url={foreign_landing_url} url={url} />
        {items?.isTitle && <div className=''>
            <a href={foreign_landing_url} className='title' target='__blank'>{title}</a>
        </div>}
        {items?.isCreator && <div className="creator">
            <span>By</span><a className='' href={creator_url} target='__blank'> {creator}</a>
        </div>}
        {items?.isLicenses && <div className="licenses">
            <span>Is licensed under</span><a className='' href={license_url}> {license} {license_version}</a>
        </div>}
    </div>
}
export default Image;