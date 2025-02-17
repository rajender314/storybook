import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiProductCardProps } from './productCard'
import PiThemeContext from '../../themeContext'
import { PiproductCardlass } from './productCard.css'
import PiButton from '../button'
import PiTooltip from '../tooltip'
import PiTypography from '../typography'
import { PiAddToCartIcon } from '../icon/addtocart.icon'
import { PiAddToWishListIcon } from '../icon/addtowishlist.icon'
import { PiCompareIcon } from '../icon/compare.icon'

/**
 *
 * @param props as  PiProductCardProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateProductCardTemplate({
  libraryType,
  ...props
}: PiProductCardProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
    
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiProductCardProps
 * @returns Avatar template
 */
function AtlasKitTemplate(props:PiProductCardProps) {
  const theme = useContext(PiThemeContext)
  const defaultProps = generateDefaultProps({ ...props })
  return (
    <div className={PiproductCardlass(theme)}>
      <div className="product-thumb transition">
        <div className="image">
          <a onClick={function noRefCheck(){}} ><img src={defaultProps.src} alt="" title="" className="img-fluid" /></a>
        </div>
        <div className="caption">
          
          <PiButton
            appearance="link"
            isDisabled={props.isDisabled}
            size="large"
            label={defaultProps.name}
            libraryType="atalskit"
            onClick={function noRefCheck(){}}
          />

          <PiTypography component="p">{defaultProps.description}</PiTypography>
         </div>
        <div className="button-group">
        
          <div className="button-add-to-cart">
            <PiTooltip
              content={defaultProps.button_lable}
              libraryType="atalskit"
              position="top"
            >
              <PiButton
                appearance="primary"
                label={defaultProps.button_lable}
                libraryType="atalskit"
                onClick={props.onAddToCartHandler}
                size="medium"
                type="button"
                iconBefore={  <PiAddToCartIcon/>}
                isDisabled={props.isDisabled}
              />
            </PiTooltip>
          </div>

          <div className="button-add-to-wishlist">
            <PiTooltip
              content="Add to Wish List"
              libraryType="atalskit"
              position="top"
            >  
              <PiButton
                appearance="primary"
                label=""
                libraryType="atalskit"
                onClick={props.onAddToWishListHandler}
                size="medium"
                type="button"
                iconBefore={  <PiAddToWishListIcon/>}
                isDisabled={props.isDisabled}
              />
            </PiTooltip>
          </div>

          <div className="button-compare">
            <PiTooltip
              content="Compare this Product"
              libraryType="atalskit"
              position="top"
            >   
              <PiButton
                appearance="primary"
                label=""
                libraryType="atalskit"
                onClick={props.onCompareHandler}
                size="medium"
                type="button"
                iconBefore={ <PiCompareIcon />}
                isDisabled={props.isDisabled}
              />
              </PiTooltip>
          </div>
        </div>
    </div>
</div>
  )
}

/**
 *
 * @param props as  PiProductCardProps
 * @returns Default Avatar template
 */
function defaultTemplate() {
  return <div></div>
}


/**
 *
 * @param props as  PiButtonProps
 * @returns props suitable for default template after conversion
 */
 function generateDefaultProps(props: PiProductCardProps) {
  const defaultProps = {
    name: props.name,
    src: props.src,
    description: props.description,
    button_lable: props.button_lable
  }
  return defaultProps
}
