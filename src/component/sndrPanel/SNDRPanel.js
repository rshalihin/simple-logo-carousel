import { __ } from '@wordpress/i18n';
import { PanelBody, Button, __experimentalDivider as Divider, TextControl, TextareaControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import './sndrPanel.scss';

const sndrPanel = ({title, open, data='', attributes, setAttributes,}) => {
    const {sliderId, sliderTitle, sliderDescription, sliderLogoImage} = attributes;
    const deleteSlide = (data) => {
        const updateSliderId = sliderId.slice(parseInt(data));
        const updateSliderTitle = sliderTitle.slice(parseInt(data));
        const updateSliderDescription = sliderDescription.slice(parseInt(data));
        const updateSliderLogoImage = sliderLogoImage.slice(parseInt(data));
        setAttributes({sliderId: [...updateSliderId]})
        setAttributes({sliderTitle: [...updateSliderTitle]})
        setAttributes({sliderDescription: [...updateSliderDescription]})
        setAttributes({sliderLogoImage: [...updateSliderLogoImage]})
    }
    const LogoBackgroundImage = (data) => {
        const newData = sliderLogoImage.find((item) => ( parseInt(item.id) === parseInt(data) ))
        return newData.url;
    }
    const deleteSlideLogoImage = (data) => {
        const newData = sliderLogoImage.map((item) => {
            if (parseInt(item.id) === parseInt(data)) {
                return {...item, "imgId": "", "url": "", "alt": "" }
            }
            return item;
        })
        setAttributes({sliderLogoImage: newData})
    }
    const onClickImageChange = (media, data) => {
        const newImageData = sliderLogoImage.map((item) => {
            if (parseInt(item.id) === parseInt(data)) {
                return {...item, "imgId": media.id, "url": media.url, "alt": media.alt }
            }
            return item;
        })
        setAttributes({sliderLogoImage: newImageData})
    }
    const onChangeLogoTitles = ( id, newTitle) => {
        const updateArray =   sliderTitle.map((item)=>{
              if(parseInt(item.id) === parseInt(id)) {
                  return {...item, title: newTitle}
              }
              return item;
          })
          setAttributes({sliderTitle: updateArray});
      }
    const onChangeLogoDescription = (id, newDes) => {
        const updateDesArray = sliderDescription?.map(item => {
            if(parseInt(item.id) === parseInt(id)) {
                return {...item, description: newDes};
            }
            return item;
        })
        setAttributes({sliderDescription: updateDesArray});
    }

    return(
        <>
        <div className='sndr-logo-carousel-single-slide-sidebar-tab'>
            <PanelBody title={title} initialOpen={open}>
                <div className={'sndr-logo-carousel-single-slide-sidebar-tab-content'}>
                    <div>
                        <label>Image</label>
                        <div className='sndr-media-control__wrapper' style={{backgroundImage: `url("${LogoBackgroundImage(data)}")`, backgroundPosition: 'center', backgroundSize: 'contain', marginTop: '10px'}}>
                            <div className='sndr-media-control__footer'>
                                <MediaUpload
                                    onSelect={ ( media ) =>
                                        onClickImageChange(media, data)
                                    }
                                    allowedTypes={ ['image'] }
                                    render={ ( { open } ) => (
                                        <Button onClick={ open } style={{width: '100%', justifyContent: 'center'}}>Change Image</Button>
                                    ) }
                                />
                                </div>
                            <div className='sndr-media-control__clickable'>
                                <Button className='sndr-media-control__button--close' icon='no' onClick={()=>(deleteSlideLogoImage(data))}></Button>
                                </div>
                        </div>
                    </div>  
                    <Divider />
                    <TextControl
                        label={__('Title', 'sndr-logo-carousel')}
                        value={sliderTitle?.find(t=> t.id === data).title}
                        placeholder={__('Logo Title', 'sndr-logo-carousel')}
                        onChange={(newTitle)=>{onChangeLogoTitles(data, newTitle)}}
                    />
                    <Divider />
                    <TextareaControl
                        label={__('Description', 'sndr-logo-carousel')}
                        placeholder={__('Logo Description', 'sndr-logo-carousel')}
                        value={sliderDescription?.find(t => t.id === data ).description}
                        onChange={(newDes) => {onChangeLogoDescription(data, newDes)}}
                    />
                </div>
            </PanelBody>
            <Button icon="no" className='sndr-logo-carousel-single-slide-sidebar-tab-close-button' onClick={()=>deleteSlide(data)}></Button>
        </div>
        </>
    )
}

export default sndrPanel;