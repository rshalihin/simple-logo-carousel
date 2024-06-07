import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export default function save({attributes}) {
	const {desktopHide, tabletHide, mobileHide, sliderId, sliderAlignment, logoPosition, enableTitle, sliderTitle, sliderTitleColor, titleTag, sliderLogoImage, enableDescription, sliderDescription, sliderDesColor, descriptionTag, enableNavigationArrows, enablePaginationDots, frontendCss, uniqueId, slidePerView, slideSpaceBetween, infiniteLoop, autoPlaySpeed } = attributes;

	const swiperVariable = { slidePerView, slideSpaceBetween, infiniteLoop, autoPlaySpeed};

	const swiperJson = JSON.stringify(swiperVariable);
	const css = frontendCss?.substring(1, frontendCss.length - 1);

	return (
		<>
		<style>{css}</style>
		<div { ...useBlockProps.save({
			className: `sndr-logo-carousel-${uniqueId}`
		}) }>
			<div className={`sndr-logo-carousel-wrapper ${desktopHide ? 'hide-desktop' : ''}${tabletHide ? ' hide-tablet' : ''}${mobileHide ? ' hide-mobile' : ''}`}>

				<div className={'sndr-logo-carousel'}>

					<div className="swiper sndrSwiper">
						<div className="swiper-wrapper">
						{sliderId?.map((slideId, i)=>(

							<div className="swiper-slide">
								<div key={i} className={'sndr-logo-carousel-swiper-slider-content-wrapper'}  style={{textAlign: sliderAlignment}}>

								{/** Above Title */}
								{logoPosition === 'above' && enableTitle && sliderTitle?.map((slide, i) => {
									if( parseInt( slide.id ) === parseInt(slideId.id) ){
										return(
											<div className='sndr-logo-carousel-swiper-slider-title'>
												<RichText.Content
													tagName={titleTag}
													style={{ color: sliderTitleColor}}
													value={slide.title}
												/>
											</div>
										)
									}
								})}

								{/** Logo image */}
								{sliderLogoImage?.map((item, i) => {
									if( parseInt( item.id ) === parseInt(slideId.id) ){
										if( item.url ) {
											return(
												<div className={'sndr-logo-carousel-swiper-slider-image'}>
													<img 
														src={item.url} 
														alt={item.alt}
														className={`wp-image-${item.id}`}
													/>
												</div>
											)
										}
									}
								})}

								{/** Below Title */}
								{logoPosition === 'below' &&  enableTitle && sliderTitle?.map((slide, i) => {
									if( parseInt( slide.id ) === parseInt(slideId.id) ){
										return(
											<div className='sndr-logo-carousel-swiper-slider-title'>
												<RichText.Content
													tagName={titleTag}
													style={{ color: sliderTitleColor}}
													value={slide.title}
												/>
											</div>
										)
									}
								})}

								{/** Logo Description */}
								{ enableDescription && sliderDescription?.map((item, i) => {
									if( parseInt( item.id ) === parseInt(slideId.id) ){
										return(
											<div className='sndr-logo-carousel-slide-des'  style={{ color: sliderDesColor}}>
												<RichText.Content
													tagName={descriptionTag}
													value={item.description}
												/>
											</div>
										)
									}
								})}

								</div>
							</div>
						))}
						</div>
						{enableNavigationArrows && (
							<>
							<style></style>
							<div class="swiper-button-next" style={{right: '0'}}></div>
							<div class="swiper-button-prev" style={{left: '0'}}></div>
							</>
						)}
						{enablePaginationDots && (
							<div class="swiper-pagination"></div>
						)}
						
					</div>
				</div>				
			</div>
		</div>
		<div class='sndr-logo-carousel-data-attributes' data-attributes={swiperJson}></div>
		</>
	);
}
