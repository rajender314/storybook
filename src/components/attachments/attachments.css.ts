import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiAttachmentClass = (props: ThemeContextType) => css`
  width: 100%;
  position: relative;
  display: flex;
  .main-container {
    width: 130px;
    height: 170px;
    background: ${props.attachmentBg};
    border: 1px solid #e3eaf6;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    padding-top: 5px;
    &:hover {
      .overlay {
      opacity: 0.8;
      }
    }
  }
  .image_Container {
    width: 120px;
    height: 120px;
    border-radius: 4px 4px 0px 0px;
    background-color: #fff;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

  }
  .icon-container {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .label {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .label-image {
    border-top: 2px solid #e3eaf6;
  }
  .overlay {
    position: absolute;
    width: 130px;
    top: 0;
    // height: 100%;
    background: rgba(9, 30, 66, 0.54);
    border: 1px solid rgba(9, 30, 66, 0.54);
    box-sizing: border-box;
    border-radius: 4px;
    opacity: 0;
    transition: 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 10px;

    // &:hover {
    //   opacity: 0.8;
    // }
  }
  .icon_class {
    margin-right: 20px;
  }
  .preview-model-container {
    height: 100%;
    background: red;
  }
  .Model-container {
  }
`
