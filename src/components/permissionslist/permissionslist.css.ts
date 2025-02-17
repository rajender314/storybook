import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiPermissionsClass = (props: ThemeContextType) => css`
  
  .header{
    display: flex;
    align-items:center;
    justify-content: space-between;
    height: 48px;
    padding: 0 10px;
    
    margin-bottom:3px;
    h2{
      font-weight: 600;
      font-size: 24px;
      color: ${props.lablelDescription}
      line-height:36px;
    }
    
  }

  .permissions-box{
    /*border: 1px solid ${props.primaryColor};*/
    box-sizing: border-box;
    border-radius: 4px;
    color: ${props.lablelDescription};
    font-size: 14px;
    margin-bottom:3px;
    

    .permission{
      display: flex;
      align-items:center;
      justify-content: space-between;
      height: 48px;
      padding: 0 10px;
      /*background: ${props.primaryDisabledBG};*/
      border-bottom: 1px solid #F2F7FF;
          font-weight: 600;
    }
  
    .child-permissions{
        display: flex;
        align-items:center;
        justify-content: space-between;
        height: 48px;
        margin: 0 40px 0 40px;
        background: ${props.white};
        color: ${props.lablelDescription};
        border-bottom: 1px solid ${props.primaryColor};
        &:last-child {
          border: none;
        }
    }
    

    
  }

  .element{
    display: inline-flex;
    button{
      margin-left:6px;
    }
  }

  
}
`
