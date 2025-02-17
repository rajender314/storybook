import React, { useContext, Fragment, useState, useEffect } from 'react';
import AtlasTextfield from '@atlaskit/textfield';
import { css, cx } from '@emotion/css';
import AtlasButton, { LoadingButton } from '@atlaskit/button';
import styled from '@emotion/styled';
import Tooltip, { TooltipPrimitive } from '@atlaskit/tooltip';
import { TimePicker, DateTimePicker, DatePicker } from '@atlaskit/datetime-picker';
import AtlasTextArea from '@atlaskit/textarea';
import AtlasSpinner from '@atlaskit/spinner';
import Select, { CheckboxSelect, CreatableSelect } from '@atlaskit/select';
import { RadioGroup } from '@atlaskit/radio';
import { Checkbox } from '@atlaskit/checkbox';
import AtlasAvatar from '@atlaskit/avatar';
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import Pagination from '@atlaskit/pagination';
import Toggle from '@atlaskit/toggle';
import AtlasBanner from '@atlaskit/banner';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import AtlasLozenge from '@atlaskit/lozenge';
import { ProgressIndicator } from '@atlaskit/progress-indicator';
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import InfoIcon from '@atlaskit/icon/glyph/info';
import { B300, Y200, R400, G400, N500 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import Flag from '@atlaskit/flag';
import SectionMessage from '@atlaskit/section-message';
import PageHeader from '@atlaskit/page-header';
import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';
import { useHistory } from 'react-router-dom';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import Modal, { ModalHeader, ModalTitle, ModalFooter, ModalBody, ModalTransition } from '@atlaskit/modal-dialog';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import useCopy from 'use-copy';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AccordionItemPanel, AccordionItemHeading, AccordionItemButton, AccordionItem, Accordion } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Drawer from '@atlaskit/drawer';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DatePicker$1 from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ATALASLIT_LIBRARY = 'atalskit';
class BaseProps {
  constructor() {
    this.libraryType = 'atalskit';
  }
}

class ThemeContextType {
  constructor() {
    this.primaryColor = '#D0DAEC';
    this.inputHoverBG = '#f2f7ff';
    this.inputHoverBorder = '#d0daec';
    this.white = '#ffffff';
    this.inputFocusBorder = '#124eb0';
    this.error = '#e36f69';
    this.success = '#00a67e';
    this.warning = '#A26A11';
    this.textColor = '#6D7992';
    this.infoBGColor = '#E3F2FD';
    this.infoColor = '#124eb0';
    this.warningColor = '#A26A11';
    this.warningBGColor = '#FFB337';
    this.successBGColor = '#CCEDE5';
    this.successColor = '#19836A';
    this.dangerBGColor = '#F8DBD9';
    this.dangerColor = '#AF1515';
    this.tabListBorder = '#a5abb31a';
    this.tabHeaderBG = '#F7FAFF';
    this.tabColor = '#6D7992';
    this.tabBorder = '#124EB0';
    this.primaryBG = '#124EB0';
    this.primaryHoverBG = '#1D60CC';
    this.primaryFocusBG = '#124EB0';
    this.primaryVisitedBG = '#0F3A80';
    this.primaryDisabledBG = '#f7faff';
    this.primaryBtnDisabledBG = '#6b93b5';
    this.primaryActiveBG = '#1E88E5';
    this.secondaryFocus = '#BBDEFB';
    this.secondaryVisited = '#90CAF9';
    this.avatarBg = '#B6C1D6';
    this.breadCrumbColor = '#8E99B2';
    this.secondaryActiveBg = '#90CAF9';
    this.announceBGColor = '#FFBB4B';
    this.toggleBGColor = '#808491';
    this.warningoxBGColor = '#FFF0D7';
    this.labelColor = '#4E586D';
    this.lablelDescription = '#4e586d';
    this.attachmentBg = '#F7FAFF';
    this.passwordValide = '#278C71';
    this.passwordNotValide = '#B8BCCA';
    this.typographyTextColor = '#2E374A';
    this.leftmenuBg = '#f9fbff';
    this.leftmenuHoverBg = '#e3eaf6';
    this.leftmenuHoverColor = '#1976d2';
    this.fieldBgColor = '#F7FAFF';
  }
}
const PiThemeContext = React.createContext(new ThemeContextType());
const PiThemeContextProvider = PiThemeContext.Provider;

let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8,
  _t9,
  _t10,
  _t11,
  _t12,
  _t13,
  _t14,
  _t15,
  _t16,
  _t17,
  _t18;
const CommonFont = props => css(_t || (_t = _`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: ${0};
`), props.textColor);
const PiTextH1 = props => css(_t2 || (_t2 = _`
  ${0};
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
`), CommonFont(props));
const PiTextH2 = props => css(_t3 || (_t3 = _`
  ${0};
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
`), CommonFont(props));
const PiTextH3 = props => css(_t4 || (_t4 = _`
  ${0};
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`), CommonFont(props));
const PiTextH4 = props => css(_t5 || (_t5 = _`
  ${0};
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
`), CommonFont(props));
const PiTextH5 = props => css(_t6 || (_t6 = _`
  ${0};
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`), CommonFont(props));
const PiTextH6 = props => css(_t7 || (_t7 = _`
  ${0};
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`), CommonFont(props));
const PiTextP = props => css(_t8 || (_t8 = _`
  ${0};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`), CommonFont(props));
const PiTextPBold = props => css(_t9 || (_t9 = _`
  ${0};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`), CommonFont(props));
const PiTextTH = props => css(_t10 || (_t10 = _`
  ${0};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`), CommonFont(props));
const PiTextS = props => css(_t11 || (_t11 = _`
  ${0};
  font-size: 12px;
  line-height: 16px;
`), CommonFont(props));
const PiTextXS = props => css(_t12 || (_t12 = _`
  ${0};
  font-weight: 600;
  font-size: 8px;
  line-height: 14px;
`), CommonFont(props));
const PiTextCaption = props => css(_t13 || (_t13 = _`
  ${0};
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`), CommonFont(props));
const PiTextLabel = props => css(_t14 || (_t14 = _`
  ${0};
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4px;
`), CommonFont(props));
const PiTextDefault = props => css(_t15 || (_t15 = _`
  ${0};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`), CommonFont(props));
const PiTextSuccess = props => css(_t16 || (_t16 = _`
  ${0};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${0};
`), CommonFont(props), props.success);
const PiTextError = props => css(_t17 || (_t17 = _`
  ${0};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${0};
`), CommonFont(props), props.error);
const PiTextWarning = props => css(_t18 || (_t18 = _`
  ${0};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${0};
`), CommonFont(props), props.warning);

function PiTypography(props) {
  const template = generateTag(props.component || 'default');
  return React.createElement(template.tag, {
    className: template.class
  }, `${props.children}`);
}
function generateTag(component) {
  const theme = useContext(PiThemeContext);
  const defaultTags = {
    h1: {
      tag: 'h1',
      class: PiTextH1(theme)
    },
    h2: {
      tag: 'h2',
      class: PiTextH2(theme)
    },
    h3: {
      tag: 'h3',
      class: PiTextH3(theme)
    },
    h4: {
      tag: 'h4',
      class: PiTextH4(theme)
    },
    h5: {
      tag: 'h5',
      class: PiTextH5(theme)
    },
    h6: {
      tag: 'h6',
      class: PiTextH6(theme)
    },
    p: {
      tag: 'p',
      class: PiTextP(theme)
    },
    pbold: {
      tag: 'p',
      class: PiTextPBold(theme)
    },
    th: {
      tag: 'p',
      class: PiTextTH(theme)
    },
    small: {
      tag: 'small',
      class: PiTextS(theme)
    },
    xs: {
      tag: 'small',
      class: PiTextXS(theme)
    },
    caption: {
      tag: 'small',
      class: PiTextCaption(theme)
    },
    label: {
      tag: 'label',
      class: PiTextLabel(theme)
    },
    success: {
      tag: 'label',
      class: PiTextSuccess(theme)
    },
    error: {
      tag: 'label',
      class: PiTextError(theme)
    },
    warning: {
      tag: 'label',
      class: PiTextWarning(theme)
    },
    default: {
      tag: 'span',
      class: PiTextDefault(theme)
    }
  };
  return defaultTags[component];
}
var PiTypography$1 = React.memo(PiTypography);

let _$1 = t => t,
  _t$1;
const PiInputClass = props => css(_t$1 || (_t$1 = _$1`
  width: 100%;
  text-align: left;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;

      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div {
    border-style: none;
    background-color: #fff;
  }
  div:hover {
    background-color: ${0};
  }
  input {
    margin: 4px 0 4px 0;
    padding: 8px 6px !important;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.125rem solid ${0};
    border-radius: 4px;
    height: 36px !important;
    background-color: ${0};
    &:hover {
      background-color: #fff;
      border: 0.125rem solid ${0};
    }
    &:focus {
      background-color: ${0};
      border: 0.125rem solid ${0};
    }
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
  /*.error > input {
    border: 0.125rem solid ${0};
  }

  .success > input {
    border: 0.125rem solid ${0};
  }*/
`), props.white, props.inputHoverBorder, props.fieldBgColor, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);

function PiTickIcon({
  onClick
}) {
  return React.createElement("svg", {
    width: '30',
    height: '30',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: () => onClick(true)
  }, React.createElement("rect", {
    width: '20',
    height: '20',
    rx: '4',
    fill: 'none'
  }), React.createElement("path", {
    d: 'M5 10.2222L8.33333 13.3333L15 6.66666',
    stroke: '#1976D2',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}

function PiUndoIcon({
  onClick
}) {
  return React.createElement("svg", {
    width: '30',
    height: '30',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: () => onClick(true)
  }, React.createElement("g", {
    clipPath: 'url(#clip0_23674_571046)'
  }, React.createElement("rect", {
    width: '20',
    height: '20',
    rx: '4',
    fill: 'none'
  }), React.createElement("path", {
    d: 'M14.7782 5.22943C14.4824 4.93364 14.0045 4.93364 13.7088 5.22943L10 8.9306L6.29124 5.22184C5.99545 4.92605 5.51763 4.92605 5.22184 5.22184C4.92605 5.51763 4.92605 5.99545 5.22184 6.29124L8.9306 10L5.22184 13.7088C4.92605 14.0045 4.92605 14.4824 5.22184 14.7782C5.51763 15.0739 5.99545 15.0739 6.29124 14.7782L10 11.0694L13.7088 14.7782C14.0045 15.0739 14.4824 15.0739 14.7782 14.7782C15.0739 14.4824 15.0739 14.0045 14.7782 13.7088L11.0694 10L14.7782 6.29124C15.0664 6.00303 15.0664 5.51763 14.7782 5.22943Z',
    fill: '#B6C1D6'
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: 'clip0_23674_571046'
  }, React.createElement("rect", {
    width: '20',
    height: '20',
    rx: '4',
    fill: 'white'
  }))));
}

function generateInputTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props);
  } else {
    return DefaultTemplate(props);
  }
}
function AtlasKitTemplate({
  label,
  helpText,
  isMandatory,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  console.log(isMandatory);
  return React.createElement("div", {
    className: PiInputClass(theme)
  }, React.createElement("div", {
    className: 'select-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(Fragment, null, React.createElement(AtlasTextfield, Object.assign({}, props, {
    onClick: e => {
      if (props.type === 'string') {
        const input = e.target;
        const end = e.target.value.length;
        input.setSelectionRange(end, end);
        input.focus();
      }
    }
  })), helpText && React.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate(props) {
  const defaultProps = generateDefaultProps(props);
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, defaultProps.label), React.createElement("input", Object.assign({}, defaultProps)), React.createElement("span", {
    className: 'form-error-msg'
  }, defaultProps.helperText));
}
function generateDefaultProps(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  };
  return defaultProps;
}

class PiInputProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'inputField';
    this.appearance = 'standard';
    this.type = 'text';
  }
}
function PiInput(props) {
  const newprops = new PiInputProps();
  return generateInputTemplate({
    ...newprops,
    ...props
  });
}

let _$2 = t => t,
  _t$2;
const PiInputClass$1 = props => css(_t$2 || (_t$2 = _$2`
  width: 100%;
  text-align: left;
  div {
    border-style: none;
    background-color: none;
  }
  div:hover {
    background-color: ${0};
  }
  input {
    margin: 4px 0 8px 0;
    padding: 11px 12px 11px 14px !important;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.125rem solid ${0};
    border-radius: 4px;
    height:36px !important;
    &:hover {
      background-color: ${0};
      border: 0.125rem solid ${0};
    }
    &:focus {
      background-color: ${0};
      border: 0.125rem solid ${0};
    }
  }
  .error > input {
    border: 0.125rem solid ${0};
  }

  .success > input {
    border: 0.125rem solid ${0};
  }
`), props.white, props.inputHoverBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);

function generateInputTemplate$1({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$1(props);
  } else {
    return DefaultTemplate$1(props);
  }
}
function AtlasKitTemplate$1({
  label,
  helpText,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiInputClass$1(theme)
  }, label && React.createElement(PiTypography$1, {
    component: "label"
  }, label), React.createElement(Fragment, null, React.createElement(AtlasTextfield, Object.assign({}, props)), helpText && React.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$1(props) {
  const defaultProps = generateDefaultProps$1(props);
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, defaultProps.label), React.createElement("input", Object.assign({}, defaultProps)), React.createElement("span", null, defaultProps.helperText));
}
function generateDefaultProps$1(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    value: props.value,
    defaultvalue: props.defaultValue,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  };
  return defaultProps;
}

class PiInputProps2 extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'inputField';
    this.appearance = 'standard';
    this.type = 'text';
  }
}
function PiInput2(props) {
  const newprops = new PiInputProps2();
  return generateInputTemplate$1({
    ...newprops,
    ...props
  });
}

let _$3 = t => t,
  _t$3,
  _t2$1,
  _t3$1,
  _t4$1,
  _t5$1,
  _t6$1,
  _t7$1;
function getSizeStyles(size) {
  switch (size) {
    case 'xs':
      {
        return xsFont();
      }
    case 'small':
      {
        return smallFont();
      }
    case 'medium':
      {
        return mediumFont();
      }
    case 'large':
      {
        return largeFont();
      }
    default:
      {
        return smallFont();
      }
  }
}
const xsFont = () => css(_t$3 || (_t$3 = _$3`
  padding: 4px 12px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  height: 28px;
`));
const smallFont = () => css(_t2$1 || (_t2$1 = _$3`
  padding: 6px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  height: 32px;
`));
const mediumFont = () => css(_t3$1 || (_t3$1 = _$3`
  padding: 10px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  height: 40px;
`));
const largeFont = () => css(_t4$1 || (_t4$1 = _$3`
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: 48px;
`));
const PiButtonPrimaryClass = (props, size) => css(_t5$1 || (_t5$1 = _$3`
  background: ${0} !important;
  min-width: 120px;
  border-radius: 6px !important;
  font-family: Inter;
  font-style: normal;
  display: flex;
  align-items: center !important;
  text-align: center;
  /*line-height: unset !important;*/
  /*padding: unset !important;*/
  height: 40px !important;
  ${0}
  color: ${0} !important;
  span {
    color: ${0} !important;
    flex-grow: unset;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 0px !important;
  }

  &:hover {
    background: ${0} !important;
    color: ${0} !important;
  }
  &:focus {
    background: #1d60cc !important;
    box-shadow: none;
    transition-duration: none;
  }
  &:disabled {
    background: ${0} !important;
    color: ${0} !important;
  }
  &:visited {
    background: ${0}!important;
  }
  &:active {
    background: #bbdefb !important;
  }

  svg {
    stroke: ${0};
  }
  span {
    color: ${0} !important;
    &:disabled {
      color: ${0} !important;
    }
  }
`), props.primaryBG, getSizeStyles(size), props.white, props.white, props.primaryHoverBG, props.white, props.primaryBtnDisabledBG, props.primaryColor, props.primaryVisitedBG, props.infoBGColor, props.white, props.primaryColor);
const PiButtonSecondaryClass = (props, size) => css(_t6$1 || (_t6$1 = _$3`
  background: ${0} !important;
  min-width: 120px;
  border-radius: 6px !important;
  border: 2px solid #d0daec !important;
  font-family: Inter;
  font-style: normal;
  display: flex;
  align-items: center !important;
  text-align: center;
  /*line-height: unset !important;*/
  height: 40px !important;
  /*padding: unset !important;*/
  ${0}
  color: ${0} !important;
  span {
    color: ${0} !important;
    flex-grow: unset;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 0px !important;
  }

  &:hover {
    background: ${0} !important;
    color: ${0} !important;
  }

  &:focus {
    background: #e3f2fd !important;
    box-shadow: none;
    transition-duration: none;
  }

  &:disabled {
    background: ${0} !important;
    color: ${0} !important;
    span {
      color: #8598b7 !important;
    }
  }
  &:visited {
    background: ${0} !important;
  }

  /*&:active {
    background: ${0} !important;
  }*/
  .css-7no60z-ButtonBase {
    color: ${0} !important;
  }
`), props.white, getSizeStyles(size), props.primaryBG, props.primaryBG, props.infoBGColor, props.primaryBG, props.primaryDisabledBG, props.primaryBG, props.secondaryVisited, props.secondaryActiveBg, props.primaryBG);
const PiButtonLinkClass = (props, size) => css(_t7$1 || (_t7$1 = _$3`
  background: ${0} !important;
  font-family: Inter;
  font-style: normal;
  display: flex;
  align-items: center;
  line-height: 20px !important;
  text-align: left !important;
  padding: 0px !important;
  ${0}
  color: ${0} !important;
  white-space: pre-wrap;
  span {
    white-space: normal;
    flex-grow: unset;
    color: ${0} !important;
  }
  &:hover {
    background: ${0};
    span {
      color: ${0} !important;
      text-decoration: underline;
    }
  }

  &:focus {
    color: ${0} !important;
  }

  &:visited {
    color: ${0};
  }

  &:active {
    color: #bbdefb;
  }

  &:disabled {
    color: ${0} !important;
  }
`), props.white, getSizeStyles(size), props.primaryBG, props.primaryBG, props.white, props.primaryHoverBG, props.primaryActiveBG, props.primaryVisitedBG, props.primaryBG);

function generateButtonTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$2(props);
  } else {
    return DefaultTemplate$2(props);
  }
}
function AtlasKitTemplate$2({
  label,
  isLoading,
  appearance,
  size,
  className,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const piClass = {
    link: PiButtonLinkClass,
    primary: PiButtonPrimaryClass,
    secondary: PiButtonSecondaryClass
  };
  const clsName = piClass[appearance];
  return props && isLoading ? React.createElement(LoadingButton, Object.assign({}, props, {
    isLoading: true,
    className: cx(className, clsName ? clsName(theme, size) : '')
  }), label) : React.createElement(AtlasButton, Object.assign({}, props, {
    className: cx(className, clsName ? clsName(theme, size) : '')
  }), label);
}
function DefaultTemplate$2({
  label,
  ...props
}) {
  const defaultProps = generateDefaultProps$2({
    label,
    ...props
  });
  return React.createElement("button", Object.assign({}, defaultProps), label);
}
function generateDefaultProps$2(props) {
  const defaultProps = {
    onClick: props.onClick,
    disabled: props.isDisabled,
    type: props.type
  };
  return defaultProps;
}

class PiButtonProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.appearance = 'primary';
    this.label = '';
    this.size = 'small';
    this.type = 'button';
  }
}
function PiButton(props) {
  const newprops = new PiButtonProps();
  return generateButtonTemplate({
    ...newprops,
    ...props
  });
}

let _$4 = t => t,
  _t$4;
function generateTooltipTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$3(props);
  } else {
    return defaultTemplate(props);
  }
}
const InlineDialog = styled(TooltipPrimitive)(_t$4 || (_t$4 = _$4`
  background: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #bbbfc6;
  padding: 0px 6px;
  color: #2e374a;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Inter';
  font-weight: 500;
  max-width: 500px;
`));
function AtlasKitTemplate$3({
  children,
  ...props
}) {
  return React.createElement(Tooltip, Object.assign({
    component: InlineDialog
  }, props), children);
}
function defaultTemplate(props) {
  return React.createElement(Fragment, null, props.children);
}

class PiTooltipProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.content = '';
  }
}
function PiTooltip(props) {
  const newprops = new PiTooltipProps();
  return generateTooltipTemplate({
    ...newprops,
    ...props
  });
}

let _$5 = t => t,
  _t$5;
const PiTimePickerClass = props => css(_t$5 || (_t$5 = _$5`
  width: 100%;
  .css-1a7rm5r-control {
    background-color: ${0};
    border: 2px solid ${0};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    height:48px;
    border-radius:4px;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    &:focus {
      background: ${0};
      border: 2px solid ${0};
    }
  }
  .css-qyxenl-control {
    height:48px;
    border-radius:4px;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    margin: 4px 0px 8px 0px;
    background: ${0};
    border: 2px solid ${0};
    font-size: 14px;
  }

  .css-5ww0s7 .css-1a7rm5r-control {
    font-size: 14px;
  }
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-otwtzu-option{
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-otwtzu-option:active {
    background-color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-12fvnfc-option:active {
    background-color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
`), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);

function generateTimePickerTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$4(props);
  } else {
    return DefaultTemplate$3(props);
  }
}
function AtlasKitTemplate$4({
  label,
  name,
  helpText,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiTimePickerClass(theme)
  }, label && React.createElement(PiTypography$1, null, label), React.createElement(Fragment, null, React.createElement(TimePicker, Object.assign({}, props)), helpText && React.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$3(props) {
  const defaultProps = generateDeafultProps(props);
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("input", Object.assign({
    type: 'time'
  }, defaultProps)), props.helpText && React.createElement("span", null, props.helpText)));
}
function generateDeafultProps(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    format: `${props.timeFormat}`
  };
  return defaultProps;
}

class PiTimePickerProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'TimeField';
    this.appearance = 'standard';
    this.timeFormat = 'HH:MM A';
  }
}
function PiTimePicker(props) {
  const newprops = new PiTimePickerProps();
  return generateTimePickerTemplate({
    ...newprops,
    ...props
  });
}

let _$6 = t => t,
  _t$6;
const PiTextAreaClass = props => css(_t$6 || (_t$6 = _$6`
  width: 100%;
  text-align: left;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;

      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div {
    border-style: none;
  }
  textarea {
    margin: 4px 0 8px 0;
    align-items: flex-start;
    padding: 14px 14px 8px;
    background: ${0} !important;
    border: 2px solid ${0} !important;
    box-sizing: border-box;
    border-radius: 4px;
    &:hover {
      background: ${0} !important;
      border: 2px solid ${0} !important;
    }
    &:focus {
      background: ${0} !important;
      border: 2px solid ${0} !important;
    }
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
  /*.error > textarea {
    border: 2px solid ${0} !important;
  }

  .success > textarea {
    border: 2px solid ${0} !important;
  }*/
`), props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);

function generateTextAreaTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$5(props);
  } else {
    return normalTextArea(props);
  }
}
function AtlasKitTemplate$5({
  label,
  helpText,
  isMandatory,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiTextAreaClass(theme)
  }, React.createElement(Fragment, null, React.createElement("div", {
    className: 'select-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(AtlasTextArea, Object.assign({}, props)), helpText && React.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function normalTextArea(props) {
  const defaultProps = generateDefaultProps$3(props);
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("textarea", Object.assign({}, defaultProps)), props.helpText && React.createElement("span", null, props.helpText)));
}
function generateDefaultProps$3(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder,
    value: props.value,
    defaultValue: props.defaultValue,
    rows: 3
  };
  if (props.maxHeight) {
    defaultProps.rows = parseInt(props.maxHeight);
  }
  return defaultProps;
}

class PiTextAreaProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'textAreaField';
    this.appearance = 'standard';
    this.minimumRows = 3;
  }
}
function PiTextArea(props) {
  const newprops = new PiTextAreaProps();
  return generateTextAreaTemplate({
    ...newprops,
    ...props
  });
}

function generateSpinnerTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$6(props);
  } else {
    return defaultTemplate$1(props);
  }
}
function AtlasKitTemplate$6({
  ...props
}) {
  return React.createElement(AtlasSpinner, Object.assign({}, props));
}
function defaultTemplate$1(props) {
  return React.createElement("div", {
    style: {
      width: props.size
    }
  });
}

class PiSpinnerProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.apperance = 'inherit';
    this.color = 'inherit';
  }
}
function PiSpinner(props) {
  const newprops = new PiSpinnerProps();
  return generateSpinnerTemplate({
    ...newprops,
    ...props
  });
}

let _$7 = t => t,
  _t$7;
const PiSelectClass = props => css(_t$7 || (_t$7 = _$7`
  width: 100%;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div[class$='-menu'] {
    margin: 3px !important;
    div[class$='-MenuList'] {
      padding: 0px !important;
    }
  }
  /*.pi-select-wrapper {
    div {
      .css-1bx7l6n-control {
        border-radius: 4px;
        margin: 4px 0 8px 0;
        background-color: ${0};
        border: 2px solid ${0};
        font-size: 14px;
        height: 36px !important;
        line-height: 1;
        &:hover {
          background: ${0};
          border-color: ${0};
        }
        &:focus {
          background: ${0};
          border-color: ${0};
        }
      }
    }
  }*/

  /*}*/
  /*.pi-select-wrapper > div > div {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${0};
      border-color: ${0};
    }
    &:focus {
      background: ${0};
      border-color: ${0};
    }
  }*/

  .react-select__control {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${0};
      border-color: ${0};
    }
    &:focus {
      background: ${0};
      border-color: ${0};
    }
  }
  .css-rij6sy-ValueContainer {
    padding: 0 8px !important;
  }
  /*.css-qyxenl-control {
    margin: 4px 0 8px 0;
    height: 36px !important;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    font-size: 14px;
    background: ${0};
    border: 2px solid ${0};
  }*/
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${0};
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
  }
  .css-otwtzu-option:active {
    background-color: ${0};
  }
  .css-12fvnfc-option:active {
    background-color: ${0};
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
`), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);

function generateSelectTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$7(props);
  } else {
    return DefaultTemplate$4(props);
  }
}
function AtlasKitTemplate$7({
  helpText,
  label,
  isMandatory,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  console.log(props);
  return React.createElement("div", {
    className: PiSelectClass(theme)
  }, React.createElement("div", {
    className: 'pi-select-wrapper'
  }, React.createElement("div", {
    className: 'select-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(Select, Object.assign({
    classNamePrefix: props.classNamePrefix || 'react-select',
    noOptionsMessage: () => {
      return props.noOptionsMessage ? props.noOptionsMessage : `No ${label} Found`;
    }
  }, props)), helpText && React.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function DefaultTemplate$4(props) {
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("select", null, props.options ? props.options.map(option => {
    return React.createElement("option", {
      value: option.value
    }, option.label);
  }) : null), props.helpText && React.createElement("span", null, props.helpText)));
}

class PiSelectProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'select';
    this.options = [];
    this.placeholder = 'Select...';
  }
}
function PiSelect(props) {
  const newprops = new PiSelectProps();
  return generateSelectTemplate({
    ...newprops,
    ...props
  });
}

let _$8 = t => t,
  _t$8;
const PiRadioClass = props => css(_t$8 || (_t$8 = _$8`
  .css-1xhjk83-Radio {
    background: ${0} !important;
    border: 0.125rem solid ${0} !important;
    &:hover {
      background: ${0} !important;
      border: 0.125rem solid ${0} !important;
    }
    &:checked {
      background: ${0} !important;
      border: 0.125rem solid ${0} !important;
    }
  }
  .css-xrsww6-Radio {
    padding: 2px 4px;
    font-size: 14px;
  }
  .css-1xhjk83-Radio::after {
    width: calc(6px * 12 / 7) !important;
    height: calc(6px * 12 / 7) !important;
  }
`), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.inputFocusBorder, props.inputFocusBorder);

function generateRadioGroupTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$8(props);
  } else {
    return defaultTemplate$2(props);
  }
}
function AtlasKitTemplate$8({
  libraryType,
  helpText,
  label,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiRadioClass(theme)
  }, label && React.createElement(PiTypography$1, null, label), React.createElement(RadioGroup, Object.assign({}, props)), helpText && React.createElement(PiTypography$1, null, helpText));
}
function defaultTemplate$2(props) {
  return React.createElement("div", null, props.options.map(option => {
    return React.createElement(Fragment, null, React.createElement("label", null, option.label), React.createElement("input", {
      type: 'radio',
      value: option.value,
      name: props.name
    }));
  }));
}

class PiRadioGroupProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'radioField';
    this.options = [];
  }
}
function PiRadioGroup(props) {
  const newProps = new PiRadioGroupProps();
  return generateRadioGroupTemplate({
    ...newProps,
    ...props
  });
}

let _$9 = t => t,
  _t$9;
const PiDateTimePickerClass = props => css(_t$9 || (_t$9 = _$9`
  width: 100%;
  /*.css-e1g8km {
    background-color: ${0};
    border: 2px solid ${0};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    &:focus {
      background: ${0};
      border: 2px solid ${0};
    }
  }*/
  /*.pi-date-time-picker {*/
  & > div {
    border: 2px solid ${0};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    border-radius: 4px;
    height: 36px;
    align-items: center;
    background-color: ${0};
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    &:focus {
      background: ${0};
      border: 2px solid ${0};
    }
  }
  /*}*/

  .date-time-picker-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    > .save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
      label {
        color: #4e586d;
      }
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  .css-18vb16q {
    margin: 4px 0px 8px 0px;
    background: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    border-radius: 4px;
  }
  .css-mqv3ay-Date[data-focused] {
    border: 1px solid #134c85;
    background-color: #134c85;
    color: #fff;
  }
  .css-mqv3ay-Date[data-today] {
    background-color: ${0};
    border: 1px solid ${0};
    color: ${0};
  }
  .css-mqv3ay-Date[data-today]::after {
    display: none;
  }
  .css-mqv3ay-Date[data-prev-selected] {
    background-color: #fff;
  }
  .css-mqv3ay-Date[data-selected] {
    background-color: #134c85;
    color: #fff;
    border: 1px solid #134c85;
  }
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-otwtzu-option:active {
    background-color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-12fvnfc-option:active {
    background-color: ${0};
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .css-1k3jsfu-control {
    min-height: 48px;
  }
  .css-v77w53-control {
    min-height: 48px;
  }
  .css-otwtzu-option {
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryColor, props.fieldBgColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBG, props.primaryBG, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);

function generateDateTimePickerTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$9(props);
  } else {
    return DefaultTemplate$5(props);
  }
}
function AtlasKitTemplate$9({
  label,
  name,
  libraryType,
  helpText,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: `${PiDateTimePickerClass(theme)} pi-date-time-picker`
  }, React.createElement("p", {
    className: 'date-time-picker-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), props.isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(Fragment, null, React.createElement(DateTimePicker, Object.assign({}, props)), helpText && React.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$5(props) {
  const defaultProps = generateDeafultProps$1(props);
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("input", Object.assign({
    type: 'datetime-local'
  }, defaultProps)), props.helpText && React.createElement("span", null, props.helpText)));
}
function generateDeafultProps$1(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: `${props.dateFormat}+${props.timeFormat}`
  };
  return defaultProps;
}

class PiDateTimePickerProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'dateTimeField';
    this.appearance = 'standard';
    this.dateFormat = 'MM/DD/YYYY';
    this.timeFormat = 'HH:MM A';
  }
}
function PiDateTimePicker(props) {
  const newprops = new PiDateTimePickerProps();
  return generateDateTimePickerTemplate({
    ...newprops,
    ...props
  });
}

let _$a = t => t,
  _t$a;
const PiDatePickerClass = props => css(_t$a || (_t$a = _$a`
  width: 100%;
  .picker-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div[role='presentation'] {
    margin-top: 6px;
  }
  .css-1a7rm5r-control {
    background-color: ${0};
    border: 2px solid ${0};
    margin: 4px 0px 8px 0px;
    font-size: 14px;
    height: 48px;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    &:focus {
      background: ${0};
      border: 2px solid ${0};
    }
  }
  .css-qyxenl-control {
    height: 48px;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    margin: 4px 0px 8px 0px;
    background: ${0};
    border: 2px solid ${0};
    font-size: 14px;
  }
  .css-60ak9x-Icon > svg {
    color: #758ca3;
  }
  .css-mqv3ay-Date[data-focused] {
    border: 1px solid #134c85;
    background-color: #134c85;
    color: #fff;
  }
  .css-mqv3ay-Date[data-today] {
    background-color: ${0};
    border: 2px solid ${0};
    color: ${0};
  }
  .css-mqv3ay-Date[data-today]::after {
    display: none;
  }
  .css-mqv3ay-Date[data-prev-selected] {
    background-color: #fff;
  }
  .css-mqv3ay-Date[data-selected] {
    background-color: #134c85;
    color: #fff;
    border: 1px solid #134c85;
  }
  .css-5ww0s7 .css-1a7rm5r-control {
    font-size: 14px;
  }
`), props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBG, props.primaryBG);

function generateDatePickerTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$a(props);
  } else {
    return DefaultTemplate$6(props);
  }
}
function AtlasKitTemplate$a({
  label,
  libraryType,
  isMandatory,
  helpText,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiDatePickerClass(theme)
  }, React.createElement("div", {
    className: 'picker-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(Fragment, null, React.createElement(DatePicker, Object.assign({}, props, {
    name: 'dob'
  })), helpText && React.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$6(props) {
  const defaultProps = generateDefaultProps$4(props);
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("input", Object.assign({
    type: 'date'
  }, defaultProps)), props.helpText && React.createElement("span", null, props.helpText)));
}
function generateDefaultProps$4(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: `${props.dateFormat}`
  };
  return defaultProps;
}

class PiDatePickerProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'dateField';
    this.appearance = 'standard';
    this.dateFormat = 'MM/DD/YYYY';
  }
}
function PiDatePicker(props) {
  const newProps = new PiDatePickerProps();
  return generateDatePickerTemplate({
    ...newProps,
    ...props
  });
}

let _$b = t => t,
  _t$b;
const PiCheckboxClass = props => css(_t$b || (_t$b = _$b`
  .css-hk3wth-Checkbox:checked + svg {
    --checkbox-background-color: ${0};
    --checkbox-border-color: ${0};
    --checkbox-tick-color: ${0};
  }
  .css-163zesm-LabelText {
    font-size: 14px;
  }
 
`), props.primaryBG, props.primaryBG, props.white);

function generateCheckboxTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$b(props);
  } else {
    return DefaultTemplate$7(props);
  }
}
function AtlasKitTemplate$b({
  libraryType,
  helpText,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiCheckboxClass(theme)
  }, React.createElement(Checkbox, Object.assign({}, props)), helpText && React.createElement(PiTypography$1, null, helpText));
}
function DefaultTemplate$7({
  ...props
}) {
  const defaultProps = generateDefaultProps$5({
    ...props
  });
  return React.createElement(Fragment, null, React.createElement("div", null, React.createElement("input", Object.assign({
    type: 'checkbox'
  }, defaultProps)), React.createElement("label", null, props.label)), props.helpText && React.createElement("span", null, props.helpText));
}
function generateDefaultProps$5(props) {
  const defaultProps = {
    checked: props.isChecked,
    disabled: props.isDisabled,
    value: props.value,
    label: props.label,
    onChange: props.onChange,
    name: props.name
  };
  return defaultProps;
}

class PiCheckboxProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'radioField';
    this.size = 'small';
  }
}
function PiCheckbox(props) {
  const newprops = new PiCheckboxProps();
  return generateCheckboxTemplate({
    ...newprops,
    ...props
  });
}

let _$c = t => t,
  _t$c;
const PiAvatarClass = props => css(_t$c || (_t$c = _$c`
  width: 100%;
  .css-1l72gtu-AvatarImage {
    background-color: ${0};
  }
  .css-ed4mf:hover::after {
    background-color: transparent !important;
  }
  .css-ed4mf:focus {
    outline: none;
    box-shadow: none;
  }
  .css-3pkws3:hover::after {
    background-color: transparent !important;
  }
  .css-3pkws3:focus {
    outline: none;
    box-shadow: none;
  }
`), props.avatarBg);

function generateAvatarTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$c(props);
  } else {
    return defaultTemplate$3(props);
  }
}
function AtlasKitTemplate$c({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiAvatarClass(theme)
  }, React.createElement(AtlasAvatar, Object.assign({}, props)));
}
function defaultTemplate$3(props) {
  return React.createElement("div", {
    style: {
      width: props.size
    }
  });
}

class PiAvatarProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.appearance = 'circle';
  }
}
function PiAvatar(props) {
  const newprops = new PiAvatarProps();
  return generateAvatarTemplate({
    ...newprops,
    ...props
  });
}

let _$d = t => t,
  _t$d;
const PiBreadCrumbClass = props => css(_t$d || (_t$d = _$d`
  width: 100%;
  .css-1isvw35-ButtonBase {
    color: ${0};
  }
  .css-1isvw35-ButtonBase:hover {
    text-decoration: none;
    color: #2196f3 !important;
  }
  .css-1isvw35-ButtonBase:active {
    background: none;
    color: #1976D2 !important;
}
`), props.breadCrumbColor);

function generateBreadCrumbTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$d(props);
  } else {
    return defaultTemplate$4();
  }
}
function AtlasKitTemplate$d({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiBreadCrumbClass(theme)
  }, React.createElement(Breadcrumbs, Object.assign({}, props), props.items.map((item, index) => {
    return React.createElement(BreadcrumbsItem, {
      href: item.href,
      text: item.label,
      key: index
    });
  })));
}
function defaultTemplate$4() {
  return React.createElement("div", null);
}

class PiBreadCrumbProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.text = '';
  }
}
function PiBreadCrumb(props) {
  const newprops = new PiBreadCrumbProps();
  return generateBreadCrumbTemplate({
    ...newprops,
    ...props
  });
}

let _$e = t => t,
  _t$e,
  _t2$2,
  _t3$2,
  _t4$2;
const PiTagInfoClass = props => css(_t$e || (_t$e = _$e`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: ${0};
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${0}
    }
}
`), props.infoBGColor, props.infoColor);
const PiTagWarningClass = props => css(_t2$2 || (_t2$2 = _$e`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: #FFE8C3;
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${0}
    }
}
`), props.warningColor);
const PiTagSuccessClass = props => css(_t3$2 || (_t3$2 = _$e`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: ${0};
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${0}
    }
}
`), props.successBGColor, props.successColor);
const PiTagDangerClass = props => css(_t4$2 || (_t4$2 = _$e`
padding: 0.5rem;
display: inline-flex;
border-radius: 15px;
background: ${0};
span{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${0}
    }
}
`), props.dangerBGColor, props.dangerColor);

function generateTagTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$e(props);
  } else {
    return DefaultTemplate$8(props);
  }
}
function AtlasKitTemplate$e(props) {
  const theme = useContext(PiThemeContext);
  const tagClass = {
    info: PiTagInfoClass(theme),
    warning: PiTagWarningClass(theme),
    success: PiTagSuccessClass(theme),
    danger: PiTagDangerClass(theme)
  };
  return React.createElement("div", {
    className: tagClass[props.color]
  }, React.createElement("span", null, props.text));
}
function DefaultTemplate$8(props) {
  return React.createElement("div", null, props.text);
}

class PiTagProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.color = 'info';
  }
}
function PiTag(props) {
  const newprops = new PiTagProps();
  return generateTagTemplate({
    ...newprops,
    ...props
  });
}

let _$f = t => t,
  _t$f;
const PiPaginationClass = props => css(_t$f || (_t$f = _$f`
  /*.css-bzi093-ButtonBase:hover {
    background-color: ${0};
  }
  .css-nhj80n-ButtonBase {
    background-color: ${0};
  }*/
  nav button[data-testid^='paging--current-'] {
    background-color: ${0};
  }
`), props.primaryBG, props.primaryBG, props.primaryBG);

function generatePaginationTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$f(props);
  } else {
    return DefaultTemplate$9(props);
  }
}
function AtlasKitTemplate$f({
  pages,
  onChange,
  ...props
}) {
  const pagesList = getPages(pages);
  const theme = useContext(PiThemeContext);
  function handleChange(_, page) {
    if (onChange) {
      onChange(page);
    }
  }
  return React.createElement("div", {
    className: `${PiPaginationClass(theme)} pipagination-wrapper`
  }, React.createElement(Pagination, Object.assign({
    pages: pagesList
  }, props, {
    onChange: handleChange
  })));
}
function DefaultTemplate$9(props) {
  const pages = getPages(props.pages);
  function handleChange(page) {
    if (props.onChange) {
      props.onChange(page);
    }
  }
  return React.createElement(Fragment, null, pages.map(page => React.createElement("div", {
    key: page,
    onClick: () => handleChange(page)
  }, page)));
}
function getPages(page) {
  return Array(page).fill(0).map((_, i) => i + 1);
}

class PiPaginationProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.testId = 'paging';
  }
}
function PiPagination(props) {
  const newprops = new PiPaginationProps();
  return generatePaginationTemplate({
    ...newprops,
    ...props
  });
}

let _$g = t => t,
  _t$g;
const PiToggleClass = (props, direction) => css(_t$g || (_t$g = _$g`
  display: flex;
  flex-direction: ${0};
  ${0};

  label[data-size] {
    &:hover {
      background-color: ${0} !important;
    }
    &:focus-within {
      border: 2px solid ${0};
    }
  }

  label[data-checked] {
    &:hover {
      background-color: ${0} !important;
    }
  }
`), direction || 'row', direction === 'row' && "align-items: center", props.toggleBGColor, props.primaryBG, props.success);

function generateToggleTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$g(props);
  } else {
    return DefaultTemplate$a(props);
  }
}
function AtlasKitTemplate$g({
  onChange,
  size,
  isChecked,
  name,
  isDisabled,
  label,
  helpText,
  direction
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiToggleClass(theme, direction)
  }, label && React.createElement(PiTypography$1, {
    component: "label"
  }, label), React.createElement(Fragment, null, React.createElement(Toggle, {
    size: size,
    onChange: onChange,
    isChecked: isChecked,
    name: name,
    isDisabled: isDisabled
  }), helpText && React.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$a(props) {
  return React.createElement(Fragment, null, React.createElement("span", null, props.name));
}

class PiToggleProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.size = 'regular';
    this.direction = 'row';
  }
}
function PiToggle(props) {
  const newprops = new PiToggleProps();
  return generateToggleTemplate({
    ...newprops,
    ...props
  });
}

let _$h = t => t,
  _t$h;
function getAppearanceStyles(appearance, props) {
  switch (appearance) {
    case 'warning':
      {
        return props.warningBGColor;
      }
    case 'error':
      {
        return props.dangerColor;
      }
    case 'announcement':
      {
        return props.announceBGColor;
      }
    default:
      {
        return props.warningBGColor;
      }
  }
}
const PiBannerClass = (props, appearance) => css(_t$h || (_t$h = _$h`
  .css-1lo6yt6{
    background-color: ${0} !important;
    color: ${0};
    size: 14px;
    
    font-weight:800 !important;
    div{
      font-weight:800 !important;
    }
  }
`), getAppearanceStyles(appearance, props), props.white);

function generateBannerTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$h(props);
  } else {
    return defaultTemplate$5();
  }
}
function AtlasKitTemplate$h({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const appearance = props.appearance;
  return React.createElement("div", {
    className: PiBannerClass(theme, appearance)
  }, React.createElement(AtlasBanner, Object.assign({}, props, {
    icon: getIcon(appearance)
  }), props.children));
}
function defaultTemplate$5() {
  return React.createElement("div", null);
}
function getIcon(appearance) {
  switch (appearance) {
    case 'warning':
      {
        return React.createElement(WarningIcon, {
          label: '',
          secondaryColor: 'inherit'
        });
      }
    case 'error':
      {
        return React.createElement(ErrorIcon, {
          label: '',
          secondaryColor: 'inherit'
        });
      }
    case 'announcement':
      {
        return '';
      }
    default:
      {
        return React.createElement(WarningIcon, {
          label: '',
          secondaryColor: 'inherit'
        });
      }
  }
}

class PiBannerProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.children = 'Hello';
  }
}
function PiBanner(props) {
  const newprops = new PiBannerProps();
  return generateBannerTemplate({
    ...newprops,
    ...props
  });
}

function generateLozengeTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$i(props);
  } else {
    return defaultTemplate$6();
  }
}
function AtlasKitTemplate$i({
  ...props
}) {
  return React.createElement(AtlasLozenge, Object.assign({}, props), props.children);
}
function defaultTemplate$6() {
  return React.createElement("div", null);
}

class PiLozengeProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.children = 'Hello';
  }
}
function PiLozenge(props) {
  const newprops = new PiLozengeProps();
  return generateLozengeTemplate({
    ...newprops,
    ...props
  });
}

function generateProgressIndicatorTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$j(props);
  } else {
    return defaultTemplate$7();
  }
}
function AtlasKitTemplate$j({
  ...props
}) {
  return React.createElement("div", null, React.createElement(ProgressIndicator, Object.assign({}, props)));
}
function defaultTemplate$7() {
  return React.createElement("div", null);
}

class PiProgressIndicatorProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.values = ['first', 'second', 'third'];
    this.selectedIndex = 0;
  }
}
function PiProgressIndicator(props) {
  const newprops = new PiProgressIndicatorProps();
  return generateProgressIndicatorTemplate({
    ...newprops,
    ...props
  });
}

let _$i = t => t,
  _t$i,
  _t2$3,
  _t3$3,
  _t4$3,
  _t5$2,
  _t6$2,
  _t7$2;
function getAppearanceStyles$1(appearance, props) {
  switch (appearance) {
    case 'error':
      {
        return error(props);
      }
    case 'info':
      {
        return info(props);
      }
    case 'normal':
      {
        return normal(props);
      }
    case 'success':
      {
        return success(props);
      }
    case 'warning':
      {
        return warning(props);
      }
    default:
      {
        return info(props);
      }
  }
}
const error = props => css(_t$i || (_t$i = _$i`
background-color: ${0};
`), props.dangerColor);
const info = props => css(_t2$3 || (_t2$3 = _$i`
background-color: ${0};
`), props.primaryHoverBG);
const normal = props => css(_t3$3 || (_t3$3 = _$i`
background-color: ${0};
`), props.white);
const success = props => css(_t4$3 || (_t4$3 = _$i`
background-color: ${0};
`), props.success);
const warning = props => css(_t5$2 || (_t5$2 = _$i`
background-color: ${0};
`), props.warningBGColor);
const PiFlagClass = (props, appearance) => css(_t6$2 || (_t6$2 = _$i`
  div[role="alert"]{
    ${0}
    
    size: 14px;
  }
`), getAppearanceStyles$1(appearance, props));
const PiFlagDefaultClass = props => css(_t7$2 || (_t7$2 = _$i`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 16px;
  width: 400px;
  background: ${0};
  box-shadow: 0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 4px;

  .flag-icon{
    width: 24px;
    height: 24px;
    background: ${0};
    margin: 0px 16px;
  }
  .flag-content{
    flex:1;
  }

  .close-icon{
    
    svg{
      width: 16px;
      height: 16px;
      background: ${0};
      cursor:pointer;
      &:hover{
        width:18px;
        height:18px;
      }
    }
    
  }

  p{
    line-height:20px;
    margin: 0px 0px;
  }


`), props.white, props.white, props.white);

function PiWarningIcon() {
  return React.createElement("svg", {
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.31 1.343L17.669 14.513C17.7539 14.6652 17.7975 14.8369 17.7955 15.0111C17.7936 15.1853 17.7462 15.356 17.658 15.5063C17.5698 15.6565 17.4438 15.7811 17.2926 15.8677C17.1414 15.9543 16.9702 15.9999 16.796 16H1.20401C1.02963 16 0.858278 15.9544 0.70695 15.8678C0.555623 15.7811 0.429584 15.6564 0.341343 15.506C0.253101 15.3556 0.205723 15.1848 0.203911 15.0104C0.2021 14.836 0.245916 14.6642 0.331014 14.512L7.69101 1.343C7.82126 1.11023 8.01121 0.916412 8.2413 0.781501C8.47139 0.64659 8.73329 0.57547 9.00001 0.57547C9.26674 0.57547 9.52864 0.64659 9.75873 0.781501C9.98881 0.916412 10.1788 1.11023 10.309 1.343H10.31ZM9.00001 4.5C8.84423 4.49998 8.69025 4.53333 8.54844 4.5978C8.40662 4.66227 8.28026 4.75636 8.17784 4.87374C8.07543 4.99113 7.99934 5.12908 7.95469 5.27833C7.91005 5.42758 7.89788 5.58465 7.91901 5.739L8.43201 9.505C8.45032 9.64267 8.51801 9.76901 8.62249 9.86051C8.72697 9.95202 8.86113 10.0025 9.00001 10.0025C9.1389 10.0025 9.27306 9.95202 9.37754 9.86051C9.48202 9.76901 9.54971 9.64267 9.56801 9.505L10.081 5.739C10.1021 5.58465 10.09 5.42758 10.0453 5.27833C10.0007 5.12908 9.9246 4.99113 9.82219 4.87374C9.71977 4.75636 9.5934 4.66227 9.45159 4.5978C9.30977 4.53333 9.1558 4.49998 9.00001 4.5ZM9.00001 13.13C9.29838 13.13 9.58453 13.0115 9.79551 12.8005C10.0065 12.5895 10.125 12.3034 10.125 12.005C10.125 11.7066 10.0065 11.4205 9.79551 11.2095C9.58453 10.9985 9.29838 10.88 9.00001 10.88C8.70164 10.88 8.4155 10.9985 8.20452 11.2095C7.99354 11.4205 7.87501 11.7066 7.87501 12.005C7.87501 12.3034 7.99354 12.5895 8.20452 12.8005C8.4155 13.0115 8.70164 13.13 9.00001 13.13Z",
    fill: "#FFB337"
  }));
}

function PiCloseIcon({
  handleClose
}) {
  return React.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: handleClose
  }, React.createElement("rect", {
    width: '16',
    height: '16',
    fill: 'white'
  }), React.createElement("path", {
    d: 'M8.00003 7.05733L4.47136 3.52867C4.34563 3.40723 4.17722 3.34003 4.00243 3.34155C3.82763 3.34307 3.66042 3.41318 3.53682 3.53679C3.41321 3.66039 3.3431 3.8276 3.34158 4.0024C3.34006 4.1772 3.40726 4.3456 3.52869 4.47133L7.05736 8L3.52869 11.5287C3.40726 11.6544 3.34006 11.8228 3.34158 11.9976C3.3431 12.1724 3.41321 12.3396 3.53682 12.4632C3.66042 12.5868 3.82763 12.6569 4.00243 12.6584C4.17722 12.66 4.34563 12.5928 4.47136 12.4713L8.00003 8.94267L11.5287 12.4713C11.6544 12.5928 11.8228 12.66 11.9976 12.6584C12.1724 12.6569 12.3396 12.5868 12.4632 12.4632C12.5868 12.3396 12.657 12.1724 12.6585 11.9976C12.66 11.8228 12.5928 11.6544 12.4714 11.5287L8.94269 8L12.4714 4.47133C12.535 4.40984 12.5858 4.33627 12.6208 4.25494C12.6557 4.1736 12.6741 4.08612 12.6749 3.9976C12.6756 3.90908 12.6588 3.82129 12.6252 3.73936C12.5917 3.65743 12.5422 3.583 12.4796 3.5204C12.417 3.45781 12.3426 3.40831 12.2607 3.37479C12.1787 3.34126 12.0909 3.3244 12.0024 3.32517C11.9139 3.32594 11.8264 3.34433 11.7451 3.37927C11.6638 3.4142 11.5902 3.46499 11.5287 3.52867L8.00003 7.05733Z',
    fill: '#8E99B2'
  }));
}

function PiErrorIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.7664 3.98276C13.0093 4.08343 13.2301 4.23099 13.416 4.41701L19.584 10.584C19.7701 10.7699 19.9178 10.9907 20.0186 11.2338C20.1194 11.4769 20.1712 11.7374 20.1712 12.0005C20.1712 12.2636 20.1194 12.5242 20.0186 12.7672C19.9178 13.0103 19.7701 13.2311 19.584 13.417L13.416 19.584C13.2301 19.77 13.0093 19.9176 12.7664 20.0183C12.5234 20.1189 12.263 20.1707 12 20.1707C11.737 20.1707 11.4766 20.1189 11.2336 20.0183C10.9906 19.9176 10.7699 19.77 10.584 19.584L4.41598 13.417C4.22982 13.2311 4.08213 13.0103 3.98136 12.7672C3.8806 12.5242 3.82874 12.2636 3.82874 12.0005C3.82874 11.7374 3.8806 11.4769 3.98136 11.2338C4.08213 10.9907 4.22982 10.7699 4.41598 10.584L10.584 4.41701C10.7699 4.23099 10.9906 4.08343 11.2336 3.98276C11.4766 3.88208 11.737 3.83026 12 3.83026C12.263 3.83026 12.5234 3.88208 12.7664 3.98276ZM11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5195 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5195 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1053 7.48043 11 7.73478 11 8V13C11 13.2652 11.1053 13.5196 11.2929 13.7071ZM11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5195 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5195 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1053 15.4804 11 15.7348 11 16C11 16.2652 11.1053 16.5196 11.2929 16.7071Z",
    fill: "#DC4B43"
  }));
}

function PiSuccessIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.3824 11.0689C9.50441 11.1213 9.61475 11.1975 9.707 11.293L11 12.586L14.293 9.29302C14.3852 9.19751 14.4956 9.12133 14.6176 9.06892C14.7396 9.01651 14.8708 8.98892 15.0036 8.98777C15.1364 8.98662 15.2681 9.01192 15.391 9.0622C15.5138 9.11248 15.6255 9.18673 15.7194 9.28063C15.8133 9.37452 15.8875 9.48617 15.9378 9.60907C15.9881 9.73196 16.0134 9.86364 16.0122 9.99642C16.0111 10.1292 15.9835 10.2604 15.9311 10.3824C15.8787 10.5044 15.8025 10.6148 15.707 10.707L11.707 14.707C11.5195 14.8945 11.2652 14.9998 11 14.9998C10.7348 14.9998 10.4805 14.8945 10.293 14.707L8.293 12.707C8.19749 12.6148 8.1213 12.5044 8.0689 12.3824C8.01649 12.2604 7.9889 12.1292 7.98775 11.9964C7.98659 11.8636 8.0119 11.732 8.06218 11.6091C8.11246 11.4862 8.18671 11.3745 8.2806 11.2806C8.3745 11.1867 8.48615 11.1125 8.60904 11.0622C8.73194 11.0119 8.86362 10.9866 8.9964 10.9878C9.12918 10.9889 9.2604 11.0165 9.3824 11.0689Z",
    fill: "#00A67E"
  }));
}

function PiInfoIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#1976D2"
  }));
}

function PiNormalIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#1976D2"
  }));
}

function generateFlagTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$k(props);
  } else {
    return defaultTemplate$8(props);
  }
}
function AtlasKitTemplate$k(props) {
  const atlasIcon = atlasKitIcons(props.appearance);
  const theme = useContext(PiThemeContext);
  const appearance = props.appearance;
  return React.createElement("div", {
    className: PiFlagClass(theme, appearance)
  }, React.createElement(Flag, Object.assign({
    icon: atlasIcon
  }, props)), " ");
}
function atlasKitIcons(appearance) {
  let flagIcon;
  switch (appearance) {
    case 'info':
      flagIcon = React.createElement(InfoIcon, {
        label: 'Info',
        secondaryColor: token('color.iconBorder.discovery', N500)
      });
      break;
    case 'success':
      flagIcon = React.createElement(SuccessIcon, {
        label: 'Success',
        secondaryColor: token('color.iconBorder.success', G400)
      });
      break;
    case 'error':
      flagIcon = React.createElement(ErrorIcon, {
        label: 'Error',
        secondaryColor: token('color.iconBorder.danger', R400)
      });
      break;
    case 'warning':
      flagIcon = React.createElement(WarningIcon, {
        label: 'Warning',
        secondaryColor: token('color.iconBorder.warning', Y200)
      });
      break;
    default:
      flagIcon = React.createElement(InfoIcon, {
        primaryColor: token('color.iconBorder.discovery', B300),
        label: 'Info'
      });
  }
  return flagIcon;
}
function defaultTemplate$8(props) {
  const theme = useContext(PiThemeContext);
  const atlasIcon = getDeafualtIcons(props.appearance);
  return React.createElement("div", {
    className: PiFlagDefaultClass(theme)
  }, React.createElement("div", {
    className: "flag-icon"
  }, atlasIcon), React.createElement("div", {
    className: "flag-content"
  }, React.createElement(PiTypography$1, {
    component: "pbold"
  }, props.title), React.createElement(PiTypography$1, {
    component: "p"
  }, props.description), props.children), React.createElement("div", {
    className: "close-icon"
  }, React.createElement(PiCloseIcon, {
    handleClose: props.handleClose
  })));
}
function getDeafualtIcons(appearance) {
  switch (appearance) {
    case 'error':
      {
        return React.createElement(PiErrorIcon, null);
      }
    case 'info':
      {
        return React.createElement(PiInfoIcon, null);
      }
    case 'normal':
      {
        return React.createElement(PiNormalIcon, null);
      }
    case 'success':
      {
        return React.createElement(PiSuccessIcon, null);
      }
    case 'warning':
      {
        return React.createElement(PiWarningIcon, null);
      }
    default:
      {
        return React.createElement(PiInfoIcon, null);
      }
  }
}

class PiFlagProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.appearance = 'info';
  }
}
function PiFlag(props) {
  const newprops = new PiFlagProps();
  return generateFlagTemplate({
    ...newprops,
    ...props
  });
}

let _$j = t => t,
  _t$j,
  _t2$4,
  _t3$4,
  _t4$4,
  _t5$3,
  _t6$3;
function getAppearanceStyles$2(appearance, props) {
  switch (appearance) {
    case 'error':
      {
        return error$1(props);
      }
    case 'information':
      {
        return info$1(props);
      }
    case 'discovery':
      {
        return discovery(props);
      }
    case 'success':
      {
        return success$1(props);
      }
    case 'warning':
      {
        return warning$1(props);
      }
    default:
      {
        return info$1(props);
      }
  }
}
const error$1 = props => css(_t$j || (_t$j = _$j`
background-color: ${0} !important;
`), props.dangerBGColor);
const info$1 = props => css(_t2$4 || (_t2$4 = _$j`
background-color: ${0} !important;
`), props.infoBGColor);
const discovery = props => css(_t3$4 || (_t3$4 = _$j`
background-color: ${0} !important;
`), props.tabHeaderBG);
const success$1 = props => css(_t4$4 || (_t4$4 = _$j`
background-color: ${0} !important;
`), props.successBGColor);
const warning$1 = props => css(_t5$3 || (_t5$3 = _$j`
background-color: ${0} !important;
`), props.warningoxBGColor);
const PiSestionMessageClass = (props, appearance) => css(_t6$3 || (_t6$3 = _$j`
  section{
    padding: 16px;
    ${0}
    div:nth-child(1){
      width:32px;
    }
    h1{
      color: #2E374A;
      font-size: 18px;
      font-weight:bold;
      margin:0px !important;
    }
    p{
      color: #4E586D;
      
    }
  }
  
`), getAppearanceStyles$2(appearance, props));

function generateSectionMessageTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$l(props);
  } else {
    return defaultTemplate$9();
  }
}
function AtlasKitTemplate$l({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const appearance = props.appearance;
  return React.createElement("div", {
    className: PiSestionMessageClass(theme, appearance)
  }, React.createElement(SectionMessage, Object.assign({}, props), props.children));
}
function defaultTemplate$9() {
  return React.createElement("div", null);
}

class PiSectionMessageProps extends BaseProps {}
function PiSectionMessage(props) {
  const newprops = new PiSectionMessageProps();
  return generateSectionMessageTemplate({
    ...newprops,
    ...props
  });
}

let _$k = t => t,
  _t$k;
const PiPageHeaderClass = () => css(_t$k || (_t$k = _$k`
  width: 100%;
  .css-12n0woh-TitleWrapper{
   display:flex;
   justify-content:space-between;
   align-items:center;
  }
`));

function generatePageHeaderTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$m(props);
  } else {
    return defaultTemplate$a();
  }
}
function AtlasKitTemplate$m({
  ...props
}) {
  return React.createElement("div", {
    className: PiPageHeaderClass()
  }, React.createElement(PageHeader, Object.assign({}, props), props.children));
}
function defaultTemplate$a() {
  return React.createElement("div", null);
}

class PiPageHeaderProps extends BaseProps {}
function PiPageHeader(props) {
  const newprops = new PiPageHeaderProps();
  return generatePageHeaderTemplate({
    ...newprops,
    ...props
  });
}

function PiProfileArrowIcon() {
  return React.createElement("svg", {
    width: '8',
    height: '4',
    viewBox: '0 0 8 4',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1.80506 0.195262C1.54471 -0.0650874 1.1226 -0.0650874 0.862254 0.195262C0.601905 0.455612 0.601905 0.877722 0.862254 1.13807L3.52892 3.80474C3.78927 4.06509 4.21138 4.06509 4.47173 3.80474L7.1384 1.13807C7.39875 0.877722 7.39875 0.455612 7.1384 0.195262C6.87805 -0.0650874 6.45594 -0.0650874 6.19559 0.195262L4.00033 2.39052L1.80506 0.195262Z',
    fill: 'white'
  }));
}

let _$l = t => t,
  _t$l;
const PiProfileSectionClass = () => css(_t$l || (_t$l = _$l`
  display: flex;
  justify-content: center;
  align-items: center;
  .down-arrow{
    margin-left: 5px;
  }
  .arrowClass {
    svg {
      margin-left: 5px;
    }
  }
`));

function generateProfileTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$n(props);
  } else {
    return DefaultTemplate$b();
  }
}
function AtlasKitTemplate$n({
  ...props
}) {
  console.log(props.userImage);
  const userImg = props.userImage;
  return React.createElement("div", null, React.createElement(DropdownMenu, Object.assign({}, props, {
    trigger: ({
      triggerRef,
      ...props
    }) => React.createElement(AtlasButton, Object.assign({
      style: {
        backgroundColor: 'transparent'
      }
    }, props, {
      ref: triggerRef
    }), React.createElement("div", {
      className: PiProfileSectionClass()
    }, userImg && React.createElement("img", {
      className: 'user_image',
      src: userImg,
      style: {
        height: '35px',
        width: '35px',
        borderRadius: '50px'
      },
      alt: 'loading'
    }), !userImg && React.createElement(PiAvatar, {
      size: 'medium'
    }), React.createElement("span", {
      className: 'down-arrow'
    }, React.createElement(PiProfileArrowIcon, null))))
  }), React.createElement(DropdownItemGroup, null, props.items.map((item, i) => {
    return React.createElement(DropdownItem, {
      onClick: () => props.onClick(item),
      key: i
    }, item.name);
  }))));
}
function DefaultTemplate$b() {
  return React.createElement(Fragment, null, React.createElement("div", null));
}

class PiProfileSectionProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.placement = 'bottom';
  }
}
function PiProfileSection(props) {
  const newprops = new PiProfileSectionProps();
  return generateProfileTemplate({
    ...newprops,
    ...props
  });
}

let _$m = t => t,
  _t$m;
const PiSearchClass = props => css(_t$m || (_t$m = _$m`
  width: 100%;
  text-align: left;
  position: relative;
  /*width: 50%;*/
  &.new-global-search {
    display: flex;
    align-items: center;
    background: #f7faff;
    border: 0.125rem solid #d0daec;
    height: 40px;
    border-radius: 4px;
    /*div > input {
      border: unset;
      background: unset;
    }*/
    > div:nth-child(2) {
      background-color: unset !important;
      border: unset !important;
    }
    .Cross-svg {
      display: none;
    }
    .Search-svg {
      position: absolute;
      left: 12px;
      top: calc(50% - 0.6em);
      color: #5c5f73;
    }
    .Cross-svg {
      position: absolute;
      right: 15px;
      top: calc(50% - 0.6em);
      color: #5c5f73;
      cursor: pointer;
    }
  }
  .close-icon-container {
    background-color: #baccea;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    svg path {
      fill: #fff;
    }
  }
  div {
    border-style: none;
    background-color: none;
  }
  .div:hover {
    background-color: ${0};
  }
  input {
    margin: 4px 0 8px 0;
    padding: 13px 12px 11px 35px !important;
    justify-content: center;
    align-items: center;
    height: 40px !important;
    background: unset !important;
    border: unset !important;
    box-sizing: border-box;
    border-radius: 4px;
    &:hover {
      background-color: ${0};
      border: 0.125rem solid ${0};
    }
    &:focus {
      background-color: ${0};
      border: 0.125rem solid ${0};
    }
  }
  .error > input {
    border: 0.125rem solid ${0};
  }

  .success > input {
    border: 0.125rem solid ${0};
  }
`), props.white, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);

function PiSearchIcon() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M13.8194 12.6592L17.3334 16.1724L16.1724 17.3333L12.6592 13.8193C11.352 14.8672 9.72612 15.4372 8.05076 15.4348C3.97475 15.4348 0.666687 12.1267 0.666687 8.0507C0.666687 3.97469 3.97475 0.666626 8.05076 0.666626C12.1268 0.666626 15.4348 3.97469 15.4348 8.0507C15.4372 9.72606 14.8673 11.352 13.8194 12.6592ZM12.1735 12.0504C13.2148 10.9796 13.7963 9.54427 13.7939 8.0507C13.7939 4.87719 11.2234 2.30753 8.05076 2.30753C4.87725 2.30753 2.30759 4.87719 2.30759 8.0507C2.30759 11.2234 4.87725 13.7939 8.05076 13.7939C9.54433 13.7962 10.9797 13.2147 12.0505 12.1735L12.1735 12.0504Z",
    fill: "#B6C1D6"
  }));
}

function PiNewCloseIcon() {
  return React.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("g", {
    clipPath: 'url(#clip0_26540_594794)'
  }, React.createElement("path", {
    d: 'M8 0C3.576 0 0 3.576 0 8C0 12.424 3.576 16 8 16C12.424 16 16 12.424 16 8C16 3.576 12.424 0 8 0ZM11.44 11.44C11.128 11.752 10.624 11.752 10.312 11.44L8 9.128L5.688 11.44C5.376 11.752 4.872 11.752 4.56 11.44C4.248 11.128 4.248 10.624 4.56 10.312L6.872 8L4.56 5.688C4.248 5.376 4.248 4.872 4.56 4.56C4.872 4.248 5.376 4.248 5.688 4.56L8 6.872L10.312 4.56C10.624 4.248 11.128 4.248 11.44 4.56C11.752 4.872 11.752 5.376 11.44 5.688L9.128 8L11.44 10.312C11.744 10.616 11.744 11.128 11.44 11.44Z',
    fill: '#BACCEA'
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: 'clip0_26540_594794'
  }, React.createElement("rect", {
    width: '16',
    height: '16',
    fill: 'white'
  }))));
}

function generateSearchTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$o(props);
  } else {
    return DefaultTemplate$c();
  }
}
function AtlasKitTemplate$o({
  onValueChange,
  onClear,
  value,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: `new-global-search ${PiSearchClass(theme)} ${props.className}`
  }, React.createElement(Fragment, null, React.createElement("div", {
    className: 'Search-svg'
  }, React.createElement(PiSearchIcon, null)), React.createElement(AtlasTextfield, Object.assign({
    value: value
  }, props, {
    onChange: onValueChange
  })), value && React.createElement("div", {
    style: {
      padding: '10px',
      paddingLeft: '0px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onClick: onClear
  }, React.createElement(PiNewCloseIcon, null))));
}
function DefaultTemplate$c() {
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  });
}

class PiSearchProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.value = '';
    this.appearance = 'standard';
    this.type = 'text';
  }
}
function PiSearch(props) {
  const newprops = new PiSearchProps();
  return generateSearchTemplate({
    ...newprops,
    ...props
  });
}

let _$n = t => t,
  _t$n;
const PiBackClass = props => css(_t$n || (_t$n = _$n`
  width: 100%;
  display: flex;
  align-items: center;
  .Back-main {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3f2fd;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: ${0};
    }
    &:focus {
      background-color: ${0};
    }
  }
  .label {
    margin-left: 16px;
  }
  .css-1rm3tso {
    color: #000;
  }
`), props.inputHoverBG, props.white);

function PiBackIcon() {
  return React.createElement("svg", {
    width: '8',
    height: '12',
    viewBox: '0 0 8 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.24853 0.351344C7.4735 0.576377 7.59988 0.881547 7.59988 1.19974C7.59988 1.51794 7.4735 1.82311 7.24853 2.04814L3.29693 5.99974L7.24853 9.95134C7.46712 10.1777 7.58808 10.4808 7.58534 10.7954C7.58261 11.1101 7.4564 11.411 7.23391 11.6335C7.01143 11.856 6.71045 11.9822 6.39581 11.985C6.08118 11.9877 5.77806 11.8667 5.55173 11.6481L0.751734 6.84814C0.526769 6.62311 0.400391 6.31794 0.400391 5.99974C0.400391 5.68155 0.526769 5.37638 0.751734 5.15134L5.55173 0.351344C5.77677 0.126379 6.08194 0 6.40013 0C6.71833 0 7.0235 0.126379 7.24853 0.351344V0.351344Z',
    fill: '#134C85'
  }));
}

function useLocation() {
  let history = useHistory();
  function navigate(to, {
    replace = false
  } = {}) {
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }
  return {
    navigate
  };
}

function generateBackTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$p(props);
  } else {
    return DefaultTemplate$d();
  }
}
function AtlasKitTemplate$p({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const {
    navigate
  } = useLocation();
  return React.createElement("div", {
    className: PiBackClass(theme)
  }, React.createElement("div", {
    className: 'Back-main',
    onClick: () => navigate(props.backOptions.route)
  }, React.createElement(PiBackIcon, null)), React.createElement("div", {
    className: 'label'
  }, React.createElement(PiTypography$1, {
    component: 'h4'
  }, props.backOptions.name)));
}
function DefaultTemplate$d() {
  return React.createElement(Fragment, null, React.createElement("div", null));
}

class PiBackSectionProps extends BaseProps {}
function PiBackSection(props) {
  const newprops = new PiBackSectionProps();
  return generateBackTemplate({
    ...newprops,
    ...props
  });
}

let _$o = t => t,
  _t$o;
const PiAttachmentClass = props => css(_t$o || (_t$o = _$o`
  width: 100%;
  position: relative;
  display: flex;
  .main-container {
    width: 130px;
    height: 170px;
    background: ${0};
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
`), props.attachmentBg);

function PiCssAtachmentIcon() {
  return React.createElement("svg", {
    width: '31',
    height: '40',
    viewBox: '0 0 31 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M28.5824 0.799805H3.38242C2.06242 0.799805 0.982422 1.8798 0.982422 3.1998V36.7998C0.982422 38.1198 2.06242 39.1998 3.38242 39.1998H28.5824C29.9024 39.1998 30.9824 38.1198 30.9824 36.7998V3.1998C30.9824 1.8798 29.9024 0.799805 28.5824 0.799805ZM22.8693 14.27C22.7852 14.1703 22.64 14.0841 22.4338 14.0096C22.291 13.9603 21.9669 13.8727 21.4607 13.7469C20.809 13.5848 20.3518 13.3869 20.089 13.1527C19.7193 12.8217 19.5359 12.4183 19.5359 11.942C19.5359 11.6362 19.6224 11.3493 19.7962 11.0828C19.9703 10.8152 20.221 10.6124 20.5463 10.4731C20.8738 10.3339 21.2687 10.2642 21.7294 10.2642C22.4842 10.2642 23.0542 10.4297 23.4335 10.7597C23.8152 11.0897 24.0166 11.5325 24.0359 12.0845L22.8226 12.1389C22.7709 11.8293 22.6581 11.6086 22.4877 11.4717C22.316 11.3372 22.0619 11.2689 21.7184 11.2689C21.3657 11.2689 21.0909 11.342 20.8905 11.4862C20.7633 11.5796 20.6974 11.7045 20.6974 11.8606C20.6974 12.0023 20.7585 12.1247 20.8774 12.2254C21.0309 12.3537 21.4029 12.4882 21.9932 12.6286C22.5836 12.7665 23.0215 12.9117 23.3036 13.0606C23.5867 13.2095 23.8101 13.4134 23.9695 13.6713C24.1291 13.9306 24.2084 14.2486 24.2084 14.6302C24.2084 14.9747 24.1125 15.2975 23.9229 15.5985C23.7308 15.8985 23.4608 16.123 23.1094 16.2692C22.7601 16.4158 22.3246 16.4889 21.8015 16.4889C21.0418 16.4889 20.4573 16.3137 20.0494 15.962C19.6425 15.6103 19.399 15.0979 19.3197 14.4261L20.5005 14.311C20.5725 14.7082 20.7164 14.9985 20.9336 15.1858C21.1508 15.3731 21.4447 15.4641 21.8119 15.4641C22.203 15.4641 22.4985 15.3813 22.695 15.2158C22.8943 15.0503 22.9926 14.8569 22.9926 14.6362C22.9942 14.4907 22.9522 14.3696 22.8694 14.27L22.8693 14.27ZM17.2652 14.27C17.1824 14.1703 17.0372 14.0841 16.8296 14.0096C16.6869 13.9603 16.3628 13.8727 15.8566 13.7469C15.2062 13.5848 14.749 13.3869 14.4862 13.1527C14.1166 12.8217 13.9331 12.4183 13.9331 11.942C13.9331 11.6362 14.0196 11.3493 14.1935 11.0828C14.3676 10.8152 14.6183 10.6124 14.9435 10.4731C15.27 10.3339 15.6659 10.2642 16.1266 10.2642C16.8815 10.2642 17.4501 10.4297 17.8308 10.7597C18.2125 11.0897 18.4128 11.5325 18.4318 12.0845L17.2185 12.1389C17.1668 11.8293 17.0553 11.6086 16.885 11.4717C16.7133 11.3372 16.4577 11.2689 16.1157 11.2689C15.7629 11.2689 15.4867 11.342 15.2877 11.4862C15.1594 11.5796 15.0946 11.7045 15.0946 11.8606C15.0946 12.0023 15.1557 12.1247 15.2746 12.2254C15.4281 12.3537 15.8002 12.4882 16.3905 12.6286C16.9808 12.7665 17.4177 12.9117 17.7008 13.0606C17.9839 13.2095 18.206 13.4134 18.3656 13.6713C18.5263 13.9306 18.6056 14.2486 18.6056 14.6302C18.6056 14.9747 18.5108 15.2975 18.3188 15.5985C18.128 15.8985 17.8567 16.123 17.5063 16.2692C17.157 16.4158 16.7204 16.4889 16.1984 16.4889C15.4377 16.4889 14.8543 16.3137 14.4463 15.962C14.0394 15.6103 13.796 15.0979 13.7166 14.4261L14.8974 14.311C14.9694 14.7082 15.1133 14.9985 15.3294 15.1858C15.5477 15.3717 15.8405 15.4641 16.2091 15.4641C16.6001 15.4641 16.8942 15.3813 17.0922 15.2158C17.2915 15.0503 17.3898 14.8569 17.3898 14.6362C17.3914 14.4907 17.3504 14.3696 17.2652 14.27L17.2652 14.27ZM8.51959 11.0948C9.03682 10.5417 9.71609 10.2655 10.5572 10.2655C11.2928 10.2655 11.8903 10.4827 12.35 10.9172C12.6235 11.174 12.8276 11.5423 12.9655 12.0247L11.7631 12.3116C11.6924 11.9996 11.5435 11.7537 11.319 11.5736C11.0935 11.3936 10.8187 11.3026 10.4959 11.3026C10.0494 11.3026 9.68832 11.4633 9.41108 11.7815C9.13385 12.1032 8.99457 12.6204 8.99457 13.3367C8.99457 14.0974 9.13011 14.6387 9.40493 14.9615C9.67841 15.2843 10.0325 15.445 10.4718 15.445C10.7946 15.445 11.0718 15.3419 11.3035 15.1378C11.5363 14.9312 11.7032 14.6098 11.8039 14.1695L12.9811 14.5426C12.8011 15.1991 12.5011 15.6861 12.0811 16.0053C11.6601 16.3246 11.1283 16.4829 10.4828 16.4829C9.68483 16.4829 9.02833 16.2094 8.51349 15.6633C8.00001 15.1185 7.74179 14.3722 7.74179 13.4264C7.74447 12.4254 8.00348 11.6492 8.51966 11.0947L8.51959 11.0948ZM24.974 31.4495H6.99044V30.2495H24.9733L24.974 31.4495ZM24.974 27.2002H6.99044V26.0002H24.9733L24.974 27.2002Z',
    fill: '#8E99B2'
  }));
}

function PiXlsxAtachmentIcon() {
  return React.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM18.3072 14.2062C18.2317 14.1151 18.0972 14.0345 17.9076 13.9673C17.7779 13.9228 17.4827 13.8425 17.0196 13.7283C16.4244 13.5808 16.0068 13.3994 15.7668 13.1849C15.4296 12.8824 15.2603 12.5128 15.2603 12.0783C15.2603 11.7987 15.3396 11.5359 15.4979 11.2924C15.6575 11.0489 15.8855 10.8641 16.1844 10.7356C16.4834 10.6072 16.8444 10.5448 17.2655 10.5448C17.9555 10.5448 18.4738 10.6959 18.8231 10.9983C19.1724 11.3007 19.3548 11.7052 19.3738 12.2104L18.2628 12.2583C18.2159 11.9763 18.1128 11.7735 17.958 11.6487C17.8007 11.5252 17.5669 11.4639 17.2548 11.4639C16.9307 11.4639 16.68 11.5298 16.4965 11.6618C16.3789 11.747 16.3213 11.8611 16.3213 12.0039C16.3213 12.1335 16.3765 12.2449 16.4869 12.3363C16.6261 12.4552 16.9658 12.5763 17.5069 12.7046C18.0458 12.8318 18.4465 12.9639 18.7045 13.1005C18.9624 13.236 19.1665 13.4233 19.3117 13.6584C19.4593 13.8949 19.5324 14.1864 19.5324 14.5343C19.5324 14.8488 19.4435 15.1439 19.2696 15.4187C19.0945 15.6935 18.8472 15.8977 18.5269 16.0319C18.2065 16.165 17.808 16.2322 17.3317 16.2322C16.6358 16.2322 16.1027 16.0715 15.7296 15.7511C15.3565 15.4308 15.1345 14.9615 15.0624 14.347L16.1413 14.2415C16.2072 14.6039 16.3382 14.8704 16.5372 15.0407C16.7351 15.2111 17.0041 15.2952 17.3413 15.2952C17.6989 15.2952 17.9679 15.2207 18.1489 15.0697C18.33 14.9186 18.4213 14.7421 18.4213 14.5393C18.421 14.4075 18.3827 14.2972 18.3072 14.2061L18.3072 14.2062ZM10.6814 10.6828H11.7914V15.2093H14.5514V16.1345H10.6814V10.6828ZM5.14718 10.6386H6.44441L7.54718 12.4038L8.62608 10.6372H9.91262L8.20258 13.3073L10.0805 16.1345H8.74128L7.52441 14.2348L6.30137 16.1356H4.97067L6.84864 13.2663L5.14718 10.6386ZM23.992 31.4487H6.00843V30.2487H23.9913L23.992 31.4487ZM23.992 27.1994H6.00843V25.9994H23.9913L23.992 27.1994ZM23.6786 16.1354L22.4593 14.2346L21.2366 16.1354H19.9059L21.7838 13.2661L20.0811 10.6381H21.3794L22.4811 12.4047L23.5611 10.6381H24.8476L23.1365 13.3082L25.0158 16.1354H23.6786Z',
    fill: '#8E99B2'
  }));
}

function PiAttachmentDownloadIcon() {
  return React.createElement("svg", {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12.75 9.75H13.5C14.7721 9.56804 15.75 8.44743 15.75 7.125C15.75 5.67525 14.5747 4.5 13.125 4.5C12.8998 4.5 12.6811 4.52837 12.4725 4.58173C11.9132 3.21381 10.5692 2.25 9 2.25C7.13463 2.25 5.58737 3.61199 5.29842 5.39578C5.05029 5.30157 4.78117 5.25 4.5 5.25C3.25736 5.25 2.25 6.25736 2.25 7.5C2.25 8.74264 3.25736 9.75 4.5 9.75H5.25C5.87132 9.75 6.375 10.2537 6.375 10.875C6.375 11.4963 5.87132 12 5.25 12H4.5C2.01472 12 0 9.98528 0 7.5C0 5.26378 1.63115 3.40853 3.76856 3.05915C4.80346 1.22065 6.77285 0 9 0C10.8804 0 12.5989 0.873288 13.7125 2.28504C16.1279 2.57515 18 4.63144 18 7.125C18 9.55855 16.2075 11.6356 13.8186 11.9773L13.6634 11.9995L12.7813 11.9996C12.7709 11.9999 12.7605 12 12.75 12C12.1287 12 11.625 11.4963 11.625 10.875C11.625 10.2537 12.1287 9.75 12.75 9.75ZM10.125 14.159L10.4545 13.8295C10.8938 13.3902 11.6062 13.3902 12.0455 13.8295C12.4848 14.2688 12.4848 14.9812 12.0455 15.4205L9.7955 17.6705C9.35616 18.1098 8.64384 18.1098 8.2045 17.6705L5.9545 15.4205C5.51517 14.9812 5.51517 14.2688 5.9545 13.8295C6.39384 13.3902 7.10616 13.3902 7.5455 13.8295L7.875 14.159V5.25C7.875 4.62868 8.37868 4.125 9 4.125C9.62132 4.125 10.125 4.62868 10.125 5.25V14.159Z',
    fill: 'white'
  }));
}

function PiZoomIcon() {
  return React.createElement("svg", {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M17.3697 16.0114L14.1162 12.7578C15.3117 11.2098 15.8731 9.26365 15.6859 7.31548C15.4987 5.36738 14.5772 3.56392 13.1088 2.27255C11.6404 0.981189 9.73561 0.298919 7.78273 0.364702C5.82962 0.430482 3.97513 1.2395 2.59646 2.62673C1.21778 4.01396 0.419585 5.8753 0.363502 7.83154C0.307565 9.78779 0.998296 11.6919 2.29502 13.1562C3.59171 14.6203 5.39708 15.5342 7.34323 15.712C9.2894 15.8897 11.2301 15.3179 12.7698 14.1129L16.0185 17.3712L16.0187 17.3713C16.2617 17.6064 16.6105 17.6957 16.9365 17.6062C17.2624 17.5167 17.5169 17.2617 17.6063 16.9353C17.6956 16.609 17.6065 16.2596 17.3717 16.0162L17.3697 16.0114ZM2.33894 8.06398C2.33894 6.53902 2.94383 5.07638 4.02066 3.99822C5.09735 2.91981 6.55785 2.31404 8.08048 2.31404C9.60311 2.31404 11.0637 2.91981 12.1403 3.99822C13.2171 5.07649 13.822 6.53912 13.822 8.06398C13.822 9.58883 13.2171 11.0516 12.1403 12.1297C11.0636 13.2081 9.60311 13.8139 8.08048 13.8139C6.55816 13.8124 5.09858 13.2061 4.02202 12.1281C2.94547 11.0501 2.34017 9.58842 2.3387 8.06374L2.33894 8.06398Z',
    fill: 'white'
  }), React.createElement("path", {
    d: 'M10.9515 7.10549H9.03763V5.18881C9.03763 4.84641 8.85527 4.53009 8.55916 4.35882C8.26305 4.18769 7.89833 4.18769 7.60222 4.35882C7.30611 4.53008 7.12375 4.84641 7.12375 5.18881V7.10549H5.20987C4.86797 7.10549 4.55211 7.28812 4.38109 7.58466C4.21021 7.8812 4.21021 8.24646 4.38109 8.543C4.55211 8.83954 4.86797 9.02217 5.20987 9.02217H7.12375V10.9389C7.12375 11.2813 7.30611 11.5976 7.60222 11.7688C7.89833 11.94 8.26306 11.94 8.55916 11.7688C8.85527 11.5976 9.03763 11.2813 9.03763 10.9389V9.02217H10.9515C11.2934 9.02217 11.6093 8.83954 11.7803 8.543C11.9512 8.24646 11.9512 7.8812 11.7803 7.58466C11.6093 7.28812 11.2934 7.10549 10.9515 7.10549Z',
    fill: 'white'
  }));
}

function PiDeleteIcon() {
  return React.createElement("svg", {
    width: '16',
    height: '18',
    viewBox: '0 0 16 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M2.75 15.75C2.75 16.1642 3.08579 16.5 3.5 16.5H12.5C12.9142 16.5 13.25 16.1642 13.25 15.75V6.75H2.75V15.75ZM11.75 2.25H13.25C14.4926 2.25 15.5 3.25736 15.5 4.5V6C15.5 6.41421 15.1642 6.75 14.75 6.75V15.75C14.75 16.9926 13.7426 18 12.5 18H3.5C2.25736 18 1.25 16.9926 1.25 15.75V6.75C0.835786 6.75 0.5 6.41421 0.5 6V4.5C0.5 3.25736 1.50736 2.25 2.75 2.25H4.25C4.25 1.00736 5.25736 0 6.5 0H9.5C10.7426 0 11.75 1.00736 11.75 2.25ZM4.25 9.75C4.25 9.33579 4.58579 9 5 9C5.41421 9 5.75 9.33579 5.75 9.75V13.5C5.75 13.9142 5.41421 14.25 5 14.25C4.58579 14.25 4.25 13.9142 4.25 13.5V9.75ZM7.25 9.75C7.25 9.33579 7.58579 9 8 9C8.41421 9 8.75 9.33579 8.75 9.75V13.5C8.75 13.9142 8.41421 14.25 8 14.25C7.58579 14.25 7.25 13.9142 7.25 13.5V9.75ZM10.25 9.75C10.25 9.33579 10.5858 9 11 9C11.4142 9 11.75 9.33579 11.75 9.75V13.5C11.75 13.9142 11.4142 14.25 11 14.25C10.5858 14.25 10.25 13.9142 10.25 13.5V9.75ZM6.5 1.5C6.08579 1.5 5.75 1.83579 5.75 2.25H10.25C10.25 1.83579 9.91421 1.5 9.5 1.5H6.5ZM2 5.25H14V4.5C14 4.08579 13.6642 3.75 13.25 3.75H2.75C2.33579 3.75 2 4.08579 2 4.5V5.25Z',
    fill: '#fff'
  }));
}

function PiZipAtachmentIcon() {
  return React.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M19.4568 13.0577C19.6189 12.9953 19.7448 12.897 19.8361 12.7625C19.9272 12.6294 19.973 12.4733 19.973 12.2957C19.973 12.076 19.9082 11.896 19.7809 11.7546C19.6526 11.6118 19.4892 11.5229 19.2926 11.487C19.1485 11.4605 18.8571 11.4463 18.4192 11.4463H17.832V13.1528H18.4969C18.9755 13.1526 19.2958 13.1215 19.4569 13.0578L19.4568 13.0577Z',
    fill: '#8E99B2'
  }), React.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM16.6176 10.4286H18.5665C19.3045 10.4286 19.7858 10.4586 20.01 10.5186C20.3545 10.6086 20.6424 10.8041 20.8752 11.1065C21.108 11.409 21.2245 11.799 21.2245 12.279C21.2245 12.6473 21.1573 12.9569 21.0228 13.209C20.8897 13.461 20.7193 13.6579 20.5128 13.8017C20.3052 13.9445 20.0952 14.0393 19.8828 14.0862C19.5935 14.1438 19.1735 14.1714 18.6239 14.1714H17.8318V16.4407H16.6174L16.6176 10.4286ZM14.2476 10.4286H15.4621V16.4417H14.2476V10.4286ZM8.6328 15.3472L11.7911 11.4461H8.9904V10.4285H13.3908V11.3717L10.0967 15.4289H13.5178V16.4417H8.63259L8.6328 15.3472ZM23.9914 31.4492H6.00789V30.2492H23.9907L23.9914 31.4492ZM23.9914 27.1999H6.00789V25.9999H23.9907L23.9914 27.1999Z',
    fill: '#8E99B2'
  }));
}

function PiDocAtachmentIcon() {
  return React.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M7.51989 14.9958C7.63989 14.8878 7.73578 14.7113 7.81025 14.4654C7.88471 14.2195 7.92301 13.8833 7.92301 13.4585C7.92301 13.0337 7.88578 12.7074 7.81025 12.4792C7.73471 12.2515 7.63025 12.075 7.49578 11.9467C7.36024 11.8195 7.18855 11.7343 6.98096 11.6888C6.82614 11.6526 6.52372 11.6357 6.07128 11.6357H5.57227V15.2778H6.4002C6.71092 15.2778 6.93432 15.2598 7.07226 15.225C7.25226 15.1795 7.40093 15.1026 7.51985 14.9957L7.51989 14.9958Z',
    fill: '#8E99B2'
  }), React.createElement("path", {
    d: 'M12.4556 15.3468C12.8983 15.3468 13.2621 15.1871 13.5452 14.8692C13.8284 14.5512 13.9701 14.0723 13.9701 13.4351C13.9701 12.8061 13.8321 12.3358 13.5559 12.0251C13.2801 11.7155 12.9128 11.5596 12.4543 11.5596C11.997 11.5596 11.6287 11.7168 11.3477 12.0313C11.067 12.3457 10.9277 12.8185 10.9277 13.4509C10.9277 14.0737 11.0718 14.5454 11.3584 14.8668C11.6456 15.1885 12.0142 15.3468 12.4556 15.3468H12.4556Z',
    fill: '#8E99B2'
  }), React.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM16.499 11.3721C16.9717 10.8656 17.5921 10.6125 18.3625 10.6125C19.0356 10.6125 19.5817 10.8105 20.0004 11.209C20.2511 11.4431 20.4384 11.7814 20.5632 12.2218L19.4642 12.4846C19.4007 12.1991 19.2649 11.9735 19.0587 11.8101C18.8521 11.6446 18.6014 11.5618 18.3062 11.5618C17.8983 11.5618 17.5683 11.7083 17.3152 12.0011C17.0607 12.2928 16.9348 12.768 16.9348 13.4231C16.9348 14.118 17.0596 14.6124 17.3093 14.9076C17.5589 15.2027 17.8841 15.3493 18.2837 15.3493C18.5789 15.3493 18.8345 15.2558 19.0458 15.0686C19.2593 14.8813 19.4117 14.5875 19.503 14.1841L20.5806 14.5248C20.4137 15.1248 20.1403 15.5714 19.7551 15.8617C19.3734 16.1534 18.885 16.2986 18.2947 16.2986C17.5664 16.2986 16.9664 16.0489 16.4958 15.551C16.0255 15.0517 15.7903 14.3703 15.7903 13.5051C15.7897 12.5891 16.026 11.8784 16.499 11.3722L16.499 11.3721ZM10.0369 12.0791C10.1618 11.7994 10.3335 11.5487 10.5493 11.3256C10.7666 11.1025 11.0028 10.938 11.2611 10.83C11.6031 10.6859 11.9979 10.6128 12.4455 10.6128C13.2555 10.6128 13.9035 10.8635 14.3896 11.3663C14.8755 11.869 15.1179 12.5674 15.1179 13.4628C15.1179 14.3497 14.8779 15.0444 14.3944 15.5448C13.912 16.0465 13.2675 16.2972 12.46 16.2972C11.6416 16.2972 10.991 16.0476 10.5099 15.5497C10.0275 15.0504 9.78512 14.3642 9.78512 13.488C9.78593 12.9285 9.87004 12.4581 10.0369 12.0791L10.0369 12.0791ZM4.46174 10.706H6.48967C6.9469 10.706 7.29621 10.7409 7.53621 10.8105C7.85897 10.9064 8.13514 11.0757 8.36414 11.317C8.59343 11.5594 8.76968 11.857 8.88968 12.2074C9.00968 12.5591 9.06968 12.9922 9.06968 13.507C9.06968 13.9594 9.01316 14.3494 8.90039 14.6781C8.76244 15.0777 8.5669 15.4015 8.3111 15.6487C8.11904 15.836 7.85868 15.9822 7.53219 16.088C7.28737 16.1649 6.95871 16.2045 6.54943 16.2045H4.4615L4.46174 10.706ZM23.9916 31.4496H6.00802V30.2496H23.9909L23.9916 31.4496ZM23.9916 27.2003H6.00802V26.0003H23.9909L23.9916 27.2003ZM24.744 16.2035L23.5247 14.3028L22.302 16.2035H20.9713L22.8492 13.3342L21.1465 10.7062H22.4448L23.5465 12.4728L24.6265 10.7062H25.913L24.2041 13.3763L26.0833 16.2035H24.744Z',
    fill: '#8E99B2'
  }));
}

function PiHtmlAtachmentIcon() {
  return React.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM15.205 10.384H17.023L18.1137 14.4857L19.1926 10.384H21.0143V16.3971H19.8863V11.6643L18.6922 16.3971H17.5233L16.334 11.6643V16.3971H15.2061L15.2063 10.384H15.205ZM9.65986 10.384H14.4382V11.4016H12.6586V16.3972H11.4441L11.4444 11.4016H9.65992L9.65986 10.384ZM5.24263 16.3971H4.02816V10.384H5.24263V12.7506H7.62096V10.384H8.83543V16.3971H7.62096V13.7678H5.24263V16.3971ZM23.9914 31.4486H6.00789V30.2486H23.9907L23.9914 31.4486ZM23.9914 27.1993H6.00789V25.9993H23.9907L23.9914 27.1993ZM26.4849 16.3965H22.2525V10.4324H23.4669V15.3834H26.4862V16.3964L26.4849 16.3965Z',
    fill: '#8E99B2'
  }));
}

function PiPptAtachmentIcon() {
  return React.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M10.2798 13.0206C10.4419 12.9582 10.5678 12.8599 10.6591 12.7254C10.7502 12.5923 10.796 12.4361 10.796 12.2586C10.796 12.0389 10.7312 11.8589 10.6039 11.7175C10.4756 11.5747 10.3122 11.4858 10.1156 11.4499C9.9715 11.4234 9.68008 11.4092 9.24215 11.4092H8.65527V13.1157H9.32009C9.79983 13.1155 10.1202 13.0844 10.2798 13.0206L10.2798 13.0206Z',
    fill: '#8E99B2'
  }), React.createElement("path", {
    d: 'M15.8833 13.0206C16.0454 12.9582 16.1713 12.8599 16.2626 12.7254C16.3537 12.5923 16.3995 12.4361 16.3995 12.2586C16.3995 12.0389 16.3347 11.8589 16.2074 11.7175C16.0791 11.5747 15.9157 11.4858 15.7191 11.4499C15.575 11.4234 15.2836 11.4092 14.8457 11.4092H14.2588V13.1157H14.9236C15.4033 13.1155 15.7237 13.0844 15.8833 13.0206L15.8833 13.0206Z',
    fill: '#8E99B2'
  }), React.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM18.2181 10.3916H22.9964V11.4092H21.2157V16.4047H20.0012L20.0015 11.4092H18.2183L18.2181 10.3916ZM13.045 10.3916H14.9939C15.7319 10.3916 16.2132 10.4216 16.4374 10.4816C16.7819 10.5716 17.0698 10.7671 17.3026 11.0695C17.5353 11.3719 17.6518 11.762 17.6518 12.242C17.6518 12.6103 17.5846 12.9199 17.4502 13.1719C17.317 13.424 17.1467 13.6209 16.9402 13.7647C16.7326 13.9075 16.5226 14.0023 16.3102 14.0491C16.0209 14.1067 15.6009 14.1343 15.0513 14.1343H14.2592V16.4036H13.0447L13.045 10.3916ZM7.44219 10.3916H9.39113C10.1291 10.3916 10.6104 10.4216 10.8346 10.4816C11.1791 10.5716 11.467 10.7671 11.6998 11.0695C11.9325 11.3719 12.0491 11.762 12.0491 12.242C12.0491 12.6103 11.9819 12.9199 11.8474 13.1719C11.7143 13.424 11.5439 13.6209 11.3374 13.7647C11.1298 13.9075 10.9198 14.0023 10.7074 14.0491C10.4181 14.1067 9.99809 14.1343 9.44848 14.1343H8.65642V16.4036L7.44222 16.4034L7.44219 10.3916ZM23.9912 31.4492H6.00768V30.2492H23.9905L23.9912 31.4492ZM23.9912 27.1999H6.00768V25.9999H23.9905L23.9912 27.1999Z',
    fill: '#8E99B2'
  }));
}

function PiPdfAtachmentIcon() {
  return React.createElement("svg", {
    width: '30',
    height: '39',
    viewBox: '0 0 30 39',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M27.6 0H2.4C1.08 0 0 1.08 0 2.4V36C0 37.32 1.08 38.4 2.4 38.4H27.6C28.92 38.4 30 37.32 30 36V2.4C30 1.08 28.92 0 27.6 0ZM18.888 9.58423H23.0111V10.6018H20.1022V12.0263H22.6125V13.0439H20.1022V15.5987H18.888V9.58423ZM12.81 9.58423H15.0289C15.5293 9.58423 15.911 9.62253 16.1737 9.69941C16.5265 9.80387 16.8289 9.98735 17.0809 10.2539C17.3316 10.519 17.5237 10.8432 17.6558 11.2283C17.7878 11.6135 17.8526 12.0863 17.8526 12.6504C17.8526 13.1448 17.7902 13.572 17.6678 13.9296C17.5178 14.3665 17.303 14.7203 17.0247 14.9917C16.8136 15.1969 16.5291 15.3576 16.1716 15.4717C15.904 15.5558 15.5451 15.5976 15.0964 15.5976H12.8116L12.8111 9.5842L12.81 9.58423ZM7.21077 9.58423H9.1597C9.89767 9.58423 10.379 9.61423 10.6032 9.67423C10.9477 9.76423 11.2356 9.95977 11.4684 10.2622C11.7011 10.5646 11.8177 10.9546 11.8177 11.4346C11.8177 11.8029 11.7504 12.1126 11.6173 12.3646C11.4842 12.6166 11.3138 12.8135 11.1073 12.9573C10.9008 13.1001 10.6908 13.1949 10.4773 13.2418C10.1869 13.2994 9.76799 13.327 9.21839 13.327H8.42632V15.5963H7.21076L7.21077 9.58423ZM23.9916 30.6494H6.00802V29.4494H23.9909L23.9916 30.6494ZM23.9916 26.4001H6.00802V25.2001H23.9909L23.9916 26.4001Z',
    fill: '#8E99B2'
  }));
}

function generateAttachmentsTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$q(props);
  } else {
    return DefaultTemplate$e();
  }
}
function AtlasKitTemplate$q({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const [isModalOpen, setIsOModalOpen] = useState(false);
  function deleteImage(file) {
    props.onClickDelete(file);
  }
  function downloadImage(file) {
    props.onClickDownload(file);
  }
  function previewImage(file) {
    props.onClickPreview(file);
    setIsOModalOpen(true);
  }
  return React.createElement("div", {
    className: PiAttachmentClass(theme)
  }, React.createElement("div", {
    className: 'main-container'
  }, props.attachmentItem.thumbnail ? React.createElement(Fragment, null, React.createElement("div", {
    className: 'image_Container'
  }, React.createElement("img", {
    alt: 'loading',
    src: props.attachmentItem.thumbnail
  })), React.createElement("div", {
    className: 'label label-image'
  }, React.createElement(PiTooltip, {
    content: props.attachmentItem.name,
    libraryType: "atalskit"
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, props.attachmentItem.name)))) : React.createElement(Fragment, null, React.createElement("div", {
    className: 'icon-container'
  }, getIcon$1(props.attachmentItem.type)), React.createElement("div", {
    className: 'label'
  }, React.createElement(PiTooltip, {
    content: props.attachmentItem.name,
    libraryType: "atalskit"
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, props.attachmentItem.name)))), React.createElement("div", {
    className: 'overlay'
  }, React.createElement("div", {
    onClick: props.onClickDownload,
    className: 'icon_class'
  }, props.attachmentItem.downloadUrl ? React.createElement("div", {
    onClick: () => downloadImage(props.attachmentItem)
  }, React.createElement(PiAttachmentDownloadIcon, null)) : React.createElement(PiAttachmentDownloadIcon, null)), (props.attachmentItem.type === 'pdf' || props.attachmentItem.type === 'xlsx' || props.attachmentItem.type === 'docx' || props.attachmentItem.type === 'ppt' || props.attachmentItem.type === 'csv') && React.createElement("a", {
    target: '_blank',
    href: props.attachmentItem.url || props.attachmentItem.downloadUrl,
    className: 'icon_class',
    rel: 'noreferrer'
  }, React.createElement(PiZoomIcon, null)), (props.attachmentItem.type === 'jpg' || props.attachmentItem.type === 'jpeg' || props.attachmentItem.type === 'png' || props.attachmentItem.type === 'svg') && React.createElement("div", {
    onClick: () => previewImage(props.attachmentItem),
    className: 'icon_class'
  }, React.createElement(PiZoomIcon, null)), props.attachmentItem.isDeleteImg && React.createElement("div", {
    onClick: () => deleteImage(props.attachmentItem)
  }, React.createElement(PiDeleteIcon, null)))), React.createElement("div", {
    className: 'Model-container'
  }, React.createElement(PiModal$1, {
    isOpen: isModalOpen,
    width: 'auto'
  }, React.createElement("div", {
    id: 'model-div',
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      maxWidth: '600px'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      right: 0
    },
    onClick: () => setIsOModalOpen(false)
  }, getIcon$1('close')), React.createElement("img", {
    alt: 'loading',
    src: props.attachmentItem.thumbnail,
    style: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  })))));
}
function getIcon$1(type) {
  switch (type) {
    case 'css':
      {
        return React.createElement(PiCssAtachmentIcon, null);
      }
    case 'xlsx':
      {
        return React.createElement(PiXlsxAtachmentIcon, null);
      }
    case 'zip':
      {
        return React.createElement(PiZipAtachmentIcon, null);
      }
    case 'docx':
      {
        return React.createElement(PiDocAtachmentIcon, null);
      }
    case 'html':
      {
        return React.createElement(PiHtmlAtachmentIcon, null);
      }
    case 'ppt':
      {
        return React.createElement(PiPptAtachmentIcon, null);
      }
    case 'pdf':
      {
        return React.createElement(PiPdfAtachmentIcon, null);
      }
    case 'close':
      {
        return React.createElement(PiCloseIcon, null);
      }
    default:
      {
        return React.createElement(PiCssAtachmentIcon, null);
      }
  }
}
function DefaultTemplate$e() {
  return React.createElement(Fragment, null);
}

class PiAttachmentsProps extends BaseProps {}
function PiAttachments(props) {
  const newprops = new PiAttachmentsProps();
  return generateAttachmentsTemplate({
    ...newprops,
    ...props
  });
}

let _$p = t => t,
  _t$p;
const PiAttachmentListClass = () => css(_t$p || (_t$p = _$p`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`));

function generateAttachmentListTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$r(props);
  } else {
    return DefaultTemplate$f();
  }
}
function AtlasKitTemplate$r({
  ...props
}) {
  function deleteImage(file) {
    props.onClickDelete(file);
  }
  function downloadImage(file) {
    props.onClickDownload(file);
  }
  function previewImage(file) {
    props.onClickPreview(file);
  }
  return React.createElement("div", {
    className: PiAttachmentListClass()
  }, props.attachmentItems.map((attachment, index) => {
    return React.createElement("div", {
      key: index,
      className: 'main'
    }, React.createElement(PiAttachments, {
      attachmentItem: attachment,
      onClickDelete: () => deleteImage(attachment),
      onClickDownload: () => downloadImage(attachment),
      onClickPreview: () => previewImage(attachment)
    }));
  }));
}
function DefaultTemplate$f() {
  return React.createElement(Fragment, null);
}

class PiAttachmentListProps extends BaseProps {}
function PiAttachmentList(props) {
  const newprops = new PiAttachmentListProps();
  return generateAttachmentListTemplate({
    ...newprops,
    ...props
  });
}

let _$q = t => t,
  _t$q;
const PiTabClass = props => css(_t$q || (_t$q = _$q`
  .css-127ggxn-TabListWithMode {
    padding: 0 16px;
    border-bottom: 2px solid ${0};
  }

  .css-127ggxn-TabListWithMode::before {
    display: none;
  }

  div[role='tab'] {
    overflow: hidden;
    span {
      color: ${0};
    }
  }
  div[role='tablist'] {
    gap: 16px;
    &::before {
      background-color: unset !important;
    }
  }

  div[role='tab'],
  div[role='tab'][aria-selected='true'] {
    // background: ${0};
    color: ${0};
    font-weight: 400;
    font-size: 14px;
    padding: 10px 0;
  }

  div[role='tab']::after {
    content: '';
    width: 100% !important;
    height: 2px !important;
    background-color: ${0};
    border-radius: none !important;
    border: none !important;
    left: 0 !important;
    right: 0 !important;
    transform: translateX(-100%) !important;
    transition: all 0.3s ease;
    bottom: 0 !important;
    position: absolute !important;
  }

  div[role='tab']:hover {
    color: ${0};
  }

  div[role='tab'][aria-selected='true']::after {
    transform: translateX(0) !important;
  }

  div[role='tab'][aria-selected='true'] {
    color: ${0} !important;
    font-weight: 700;
    font-size: 14px;
  }
`), props.primaryBG, props.primaryBG, props.tabHeaderBG, props.tabColor, props.tabBorder, props.tabBorder, props.tabBorder);

function PiTabGroup(props) {
  const theme = useContext(PiThemeContext);
  const handleChange = e => {
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return React.createElement("div", {
    className: `${PiTabClass(theme)} pitabs-wrapper`
  }, React.createElement(Tabs, {
    id: props.id,
    selected: props.selected,
    onChange: handleChange
  }, props.children));
}
var tabGroup = React.memo(PiTabGroup);

function PiTabHeader(props) {
  return React.createElement(Tab, null, props.children);
}
var PiTabHeader$1 = React.memo(PiTabHeader);

function PiTabHeaderPanel(props) {
  return React.createElement(TabList, null, props.children, props.items && props.items.map(row => React.createElement(PiTabHeader$1, null, row)));
}
var tabHeaderGroup = React.memo(PiTabHeaderPanel);

function PiTabPanel(props) {
  return React.createElement(TabPanel, null, props.children);
}
var tabPanel = React.memo(PiTabPanel);

function PiModalHeader(props) {
  return React.createElement(ModalHeader, null, props.children);
}
var modalHeader = React.memo(PiModalHeader);

function PiModalTitle(props) {
  return React.createElement(ModalTitle, {
    appearance: props.appearance,
    isMultiline: props.isMultiline
  }, props.children);
}
var modalTitle = React.memo(PiModalTitle);

function PiModalFooter(props) {
  return React.createElement(ModalFooter, null, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      width: '100%',
      justifyContent: 'end'
    }
  }, props.children));
}
var modalFooter = React.memo(PiModalFooter);

function PiModalBody(props) {
  return React.createElement(ModalBody, null, props.children);
}
var modalBody = React.memo(PiModalBody);

let _$r = t => t,
  _t$r;
const PiModalClass = css(_t$r || (_t$r = _$r`
  .css-4kplgf {
    border-radius: 8px !important;
    /*box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12) !important;*/
  }
`));

function PiModal(props) {
  return React.createElement("div", {
    className: PiModalClass
  }, React.createElement(ModalTransition, null, props.isOpen && React.createElement(Modal, {
    onClose: props.onClose,
    width: props.width,
    height: props.height
  }, props.children)));
}
var PiModal$1 = React.memo(PiModal);

function AgGridRoot({
  columns,
  defaultColDef,
  exportHandler,
  ...props
}) {
  const sidebarPanel = {
    toolPanels: [{
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      minWidth: 225,
      width: 225,
      maxWidth: 225
    }, {
      id: 'filters',
      labelDefault: 'Filters',
      labelKey: 'filters',
      iconKey: 'filter',
      toolPanel: 'agFiltersToolPanel',
      minWidth: 180,
      maxWidth: 400,
      width: 250
    }],
    defaultToolPanel: ''
  };
  function getContextMenuItems(params) {
    var result = ['copy', 'copyWithHeaders', 'paste', {
      name: 'Excel Export (.xlsx)',
      icon: '<i />',
      action: () => {
        if (exportHandler.action) {
          exportHandler.action(params);
        } else {
          let body = {
            method: exportHandler.method
          };
          if (exportHandler.method !== 'GET') {
            body['body'] = JSON.stringify({
              ...exportHandler.body
            });
          }
          fetch(exportHandler.url, body).then(resp => resp).catch(err => err);
        }
      }
    }];
    return result;
  }
  return React.createElement("div", {
    id: 'myGrid',
    style: {
      height: '100vh',
      width: '100%'
    },
    className: 'ag-theme-alpine'
  }, React.createElement(AgGridReact, Object.assign({
    reactUi: true,
    sideBar: sidebarPanel,
    defaultColDef: defaultColDef,
    getContextMenuItems: exportHandler ? getContextMenuItems : undefined
  }, props), columns.map(column => React.createElement(AgGridColumn, Object.assign({}, column, {
    key: column.field
  })))));
}

const withGridStatic = WrapperComponent => ({
  ...props
}) => {
  return React.createElement(WrapperComponent, Object.assign({}, props));
};

const withGridInfinite = WrapperComponent => ({
  ...props
}) => {
  const onGridReady = params => {
    console.log('infinite');
    if (props.onGridReady) {
      props.onGridReady(params);
    }
    const dataSource = InfiniteSideDatasource();
    params.api.setDatasource(dataSource);
  };
  function InfiniteSideDatasource() {
    return {
      getRows: function (params) {
        console.log('[Datasource] - rows requested by grid: ', params);
        setTimeout(function () {
          const requestInfo = Object.assign({}, props.requestInfo);
          let body = {
            method: requestInfo.method
          };
          if (requestInfo.method !== 'GET') {
            body['body'] = JSON.stringify({
              startRow: params.startRow,
              endRow: params.endRow,
              ...requestInfo.body
            });
          } else {
            requestInfo.url = requestInfo.url + `?startRow=${params.startRow}&endRow=${params.endRow}`;
          }
          fetch(requestInfo.url, body).then(resp => resp.json()).then(data => {
            if (data) {
              var response = data.data;
              params.successCallback(response, data.totalCount);
            } else {
              params.failCallback();
            }
          });
        }, 200);
      }
    };
  }
  return React.createElement(WrapperComponent, Object.assign({
    rowBuffer: 0,
    rowSelection: 'multiple',
    rowModelType: 'infinite',
    cacheBlockSize: 100,
    cacheOverflowSize: 2,
    maxConcurrentDatasourceRequests: 1,
    infiniteInitialRowCount: 1000,
    maxBlocksInCache: 10
  }, props, {
    onGridReady: onGridReady
  }));
};

const withGridPagination = WrapperComponent => ({
  ...props
}) => {
  const onGridReady = params => {
    if (props.onGridReady) {
      props.onGridReady(params);
    }
    const dataSource = ServerSideDatasource();
    params.api.setServerSideDatasource(dataSource);
  };
  function ServerSideDatasource() {
    return {
      getRows: function (params) {
        console.log('[Datasource] - rows requested by grid: ', params.request, props);
        setTimeout(function () {
          const requestInfo = Object.assign({}, props.requestInfo);
          let body = {
            method: requestInfo.method
          };
          if (requestInfo.method !== 'GET') {
            body['body'] = JSON.stringify({
              startRow: params.request.startRow,
              endRow: params.request.endRow,
              ...requestInfo.body
            });
          } else {
            requestInfo.url = requestInfo.url + `?startRow=${params.request.startRow}&endRow=${params.request.endRow}`;
          }
          fetch(requestInfo.url, body).then(resp => resp.json()).then(data => {
            if (data) {
              var response = data.data;
              params.success({
                rowData: response,
                rowCount: data.totalCount
              });
            } else {
              params.fail();
            }
          });
        }, 200);
      }
    };
  }
  return React.createElement(WrapperComponent, Object.assign({
    rowModelType: 'serverSide',
    serverSideStoreType: 'partial',
    pagination: true,
    paginationPageSize: 20,
    cacheBlockSize: 10,
    animateRows: true
  }, props, {
    onGridReady: onGridReady
  }));
};

function AgGridTemplate(props) {
  const defaultColDef = {
    sortable: true,
    rowDrag: false,
    resizable: true,
    enableRowGroup: true,
    enableValue: true,
    enablePivot: true,
    flex: 1,
    ...(props === null || props === void 0 ? void 0 : props.defaultColDef)
  };
  const GRIDCOMPONENT = getGridComponent(props);
  function getGridComponent(props) {
    switch (props.mode) {
      case 'infinite':
        {
          console.log('infinite');
          return withGridInfinite(AgGridRoot);
        }
      case 'paginate':
        {
          return withGridPagination(AgGridRoot);
        }
      default:
        {
          return withGridStatic(AgGridRoot);
        }
    }
  }
  return React.createElement(GRIDCOMPONENT, Object.assign({}, props, {
    defaultColDef: defaultColDef
  }));
}

function generateGridTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AgGridTemplate(props);
  } else {
    return DefaultTemplate$g();
  }
}
function DefaultTemplate$g() {
  return React.createElement("div", null);
}

class PiGridProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.columns = [];
  }
}
function PiGrid(props) {
  const newprops = new PiGridProps();
  return generateGridTemplate({
    ...newprops,
    ...props
  });
}

let _$s = t => t,
  _t$s;
const PiproductCardlass = props => css(_t$s || (_t$s = _$s`
  flex: 0 0 25%;
  max-width: 100%;
  background: ${0};
  border: 2px solid ${0};
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
    border-top: 1px solid ${0};
    display: flex;
    

    button{
      width: 100%;
      border-radius:0px !important;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: ${0};
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
      border-left: 1px solid ${0} !important;
    }

    button:not(:disabled), [type="button"]:not(:disabled){
      cursor: pointer;
    }
  }

`), props.white, props.primaryColor, props.primaryColor, props.primaryHoverBG, props.white);

function PiAddToCartIcon() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M1 1H3L3.4 3M3.4 3H19L15 11H5M3.4 3L5 11M5 11L2.707 13.293C2.077 13.923 2.523 15 3.414 15H15M15 15C14.4696 15 13.9609 15.2107 13.5858 15.5858C13.2107 15.9609 13 16.4696 13 17C13 17.5304 13.2107 18.0391 13.5858 18.4142C13.9609 18.7893 14.4696 19 15 19C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15ZM7 17C7 17.5304 6.78929 18.0391 6.41421 18.4142C6.03914 18.7893 5.53043 19 5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15C5.53043 15 6.03914 15.2107 6.41421 15.5858C6.78929 15.9609 7 16.4696 7 17Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function PiAddToWishListIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M3.34255 7.77795C3.5687 7.23198 3.90017 6.7359 4.31804 6.31804C4.7359 5.90017 5.23198 5.5687 5.77795 5.34255C6.32392 5.1164 6.90909 5 7.50004 5C8.09099 5 8.67616 5.1164 9.22213 5.34255C9.7681 5.5687 10.2642 5.90017 10.682 6.31804L12 7.63604L13.318 6.31804C14.162 5.47412 15.3066 5.00001 16.5 5.00001C17.6935 5.00001 18.8381 5.47412 19.682 6.31804C20.526 7.16196 21.0001 8.30656 21.0001 9.50004C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2642 3.5687 11.7681 3.34255 11.2221C3.1164 10.6762 3 10.091 3 9.50004C3 8.90909 3.1164 8.32392 3.34255 7.77795Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function PiCompareIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M15.6038 4.89191C15.9975 5.28137 16.3932 5.67268 16.787 6.06214C17.4104 6.67864 18.0337 7.29512 18.6571 7.91162C18.8008 8.05374 18.9445 8.19587 19.0882 8.338L19.0882 6.77092C18.6944 7.16038 18.2987 7.55169 17.9049 7.94115L16.0349 9.79063C15.8912 9.93276 15.7475 10.0749 15.6038 10.217C15.4003 10.4182 15.2753 10.7154 15.2753 10.9996C15.2753 11.271 15.3966 11.5958 15.6038 11.7823C15.8165 11.9761 16.0965 12.1201 16.3951 12.1071C16.6918 12.0942 16.9718 11.9945 17.1864 11.7823C17.5802 11.3928 17.9759 11.0015 18.3697 10.612C18.993 9.99554 19.6164 9.37907 20.2397 8.76256C20.3834 8.62044 20.5271 8.47831 20.6708 8.33618C21.0982 7.91351 21.1001 7.19362 20.6708 6.7691C20.2771 6.37964 19.8814 5.98832 19.4876 5.59887C18.8642 4.98422 18.2409 4.36771 17.6194 3.75124C17.4757 3.60912 17.332 3.46699 17.1883 3.32486C16.9849 3.12367 16.6844 3 16.397 3C16.1226 3 15.7941 3.11998 15.6056 3.32486C15.4097 3.53528 15.2641 3.81216 15.2772 4.10749C15.2902 4.40281 15.391 4.67968 15.6038 4.89194L15.6038 4.89191Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M19.8796 6.44613L19.5343 6.44613L18.5937 6.44613L17.2033 6.44613L15.5068 6.44613L13.648 6.44613L11.7704 6.44613L10.0198 6.44613L8.53985 6.44613L7.47605 6.44613C7.30808 6.44613 7.13824 6.44429 6.97029 6.44613L6.94789 6.44613C6.66048 6.44613 6.35998 6.5698 6.15655 6.77099C5.96246 6.96295 5.81688 7.27858 5.82808 7.55362C5.84115 7.83972 5.93633 8.13688 6.15655 8.33625C6.37491 8.5356 6.64552 8.66111 6.94789 8.66111L7.29315 8.66111L8.23376 8.66111L9.62416 8.66111L11.3206 8.66111L13.1795 8.66111L15.057 8.66111L16.8076 8.66111L18.2876 8.66111L19.3514 8.66111C19.5194 8.66111 19.6892 8.66296 19.8572 8.66111L19.8796 8.66111C20.167 8.66111 20.4675 8.53744 20.6709 8.33625C20.865 8.14429 21.0106 7.82866 20.9994 7.55362C20.9863 7.26752 20.8911 6.97036 20.6709 6.77099C20.4526 6.57165 20.1838 6.44613 19.8796 6.44613V6.44613Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M6.81166 12.216C6.41787 12.6055 6.02221 12.9968 5.62842 13.3862L3.75836 15.2357C3.61466 15.3778 3.47095 15.52 3.32724 15.6621C2.89987 16.0848 2.89799 16.8047 3.32724 17.2292C3.72103 17.6186 4.1167 18.01 4.51049 18.3994C5.13385 19.0159 5.75718 19.6324 6.38054 20.2489C6.52424 20.391 6.66795 20.5332 6.81166 20.6753C7.01509 20.8765 7.31558 21.0002 7.603 21.0002C7.87735 21.0002 8.20581 20.8802 8.39433 20.6753C8.59029 20.4649 8.73587 20.188 8.7228 19.8927C8.70974 19.5992 8.60896 19.3223 8.39433 19.11C8.00054 18.7206 7.60487 18.3293 7.21108 17.9398C6.58772 17.3233 5.96439 16.7068 5.34103 16.0903C5.19733 15.9482 5.05362 15.8061 4.90991 15.6639L4.90991 17.231L8.39426 13.785C8.59769 13.5838 8.72273 13.2866 8.72273 13.0023C8.72273 12.731 8.60142 12.4062 8.39426 12.2197C8.1815 12.0259 7.90154 11.8819 7.60293 11.8948C7.30619 11.9041 7.02625 12.0038 6.81159 12.216L6.81166 12.216Z",
    fill: "white"
  }), React.createElement("path", {
    d: "M4.12041 17.5503L4.46567 17.5503L5.40628 17.5503L6.79668 17.5503L8.49316 17.5503L10.352 17.5503L12.2295 17.5503L13.9801 17.5503L15.4601 17.5503L16.5239 17.5503C16.6919 17.5503 16.8617 17.5521 17.0297 17.5503L17.0521 17.5503C17.3395 17.5503 17.64 17.4266 17.8434 17.2254C18.0375 17.0334 18.1831 16.7178 18.1719 16.4428C18.1588 16.1567 18.0636 15.8595 17.8434 15.6601C17.6251 15.4608 17.3545 15.3353 17.0521 15.3353L16.7068 15.3353L15.7662 15.3353L14.3758 15.3353L12.6793 15.3353L10.8205 15.3353L8.94296 15.3353L7.19235 15.3353L5.71237 15.3353L4.64857 15.3353C4.4806 15.3353 4.31076 15.3334 4.1428 15.3353L4.12041 15.3353C3.833 15.3353 3.53251 15.459 3.32907 15.6601C3.13498 15.8521 2.98941 16.1677 3.0006 16.4428C3.01367 16.7289 3.10885 17.026 3.32907 17.2254C3.54743 17.4247 3.81617 17.5503 4.12041 17.5503Z",
    fill: "white"
  }));
}

function generateProductCardTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$s(props);
  } else {
    return defaultTemplate$b();
  }
}
function AtlasKitTemplate$s(props) {
  const theme = useContext(PiThemeContext);
  const defaultProps = generateDefaultProps$6({
    ...props
  });
  return React.createElement("div", {
    className: PiproductCardlass(theme)
  }, React.createElement("div", {
    className: "product-thumb transition"
  }, React.createElement("div", {
    className: "image"
  }, React.createElement("a", {
    onClick: function noRefCheck() {}
  }, React.createElement("img", {
    src: defaultProps.src,
    alt: "",
    title: "",
    className: "img-fluid"
  }))), React.createElement("div", {
    className: "caption"
  }, React.createElement(PiButton, {
    appearance: "link",
    isDisabled: props.isDisabled,
    size: "large",
    label: defaultProps.name,
    libraryType: "atalskit",
    onClick: function noRefCheck() {}
  }), React.createElement(PiTypography$1, {
    component: "p"
  }, defaultProps.description)), React.createElement("div", {
    className: "button-group"
  }, React.createElement("div", {
    className: "button-add-to-cart"
  }, React.createElement(PiTooltip, {
    content: defaultProps.button_lable,
    libraryType: "atalskit",
    position: "top"
  }, React.createElement(PiButton, {
    appearance: "primary",
    label: defaultProps.button_lable,
    libraryType: "atalskit",
    onClick: props.onAddToCartHandler,
    size: "medium",
    type: "button",
    iconBefore: React.createElement(PiAddToCartIcon, null),
    isDisabled: props.isDisabled
  }))), React.createElement("div", {
    className: "button-add-to-wishlist"
  }, React.createElement(PiTooltip, {
    content: "Add to Wish List",
    libraryType: "atalskit",
    position: "top"
  }, React.createElement(PiButton, {
    appearance: "primary",
    label: "",
    libraryType: "atalskit",
    onClick: props.onAddToWishListHandler,
    size: "medium",
    type: "button",
    iconBefore: React.createElement(PiAddToWishListIcon, null),
    isDisabled: props.isDisabled
  }))), React.createElement("div", {
    className: "button-compare"
  }, React.createElement(PiTooltip, {
    content: "Compare this Product",
    libraryType: "atalskit",
    position: "top"
  }, React.createElement(PiButton, {
    appearance: "primary",
    label: "",
    libraryType: "atalskit",
    onClick: props.onCompareHandler,
    size: "medium",
    type: "button",
    iconBefore: React.createElement(PiCompareIcon, null),
    isDisabled: props.isDisabled
  }))))));
}
function defaultTemplate$b() {
  return React.createElement("div", null);
}
function generateDefaultProps$6(props) {
  const defaultProps = {
    name: props.name,
    src: props.src,
    description: props.description,
    button_lable: props.button_lable
  };
  return defaultProps;
}

class PiProductCardProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.isDisabled = false;
  }
}
function PiProductCard(props) {
  const newprops = new PiProductCardProps();
  return generateProductCardTemplate({
    ...newprops,
    ...props
  });
}

let _$t = t => t,
  _t$t;
const PiActionIconClass = props => css(_t$t || (_t$t = _$t`
  background: transparent;
  border: none;
  outline: none;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  svg path{
    fill: ${0};
  }

  .icon-text{
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-left:9px;
    color: ${0};
  }
  
`), props.primaryBG, props.primaryBG);

function PiDownloadIcon() {
  return React.createElement("svg", {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12.75 9.75H13.5C14.7721 9.56804 15.75 8.44743 15.75 7.125C15.75 5.67525 14.5747 4.5 13.125 4.5C12.8998 4.5 12.6811 4.52837 12.4725 4.58173C11.9132 3.21381 10.5692 2.25 9 2.25C7.13463 2.25 5.58737 3.61199 5.29842 5.39578C5.05029 5.30157 4.78117 5.25 4.5 5.25C3.25736 5.25 2.25 6.25736 2.25 7.5C2.25 8.74264 3.25736 9.75 4.5 9.75H5.25C5.87132 9.75 6.375 10.2537 6.375 10.875C6.375 11.4963 5.87132 12 5.25 12H4.5C2.01472 12 0 9.98528 0 7.5C0 5.26378 1.63115 3.40853 3.76856 3.05915C4.80346 1.22065 6.77285 0 9 0C10.8804 0 12.5989 0.873288 13.7125 2.28504C16.1279 2.57515 18 4.63144 18 7.125C18 9.55855 16.2075 11.6356 13.8186 11.9773L13.6634 11.9995L12.7813 11.9996C12.7709 11.9999 12.7605 12 12.75 12C12.1287 12 11.625 11.4963 11.625 10.875C11.625 10.2537 12.1287 9.75 12.75 9.75ZM10.125 14.159L10.4545 13.8295C10.8938 13.3902 11.6062 13.3902 12.0455 13.8295C12.4848 14.2688 12.4848 14.9812 12.0455 15.4205L9.7955 17.6705C9.35616 18.1098 8.64384 18.1098 8.2045 17.6705L5.9545 15.4205C5.51516 14.9812 5.51516 14.2688 5.9545 13.8295C6.39384 13.3902 7.10616 13.3902 7.5455 13.8295L7.875 14.159V5.25C7.875 4.62868 8.37868 4.125 9 4.125C9.62132 4.125 10.125 4.62868 10.125 5.25V14.159Z',
    fill: 'white'
  }));
}

function PiPrintIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.00039 4.80039V8.40039H4.80039C4.16387 8.40039 3.55342 8.65325 3.10333 9.10333C2.65325 9.55342 2.40039 10.1639 2.40039 10.8004V14.4004C2.40039 15.0369 2.65325 15.6474 3.10333 16.0974C3.55342 16.5475 4.16387 16.8004 4.80039 16.8004H6.00039V19.2004C6.00039 19.8369 6.25325 20.4474 6.70333 20.8974C7.15342 21.3475 7.76387 21.6004 8.40039 21.6004H15.6004C16.2369 21.6004 16.8474 21.3475 17.2974 20.8974C17.7475 20.4474 18.0004 19.8369 18.0004 19.2004V16.8004H19.2004C19.8369 16.8004 20.4474 16.5475 20.8974 16.0974C21.3475 15.6474 21.6004 15.0369 21.6004 14.4004V10.8004C21.6004 10.1639 21.3475 9.55342 20.8974 9.10333C20.4474 8.65325 19.8369 8.40039 19.2004 8.40039H18.0004V4.80039C18.0004 4.16387 17.7475 3.55342 17.2974 3.10333C16.8474 2.65325 16.2369 2.40039 15.6004 2.40039H8.40039C7.76387 2.40039 7.15342 2.65325 6.70333 3.10333C6.25325 3.55342 6.00039 4.16387 6.00039 4.80039ZM15.6004 4.80039H8.40039V8.40039H15.6004V4.80039ZM15.6004 14.4004H8.40039V19.2004H15.6004V14.4004Z",
    fill: "#B6C1D6"
  }));
}

function PiFilterIcon() {
  return React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61493 13.8979C8.98484 14.1568 9.5 13.8944 9.5 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z",
    fill: "#B6C1D6"
  }));
}

function PiSortIcon() {
  return React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839V4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14286 12.8125 7.14286H7.5625C7.32086 7.14286 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z",
    fill: "#B6C1D6"
  }));
}

function PiMailIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M2.40332 7.0606L11.9997 11.8582L21.5961 7.0606C21.5606 6.44914 21.2926 5.87439 20.8471 5.45408C20.4016 5.03376 19.8122 4.79969 19.1997 4.7998H4.79972C4.18722 4.79969 3.59786 5.03376 3.15233 5.45408C2.70681 5.87439 2.43885 6.44914 2.40332 7.0606V7.0606Z",
    fill: "#B6C1D6"
  }), React.createElement("path", {
    d: "M21.6004 9.74121L12.0004 14.5412L2.40039 9.74121V16.7996C2.40039 17.4361 2.65325 18.0466 3.10333 18.4967C3.55342 18.9468 4.16387 19.1996 4.80039 19.1996H19.2004C19.8369 19.1996 20.4474 18.9468 20.8974 18.4967C21.3475 18.0466 21.6004 17.4361 21.6004 16.7996V9.74121Z",
    fill: "#B6C1D6"
  }));
}

function PiMoreIcon() {
  return React.createElement("svg", {
    width: "5",
    height: "20",
    viewBox: "0 0 5 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.989258 2C0.989258 0.89543 1.88376 0 2.9872 0C4.09063 0 4.98513 0.89543 4.98513 2C4.98513 3.10457 4.09063 4 2.9872 4C1.88376 4 0.989258 3.10457 0.989258 2ZM0.989258 10C0.989258 8.89543 1.88376 8 2.9872 8C4.09063 8 4.98513 8.89543 4.98513 10C4.98513 11.1046 4.09063 12 2.9872 12C1.88376 12 0.989258 11.1046 0.989258 10ZM0.989258 18C0.989258 16.8954 1.88376 16 2.9872 16C4.09063 16 4.98513 16.8954 4.98513 18C4.98513 19.1046 4.09063 20 2.9872 20C1.88376 20 0.989258 19.1046 0.989258 18Z",
    fill: "#134C85"
  }));
}

function generateActionIconTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$t(props);
  } else {
    return defaultTemplate$c();
  }
}
function AtlasKitTemplate$t({
  appearance,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("button", Object.assign({}, props, {
    className: PiActionIconClass(theme)
  }), getIcon$2(appearance), React.createElement("span", {
    className: "icon-text"
  }, props.icontext));
}
function getIcon$2(appearance) {
  switch (appearance) {
    case 'download':
      {
        return React.createElement(PiDownloadIcon, null);
      }
    case 'print':
      {
        return React.createElement(PiPrintIcon, null);
      }
    case 'sort':
      {
        return React.createElement(PiSortIcon, null);
      }
    case 'filter':
      {
        return React.createElement(PiFilterIcon, null);
      }
    case 'mail':
      {
        return React.createElement(PiMailIcon, null);
      }
    case 'more':
      {
        return React.createElement(PiMoreIcon, null);
      }
    default:
      {
        return React.createElement(PiDownloadIcon, null);
      }
  }
}
function defaultTemplate$c() {
  return React.createElement("div", null);
}

class PiActionIconProps extends BaseProps {}
function PiActionIcon(props) {
  const newprops = new PiActionIconProps();
  return generateActionIconTemplate({
    ...newprops,
    ...props
  });
}

let _$u = t => t,
  _t$u;
const PiLabelNameClass = props => css(_t$u || (_t$u = _$u`
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
    color: ${0};
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
      color: ${0};
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
`), props.labelColor, props.lablelDescription);

function PiEditIcon({
  onClick
}) {
  return React.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: () => onClick(true)
  }, React.createElement("path", {
    d: 'M8.86919 0.871274C9.01679 0.718457 9.19334 0.596566 9.38854 0.512711C9.58375 0.428857 9.7937 0.384719 10.0061 0.382873C10.2186 0.381027 10.4293 0.42151 10.6259 0.501959C10.8226 0.582408 11.0012 0.701213 11.1514 0.851442C11.3017 1.00167 11.4205 1.18031 11.5009 1.37695C11.5814 1.57358 11.6218 1.78427 11.62 1.99672C11.6181 2.20916 11.574 2.41911 11.4902 2.61432C11.4063 2.80953 11.2844 2.98608 11.1316 3.13367L10.4972 3.76807L8.23479 1.50567L8.86919 0.871274ZM7.10359 2.63687L0.400391 9.34007V11.6025H2.66279L9.36679 4.89927L7.10279 2.63687H7.10359Z',
    fill: '#134C85'
  }));
}

function PiCopyIcon() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M16.2 9.60354H13.8C13.3226 9.60354 12.8648 9.4139 12.5272 9.07633C12.1897 8.73877 12 8.28093 12 7.80354V5.40354C11.9993 5.28436 12.0341 5.16768 12.1 5.06837C12.1659 4.96906 12.2599 4.89162 12.3699 4.84592C12.48 4.80022 12.6012 4.78833 12.718 4.81177C12.8349 4.83521 12.9421 4.89292 13.026 4.97754L16.626 8.57754C16.7106 8.66146 16.7683 8.76868 16.7918 8.88553C16.8152 9.00238 16.8033 9.12356 16.7576 9.23363C16.7119 9.34369 16.6345 9.43766 16.5352 9.50354C16.4359 9.56942 16.3192 9.60423 16.2 9.60354ZM13.2 6.84954V7.80354C13.2 7.96267 13.2632 8.11528 13.3757 8.2278C13.4883 8.34032 13.6409 8.40354 13.8 8.40354H14.754L13.2 6.84954Z",
    fill: "#124eb0"
  }), React.createElement("path", {
    d: "M14.9996 21.6035H5.39961C4.92222 21.6035 4.46438 21.4138 4.12682 21.0763C3.78925 20.7387 3.59961 20.2809 3.59961 19.8035V6.60348C3.59961 6.12609 3.78925 5.66825 4.12682 5.33068C4.46438 4.99312 4.92222 4.80348 5.39961 4.80348H12.5996C12.6786 4.80302 12.7569 4.81816 12.83 4.84801C12.9031 4.87787 12.9695 4.92187 13.0256 4.97748L16.6256 8.57748C16.6812 8.63354 16.7252 8.70003 16.7551 8.77313C16.7849 8.84624 16.8001 8.92451 16.7996 9.00348V19.8035C16.7996 20.2809 16.61 20.7387 16.2724 21.0763C15.9348 21.4138 15.477 21.6035 14.9996 21.6035ZM5.39961 6.00348C5.24048 6.00348 5.08787 6.06669 4.97535 6.17921C4.86282 6.29173 4.79961 6.44435 4.79961 6.60348V19.8035C4.79961 19.9626 4.86282 20.1152 4.97535 20.2277C5.08787 20.3403 5.24048 20.4035 5.39961 20.4035H14.9996C15.1587 20.4035 15.3114 20.3403 15.4239 20.2277C15.5364 20.1152 15.5996 19.9626 15.5996 19.8035V9.24948L12.3536 6.00348H5.39961Z",
    fill: "#124eb0"
  }), React.createElement("path", {
    d: "M19.7996 7.20339H17.3996C16.9222 7.20339 16.4644 7.01375 16.1268 6.67618C15.7893 6.33862 15.5996 5.88078 15.5996 5.40339V3.00339C15.5989 2.88422 15.6337 2.76754 15.6996 2.66822C15.7655 2.56891 15.8595 2.49147 15.9695 2.44577C16.0796 2.40007 16.2008 2.38818 16.3176 2.41162C16.4345 2.43507 16.5417 2.49277 16.6256 2.57739L20.2256 6.17739C20.3102 6.26131 20.3679 6.36853 20.3914 6.48538C20.4148 6.60223 20.4029 6.72341 20.3572 6.83348C20.3115 6.94355 20.2341 7.03751 20.1348 7.10339C20.0355 7.16927 19.9188 7.20408 19.7996 7.20339ZM16.7996 4.44939V5.40339C16.7996 5.56252 16.8628 5.71513 16.9754 5.82766C17.0879 5.94018 17.2405 6.00339 17.3996 6.00339H18.3536L16.7996 4.44939Z",
    fill: "#124eb0"
  }), React.createElement("path", {
    d: "M18.6002 19.2036H16.2002C16.0411 19.2036 15.8885 19.1404 15.7759 19.0278C15.6634 18.9153 15.6002 18.7627 15.6002 18.6036C15.6002 18.4444 15.6634 18.2918 15.7759 18.1793C15.8885 18.0668 16.0411 18.0036 16.2002 18.0036H18.6002C18.7593 18.0036 18.9119 17.9404 19.0245 17.8278C19.137 17.7153 19.2002 17.5627 19.2002 17.4036V6.84957L15.9542 3.60357H9.0002C8.84107 3.60357 8.68845 3.66679 8.57593 3.77931C8.46341 3.89183 8.4002 4.04444 8.4002 4.20357V5.40357C8.4002 5.5627 8.33698 5.71532 8.22446 5.82784C8.11194 5.94036 7.95933 6.00357 7.8002 6.00357C7.64107 6.00357 7.48845 5.94036 7.37593 5.82784C7.26341 5.71532 7.2002 5.5627 7.2002 5.40357V4.20357C7.2002 3.72618 7.38984 3.26835 7.7274 2.93078C8.06497 2.59322 8.52281 2.40357 9.0002 2.40357H16.2002C16.2792 2.40312 16.3574 2.41825 16.4305 2.44811C16.5036 2.47797 16.5701 2.52197 16.6262 2.57757L20.2262 6.17757C20.2818 6.23364 20.3258 6.30013 20.3557 6.37323C20.3855 6.44633 20.4007 6.52461 20.4002 6.60357V17.4036C20.4002 17.881 20.2106 18.3388 19.873 18.6764C19.5354 19.0139 19.0776 19.2036 18.6002 19.2036Z",
    fill: "#124eb0"
  }), React.createElement("path", {
    d: "M13.8 12.0035H6.6C6.44087 12.0035 6.28826 11.9403 6.17574 11.8277C6.06321 11.7152 6 11.5626 6 11.4035C6 11.2443 6.06321 11.0917 6.17574 10.9792C6.28826 10.8667 6.44087 10.8035 6.6 10.8035H13.8C13.9591 10.8035 14.1117 10.8667 14.2243 10.9792C14.3368 11.0917 14.4 11.2443 14.4 11.4035C14.4 11.5626 14.3368 11.7152 14.2243 11.8277C14.1117 11.9403 13.9591 12.0035 13.8 12.0035Z",
    fill: "#124eb0"
  }), React.createElement("path", {
    d: "M13.8 14.4036H6.6C6.44087 14.4036 6.28826 14.3404 6.17574 14.2279C6.06321 14.1154 6 13.9627 6 13.8036C6 13.6445 6.06321 13.4919 6.17574 13.3793C6.28826 13.2668 6.44087 13.2036 6.6 13.2036H13.8C13.9591 13.2036 14.1117 13.2668 14.2243 13.3793C14.3368 13.4919 14.4 13.6445 14.4 13.8036C14.4 13.9627 14.3368 14.1154 14.2243 14.2279C14.1117 14.3404 13.9591 14.4036 13.8 14.4036Z",
    fill: "#124eb0"
  }), React.createElement("path", {
    d: "M10.2 16.8035H6.6C6.44087 16.8035 6.28826 16.7403 6.17574 16.6278C6.06321 16.5153 6 16.3626 6 16.2035C6 16.0444 6.06321 15.8918 6.17574 15.7793C6.28826 15.6667 6.44087 15.6035 6.6 15.6035H10.2C10.3591 15.6035 10.5117 15.6667 10.6243 15.7793C10.7368 15.8918 10.8 16.0444 10.8 16.2035C10.8 16.3626 10.7368 16.5153 10.6243 16.6278C10.5117 16.7403 10.3591 16.8035 10.2 16.8035Z",
    fill: "#124eb0"
  }));
}

function generateLabelNameTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$u(props);
  } else {
    return defaultTemplate$d();
  }
}
function AtlasKitTemplate$u({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const [copyTooltip, setCopyTooltip] = useState('Copy to Clipboard');
  let [text, setText] = useState('11');
  const [copied, copy, setCopied] = useCopy(text);
  const onClickCopy = async newtext => {
    text = newtext;
    await setText(newtext);
    setCopyTooltip('Copied');
    await copy();
    console.log(newtext, copied);
    setTimeout(() => {
      setCopied(false);
      setCopyTooltip('Copy to Clipboard');
    }, 3000);
    if (props.onCopyClick) {
      props.onCopyClick('copy');
    }
  };
  return React.createElement("div", {
    className: `${PiLabelNameClass(theme)} pi-label`
  }, React.createElement("div", {
    className: 'label-text-div'
  }, React.createElement("div", {
    className: 'field-label-div',
    style: {
      display: 'flex'
    }
  }, React.createElement("label", {
    className: 'label-text',
    title: props.label
  }, props.label), props.isMandatory && React.createElement("span", {
    className: 'mandatory-star',
    style: {
      color: 'red',
      paddingLeft: '4px'
    }
  }, "*")), props.isEditIcon && React.createElement("span", {
    className: 'pi-label-edit-icon',
    title: 'Edit'
  }, React.createElement(PiEditIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e, props.label) : null;
    }
  }))), React.createElement("div", {
    className: 'description-container'
  }, React.createElement("p", {
    className: 'description',
    title: props.description
  }, props.description), props.isCopyIcon && React.createElement("div", {
    onClick: async () => await onClickCopy(props.description),
    className: 'copy-icon'
  }, React.createElement(PiTooltip, {
    content: copyTooltip,
    libraryType: "atalskit"
  }, React.createElement(PiCopyIcon, null)))));
}
function defaultTemplate$d() {
  return React.createElement("div", null);
}

class PiLabelNameProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.description = '';
  }
}
function PiLabelName(props) {
  const newprops = new PiLabelNameProps();
  return generateLabelNameTemplate({
    ...newprops,
    ...props
  });
}

let _$v = t => t,
  _t$v;
const PiQuoteNameClass = props => css(_t$v || (_t$v = _$v`
  display: flex;
  align-items: center;
  padding: 0px;
  .avatar{
    flex-direction: column;
  }
  .quote-block{
    margin-left: 14px;
    
    .label-text{
      color: ${0};
      margin: 0px;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
  
    .description{
      color: ${0};
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  
}
`), props.lablelDescription, props.labelColor);

function generateQuoteNameTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$v(props);
  } else {
    return defaultTemplate$e();
  }
}
function AtlasKitTemplate$v({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiQuoteNameClass(theme)
  }, React.createElement("div", {
    className: "avatar"
  }, React.createElement(PiAvatar, {
    onClick: () => {},
    size: "large",
    src: props.src
  })), React.createElement("div", {
    className: "quote-block"
  }, React.createElement("h2", {
    className: 'label-text'
  }, props.label), React.createElement("p", {
    className: "description"
  }, props.description)));
}
function defaultTemplate$e() {
  return React.createElement("div", null);
}

class PiQuoteNameProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.description = '';
    this.src = '';
  }
}
function PiQuoteName(props) {
  const newprops = new PiQuoteNameProps();
  return generateQuoteNameTemplate({
    ...newprops,
    ...props
  });
}

function generateEditorTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$w(props);
  } else {
    return defaultTemplate$f();
  }
}
function AtlasKitTemplate$w({
  ...props
}) {
  return React.createElement(ReactQuill, {
    value: props.value,
    onChange: props.onChange,
    onKeyPress: props.onKeyPress,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
    readOnly: props.readOnly
  });
}
function defaultTemplate$f() {
  return React.createElement("div", null, "NO template");
}

class PiEditorProps extends BaseProps {}
function PiEditor(props) {
  const newprops = new PiEditorProps();
  return generateEditorTemplate({
    ...newprops,
    ...props
  });
}

let _$w = t => t,
  _t$w;
const PiPermissionsClass = props => css(_t$w || (_t$w = _$w`
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
      color: ${0}
      line-height:36px;
    }
    
  }

  .permissions-box{
    /*border: 1px solid ${0};*/
    box-sizing: border-box;
    border-radius: 4px;
    color: ${0};
    font-size: 14px;
    margin-bottom:3px;
    

    .permission{
      display: flex;
      align-items:center;
      justify-content: space-between;
      height: 48px;
      padding: 0 10px;
      /*background: ${0};*/
      border-bottom: 1px solid #F2F7FF;
          font-weight: 600;
    }
  
    .child-permissions{
        display: flex;
        align-items:center;
        justify-content: space-between;
        height: 48px;
        margin: 0 40px 0 40px;
        background: ${0};
        color: ${0};
        border-bottom: 1px solid ${0};
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
          color: ${0};
          font-weight: 500;
          cursor: pointer;
          border-radius: 4px;
          border: 2px solid ${0};

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
          background-color: ${0};
          color: ${0};
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
`), props.lablelDescription, props.primaryColor, props.lablelDescription, props.primaryDisabledBG, props.white, props.lablelDescription, props.primaryColor, props.primaryBG, props.primaryBG, props.primaryBG, props.white);

function getRadioTemplate(inputObject, values, onValueChange) {
  return React.createElement(PiRadioGroup, {
    name: inputObject.code,
    onChange: ({
      currentTarget: {
        value
      }
    }) => {
      console.log(value, inputObject);
      values[inputObject.id] = value;
      onValueChange(values, inputObject, value);
    },
    options: inputObject.options,
    value: values[inputObject.id]
  });
}
function getCheckboxTemplate(inputObject, values, onValueChange) {
  const initialValue = values && values[inputObject.id] ? values[inputObject.id] : '';
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return React.createElement(PiCheckbox, {
    isChecked: value,
    name: inputObject.code,
    size: 'large',
    onChange: e => {
      setValue(e.target.checked);
      values[inputObject.id] = e.target.checked;
      onValueChange(values);
    },
    value: inputObject.value
  });
}
function getToggleTemplate(inputObject, values, size, onValueChange) {
  const initialValue = values && values[inputObject.id] ? values[inputObject.id] : '';
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return React.createElement(PiToggle, {
    isChecked: value,
    direction: 'row',
    name: inputObject.code,
    size: size,
    onChange: e => {
      setValue(e.target.checked);
      values[inputObject.id] = e.target.checked;
      onValueChange(values);
    },
    value: inputObject.value
  });
}
function getSelectTemplate(inputObject, values, onValueChange) {
  console.log(values[inputObject.id]);
  console.log(inputObject);
  return React.createElement("div", {
    className: 'select-box'
  }, React.createElement(PiSelect, {
    name: 'select',
    onChange: e => {
      values[inputObject.id] = e;
      inputObject = {
        ...inputObject,
        ...e
      };
      onValueChange(values, inputObject);
    },
    options: inputObject.options,
    value: values[inputObject.id],
    placeholder: 'Select',
    variant: 'standard',
    isSearchable: false
  }));
}

function generatePermissionsTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$x(props);
  } else {
    return defaultTemplate$g();
  }
}
function AtlasKitTemplate$x({
  values,
  inputObject,
  onValueChange
}) {
  const theme = useContext(PiThemeContext);
  let [permList, setpermList] = useState([]);
  let [permValues, setpermValues] = useState({});
  useEffect(() => {
    permList = inputObject;
    setpermList(permList);
    permValues = values;
    setpermValues(permValues);
  }, [inputObject, values]);
  return React.createElement("div", {
    className: `${PiPermissionsClass(theme)} pipermission-wrapper`
  }, permList && permList.type == 'header' ? React.createElement("div", {
    className: 'header'
  }, React.createElement("h2", {
    className: 'label-text'
  }, permList.name), React.createElement("span", {
    className: 'element'
  }, getElement(permList, permValues, onValueChange))) : React.createElement("div", null, React.createElement("div", {
    className: 'role-parent-title'
  }, React.createElement("span", {
    className: 'label-text'
  }, permList.name), React.createElement("span", {
    className: 'element'
  }, getElement(permList, permValues, onValueChange))), React.createElement("div", {
    className: 'permission-outer-border'
  }, permList.children ? permList.children.map((childElements, i) => {
    if (childElements.children) {
      return React.createElement("div", {
        className: 'permissions-box',
        style: {
          margin: '2px 30px'
        }
      }, React.createElement("div", {
        className: 'permission'
      }, React.createElement("span", {
        className: 'label-text'
      }, childElements.name), React.createElement("span", {
        className: 'element'
      }, getElement(childElements, permValues, onValueChange))), childElements.children && childElements.allow_child ? childElements.children.map((child, i) => {
        return React.createElement("div", {
          key: i,
          className: 'child-permissions'
        }, React.createElement("span", {
          className: 'label-text'
        }, child.name), React.createElement("span", {
          className: 'element'
        }, getElement(child, permValues, onValueChange)));
      }) : null);
    } else {
      return React.createElement("div", {
        key: i,
        className: 'child-permissions'
      }, React.createElement("span", {
        className: 'label-text'
      }, childElements.name), React.createElement("span", {
        className: 'element'
      }, getElement(childElements, permValues, onValueChange)));
    }
  }) : null)));
}
function getElement(permList, values, onValueChange) {
  switch (permList.type) {
    case 'toggle':
      {
        return getToggleTemplate(permList, values, 'regular', onValueChange);
      }
    case 'header':
      {
        return getToggleTemplate(permList, values, 'large', onValueChange);
      }
    case 'checkbox':
      {
        return getCheckboxTemplate(permList, values, onValueChange);
      }
    case 'radio':
      return getRadioTemplate(permList, values, onValueChange);
    case 'select':
      return getSelectTemplate(permList, values, onValueChange);
    case 'button':
      {
        return React.createElement("div", {
          className: 'toggle-button'
        }, getRadioTemplate(permList, values, onValueChange));
      }
    default:
      {
        return React.createElement("div", null);
      }
  }
}
function defaultTemplate$g() {
  return React.createElement("div", null);
}

class PiPermissionsProps extends BaseProps {}
function PiPermissions(props) {
  console.log(props);
  const [permProps, setPermProps] = useState(props);
  useEffect(() => {
    setPermProps(props);
  }, [props.values]);
  if (permProps) {
    const newprops = new PiPermissionsProps();
    return generatePermissionsTemplate({
      ...newprops,
      ...permProps
    });
  } else {
    return null;
  }
}

let _$x = t => t,
  _t$x;
const PiPermissionsClass$1 = props => css(_t$x || (_t$x = _$x`
  
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
      color: ${0}
      line-height:36px;
    }
    
  }

  .permissions-box{
    /*border: 1px solid ${0};*/
    box-sizing: border-box;
    border-radius: 4px;
    color: ${0};
    font-size: 14px;
    margin-bottom:3px;
    

    .permission{
      display: flex;
      align-items:center;
      justify-content: space-between;
      height: 48px;
      padding: 0 10px;
      /*background: ${0};*/
      border-bottom: 1px solid #F2F7FF;
          font-weight: 600;
    }
  
    .child-permissions{
        display: flex;
        align-items:center;
        justify-content: space-between;
        height: 48px;
        margin: 0 40px 0 40px;
        background: ${0};
        color: ${0};
        border-bottom: 1px solid ${0};
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
`), props.lablelDescription, props.primaryColor, props.lablelDescription, props.primaryDisabledBG, props.white, props.lablelDescription, props.primaryColor);

function generatePermissionsListTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$y(props);
  } else {
    return defaultTemplate$h();
  }
}
function AtlasKitTemplate$y(props) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiPermissionsClass$1(theme)
  }, props.inputObject ? props.inputObject.map((data, i) => {
    return React.createElement("div", {
      key: i
    }, React.createElement(PiPermissions, {
      inputObject: data,
      values: props.values,
      onValueChange: props.onValueChange
    }));
  }) : React.createElement("div", null, "No data found."));
}
function defaultTemplate$h() {
  return React.createElement("div", null);
}

class PiPermissionsListProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.inputObject = [];
  }
}
function PiPermissionsList(props) {
  const newprops = new PiPermissionsListProps();
  return generatePermissionsListTemplate({
    ...newprops,
    ...props
  });
}

let _$y = t => t,
  _t$y;
const PiHeaderMenuClass = props => css(_t$y || (_t$y = _$y`
  .header-wrapper {
    width: 100%;
    background: ${0};
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-left {
    display: flex;

    .logo-container {
      padding: 16px 24px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .header-right {
    display: flex;
    gap: 16px;
    > div {
      button {
        background: #2196f3;
        padding: 0;
        span {
          color: #fff;
        }
      }
    }
    .header-dropdown-view {
      button {
        padding: 0 10px;
      }
    }
  }

  .logo img {
    width: 120px;
    height: 47px;
    padding-left: 20px;
  }

  .menu-option {
    margin-left: 20px;
    display: flex;
    align-items: center;

    .menu-item-single {
      font-size: 14px;
      line-height: 20px;
      color: #bbdefb !important;
      display: flex;
      height: 100%;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 0 10px;
      transition: all 0.3s ease;
      cursor: pointer;

      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        color: #ffffff !important;
      }

      &.active {
        font-weight: bold;
        color: #ffffff !important;
        &::after {
          background-color: #f2f7ff;
        }
      }
    }

    .custom-icon {
      margin-right: 4px;
    }

    .menu-item {
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      transition: all 0.3s ease;
      cursor: pointer;

      button {
        font-size: 14px;
        color: #bbdefb !important;
        background: none;
        padding: 0;
        font-weight: 600 !important;
      }

      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        button {
          color: #ffffff !important;
        }
      }

      &.active {
        button {
          font-weight: bold;
          color: #ffffff !important;
        }
        &::after {
          background-color: #f2f7ff;
        }
      }
    }
  }
`), props.infoColor);

let _$z = t => t,
  _t$z;
const PiDropdownMenuClass = props => css(_t$z || (_t$z = _$z`
 display: flex;
  align-items: center;
  padding: 0px;
  .quote-block{
    /* display: flex; */

  .label-text {
    color: ${0};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
   .address-data {
     display: flex;
     color: #2E374A;
     align-items: center;
     font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
   }
}
  
`), props.lablelDescription);

function generateAddressTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$z(props);
  } else {
    return defaultTemplate$i();
  }
}
function AtlasKitTemplate$z({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  console.log(props);
  return React.createElement("div", {
    className: PiDropdownMenuClass(theme)
  }, React.createElement(DropdownMenu, {
    trigger: props.label
  }, props.items.length ? props.items.map(value => {
    if (value.display) {
      return React.createElement(DropdownItemGroup, null, React.createElement(DropdownItem, {
        onClick: () => props.onOpenChange(value),
        key: value.id,
        isSelected: value.isSelected
      }, value.name));
    } else {
      return null;
    }
  }) : null));
}
function defaultTemplate$i() {
  return React.createElement("div", null);
}

class PiDropdownMenuProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.appearance = 'default';
    this.items = [];
  }
}
function PiDropdownMenu(props) {
  const newprops = new PiDropdownMenuProps();
  return generateAddressTemplate({
    ...newprops,
    ...props
  });
}

function generateHeaderMenuTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return getHeaderTemplate(props);
  } else {
    return defaultTemplate$j();
  }
}
function getHeaderTemplate({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  console.log(props);
  return React.createElement("div", {
    className: PiHeaderMenuClass(theme)
  }, React.createElement("div", {
    className: 'header-wrapper'
  }, React.createElement("div", {
    className: 'header-left'
  }, React.createElement("div", {
    className: 'logo-container'
  }, React.createElement("img", {
    src: props.image,
    alt: 'loading'
  })), React.createElement("div", {
    className: 'menu-option'
  }, props.options.map(option => {
    if (option.display && option.children && option.children.length) {
      return React.createElement("div", {
        key: option.key,
        className: props.activeKey === option.key ? 'active menu-item' : 'menu-item'
      }, option.icon && React.createElement("span", {
        className: 'custom-icon'
      }, " ", option.icon, " "), option.href && React.createElement("span", {
        className: 'custom-icon'
      }, React.createElement("img", {
        src: option.href,
        alt: option.label,
        width: '20',
        height: '20'
      })), React.createElement(DropdownMenu, {
        trigger: option.label,
        placement: 'bottom-start'
      }, React.createElement(DropdownItemGroup, null, option.children.map(child => {
        if (child.display) {
          return React.createElement(DropdownItem, {
            key: child.key,
            onClick: () => props.onMenuClick(child)
          }, child.label);
        } else {
          return null;
        }
      }))));
    } else {
      if (option.display) {
        return React.createElement("div", {
          key: option.key,
          className: props.activeKey === option.key ? 'active menu-item-single' : 'menu-item-single',
          onClick: () => props.onMenuClick(option)
        }, option.icon && React.createElement("span", {
          className: 'custom-icon'
        }, " ", option.icon, " "), option.href && React.createElement("span", {
          className: 'custom-icon'
        }, React.createElement("img", {
          src: option.href,
          alt: option.label,
          width: '20',
          height: '20'
        })), option.label);
      } else {
        return null;
      }
    }
  }))), React.createElement("div", {
    className: 'header-right'
  }, props.headerDropdownOptions && props.headerDropdownOptions.length > 0 && React.createElement("div", {
    className: 'header-dropdown-view'
  }, React.createElement(PiDropdownMenu, {
    items: props.headerDropdownOptions,
    label: 'Create',
    onOpenChange: props.onOpenChange
  })), React.createElement(PiProfileSection, {
    items: props.profileOptions,
    onClick: props.onProfileClick,
    userImage: props.userImage
  }))));
}
function defaultTemplate$j() {
  return React.createElement("div", null, "NO template");
}

class PiHeaderMenuProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.options = [];
    this.profileOptions = [];
  }
}
function PiHeaderMenu(props) {
  const newprops = new PiHeaderMenuProps();
  return generateHeaderMenuTemplate({
    ...newprops,
    ...props
  });
}

let _$A = t => t,
  _t$A;
const PiProfileHeaderClass = props => css(_t$A || (_t$A = _$A`
  color: ${0};
  font-size:24px;
  font-weight:600;
  line-height: 36px;
}
`), props.lablelDescription);

function generateProfileHeaderTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$A(props);
  } else {
    return defaultTemplate$k();
  }
}
function AtlasKitTemplate$A(props) {
  const theme = useContext(PiThemeContext);
  return React.createElement("h2", {
    className: PiProfileHeaderClass(theme)
  }, props.text);
}
function defaultTemplate$k() {
  return React.createElement("div", null);
}

class PiProfileHeaderProps extends BaseProps {}
function PiProfileHeader(props) {
  const newprops = new PiProfileHeaderProps();
  return generateProfileHeaderTemplate({
    ...newprops,
    ...props
  });
}

function PiAccordianPanel({
  children,
  ...props
}) {
  return React.createElement(AccordionItemPanel, Object.assign({}, props), children);
}

function PiAccordianHeader({
  children,
  ...props
}) {
  return React.createElement(AccordionItemHeading, null, React.createElement(AccordionItemButton, Object.assign({}, props), children));
}

function PiAccordianItem({
  children,
  ...props
}) {
  return React.createElement(AccordionItem, Object.assign({}, props), children);
}

let _$B = t => t,
  _t$B;
const PiAccordianClass = css(_t$B || (_t$B = _$B`
/* .accordion__button {
    background-color: #fff;
    color: #2E374A;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;

} */
/* .accordion__button::before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
} */
/* .accordion__button::after {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
} */
  .css-4kplgf {
    border-radius: 8px !important;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12) !important;
  }
`));

function PiAccordian({
  children,
  ...props
}) {
  return React.createElement("div", {
    className: PiAccordianClass
  }, React.createElement(Accordion, Object.assign({}, props), children));
}

function PiDrawer({
  children,
  ...props
}) {
  return React.createElement(Drawer, Object.assign({}, props), children);
}

function PiForm(props) {
  return React.createElement(Formik, {
    validationSchema: props.validationSchema,
    onSubmit: props.handleSubmit,
    initialValues: props.initialValues,
    innerRef: props.handleRef
  }, ({
    ...formik
  }) => {
    return React.createElement(Form, null, React.createElement(props.component, {
      formik: formik
    }));
  });
}

function PiInputForm({
  onChange,
  ...formField
}) {
  const handleValueChange = e => {
    if (onChange) {
      onChange(e);
    }
  };
  function formatPhoneNumbers(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form,
    meta
  }) => React.createElement(PiInput, Object.assign({}, field, {
    onChange: e => {
      handleValueChange(e);
      if (formField.type === 'phone_number') {
        const formattedPhoneNumber = formatPhoneNumbers(e.target.value);
        console.log(formattedPhoneNumber);
        form.setFieldValue(e.target.name, formattedPhoneNumber);
      } else {
        if (formField.convertToCapital) {
          form.setFieldValue(e.target.name, e.target.value.toUpperCase());
        } else {
          form.setFieldValue(e.target.name, e.target.value);
        }
      }
    },
    onKeyPress: e => {
      var key = e.charCode ? e.charCode : e.keyCode;
      console.log(key);
      if ((key === 32 || key === 46 || key === 101) && formField.type === 'number') {
        e.preventDefault();
        return false;
      } else if (formField.type === 'string') {
        var t = e.target.value;
        e.target.value = t.indexOf('.') >= 0 ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 2) : t;
        return true;
      } else {
        return true;
      }
    },
    onBlur: e => {
      form.setFieldValue(e.target.name, e.target.value ? e.target.value.trim() : e.target.value);
    },
    label: formField.label,
    type: formField.type,
    placeholder: formField.placeholder,
    helpText: meta.touched && meta.error ? meta.error : '',
    isDisabled: formField.isDisabled,
    maxLength: formField.maxLength,
    isMandatory: formField.isMandatory
  })));
}

function PiRadioForm({
  onChange,
  options,
  ...formField
}) {
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form: {
      setFieldValue
    },
    meta
  }) => {
    const handleValueChange = e => {
      setFieldValue(field.name, e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    return React.createElement(PiRadioGroup, Object.assign({}, field, {
      label: formField.label,
      value: field.value,
      options: options,
      onChange: handleValueChange,
      helpText: meta.touched && meta.error ? meta.error : '',
      isDisabled: formField.isDisabled
    }));
  });
}

function PiSelectForm({
  onChange,
  options,
  ...formField
}) {
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form: {
      setFieldValue
    },
    meta
  }) => {
    const handleValueChange = (e, actionMeta) => {
      setFieldValue(field.name, e);
      if (onChange) {
        onChange(e, actionMeta);
      }
    };
    return React.createElement(PiSelect, Object.assign({}, field, {
      name: field.name,
      label: formField.label,
      placeholder: formField.placeholder,
      options: options,
      onChange: handleValueChange,
      value: field.value,
      defaultValue: field.defaultValue,
      helpText: meta.touched && meta.error ? meta.error : '',
      isMulti: formField.isMulti,
      isDisabled: formField.isDisabled,
      isSearchable: formField.isSearchable,
      isClearable: formField.isClearable,
      onInputChange: formField.onInputChange,
      onFocus: formField.onFocus,
      classNamePrefix: formField.classNamePrefix,
      isMandatory: formField.isMandatory,
      formatOptionLabel: formField.formatOptionLabel,
      noOptionsMessage: () => {
        return formField.noOptionsMessage || `No ${formField.label} Found`;
      }
    }));
  });
}

function PiCheckboxForm(formField) {
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form: {
      setFieldValue
    },
    meta
  }) => {
    const handleValueChange = e => {
      setFieldValue(field.name, e.target.checked);
    };
    return React.createElement(PiCheckbox, Object.assign({}, field, {
      label: formField.label,
      libraryType: 'atalskit',
      isChecked: field.value,
      onChange: handleValueChange,
      helpText: meta.touched && meta.error ? meta.error : ''
    }));
  });
}

function PiDatepickerForm(formField) {
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form: {
      setFieldValue
    },
    meta
  }) => {
    const handleValueChange = e => {
      console.log(moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD')));
      const dateValid = moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD'));
      if (dateValid === true) {
        return;
      }
      setFieldValue(field.name, e);
      if (formField.onChange) {
        formField.onChange(e);
      }
    };
    return React.createElement(PiDatePicker, Object.assign({}, field, {
      label: formField.label,
      placeholder: formField.placeholder,
      minDate: formField.minDate,
      maxDate: formField.maxDate,
      onChange: handleValueChange,
      value: field.value,
      defaultValue: field.defaultValue,
      helpText: meta.touched && meta.error ? meta.error : '',
      isMandatory: formField.isMandatory,
      isDisabled: formField.isDisabled,
      onKeyPress: e => {
        var key = e.charCode ? e.charCode : e.keyCode;
        console.log(key);
        e.target.value = '';
      }
    }));
  });
}

function PiTextareaForm({
  onChange,
  ...formField
}) {
  const handleValueChange = e => {
    if (onChange) {
      onChange(e);
    }
  };
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form,
    meta
  }) => React.createElement(PiTextArea, Object.assign({}, field, {
    onChange: e => {
      handleValueChange(e);
      form.setFieldValue(e.target.name, formField.convertToCapital ? e.target.value.toUpperCase() : e.target.value);
    },
    value: field.value,
    defaultValue: field.defaultValue,
    label: formField.label,
    placeholder: formField.placeholder,
    helpText: meta.touched && meta.error ? meta.error : '',
    isDisabled: formField.isDisabled,
    maxLength: formField.maxLength,
    isMandatory: formField.isMandatory
  })));
}

function PiInputForm2({
  onChange,
  ...formField
}) {
  const showSuccess = formField['showSuccess'] ? 'success' : '';
  const handleValueChange = e => {
    if (onChange) {
      onChange(e);
    }
  };
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form,
    meta
  }) => React.createElement(PiInput, Object.assign({}, field, {
    onChange: e => {
      handleValueChange(e);
      form.setFieldValue(e.target.name, e.target.value);
    },
    label: formField.label,
    type: formField.type,
    placeholder: formField.placeholder,
    className: meta.touched && meta.error ? 'error' : showSuccess,
    helpText: meta.touched && meta.error ? meta.error : '',
    isDisabled: formField.isDisabled,
    defaultvalue: formField.defaultValue,
    value: formField.value
  })));
}

function PiIconInputForm({
  onChange,
  ...formField
}) {
  const handleValueChange = e => {
    if (onChange) {
      onChange(e);
    }
  };
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form,
    meta
  }) => React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    className: 'select-label'
  }, formField.label && React.createElement("div", {
    className: 'field-label-div',
    style: {
      display: 'flex'
    }
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, formField.label), formField.isMandatory && React.createElement("span", {
    className: 'mandatory-star',
    style: {
      color: 'red',
      paddingLeft: '4px'
    }
  }, "*")), formField.isIcons && React.createElement("div", null, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      formField.emitSave ? formField.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      formField.emitUndo ? formField.emitUndo(e) : null;
    }
  })))), React.createElement(AtlasTextfield, Object.assign({}, field, {
    onChange: e => {
      handleValueChange(e);
      form.setFieldValue(e.target.name, e.target.value);
    },
    onKeyPress: e => {
      var key = e.charCode ? e.charCode : e.keyCode;
      console.log(key);
      if ((key === 32 || key === 44 || key === 13) && formField.type === 'string') {
        e.preventDefault();
        return false;
      }
      if ((key === 32 || key === 46 || key === 101) && formField.type === 'number') {
        e.preventDefault();
        return false;
      } else if (formField.type === 'string') {
        var t = e.target.value;
        if (key !== 37 && key !== 39 && e.target.selectionStart > t.indexOf('.')) {
          e.target.value = t.indexOf('.') > 0 ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), formField.allowedDecimalsPoints ? formField.allowedDecimalsPoints : 2) : t;
          return true;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    onKeyUp: () => {},
    onKeyDown: () => {},
    elemBeforeInput: formField.elemBeforeInput,
    label: formField.label,
    type: formField.type,
    placeholder: formField.placeholder,
    isDisabled: formField.isDisabled,
    maxLength: formField.maxLength,
    isMandatory: formField.isMandatory
  })), React.createElement("small", {
    className: 'validation-error'
  }, meta.touched && meta.error ? meta.error : '')));
}

let _$C = t => t,
  _t$C;
const PiSelectClass$1 = props => css(_t$C || (_t$C = _$C`
  width: 100%;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div[class$='-menu'] {
    margin: 3px !important;
    div[class$='-MenuList'] {
      padding: 0px !important;
    }
  }
  /*.pi-select-wrapper {
    div {
      .css-1bx7l6n-control {
        border-radius: 4px;
        margin: 4px 0 8px 0;
        background-color: ${0};
        border: 2px solid ${0};
        font-size: 14px;
        height: 36px !important;
        line-height: 1;
        &:hover {
          background: ${0};
          border-color: ${0};
        }
        &:focus {
          background: ${0};
          border-color: ${0};
        }
      }
    }
  }*/

  /*}*/
  /*.pi-select-wrapper > div > div {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${0};
      border-color: ${0};
    }
    &:focus {
      background: ${0};
      border-color: ${0};
    }
  }*/

  .react-select__control {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${0};
      border-color: ${0};
    }
    &:focus {
      background: ${0};
      border-color: ${0};
    }
  }
  .css-rij6sy-ValueContainer {
    padding: 0 8px !important;
  }
  /*.css-qyxenl-control {
    margin: 4px 0 8px 0;
    height: 36px !important;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    font-size: 14px;
    background: ${0};
    border: 2px solid ${0};
  }*/
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${0};
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
  }
  .css-otwtzu-option:active {
    background-color: ${0};
  }
  .css-12fvnfc-option:active {
    background-color: ${0};
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
`), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);

function generateSelectTemplate$1({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$B(props);
  } else {
    return DefaultTemplate$h(props);
  }
}
function AtlasKitTemplate$B({
  helpText,
  label,
  isMandatory,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  console.log(props);
  return React.createElement("div", {
    className: PiSelectClass$1(theme)
  }, React.createElement("div", {
    className: 'pi-select-wrapper'
  }, React.createElement("div", {
    className: 'select-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(CheckboxSelect, Object.assign({
    classNamePrefix: props.classNamePrefix || 'react-select',
    noOptionsMessage: () => {
      return props.noOptionsMessage ? props.noOptionsMessage : `No ${label} Found`;
    }
  }, props)), helpText && React.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function DefaultTemplate$h(props) {
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("select", null, props.options ? props.options.map(option => {
    return React.createElement("option", {
      value: option.value
    }, option.label);
  }) : null), props.helpText && React.createElement("span", null, props.helpText)));
}

class PiSelectProps$1 extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'select';
    this.options = [];
    this.placeholder = 'Select...';
  }
}
function PiCheckBoxSelect(props) {
  const newprops = new PiSelectProps$1();
  return generateSelectTemplate$1({
    ...newprops,
    ...props
  });
}

function PiCheckBoxSelectForm({
  onChange,
  options,
  ...formField
}) {
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form: {
      setFieldValue
    },
    meta
  }) => {
    const handleValueChange = (e, actionMeta) => {
      setFieldValue(field.name, e);
      if (onChange) {
        onChange(e, actionMeta);
      }
    };
    return React.createElement(PiCheckBoxSelect, Object.assign({}, field, {
      name: field.name,
      label: formField.label,
      placeholder: formField.placeholder,
      options: options,
      onChange: handleValueChange,
      value: field.value,
      defaultValue: field.defaultValue,
      helpText: meta.touched && meta.error ? meta.error : '',
      isMulti: formField.isMulti,
      isDisabled: formField.isDisabled,
      isSearchable: formField.isSearchable,
      isClearable: formField.isClearable,
      onInputChange: formField.onInputChange,
      onFocus: formField.onFocus,
      classNamePrefix: formField.classNamePrefix,
      isMandatory: formField.isMandatory,
      formatOptionLabel: formField.formatOptionLabel,
      noOptionsMessage: () => {
        return formField.noOptionsMessage || `No ${formField.label} Found`;
      }
    }));
  });
}

let _$D = t => t,
  _t$D;
const PiCreateSelectClass = props => css(_t$D || (_t$D = _$D`
  width: 100%;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;
      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div[class$='-menu'] {
    margin: 3px !important;
    div[class$='-MenuList'] {
      padding: 0px !important;
    }
  }
  /*.pi-select-wrapper {
    div {
      .css-1bx7l6n-control {
        border-radius: 4px;
        margin: 4px 0 8px 0;
        background-color: ${0};
        border: 2px solid ${0};
        font-size: 14px;
        height: 36px !important;
        line-height: 1;
        &:hover {
          background: ${0};
          border-color: ${0};
        }
        &:focus {
          background: ${0};
          border-color: ${0};
        }
      }
    }
  }*/

  /*}*/
  /*.pi-select-wrapper > div > div {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${0};
      border-color: ${0};
    }
    &:focus {
      background: ${0};
      border-color: ${0};
    }
  }*/

  .react-select__control {
    border-radius: 4px;
    margin: 4px 0 8px 0;
    background-color: ${0};
    border: 2px solid ${0};
    font-size: 14px;
    height: 36px !important;
    line-height: 1;
    &:hover {
      background: ${0};
      border-color: ${0};
    }
    &:focus {
      background: ${0};
      border-color: ${0};
    }
  }
  .css-rij6sy-ValueContainer {
    padding: 0 8px !important;
  }
  /*.css-qyxenl-control {
    margin: 4px 0 8px 0;
    height: 36px !important;
    &:hover {
      background: ${0};
      border: 2px solid ${0};
    }
    font-size: 14px;
    background: ${0};
    border: 2px solid ${0};
  }*/
  .css-12fvnfc-option {
    box-shadow: none;
    background-color: ${0};
  }
  .css-j6sl50-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
  }
  .css-8acq3y-option {
    box-shadow: none;
    background-color: ${0};
    color: ${0};
  }
  .css-otwtzu-option:active {
    background-color: ${0};
  }
  .css-12fvnfc-option:active {
    background-color: ${0};
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
`), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);

function generateSelectTemplate$2({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$C(props);
  } else {
    return DefaultTemplate$i(props);
  }
}
function AtlasKitTemplate$C({
  helpText,
  label,
  isMandatory,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  console.log(props);
  return React.createElement("div", {
    className: PiCreateSelectClass(theme)
  }, React.createElement("div", {
    className: 'pi-select-wrapper'
  }, React.createElement("div", {
    className: 'select-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", {
    className: 'save-reset-icons'
  }, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(CreatableSelect, Object.assign({
    classNamePrefix: props.classNamePrefix || 'react-select',
    noOptionsMessage: () => {
      return props.noOptionsMessage ? props.noOptionsMessage : `No ${label} Found`;
    }
  }, props)), helpText && React.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function DefaultTemplate$i(props) {
  return React.createElement(Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, props.label), React.createElement("select", null, props.options ? props.options.map(option => {
    return React.createElement("option", {
      value: option.value
    }, option.label);
  }) : null), props.helpText && React.createElement("span", null, props.helpText)));
}

class PiCreateSelectProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'select';
    this.options = [];
    this.placeholder = 'Select...';
  }
}
function PiCreateSelect(props) {
  const newprops = new PiCreateSelectProps();
  return generateSelectTemplate$2({
    ...newprops,
    ...props
  });
}

function PiCreateSelectForm({
  onChange,
  options,
  ...formField
}) {
  return React.createElement(Field, {
    name: formField.name
  }, ({
    field,
    form: {
      setFieldValue
    },
    meta
  }) => {
    const handleValueChange = (e, actionMeta) => {
      setFieldValue(field.name, e);
      if (onChange) {
        onChange(e, actionMeta);
      }
    };
    return React.createElement(PiCreateSelect, Object.assign({}, field, {
      name: field.name,
      label: formField.label,
      placeholder: formField.placeholder,
      options: options,
      onChange: handleValueChange,
      value: field.value,
      defaultValue: field.defaultValue,
      helpText: meta.touched && meta.error ? meta.error : '',
      isMulti: formField.isMulti,
      isDisabled: formField.isDisabled,
      isSearchable: formField.isSearchable,
      isClearable: formField.isClearable,
      onInputChange: formField.onInputChange,
      onFocus: formField.onFocus,
      classNamePrefix: formField.classNamePrefix,
      isMandatory: formField.isMandatory,
      formatOptionLabel: formField.formatOptionLabel,
      noOptionsMessage: () => {
        return formField.noOptionsMessage || `No ${formField.label} Found`;
      },
      formatCreateLabel: formField.formatCreateLabel,
      isValidNewOption: formField.isValidNewOption
    }));
  });
}

let _$E = t => t,
  _t$E;
const PiInvoiceClass = () => css(_t$E || (_t$E = _$E`
  .main {
    display: flex;
    width: 100%;
  }
  .primary {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #2E374A;
  }
  .secondary {
    width: 50%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #2E374A;
  }
`));

function generateInvoiceTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$D(props);
  } else {
    return DefaultTemplate$j();
  }
}
function AtlasKitTemplate$D({
  ...props
}) {
  return React.createElement("div", {
    className: PiInvoiceClass()
  }, Object.keys(props.invoiceOptions).map((option, index) => {
    return React.createElement("div", {
      key: index
    }, React.createElement("div", {
      className: 'main'
    }, React.createElement("div", {
      className: 'primary'
    }, option), React.createElement("div", {
      className: 'secondary'
    }, props.invoiceOptions[option])));
  }));
}
function DefaultTemplate$j() {
  return React.createElement(Fragment, null, React.createElement("div", null));
}

class PiInvoiceProps extends BaseProps {}
function PiBackSection$1(props) {
  const newprops = new PiInvoiceProps();
  return generateInvoiceTemplate({
    ...newprops,
    ...props
  });
}

let _$F = t => t,
  _t$F;
const PiAddressClass = props => css(_t$F || (_t$F = _$F`
  display: flex;
  align-items: center;
  padding: 0px;
  .quote-block {
    /* display: flex; */

    .label-text {
      color: ${0};
      font-family: 'Inter';
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
    }
    .address-data {
      display: flex;
      color: ${0};
      align-items: center;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
    }
  }
`), props.lablelDescription, props.lablelDescription);

function generateAddressTemplate$1({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$E(props);
  } else {
    return defaultTemplate$l();
  }
}
function AtlasKitTemplate$E({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: `${PiAddressClass(theme)} pi-address`
  }, React.createElement("div", {
    className: 'quote-block'
  }, React.createElement("h2", {
    className: 'label-text'
  }, props.label), React.createElement("div", null, React.createElement("div", {
    className: 'address-data'
  }, props.data && props.data.address1 && React.createElement("div", null, props.data.address1, ",\u00A0"), props.data && props.data.address2 && React.createElement("div", null, props.data.address2, ",\u00A0"), props.data && props.data.street && React.createElement("div", null, props.data.street, ",\u00A0"), props.data && props.data.city && React.createElement("div", null, props.data.city, ",\u00A0"), props.data && props.data.state && React.createElement("div", null, props.data.state, ",\u00A0"), props.data && props.data.country && React.createElement("div", null, props.data.country, ", \u00A0"), props.data && props.data.zip && React.createElement("div", null, props.data.zip)))));
}
function defaultTemplate$l() {
  return React.createElement("div", null);
}

class PiAddressProps extends BaseProps {}
function PiAddress(props) {
  const newprops = new PiAddressProps();
  return generateAddressTemplate$1({
    ...newprops,
    ...props
  });
}

let _$G = t => t,
  _t$G;
const PiIconDropdownMenuClass = props => css(_t$G || (_t$G = _$G`
 display: flex;
  align-items: center;
  padding: 0px;

    button{
      background-color: ${0};
      border: 1px solid transparent;
      &[aria-expanded= "true"]{
        background-color: transparent;
      }
      &:hover{
        background-color: transparent;
      }
      span{
        svg{
          circle{
            fill: #95A1A2;
          }
        }
      }
    }
    
  .quote-block{
    /* display: flex; */

    .label-text {
    color: ${0};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    }
   .address-data {
     display: flex;
     color: #2E374A;
     align-items: center;
     font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
   }

   button[aria-expanded="false"]{
     background: ${0};
   }
}
  
`), props.white, props.lablelDescription, props.primaryBG);

function generateAddressTemplate$2({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$F(props);
  } else {
    return defaultTemplate$m();
  }
}
function AtlasKitTemplate$F({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: props.className ? `${PiIconDropdownMenuClass(theme)} ${props.className}` : `${PiIconDropdownMenuClass(theme)}`
  }, React.createElement(DropdownMenu, {
    trigger: ({
      triggerRef,
      ...props
    }) => React.createElement(AtlasButton, Object.assign({}, props, {
      iconBefore: React.createElement(PiActionIcon, {
        appearance: 'more',
        onClick: function noRefCheck() {}
      }),
      ref: triggerRef
    }))
  }, React.createElement(DropdownItemGroup, null, props.items.length ? props.items.map(value => {
    return React.createElement(DropdownItem, {
      onClick: () => props.onOpenChange(value),
      key: value.id
    }, value.element);
  }) : null)));
}
function defaultTemplate$m() {
  return React.createElement("div", null);
}

class PiIconDropdownMenuProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.appearance = 'default';
    this.items = [];
  }
}
function PiIconDropdownMenu(props) {
  const newprops = new PiIconDropdownMenuProps();
  return generateAddressTemplate$2({
    ...newprops,
    ...props
  });
}

let _$H = t => t,
  _t$H;
const PiIdClass = props => css(_t$H || (_t$H = _$H`
  width: 100%;
  display: flex;
  align-items: center;
  .Back-main {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3f2fd;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: ${0};
    }
    &:focus {
      background-color: ${0};
    }
  }
  .label {
    margin-left: 16px;
  }
  .css-1rm3tso {
    color: #000;
  }
`), props.inputHoverBG, props.white);

function generateIdComponentTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$G(props);
  } else {
    return DefaultTemplate$k();
  }
}
function AtlasKitTemplate$G({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiIdClass(theme)
  }, React.createElement("div", {
    className: 'label'
  }, React.createElement(PiTypography$1, {
    component: 'h4'
  }, props.label)));
}
function DefaultTemplate$k() {
  return React.createElement(Fragment, null, React.createElement("div", null));
}

class PiIdProps extends BaseProps {}
function PiIdComponent(props) {
  const newprops = new PiIdProps();
  return generateIdComponentTemplate({
    ...newprops,
    ...props
  });
}

let _$I = t => t,
  _t$I;
const PiMultiAddressClass = props => css(_t$I || (_t$I = _$I`
 display: flex;
  align-items: center;
  padding: 0px;
  .quote-block{
    /* display: flex; */

  .label-text {
    color: ${0};
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
   .address-data {
     display: flex;
     color: ${0};
     align-items: center;
     font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
   }
}
  
`), props.lablelDescription, props.lablelDescription);

function generateAddressTemplate$3({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$H(props);
  } else {
    return defaultTemplate$n();
  }
}
function AtlasKitTemplate$H({
  ...props
}) {
  console.log(props);
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiMultiAddressClass(theme)
  }, React.createElement("div", {
    className: 'quote-block'
  }, Object.keys(props.data).map((option, index) => {
    return React.createElement("div", {
      key: index
    }, index === 0 && Object.keys(props.data[option]).length !== 0 && React.createElement("h2", {
      className: 'label-text'
    }, props.billingLabel), index === 1 && Object.keys(props.data[option]).length !== 0 && React.createElement("h2", {
      className: 'label-text'
    }, props.shippingLabel), React.createElement("div", {
      className: 'address-data'
    }, props.data && props.data[option].address1 && React.createElement("div", null, props.data[option].address1, ","), props.data && props.data[option].address2 && React.createElement("div", null, props.data[option].address2, ","), props.data && props.data[option].street && React.createElement("div", null, props.data[option].street, ","), props.data && props.data[option].city && React.createElement("div", null, props.data[option].city, ","), props.data && props.data[option].state && React.createElement("div", null, props.data[option].state, ","), props.data && props.data[option].country && React.createElement("div", null, props.data[option].country, ","), props.data && props.data[option].zip && React.createElement("div", null, props.data[option].zip)));
  })));
}
function defaultTemplate$n() {
  return React.createElement("div", null);
}

class PiAddressProps$1 extends BaseProps {}
function PiMultiAddress(props) {
  const newprops = new PiAddressProps$1();
  return generateAddressTemplate$3({
    ...newprops,
    ...props
  });
}

let _$J = t => t,
  _t$J;
const PiLeftMenuClass = props => css(_t$J || (_t$J = _$J`
  width: 100%;
  background: ${0};

  .left-menu {
    font-size: 14px;
    line-height: 20px;
  }

  .menu-option {
    width: 100%;
    height: 48px;

    .menu-item-single {
      flex-direction: row;
      padding: 14px 0px 14px 24px;
      color: ${0};
      /*border-radius: 4px;*/
      font-size: 14px;
      line-height: 20px;
      color: ${0};
      background: ${0};
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 0;
      transition: all 0.3s ease;
      cursor: pointer;
      gap: 14px;
      border-radius: 4px;
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        font-weight: 700;
        /*color: ${0};*/
        background: ${0};
      }

      &.active {
        font-weight: 700;
        color: ${0};
        background: ${0};
      }

      .custom-icon {
        margin: 1px 2px 0 0;
      }
    }

    .menu-item {
      flex-direction: row;

      height: 100%;
      border-radius: 4px;
      font-size: 14px;
      line-height: 20px;
      color: ${0};
      background: ${0};
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 0;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease;

      button {
        padding: 14px 0px 14px 24px;
        font-size: 14px;
        color: ${0};
        background-color: transparent;
        width: 100%;
        height: 100%;
        isplay: flex;
        align-items: center;
        span {
          color: ${0};
          text-align: left;
        }
      }

      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        color: ${0};
        background: ${0};
        button {
          font-weight: 700;
          color: ${0};
          span {
            color: ${0};
            text-align: left;
          }
        }
      }

      &.active {
        button {
          font-weight: 700;
          color: ${0};
          background: ${0};
          span {
            color: ${0};
            text-align: left;
          }
        }
        &::after {
          background-color: ${0};
        }
      }

      .bottom-start {
        width: 100%;
      }
    }
  }
`), props.white, props.textColor, props.textColor, props.leftmenuBg, props.leftmenuHoverColor, props.leftmenuHoverBg, props.leftmenuHoverColor, props.leftmenuHoverBg, props.textColor, props.leftmenuBg, props.textColor, props.textColor, props.leftmenuHoverColor, props.leftmenuHoverBg, props.leftmenuHoverColor, props.leftmenuHoverColor, props.leftmenuHoverColor, props.leftmenuHoverBg, props.leftmenuHoverColor, props.leftmenuHoverBg);

function generateHeaderMenuTemplate$1({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return getHeaderTemplate$1(props);
  } else {
    return defaultTemplate$o();
  }
}
function getHeaderTemplate$1({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiLeftMenuClass(theme)
  }, React.createElement("div", {
    className: 'left-menu'
  }, React.createElement("div", {
    className: 'menu-option'
  }, props.options.map(option => {
    if (option.children && option.children.length) {
      return React.createElement("div", {
        key: option.key,
        className: props.activeKey === option.key ? 'active menu-item' : 'menu-item'
      }, option.icon && React.createElement("span", {
        className: 'custom-icon'
      }, " ", option.icon, " "), option.href && React.createElement("span", {
        className: 'custom-icon'
      }, React.createElement("img", {
        src: option.href,
        alt: option.label,
        width: '20',
        height: '20'
      })), React.createElement(DropdownMenu, {
        trigger: option.label,
        placement: 'bottom-start'
      }, React.createElement(DropdownItemGroup, null, option.children.map(child => React.createElement(DropdownItem, {
        key: child.key,
        onClick: () => props.onMenuClick(child)
      }, child.label)))));
    } else {
      return React.createElement(Fragment, null, option.display && React.createElement("div", {
        key: option.key,
        className: props.activeKey === option.key ? 'active menu-item-single' : 'menu-item-single',
        onClick: () => props.onMenuClick(option)
      }, option.icon && React.createElement("div", null, React.createElement("span", {
        className: 'custom-icon'
      }, React.createElement("img", {
        style: {
          height: '30px',
          width: '30px',
          borderRadius: '50%'
        },
        src: option.icon
      }))), option.href && React.createElement("div", null, React.createElement("span", {
        className: 'custom-icon'
      }, React.createElement("img", {
        src: option.href,
        alt: option.label,
        width: '20',
        height: '20'
      }))), React.createElement("div", {
        className: 'user_info'
      }, React.createElement(PiTooltip, {
        content: option.label,
        libraryType: 'atalskit'
      }, React.createElement("div", {
        className: 'user_name'
      }, option.label)), option.email && React.createElement(PiTooltip, {
        content: option.email,
        libraryType: 'atalskit'
      }, React.createElement("div", {
        className: 'user_email'
      }, option.email)), option.code && React.createElement(PiTooltip, {
        content: option.code,
        libraryType: 'atalskit'
      }, React.createElement("div", {
        className: 'user_email'
      }, option.code)))));
    }
  }))));
}
function defaultTemplate$o() {
  return React.createElement("div", null, "NO template");
}

class PiLeftMenuProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.options = [];
  }
}
function PiLeftMenu(props) {
  const newprops = new PiLeftMenuProps();
  return generateHeaderMenuTemplate$1({
    ...newprops,
    ...props
  });
}

let _$K = t => t,
  _t$K;
function getwidth(width) {
  switch (width) {
    case 'wide':
      {
        return 80;
      }
    case 'narrow':
      {
        return 30;
      }
    case 'medium':
      {
        return 50;
      }
    case 'extended':
      {
        return 60;
      }
    case 'full':
      {
        return 100;
      }
    default:
      {
        return 100;
      }
  }
}
const PiSideDrawerClass = (props, width) => css(_t$K || (_t$K = _$K`

/*height:100%;*/
.side-drawer {
  height: 100%;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: ${0}%;
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  background: ${0};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )
}

.side-drawer.open { 
  transform: translateX(0);
}
.backdrop{
    position:fixed;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    top:0;
    right:0;
  }


`), getwidth(width), props.white);

function generateSideDrawerTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$I(props);
  } else {
    return DefaultTemplate$l();
  }
}
function AtlasKitTemplate$I({
  width,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  let drawerClasses = 'side-drawer';
  if (props.isOpen) {
    drawerClasses = 'side-drawer open';
  }
  return React.createElement("div", {
    className: PiSideDrawerClass(theme, width)
  }, props.isOpen && React.createElement(Fragment, null, React.createElement("div", {
    className: drawerClasses
  }, props.children), React.createElement("div", {
    className: "backdrop",
    onClick: props.onBackdropClose
  })));
}
function DefaultTemplate$l() {
  return React.createElement("div", null);
}

class PiSideDrawerProps extends BaseProps {}
function PiSideDrawer(props) {
  const newprops = new PiSideDrawerProps();
  return generateSideDrawerTemplate({
    ...newprops,
    ...props
  });
}

let _$L = t => t,
  _t$L;
const PiFileUploader = props => css(_t$L || (_t$L = _$L`
    width: 100%;
    
    .container{
      width:100%;
      
    }
    background-color: ${0};
    .upload-container{
      width: 100%;
      border: 1px dashed ${0} ;
      padding:10px;
      min-height:30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .drag-container{
      width: 100%;
      border: 2px dashed ${0};
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
      color:${0}
    }
    .files-list{
      list-style: none;
      padding: 0px;
      margin: 0px;
      li{
        margin:5px 0px;
      }
    }

}
  
`), props.white, props.tabBorder, props.tabBorder, props.error);

function PiUploadIcon() {
  return React.createElement("svg", {
    width: '32',
    height: '33',
    viewBox: '0 0 32 33',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M5.33337 22.2969V23.6302C5.33337 24.6911 5.7548 25.7085 6.50495 26.4586C7.25509 27.2088 8.27251 27.6302 9.33337 27.6302H22.6667C23.7276 27.6302 24.745 27.2088 25.4951 26.4586C26.2453 25.7085 26.6667 24.6911 26.6667 23.6302V22.2969M21.3334 11.6302L16 6.29688M16 6.29688L10.6667 11.6302M16 6.29688V22.2969',
    stroke: '#134C85',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}

function generatefileUploaderComponentTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$J(props);
  } else {
    return DefaultTemplate$m();
  }
}
function AtlasKitTemplate$J({
  dropzoneProps,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiFileUploader(theme)
  }, React.createElement(Dropzone, Object.assign({
    onDrop: acceptedFiles => {
      props.onUpload(acceptedFiles);
    }
  }, dropzoneProps), ({
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
    acceptedFiles
  }) => {
    const disabled = dropzoneProps.disabled ? 'container disabled' : 'container';
    return React.createElement("div", {
      className: disabled
    }, React.createElement("div", Object.assign({}, getRootProps(), {
      className: isDragActive ? 'drag-container' : 'upload-container'
    }), React.createElement("input", Object.assign({}, getInputProps())), isDragActive ? 'Drop here' : dropzoneProps.text, React.createElement(PiUploadIcon, null), isDragReject && 'File type not accepted, sorry!'), React.createElement("ul", {
      className: 'files-list'
    }, acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile, index) => React.createElement("li", {
      key: index
    }, acceptedFile.name))), fileRejections.length > 0 && fileRejections.map(({
      file,
      errors
    }) => React.createElement("ul", {
      key: file.name,
      className: 'files-list'
    }, errors.map(e => React.createElement("li", {
      key: e.code,
      className: 'error'
    }, getErrorMessage(e.code, dropzoneProps))))));
  }));
}
function getErrorMessage(code, props) {
  let message = '';
  if (code == 'file-invalid-type') {
    message = props.validFieErrorMessage ? props.validFieErrorMessage : 'Upload valide file type';
  } else if (code == 'file-too-large') {
    message = props.maxFileSizeErroMessage ? props.maxFileSizeErroMessage : 'Max file size exceeded';
  } else if (code == "file-too-small'") {
    message = 'Upload minimum size file';
  } else if (code == 'too-many-files') {
    message = 'Too many files selected';
  }
  return message;
}
function DefaultTemplate$m() {
  return React.createElement("div", null);
}

class PiFileUploaderProps extends BaseProps {}
function PiFileUploader$1(props) {
  const newprops = new PiFileUploaderProps();
  return generatefileUploaderComponentTemplate({
    ...newprops,
    ...props
  });
}

let _$M = t => t,
  _t$M;
const PiPasswordValidator = props => css(_t$M || (_t$M = _$M`
  width: 100%;
  

  p{
    display: flex;
    align-items: center;
    margin: 8px 0px;

    span{
      font-size: 12px;
      line-height: 16px;
      margin: 0px 8px;
    }
  }
  .valid svg path{
    fill:${0} !important;
  }
  .not-valid svg path{
    fill:${0} !important;
  }
  
`), props.passwordValide, props.passwordNotValide);

function PiCheckinIcon() {
  return React.createElement("svg", {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M10.8708 2C6.45257 2 2.87085 5.58172 2.87085 10C2.87085 14.4183 6.45257 18 10.8708 18C15.2891 18 18.8708 14.4183 18.8708 10C18.8708 5.58172 15.2891 2 10.8708 2ZM0.87085 10C0.87085 4.47715 5.348 0 10.8708 0C16.3937 0 20.8708 4.47715 20.8708 10C20.8708 15.5228 16.3937 20 10.8708 20C5.348 20 0.87085 15.5228 0.87085 10ZM15.5352 6.75259C15.948 7.11951 15.9852 7.75158 15.6183 8.16436L10.2849 14.1644C10.0952 14.3779 9.82315 14.5 9.53752 14.5C9.25188 14.5 8.97987 14.3779 8.79011 14.1644L6.12344 11.1644C5.75652 10.7516 5.7937 10.1195 6.20649 9.75259C6.61927 9.38567 7.25134 9.42285 7.61826 9.83564L9.53752 11.9948L14.1234 6.83564C14.4904 6.42285 15.1224 6.38567 15.5352 6.75259Z",
    fill: "none"
  }));
}

function generatefileUploaderComponentTemplate$1({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$K(props);
  } else {
    return DefaultTemplate$n();
  }
}
function AtlasKitTemplate$K({
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const [uppercaseValid, setUppercaseValid] = React.useState(false);
  const [charNumberValid, setCharNumberValid] = React.useState(false);
  const [numberValid, setNumberValid] = React.useState(false);
  const [lowerCharValid, setLowerCharValid] = React.useState(false);
  let password = props.password;
  useEffect(() => {
    const upperCasePattern = /[A-Z]/;
    if (upperCasePattern.test(password)) {
      setUppercaseValid(true);
    } else {
      setUppercaseValid(false);
    }
    if (password.length >= 8) {
      setCharNumberValid(true);
    } else {
      setCharNumberValid(false);
    }
    const NumberPattern = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if (NumberPattern.test(password)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
    const lowerCasePattern = /[a-z]/;
    if (lowerCasePattern.test(password)) {
      setLowerCharValid(true);
    } else {
      setLowerCharValid(false);
    }
  });
  return React.createElement("div", {
    className: PiPasswordValidator(theme)
  }, React.createElement("p", {
    className: charNumberValid ? "valid " : "not-valid "
  }, React.createElement(PiCheckinIcon, null), React.createElement("span", {
    className: "text-styles"
  }, "At least 8 characters long ")), React.createElement("p", {
    className: lowerCharValid ? "valid " : "not-valid "
  }, React.createElement(PiCheckinIcon, null), React.createElement("span", {
    className: "text-styles"
  }, "One lowercase character")), React.createElement("p", {
    className: uppercaseValid ? "valid " : "not-valid "
  }, React.createElement(PiCheckinIcon, null), React.createElement("span", {
    className: "text-styles"
  }, "One uppercase character")), React.createElement("p", {
    className: numberValid ? "valid " : "not-valid "
  }, React.createElement(PiCheckinIcon, null), React.createElement("span", {
    className: "text-styles"
  }, "One number, symbol")));
}
function DefaultTemplate$n() {
  return React.createElement("div", null);
}

class PiPasswordValidatorProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.password = 'image/*';
    this.maxSize = 18;
    this.minSize = 8;
  }
}
function PiPasswordValidator$1(props) {
  const newprops = new PiPasswordValidatorProps();
  return generatefileUploaderComponentTemplate$1({
    ...newprops,
    ...props
  });
}

function generateGridTemplate$1({
  libraryType,
  ...props
}) {
  const sidebarPanel = {
    toolPanels: [{
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      minWidth: 225,
      width: 225,
      maxWidth: 225
    }, {
      id: 'filters',
      labelDefault: 'Filters',
      labelKey: 'filters',
      iconKey: 'filter',
      toolPanel: 'agFiltersToolPanel',
      minWidth: 180,
      maxWidth: 400,
      width: 250
    }],
    defaultToolPanel: ''
  };
  let [appUrl, setAppUrl] = useState('');
  const [loading, setloading] = useState(true);
  let [gridapi, setGridApi] = useState(null);
  const onGridReady = params => {
    console.log(props);
    gridapi = params.api;
    setGridApi(gridapi);
    if (props.onGridReady) {
      props.onGridReady(params);
    }
    setTimeout(() => {
      const dataSource = ServerSideDatasource(props);
      params.api.setServerSideDatasource(dataSource);
    }, 1000);
  };
  useEffect(() => {}, []);
  function pageChanged(e) {
    console.log(e);
  }
  function ServerSideDatasource(props) {
    return {
      getRows: function (params) {
        setloading(true);
        console.log('[Datasource] - rows requested by grid: ', params.request, props);
        const sort = params.request.sortModel.length ? params.request.sortModel[0].sort : '';
        const sortkey = params.request.sortModel.length ? params.request.sortModel[0].colId : '';
        setTimeout(function () {
          const info = localStorage.getItem('requestInfo');
          const requestInfo = JSON.parse(info);
          const body = {
            method: requestInfo.method,
            headers: requestInfo.headers
          };
          appUrl = requestInfo.url;
          setAppUrl(appUrl);
          if (requestInfo.method !== 'GET') {
            body.body = JSON.stringify({
              startRow: params.request.startRow,
              endRow: params.request.endRow,
              ...requestInfo.body
            });
          } else {
            let page;
            page = params.request.endRow / 25;
            requestInfo.url = `${requestInfo.url}?page=${page}&sort=${sort}&sort_key=${sortkey}`;
            appUrl = requestInfo.url;
            setAppUrl(appUrl);
            if (requestInfo.body.grid_name === 'Admin') {
              getAdminColumnFilterIds(params.request);
            } else {
              getColumnFilterIds(params.request);
              if (requestInfo.body.grid_name === 'Repairs') {
                setCustomerFilterParams();
                getCustomFilterIds();
              }
            }
            setAdditionalParams();
            const searchValue = localStorage.getItem('test');
            if (searchValue && searchValue.length) {
              appUrl = `${appUrl}`.concat('&search=' + searchValue);
              setAppUrl(appUrl);
            }
            localStorage.setItem('appUrl', appUrl);
          }
          fetch(appUrl, body).then(resp => resp.json()).then(data => {
            if (data && data.result.success) {
              var response = data.result.data.list;
              localStorage.setItem('gridResponse', JSON.stringify(response));
              if (response && !response.length) {
                setloading(false);
                params.api.showNoRowsOverlay();
              } else if (response && response.length) {
                params.api.hideOverlay();
                setloading(false);
              } else {
                params.api.hideOverlay();
                setloading(false);
              }
              params.success({
                rowData: response,
                rowCount: data.result.data.total_count
              });
            } else {
              params.fail();
            }
          });
        }, 200);
      }
    };
  }
  let filterArray = [];
  function getColumnFilterIds(params) {
    const info = localStorage.getItem('requestInfo');
    const requestInfo = JSON.parse(info);
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(obj1 => {
          params.filterModel[key].values.map((obj, index) => {
            console.log(obj.name);
            if (obj1.name === params.filterModel[key].values[index]) {
              filterArray.push(obj1.id);
            }
          });
        });
        if (filterArray.length) {
          key = filterArray.map(function (el, idx) {
            return key + '[' + idx + ']=' + el;
          }).join('&');
          appUrl = `${appUrl}`.concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function getAdminColumnFilterIds(params) {
    const info = localStorage.getItem('requestInfo');
    const requestInfo = JSON.parse(info);
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(obj1 => {
          params.filterModel[key].values.map((obj, index) => {
            console.log(obj.name);
            if (obj1.name === params.filterModel[key].values[index]) {
              filterArray.push(obj1.id);
            }
          });
        });
        if (filterArray.length) {
          key = filterArray.map(function (el, idx) {
            console.log(el, idx);
            return key + '=' + el;
          }).join('&');
          appUrl = `${appUrl}`.concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function setAdditionalParams() {
    const info = localStorage.getItem('requestInfo');
    const requestInfo = JSON.parse(info);
    if (requestInfo) {
      for (var key in requestInfo.body) {
        if (requestInfo.body.hasOwnProperty(key)) {
          appUrl = `${appUrl}`.concat('&' + `${key}=${requestInfo.body[key]}`);
          setAppUrl(appUrl);
        }
      }
    }
  }
  let selectedCustomerFilters = [];
  function setCustomerFilterParams() {
    selectedCustomerFilters = [];
    const info = localStorage.getItem('requestInfo');
    const requestInfo = JSON.parse(info);
    if (requestInfo && requestInfo.body.selectedFilterByCustomer && requestInfo.body.selectedFilterByCustomer.length) {
      console.log(requestInfo, selectedCustomerFilters);
      if (requestInfo.body.hasOwnProperty('selectedFilterByCustomer')) {
        console.log(selectedCustomerFilters);
        requestInfo.body.selectedFilterByCustomer.map(obj => {
          selectedCustomerFilters.push(obj.id);
        });
      }
      if (selectedCustomerFilters.length) {
        let paramKey = 'customer_name';
        paramKey = selectedCustomerFilters.map(function (el, idx) {
          return paramKey + '[' + idx + ']=' + el;
        }).join('&');
        appUrl = `${appUrl}`.concat('&' + paramKey);
        setAppUrl(appUrl);
      }
    }
  }
  let customfilterArray = [];
  function getCustomFilterIds() {
    const info = localStorage.getItem('requestInfo');
    const requestInfo = JSON.parse(info);
    for (var key in requestInfo.body.selectedCustomFilters) {
      if (requestInfo.body.selectedCustomFilters.hasOwnProperty(key)) {
        customfilterArray = [];
        requestInfo.body.selectedCustomFilters[key].map(obj => {
          console.log(obj.name);
          customfilterArray.push(obj.id);
        });
        if (customfilterArray.length) {
          key = customfilterArray.map(function (el, idx) {
            return key + '[' + idx + ']=' + el;
          }).join('&');
          appUrl = `${appUrl}`.concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  return React.createElement("div", {
    id: 'myGrid',
    style: {
      height: '100vh',
      width: '100%'
    },
    className: 'ag-theme-alpine'
  }, loading && React.createElement("div", {
    className: 'aggrid-pixel-spinner'
  }, React.createElement(PiSpinner, {
    color: 'primary',
    size: 50,
    libraryType: 'atalskit'
  })), React.createElement(AgGridReact, Object.assign({
    pagination: true,
    rowModelType: 'serverSide',
    serverSideStoreType: 'partial',
    paginationPageSize: 25,
    cacheBlockSize: 25,
    rowHeight: 50,
    defaultColDef: {
      flex: 1
    },
    cacheQuickFilter: true,
    columnDefs: props.columns,
    sideBar: sidebarPanel,
    animateRows: true,
    onPaginationChanged: e => pageChanged(e)
  }, props, {
    onGridReady: onGridReady
  })));
}

class PiGridProps$1 extends BaseProps {
  constructor() {
    super(...arguments);
    this.mode = 'static';
    this.columns = [];
  }
}
function PiServerGrid(props) {
  const newprops = new PiGridProps$1();
  return generateGridTemplate$1({
    ...newprops,
    ...props
  });
}

let _$N = t => t,
  _t$N;
const PiFileUploader$2 = props => css(_t$N || (_t$N = _$N`
    width: 100%;
    
    .container{
      width:100%;
      
    }
    background-color: ${0};
    .upload-container{
      width: 100%;
      border: 1px dashed ${0} ;
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
      border: 2px dashed ${0};
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
      color:${0}
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
  
`), props.white, props.tabBorder, props.tabBorder, props.error);

function generatefileUploaderComponentTemplate$2({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$L(props);
  } else {
    return DefaultTemplate$o();
  }
}
function AtlasKitTemplate$L({
  dropzoneProps,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  return React.createElement("div", {
    className: PiFileUploader$2(theme)
  }, React.createElement(Dropzone, Object.assign({
    onDrop: acceptedFiles => {
      props.onUpload(acceptedFiles);
    }
  }, dropzoneProps), ({
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
    acceptedFiles
  }) => {
    const disabled = dropzoneProps.disabled ? 'container disabled' : 'container';
    return React.createElement("div", {
      className: disabled
    }, React.createElement("div", Object.assign({}, getRootProps(), {
      className: isDragActive ? 'drag-container' : 'upload-container'
    }), React.createElement("input", Object.assign({}, getInputProps())), isDragActive ? React.createElement(UploaderText, null) : dropzoneProps.text, isDragReject && 'File type not accepted, sorry!'), React.createElement("ul", {
      className: 'files-list'
    }, acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile, index) => React.createElement("li", {
      key: index
    }, acceptedFile.name))), fileRejections.length > 0 && fileRejections.map(({
      file,
      errors
    }) => React.createElement("ul", {
      key: file.name,
      className: 'files-list'
    }, errors.map(e => React.createElement("li", {
      key: e.code,
      className: 'error'
    }, getErrorMessage$1(e.code, dropzoneProps))))));
  }));
}
function getErrorMessage$1(code, props) {
  let message = '';
  if (code == 'file-invalid-type') {
    message = props.validFieErrorMessage ? props.validFieErrorMessage : 'Upload valide file type';
  } else if (code == 'file-too-large') {
    message = props.maxFileSizeErroMessage ? props.maxFileSizeErroMessage : 'Max file size exceeded';
  } else if (code == "file-too-small'") {
    message = 'Upload minimum size file';
  } else if (code == 'too-many-files') {
    message = 'Too many files selected';
  }
  return message;
}
function DefaultTemplate$o() {
  return React.createElement("div", null);
}
const UploaderText = () => {
  return React.createElement("div", {
    className: 'drop-container'
  }, React.createElement("div", null, "Drop Here"));
};

class PiFileUploaderProps$1 extends BaseProps {}
function PiUploader(props) {
  const newprops = new PiFileUploaderProps$1();
  return generatefileUploaderComponentTemplate$2({
    ...newprops,
    ...props
  });
}

function generateGridTemplate$2({
  libraryType,
  ...props
}) {
  let [requestProps, setRequestProps] = useState(props);
  const newprops = new PiGridProps$2();
  let [appUrl, setAppUrl] = useState('');
  const [loading, setloading] = useState(true);
  let [gridapi, setGridApi] = useState(null);
  let [columnsApi, setColumnApi] = useState();
  let [allowAutoResize, setAllowAutoResize] = useState(false);
  const onGridReady = params => {
    console.log(props);
    gridapi = params.api;
    setGridApi(gridapi);
    columnsApi = params.columnApi;
    setColumnApi(columnsApi);
    if (props.onGridReady) {
      props.onGridReady(params);
      setTimeout(() => {
        const dataSource = ServerSideDatasource(requestProps);
        gridapi.setServerSideDatasource(dataSource);
      }, 1000);
    }
  };
  useEffect(() => {
    console.log(newprops, props);
    requestProps = {};
    requestProps = {
      ...newprops,
      ...props
    };
    console.log(requestProps);
    setRequestProps({
      ...requestProps
    });
  }, []);
  useEffect(() => {
    if (gridapi) {
      setTimeout(() => {
        const dataSource = ServerSideDatasource(requestProps);
        gridapi.setServerSideDatasource(dataSource);
      }, 1000);
    }
  }, [props.requestInfo]);
  useEffect(() => {
    if (columnsApi && columnsApi.getAllColumns() && allowAutoResize) {
      console.log('autosize');
      var allColumnIds = [];
      columnsApi.getAllColumns().forEach(function (column) {
        allColumnIds.push(column.colId);
      });
      columnsApi.autoSizeColumns(allColumnIds);
      console.log(allColumnIds);
    }
  }, [columnsApi, allowAutoResize]);
  useEffect(() => {
    if (columnsApi && !allowAutoResize) {
      console.log('state');
      columnsApi.applyColumnState({
        state: props.requestInfo.columnsStateData,
        applyOrder: true
      });
    }
  }, [columnsApi, allowAutoResize, props.requestInfo.columnsStateData]);
  function allowAutoResizeColumns(coldata) {
    console.log(coldata);
    let allow_resize = false;
    if (coldata && coldata.length) {
      for (let i = 0; i < coldata.length; i++) {
        if (coldata[i].width > 350) {
          allow_resize = false;
          break;
        } else {
          allow_resize = true;
        }
      }
    }
    return allow_resize;
  }
  const autoSizeAll = () => {
    const colList = props.requestInfo.columnsStateData;
    console.log(colList);
    const is_allow = allowAutoResizeColumns(colList);
    console.log(is_allow);
    setAllowAutoResize(is_allow);
  };
  const sidebarPanel = {
    toolPanels: [{
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      minWidth: 225,
      width: 225,
      maxWidth: 225
    }, {
      id: 'filters',
      labelDefault: 'Filters',
      labelKey: 'filters',
      iconKey: 'filter',
      toolPanel: 'agFiltersToolPanel',
      minWidth: 180,
      maxWidth: 400,
      width: 250
    }],
    defaultToolPanel: ''
  };
  function pageChanged(e) {
    console.log(e);
  }
  const [viewAccess, setViewAccess] = useState(true);
  function ServerSideDatasource(requestProps) {
    return {
      getRows: function (params) {
        setloading(true);
        console.log('[Datasource] - rows requested by grid: ', params.request, props);
        console.log(requestProps);
        const sort = params.request.sortModel.length ? params.request.sortModel[0].sort : '';
        const sortkey = params.request.sortModel.length ? params.request.sortModel[0].colId : '';
        setTimeout(function () {
          const info = props.requestInfo;
          const requestInfo = info;
          if (requestInfo && Object.keys(requestInfo).length > 0) {
            const body = {
              method: requestInfo.method,
              headers: requestInfo.headers
            };
            appUrl = requestInfo.url;
            setAppUrl(appUrl);
            if (requestInfo.method !== 'GET') {
              body.body = JSON.stringify({
                startRow: params.request.startRow,
                endRow: params.request.endRow,
                ...requestInfo.body
              });
            } else {
              let page;
              let url = '';
              url = props.requestInfo.url;
              page = params.request.endRow / props.cacheBlockSize || 1;
              url = `${props.requestInfo.url}?page=${page}&perPage=${props.cacheBlockSize || 25}&sort=${sort}&sort_key=${sortkey}`;
              appUrl = url;
              console.log(requestInfo, url);
              setAppUrl(appUrl);
              if (requestInfo.body.grid_name === 'Admin') {
                getAdminColumnFilterIds(params.request);
              } else {
                getColumnFilterIds(params.request);
                if (requestInfo.body.grid_name === 'Repairs') {
                  setCustomerFilterParams();
                  getCustomFilterIds();
                }
              }
              setAdditionalParams();
              const searchValue = info.searchkey ? info.searchkey : localStorage.getItem('globalSearch');
              if (searchValue && searchValue.length) {
                const _url = new URL(appUrl);
                _url.searchParams.set('search', searchValue);
                console.log(_url);
                appUrl = _url;
                setAppUrl(appUrl);
              }
              localStorage.setItem('appUrl', appUrl);
            }
            fetch(appUrl, body).then(resp => resp.json()).then(data => {
              if (data && data.result.success) {
                setViewAccess(true);
                var response = data.result.data.list;
                localStorage.setItem('gridResponse', JSON.stringify(response));
                if (response && !response.length) {
                  setloading(false);
                  params.api.showNoRowsOverlay();
                } else if (response && response.length) {
                  params.api.hideOverlay();
                  setloading(false);
                } else {
                  params.api.hideOverlay();
                  setloading(false);
                }
                params.success({
                  rowData: response,
                  rowCount: data.result.data.total_count
                });
                setTimeout(() => {
                  if (!requestInfo.body.disableAutoSize) {
                    autoSizeAll();
                    autoSizeAll();
                  }
                }, 100);
              } else if (data && data.result.status_code === 403) {
                setViewAccess(false);
                params.fail();
              } else {
                setViewAccess(true);
                params.fail();
              }
            });
          } else {
            params.success({
              rowData: [],
              rowCount: 0
            });
          }
        }, 200);
      }
    };
  }
  let filterArray = [];
  function getColumnFilterIds(params) {
    const info = props.requestInfo;
    const requestInfo = info;
    console.log(props);
    console.log(requestProps);
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(obj1 => {
          params.filterModel[key].values.map((obj, index) => {
            console.log(obj.name);
            if (obj1.name === params.filterModel[key].values[index]) {
              filterArray.push(obj1.id);
            }
          });
        });
        if (filterArray.length) {
          key = filterArray.map(function (el, idx) {
            return key + '[' + idx + ']=' + el;
          }).join('&');
          appUrl = `${appUrl}`.concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function getAdminColumnFilterIds(params) {
    const info = props.requestInfo;
    const requestInfo = info;
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(obj1 => {
          params.filterModel[key].values.map((obj, index) => {
            console.log(obj.name);
            if (obj1.name === params.filterModel[key].values[index]) {
              filterArray.push(obj1.id);
            }
          });
        });
        if (filterArray.length) {
          key = filterArray.map(function (el, idx) {
            console.log(el, idx);
            return key + '=' + el;
          }).join('&');
          appUrl = `${appUrl}`.concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function setAdditionalParams() {
    console.log(props);
    const info = props.requestInfo;
    const requestInfo = info;
    if (requestInfo) {
      for (var key in requestInfo.body) {
        if (requestInfo.body.hasOwnProperty(key)) {
          appUrl = `${appUrl}`.concat('&' + `${key}=${requestInfo.body[key]}`);
          setAppUrl(appUrl);
        }
      }
    }
  }
  let selectedCustomerFilters = [];
  function setCustomerFilterParams() {
    selectedCustomerFilters = [];
    const info = props.requestInfo;
    const requestInfo = info;
    if (requestInfo && requestInfo.body.selectedFilterByCustomer && requestInfo.body.selectedFilterByCustomer.length) {
      console.log(requestInfo, selectedCustomerFilters);
      if (requestInfo.body.hasOwnProperty('selectedFilterByCustomer')) {
        console.log(selectedCustomerFilters);
        requestInfo.body.selectedFilterByCustomer.map(obj => {
          selectedCustomerFilters.push(obj.id);
        });
      }
      if (selectedCustomerFilters.length) {
        let paramKey = 'customer_name';
        paramKey = selectedCustomerFilters.map(function (el, idx) {
          return paramKey + '[' + idx + ']=' + el;
        }).join('&');
        appUrl = `${appUrl}`.concat('&' + paramKey);
        setAppUrl(appUrl);
      }
    }
  }
  let customfilterArray = [];
  function getCustomFilterIds() {
    const info = props.requestInfo;
    const requestInfo = info;
    for (var key in requestInfo.body.selectedCustomFilters) {
      if (requestInfo.body.selectedCustomFilters.hasOwnProperty(key)) {
        customfilterArray = [];
        requestInfo.body.selectedCustomFilters[key].map(obj => {
          console.log(obj.name);
          customfilterArray.push(obj.id);
        });
        if (customfilterArray.length) {
          key = customfilterArray.map(function (el, idx) {
            return key + '[' + idx + ']=' + el;
          }).join('&');
          appUrl = `${appUrl}`.concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  return React.createElement(Fragment, null, viewAccess ? React.createElement("div", {
    id: 'myGrid',
    style: {
      height: '100vh',
      width: '100%'
    },
    className: 'ag-theme-alpine'
  }, loading && React.createElement("div", {
    className: 'aggrid-pixel-spinner'
  }, React.createElement(PiSpinner, {
    color: 'primary',
    size: 50,
    libraryType: 'atalskit'
  })), React.createElement(AgGridReact, Object.assign({
    pagination: true,
    rowModelType: 'serverSide',
    serverSideStoreType: 'partial',
    paginationPageSize: 25,
    cacheBlockSize: 25,
    rowHeight: 50,
    defaultColDef: {
      flex: 1
    },
    cacheQuickFilter: true,
    columnDefs: props.columns,
    sideBar: sidebarPanel,
    animateRows: true,
    onPaginationChanged: e => pageChanged(e)
  }, props, {
    onGridReady: onGridReady
  }))) : React.createElement("div", {
    className: 'access-denied'
  }, React.createElement("p", null, "Sorry, you do not have permissions to access this page.")));
}

class PiGridProps$2 extends BaseProps {
  constructor() {
    super(...arguments);
    this.mode = 'static';
    this.columns = [];
  }
}
function PiServerGrid2(props) {
  const newprops = new PiGridProps$2();
  return generateGridTemplate$2({
    ...newprops,
    ...props
  });
}

let _$O = t => t,
  _t$O;
const PiDateRangePickerClass = () => css(_t$O || (_t$O = _$O`
  display: flex;
`));

function generateDateRangeTemplate({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$M(props);
  } else {
    return defaultTemplate$p();
  }
}
function AtlasKitTemplate$M({
  ...props
}) {
  console.log(props);
  const onDateRangeChanged = update => {
    console.log(update);
    props.onChange(update);
  };
  return React.createElement("div", {
    className: PiDateRangePickerClass()
  }, React.createElement(DatePicker$1, Object.assign({}, props, {
    onChange: onDateRangeChanged,
    placeholderText: props.placeholderText
  })));
}
function defaultTemplate$p() {
  return React.createElement("div", null);
}

class PiDateRangePickerProps extends BaseProps {}
function PiDateRangePicker(props) {
  const newprops = new PiDateRangePickerProps();
  return generateDateRangeTemplate({
    ...newprops,
    ...props
  });
}

let _$P = t => t,
  _t$P;
const PiConfirmClass = props => css(_t$P || (_t$P = _$P`
  /*display: flex;
  align-items: center;
  padding: 0px;*/
  &.confirmation-container {
    width: 480px;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid #dee2e6;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
      0px 20px 20px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 130px;
    right: -200%;
    z-index: 999;
    transition: all 0.75s ease;
    &.show {
      right: 24px;
    }
    .close-icon-container {
      /*background-color: #f2f7ff;*/
      display: flex;
      justify-content: center;
      align-items: center;
      /*border-radius: 50%;*/
      width: 24px;
      height: 24px;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    .text-container {
      flex: 1;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        color: #1976d2;
      }
    }
    .text-container-header {
      font-size: 20px;
      font-weight: 600;
      color: #4e586d;
      margin-bottom: 8px;
    }
    .text-container-text {
      color: #6d7992;
      font-size: 14px;
      margin-bottom: 16px;
    }
    .toast-action {
      display: flex;
      flex-direction: row;
      gap: 20px;
      button {
        height: 32px !important;
      }
    }
  }
  .quote-block {
    /* display: flex; */

    .label-text {
      color: ${0};
      font-family: 'Inter';
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
    }
    .address-data {
      display: flex;
      color: ${0};
      align-items: center;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
    }
  }
`), props.lablelDescription, props.lablelDescription);

function generateAddressTemplate$4({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$N(props);
  } else {
    return defaultTemplate$q();
  }
}
function AtlasKitTemplate$N({
  ...props
}) {
  console.log(props);
  const theme = useContext(PiThemeContext);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [declineBtnDisabled, setDeclineBtnDisabled] = useState(false);
  useEffect(() => {
    console.log(props);
    setBtnDisabled(props.primaryBtnDisable || false);
    setDeclineBtnDisabled(props.secondaryBtnDisable || false);
  }, [props.className, props.primaryBtnDisable, props.secondaryBtnDisable]);
  return React.createElement(Fragment, null, React.createElement("div", {
    className: `${PiConfirmClass(theme)} pi-toast confirmation-container ${props.className}`
  }, React.createElement("div", {
    className: 'close-icon-container',
    onClick: props.onClose
  }, React.createElement(PiNewCloseIcon, null)), React.createElement("div", {
    className: 'text-container'
  }, React.createElement("div", {
    className: 'text-container-header'
  }, props.headerLabel), React.createElement("div", {
    className: 'text-container-text'
  }, props.message)), React.createElement("div", {
    className: 'toast-action'
  }, props.primaryBtnLabel && React.createElement(PiButton, {
    appearance: 'primary',
    label: props.primaryBtnLabel,
    libraryType: 'atalskit',
    onClick: () => {
      props.onAccept ? props.onAccept('accept') : '';
    },
    isDisabled: btnDisabled
  }), props.secondaryBtnLabel && React.createElement(PiButton, {
    appearance: 'secondary',
    label: props.secondaryBtnLabel,
    libraryType: 'atalskit',
    onClick: () => {
      props.onDecline ? props.onDecline('decline') : '';
    },
    isDisabled: declineBtnDisabled
  }))), (props.className === 'show' || props.className === 'show text-red') && React.createElement("div", {
    className: 'toast-backdrop'
  }));
}
function defaultTemplate$q() {
  return React.createElement("div", null);
}

class PiConfirmModelProps extends BaseProps {}
function PiConfirmModel(props) {
  const newprops = new PiConfirmModelProps();
  return generateAddressTemplate$4({
    ...newprops,
    ...props
  });
}

let _$Q = t => t,
  _t$Q;
const PiToastClass = props => css(_t$Q || (_t$Q = _$Q`
  /*display: flex;
  align-items: center;
  padding: 0px;*/
  &.confirmation-container {
    width: 546px;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid #dee2e6;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
      0px 20px 20px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 130px;
    right: -200%;
    z-index: 999;
    transition: all 0.75s ease;
    &.show {
      right: 24px;
    }
    .close-icon-container {
      /*background-color: #f2f7ff;*/
      display: flex;
      justify-content: center;
      align-items: center;
      /*border-radius: 50%;*/
      width: 24px;
      height: 24px;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    .text-container {
      flex: 1;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        color: #1976d2;
      }
    }
    .text-container-header {
      font-size: 20px;
      font-weight: 600;
      color: #4e586d;
      margin-bottom: 8px;
    }
    .text-container-text {
      color: #6d7992;
      font-size: 14px;
      margin-bottom: 16px;
    }
    .success-content {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      .tick-icon {
        width: 56px;
        height: 56px;
        background-color: #e3f2fd;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .quote-block {
    /* display: flex; */

    .label-text {
      color: ${0};
      font-family: 'Inter';
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
    }
    .address-data {
      display: flex;
      color: ${0};
      align-items: center;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 4px 0px;
    }
  }
`), props.lablelDescription, props.lablelDescription);

function PiCheck() {
  return React.createElement("svg", {
    width: '28',
    height: '28',
    viewBox: '0 0 28 28',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M13.9999 25.6667C17.2216 25.6667 20.1382 24.3608 22.2495 22.2496C24.3607 20.1383 25.6666 17.2216 25.6666 14C25.6666 10.7784 24.3607 7.86169 22.2495 5.75041C20.1382 3.63917 17.2216 2.33333 13.9999 2.33333C10.7783 2.33333 7.86162 3.63917 5.75034 5.75041C3.63909 7.86169 2.33325 10.7784 2.33325 14C2.33325 17.2216 3.63909 20.1383 5.75034 22.2496C7.86162 24.3608 10.7783 25.6667 13.9999 25.6667Z',
    fill: '',
    stroke: '#4E586D',
    strokeWidth: '2',
    strokeLinejoin: 'round'
  }), React.createElement("path", {
    d: 'M9.33325 14L12.8333 17.5L19.8333 10.5',
    stroke: '#4E586D',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}

function generateAddressTemplate$5({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$O(props);
  } else {
    return defaultTemplate$r();
  }
}
function AtlasKitTemplate$O({
  ...props
}) {
  console.log(props);
  const theme = useContext(PiThemeContext);
  let [showPopupClass, setShowPopupClass] = useState('');
  useEffect(() => {
    showPopupClass = props.className;
    setShowPopupClass(props.className);
    if (props.className) {
      setTimeout(() => {
        props.onClose();
      }, 2000);
    }
  }, [props.className]);
  return React.createElement(Fragment, null, React.createElement("div", {
    className: `${PiToastClass(theme)} pi-toast confirmation-container ${showPopupClass}`
  }, React.createElement("div", {
    className: 'close-icon-container',
    onClick: props.onClose
  }, React.createElement(PiNewCloseIcon, null)), React.createElement("div", {
    className: 'success-content'
  }, React.createElement("div", {
    className: 'tick-icon'
  }, React.createElement(PiCheck, null)), React.createElement("div", {
    className: 'text-container'
  }, React.createElement("div", {
    className: 'text-container-header'
  }, props.headerLabel), React.createElement("div", {
    className: 'text-container-text'
  }, props.message)))), (props.className === 'show' || props.className === 'show text-red') && React.createElement("div", {
    className: 'toast-backdrop'
  }));
}
function defaultTemplate$r() {
  return React.createElement("div", null);
}

class PiToastProps extends BaseProps {}
function PiToast(props) {
  const newprops = new PiToastProps();
  return generateAddressTemplate$5({
    ...newprops,
    ...props
  });
}

let _$R = t => t,
  _t$R;
const PiIconInputClass = props => css(_t$R || (_t$R = _$R`
  width: 100%;
  text-align: left;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    /*> div {
      display: flex;
      gap: 8px;
      margin-bottom: 4px;
    }*/
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;

      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  input {
    margin: 4px 0 4px 0;
    padding: 11px 12px 11px 14px !important;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /*border: 0.125rem solid ${0};*/
    border-radius: 4px;
    height: 36px !important;
    background-color: ${0};
    &:hover {
      background-color: #fff;
      /*border: 0.125rem solid ${0};*/
    }
    &:focus {
      background-color: ${0};
      /*border: 0.125rem solid ${0};*/
    }
  }
  div[data-ds--text-field--container='true'] {
    max-height: 36px !important;
    background-color: #f7faff !important;
  }
`), props.inputHoverBorder, props.fieldBgColor, props.inputHoverBorder, props.white, props.inputFocusBorder);

function generateInputTemplate$2({
  libraryType,
  ...props
}) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$P(props);
  } else {
    return DefaultTemplate$p(props);
  }
}
function AtlasKitTemplate$P({
  label,
  helpText,
  isMandatory,
  ...props
}) {
  const theme = useContext(PiThemeContext);
  const [value, setValue] = useState('');
  console.log(theme);
  return React.createElement("div", {
    className: PiIconInputClass(theme)
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    className: 'select-label'
  }, label && React.createElement("div", {
    className: 'field-label-div'
  }, React.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React.createElement("div", null, React.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React.createElement(PiTickIcon, {
    onClick: e => {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React.createElement(PiUndoIcon, {
    onClick: e => {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React.createElement(Fragment, null, React.createElement(AtlasTextfield, Object.assign({}, props, {
    value: value,
    onChange: e => {
      console.log(e.target.value);
      setValue(e.target.value);
      props.onChange ? props.onChange(e.target.value) : null;
    }
  })), helpText && React.createElement(PiTypography$1, null, helpText))));
}
function DefaultTemplate$p(props) {
  const defaultProps = generateDefaultProps$7(props);
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("label", null, defaultProps.label), React.createElement("input", Object.assign({}, defaultProps)), React.createElement("span", {
    className: 'form-error-msg'
  }, defaultProps.helperText));
}
function generateDefaultProps$7(props) {
  const defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  };
  return defaultProps;
}

class PiIconInputProps extends BaseProps {
  constructor() {
    super(...arguments);
    this.name = 'inputField';
    this.appearance = 'standard';
    this.type = 'text';
  }
}
function PiIconInput(props) {
  const newprops = new PiIconInputProps();
  return generateInputTemplate$2({
    ...newprops,
    ...props
  });
}

export { PiInput2 as PInput2, PiAccordian, PiAccordianHeader, PiAccordianItem, PiAccordianPanel, PiActionIcon, PiAddress, PiAttachmentList, PiAttachments, PiAvatar, PiBackSection, PiBanner, PiBreadCrumb, PiButton, PiCheckBoxSelect, PiCheckBoxSelectForm, PiCheckbox, PiCheckboxForm, PiConfirmModel, PiCreateSelect, PiCreateSelectForm, PiDatePicker, PiDateRangePicker, PiDateTimePicker, PiDatepickerForm, PiDrawer, PiDropdownMenu, PiEditor, PiFileUploader$1 as PiFileUploader, PiFlag, PiFileUploader$1 as PiFleUploader, PiForm, PiGrid, PiHeaderMenu, PiIconDropdownMenu, PiIconInput, PiIconInputForm, PiIdComponent, PiInput, PiInputForm, PiInputForm2, PiBackSection$1 as PiInvoice, PiLabelName, PiLeftMenu, PiLozenge, PiModal$1 as PiModal, modalBody as PiModalBody, modalFooter as PiModalFooter, modalHeader as PiModalHeader, modalTitle as PiModalTitle, PiMultiAddress, PiPageHeader, PiPagination, PiPasswordValidator$1 as PiPasswordValidator, PiPermissions, PiPermissionsList, PiProductCard, PiProfileHeader, PiProfileSection, PiProgressIndicator, PiQuoteName, PiRadioForm, PiRadioGroup, PiSearch, PiSectionMessage, PiSelect, PiSelectForm, PiServerGrid, PiServerGrid2, PiSideDrawer, PiSpinner, tabGroup as PiTabGroup, PiTabHeader$1 as PiTabHeader, tabHeaderGroup as PiTabHeaderPanel, tabPanel as PiTabPanel, PiTag, PiTextArea, PiTextareaForm, PiThemeContextProvider, PiTimePicker, PiToast, PiToggle, PiTooltip, PiTypography$1 as PiTypography, PiUploader };
//# sourceMappingURL=index.modern.js.map
