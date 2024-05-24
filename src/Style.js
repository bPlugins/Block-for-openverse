import { getBackgroundCSS, getBorderCSS, getColorsCSS, getIconCSS, getSeparatorCSS, getMultiShadowCSS, getSpaceCSS, getTypoCSS } from '../../Components/utils/getCSS';

const Style = ({ attributes, clientId }) => {
	const { columnGap, rowGap, imgBorder, titleTypo, creatorTypo, titleColor, creatorColor, licensesTypo, licensesColor, audio } = attributes;

	const mainEle = `#bpovOpenverse-${clientId}`;

	const rightWidth = 100 - audio?.leftWidth.replace(/%/g, '');

	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', licensesTypo)?.googleFontLink}
		${getTypoCSS('', creatorTypo)?.googleFontLink}
		${getTypoCSS('', titleTypo)?.googleFontLink}
		${getTypoCSS(`${mainEle} .singleItem .licenses`, licensesTypo)?.styles}
		${getTypoCSS(`${mainEle} .singleItem .creator`, creatorTypo)?.styles}
		${getTypoCSS(`${mainEle} .singleItem .title`, titleTypo)?.styles}
		${getTypoCSS(`${mainEle} .singleItem .title span`, titleTypo)?.styles}
		
		${mainEle} .singleItem .licenses a{
			color:${licensesColor};
		}
		${mainEle} .singleItem .licenses {
			color:${licensesColor};
		}

		${mainEle} .singleItem .creator a {
			color:${creatorColor};
		}

		${mainEle} .singleItem .creator {
			color:${creatorColor};
		}

		${mainEle} .singleItem .title {
			color:${titleColor};
		}

		${mainEle} .singleItem .title span {
			text-decoration: none;
			color:${titleColor};
		}

		${mainEle} .bpovLayout .img img{ 
			${getBorderCSS(imgBorder)};
		}
		
		${mainEle} .bpovLayout{
			grid-gap:${rowGap} ${columnGap};
		} 

		${mainEle} .singleItem .audio {
			grid-template-columns: ${audio?.leftWidth} ${rightWidth}%;
		}
	`}} />;
}
export default Style;