import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export default function save({attributes}) {
	const {desktopHide, tabletHide, mobileHide, sliderBGColor, sliderId, sliderAlignment, logoPosition, enableTitle, sliderTitle, sliderTitleColor, titleTag, sliderLogoImage, enableDescription, sliderDescription, sliderDesColor, descriptionTag, sliderMargin, sliderPadding, enableNavigationArrows, enablePaginationDots, sliderBorder, sliderBorderStyle, sliderBorderColor } = attributes;

	const swiperJson = JSON.stringify(attributes);

	return (
		<>
		<div { ...useBlockProps.save({
			style: { borderTop: `${sliderBorder.top} ${sliderBorderStyle} ${sliderBorderColor}`, borderBottom: `${sliderBorder.bottom} ${sliderBorderStyle} ${sliderBorderColor}`, borderRight: `${sliderBorder.right} ${sliderBorderStyle} ${sliderBorderColor}`, borderLeft: `${sliderBorder.left} ${sliderBorderStyle} ${sliderBorderColor}`}
		}) }>
			<div className={`mrs-logo-carousel-wrapper ${desktopHide ? 'hide-desktop' : ''}${tabletHide ? ' hide-tablet' : ''}${mobileHide ? ' hide-mobile' : ''}`} style={{background: sliderBGColor}} >

				<div className={'mrs-logo-carousel'} style={{marginTop: `${sliderMargin.top}`, marginBottom: `${sliderMargin.bottom}`, marginLeft: `${sliderMargin.left}`, marginRight: `${sliderMargin.right}`, paddingTop: `${sliderPadding.top}`, paddingBottom: `${sliderPadding.bottom}`, paddingRight: `${sliderPadding.right}`, paddingLeft: `${sliderPadding.left}`}}>

					<div className="swiper mrsSwiper">
						<div className="swiper-wrapper">
						{sliderId?.map((slideId, i)=>(

							<div className="swiper-slide">								
								<div key={i} className={'mrs-logo-carousel-swiper-slider-content-wrapper'}  style={{textAlign: sliderAlignment}}>

								{/** Above Title */}
								{logoPosition === 'above' && enableTitle && sliderTitle?.map((slide, i) => {
									if( parseInt( slide.id ) === parseInt(slideId.id) ){
										return(
											<div className='mrs-logo-carousel-swiper-slider-title'>
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
												<div className={'mrs-logo-carousel-swiper-slider-image'}>
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
											<div className='mrs-logo-carousel-swiper-slider-title'>
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
											<div className='mrs-logo-carousel-slide-des'  style={{ color: sliderDesColor}}>
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
		<div class='mrs-logo-carousel-data-attributes' data-attributes={swiperJson}></div>
		</>
	);
}
