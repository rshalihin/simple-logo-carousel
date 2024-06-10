import { cssString } from "./controls/controls";

const dynamicCss = (attributes) => {
    const { uniqueId, titleTag, sliderBorder, sliderBorderStyle, sliderBorderColor, sliderBGColor, sliderMargin, sliderPadding, singleSlideBorder, singleSlideMargin, singleSlidePadding, singleSlideBorderStyle, singleSlideBorderColor, paginationDotColor, navigationArrowColor, navigationArrowSize, contentAlignment } = attributes;

    let desktopCss = {
        [`.sndr-logo-carousel-${uniqueId} .sndr-logo-carousel-wrapper .sndr-logo-carousel .swiper`] : {
            'width': '100%',
            'height': '100%'
        },
        [`.sndr-logo-carousel-${uniqueId} .swiper-wrapper .swiper-slide`] : {
            'text-align' : 'center',
            'display' : 'flex',
            'justify-content' : 'center',
            'align-items' : 'center'
        },
        [`.sndr-logo-carousel-${uniqueId} .swiper-slide .sndr-logo-carousel-swiper-slider-content-wrapper`] : {
            'margin-bottom' : '30px'
        },
        [`.sndr-logo-carousel-${uniqueId} .sndr-logo-carousel-swiper-slider-image img`] : {
            'display' : 'block',
            'width' : '100%',
            'height' : '100%',
            'object-fit' : 'cover'
        },
        [`.sndr-logo-carousel-${uniqueId} .sndr-logo-carousel-swiper-slider-content-wrapper .sndr-logo-carousel-swiper-slider-title ${titleTag}`] : {
            'margin' : '30px 0 5px'
        },
        [`.sndr-logo-carousel-${uniqueId} .sndr-logo-carousel-swiper-slider-content-wrapper .sndr-logo-carousel-slide-des`] : {
            'margin' : '0 0 20px'
        },
        [`.sndr-logo-carousel-${uniqueId} .swiper`] : {
            'margin-left' : 'auto',
            'margin-right' : 'auto'
        },
        [`.sndr-logo-carousel-${uniqueId}`] : {
            'background' : sliderBGColor,
            'border-top' : `${sliderBorder.top} ${sliderBorderStyle} ${sliderBorderColor}`,
            'border-bottom' : `${sliderBorder.bottom} ${sliderBorderStyle} ${sliderBorderColor}`,
            'border-right' : `${sliderBorder.right} ${sliderBorderStyle} ${sliderBorderColor}`,
            'border-left' : `${sliderBorder.left} ${sliderBorderStyle} ${sliderBorderColor}`
        },
        [`.sndr-logo-carousel-${uniqueId} .sndr-logo-carousel-wrapper .sndr-logo-carousel`] : {
            'margin-top' : sliderMargin.top,
            'margin-bottom' : sliderMargin.bottom,
            'margin-left' : sliderMargin.left,
            'margin-right' : sliderMargin.right,
            'padding-top' : sliderPadding.top,
            'padding-bottom' : sliderPadding.bottom,
            'padding-right' : sliderPadding.right,
            'padding-left' : sliderPadding.left
        },
        [`.sndr-logo-carousel-${uniqueId} .swiper-wrapper .swiper-slide .sndr-logo-carousel-swiper-slider-content-wrapper`] : {
            'background': sliderBGColor,
            'border-top' : `${singleSlideBorder.top} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
            'border-bottom' : `${singleSlideBorder.bottom} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
            'border-left' : `${singleSlideBorder.left} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
            'border-right' : `${singleSlideBorder.right} ${singleSlideBorderStyle} ${singleSlideBorderColor}`,
            'margin-top' : singleSlideMargin.top,
            'margin-bottom' : singleSlideMargin.bottom,
            'margin-left' : singleSlideMargin.left,
            'margin-right' : singleSlideMargin.right,
            'padding-top' : singleSlidePadding.top,
            'padding-bottom' : singleSlidePadding.bottom,
            'padding-right' : singleSlidePadding.right,
            'padding-left' : singleSlidePadding.left
        },
        [`.sndr-logo-carousel-${uniqueId} .swiper-pagination .swiper-pagination-bullet`] : {
            'background-color': paginationDotColor
        },
        [`.sndr-logo-carousel-${uniqueId} .swiper-button-prev::after, .sndr-logo-carousel-${uniqueId} .swiper-button-next::after`] : {
            'color' : navigationArrowColor,
            'font-size' : navigationArrowSize + 'px'
        },
        [`.sndr-logo-carousel-${uniqueId} .sndrSwiper .swiper-wrapper`] : {
            'align-items' : contentAlignment
        }
    };


    desktopCss = cssString(desktopCss);
    const styles = `${desktopCss}`;
    return styles;
    
}

export default dynamicCss;