import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiFileUploader = (props: ThemeContextType) => css`
    width: 100%;
    
    .container{
      width:100%;
      
    }
    background-color: ${props.white};
    .upload-container{
      width: 100%;
      border: 1px dashed ${props.tabBorder} ;
      padding:10px;
      min-height:30px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 163px;
      background-color: #F9FBFF;
      flex-direction: column;
    }
    .drag-container{
      width: 100%;
      border: 2px dashed ${props.tabBorder};
      padding:10px;
      min-height:30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .disabled{
      opacity:0.3;
      cursor:not-allowed
    }
    .error{
      color:${props.error}
    }
    .files-list{
      list-style: none;
      padding: 0px;
      margin: 0px;
      li{
        margin:5px 0px;
      }
    }
    .drop-container {
       height: 163px;
       display: flex;
       align-items: center;
    justify-content: center;
    }

}
  
`
