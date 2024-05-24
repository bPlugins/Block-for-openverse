const iconColor = '#4527a4';

export const pause = <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 15 15" fill="none">
	<path d="M5.5 3V12M9.5 3V12" stroke="#000000" /></svg>;

export const play = <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 15 15" fill="none" >
	<path d="M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z" fill="#000000" /></svg>;

export const loadMore = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100px" id="L6" x="0px" y="0px"
	viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
	<rect fill="none" stroke="#000" strokeWidth="4" x="25" y="25" width="50" height="50">
		<animateTransform
			attributeName="transform"
			dur="0.5s"
			from="0 50 50"
			to="180 50 50"
			type="rotate"
			id="strokeBox"
			attributeType="XML"
			begin="rectBox.end" />
	</rect>
	<rect x="27" y="27" fill="#000" width="46" height="50">
		<animate
			attributeName="height"
			dur="1.3s"
			attributeType="XML"
			from="50"
			to="0"
			id="rectBox"
			fill="freeze"
			begin="0s;strokeBox.end" />
	</rect>
</svg>

export const authorLoading = <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" id="L9" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0"><path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
</path></svg>;

export const licenses_by_nc = (layoutCheck) => <svg xmlns="http://www.w3.org/2000/svg" width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034"><path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M499 228q-165 0 -281 116q-118 120 -118 284t118 282t282 118t286 -119q114 -112 114 -280.5t-116 -284.5t-285 -116zM501 300q136 0 231 96q96 94 96 232q0 44 -10 86l-355 -159q-4 -5 -4 -10q0 -17 15 -24t33 -7q35 0 69 23l52 -53q-45 -34 -100 -37v-62h-47v62 q-37 2 -64.5 21t-37.5 50l-153 -68q20 -30 44 -54q94 -96 231 -96zM190 520l204 92l64 28l47 21l39 16q10 10 10 25q0 21 -14.5 30.5t-35.5 9.5q-50 0 -89 -37l-55 56q55 47 121 48v61h47v-61q41 -4 71.5 -28t38.5 -61l151 67q-20 36 -55 70q-98 98 -232.5 98t-232 -97 t-97.5 -230q0 -58 18 -108z" /></svg>

export const licenses_by_nd = (layoutCheck) => <svg xmlns="http://www.w3.org/2000/svg" width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034"><path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M499 227q-165 0 -281 117q-118 120 -118 284t118.5 281.5t280.5 117.5q166 0 287 -118q114 -114 114 -281.5t-116.5 -284t-284.5 -116.5zM501 300q136 0 231 96q96 94 96 231.5t-94 229.5q-100 98 -234 98t-231 -97t-97 -230t98 -232q94 -96 231 -96zM361 533v69h290v-69 h-290zM361 662v68h290v-68h-290z" /></svg>;

export const licenses_by_sa = (layoutCheck) => <svg xmlns="http://www.w3.org/2000/svg" width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034"><path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M499 228q-165 0 -281 117q-118 120 -118 284t118.5 281.5t280.5 117.5q166 0 287 -118q114 -114 114 -281.5t-116.5 -284t-284.5 -116.5zM501 300q136 0 231 97q96 94 96 231.5t-94 229.5q-100 97 -234 97t-231 -96.5t-97 -229.5t98 -232q94 -97 231 -96v-1zM498 418 q-69 0 -116.5 40t-59.5 114h-31l79 79l79 -79h-29q10 -71 90 -71q44 0 67.5 33.5t23.5 96.5q0 61 -25.5 97.5t-67.5 36.5q-84 0 -88 -73h-101q10 75 59.5 115.5t117.5 40.5q92 0 150 -61t58 -153q0 -95 -56 -155.5t-150 -60.5z" /></svg>;

export const licenses_by = (layoutCheck) => <svg xmlns="http://www.w3.org/2000/svg" width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034"><path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M499 228q-165 0 -281 116q-118 120 -118 284t118.5 282t280.5 118q165 0 287 -119q114 -112 114 -280.5t-116 -284.5t-285 -116zM501 300q135 0 231 96t96 232q0 139 -94 229q-100 98 -234 98t-231 -97t-97 -229.5t98 -232.5q94 -96 231 -96zM500 370q-56 0 -56 56t56 56 t56 -56t-56 -56zM418 503q-11 0 -18.5 7.5t-7.5 18.5v163h46v195h124v-195h46v-163q0 -11 -8 -18.5t-18 -7.5h-164z" /></svg>;

export const licenses_pdm = (layoutCheck) => <svg width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" ><path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M500 227q-109 0 -202 55q-90 53 -143 143q-55 93 -55 202t55 202q53 90 143 143q93 55 202 55t202 -55q90 -53 143 -143q55 -93 55 -202t-55 -202q-53 -90 -143 -143q-93 -55 -202 -55zM500 302q88 0 164 44q73 44 117 117q44 76 44 164q0 43 -11 84l-362 -162 q23 -42 65 -42q23 0 43 14q7 5 12 10l66 -67q-52 -44 -127 -44q-55 0 -97 23q-40 21 -65 60l-121 -54q45 -68 115 -107q73 -40 157 -40zM193 520l127 57q-5 26 -5 53q0 74 34 124q28 42 77 63q40 17 83 17q62 0 113 -35q8 -6 15 -12l-58 -71l-5 5q-23 22 -54 22v0 q-42 0 -66 -39q-20 -32 -20 -77l351 156q-42 77 -117 122q-77 47 -168 47q-88 0 -164 -44q-73 -44 -117 -117q-44 -76 -44 -164q0 -55 18 -107z" /></svg>;

export const licenses_cc0 = (layoutCheck) => <svg xmlns="http://www.w3.org/2000/svg" width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034" >
	<path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M486 228q-166 0 -280 116q-58 58 -88.5 131.5t-30.5 153t30 151.5t87.5 129.5t130 88t152 30.5t153.5 -31t133 -88q57 -56 85.5 -127.5t28.5 -153.5t-29 -154t-86 -129q-117 -117 -286 -117zM488 300q136 0 232 96q47 47 71 106.5t24 125.5q0 137 -94 229 q-48 48 -108.5 72.5t-125 24.5t-124 -24.5t-106.5 -71t-72.5 -106.5t-25.5 -124.5t25.5 -124t72.5 -107.5q94 -96 231 -96zM487 398q-90 0 -132 75q-33 59 -33 155t33 155q42 75 132 75t132 -75q34 -59 34 -155t-34 -155q-42 -75 -132 -75zM487 485q7 0 15 2q17 14 5 35 l-88 161q-3 -23 -3 -55q0 -57 10 -89q17 -54 61 -54zM553 559q5 28 5 69q0 57 -10 89q-17 54 -61 54q-8 0 -15 -1l-6 -2q-29 -13 -11 -39z" />
</svg>;

export const licenses_cc = (layoutCheck) => <svg xmlns="http://www.w3.org/2000/svg" width={`${layoutCheck ? '16' : '25'}`} height={`${layoutCheck ? '16' : '25'}`} viewBox="-10 -5 1034 1034"> <path fill={`${layoutCheck ? '#000000ab' : '#000000'}`} d="M499 226q-166 0 -280 117q-58 58 -88.5 131t-30.5 152.5t30 152t87.5 130t130 87.5t152 30t153.5 -30.5t133 -88.5q56 -55 85 -127t29 -153.5t-29.5 -154t-85.5 -128.5q-118 -118 -286 -118zM501 299q135 0 232 96q46 47 70.5 106t24.5 125q0 138 -94 230 q-48 47 -108.5 72t-125 25t-124 -24.5t-106.5 -71.5t-72.5 -106.5t-25.5 -124.5t25.5 -124.5t72.5 -107.5q94 -95 231 -95zM389 502q-50 0 -83.5 33.5t-33.5 91.5t33 91t86 33q34 0 62 -17t43 -46l-49 -25q-14 34 -49 34q-27 0 -40.5 -19t-13.5 -52q0 -70 54 -70 q11 0 23.5 7t20.5 25l54 -28q-32 -58 -107 -58zM621 502q-51 0 -84 33.5t-33 91.5t32.5 91t86.5 33q33 0 60.5 -17t44.5 -46l-50 -25q-14 34 -49 34q-27 0 -40.5 -19t-13.5 -52q0 -70 54 -70q11 0 23.5 7t21.5 25l52 -28q-31 -58 -105 -58z" /></svg>;

export const openverseFullIcon = <svg xmlns="http://www.w3.org/2000/svg" width="185" height="34" viewBox="0 0 226 34">
	<path d="M71.8823 17.2666C71.8823 22.7198 67.4908 27.1406 62.0737 27.1406C56.6565 27.1406 52.265 22.7198 52.265 17.2666C52.265 11.8133 56.6565 7.39258 62.0737 7.39258C67.4908 7.39258 71.8823 11.8133 71.8823 17.2666ZM65.997 17.2666C65.997 19.4479 64.2404 21.2162 62.0735 21.2162C59.9067 21.2162 58.1501 19.4479 58.1501 17.2666C58.1501 15.0853 59.9067 13.317 62.0735 13.317C64.2404 13.317 65.997 15.0853 65.997 17.2666ZM80.1463 33.6428H73.4168V7.72354H80.0975V11.0125H80.2438C80.9753 9.09804 82.7308 7.47809 85.5104 7.47809C89.2165 7.47809 92.8251 10.3253 92.8251 17.1487C92.8251 23.6776 89.4603 26.8194 85.4616 26.8194C82.8284 26.8194 81.0241 25.3958 80.2438 23.4813H80.1463V33.6428ZM82.9746 12.6816C81.1216 12.6816 80 14.3506 80 17.1487C80 19.8977 81.1216 21.6159 82.9746 21.6159C84.8277 21.6159 85.9005 19.9468 85.9005 17.1487C85.9005 14.3506 84.8277 12.6816 82.9746 12.6816ZM112.755 20.4868C112.121 24.414 108.78 26.9175 103.587 26.9175C97.589 26.9175 93.9317 23.2972 93.9317 17.1978C93.9317 11.3562 97.6378 7.47809 103.441 7.47809C109.097 7.47809 112.755 11.1475 112.755 17.1487V18.7196H100.564V19.0141C100.564 20.8304 101.734 22.1559 103.733 22.1559C105.111 22.1559 106.22 21.5545 106.61 20.4868H112.755ZM103.587 12.2398C101.941 12.2398 100.6 13.3566 100.564 14.9888H106.562C106.525 13.3688 105.257 12.2398 103.587 12.2398ZM121.2 15.9706C121.213 14.1052 122.261 12.9761 123.931 12.9761C125.626 12.9761 126.626 14.1052 126.613 15.9706V26.5739H133.343V14.547C133.355 10.448 130.783 7.47809 126.808 7.47809C124.053 7.47809 121.871 8.92623 121.054 11.3071H120.859V7.72354H114.471V26.5739H121.2V15.9706ZM146.766 7.72354H153.836L147.546 26.5739H139.743L133.453 7.72354H140.524L143.547 20.1923H143.742L146.766 7.72354ZM163.123 26.9175C168.317 26.9175 171.657 24.414 172.291 20.4868H166.147C165.757 21.5545 164.647 22.1559 163.27 22.1559C161.27 22.1559 160.1 20.8304 160.1 19.0141V18.7196H172.291V17.1487C172.291 11.1475 168.634 7.47809 162.977 7.47809C157.174 7.47809 153.468 11.3562 153.468 17.1978C153.468 23.2972 157.125 26.9175 163.123 26.9175ZM160.1 14.9888C160.136 13.3566 161.477 12.2398 163.123 12.2398C164.793 12.2398 166.061 13.3688 166.098 14.9888H160.1ZM180.737 26.5739H174.007V7.72354H180.542V11.3071H180.737C181.419 8.65624 182.98 7.47809 184.979 7.47809C185.564 7.47809 186.15 7.57627 186.686 7.73581V13.5161C186.015 13.2829 184.894 13.1725 184.199 13.1725C182.212 13.1725 180.737 14.5961 180.737 16.756V26.5739ZM204.979 13.8597C204.808 9.8712 201.517 7.47809 196.104 7.47809C190.752 7.47809 187.448 9.68712 187.472 13.6143C187.448 16.5842 189.362 18.4864 193.178 19.1614L196.494 19.7505C197.957 20.0205 198.615 20.4132 198.64 21.125C198.615 21.9104 197.725 22.3522 196.494 22.3522C194.97 22.3522 193.897 21.6895 193.714 20.4868H187.034C187.399 24.3526 190.715 26.9175 196.445 26.9175C201.626 26.9175 205.442 24.3772 205.467 20.3395C205.442 17.5537 203.589 15.9338 199.761 15.2342L195.958 14.547C194.531 14.2893 194.129 13.7738 194.153 13.2216C194.129 12.4361 195.092 11.9943 196.25 11.9943C197.579 11.9943 198.688 12.7061 198.786 13.8597H204.979ZM225.156 20.4868C224.522 24.414 221.181 26.9175 215.988 26.9175C209.99 26.9175 206.332 23.2972 206.332 17.1978C206.332 11.3562 210.039 7.47809 215.842 7.47809C221.498 7.47809 225.156 11.1475 225.156 17.1487V18.7196H212.964V19.0141C212.964 20.8304 214.135 22.1559 216.134 22.1559C217.512 22.1559 218.621 21.5545 219.011 20.4868H225.156ZM215.988 12.2398C214.342 12.2398 213.001 13.3566 212.964 14.9888H218.962C218.926 13.3688 217.658 12.2398 215.988 12.2398Z" fillRule="evenodd" />
	<path d="M0.0856323 7.6075C0.0856323 11.7937 3.46313 15.215 7.64278 15.215V0C3.46313 0 0.0856323 3.4 0.0856323 7.6075Z" />
	<path d="M11.1047 7.6075C11.1047 11.7937 14.4822 15.215 18.6619 15.215V0C14.5033 0 11.1047 3.4 11.1047 7.6075Z" />
	<path d="M29.6809 15.215C33.8546 15.215 37.2381 11.809 37.2381 7.6075C37.2381 3.40599 33.8546 0 29.6809 0C25.5072 0 22.1238 3.40599 22.1238 7.6075C22.1238 11.809 25.5072 15.215 29.6809 15.215Z" />
	<path d="M0.0856323 26.3924C0.0856323 30.6 3.46313 34 7.64278 34V18.8062C3.46313 18.8062 0.0856323 22.2062 0.0856323 26.3924Z" />
	<path d="M11.1047 26.3288C11.1047 30.515 14.4822 33.9363 18.6619 33.9363V18.7425C14.5033 18.7425 11.1047 22.1425 11.1047 26.3288Z" />
	<path d="M29.6809 33.9362C33.8546 33.9362 37.2381 30.5302 37.2381 26.3287C37.2381 22.1272 33.8546 18.7212 29.6809 18.7212C25.5072 18.7212 22.1238 22.1272 22.1238 26.3287C22.1238 30.5302 25.5072 33.9362 29.6809 33.9362Z" />
</svg>

export const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="0 0 36 36"><path d="M19.61,18l4.86-4.86a1,1,0,0,0-1.41-1.41L18.2,16.54l-4.89-4.89a1,1,0,0,0-1.41,1.41L16.78,18,12,22.72a1,1,0,1,0,1.41,1.41l4.77-4.77,4.74,4.74a1,1,0,0,0,1.41-1.41Z"></path><path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"></path><rect x="0" y="0" width="36" height="36" fillOpacity="0" /></svg>;

export const selectedIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 200 200"><title /><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z" /></svg>;

export const audio = <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 15 15" fill="none">
	<path d="M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z" fill="#fff" /></svg>;

export const dummyImage = <svg viewBox='0 0 768 768' >
	<circle cx='69.81818181818181' cy='69.81818181818181' r='10.155664129136085' />
	<circle cx='139.63636363636363' cy='69.81818181818181' r='12.933441906913863' />
	<circle cx='209.45454545454544' cy='69.81818181818181' r='15.711219684691642' />
	<circle cx='279.27272727272725' cy='69.81818181818181' r='18.48899746246942' />
	<circle cx='349.09090909090907' cy='69.81818181818181' r='21.266775240247195' />
	<circle cx='418.9090909090909' cy='69.81818181818181' r='24.044553018024974' />
	<circle cx='488.7272727272727' cy='69.81818181818181' r='26.822330795802753' />
	<circle cx='558.5454545454545' cy='69.81818181818181' r='24.399891426419472' />
	<circle cx='628.3636363636363' cy='69.81818181818181' r='21.622113648641694' />
	<circle cx='698.1818181818181' cy='69.81818181818181' r='18.844335870863915' />
	<circle cx='69.81818181818181' cy='139.63636363636363' r='10.314335558639797' />
	<circle cx='139.63636363636363' cy='139.63636363636363' r='13.092113336417578' />
	<circle cx='209.45454545454544' cy='139.63636363636363' r='15.869891114195356' />
	<circle cx='279.27272727272725' cy='139.63636363636363' r='18.647668891973133' />
	<circle cx='349.09090909090907' cy='139.63636363636363' r='21.42544666975091' />
	<circle cx='418.9090909090909' cy='139.63636363636363' r='24.203224447528687' />
	<circle cx='488.7272727272727' cy='139.63636363636363' r='26.981002225306465' />
	<circle cx='558.5454545454545' cy='139.63636363636363' r='24.241219996915756' />
	<circle cx='628.3636363636363' cy='139.63636363636363' r='21.46344221913798' />
	<circle cx='698.1818181818181' cy='139.63636363636363' r='18.685664441360203' />
	<circle cx='69.81818181818181' cy='209.45454545454544' r='9.98562098659243' />
	<circle cx='139.63636363636363' cy='209.45454545454544' r='12.76339876437021' />
	<circle cx='209.45454545454544' cy='209.45454545454544' r='15.541176542147987' />
	<circle cx='279.27272727272725' cy='209.45454545454544' r='18.318954319925766' />
	<circle cx='349.09090909090907' cy='209.45454545454544' r='21.096732097703544' />
	<circle cx='418.9090909090909' cy='209.45454545454544' r='23.87450987548132' />
	<circle cx='488.7272727272727' cy='209.45454545454544' r='26.652287653259098' />
	<circle cx='558.5454545454545' cy='209.45454545454544' r='24.569934568963124' />
	<circle cx='628.3636363636363' cy='209.45454545454544' r='21.79215679118535' />
	<circle cx='698.1818181818181' cy='209.45454545454544' r='19.01437901340757' />
	<circle cx='69.81818181818181' cy='279.27272727272725' r='9.383163602092871' />
	<circle cx='139.63636363636363' cy='279.27272727272725' r='12.160941379870646' />
	<circle cx='209.45454545454544' cy='279.27272727272725' r='14.938719157648425' />
	<circle cx='279.27272727272725' cy='279.27272727272725' r='17.7164969354262' />
	<circle cx='349.09090909090907' cy='279.27272727272725' r='20.49427471320398' />
	<circle cx='418.9090909090909' cy='279.27272727272725' r='23.272052490981757' />
	<circle cx='488.7272727272727' cy='279.27272727272725' r='26.049830268759536' />
	<circle cx='558.5454545454545' cy='279.27272727272725' r='25.172391953462686' />
	<circle cx='628.3636363636363' cy='279.27272727272725' r='22.39461417568491' />
	<circle cx='698.1818181818181' cy='279.27272727272725' r='19.616836397907132' />
	<circle cx='69.81818181818181' cy='349.09090909090907' r='8.720606594239989' />
	<circle cx='139.63636363636363' cy='349.09090909090907' r='11.498384372017767' />
	<circle cx='209.45454545454544' cy='349.09090909090907' r='14.276162149795544' />
	<circle cx='279.27272727272725' cy='349.09090909090907' r='17.05393992757332' />
	<circle cx='349.09090909090907' cy='349.09090909090907' r='19.8317177053511' />
	<circle cx='418.9090909090909' cy='349.09090909090907' r='22.609495483128878' />
	<circle cx='488.7272727272727' cy='349.09090909090907' r='25.387273260906653' />
	<circle cx='558.5454545454545' cy='349.09090909090907' r='25.83494896131557' />
	<circle cx='628.3636363636363' cy='349.09090909090907' r='23.057171183537793' />
	<circle cx='698.1818181818181' cy='349.09090909090907' r='20.27939340576001' />
	<circle cx='69.81818181818181' cy='418.9090909090909' r='8.211593152132679' />
	<circle cx='139.63636363636363' cy='418.9090909090909' r='10.98937092991046' />
	<circle cx='209.45454545454544' cy='418.9090909090909' r='13.767148707688236' />
	<circle cx='279.27272727272725' cy='418.9090909090909' r='16.544926485466014' />
	<circle cx='349.09090909090907' cy='418.9090909090909' r='19.32270426324379' />
	<circle cx='418.9090909090909' cy='418.9090909090909' r='22.100482041021568' />
	<circle cx='488.7272727272727' cy='418.9090909090909' r='24.878259818799346' />
	<circle cx='558.5454545454545' cy='418.9090909090909' r='26.34396240342288' />
	<circle cx='628.3636363636363' cy='418.9090909090909' r='23.5661846256451' />
	<circle cx='698.1818181818181' cy='418.9090909090909' r='20.78840684786732' />
	<circle cx='69.81818181818181' cy='488.7272727272727' r='8.069766464869815' />
	<circle cx='139.63636363636363' cy='488.7272727272727' r='10.84754424264759' />
	<circle cx='209.45454545454544' cy='488.7272727272727' r='13.625322020425365' />
	<circle cx='279.27272727272725' cy='488.7272727272727' r='16.403099798203144' />
	<circle cx='349.09090909090907' cy='488.7272727272727' r='19.180877575980922' />
	<circle cx='418.9090909090909' cy='488.7272727272727' r='21.9586553537587' />
	<circle cx='488.7272727272727' cy='488.7272727272727' r='24.736433131536476' />
	<circle cx='558.5454545454545' cy='488.7272727272727' r='26.485789090685746' />
	<circle cx='628.3636363636363' cy='488.7272727272727' r='23.70801131290797' />
	<circle cx='698.1818181818181' cy='488.7272727272727' r='20.930233535130192' />
	<circle cx='69.81818181818181' cy='558.5454545454545' r='8.508769721550266' />
	<circle cx='139.63636363636363' cy='558.5454545454545' r='11.286547499328046' />
	<circle cx='209.45454545454544' cy='558.5454545454545' r='14.064325277105823' />
	<circle cx='279.27272727272725' cy='558.5454545454545' r='16.8421030548836' />
	<circle cx='349.09090909090907' cy='558.5454545454545' r='19.619880832661377' />
	<circle cx='418.9090909090909' cy='558.5454545454545' r='22.397658610439155' />
	<circle cx='488.7272727272727' cy='558.5454545454545' r='25.175436388216934' />
	<circle cx='558.5454545454545' cy='558.5454545454545' r='26.04678583400529' />
	<circle cx='628.3636363636363' cy='558.5454545454545' r='23.269008056227513' />
	<circle cx='698.1818181818181' cy='558.5454545454545' r='20.491230278449734' />
	<circle cx='69.81818181818181' cy='628.3636363636363' r='9.742246111272944' />
	<circle cx='139.63636363636363' cy='628.3636363636363' r='12.52002388905072' />
	<circle cx='209.45454545454544' cy='628.3636363636363' r='15.297801666828498' />
	<circle cx='279.27272727272725' cy='628.3636363636363' r='18.075579444606277' />
	<circle cx='349.09090909090907' cy='628.3636363636363' r='20.853357222384055' />
	<circle cx='418.9090909090909' cy='628.3636363636363' r='23.63113500016183' />
	<circle cx='488.7272727272727' cy='628.3636363636363' r='26.40891277793961' />
	<circle cx='558.5454545454545' cy='628.3636363636363' r='24.813309444282613' />
	<circle cx='628.3636363636363' cy='628.3636363636363' r='22.035531666504838' />
	<circle cx='698.1818181818181' cy='628.3636363636363' r='19.25775388872706' />
	<circle cx='69.81818181818181' cy='698.1818181818181' r='11.9838388231367' />
	<circle cx='139.63636363636363' cy='698.1818181818181' r='14.761616600914477' />
	<circle cx='209.45454545454544' cy='698.1818181818181' r='17.539394378692254' />
	<circle cx='279.27272727272725' cy='698.1818181818181' r='20.317172156470033' />
	<circle cx='349.09090909090907' cy='698.1818181818181' r='23.09494993424781' />
	<circle cx='418.9090909090909' cy='698.1818181818181' r='25.872727712025586' />
	<circle cx='488.7272727272727' cy='698.1818181818181' r='25.349494510196635' />
	<circle cx='558.5454545454545' cy='698.1818181818181' r='22.571716732418857' />
	<circle cx='628.3636363636363' cy='698.1818181818181' r='19.79393895464108' />
	<circle cx='698.1818181818181' cy='698.1818181818181' r='17.0161611768633' />
</svg>;

export const searchIcon = <svg xmlns='http://www.w3.org/2000/svg' fill='#000000' width='20px' height='20px' viewBox='0 0 24 24' ><path fillRule='evenodd' d='M16.3198574,14.9056439 L21.7071068,20.2928932 L20.2928932,21.7071068 L14.9056439,16.3198574 C13.5509601,17.3729184 11.8487115,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,11.8487115 17.3729184,13.5509601 16.3198574,14.9056439 Z M10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 Z' />
</svg>;

export const blockIcon = <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"><path d="m5 126.3c0 55.2 44.5 100.4 99.7 100.4v-200.7c-55.2 0-99.7 44.8-99.7 100.3z" />
	<path d="m150.3 126.3c0 55.2 44.6 100.4 99.7 100.4v-200.7c-54.8 0-99.7 44.8-99.7 100.3z" />
	<path d="m395.3 226.7c-55.1 0-99.6-44.9-99.6-100.4 0-55.5 44.5-100.3 99.6-100.3 55.1 0 99.7 44.8 99.7 100.3 0 55.5-44.6 100.4-99.7 100.4z" /><path d="m5 374.1c0 55.5 44.5 100.3 99.7 100.3v-200.4c-55.2 0-99.7 44.9-99.7 100.1z" /><path d="m150.3 373.2c0 55.3 44.6 100.4 99.7 100.4v-200.4c-54.8 0-99.7 44.8-99.7 100z" /><path d="m395.3 473.6c-55.1 0-99.6-44.9-99.6-100.4 0-55.4 44.5-100.3 99.6-100.3 55.1 0 99.7 44.9 99.7 100.3 0 55.5-44.6 100.4-99.7 100.4z" />
</svg>;

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;