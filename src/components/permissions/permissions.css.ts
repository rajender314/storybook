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

  div[role="radiogroup"]{
    display:flex;
  }
  .pipermission-wrapper {}
   .toggle-button{
    div[role="radiogroup"]{
      display:flex;
      gap: 6px;
      label{
        position:relative;
        span{
          background: #ffffff;
          padding: 4px 12px;
          color: ${props.primaryBG};
          font-weight: 500;
          cursor: pointer;
          border-radius: 4px;
          border: 2px solid ${props.primaryBG};

           font-family: Inter;
    font-style: normal;
    font-size: 14px;
        }
        input{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          opacity:0;
          z-index:-1;
        }
        /*&:not(:last-child){
          margin-right: 2px;
        }*/
        input[type="radio"]:checked + span{
          background-color: ${props.primaryBG};
          color: ${props.white};
        }
        /*&:first-child span{
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child span{
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }*/
      }
      
    }
  }
  .permission-outer-border {
        border: 1px solid #E3EAF6;
        border-radius: 4px;
  }
  .role-parent-title {
    padding: 20px 0px;
    font-size: 20px;
    font-weight: 600;
  }
  
  .select-box{
    min-width:190px;
    margin-top:4px;
    div:nth-child(2) {
      /*height:30px;*/
      
    }
  }
  
}
`
