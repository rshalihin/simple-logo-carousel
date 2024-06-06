import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { ToolbarButton } from '@wordpress/components';
import { select } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import Inspector from './Inspector';
import RSSlider from './RSSlider';

// import swiper 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import './editor.scss';

let firstTimeLoad = true;

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const { uniqueId, enableNavigationArrows, enablePaginationDots, slidePerView, slideSpaceBetween, infiniteLoop, autoPlay, pauseOn, autoPlaySpeed, sliderId, sliderAlignment, sliderTitle, sliderDescription, sliderLogoImage, sliderBGColor, desktopHide, tabletHide, mobileHide, sliderMargin, sliderPadding, sliderBorder, sliderBorderStyle, sliderBorderColor, singleSlideBorder, singleSlideBorderStyle, singleSlideBorderColor, singleSlideMargin, singleSlidePadding } = attributes;

	const [ onLoad, setOnLoad ] = useState(false);

	const { getBlock } = select('core/block-editor');

	const isBlockIdReserved = () => {
		const blocksClientIds = select('core/block-editor').getClientIdsWithDescendants();
		const allUniqueId = [];
		blocksClientIds.forEach((id) => {
			if('undefined' !== typeof getBlock(id).attributes.uniqueId) {
				allUniqueId.push(getBlock(id).attributes.uniqueId);
			}
		})
		const set = new Set();
		if(firstTimeLoad) {
			firstTimeLoad = false;
			for (const item of allUniqueId) {
				if (set.has(item)) {
					setOnLoad(true);
				}
				set.add(item);
			}
		}
	};

	useEffect(() => {
		firstTimeLoad = true;
		setOnLoad(false);
	}, [isSelected])

	useEffect(() => {
		setTimeout(() => {
			isBlockIdReserved();
		}, 500)

		if (! uniqueId || onLoad ) {
			setAttributes({
				uniqueId: clientId,
			});
			setOnLoad(false)
		}
	}, [onLoad]);
    
	const addSlideButtonClick = () => {
		setAttributes({sliderId: [...sliderId, {"id": (sliderId.length + 1).toString()}]});
		setAttributes({sliderTitle: [...sliderTitle, {"id": (sliderTitle.length + 1) .toString(), "title": ""}]});
		setAttributes({sliderDescription: [...sliderDescription, {"id": (sliderDescription.length + 1).toString(), "description": ""}]});
		setAttributes({sliderLogoImage: [...sliderLogoImage, {"id": (sliderLogoImage.length + 1).toString(), "imgId": "", "url": "", "alt": "" }]});
	}	

	return (
		<>
		<Inspector
			attributes={attributes}
			setAttributes={setAttributes}
			addSlide={addSlideButtonClick}
		/>
		<BlockControls>
			<AlignmentToolbar
				value={sliderAlignment}
				onChange={(newAlign) => setAttributes({sliderAlignment: newAlign})}
			/>
		</BlockControls>
		<BlockControls>
			<ToolbarButton
				onClick={()=>addSlideButtonClick()}
				icon="plus-alt"
				label={__('Add Slide', 'mrs-logo-carousel')}
			/>
		</BlockControls>
		<div { ...useBlockProps({
			style: { borderTop: `${sliderBorder.top} ${sliderBorderStyle} ${sliderBorderColor}`, borderBottom: `${sliderBorder.bottom} ${sliderBorderStyle} ${sliderBorderColor}`, borderRight: `${sliderBorder.right} ${sliderBorderStyle} ${sliderBorderColor}`, borderLeft: `${sliderBorder.left} ${sliderBorderStyle} ${sliderBorderColor}`}
		}) }>
			<div className={`mrs-logo-carousel-wrapper ${desktopHide ? 'hide-desktop' : ''}${tabletHide ? ' hide-tablet' : ''}${mobileHide ? ' hide-mobile' : ''}`} style={{background: sliderBGColor}}>

				<div className={'mrs-logo-carousel'} style={{marginTop: `${sliderMargin.top}`, marginBottom: `${sliderMargin.bottom}`, marginLeft: `${sliderMargin.left}`, marginRight: `${sliderMargin.right}`, paddingTop: `${sliderPadding.top}`, paddingBottom: `${sliderPadding.bottom}`, paddingRight: `${sliderPadding.right}`, paddingLeft: `${sliderPadding.left}`}}>

				<Swiper
					slidesPerView={slidePerView}
					spaceBetween={slideSpaceBetween}
					loop={infiniteLoop}
					autoplay={ autoPlay ? {
						delay: autoPlaySpeed,
						disableOnInteraction: ( pauseOn == 'Interaction' ) ? false : true,
						pauseOnMouseEnter: ( pauseOn == 'Hover' ) ? true : false,
					  } : false }
					pagination={ enablePaginationDots ? {
					clickable: true,
					} : false }
					navigation={enableNavigationArrows}
					modules={[Autoplay, Pagination, Navigation]}
					className="mrsSwiper"
				>
					{sliderId?.map((slideId, i)=>(
						<SwiperSlide  style={{background: sliderBGColor,
						borderTop: `${singleSlideBorder.top} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
						borderBottom: `${singleSlideBorder.bottom} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
						borderRight: `${singleSlideBorder.right} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
						borderLeft: `${singleSlideBorder.left} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
						marginTop: `${singleSlideMargin.top}`, marginBottom: `${singleSlideMargin.bottom}`, marginLeft: `${singleSlideMargin.left}`, marginRight: `${singleSlideMargin.right}`,
						paddingTop: `${singleSlidePadding.top}`, paddingBottom: `${singleSlidePadding.bottom}`, paddingRight: `${singleSlidePadding.right}`, paddingLeft: `${singleSlidePadding.left}`
						}}>
							<RSSlider key={i} dataId={slideId.id} attributes={attributes} setAttributes={setAttributes}>
							</RSSlider>
						</SwiperSlide>
					)) }
				</Swiper>
				</div>
			</div>
		</div>
		</>
	);
}
