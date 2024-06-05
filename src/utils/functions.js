import axios from 'axios';
import { BY, BY_NC, BY_NC_ND, BY_NC_SA, BY_ND, BY_SA, CC0, PUBLIC_DOMAIN_MARK } from '../Components/Filter/LicensesTypeIcon.js/All_licensesIcon';

export const getSearchContent = async (access_token, type, licenses, licensesType, category, extension, imageSize, imageRatio, source, searchValue, pageCount) => {
    console.log(source);
    const url = `https://api.openverse.engineering/v1/${type}/?q=${searchValue}&page=${pageCount}&license=${licenses}&license_type=${licensesType}&category=${category}&extension=${extension}&size=${imageSize}&aspect_ratio=${imageRatio}&source=${source}`;

    const headers = {
        'Authorization': `Bearer ${access_token}`,
    };

    try {
        const response = await axios.get(url, {}, {
            headers,
        })
        return response;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}


export const authorization = async (bpOvData, setEmailVeri) => {
    let response = false;
    if (bpOvData?.name && bpOvData?.email) {
        try {
            await fetch(`${bpovToken?.ajaxUrl}?action=bpov_GetData&nonce=${bpovToken?.nonce}&email=${bpOvData?.email}&name=${bpOvData?.name}`).then(res => res.json()).then(data => {
                response = data?.success;
                setEmailVeri(true);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return response;
}

export const searchFilterContent = async (setContent, accessToken, type, licenses, licensesType, category, extension, imageSize, imageRatio, source, searchValue, pageNumber, setSearchLoading) => {
    console.log(pageNumber);
    setSearchLoading(true);
    try {
        await fetch(`${bpovSearchData?.ajaxUrl}?action=bpov_getSearchContent&nonce=${bpov_getSearchContent?.nonce}&accessToken=${accessToken}&type=${type}&licenses=${licenses}&licensesType=${licensesType}&category=${category}&extension=${extension}&imageSize=${imageSize}&imageRatio=${imageRatio}&source=${source}&searchValue=${searchValue}&pageNumber=${pageNumber}`).then(res => res.json()).then(async (data) => {

            setContent(data?.data?.results);
            setSearchLoading(false);
        });
    } catch (error) {
        console.error('Error:', error);
        setSearchLoading(false);
    }

    // setSearchLoading(true);
    // const searchResult = await getSearchContent(accessToken, type, licenses, licensesType, category, extension, imageSize, imageRatio, source, searchValue, pageNumber);

    // setSearchLoading(false);
    // setContent(searchResult?.data?.results);
}

export const licensesTypeFIter = (type, layoutCheck) => {

    if (type === "pdm") {
        return <PUBLIC_DOMAIN_MARK layoutCheck={layoutCheck} />
    } else if (type === "cc0") {
        return <CC0 layoutCheck={layoutCheck} />
    } else if (type === "by-nc-sa") {
        return <BY_NC_SA layoutCheck={layoutCheck} />
    } else if (type === "by-sa") {
        return <BY_SA layoutCheck={layoutCheck} />
    } else if (type === "by-nd") {
        return <BY_ND layoutCheck={layoutCheck} />
    } else if (type === "by-nc-nd") {
        return <BY_NC_ND layoutCheck={layoutCheck} />
    } else if (type === "by-nc") {
        return <BY_NC layoutCheck={layoutCheck} />
    } else if (type === "by") {
        return <BY layoutCheck={layoutCheck} />
    }
}

export const shortenTitle = (title, maxLength) => {
    if (title?.length <= maxLength) {
        return title;
    } else {
        return title?.substring(0, maxLength - 3) + "...";
    }
}


export function secondsToMmSs(seconds) {
    // Ensure the input is a number
    seconds = parseInt(seconds, 10);
    // Calculate minutes and remaining seconds
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    // Format the result as mm:ss
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}