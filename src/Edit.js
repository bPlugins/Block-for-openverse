import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { __experimentalInputControl as InputControl } from '@wordpress/components'


// Settings Components
import { tabController } from '../../Components/utils/functions';

import Settings from './Settings';
import Style from './Style';
import { searchFilterContent, authorization, getData, getSearchContent } from './utils/functions';
import Form from './Components/Form';
import OpenverseFullIcon from './Components/OpenverseFullIcon';
import useWPOptionQuery from './hooks/useWPOptionQuery';
import useWPOptionMutation from './hooks/useWPOptionMutation';
import { authorLoading } from './utils/icons';
const bpovEvent = new CustomEvent('bpovEvent');

const Edit = props => {
	const { className, attributes, setAttributes, clientId, isSelected } = props;

	const [bpOvData, setbpOvData] = useState({});

	const { isLoading: loadingOnSet, saveData } = useWPOptionMutation('bpov-block-for-openverse', { dataType: 'object' });
	const { data = {}, fetchData, isLoading } = useWPOptionQuery('bpov-block-for-openverse');

	const { authInfo } = attributes;
	const [type, setType] = useState('images');
	const [licenses, setLicenses] = useState([]);
	const [licensesType, setLicensesType] = useState([]);
	const [categories, setCategories] = useState([]);
	const [extension, setExtension] = useState([]);
	const [imageSize, setImageSize] = useState([]);
	const [imageRatio, setImageRatio] = useState([]);
	const [source, setSource] = useState([]);
	const [searchValue, setSearchValue] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	const [content, setContent] = useState();
	const [accessToken, setAccessToken] = useState();
	const [emailVeri, setEmailVeri] = useState(false);
	const [modal, setModal] = useState(false);
	const [loading, setSearchLoading] = useState(false);

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	useEffect(() => tabController(), [isSelected]);

	useEffect(() => {
		window.addEventListener('bpovEvent', () => {
			fetchData();
		});
		if (!isLoading) {
			setbpOvData(data);
		}

	}, [isLoading]);

	useEffect(() => {
		if (!loadingOnSet) {
			window.dispatchEvent(bpovEvent);
		}
	}, [loadingOnSet]);

	useEffect(() => {
		if (!loadingOnSet) {
			fetchData();
		}
	}, [loadingOnSet]);

	// Save to database
	const onSaveData = async () => {
		if (!loadingOnSet) {
			setSearchLoading(true);
			const isAuthorized = await authorization(bpOvData, setEmailVeri,);
			setbpOvData({ ...bpOvData, is_Authorized: isAuthorized });
			saveData({ ...bpOvData, is_Authorized: isAuthorized });
			setSearchLoading(false);
		}
	}
	// console.log(content);
	// Get search value 
	const getSearchMedia = async () => {
		if (searchValue) {
			try {
				await fetch(`${bpovSearchData?.ajaxUrl}?action=bpov_searchData&nonce=${bpovSearchData?.nonce}&email=${bpOvData?.email}`).then(res => res.json()).then(async (data) => {
					const accessToken = data?.data?.accessToken;
					setAccessToken(accessToken);
					searchFilterContent(setContent, accessToken, type, licenses, licensesType, categories, extension, imageSize, imageRatio, source, searchValue, 1, setSearchLoading);
					setModal(true);
				});
			} catch (error) {
				console.error('Error:', error);
				setSearchLoading(false);
			}
		}
	};

	useEffect(() => {
		if (content) {
			searchFilterContent(setContent, accessToken, type, licenses, licensesType, categories, extension, imageSize, imageRatio, source, searchValue, 1, setSearchLoading);
		}
	}, [licenses, licensesType, categories, extension, imageSize, imageRatio, source]);

	const formProps = {
		attributes, setAttributes, getSearchMedia, type, setType, searchValue, setSearchValue, content, setContent, setPageNumber, pageNumber, accessToken, emailVeri, modal, setModal, setLicenses, licenses, licensesType, setLicensesType, categories, setCategories, extension, setExtension, imageSize, setImageSize, imageRatio, setImageRatio, source, setSource, loading, setSearchLoading,
	}

	// console.log(authInfo);
	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`bpovOpenverse-${clientId}`}>
			<Style attributes={attributes} clientId={clientId} />

			{data?.is_Authorized ? <Form {...formProps} /> : <div className="bpovAuthenticate">
				<OpenverseFullIcon />
				<div className='bpovnotice'>Provide your Email ID & unique project Name to get access to Openverse using API, these are <span>required field*</span></div>
				<div className="form">
					<InputControl label={__('Email', 'block-for-openverse')} value={bpOvData?.email} onChange={(val) => setbpOvData({ ...bpOvData, email: val })} />
					<InputControl label={__('Name', 'block-for-openverse')} value={bpOvData?.name} onChange={(val) => setbpOvData({ ...bpOvData, name: val })} />
					<div className={`btn generateBtn `} onClick={onSaveData}>{__('Generate API', 'block-for-openverse')}
						{loading && <div className='authorLoading'>{authorLoading}</div>}
					</div>

				</div>
			</div>}
		</div>
	</>;
};
export default Edit;