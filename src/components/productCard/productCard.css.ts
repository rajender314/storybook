import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiproductCardlass = (props: ThemeContextType) => css`
  flex: 0 0 25%;
  max-width: 100%;
  background: ${props.white};
  border: 2px solid ${props.primaryColor};
  border-radius: 4px;
  .image{
    display:block;
    text-align: center;
    box-sizing: border-box;
    img{
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
      height: auto;
    }
    a{
      display: flex;
      cursor: pointer;
    }
  }
  .caption {
      padding: 0 20px;
      min-height: 180px;
  }
  .button-group{
    border-top: 1px solid ${props.primaryColor};
    display: flex;
    

    button{
      width: 100%;
      border-radius:0px !important;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: ${props.primaryHoverBG};
      }
    }

    .button-add-to-cart{
      width:60%;
      button{
        border:none;
      }
    }
    .button-add-to-wishlist, .button-compare{
      width: 20%;
      border-left: 1px solid ${props.white} !important;
    }

    button:not(:disabled), [type="button"]:not(:disabled){
      cursor: pointer;
    }
  }

`
