import { licenses_by, licenses_by_nc, licenses_by_nd, licenses_by_sa, licenses_cc, licenses_cc0, licenses_pdm } from '../../utils/icons';
import Licenses_by_nc_sa, { BY, BY_NC, BY_NC_ND, BY_NC_SA, BY_ND, BY_SA, CC0, LicensesIcon, LicensesName, PUBLIC_DOMAIN_MARK } from './LicensesTypeIcon.js/All_licensesIcon';
const LicensesFilter = ({ licenses, setLicenses }) => {

    const toggleLicense = (license) => {
        if (licenses.includes(license)) {
            setLicenses(licenses.filter(item => item !== license));
        } else {
            setLicenses([...licenses, license]);
        }
    };

    return <div className="licenses">
        <h3>Licenses</h3>
        <div className="list">
            <div className="single">
                <label htmlFor='public-domain-mark'>
                    <span><input type='checkbox' id='public-domain-mark' onClick={() => toggleLicense('pdm')} /></span>
                    <PUBLIC_DOMAIN_MARK />
                    {LicensesName("Public Domain Mark")}
                </label>
            </div>
            <div className="single">
                <label htmlFor='cc0'>
                    <span><input type='checkbox' id='cc0' onClick={() => toggleLicense('cc0')} /></span>
                    <CC0 />
                    {LicensesName("cc0")}
                </label>
            </div>
            <div className="single">
                <label htmlFor='cc-by'>
                    <span><input type='checkbox' id='cc-by' onClick={() => toggleLicense('by')} /></span>
                    <BY />
                    {LicensesName("cc by")}
                </label>
            </div>
            <div className="single">
                <label htmlFor='cc-by-sa'>
                    <span><input type='checkbox' id='cc-by-sa' onClick={() => toggleLicense('by-sa')} /></span>
                    <BY_SA />
                    {LicensesName("cc by-sa")}

                </label>
            </div>
            <div className="single">
                <label htmlFor='cc-by-nd'>
                    <span><input type='checkbox' id='cc-by-nd' onClick={() => toggleLicense('by-nd')} /></span>
                    <BY_ND />
                    {LicensesName("cc by-nd")}

                </label>
            </div>
            <div className="single">
                <label htmlFor='cc-by-nc'>
                    <span><input type='checkbox' id='cc-by-nc' onClick={() => toggleLicense('by-nc')} /></span>
                    <BY_NC />
                    {LicensesName("cc by-nc")}

                </label>
            </div>
            <div className="single">
                <label htmlFor='cc-by-nc-sa'>
                    <span><input type='checkbox' id='cc-by-nc-sa' onClick={() => toggleLicense('by-nc-sa')} /></span>
                    <BY_NC_SA />
                    {LicensesName("cc by-nc-sa")}

                </label>
            </div>
            <div className="single">
                <label htmlFor='cc-by-nc-nd'>
                    <span><input type='checkbox' id='cc-by-nc-nd' onClick={() => toggleLicense('by-nc-nd')} /></span>
                    <BY_NC_ND />
                    {LicensesName("cc by-nc-nd")}
                </label>
            </div>
        </div>
    </div>
}
export default LicensesFilter;