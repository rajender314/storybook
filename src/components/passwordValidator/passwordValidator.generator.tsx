import React, { useContext, useEffect } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiPasswordValidatorProps } from './passwordValidator'
import PiThemeContext from '../../themeContext'
import { PiPasswordValidator } from './passwordValidator.css'
import { PiCheckinIcon } from '../icon/checin.icon'

/**
 *
 * @param props as  PiPasswordValidatorProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generatefileUploaderComponentTemplate({
  libraryType,
  ...props
}: PiPasswordValidatorProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiPasswordValidatorProps
 * @returns Atlaskit ID template
 */
function AtlasKitTemplate({ ...props }: PiPasswordValidatorProps) {
  const theme = useContext(PiThemeContext)

  // const [confPass, setShowConfPass] = useState(false)
  // const [specialCharValid, setSpecialCharValid] = React.useState(false);
  const [uppercaseValid, setUppercaseValid] = React.useState(false);
  const [charNumberValid, setCharNumberValid] = React.useState(false);
  const [numberValid, setNumberValid] = React.useState(false);
  const [lowerCharValid, setLowerCharValid] = React.useState(false);

  // const checkSpecialCharacters = (props: PiPasswordValidatorProps) => {
    let password = props.password;
    // const SpecailCharPattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    // if (SpecailCharPattern.test(password)) {
    //   setSpecialCharValid(true)
    // } else {
    //   setSpecialCharValid(false)
    // }
    useEffect(() => {
  

    const upperCasePattern = /[A-Z]/;
    if (upperCasePattern.test(password)) {
      setUppercaseValid(true)
    } else {
      setUppercaseValid(false)
    }
    if (password.length >= 8) {
      setCharNumberValid(true)
    } else {
      setCharNumberValid(false)
    }
    const NumberPattern = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if (NumberPattern.test(password)) {
      setNumberValid(true)
    } else {
      setNumberValid(false)
    }
    const lowerCasePattern = /[a-z]/;
    if (lowerCasePattern.test(password)) {
      setLowerCharValid(true)
    } else {
      setLowerCharValid(false)
    }
  })
  // }
  
  // checkSpecialCharacters(props);



  return (
    <div className={PiPasswordValidator(theme)}>
        <p className={charNumberValid ? "valid " : "not-valid "} >
          <PiCheckinIcon />
          <span className="text-styles">At least 8 characters long </span>
        </p >
        <p className={lowerCharValid ? "valid " : "not-valid "}>
          <PiCheckinIcon />
          <span className="text-styles">One lowercase character</span>
        </p >
        <p className={uppercaseValid ? "valid " : "not-valid "}>
          <PiCheckinIcon />
          <span className="text-styles">One uppercase character</span>
        </p >
        <p className={numberValid ? "valid " : "not-valid "}>
          <PiCheckinIcon />
          <span className="text-styles">One number, symbol</span>
        </p >
    </div>
  )
}

/**
 *
 * @param props as  PiProfileSectionProps
 * @returns Default Profile Section  template
 */
function DefaultTemplate() {
  return (
    <div></div>
  )
}
