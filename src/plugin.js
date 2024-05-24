
import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';

const { PanelBody, __experimentalInputControl: InputControl, Button } = wp.components;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

import useWPOptionMutation from './hooks/useWPOptionMutation';
import useWPOptionQuery from './hooks/useWPOptionQuery';
import { blockIcon } from './utils/icons';
import { authorization } from './utils/functions';
const bpovEvent = new CustomEvent('bpovEvent');

const RenderPlugin = () => {

    const [bpOvData, setbpOvData] = useState({});
    const { email = '', name, is_Authorized } = bpOvData || {};
    const { data: firstData = {}, isLoading: loadingOnGet, fetchData } = useWPOptionQuery('bpov-block-for-openverse');

    const { isLoading: loadingOnSet, saveData } = useWPOptionMutation('bpov-block-for-openverse', { dataType: 'object' });
    const [emailVeri, setEmailVeri] = useState(false);

    // Get first data
    useEffect(() => {
        if (!loadingOnGet) {
            setbpOvData({ ...firstData });
        }
    }, [loadingOnGet]);

    // Save to database
    const onSaveData = async () => {
        if (!loadingOnSet) {
            const isAuthorized = await authorization(bpOvData, setEmailVeri);
            setbpOvData({ ...bpOvData, is_Authorized: isAuthorized });
            saveData({ ...bpOvData, is_Authorized: isAuthorized });
        }
    }

    useEffect(() => {
        if (!loadingOnSet) {
            window.dispatchEvent(bpovEvent);
        }
    }, [loadingOnSet]);

    useEffect(() => {
        window.addEventListener('bpovEvent', () => {
            fetchData();
        });

    }, []);



    const unAuthorization = () => {
        setbpOvData({ ...bpOvData, is_Authorized: false });
        saveData({ ...bpOvData, is_Authorized: false });
    }


    return <>
        <PluginSidebarMoreMenuItem target='instagram-feed'>{__('Block For Openverse', 'block-for-openverse')}</PluginSidebarMoreMenuItem>

        <PluginSidebar className='bPlPluginSidebar' name='youTube-video-gallery' title={__('Openverse', 'block-for-openverse')}>
            <PanelBody className='bPlPanelBody bpovbPlPanelBody' title={__('Authorization', 'block-for-openverse')} initialOpen={true}>

                {!is_Authorized ? <div className=''>
                    <p>Provide your Email ID & unique project Name to get access to Openverse using API, these are <span>required field*</span></p>
                    <label htmlFor='email'>Email</label>
                    <InputControl className="bpovInputControl" id="email" value={email} onChange={val => {
                        setbpOvData({ ...bpOvData, email: val });
                    }} />
                    <label htmlFor="name">Name</label>
                    <InputControl className="bpovInputControl" id="name" value={name} onChange={val => {
                        setbpOvData({ ...bpOvData, name: val });
                    }} />

                    <Button className='apiBtn' disabled={loadingOnSet} onClick={onSaveData} >{__('Generate API', 'block-for-openverse')}</Button></div> :
                    <div className='unAuthorization'>
                        {emailVeri && <p> Check your email for a <span>verification link *</span> </p>}
                        <Button className='apiBtn' disabled={loadingOnSet} onClick={unAuthorization} >{__('Remove API', 'block-for-openverse')}</Button>
                    </div>
                }

            </PanelBody>
        </PluginSidebar >
    </>
};

registerPlugin('bpov-openverse', {
    icon: blockIcon,
    render: RenderPlugin
});