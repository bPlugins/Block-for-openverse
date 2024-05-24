import { licenses_by, licenses_by_nc, licenses_by_nd, licenses_by_sa, licenses_cc, licenses_cc0, licenses_pdm } from '../../../utils/icons';


export const LicensesName = (text) => {
    return <div className="text">
        {text}
    </div>
}

export const PUBLIC_DOMAIN_MARK = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_pdm(layoutCheck)}
    </div>
}

export const CC0 = ({ layoutCheck }) => {
    console.log('cc', layoutCheck)
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_cc0(layoutCheck)}
    </div>
}

export const BY = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_by(layoutCheck)}
    </div>
}

export const BY_SA = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_by(layoutCheck)}{licenses_by_sa(layoutCheck)}
    </div>
}

export const BY_ND = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_by(layoutCheck)}{licenses_by_nd(layoutCheck)}
    </div>
}

export const BY_NC = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_by(layoutCheck)}{licenses_by_nc(layoutCheck)}
    </div>
}

export const BY_NC_SA = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_by(layoutCheck)}{licenses_by_nc(layoutCheck)}{licenses_by_sa(layoutCheck)}
    </div>
}

export const BY_NC_ND = ({ layoutCheck }) => {
    return <div className="icon">
        {licenses_cc(layoutCheck)}{licenses_by(layoutCheck)}{licenses_by_nc(layoutCheck)}{licenses_by_nd(layoutCheck)}
    </div>
}