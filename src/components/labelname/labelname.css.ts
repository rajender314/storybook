import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiLabelNameClass = (props: ThemeContextType) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  .label-text-div {
    display: flex;
    gap: 16px;
    align-items: center;
     .pi-label-edit-icon {
    width: 12px;
    height: 12px;
    display: flex;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease;
  }
  &:hover {
    .pi-label-edit-icon {
      opacity: 1;
      visibility: visible;
    }
  }
  }
  .label-text{
    color: ${props.labelColor};
    margin: 4px 0px;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding-left: 6px !important;
    font-weight: 700;
    font-size: 14px;
    font-family: Inter;
    color: #4e586d;
    /*.pi-label-edit-icon {
          padding: 10px 10px;

    }*/
    
  }


  .description-container {
    display: flex;
    align-items: center;
    gap: 12px;
    .copy-icon {
      opacity:0;
      visibility: visible;
      cursor: pointer;
    }
    .description{
      color: ${props.lablelDescription};
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
      font-family: Inter;
      padding-left: 6px;
      margin: 0;
      }
    }
    &:hover {
      .copy-icon {
        opacity:1;
        visibility: visible;
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }
   
  }
}
`
