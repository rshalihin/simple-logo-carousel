import { __ } from '@wordpress/i18n';
import { RichText, MediaPlaceholder } from '@wordpress/block-editor';

const RSSlider = ({ dataId, attributes, setAttributes}) => {

    const { sliderId, enableTitle, sliderTitle, enableDescription, sliderDescription, titleTag, descriptionTag, sliderLogoImage, logoPosition, sliderTitleColor, sliderDesColor, sliderAlignment } = attributes;
    const onChangeLogoTitle = ( id, newTitle) => {
      const updateArray =   sliderTitle.map((item)=>{
            if(parseInt(item.id) === parseInt(id)) {
                return {...item, title: newTitle}
            }
            return item;
        })
        setAttributes({sliderTitle: updateArray});
    }
    const onChangeLogoDescription = (id, newDes) => {
        const updateDesArray = sliderDescription?.map((item) => {
            if(parseInt(item.id) === parseInt(id)) {
                return {...item, description: newDes}
            }
            return item;
        })
        setAttributes({sliderDescription: updateDesArray});
    }
    const onSelectImage =(media, id) => {

        const updateSlideImage = sliderLogoImage?.map((item)=>{
            if(parseInt(item.id) === parseInt(id)){
                return {...item, url: media.url, imgId: media.id, alt: media.alt}
            }
            return item;
        })
        setAttributes({ sliderLogoImage: updateSlideImage })
    }
    const onSelectImageURL = (media) => {
    
    }
    return (
        <div className={'mrs-logo-carousel-swiper-slider-content-wrapper'}  style={{textAlign: sliderAlignment}}>

            {logoPosition === 'above' && enableTitle && sliderTitle?.map((slide, i) => {
                if( parseInt( slide.id ) === parseInt(dataId) ){
                    return(
                        <div className='mrs-logo-carousel-swiper-slider-title'>
                            <RichText 
                                tagName={titleTag}
                                style={{ color: sliderTitleColor}}
                                placeholder={__('Logo Title', 'mrs-logo-slider')}
                                value={slide.title}
                                onChange={(value) =>onChangeLogoTitle(slide.id, value)}
                            />
                        </div>
                    )
                }
            })}

            {sliderLogoImage?.map((item, i) => {
                if( parseInt( item.id ) === parseInt(dataId) ){
                    if( !item.url ){
                        return(
                            <div className={'mrs-logo-carousel-swiper-slider-image'}>
                                <MediaPlaceholder
                                    icon={"admin-users"}
                                    allowedTypes={['image']}
                                    accept='image/*'
                                    onSelect={(data) => onSelectImage(data ,dataId)}
                                    onSelectURL={onSelectImageURL}
                                    disableMediaButtons={item.url}
                                />
                            </div>
                        )
                    }else{
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
            {logoPosition === 'below' && enableTitle && sliderTitle?.map((slide, i) => {
                if( parseInt( slide.id ) === parseInt(dataId) ){
                    return(
                        <div className='mrs-logo-carousel-swiper-slider-title'>
                            <RichText 
                                tagName={titleTag}
                                style={{ color: sliderTitleColor}}
                                placeholder={__('Logo Title', 'mrs-logo-slider')}
                                value={slide.title}
                                onChange={(value) =>onChangeLogoTitle(slide.id, value)}
                            />
                        </div>
                    )
                }
            })}

            { enableDescription && sliderDescription?.map((item, i) => {
                if( parseInt( item.id ) === parseInt(dataId) ){
                    return(
                        <div className='mrs-logo-carousel-slide-des'  style={{ color: sliderDesColor}}>
                            <RichText 
                                tagName={descriptionTag}
                                placeholder={__('Logo Description', 'mrs-logo-slider')}
                                value={item.description}
                                onChange={(value) =>onChangeLogoDescription(item.id, value)}
                            />
                        </div>
                    )
                }
            })}
            
        </div>
    )
}

export default RSSlider;