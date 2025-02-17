function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var AtlasTextfield = _interopDefault(require('@atlaskit/textfield'));
var css = require('@emotion/css');
var AtlasButton = require('@atlaskit/button');
var AtlasButton__default = _interopDefault(AtlasButton);
var styled = _interopDefault(require('@emotion/styled'));
var Tooltip = require('@atlaskit/tooltip');
var Tooltip__default = _interopDefault(Tooltip);
var datetimePicker = require('@atlaskit/datetime-picker');
var AtlasTextArea = _interopDefault(require('@atlaskit/textarea'));
var AtlasSpinner = _interopDefault(require('@atlaskit/spinner'));
var Select = require('@atlaskit/select');
var Select__default = _interopDefault(Select);
var radio = require('@atlaskit/radio');
var checkbox = require('@atlaskit/checkbox');
var AtlasAvatar = _interopDefault(require('@atlaskit/avatar'));
var Breadcrumbs = require('@atlaskit/breadcrumbs');
var Breadcrumbs__default = _interopDefault(Breadcrumbs);
var Pagination = _interopDefault(require('@atlaskit/pagination'));
var Toggle = _interopDefault(require('@atlaskit/toggle'));
var AtlasBanner = _interopDefault(require('@atlaskit/banner'));
var ErrorIcon = _interopDefault(require('@atlaskit/icon/glyph/error'));
var WarningIcon = _interopDefault(require('@atlaskit/icon/glyph/warning'));
var AtlasLozenge = _interopDefault(require('@atlaskit/lozenge'));
var progressIndicator = require('@atlaskit/progress-indicator');
var SuccessIcon = _interopDefault(require('@atlaskit/icon/glyph/check-circle'));
var InfoIcon = _interopDefault(require('@atlaskit/icon/glyph/info'));
var colors = require('@atlaskit/theme/colors');
var tokens = require('@atlaskit/tokens');
var Flag = _interopDefault(require('@atlaskit/flag'));
var SectionMessage = _interopDefault(require('@atlaskit/section-message'));
var PageHeader = _interopDefault(require('@atlaskit/page-header'));
var DropdownMenu = require('@atlaskit/dropdown-menu');
var DropdownMenu__default = _interopDefault(DropdownMenu);
var reactRouterDom = require('react-router-dom');
var Tabs = require('@atlaskit/tabs');
var Tabs__default = _interopDefault(Tabs);
var Modal = require('@atlaskit/modal-dialog');
var Modal__default = _interopDefault(Modal);
var agGridReact = require('ag-grid-react');
require('ag-grid-enterprise');
require('ag-grid-community/dist/styles/ag-grid.css');
require('ag-grid-community/dist/styles/ag-theme-alpine.css');
var useCopy = _interopDefault(require('use-copy'));
var ReactQuill = _interopDefault(require('react-quill'));
require('react-quill/dist/quill.snow.css');
var reactAccessibleAccordion = require('react-accessible-accordion');
require('react-accessible-accordion/dist/fancy-example.css');
var Drawer = _interopDefault(require('@atlaskit/drawer'));
var formik = require('formik');
var moment = _interopDefault(require('moment'));
var Dropzone = _interopDefault(require('react-dropzone'));
var DatePicker = _interopDefault(require('react-datepicker'));
require('react-datepicker/dist/react-datepicker.css');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var ATALASLIT_LIBRARY = 'atalskit';
var BaseProps = function BaseProps() {
  this.libraryType = 'atalskit';
};

var ThemeContextType = function ThemeContextType() {
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
};
var PiThemeContext = React__default.createContext(new ThemeContextType());
var PiThemeContextProvider = PiThemeContext.Provider;

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
var CommonFont = function CommonFont(props) {
  return css.css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-family: 'Inter', sans-serif;\n  font-style: normal;\n  color: ", ";\n"])), props.textColor);
};
var PiTextH1 = function PiTextH1(props) {
  return css.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 48px;\n"])), CommonFont(props));
};
var PiTextH2 = function PiTextH2(props) {
  return css.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 40px;\n"])), CommonFont(props));
};
var PiTextH3 = function PiTextH3(props) {
  return css.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 36px;\n"])), CommonFont(props));
};
var PiTextH4 = function PiTextH4(props) {
  return css.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n"])), CommonFont(props));
};
var PiTextH5 = function PiTextH5(props) {
  return css.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 24px;\n"])), CommonFont(props));
};
var PiTextH6 = function PiTextH6(props) {
  return css.css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n"])), CommonFont(props));
};
var PiTextP = function PiTextP(props) {
  return css.css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n"])), CommonFont(props));
};
var PiTextPBold = function PiTextPBold(props) {
  return css.css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n"])), CommonFont(props));
};
var PiTextTH = function PiTextTH(props) {
  return css.css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n"])), CommonFont(props));
};
var PiTextS = function PiTextS(props) {
  return css.css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-size: 12px;\n  line-height: 16px;\n"])), CommonFont(props));
};
var PiTextXS = function PiTextXS(props) {
  return css.css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: 600;\n  font-size: 8px;\n  line-height: 14px;\n"])), CommonFont(props));
};
var PiTextCaption = function PiTextCaption(props) {
  return css.css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n"])), CommonFont(props));
};
var PiTextLabel = function PiTextLabel(props) {
  return css.css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 4px;\n"])), CommonFont(props));
};
var PiTextDefault = function PiTextDefault(props) {
  return css.css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n"])), CommonFont(props));
};
var PiTextSuccess = function PiTextSuccess(props) {
  return css.css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n"])), CommonFont(props), props.success);
};
var PiTextError = function PiTextError(props) {
  return css.css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n"])), CommonFont(props), props.error);
};
var PiTextWarning = function PiTextWarning(props) {
  return css.css(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  ", ";\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n"])), CommonFont(props), props.warning);
};

function PiTypography(props) {
  var template = generateTag(props.component || 'default');
  return React__default.createElement(template.tag, {
    className: template["class"]
  }, "" + props.children);
}
function generateTag(component) {
  var theme = React.useContext(PiThemeContext);
  var defaultTags = {
    h1: {
      tag: 'h1',
      "class": PiTextH1(theme)
    },
    h2: {
      tag: 'h2',
      "class": PiTextH2(theme)
    },
    h3: {
      tag: 'h3',
      "class": PiTextH3(theme)
    },
    h4: {
      tag: 'h4',
      "class": PiTextH4(theme)
    },
    h5: {
      tag: 'h5',
      "class": PiTextH5(theme)
    },
    h6: {
      tag: 'h6',
      "class": PiTextH6(theme)
    },
    p: {
      tag: 'p',
      "class": PiTextP(theme)
    },
    pbold: {
      tag: 'p',
      "class": PiTextPBold(theme)
    },
    th: {
      tag: 'p',
      "class": PiTextTH(theme)
    },
    small: {
      tag: 'small',
      "class": PiTextS(theme)
    },
    xs: {
      tag: 'small',
      "class": PiTextXS(theme)
    },
    caption: {
      tag: 'small',
      "class": PiTextCaption(theme)
    },
    label: {
      tag: 'label',
      "class": PiTextLabel(theme)
    },
    success: {
      tag: 'label',
      "class": PiTextSuccess(theme)
    },
    error: {
      tag: 'label',
      "class": PiTextError(theme)
    },
    warning: {
      tag: 'label',
      "class": PiTextWarning(theme)
    },
    "default": {
      tag: 'span',
      "class": PiTextDefault(theme)
    }
  };
  return defaultTags[component];
}
var PiTypography$1 = React__default.memo(PiTypography);

var _templateObject$1;
var PiInputClass = function PiInputClass(props) {
  return css.css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  text-align: left;\n  .select-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    > .save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  div {\n    border-style: none;\n    background-color: #fff;\n  }\n  div:hover {\n    background-color: ", ";\n  }\n  input {\n    margin: 4px 0 4px 0;\n    padding: 8px 6px !important;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    border: 0.125rem solid ", ";\n    border-radius: 4px;\n    height: 36px !important;\n    background-color: ", ";\n    &:hover {\n      background-color: #fff;\n      border: 0.125rem solid ", ";\n    }\n    &:focus {\n      background-color: ", ";\n      border: 0.125rem solid ", ";\n    }\n  }\n  .form-error-msg {\n    color: #f60a31;\n    font-size: 12px;\n  }\n  /*.error > input {\n    border: 0.125rem solid ", ";\n  }\n\n  .success > input {\n    border: 0.125rem solid ", ";\n  }*/\n"])), props.white, props.inputHoverBorder, props.fieldBgColor, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);
};

function PiTickIcon(_ref) {
  var _onClick = _ref.onClick;
  return React__default.createElement("svg", {
    width: '30',
    height: '30',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: function onClick() {
      return _onClick(true);
    }
  }, React__default.createElement("rect", {
    width: '20',
    height: '20',
    rx: '4',
    fill: 'none'
  }), React__default.createElement("path", {
    d: 'M5 10.2222L8.33333 13.3333L15 6.66666',
    stroke: '#1976D2',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}

function PiUndoIcon(_ref) {
  var _onClick = _ref.onClick;
  return React__default.createElement("svg", {
    width: '30',
    height: '30',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: function onClick() {
      return _onClick(true);
    }
  }, React__default.createElement("g", {
    clipPath: 'url(#clip0_23674_571046)'
  }, React__default.createElement("rect", {
    width: '20',
    height: '20',
    rx: '4',
    fill: 'none'
  }), React__default.createElement("path", {
    d: 'M14.7782 5.22943C14.4824 4.93364 14.0045 4.93364 13.7088 5.22943L10 8.9306L6.29124 5.22184C5.99545 4.92605 5.51763 4.92605 5.22184 5.22184C4.92605 5.51763 4.92605 5.99545 5.22184 6.29124L8.9306 10L5.22184 13.7088C4.92605 14.0045 4.92605 14.4824 5.22184 14.7782C5.51763 15.0739 5.99545 15.0739 6.29124 14.7782L10 11.0694L13.7088 14.7782C14.0045 15.0739 14.4824 15.0739 14.7782 14.7782C15.0739 14.4824 15.0739 14.0045 14.7782 13.7088L11.0694 10L14.7782 6.29124C15.0664 6.00303 15.0664 5.51763 14.7782 5.22943Z',
    fill: '#B6C1D6'
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: 'clip0_23674_571046'
  }, React__default.createElement("rect", {
    width: '20',
    height: '20',
    rx: '4',
    fill: 'white'
  }))));
}

var _excluded = ["libraryType"],
  _excluded2 = ["label", "helpText", "isMandatory"];
function generateInputTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props);
  } else {
    return DefaultTemplate(props);
  }
}
function AtlasKitTemplate(_ref2) {
  var label = _ref2.label,
    helpText = _ref2.helpText,
    isMandatory = _ref2.isMandatory,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var theme = React.useContext(PiThemeContext);
  console.log(isMandatory);
  return React__default.createElement("div", {
    className: PiInputClass(theme)
  }, React__default.createElement("div", {
    className: 'select-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(React.Fragment, null, React__default.createElement(AtlasTextfield, Object.assign({}, props, {
    onClick: function onClick(e) {
      if (props.type === 'string') {
        var input = e.target;
        var end = e.target.value.length;
        input.setSelectionRange(end, end);
        input.focus();
      }
    }
  })), helpText && React__default.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate(props) {
  var defaultProps = generateDefaultProps(props);
  return React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, defaultProps.label), React__default.createElement("input", Object.assign({}, defaultProps)), React__default.createElement("span", {
    className: 'form-error-msg'
  }, defaultProps.helperText));
}
function generateDefaultProps(props) {
  var defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  };
  return defaultProps;
}

var PiInputProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiInputProps, _BaseProps);
  function PiInputProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'inputField';
    _this.appearance = 'standard';
    _this.type = 'text';
    return _this;
  }
  return PiInputProps;
}(BaseProps);
function PiInput(props) {
  var newprops = new PiInputProps();
  return generateInputTemplate(_extends({}, newprops, props));
}

var _templateObject$2;
var PiInputClass$1 = function PiInputClass(props) {
  return css.css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  text-align: left;\n  div {\n    border-style: none;\n    background-color: none;\n  }\n  div:hover {\n    background-color: ", ";\n  }\n  input {\n    margin: 4px 0 8px 0;\n    padding: 11px 12px 11px 14px !important;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    border: 0.125rem solid ", ";\n    border-radius: 4px;\n    height:36px !important;\n    &:hover {\n      background-color: ", ";\n      border: 0.125rem solid ", ";\n    }\n    &:focus {\n      background-color: ", ";\n      border: 0.125rem solid ", ";\n    }\n  }\n  .error > input {\n    border: 0.125rem solid ", ";\n  }\n\n  .success > input {\n    border: 0.125rem solid ", ";\n  }\n"])), props.white, props.inputHoverBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);
};

var _excluded$1 = ["libraryType"],
  _excluded2$1 = ["label", "helpText"];
function generateInputTemplate$1(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$1(props);
  } else {
    return DefaultTemplate$1(props);
  }
}
function AtlasKitTemplate$1(_ref2) {
  var label = _ref2.label,
    helpText = _ref2.helpText,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiInputClass$1(theme)
  }, label && React__default.createElement(PiTypography$1, {
    component: "label"
  }, label), React__default.createElement(React.Fragment, null, React__default.createElement(AtlasTextfield, Object.assign({}, props)), helpText && React__default.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$1(props) {
  var defaultProps = generateDefaultProps$1(props);
  return React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, defaultProps.label), React__default.createElement("input", Object.assign({}, defaultProps)), React__default.createElement("span", null, defaultProps.helperText));
}
function generateDefaultProps$1(props) {
  var defaultProps = {
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

var PiInputProps2 = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiInputProps2, _BaseProps);
  function PiInputProps2() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'inputField';
    _this.appearance = 'standard';
    _this.type = 'text';
    return _this;
  }
  return PiInputProps2;
}(BaseProps);
function PiInput2(props) {
  var newprops = new PiInputProps2();
  return generateInputTemplate$1(_extends({}, newprops, props));
}

var _templateObject$3, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1;
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
var xsFont = function xsFont() {
  return css.css(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  padding: 4px 12px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  height: 28px;\n"])));
};
var smallFont = function smallFont() {
  return css.css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  padding: 6px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  height: 32px;\n"])));
};
var mediumFont = function mediumFont() {
  return css.css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  padding: 10px 16px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  height: 40px;\n"])));
};
var largeFont = function largeFont() {
  return css.css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  padding: 12px 24px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  height: 48px;\n"])));
};
var PiButtonPrimaryClass = function PiButtonPrimaryClass(props, size) {
  return css.css(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n  background: ", " !important;\n  min-width: 120px;\n  border-radius: 6px !important;\n  font-family: Inter;\n  font-style: normal;\n  display: flex;\n  align-items: center !important;\n  text-align: center;\n  /*line-height: unset !important;*/\n  /*padding: unset !important;*/\n  height: 40px !important;\n  ", "\n  color: ", " !important;\n  span {\n    color: ", " !important;\n    flex-grow: unset;\n    font-family: Inter;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    padding-right: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-left: 0px !important;\n  }\n\n  &:hover {\n    background: ", " !important;\n    color: ", " !important;\n  }\n  &:focus {\n    background: #1d60cc !important;\n    box-shadow: none;\n    transition-duration: none;\n  }\n  &:disabled {\n    background: ", " !important;\n    color: ", " !important;\n  }\n  &:visited {\n    background: ", "!important;\n  }\n  &:active {\n    background: #bbdefb !important;\n  }\n\n  svg {\n    stroke: ", ";\n  }\n  span {\n    color: ", " !important;\n    &:disabled {\n      color: ", " !important;\n    }\n  }\n"])), props.primaryBG, getSizeStyles(size), props.white, props.white, props.primaryHoverBG, props.white, props.primaryBtnDisabledBG, props.primaryColor, props.primaryVisitedBG, props.infoBGColor, props.white, props.primaryColor);
};
var PiButtonSecondaryClass = function PiButtonSecondaryClass(props, size) {
  return css.css(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose(["\n  background: ", " !important;\n  min-width: 120px;\n  border-radius: 6px !important;\n  border: 2px solid #d0daec !important;\n  font-family: Inter;\n  font-style: normal;\n  display: flex;\n  align-items: center !important;\n  text-align: center;\n  /*line-height: unset !important;*/\n  height: 40px !important;\n  /*padding: unset !important;*/\n  ", "\n  color: ", " !important;\n  span {\n    color: ", " !important;\n    flex-grow: unset;\n    font-family: Inter;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    padding-right: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-left: 0px !important;\n  }\n\n  &:hover {\n    background: ", " !important;\n    color: ", " !important;\n  }\n\n  &:focus {\n    background: #e3f2fd !important;\n    box-shadow: none;\n    transition-duration: none;\n  }\n\n  &:disabled {\n    background: ", " !important;\n    color: ", " !important;\n    span {\n      color: #8598b7 !important;\n    }\n  }\n  &:visited {\n    background: ", " !important;\n  }\n\n  /*&:active {\n    background: ", " !important;\n  }*/\n  .css-7no60z-ButtonBase {\n    color: ", " !important;\n  }\n"])), props.white, getSizeStyles(size), props.primaryBG, props.primaryBG, props.infoBGColor, props.primaryBG, props.primaryDisabledBG, props.primaryBG, props.secondaryVisited, props.secondaryActiveBg, props.primaryBG);
};
var PiButtonLinkClass = function PiButtonLinkClass(props, size) {
  return css.css(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteralLoose(["\n  background: ", " !important;\n  font-family: Inter;\n  font-style: normal;\n  display: flex;\n  align-items: center;\n  line-height: 20px !important;\n  text-align: left !important;\n  padding: 0px !important;\n  ", "\n  color: ", " !important;\n  white-space: pre-wrap;\n  span {\n    white-space: normal;\n    flex-grow: unset;\n    color: ", " !important;\n  }\n  &:hover {\n    background: ", ";\n    span {\n      color: ", " !important;\n      text-decoration: underline;\n    }\n  }\n\n  &:focus {\n    color: ", " !important;\n  }\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:active {\n    color: #bbdefb;\n  }\n\n  &:disabled {\n    color: ", " !important;\n  }\n"])), props.white, getSizeStyles(size), props.primaryBG, props.primaryBG, props.white, props.primaryHoverBG, props.primaryActiveBG, props.primaryVisitedBG, props.primaryBG);
};

var _excluded$2 = ["libraryType"],
  _excluded2$2 = ["label", "isLoading", "appearance", "size", "className"],
  _excluded3 = ["label"];
function generateButtonTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$2(props);
  } else {
    return DefaultTemplate$2(props);
  }
}
function AtlasKitTemplate$2(_ref2) {
  var label = _ref2.label,
    isLoading = _ref2.isLoading,
    appearance = _ref2.appearance,
    size = _ref2.size,
    className = _ref2.className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);
  var theme = React.useContext(PiThemeContext);
  var piClass = {
    link: PiButtonLinkClass,
    primary: PiButtonPrimaryClass,
    secondary: PiButtonSecondaryClass
  };
  var clsName = piClass[appearance];
  return props && isLoading ? React__default.createElement(AtlasButton.LoadingButton, Object.assign({}, props, {
    isLoading: true,
    className: css.cx(className, clsName ? clsName(theme, size) : '')
  }), label) : React__default.createElement(AtlasButton__default, Object.assign({}, props, {
    className: css.cx(className, clsName ? clsName(theme, size) : '')
  }), label);
}
function DefaultTemplate$2(_ref3) {
  var label = _ref3.label,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded3);
  var defaultProps = generateDefaultProps$2(_extends({
    label: label
  }, props));
  return React__default.createElement("button", Object.assign({}, defaultProps), label);
}
function generateDefaultProps$2(props) {
  var defaultProps = {
    onClick: props.onClick,
    disabled: props.isDisabled,
    type: props.type
  };
  return defaultProps;
}

var PiButtonProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiButtonProps, _BaseProps);
  function PiButtonProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.appearance = 'primary';
    _this.label = '';
    _this.size = 'small';
    _this.type = 'button';
    return _this;
  }
  return PiButtonProps;
}(BaseProps);
function PiButton(props) {
  var newprops = new PiButtonProps();
  return generateButtonTemplate(_extends({}, newprops, props));
}

var _templateObject$4;
var _excluded$3 = ["libraryType"],
  _excluded2$3 = ["children"];
function generateTooltipTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$3(props);
  } else {
    return defaultTemplate(props);
  }
}
var InlineDialog = styled(Tooltip.TooltipPrimitive)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  background: #f8f8f8;\n  border-radius: 4px;\n  border: 1px solid #bbbfc6;\n  padding: 0px 6px;\n  color: #2e374a;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  font-family: 'Inter';\n  font-weight: 500;\n  max-width: 500px;\n"])));
function AtlasKitTemplate$3(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$3);
  return React__default.createElement(Tooltip__default, Object.assign({
    component: InlineDialog
  }, props), children);
}
function defaultTemplate(props) {
  return React__default.createElement(React.Fragment, null, props.children);
}

var PiTooltipProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiTooltipProps, _BaseProps);
  function PiTooltipProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.content = '';
    return _this;
  }
  return PiTooltipProps;
}(BaseProps);
function PiTooltip(props) {
  var newprops = new PiTooltipProps();
  return generateTooltipTemplate(_extends({}, newprops, props));
}

var _templateObject$5;
var PiTimePickerClass = function PiTimePickerClass(props) {
  return css.css(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .css-1a7rm5r-control {\n    background-color: ", ";\n    border: 2px solid ", ";\n    margin: 4px 0px 8px 0px;\n    font-size: 14px;\n    height:48px;\n    border-radius:4px;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    &:focus {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n  .css-qyxenl-control {\n    height:48px;\n    border-radius:4px;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    margin: 4px 0px 8px 0px;\n    background: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n  }\n\n  .css-5ww0s7 .css-1a7rm5r-control {\n    font-size: 14px;\n  }\n  .css-12fvnfc-option {\n    box-shadow: none;\n    background-color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-j6sl50-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-8acq3y-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-otwtzu-option{\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-otwtzu-option:active {\n    background-color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-12fvnfc-option:active {\n    background-color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  \n"])), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);
};

var _excluded$4 = ["libraryType"],
  _excluded2$4 = ["label", "name", "helpText"];
function generateTimePickerTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$4(props);
  } else {
    return DefaultTemplate$3(props);
  }
}
function AtlasKitTemplate$4(_ref2) {
  var label = _ref2.label,
    helpText = _ref2.helpText,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$4);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiTimePickerClass(theme)
  }, label && React__default.createElement(PiTypography$1, null, label), React__default.createElement(React.Fragment, null, React__default.createElement(datetimePicker.TimePicker, Object.assign({}, props)), helpText && React__default.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$3(props) {
  var defaultProps = generateDeafultProps(props);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("input", Object.assign({
    type: 'time'
  }, defaultProps)), props.helpText && React__default.createElement("span", null, props.helpText)));
}
function generateDeafultProps(props) {
  var defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    format: "" + props.timeFormat
  };
  return defaultProps;
}

var PiTimePickerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiTimePickerProps, _BaseProps);
  function PiTimePickerProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'TimeField';
    _this.appearance = 'standard';
    _this.timeFormat = 'HH:MM A';
    return _this;
  }
  return PiTimePickerProps;
}(BaseProps);
function PiTimePicker(props) {
  var newprops = new PiTimePickerProps();
  return generateTimePickerTemplate(_extends({}, newprops, props));
}

var _templateObject$6;
var PiTextAreaClass = function PiTextAreaClass(props) {
  return css.css(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  text-align: left;\n  .select-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    div.save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  div {\n    border-style: none;\n  }\n  textarea {\n    margin: 4px 0 8px 0;\n    align-items: flex-start;\n    padding: 14px 14px 8px;\n    background: ", " !important;\n    border: 2px solid ", " !important;\n    box-sizing: border-box;\n    border-radius: 4px;\n    &:hover {\n      background: ", " !important;\n      border: 2px solid ", " !important;\n    }\n    &:focus {\n      background: ", " !important;\n      border: 2px solid ", " !important;\n    }\n  }\n  .form-error-msg {\n    color: #f60a31;\n    font-size: 12px;\n  }\n  /*.error > textarea {\n    border: 2px solid ", " !important;\n  }\n\n  .success > textarea {\n    border: 2px solid ", " !important;\n  }*/\n"])), props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);
};

var _excluded$5 = ["libraryType"],
  _excluded2$5 = ["label", "helpText", "isMandatory"];
function generateTextAreaTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$5(props);
  } else {
    return normalTextArea(props);
  }
}
function AtlasKitTemplate$5(_ref2) {
  var label = _ref2.label,
    helpText = _ref2.helpText,
    isMandatory = _ref2.isMandatory,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$5);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiTextAreaClass(theme)
  }, React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: 'select-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(AtlasTextArea, Object.assign({}, props)), helpText && React__default.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function normalTextArea(props) {
  var defaultProps = generateDefaultProps$3(props);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("textarea", Object.assign({}, defaultProps)), props.helpText && React__default.createElement("span", null, props.helpText)));
}
function generateDefaultProps$3(props) {
  var defaultProps = {
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

var PiTextAreaProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiTextAreaProps, _BaseProps);
  function PiTextAreaProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'textAreaField';
    _this.appearance = 'standard';
    _this.minimumRows = 3;
    return _this;
  }
  return PiTextAreaProps;
}(BaseProps);
function PiTextArea(props) {
  var newprops = new PiTextAreaProps();
  return generateTextAreaTemplate(_extends({}, newprops, props));
}

var _excluded$6 = ["libraryType"];
function generateSpinnerTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$6(props);
  } else {
    return defaultTemplate$1(props);
  }
}
function AtlasKitTemplate$6(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return React__default.createElement(AtlasSpinner, Object.assign({}, props));
}
function defaultTemplate$1(props) {
  return React__default.createElement("div", {
    style: {
      width: props.size
    }
  });
}

var PiSpinnerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiSpinnerProps, _BaseProps);
  function PiSpinnerProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.apperance = 'inherit';
    _this.color = 'inherit';
    return _this;
  }
  return PiSpinnerProps;
}(BaseProps);
function PiSpinner(props) {
  var newprops = new PiSpinnerProps();
  return generateSpinnerTemplate(_extends({}, newprops, props));
}

var _templateObject$7;
var PiSelectClass = function PiSelectClass(props) {
  return css.css(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .select-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    div.save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  div[class$='-menu'] {\n    margin: 3px !important;\n    div[class$='-MenuList'] {\n      padding: 0px !important;\n    }\n  }\n  /*.pi-select-wrapper {\n    div {\n      .css-1bx7l6n-control {\n        border-radius: 4px;\n        margin: 4px 0 8px 0;\n        background-color: ", ";\n        border: 2px solid ", ";\n        font-size: 14px;\n        height: 36px !important;\n        line-height: 1;\n        &:hover {\n          background: ", ";\n          border-color: ", ";\n        }\n        &:focus {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n    }\n  }*/\n\n  /*}*/\n  /*.pi-select-wrapper > div > div {\n    border-radius: 4px;\n    margin: 4px 0 8px 0;\n    background-color: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    height: 36px !important;\n    line-height: 1;\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n  }*/\n\n  .react-select__control {\n    border-radius: 4px;\n    margin: 4px 0 8px 0;\n    background-color: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    height: 36px !important;\n    line-height: 1;\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n  }\n  .css-rij6sy-ValueContainer {\n    padding: 0 8px !important;\n  }\n  /*.css-qyxenl-control {\n    margin: 4px 0 8px 0;\n    height: 36px !important;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    font-size: 14px;\n    background: ", ";\n    border: 2px solid ", ";\n  }*/\n  .css-12fvnfc-option {\n    box-shadow: none;\n    background-color: ", ";\n  }\n  .css-j6sl50-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n  .css-8acq3y-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n  .css-otwtzu-option:active {\n    background-color: ", ";\n  }\n  .css-12fvnfc-option:active {\n    background-color: ", ";\n  }\n  .form-error-msg {\n    color: #f60a31;\n    font-size: 12px;\n  }\n"])), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);
};

var _excluded$7 = ["libraryType"],
  _excluded2$6 = ["helpText", "label", "isMandatory"];
function generateSelectTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$7(props);
  } else {
    return DefaultTemplate$4(props);
  }
}
function AtlasKitTemplate$7(_ref2) {
  var helpText = _ref2.helpText,
    label = _ref2.label,
    isMandatory = _ref2.isMandatory,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$6);
  var theme = React.useContext(PiThemeContext);
  console.log(props);
  return React__default.createElement("div", {
    className: PiSelectClass(theme)
  }, React__default.createElement("div", {
    className: 'pi-select-wrapper'
  }, React__default.createElement("div", {
    className: 'select-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(Select__default, Object.assign({
    classNamePrefix: props.classNamePrefix || 'react-select',
    noOptionsMessage: function noOptionsMessage() {
      return props.noOptionsMessage ? props.noOptionsMessage : "No " + label + " Found";
    }
  }, props)), helpText && React__default.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function DefaultTemplate$4(props) {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("select", null, props.options ? props.options.map(function (option) {
    return React__default.createElement("option", {
      value: option.value
    }, option.label);
  }) : null), props.helpText && React__default.createElement("span", null, props.helpText)));
}

var PiSelectProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiSelectProps, _BaseProps);
  function PiSelectProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'select';
    _this.options = [];
    _this.placeholder = 'Select...';
    return _this;
  }
  return PiSelectProps;
}(BaseProps);
function PiSelect(props) {
  var newprops = new PiSelectProps();
  return generateSelectTemplate(_extends({}, newprops, props));
}

var _templateObject$8;
var PiRadioClass = function PiRadioClass(props) {
  return css.css(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteralLoose(["\n  .css-1xhjk83-Radio {\n    background: ", " !important;\n    border: 0.125rem solid ", " !important;\n    &:hover {\n      background: ", " !important;\n      border: 0.125rem solid ", " !important;\n    }\n    &:checked {\n      background: ", " !important;\n      border: 0.125rem solid ", " !important;\n    }\n  }\n  .css-xrsww6-Radio {\n    padding: 2px 4px;\n    font-size: 14px;\n  }\n  .css-1xhjk83-Radio::after {\n    width: calc(6px * 12 / 7) !important;\n    height: calc(6px * 12 / 7) !important;\n  }\n"])), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.inputFocusBorder, props.inputFocusBorder);
};

var _excluded$8 = ["libraryType", "helpText", "label"];
function generateRadioGroupTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$8(props);
  } else {
    return defaultTemplate$2(props);
  }
}
function AtlasKitTemplate$8(_ref) {
  var helpText = _ref.helpText,
    label = _ref.label,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiRadioClass(theme)
  }, label && React__default.createElement(PiTypography$1, null, label), React__default.createElement(radio.RadioGroup, Object.assign({}, props)), helpText && React__default.createElement(PiTypography$1, null, helpText));
}
function defaultTemplate$2(props) {
  return React__default.createElement("div", null, props.options.map(function (option) {
    return React__default.createElement(React.Fragment, null, React__default.createElement("label", null, option.label), React__default.createElement("input", {
      type: 'radio',
      value: option.value,
      name: props.name
    }));
  }));
}

var PiRadioGroupProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiRadioGroupProps, _BaseProps);
  function PiRadioGroupProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'radioField';
    _this.options = [];
    return _this;
  }
  return PiRadioGroupProps;
}(BaseProps);
function PiRadioGroup(props) {
  var newProps = new PiRadioGroupProps();
  return generateRadioGroupTemplate(_extends({}, newProps, props));
}

var _templateObject$9;
var PiDateTimePickerClass = function PiDateTimePickerClass(props) {
  return css.css(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  /*.css-e1g8km {\n    background-color: ", ";\n    border: 2px solid ", ";\n    margin: 4px 0px 8px 0px;\n    font-size: 14px;\n    border-radius: 4px;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    &:focus {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }*/\n  /*.pi-date-time-picker {*/\n  & > div {\n    border: 2px solid ", ";\n    margin: 4px 0px 8px 0px;\n    font-size: 14px;\n    border-radius: 4px;\n    height: 36px;\n    align-items: center;\n    background-color: ", ";\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    &:focus {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n  /*}*/\n\n  .date-time-picker-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0;\n    > .save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n      label {\n        color: #4e586d;\n      }\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  .css-18vb16q {\n    margin: 4px 0px 8px 0px;\n    background: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    border-radius: 4px;\n  }\n  .css-mqv3ay-Date[data-focused] {\n    border: 1px solid #134c85;\n    background-color: #134c85;\n    color: #fff;\n  }\n  .css-mqv3ay-Date[data-today] {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  .css-mqv3ay-Date[data-today]::after {\n    display: none;\n  }\n  .css-mqv3ay-Date[data-prev-selected] {\n    background-color: #fff;\n  }\n  .css-mqv3ay-Date[data-selected] {\n    background-color: #134c85;\n    color: #fff;\n    border: 1px solid #134c85;\n  }\n  .css-12fvnfc-option {\n    box-shadow: none;\n    background-color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-j6sl50-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-8acq3y-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-otwtzu-option:active {\n    background-color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-12fvnfc-option:active {\n    background-color: ", ";\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .css-1k3jsfu-control {\n    min-height: 48px;\n  }\n  .css-v77w53-control {\n    min-height: 48px;\n  }\n  .css-otwtzu-option {\n    height: 48px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n"])), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryColor, props.fieldBgColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBG, props.primaryBG, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);
};

var _excluded$9 = ["label", "name", "libraryType", "helpText"];
function generateDateTimePickerTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$9(props);
  } else {
    return DefaultTemplate$5(props);
  }
}
function AtlasKitTemplate$9(_ref) {
  var label = _ref.label,
    helpText = _ref.helpText,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiDateTimePickerClass(theme) + " pi-date-time-picker"
  }, React__default.createElement("p", {
    className: 'date-time-picker-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), props.isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(React.Fragment, null, React__default.createElement(datetimePicker.DateTimePicker, Object.assign({}, props)), helpText && React__default.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$5(props) {
  var defaultProps = generateDeafultProps$1(props);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("input", Object.assign({
    type: 'datetime-local'
  }, defaultProps)), props.helpText && React__default.createElement("span", null, props.helpText)));
}
function generateDeafultProps$1(props) {
  var defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: props.dateFormat + "+" + props.timeFormat
  };
  return defaultProps;
}

var PiDateTimePickerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiDateTimePickerProps, _BaseProps);
  function PiDateTimePickerProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'dateTimeField';
    _this.appearance = 'standard';
    _this.dateFormat = 'MM/DD/YYYY';
    _this.timeFormat = 'HH:MM A';
    return _this;
  }
  return PiDateTimePickerProps;
}(BaseProps);
function PiDateTimePicker(props) {
  var newprops = new PiDateTimePickerProps();
  return generateDateTimePickerTemplate(_extends({}, newprops, props));
}

var _templateObject$a;
var PiDatePickerClass = function PiDatePickerClass(props) {
  return css.css(_templateObject$a || (_templateObject$a = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .picker-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    > .save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  div[role='presentation'] {\n    margin-top: 6px;\n  }\n  .css-1a7rm5r-control {\n    background-color: ", ";\n    border: 2px solid ", ";\n    margin: 4px 0px 8px 0px;\n    font-size: 14px;\n    height: 48px;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    &:focus {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n  .css-qyxenl-control {\n    height: 48px;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    margin: 4px 0px 8px 0px;\n    background: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n  }\n  .css-60ak9x-Icon > svg {\n    color: #758ca3;\n  }\n  .css-mqv3ay-Date[data-focused] {\n    border: 1px solid #134c85;\n    background-color: #134c85;\n    color: #fff;\n  }\n  .css-mqv3ay-Date[data-today] {\n    background-color: ", ";\n    border: 2px solid ", ";\n    color: ", ";\n  }\n  .css-mqv3ay-Date[data-today]::after {\n    display: none;\n  }\n  .css-mqv3ay-Date[data-prev-selected] {\n    background-color: #fff;\n  }\n  .css-mqv3ay-Date[data-selected] {\n    background-color: #134c85;\n    color: #fff;\n    border: 1px solid #134c85;\n  }\n  .css-5ww0s7 .css-1a7rm5r-control {\n    font-size: 14px;\n  }\n"])), props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBG, props.primaryBG);
};

var _excluded$a = ["label", "libraryType", "isMandatory", "helpText"];
function generateDatePickerTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$a(props);
  } else {
    return DefaultTemplate$6(props);
  }
}
function AtlasKitTemplate$a(_ref) {
  var label = _ref.label,
    isMandatory = _ref.isMandatory,
    helpText = _ref.helpText,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiDatePickerClass(theme)
  }, React__default.createElement("div", {
    className: 'picker-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(React.Fragment, null, React__default.createElement(datetimePicker.DatePicker, Object.assign({}, props, {
    name: 'dob'
  })), helpText && React__default.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$6(props) {
  var defaultProps = generateDefaultProps$4(props);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("input", Object.assign({
    type: 'date'
  }, defaultProps)), props.helpText && React__default.createElement("span", null, props.helpText)));
}
function generateDefaultProps$4(props) {
  var defaultProps = {
    disabled: props.isDisabled,
    helperText: props.helpText,
    placeholder: props.placeholder,
    min: props.minDate,
    max: props.maxDate,
    format: "" + props.dateFormat
  };
  return defaultProps;
}

var PiDatePickerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiDatePickerProps, _BaseProps);
  function PiDatePickerProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'dateField';
    _this.appearance = 'standard';
    _this.dateFormat = 'MM/DD/YYYY';
    return _this;
  }
  return PiDatePickerProps;
}(BaseProps);
function PiDatePicker(props) {
  var newProps = new PiDatePickerProps();
  return generateDatePickerTemplate(_extends({}, newProps, props));
}

var _templateObject$b;
var PiCheckboxClass = function PiCheckboxClass(props) {
  return css.css(_templateObject$b || (_templateObject$b = _taggedTemplateLiteralLoose(["\n  .css-hk3wth-Checkbox:checked + svg {\n    --checkbox-background-color: ", ";\n    --checkbox-border-color: ", ";\n    --checkbox-tick-color: ", ";\n  }\n  .css-163zesm-LabelText {\n    font-size: 14px;\n  }\n \n"])), props.primaryBG, props.primaryBG, props.white);
};

var _excluded$b = ["libraryType", "helpText"];
function generateCheckboxTemplate(props) {
  if (props.libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$b(props);
  } else {
    return DefaultTemplate$7(props);
  }
}
function AtlasKitTemplate$b(_ref) {
  var helpText = _ref.helpText,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiCheckboxClass(theme)
  }, React__default.createElement(checkbox.Checkbox, Object.assign({}, props)), helpText && React__default.createElement(PiTypography$1, null, helpText));
}
function DefaultTemplate$7(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var defaultProps = generateDefaultProps$5(_extends({}, props));
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", null, React__default.createElement("input", Object.assign({
    type: 'checkbox'
  }, defaultProps)), React__default.createElement("label", null, props.label)), props.helpText && React__default.createElement("span", null, props.helpText));
}
function generateDefaultProps$5(props) {
  var defaultProps = {
    checked: props.isChecked,
    disabled: props.isDisabled,
    value: props.value,
    label: props.label,
    onChange: props.onChange,
    name: props.name
  };
  return defaultProps;
}

var PiCheckboxProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiCheckboxProps, _BaseProps);
  function PiCheckboxProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'radioField';
    _this.size = 'small';
    return _this;
  }
  return PiCheckboxProps;
}(BaseProps);
function PiCheckbox(props) {
  var newprops = new PiCheckboxProps();
  return generateCheckboxTemplate(_extends({}, newprops, props));
}

var _templateObject$c;
var PiAvatarClass = function PiAvatarClass(props) {
  return css.css(_templateObject$c || (_templateObject$c = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .css-1l72gtu-AvatarImage {\n    background-color: ", ";\n  }\n  .css-ed4mf:hover::after {\n    background-color: transparent !important;\n  }\n  .css-ed4mf:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .css-3pkws3:hover::after {\n    background-color: transparent !important;\n  }\n  .css-3pkws3:focus {\n    outline: none;\n    box-shadow: none;\n  }\n"])), props.avatarBg);
};

var _excluded$c = ["libraryType"];
function generateAvatarTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$c(props);
  } else {
    return defaultTemplate$3(props);
  }
}
function AtlasKitTemplate$c(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiAvatarClass(theme)
  }, React__default.createElement(AtlasAvatar, Object.assign({}, props)));
}
function defaultTemplate$3(props) {
  return React__default.createElement("div", {
    style: {
      width: props.size
    }
  });
}

var PiAvatarProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiAvatarProps, _BaseProps);
  function PiAvatarProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.appearance = 'circle';
    return _this;
  }
  return PiAvatarProps;
}(BaseProps);
function PiAvatar(props) {
  var newprops = new PiAvatarProps();
  return generateAvatarTemplate(_extends({}, newprops, props));
}

var _templateObject$d;
var PiBreadCrumbClass = function PiBreadCrumbClass(props) {
  return css.css(_templateObject$d || (_templateObject$d = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .css-1isvw35-ButtonBase {\n    color: ", ";\n  }\n  .css-1isvw35-ButtonBase:hover {\n    text-decoration: none;\n    color: #2196f3 !important;\n  }\n  .css-1isvw35-ButtonBase:active {\n    background: none;\n    color: #1976D2 !important;\n}\n"])), props.breadCrumbColor);
};

var _excluded$d = ["libraryType"];
function generateBreadCrumbTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$d(props);
  } else {
    return defaultTemplate$4();
  }
}
function AtlasKitTemplate$d(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiBreadCrumbClass(theme)
  }, React__default.createElement(Breadcrumbs__default, Object.assign({}, props), props.items.map(function (item, index) {
    return React__default.createElement(Breadcrumbs.BreadcrumbsItem, {
      href: item.href,
      text: item.label,
      key: index
    });
  })));
}
function defaultTemplate$4() {
  return React__default.createElement("div", null);
}

var PiBreadCrumbProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiBreadCrumbProps, _BaseProps);
  function PiBreadCrumbProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.text = '';
    return _this;
  }
  return PiBreadCrumbProps;
}(BaseProps);
function PiBreadCrumb(props) {
  var newprops = new PiBreadCrumbProps();
  return generateBreadCrumbTemplate(_extends({}, newprops, props));
}

var _templateObject$e, _templateObject2$2, _templateObject3$2, _templateObject4$2;
var PiTagInfoClass = function PiTagInfoClass(props) {
  return css.css(_templateObject$e || (_templateObject$e = _taggedTemplateLiteralLoose(["\npadding: 0.5rem;\ndisplay: inline-flex;\nborder-radius: 15px;\nbackground: ", ";\nspan{\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n    color: ", "\n    }\n}\n"])), props.infoBGColor, props.infoColor);
};
var PiTagWarningClass = function PiTagWarningClass(props) {
  return css.css(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\npadding: 0.5rem;\ndisplay: inline-flex;\nborder-radius: 15px;\nbackground: #FFE8C3;\nspan{\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n    color: ", "\n    }\n}\n"])), props.warningColor);
};
var PiTagSuccessClass = function PiTagSuccessClass(props) {
  return css.css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\npadding: 0.5rem;\ndisplay: inline-flex;\nborder-radius: 15px;\nbackground: ", ";\nspan{\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n    color: ", "\n    }\n}\n"])), props.successBGColor, props.successColor);
};
var PiTagDangerClass = function PiTagDangerClass(props) {
  return css.css(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteralLoose(["\npadding: 0.5rem;\ndisplay: inline-flex;\nborder-radius: 15px;\nbackground: ", ";\nspan{\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n    color: ", "\n    }\n}\n"])), props.dangerBGColor, props.dangerColor);
};

var _excluded$e = ["libraryType"];
function generateTagTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$e(props);
  } else {
    return DefaultTemplate$8(props);
  }
}
function AtlasKitTemplate$e(props) {
  var theme = React.useContext(PiThemeContext);
  var tagClass = {
    info: PiTagInfoClass(theme),
    warning: PiTagWarningClass(theme),
    success: PiTagSuccessClass(theme),
    danger: PiTagDangerClass(theme)
  };
  return React__default.createElement("div", {
    className: tagClass[props.color]
  }, React__default.createElement("span", null, props.text));
}
function DefaultTemplate$8(props) {
  return React__default.createElement("div", null, props.text);
}

var PiTagProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiTagProps, _BaseProps);
  function PiTagProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.color = 'info';
    return _this;
  }
  return PiTagProps;
}(BaseProps);
function PiTag(props) {
  var newprops = new PiTagProps();
  return generateTagTemplate(_extends({}, newprops, props));
}

var _templateObject$f;
var PiPaginationClass = function PiPaginationClass(props) {
  return css.css(_templateObject$f || (_templateObject$f = _taggedTemplateLiteralLoose(["\n  /*.css-bzi093-ButtonBase:hover {\n    background-color: ", ";\n  }\n  .css-nhj80n-ButtonBase {\n    background-color: ", ";\n  }*/\n  nav button[data-testid^='paging--current-'] {\n    background-color: ", ";\n  }\n"])), props.primaryBG, props.primaryBG, props.primaryBG);
};

var _excluded$f = ["libraryType"],
  _excluded2$7 = ["pages", "onChange"];
function generatePaginationTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$f(props);
  } else {
    return DefaultTemplate$9(props);
  }
}
function AtlasKitTemplate$f(_ref2) {
  var pages = _ref2.pages,
    onChange = _ref2.onChange,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$7);
  var pagesList = getPages(pages);
  var theme = React.useContext(PiThemeContext);
  function handleChange(_, page) {
    if (onChange) {
      onChange(page);
    }
  }
  return React__default.createElement("div", {
    className: PiPaginationClass(theme) + " pipagination-wrapper"
  }, React__default.createElement(Pagination, Object.assign({
    pages: pagesList
  }, props, {
    onChange: handleChange
  })));
}
function DefaultTemplate$9(props) {
  var pages = getPages(props.pages);
  function handleChange(page) {
    if (props.onChange) {
      props.onChange(page);
    }
  }
  return React__default.createElement(React.Fragment, null, pages.map(function (page) {
    return React__default.createElement("div", {
      key: page,
      onClick: function onClick() {
        return handleChange(page);
      }
    }, page);
  }));
}
function getPages(page) {
  return Array(page).fill(0).map(function (_, i) {
    return i + 1;
  });
}

var PiPaginationProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiPaginationProps, _BaseProps);
  function PiPaginationProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.testId = 'paging';
    return _this;
  }
  return PiPaginationProps;
}(BaseProps);
function PiPagination(props) {
  var newprops = new PiPaginationProps();
  return generatePaginationTemplate(_extends({}, newprops, props));
}

var _templateObject$g;
var PiToggleClass = function PiToggleClass(props, direction) {
  return css.css(_templateObject$g || (_templateObject$g = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: ", ";\n  ", ";\n\n  label[data-size] {\n    &:hover {\n      background-color: ", " !important;\n    }\n    &:focus-within {\n      border: 2px solid ", ";\n    }\n  }\n\n  label[data-checked] {\n    &:hover {\n      background-color: ", " !important;\n    }\n  }\n"])), direction || 'row', direction === 'row' && "align-items: center", props.toggleBGColor, props.primaryBG, props.success);
};

var _excluded$g = ["libraryType"];
function generateToggleTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$g(props);
  } else {
    return DefaultTemplate$a(props);
  }
}
function AtlasKitTemplate$g(_ref2) {
  var onChange = _ref2.onChange,
    size = _ref2.size,
    isChecked = _ref2.isChecked,
    name = _ref2.name,
    isDisabled = _ref2.isDisabled,
    label = _ref2.label,
    helpText = _ref2.helpText,
    direction = _ref2.direction;
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiToggleClass(theme, direction)
  }, label && React__default.createElement(PiTypography$1, {
    component: "label"
  }, label), React__default.createElement(React.Fragment, null, React__default.createElement(Toggle, {
    size: size,
    onChange: onChange,
    isChecked: isChecked,
    name: name,
    isDisabled: isDisabled
  }), helpText && React__default.createElement(PiTypography$1, null, helpText)));
}
function DefaultTemplate$a(props) {
  return React__default.createElement(React.Fragment, null, React__default.createElement("span", null, props.name));
}

var PiToggleProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiToggleProps, _BaseProps);
  function PiToggleProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.size = 'regular';
    _this.direction = 'row';
    return _this;
  }
  return PiToggleProps;
}(BaseProps);
function PiToggle(props) {
  var newprops = new PiToggleProps();
  return generateToggleTemplate(_extends({}, newprops, props));
}

var _templateObject$h;
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
var PiBannerClass = function PiBannerClass(props, appearance) {
  return css.css(_templateObject$h || (_templateObject$h = _taggedTemplateLiteralLoose(["\n  .css-1lo6yt6{\n    background-color: ", " !important;\n    color: ", ";\n    size: 14px;\n    \n    font-weight:800 !important;\n    div{\n      font-weight:800 !important;\n    }\n  }\n"])), getAppearanceStyles(appearance, props), props.white);
};

var _excluded$h = ["libraryType"];
function generateBannerTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$h(props);
  } else {
    return defaultTemplate$5();
  }
}
function AtlasKitTemplate$h(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  var appearance = props.appearance;
  return React__default.createElement("div", {
    className: PiBannerClass(theme, appearance)
  }, React__default.createElement(AtlasBanner, Object.assign({}, props, {
    icon: getIcon(appearance)
  }), props.children));
}
function defaultTemplate$5() {
  return React__default.createElement("div", null);
}
function getIcon(appearance) {
  switch (appearance) {
    case 'warning':
      {
        return React__default.createElement(WarningIcon, {
          label: '',
          secondaryColor: 'inherit'
        });
      }
    case 'error':
      {
        return React__default.createElement(ErrorIcon, {
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
        return React__default.createElement(WarningIcon, {
          label: '',
          secondaryColor: 'inherit'
        });
      }
  }
}

var PiBannerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiBannerProps, _BaseProps);
  function PiBannerProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.children = 'Hello';
    return _this;
  }
  return PiBannerProps;
}(BaseProps);
function PiBanner(props) {
  var newprops = new PiBannerProps();
  return generateBannerTemplate(_extends({}, newprops, props));
}

var _excluded$i = ["libraryType"];
function generateLozengeTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$i(props);
  } else {
    return defaultTemplate$6();
  }
}
function AtlasKitTemplate$i(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return React__default.createElement(AtlasLozenge, Object.assign({}, props), props.children);
}
function defaultTemplate$6() {
  return React__default.createElement("div", null);
}

var PiLozengeProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiLozengeProps, _BaseProps);
  function PiLozengeProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.children = 'Hello';
    return _this;
  }
  return PiLozengeProps;
}(BaseProps);
function PiLozenge(props) {
  var newprops = new PiLozengeProps();
  return generateLozengeTemplate(_extends({}, newprops, props));
}

var _excluded$j = ["libraryType"];
function generateProgressIndicatorTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$j);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$j(props);
  } else {
    return defaultTemplate$7();
  }
}
function AtlasKitTemplate$j(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return React__default.createElement("div", null, React__default.createElement(progressIndicator.ProgressIndicator, Object.assign({}, props)));
}
function defaultTemplate$7() {
  return React__default.createElement("div", null);
}

var PiProgressIndicatorProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiProgressIndicatorProps, _BaseProps);
  function PiProgressIndicatorProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.values = ['first', 'second', 'third'];
    _this.selectedIndex = 0;
    return _this;
  }
  return PiProgressIndicatorProps;
}(BaseProps);
function PiProgressIndicator(props) {
  var newprops = new PiProgressIndicatorProps();
  return generateProgressIndicatorTemplate(_extends({}, newprops, props));
}

var _templateObject$i, _templateObject2$3, _templateObject3$3, _templateObject4$3, _templateObject5$2, _templateObject6$2, _templateObject7$2;
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
var error = function error(props) {
  return css.css(_templateObject$i || (_templateObject$i = _taggedTemplateLiteralLoose(["\nbackground-color: ", ";\n"])), props.dangerColor);
};
var info = function info(props) {
  return css.css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\nbackground-color: ", ";\n"])), props.primaryHoverBG);
};
var normal = function normal(props) {
  return css.css(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteralLoose(["\nbackground-color: ", ";\n"])), props.white);
};
var success = function success(props) {
  return css.css(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteralLoose(["\nbackground-color: ", ";\n"])), props.success);
};
var warning = function warning(props) {
  return css.css(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteralLoose(["\nbackground-color: ", ";\n"])), props.warningBGColor);
};
var PiFlagClass = function PiFlagClass(props, appearance) {
  return css.css(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteralLoose(["\n  div[role=\"alert\"]{\n    ", "\n    \n    size: 14px;\n  }\n"])), getAppearanceStyles$1(appearance, props));
};
var PiFlagDefaultClass = function PiFlagDefaultClass(props) {
  return css.css(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteralLoose(["\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 20px 16px;\n  width: 400px;\n  background: ", ";\n  box-shadow: 0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31);\n  border-radius: 4px;\n\n  .flag-icon{\n    width: 24px;\n    height: 24px;\n    background: ", ";\n    margin: 0px 16px;\n  }\n  .flag-content{\n    flex:1;\n  }\n\n  .close-icon{\n    \n    svg{\n      width: 16px;\n      height: 16px;\n      background: ", ";\n      cursor:pointer;\n      &:hover{\n        width:18px;\n        height:18px;\n      }\n    }\n    \n  }\n\n  p{\n    line-height:20px;\n    margin: 0px 0px;\n  }\n\n\n"])), props.white, props.white, props.white);
};

function PiWarningIcon() {
  return React__default.createElement("svg", {
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.31 1.343L17.669 14.513C17.7539 14.6652 17.7975 14.8369 17.7955 15.0111C17.7936 15.1853 17.7462 15.356 17.658 15.5063C17.5698 15.6565 17.4438 15.7811 17.2926 15.8677C17.1414 15.9543 16.9702 15.9999 16.796 16H1.20401C1.02963 16 0.858278 15.9544 0.70695 15.8678C0.555623 15.7811 0.429584 15.6564 0.341343 15.506C0.253101 15.3556 0.205723 15.1848 0.203911 15.0104C0.2021 14.836 0.245916 14.6642 0.331014 14.512L7.69101 1.343C7.82126 1.11023 8.01121 0.916412 8.2413 0.781501C8.47139 0.64659 8.73329 0.57547 9.00001 0.57547C9.26674 0.57547 9.52864 0.64659 9.75873 0.781501C9.98881 0.916412 10.1788 1.11023 10.309 1.343H10.31ZM9.00001 4.5C8.84423 4.49998 8.69025 4.53333 8.54844 4.5978C8.40662 4.66227 8.28026 4.75636 8.17784 4.87374C8.07543 4.99113 7.99934 5.12908 7.95469 5.27833C7.91005 5.42758 7.89788 5.58465 7.91901 5.739L8.43201 9.505C8.45032 9.64267 8.51801 9.76901 8.62249 9.86051C8.72697 9.95202 8.86113 10.0025 9.00001 10.0025C9.1389 10.0025 9.27306 9.95202 9.37754 9.86051C9.48202 9.76901 9.54971 9.64267 9.56801 9.505L10.081 5.739C10.1021 5.58465 10.09 5.42758 10.0453 5.27833C10.0007 5.12908 9.9246 4.99113 9.82219 4.87374C9.71977 4.75636 9.5934 4.66227 9.45159 4.5978C9.30977 4.53333 9.1558 4.49998 9.00001 4.5ZM9.00001 13.13C9.29838 13.13 9.58453 13.0115 9.79551 12.8005C10.0065 12.5895 10.125 12.3034 10.125 12.005C10.125 11.7066 10.0065 11.4205 9.79551 11.2095C9.58453 10.9985 9.29838 10.88 9.00001 10.88C8.70164 10.88 8.4155 10.9985 8.20452 11.2095C7.99354 11.4205 7.87501 11.7066 7.87501 12.005C7.87501 12.3034 7.99354 12.5895 8.20452 12.8005C8.4155 13.0115 8.70164 13.13 9.00001 13.13Z",
    fill: "#FFB337"
  }));
}

function PiCloseIcon(_ref) {
  var handleClose = _ref.handleClose;
  return React__default.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: handleClose
  }, React__default.createElement("rect", {
    width: '16',
    height: '16',
    fill: 'white'
  }), React__default.createElement("path", {
    d: 'M8.00003 7.05733L4.47136 3.52867C4.34563 3.40723 4.17722 3.34003 4.00243 3.34155C3.82763 3.34307 3.66042 3.41318 3.53682 3.53679C3.41321 3.66039 3.3431 3.8276 3.34158 4.0024C3.34006 4.1772 3.40726 4.3456 3.52869 4.47133L7.05736 8L3.52869 11.5287C3.40726 11.6544 3.34006 11.8228 3.34158 11.9976C3.3431 12.1724 3.41321 12.3396 3.53682 12.4632C3.66042 12.5868 3.82763 12.6569 4.00243 12.6584C4.17722 12.66 4.34563 12.5928 4.47136 12.4713L8.00003 8.94267L11.5287 12.4713C11.6544 12.5928 11.8228 12.66 11.9976 12.6584C12.1724 12.6569 12.3396 12.5868 12.4632 12.4632C12.5868 12.3396 12.657 12.1724 12.6585 11.9976C12.66 11.8228 12.5928 11.6544 12.4714 11.5287L8.94269 8L12.4714 4.47133C12.535 4.40984 12.5858 4.33627 12.6208 4.25494C12.6557 4.1736 12.6741 4.08612 12.6749 3.9976C12.6756 3.90908 12.6588 3.82129 12.6252 3.73936C12.5917 3.65743 12.5422 3.583 12.4796 3.5204C12.417 3.45781 12.3426 3.40831 12.2607 3.37479C12.1787 3.34126 12.0909 3.3244 12.0024 3.32517C11.9139 3.32594 11.8264 3.34433 11.7451 3.37927C11.6638 3.4142 11.5902 3.46499 11.5287 3.52867L8.00003 7.05733Z',
    fill: '#8E99B2'
  }));
}

function PiErrorIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.7664 3.98276C13.0093 4.08343 13.2301 4.23099 13.416 4.41701L19.584 10.584C19.7701 10.7699 19.9178 10.9907 20.0186 11.2338C20.1194 11.4769 20.1712 11.7374 20.1712 12.0005C20.1712 12.2636 20.1194 12.5242 20.0186 12.7672C19.9178 13.0103 19.7701 13.2311 19.584 13.417L13.416 19.584C13.2301 19.77 13.0093 19.9176 12.7664 20.0183C12.5234 20.1189 12.263 20.1707 12 20.1707C11.737 20.1707 11.4766 20.1189 11.2336 20.0183C10.9906 19.9176 10.7699 19.77 10.584 19.584L4.41598 13.417C4.22982 13.2311 4.08213 13.0103 3.98136 12.7672C3.8806 12.5242 3.82874 12.2636 3.82874 12.0005C3.82874 11.7374 3.8806 11.4769 3.98136 11.2338C4.08213 10.9907 4.22982 10.7699 4.41598 10.584L10.584 4.41701C10.7699 4.23099 10.9906 4.08343 11.2336 3.98276C11.4766 3.88208 11.737 3.83026 12 3.83026C12.263 3.83026 12.5234 3.88208 12.7664 3.98276ZM11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5195 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5195 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1053 7.48043 11 7.73478 11 8V13C11 13.2652 11.1053 13.5196 11.2929 13.7071ZM11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5195 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5195 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1053 15.4804 11 15.7348 11 16C11 16.2652 11.1053 16.5196 11.2929 16.7071Z",
    fill: "#DC4B43"
  }));
}

function PiSuccessIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.3824 11.0689C9.50441 11.1213 9.61475 11.1975 9.707 11.293L11 12.586L14.293 9.29302C14.3852 9.19751 14.4956 9.12133 14.6176 9.06892C14.7396 9.01651 14.8708 8.98892 15.0036 8.98777C15.1364 8.98662 15.2681 9.01192 15.391 9.0622C15.5138 9.11248 15.6255 9.18673 15.7194 9.28063C15.8133 9.37452 15.8875 9.48617 15.9378 9.60907C15.9881 9.73196 16.0134 9.86364 16.0122 9.99642C16.0111 10.1292 15.9835 10.2604 15.9311 10.3824C15.8787 10.5044 15.8025 10.6148 15.707 10.707L11.707 14.707C11.5195 14.8945 11.2652 14.9998 11 14.9998C10.7348 14.9998 10.4805 14.8945 10.293 14.707L8.293 12.707C8.19749 12.6148 8.1213 12.5044 8.0689 12.3824C8.01649 12.2604 7.9889 12.1292 7.98775 11.9964C7.98659 11.8636 8.0119 11.732 8.06218 11.6091C8.11246 11.4862 8.18671 11.3745 8.2806 11.2806C8.3745 11.1867 8.48615 11.1125 8.60904 11.0622C8.73194 11.0119 8.86362 10.9866 8.9964 10.9878C9.12918 10.9889 9.2604 11.0165 9.3824 11.0689Z",
    fill: "#00A67E"
  }));
}

function PiInfoIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#1976D2"
  }));
}

function PiNormalIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z",
    fill: "#1976D2"
  }));
}

var _excluded$k = ["libraryType"];
function generateFlagTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$k);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$k(props);
  } else {
    return defaultTemplate$8(props);
  }
}
function AtlasKitTemplate$k(props) {
  var atlasIcon = atlasKitIcons(props.appearance);
  var theme = React.useContext(PiThemeContext);
  var appearance = props.appearance;
  return React__default.createElement("div", {
    className: PiFlagClass(theme, appearance)
  }, React__default.createElement(Flag, Object.assign({
    icon: atlasIcon
  }, props)), " ");
}
function atlasKitIcons(appearance) {
  var flagIcon;
  switch (appearance) {
    case 'info':
      flagIcon = React__default.createElement(InfoIcon, {
        label: 'Info',
        secondaryColor: tokens.token('color.iconBorder.discovery', colors.N500)
      });
      break;
    case 'success':
      flagIcon = React__default.createElement(SuccessIcon, {
        label: 'Success',
        secondaryColor: tokens.token('color.iconBorder.success', colors.G400)
      });
      break;
    case 'error':
      flagIcon = React__default.createElement(ErrorIcon, {
        label: 'Error',
        secondaryColor: tokens.token('color.iconBorder.danger', colors.R400)
      });
      break;
    case 'warning':
      flagIcon = React__default.createElement(WarningIcon, {
        label: 'Warning',
        secondaryColor: tokens.token('color.iconBorder.warning', colors.Y200)
      });
      break;
    default:
      flagIcon = React__default.createElement(InfoIcon, {
        primaryColor: tokens.token('color.iconBorder.discovery', colors.B300),
        label: 'Info'
      });
  }
  return flagIcon;
}
function defaultTemplate$8(props) {
  var theme = React.useContext(PiThemeContext);
  var atlasIcon = getDeafualtIcons(props.appearance);
  return React__default.createElement("div", {
    className: PiFlagDefaultClass(theme)
  }, React__default.createElement("div", {
    className: "flag-icon"
  }, atlasIcon), React__default.createElement("div", {
    className: "flag-content"
  }, React__default.createElement(PiTypography$1, {
    component: "pbold"
  }, props.title), React__default.createElement(PiTypography$1, {
    component: "p"
  }, props.description), props.children), React__default.createElement("div", {
    className: "close-icon"
  }, React__default.createElement(PiCloseIcon, {
    handleClose: props.handleClose
  })));
}
function getDeafualtIcons(appearance) {
  switch (appearance) {
    case 'error':
      {
        return React__default.createElement(PiErrorIcon, null);
      }
    case 'info':
      {
        return React__default.createElement(PiInfoIcon, null);
      }
    case 'normal':
      {
        return React__default.createElement(PiNormalIcon, null);
      }
    case 'success':
      {
        return React__default.createElement(PiSuccessIcon, null);
      }
    case 'warning':
      {
        return React__default.createElement(PiWarningIcon, null);
      }
    default:
      {
        return React__default.createElement(PiInfoIcon, null);
      }
  }
}

var PiFlagProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiFlagProps, _BaseProps);
  function PiFlagProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.appearance = 'info';
    return _this;
  }
  return PiFlagProps;
}(BaseProps);
function PiFlag(props) {
  var newprops = new PiFlagProps();
  return generateFlagTemplate(_extends({}, newprops, props));
}

var _templateObject$j, _templateObject2$4, _templateObject3$4, _templateObject4$4, _templateObject5$3, _templateObject6$3;
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
var error$1 = function error(props) {
  return css.css(_templateObject$j || (_templateObject$j = _taggedTemplateLiteralLoose(["\nbackground-color: ", " !important;\n"])), props.dangerBGColor);
};
var info$1 = function info(props) {
  return css.css(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\nbackground-color: ", " !important;\n"])), props.infoBGColor);
};
var discovery = function discovery(props) {
  return css.css(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteralLoose(["\nbackground-color: ", " !important;\n"])), props.tabHeaderBG);
};
var success$1 = function success(props) {
  return css.css(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteralLoose(["\nbackground-color: ", " !important;\n"])), props.successBGColor);
};
var warning$1 = function warning(props) {
  return css.css(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteralLoose(["\nbackground-color: ", " !important;\n"])), props.warningoxBGColor);
};
var PiSestionMessageClass = function PiSestionMessageClass(props, appearance) {
  return css.css(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteralLoose(["\n  section{\n    padding: 16px;\n    ", "\n    div:nth-child(1){\n      width:32px;\n    }\n    h1{\n      color: #2E374A;\n      font-size: 18px;\n      font-weight:bold;\n      margin:0px !important;\n    }\n    p{\n      color: #4E586D;\n      \n    }\n  }\n  \n"])), getAppearanceStyles$2(appearance, props));
};

var _excluded$l = ["libraryType"];
function generateSectionMessageTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$l);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$l(props);
  } else {
    return defaultTemplate$9();
  }
}
function AtlasKitTemplate$l(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  var appearance = props.appearance;
  return React__default.createElement("div", {
    className: PiSestionMessageClass(theme, appearance)
  }, React__default.createElement(SectionMessage, Object.assign({}, props), props.children));
}
function defaultTemplate$9() {
  return React__default.createElement("div", null);
}

var PiSectionMessageProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiSectionMessageProps, _BaseProps);
  function PiSectionMessageProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiSectionMessageProps;
}(BaseProps);
function PiSectionMessage(props) {
  var newprops = new PiSectionMessageProps();
  return generateSectionMessageTemplate(_extends({}, newprops, props));
}

var _templateObject$k;
var PiPageHeaderClass = function PiPageHeaderClass() {
  return css.css(_templateObject$k || (_templateObject$k = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .css-12n0woh-TitleWrapper{\n   display:flex;\n   justify-content:space-between;\n   align-items:center;\n  }\n"])));
};

var _excluded$m = ["libraryType"];
function generatePageHeaderTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$m);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$m(props);
  } else {
    return defaultTemplate$a();
  }
}
function AtlasKitTemplate$m(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return React__default.createElement("div", {
    className: PiPageHeaderClass()
  }, React__default.createElement(PageHeader, Object.assign({}, props), props.children));
}
function defaultTemplate$a() {
  return React__default.createElement("div", null);
}

var PiPageHeaderProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiPageHeaderProps, _BaseProps);
  function PiPageHeaderProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiPageHeaderProps;
}(BaseProps);
function PiPageHeader(props) {
  var newprops = new PiPageHeaderProps();
  return generatePageHeaderTemplate(_extends({}, newprops, props));
}

function PiProfileArrowIcon() {
  return React__default.createElement("svg", {
    width: '8',
    height: '4',
    viewBox: '0 0 8 4',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1.80506 0.195262C1.54471 -0.0650874 1.1226 -0.0650874 0.862254 0.195262C0.601905 0.455612 0.601905 0.877722 0.862254 1.13807L3.52892 3.80474C3.78927 4.06509 4.21138 4.06509 4.47173 3.80474L7.1384 1.13807C7.39875 0.877722 7.39875 0.455612 7.1384 0.195262C6.87805 -0.0650874 6.45594 -0.0650874 6.19559 0.195262L4.00033 2.39052L1.80506 0.195262Z',
    fill: 'white'
  }));
}

var _templateObject$l;
var PiProfileSectionClass = function PiProfileSectionClass() {
  return css.css(_templateObject$l || (_templateObject$l = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .down-arrow{\n    margin-left: 5px;\n  }\n  .arrowClass {\n    svg {\n      margin-left: 5px;\n    }\n  }\n"])));
};

var _excluded$n = ["libraryType"],
  _excluded2$8 = ["triggerRef"];
function generateProfileTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$n);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$n(props);
  } else {
    return DefaultTemplate$b();
  }
}
function AtlasKitTemplate$n(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  console.log(props.userImage);
  var userImg = props.userImage;
  return React__default.createElement("div", null, React__default.createElement(DropdownMenu__default, Object.assign({}, props, {
    trigger: function trigger(_ref3) {
      var triggerRef = _ref3.triggerRef,
        props = _objectWithoutPropertiesLoose(_ref3, _excluded2$8);
      return React__default.createElement(AtlasButton__default, Object.assign({
        style: {
          backgroundColor: 'transparent'
        }
      }, props, {
        ref: triggerRef
      }), React__default.createElement("div", {
        className: PiProfileSectionClass()
      }, userImg && React__default.createElement("img", {
        className: 'user_image',
        src: userImg,
        style: {
          height: '35px',
          width: '35px',
          borderRadius: '50px'
        },
        alt: 'loading'
      }), !userImg && React__default.createElement(PiAvatar, {
        size: 'medium'
      }), React__default.createElement("span", {
        className: 'down-arrow'
      }, React__default.createElement(PiProfileArrowIcon, null))));
    }
  }), React__default.createElement(DropdownMenu.DropdownItemGroup, null, props.items.map(function (item, i) {
    return React__default.createElement(DropdownMenu.DropdownItem, {
      onClick: function onClick() {
        return props.onClick(item);
      },
      key: i
    }, item.name);
  }))));
}
function DefaultTemplate$b() {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", null));
}

var PiProfileSectionProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiProfileSectionProps, _BaseProps);
  function PiProfileSectionProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.placement = 'bottom';
    return _this;
  }
  return PiProfileSectionProps;
}(BaseProps);
function PiProfileSection(props) {
  var newprops = new PiProfileSectionProps();
  return generateProfileTemplate(_extends({}, newprops, props));
}

var _templateObject$m;
var PiSearchClass = function PiSearchClass(props) {
  return css.css(_templateObject$m || (_templateObject$m = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  text-align: left;\n  position: relative;\n  /*width: 50%;*/\n  &.new-global-search {\n    display: flex;\n    align-items: center;\n    background: #f7faff;\n    border: 0.125rem solid #d0daec;\n    height: 40px;\n    border-radius: 4px;\n    /*div > input {\n      border: unset;\n      background: unset;\n    }*/\n    > div:nth-child(2) {\n      background-color: unset !important;\n      border: unset !important;\n    }\n    .Cross-svg {\n      display: none;\n    }\n    .Search-svg {\n      position: absolute;\n      left: 12px;\n      top: calc(50% - 0.6em);\n      color: #5c5f73;\n    }\n    .Cross-svg {\n      position: absolute;\n      right: 15px;\n      top: calc(50% - 0.6em);\n      color: #5c5f73;\n      cursor: pointer;\n    }\n  }\n  .close-icon-container {\n    background-color: #baccea;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    cursor: pointer;\n    svg path {\n      fill: #fff;\n    }\n  }\n  div {\n    border-style: none;\n    background-color: none;\n  }\n  .div:hover {\n    background-color: ", ";\n  }\n  input {\n    margin: 4px 0 8px 0;\n    padding: 13px 12px 11px 35px !important;\n    justify-content: center;\n    align-items: center;\n    height: 40px !important;\n    background: unset !important;\n    border: unset !important;\n    box-sizing: border-box;\n    border-radius: 4px;\n    &:hover {\n      background-color: ", ";\n      border: 0.125rem solid ", ";\n    }\n    &:focus {\n      background-color: ", ";\n      border: 0.125rem solid ", ";\n    }\n  }\n  .error > input {\n    border: 0.125rem solid ", ";\n  }\n\n  .success > input {\n    border: 0.125rem solid ", ";\n  }\n"])), props.white, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.error, props.success);
};

function PiSearchIcon() {
  return React__default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M13.8194 12.6592L17.3334 16.1724L16.1724 17.3333L12.6592 13.8193C11.352 14.8672 9.72612 15.4372 8.05076 15.4348C3.97475 15.4348 0.666687 12.1267 0.666687 8.0507C0.666687 3.97469 3.97475 0.666626 8.05076 0.666626C12.1268 0.666626 15.4348 3.97469 15.4348 8.0507C15.4372 9.72606 14.8673 11.352 13.8194 12.6592ZM12.1735 12.0504C13.2148 10.9796 13.7963 9.54427 13.7939 8.0507C13.7939 4.87719 11.2234 2.30753 8.05076 2.30753C4.87725 2.30753 2.30759 4.87719 2.30759 8.0507C2.30759 11.2234 4.87725 13.7939 8.05076 13.7939C9.54433 13.7962 10.9797 13.2147 12.0505 12.1735L12.1735 12.0504Z",
    fill: "#B6C1D6"
  }));
}

function PiNewCloseIcon() {
  return React__default.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("g", {
    clipPath: 'url(#clip0_26540_594794)'
  }, React__default.createElement("path", {
    d: 'M8 0C3.576 0 0 3.576 0 8C0 12.424 3.576 16 8 16C12.424 16 16 12.424 16 8C16 3.576 12.424 0 8 0ZM11.44 11.44C11.128 11.752 10.624 11.752 10.312 11.44L8 9.128L5.688 11.44C5.376 11.752 4.872 11.752 4.56 11.44C4.248 11.128 4.248 10.624 4.56 10.312L6.872 8L4.56 5.688C4.248 5.376 4.248 4.872 4.56 4.56C4.872 4.248 5.376 4.248 5.688 4.56L8 6.872L10.312 4.56C10.624 4.248 11.128 4.248 11.44 4.56C11.752 4.872 11.752 5.376 11.44 5.688L9.128 8L11.44 10.312C11.744 10.616 11.744 11.128 11.44 11.44Z',
    fill: '#BACCEA'
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: 'clip0_26540_594794'
  }, React__default.createElement("rect", {
    width: '16',
    height: '16',
    fill: 'white'
  }))));
}

var _excluded$o = ["libraryType"],
  _excluded2$9 = ["onValueChange", "onClear", "value"];
function generateSearchTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$o(props);
  } else {
    return DefaultTemplate$c();
  }
}
function AtlasKitTemplate$o(_ref2) {
  var onValueChange = _ref2.onValueChange,
    onClear = _ref2.onClear,
    value = _ref2.value,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$9);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: "new-global-search " + PiSearchClass(theme) + " " + props.className
  }, React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: 'Search-svg'
  }, React__default.createElement(PiSearchIcon, null)), React__default.createElement(AtlasTextfield, Object.assign({
    value: value
  }, props, {
    onChange: onValueChange
  })), value && React__default.createElement("div", {
    style: {
      padding: '10px',
      paddingLeft: '0px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onClick: onClear
  }, React__default.createElement(PiNewCloseIcon, null))));
}
function DefaultTemplate$c() {
  return React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  });
}

var PiSearchProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiSearchProps, _BaseProps);
  function PiSearchProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.value = '';
    _this.appearance = 'standard';
    _this.type = 'text';
    return _this;
  }
  return PiSearchProps;
}(BaseProps);
function PiSearch(props) {
  var newprops = new PiSearchProps();
  return generateSearchTemplate(_extends({}, newprops, props));
}

var _templateObject$n;
var PiBackClass = function PiBackClass(props) {
  return css.css(_templateObject$n || (_templateObject$n = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  .Back-main {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #e3f2fd;\n    border-radius: 4px;\n    cursor: pointer;\n    &:hover {\n      background-color: ", ";\n    }\n    &:focus {\n      background-color: ", ";\n    }\n  }\n  .label {\n    margin-left: 16px;\n  }\n  .css-1rm3tso {\n    color: #000;\n  }\n"])), props.inputHoverBG, props.white);
};

function PiBackIcon() {
  return React__default.createElement("svg", {
    width: '8',
    height: '12',
    viewBox: '0 0 8 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.24853 0.351344C7.4735 0.576377 7.59988 0.881547 7.59988 1.19974C7.59988 1.51794 7.4735 1.82311 7.24853 2.04814L3.29693 5.99974L7.24853 9.95134C7.46712 10.1777 7.58808 10.4808 7.58534 10.7954C7.58261 11.1101 7.4564 11.411 7.23391 11.6335C7.01143 11.856 6.71045 11.9822 6.39581 11.985C6.08118 11.9877 5.77806 11.8667 5.55173 11.6481L0.751734 6.84814C0.526769 6.62311 0.400391 6.31794 0.400391 5.99974C0.400391 5.68155 0.526769 5.37638 0.751734 5.15134L5.55173 0.351344C5.77677 0.126379 6.08194 0 6.40013 0C6.71833 0 7.0235 0.126379 7.24853 0.351344V0.351344Z',
    fill: '#134C85'
  }));
}

function useLocation() {
  var history = reactRouterDom.useHistory();
  function navigate(to, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace;
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }
  return {
    navigate: navigate
  };
}

var _excluded$p = ["libraryType"];
function generateBackTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$p);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$p(props);
  } else {
    return DefaultTemplate$d();
  }
}
function AtlasKitTemplate$p(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  var _useLocation = useLocation(),
    navigate = _useLocation.navigate;
  return React__default.createElement("div", {
    className: PiBackClass(theme)
  }, React__default.createElement("div", {
    className: 'Back-main',
    onClick: function onClick() {
      return navigate(props.backOptions.route);
    }
  }, React__default.createElement(PiBackIcon, null)), React__default.createElement("div", {
    className: 'label'
  }, React__default.createElement(PiTypography$1, {
    component: 'h4'
  }, props.backOptions.name)));
}
function DefaultTemplate$d() {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", null));
}

var PiBackSectionProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiBackSectionProps, _BaseProps);
  function PiBackSectionProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiBackSectionProps;
}(BaseProps);
function PiBackSection(props) {
  var newprops = new PiBackSectionProps();
  return generateBackTemplate(_extends({}, newprops, props));
}

var _templateObject$o;
var PiAttachmentClass = function PiAttachmentClass(props) {
  return css.css(_templateObject$o || (_templateObject$o = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n  display: flex;\n  .main-container {\n    width: 130px;\n    height: 170px;\n    background: ", ";\n    border: 1px solid #e3eaf6;\n    box-sizing: border-box;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    cursor: pointer;\n    padding-top: 5px;\n    &:hover {\n      .overlay {\n      opacity: 0.8;\n      }\n    }\n  }\n  .image_Container {\n    width: 120px;\n    height: 120px;\n    border-radius: 4px 4px 0px 0px;\n    background-color: #fff;\n    overflow: hidden;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }\n\n  }\n  .icon-container {\n    height: 120px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .label {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .label-image {\n    border-top: 2px solid #e3eaf6;\n  }\n  .overlay {\n    position: absolute;\n    width: 130px;\n    top: 0;\n    // height: 100%;\n    background: rgba(9, 30, 66, 0.54);\n    border: 1px solid rgba(9, 30, 66, 0.54);\n    box-sizing: border-box;\n    border-radius: 4px;\n    opacity: 0;\n    transition: 0.5s ease;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: row;\n    padding-top: 10px;\n\n    // &:hover {\n    //   opacity: 0.8;\n    // }\n  }\n  .icon_class {\n    margin-right: 20px;\n  }\n  .preview-model-container {\n    height: 100%;\n    background: red;\n  }\n  .Model-container {\n  }\n"])), props.attachmentBg);
};

function PiCssAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '31',
    height: '40',
    viewBox: '0 0 31 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M28.5824 0.799805H3.38242C2.06242 0.799805 0.982422 1.8798 0.982422 3.1998V36.7998C0.982422 38.1198 2.06242 39.1998 3.38242 39.1998H28.5824C29.9024 39.1998 30.9824 38.1198 30.9824 36.7998V3.1998C30.9824 1.8798 29.9024 0.799805 28.5824 0.799805ZM22.8693 14.27C22.7852 14.1703 22.64 14.0841 22.4338 14.0096C22.291 13.9603 21.9669 13.8727 21.4607 13.7469C20.809 13.5848 20.3518 13.3869 20.089 13.1527C19.7193 12.8217 19.5359 12.4183 19.5359 11.942C19.5359 11.6362 19.6224 11.3493 19.7962 11.0828C19.9703 10.8152 20.221 10.6124 20.5463 10.4731C20.8738 10.3339 21.2687 10.2642 21.7294 10.2642C22.4842 10.2642 23.0542 10.4297 23.4335 10.7597C23.8152 11.0897 24.0166 11.5325 24.0359 12.0845L22.8226 12.1389C22.7709 11.8293 22.6581 11.6086 22.4877 11.4717C22.316 11.3372 22.0619 11.2689 21.7184 11.2689C21.3657 11.2689 21.0909 11.342 20.8905 11.4862C20.7633 11.5796 20.6974 11.7045 20.6974 11.8606C20.6974 12.0023 20.7585 12.1247 20.8774 12.2254C21.0309 12.3537 21.4029 12.4882 21.9932 12.6286C22.5836 12.7665 23.0215 12.9117 23.3036 13.0606C23.5867 13.2095 23.8101 13.4134 23.9695 13.6713C24.1291 13.9306 24.2084 14.2486 24.2084 14.6302C24.2084 14.9747 24.1125 15.2975 23.9229 15.5985C23.7308 15.8985 23.4608 16.123 23.1094 16.2692C22.7601 16.4158 22.3246 16.4889 21.8015 16.4889C21.0418 16.4889 20.4573 16.3137 20.0494 15.962C19.6425 15.6103 19.399 15.0979 19.3197 14.4261L20.5005 14.311C20.5725 14.7082 20.7164 14.9985 20.9336 15.1858C21.1508 15.3731 21.4447 15.4641 21.8119 15.4641C22.203 15.4641 22.4985 15.3813 22.695 15.2158C22.8943 15.0503 22.9926 14.8569 22.9926 14.6362C22.9942 14.4907 22.9522 14.3696 22.8694 14.27L22.8693 14.27ZM17.2652 14.27C17.1824 14.1703 17.0372 14.0841 16.8296 14.0096C16.6869 13.9603 16.3628 13.8727 15.8566 13.7469C15.2062 13.5848 14.749 13.3869 14.4862 13.1527C14.1166 12.8217 13.9331 12.4183 13.9331 11.942C13.9331 11.6362 14.0196 11.3493 14.1935 11.0828C14.3676 10.8152 14.6183 10.6124 14.9435 10.4731C15.27 10.3339 15.6659 10.2642 16.1266 10.2642C16.8815 10.2642 17.4501 10.4297 17.8308 10.7597C18.2125 11.0897 18.4128 11.5325 18.4318 12.0845L17.2185 12.1389C17.1668 11.8293 17.0553 11.6086 16.885 11.4717C16.7133 11.3372 16.4577 11.2689 16.1157 11.2689C15.7629 11.2689 15.4867 11.342 15.2877 11.4862C15.1594 11.5796 15.0946 11.7045 15.0946 11.8606C15.0946 12.0023 15.1557 12.1247 15.2746 12.2254C15.4281 12.3537 15.8002 12.4882 16.3905 12.6286C16.9808 12.7665 17.4177 12.9117 17.7008 13.0606C17.9839 13.2095 18.206 13.4134 18.3656 13.6713C18.5263 13.9306 18.6056 14.2486 18.6056 14.6302C18.6056 14.9747 18.5108 15.2975 18.3188 15.5985C18.128 15.8985 17.8567 16.123 17.5063 16.2692C17.157 16.4158 16.7204 16.4889 16.1984 16.4889C15.4377 16.4889 14.8543 16.3137 14.4463 15.962C14.0394 15.6103 13.796 15.0979 13.7166 14.4261L14.8974 14.311C14.9694 14.7082 15.1133 14.9985 15.3294 15.1858C15.5477 15.3717 15.8405 15.4641 16.2091 15.4641C16.6001 15.4641 16.8942 15.3813 17.0922 15.2158C17.2915 15.0503 17.3898 14.8569 17.3898 14.6362C17.3914 14.4907 17.3504 14.3696 17.2652 14.27L17.2652 14.27ZM8.51959 11.0948C9.03682 10.5417 9.71609 10.2655 10.5572 10.2655C11.2928 10.2655 11.8903 10.4827 12.35 10.9172C12.6235 11.174 12.8276 11.5423 12.9655 12.0247L11.7631 12.3116C11.6924 11.9996 11.5435 11.7537 11.319 11.5736C11.0935 11.3936 10.8187 11.3026 10.4959 11.3026C10.0494 11.3026 9.68832 11.4633 9.41108 11.7815C9.13385 12.1032 8.99457 12.6204 8.99457 13.3367C8.99457 14.0974 9.13011 14.6387 9.40493 14.9615C9.67841 15.2843 10.0325 15.445 10.4718 15.445C10.7946 15.445 11.0718 15.3419 11.3035 15.1378C11.5363 14.9312 11.7032 14.6098 11.8039 14.1695L12.9811 14.5426C12.8011 15.1991 12.5011 15.6861 12.0811 16.0053C11.6601 16.3246 11.1283 16.4829 10.4828 16.4829C9.68483 16.4829 9.02833 16.2094 8.51349 15.6633C8.00001 15.1185 7.74179 14.3722 7.74179 13.4264C7.74447 12.4254 8.00348 11.6492 8.51966 11.0947L8.51959 11.0948ZM24.974 31.4495H6.99044V30.2495H24.9733L24.974 31.4495ZM24.974 27.2002H6.99044V26.0002H24.9733L24.974 27.2002Z',
    fill: '#8E99B2'
  }));
}

function PiXlsxAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM18.3072 14.2062C18.2317 14.1151 18.0972 14.0345 17.9076 13.9673C17.7779 13.9228 17.4827 13.8425 17.0196 13.7283C16.4244 13.5808 16.0068 13.3994 15.7668 13.1849C15.4296 12.8824 15.2603 12.5128 15.2603 12.0783C15.2603 11.7987 15.3396 11.5359 15.4979 11.2924C15.6575 11.0489 15.8855 10.8641 16.1844 10.7356C16.4834 10.6072 16.8444 10.5448 17.2655 10.5448C17.9555 10.5448 18.4738 10.6959 18.8231 10.9983C19.1724 11.3007 19.3548 11.7052 19.3738 12.2104L18.2628 12.2583C18.2159 11.9763 18.1128 11.7735 17.958 11.6487C17.8007 11.5252 17.5669 11.4639 17.2548 11.4639C16.9307 11.4639 16.68 11.5298 16.4965 11.6618C16.3789 11.747 16.3213 11.8611 16.3213 12.0039C16.3213 12.1335 16.3765 12.2449 16.4869 12.3363C16.6261 12.4552 16.9658 12.5763 17.5069 12.7046C18.0458 12.8318 18.4465 12.9639 18.7045 13.1005C18.9624 13.236 19.1665 13.4233 19.3117 13.6584C19.4593 13.8949 19.5324 14.1864 19.5324 14.5343C19.5324 14.8488 19.4435 15.1439 19.2696 15.4187C19.0945 15.6935 18.8472 15.8977 18.5269 16.0319C18.2065 16.165 17.808 16.2322 17.3317 16.2322C16.6358 16.2322 16.1027 16.0715 15.7296 15.7511C15.3565 15.4308 15.1345 14.9615 15.0624 14.347L16.1413 14.2415C16.2072 14.6039 16.3382 14.8704 16.5372 15.0407C16.7351 15.2111 17.0041 15.2952 17.3413 15.2952C17.6989 15.2952 17.9679 15.2207 18.1489 15.0697C18.33 14.9186 18.4213 14.7421 18.4213 14.5393C18.421 14.4075 18.3827 14.2972 18.3072 14.2061L18.3072 14.2062ZM10.6814 10.6828H11.7914V15.2093H14.5514V16.1345H10.6814V10.6828ZM5.14718 10.6386H6.44441L7.54718 12.4038L8.62608 10.6372H9.91262L8.20258 13.3073L10.0805 16.1345H8.74128L7.52441 14.2348L6.30137 16.1356H4.97067L6.84864 13.2663L5.14718 10.6386ZM23.992 31.4487H6.00843V30.2487H23.9913L23.992 31.4487ZM23.992 27.1994H6.00843V25.9994H23.9913L23.992 27.1994ZM23.6786 16.1354L22.4593 14.2346L21.2366 16.1354H19.9059L21.7838 13.2661L20.0811 10.6381H21.3794L22.4811 12.4047L23.5611 10.6381H24.8476L23.1365 13.3082L25.0158 16.1354H23.6786Z',
    fill: '#8E99B2'
  }));
}

function PiAttachmentDownloadIcon() {
  return React__default.createElement("svg", {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12.75 9.75H13.5C14.7721 9.56804 15.75 8.44743 15.75 7.125C15.75 5.67525 14.5747 4.5 13.125 4.5C12.8998 4.5 12.6811 4.52837 12.4725 4.58173C11.9132 3.21381 10.5692 2.25 9 2.25C7.13463 2.25 5.58737 3.61199 5.29842 5.39578C5.05029 5.30157 4.78117 5.25 4.5 5.25C3.25736 5.25 2.25 6.25736 2.25 7.5C2.25 8.74264 3.25736 9.75 4.5 9.75H5.25C5.87132 9.75 6.375 10.2537 6.375 10.875C6.375 11.4963 5.87132 12 5.25 12H4.5C2.01472 12 0 9.98528 0 7.5C0 5.26378 1.63115 3.40853 3.76856 3.05915C4.80346 1.22065 6.77285 0 9 0C10.8804 0 12.5989 0.873288 13.7125 2.28504C16.1279 2.57515 18 4.63144 18 7.125C18 9.55855 16.2075 11.6356 13.8186 11.9773L13.6634 11.9995L12.7813 11.9996C12.7709 11.9999 12.7605 12 12.75 12C12.1287 12 11.625 11.4963 11.625 10.875C11.625 10.2537 12.1287 9.75 12.75 9.75ZM10.125 14.159L10.4545 13.8295C10.8938 13.3902 11.6062 13.3902 12.0455 13.8295C12.4848 14.2688 12.4848 14.9812 12.0455 15.4205L9.7955 17.6705C9.35616 18.1098 8.64384 18.1098 8.2045 17.6705L5.9545 15.4205C5.51517 14.9812 5.51517 14.2688 5.9545 13.8295C6.39384 13.3902 7.10616 13.3902 7.5455 13.8295L7.875 14.159V5.25C7.875 4.62868 8.37868 4.125 9 4.125C9.62132 4.125 10.125 4.62868 10.125 5.25V14.159Z',
    fill: 'white'
  }));
}

function PiZoomIcon() {
  return React__default.createElement("svg", {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M17.3697 16.0114L14.1162 12.7578C15.3117 11.2098 15.8731 9.26365 15.6859 7.31548C15.4987 5.36738 14.5772 3.56392 13.1088 2.27255C11.6404 0.981189 9.73561 0.298919 7.78273 0.364702C5.82962 0.430482 3.97513 1.2395 2.59646 2.62673C1.21778 4.01396 0.419585 5.8753 0.363502 7.83154C0.307565 9.78779 0.998296 11.6919 2.29502 13.1562C3.59171 14.6203 5.39708 15.5342 7.34323 15.712C9.2894 15.8897 11.2301 15.3179 12.7698 14.1129L16.0185 17.3712L16.0187 17.3713C16.2617 17.6064 16.6105 17.6957 16.9365 17.6062C17.2624 17.5167 17.5169 17.2617 17.6063 16.9353C17.6956 16.609 17.6065 16.2596 17.3717 16.0162L17.3697 16.0114ZM2.33894 8.06398C2.33894 6.53902 2.94383 5.07638 4.02066 3.99822C5.09735 2.91981 6.55785 2.31404 8.08048 2.31404C9.60311 2.31404 11.0637 2.91981 12.1403 3.99822C13.2171 5.07649 13.822 6.53912 13.822 8.06398C13.822 9.58883 13.2171 11.0516 12.1403 12.1297C11.0636 13.2081 9.60311 13.8139 8.08048 13.8139C6.55816 13.8124 5.09858 13.2061 4.02202 12.1281C2.94547 11.0501 2.34017 9.58842 2.3387 8.06374L2.33894 8.06398Z',
    fill: 'white'
  }), React__default.createElement("path", {
    d: 'M10.9515 7.10549H9.03763V5.18881C9.03763 4.84641 8.85527 4.53009 8.55916 4.35882C8.26305 4.18769 7.89833 4.18769 7.60222 4.35882C7.30611 4.53008 7.12375 4.84641 7.12375 5.18881V7.10549H5.20987C4.86797 7.10549 4.55211 7.28812 4.38109 7.58466C4.21021 7.8812 4.21021 8.24646 4.38109 8.543C4.55211 8.83954 4.86797 9.02217 5.20987 9.02217H7.12375V10.9389C7.12375 11.2813 7.30611 11.5976 7.60222 11.7688C7.89833 11.94 8.26306 11.94 8.55916 11.7688C8.85527 11.5976 9.03763 11.2813 9.03763 10.9389V9.02217H10.9515C11.2934 9.02217 11.6093 8.83954 11.7803 8.543C11.9512 8.24646 11.9512 7.8812 11.7803 7.58466C11.6093 7.28812 11.2934 7.10549 10.9515 7.10549Z',
    fill: 'white'
  }));
}

function PiDeleteIcon() {
  return React__default.createElement("svg", {
    width: '16',
    height: '18',
    viewBox: '0 0 16 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M2.75 15.75C2.75 16.1642 3.08579 16.5 3.5 16.5H12.5C12.9142 16.5 13.25 16.1642 13.25 15.75V6.75H2.75V15.75ZM11.75 2.25H13.25C14.4926 2.25 15.5 3.25736 15.5 4.5V6C15.5 6.41421 15.1642 6.75 14.75 6.75V15.75C14.75 16.9926 13.7426 18 12.5 18H3.5C2.25736 18 1.25 16.9926 1.25 15.75V6.75C0.835786 6.75 0.5 6.41421 0.5 6V4.5C0.5 3.25736 1.50736 2.25 2.75 2.25H4.25C4.25 1.00736 5.25736 0 6.5 0H9.5C10.7426 0 11.75 1.00736 11.75 2.25ZM4.25 9.75C4.25 9.33579 4.58579 9 5 9C5.41421 9 5.75 9.33579 5.75 9.75V13.5C5.75 13.9142 5.41421 14.25 5 14.25C4.58579 14.25 4.25 13.9142 4.25 13.5V9.75ZM7.25 9.75C7.25 9.33579 7.58579 9 8 9C8.41421 9 8.75 9.33579 8.75 9.75V13.5C8.75 13.9142 8.41421 14.25 8 14.25C7.58579 14.25 7.25 13.9142 7.25 13.5V9.75ZM10.25 9.75C10.25 9.33579 10.5858 9 11 9C11.4142 9 11.75 9.33579 11.75 9.75V13.5C11.75 13.9142 11.4142 14.25 11 14.25C10.5858 14.25 10.25 13.9142 10.25 13.5V9.75ZM6.5 1.5C6.08579 1.5 5.75 1.83579 5.75 2.25H10.25C10.25 1.83579 9.91421 1.5 9.5 1.5H6.5ZM2 5.25H14V4.5C14 4.08579 13.6642 3.75 13.25 3.75H2.75C2.33579 3.75 2 4.08579 2 4.5V5.25Z',
    fill: '#fff'
  }));
}

function PiZipAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M19.4568 13.0577C19.6189 12.9953 19.7448 12.897 19.8361 12.7625C19.9272 12.6294 19.973 12.4733 19.973 12.2957C19.973 12.076 19.9082 11.896 19.7809 11.7546C19.6526 11.6118 19.4892 11.5229 19.2926 11.487C19.1485 11.4605 18.8571 11.4463 18.4192 11.4463H17.832V13.1528H18.4969C18.9755 13.1526 19.2958 13.1215 19.4569 13.0578L19.4568 13.0577Z',
    fill: '#8E99B2'
  }), React__default.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM16.6176 10.4286H18.5665C19.3045 10.4286 19.7858 10.4586 20.01 10.5186C20.3545 10.6086 20.6424 10.8041 20.8752 11.1065C21.108 11.409 21.2245 11.799 21.2245 12.279C21.2245 12.6473 21.1573 12.9569 21.0228 13.209C20.8897 13.461 20.7193 13.6579 20.5128 13.8017C20.3052 13.9445 20.0952 14.0393 19.8828 14.0862C19.5935 14.1438 19.1735 14.1714 18.6239 14.1714H17.8318V16.4407H16.6174L16.6176 10.4286ZM14.2476 10.4286H15.4621V16.4417H14.2476V10.4286ZM8.6328 15.3472L11.7911 11.4461H8.9904V10.4285H13.3908V11.3717L10.0967 15.4289H13.5178V16.4417H8.63259L8.6328 15.3472ZM23.9914 31.4492H6.00789V30.2492H23.9907L23.9914 31.4492ZM23.9914 27.1999H6.00789V25.9999H23.9907L23.9914 27.1999Z',
    fill: '#8E99B2'
  }));
}

function PiDocAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M7.51989 14.9958C7.63989 14.8878 7.73578 14.7113 7.81025 14.4654C7.88471 14.2195 7.92301 13.8833 7.92301 13.4585C7.92301 13.0337 7.88578 12.7074 7.81025 12.4792C7.73471 12.2515 7.63025 12.075 7.49578 11.9467C7.36024 11.8195 7.18855 11.7343 6.98096 11.6888C6.82614 11.6526 6.52372 11.6357 6.07128 11.6357H5.57227V15.2778H6.4002C6.71092 15.2778 6.93432 15.2598 7.07226 15.225C7.25226 15.1795 7.40093 15.1026 7.51985 14.9957L7.51989 14.9958Z',
    fill: '#8E99B2'
  }), React__default.createElement("path", {
    d: 'M12.4556 15.3468C12.8983 15.3468 13.2621 15.1871 13.5452 14.8692C13.8284 14.5512 13.9701 14.0723 13.9701 13.4351C13.9701 12.8061 13.8321 12.3358 13.5559 12.0251C13.2801 11.7155 12.9128 11.5596 12.4543 11.5596C11.997 11.5596 11.6287 11.7168 11.3477 12.0313C11.067 12.3457 10.9277 12.8185 10.9277 13.4509C10.9277 14.0737 11.0718 14.5454 11.3584 14.8668C11.6456 15.1885 12.0142 15.3468 12.4556 15.3468H12.4556Z',
    fill: '#8E99B2'
  }), React__default.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM16.499 11.3721C16.9717 10.8656 17.5921 10.6125 18.3625 10.6125C19.0356 10.6125 19.5817 10.8105 20.0004 11.209C20.2511 11.4431 20.4384 11.7814 20.5632 12.2218L19.4642 12.4846C19.4007 12.1991 19.2649 11.9735 19.0587 11.8101C18.8521 11.6446 18.6014 11.5618 18.3062 11.5618C17.8983 11.5618 17.5683 11.7083 17.3152 12.0011C17.0607 12.2928 16.9348 12.768 16.9348 13.4231C16.9348 14.118 17.0596 14.6124 17.3093 14.9076C17.5589 15.2027 17.8841 15.3493 18.2837 15.3493C18.5789 15.3493 18.8345 15.2558 19.0458 15.0686C19.2593 14.8813 19.4117 14.5875 19.503 14.1841L20.5806 14.5248C20.4137 15.1248 20.1403 15.5714 19.7551 15.8617C19.3734 16.1534 18.885 16.2986 18.2947 16.2986C17.5664 16.2986 16.9664 16.0489 16.4958 15.551C16.0255 15.0517 15.7903 14.3703 15.7903 13.5051C15.7897 12.5891 16.026 11.8784 16.499 11.3722L16.499 11.3721ZM10.0369 12.0791C10.1618 11.7994 10.3335 11.5487 10.5493 11.3256C10.7666 11.1025 11.0028 10.938 11.2611 10.83C11.6031 10.6859 11.9979 10.6128 12.4455 10.6128C13.2555 10.6128 13.9035 10.8635 14.3896 11.3663C14.8755 11.869 15.1179 12.5674 15.1179 13.4628C15.1179 14.3497 14.8779 15.0444 14.3944 15.5448C13.912 16.0465 13.2675 16.2972 12.46 16.2972C11.6416 16.2972 10.991 16.0476 10.5099 15.5497C10.0275 15.0504 9.78512 14.3642 9.78512 13.488C9.78593 12.9285 9.87004 12.4581 10.0369 12.0791L10.0369 12.0791ZM4.46174 10.706H6.48967C6.9469 10.706 7.29621 10.7409 7.53621 10.8105C7.85897 10.9064 8.13514 11.0757 8.36414 11.317C8.59343 11.5594 8.76968 11.857 8.88968 12.2074C9.00968 12.5591 9.06968 12.9922 9.06968 13.507C9.06968 13.9594 9.01316 14.3494 8.90039 14.6781C8.76244 15.0777 8.5669 15.4015 8.3111 15.6487C8.11904 15.836 7.85868 15.9822 7.53219 16.088C7.28737 16.1649 6.95871 16.2045 6.54943 16.2045H4.4615L4.46174 10.706ZM23.9916 31.4496H6.00802V30.2496H23.9909L23.9916 31.4496ZM23.9916 27.2003H6.00802V26.0003H23.9909L23.9916 27.2003ZM24.744 16.2035L23.5247 14.3028L22.302 16.2035H20.9713L22.8492 13.3342L21.1465 10.7062H22.4448L23.5465 12.4728L24.6265 10.7062H25.913L24.2041 13.3763L26.0833 16.2035H24.744Z',
    fill: '#8E99B2'
  }));
}

function PiHtmlAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM15.205 10.384H17.023L18.1137 14.4857L19.1926 10.384H21.0143V16.3971H19.8863V11.6643L18.6922 16.3971H17.5233L16.334 11.6643V16.3971H15.2061L15.2063 10.384H15.205ZM9.65986 10.384H14.4382V11.4016H12.6586V16.3972H11.4441L11.4444 11.4016H9.65992L9.65986 10.384ZM5.24263 16.3971H4.02816V10.384H5.24263V12.7506H7.62096V10.384H8.83543V16.3971H7.62096V13.7678H5.24263V16.3971ZM23.9914 31.4486H6.00789V30.2486H23.9907L23.9914 31.4486ZM23.9914 27.1993H6.00789V25.9993H23.9907L23.9914 27.1993ZM26.4849 16.3965H22.2525V10.4324H23.4669V15.3834H26.4862V16.3964L26.4849 16.3965Z',
    fill: '#8E99B2'
  }));
}

function PiPptAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '30',
    height: '40',
    viewBox: '0 0 30 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M10.2798 13.0206C10.4419 12.9582 10.5678 12.8599 10.6591 12.7254C10.7502 12.5923 10.796 12.4361 10.796 12.2586C10.796 12.0389 10.7312 11.8589 10.6039 11.7175C10.4756 11.5747 10.3122 11.4858 10.1156 11.4499C9.9715 11.4234 9.68008 11.4092 9.24215 11.4092H8.65527V13.1157H9.32009C9.79983 13.1155 10.1202 13.0844 10.2798 13.0206L10.2798 13.0206Z',
    fill: '#8E99B2'
  }), React__default.createElement("path", {
    d: 'M15.8833 13.0206C16.0454 12.9582 16.1713 12.8599 16.2626 12.7254C16.3537 12.5923 16.3995 12.4361 16.3995 12.2586C16.3995 12.0389 16.3347 11.8589 16.2074 11.7175C16.0791 11.5747 15.9157 11.4858 15.7191 11.4499C15.575 11.4234 15.2836 11.4092 14.8457 11.4092H14.2588V13.1157H14.9236C15.4033 13.1155 15.7237 13.0844 15.8833 13.0206L15.8833 13.0206Z',
    fill: '#8E99B2'
  }), React__default.createElement("path", {
    d: 'M27.6 0.799805H2.4C1.08 0.799805 0 1.8798 0 3.1998V36.7998C0 38.1198 1.08 39.1998 2.4 39.1998H27.6C28.92 39.1998 30 38.1198 30 36.7998V3.1998C30 1.8798 28.92 0.799805 27.6 0.799805ZM18.2181 10.3916H22.9964V11.4092H21.2157V16.4047H20.0012L20.0015 11.4092H18.2183L18.2181 10.3916ZM13.045 10.3916H14.9939C15.7319 10.3916 16.2132 10.4216 16.4374 10.4816C16.7819 10.5716 17.0698 10.7671 17.3026 11.0695C17.5353 11.3719 17.6518 11.762 17.6518 12.242C17.6518 12.6103 17.5846 12.9199 17.4502 13.1719C17.317 13.424 17.1467 13.6209 16.9402 13.7647C16.7326 13.9075 16.5226 14.0023 16.3102 14.0491C16.0209 14.1067 15.6009 14.1343 15.0513 14.1343H14.2592V16.4036H13.0447L13.045 10.3916ZM7.44219 10.3916H9.39113C10.1291 10.3916 10.6104 10.4216 10.8346 10.4816C11.1791 10.5716 11.467 10.7671 11.6998 11.0695C11.9325 11.3719 12.0491 11.762 12.0491 12.242C12.0491 12.6103 11.9819 12.9199 11.8474 13.1719C11.7143 13.424 11.5439 13.6209 11.3374 13.7647C11.1298 13.9075 10.9198 14.0023 10.7074 14.0491C10.4181 14.1067 9.99809 14.1343 9.44848 14.1343H8.65642V16.4036L7.44222 16.4034L7.44219 10.3916ZM23.9912 31.4492H6.00768V30.2492H23.9905L23.9912 31.4492ZM23.9912 27.1999H6.00768V25.9999H23.9905L23.9912 27.1999Z',
    fill: '#8E99B2'
  }));
}

function PiPdfAtachmentIcon() {
  return React__default.createElement("svg", {
    width: '30',
    height: '39',
    viewBox: '0 0 30 39',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M27.6 0H2.4C1.08 0 0 1.08 0 2.4V36C0 37.32 1.08 38.4 2.4 38.4H27.6C28.92 38.4 30 37.32 30 36V2.4C30 1.08 28.92 0 27.6 0ZM18.888 9.58423H23.0111V10.6018H20.1022V12.0263H22.6125V13.0439H20.1022V15.5987H18.888V9.58423ZM12.81 9.58423H15.0289C15.5293 9.58423 15.911 9.62253 16.1737 9.69941C16.5265 9.80387 16.8289 9.98735 17.0809 10.2539C17.3316 10.519 17.5237 10.8432 17.6558 11.2283C17.7878 11.6135 17.8526 12.0863 17.8526 12.6504C17.8526 13.1448 17.7902 13.572 17.6678 13.9296C17.5178 14.3665 17.303 14.7203 17.0247 14.9917C16.8136 15.1969 16.5291 15.3576 16.1716 15.4717C15.904 15.5558 15.5451 15.5976 15.0964 15.5976H12.8116L12.8111 9.5842L12.81 9.58423ZM7.21077 9.58423H9.1597C9.89767 9.58423 10.379 9.61423 10.6032 9.67423C10.9477 9.76423 11.2356 9.95977 11.4684 10.2622C11.7011 10.5646 11.8177 10.9546 11.8177 11.4346C11.8177 11.8029 11.7504 12.1126 11.6173 12.3646C11.4842 12.6166 11.3138 12.8135 11.1073 12.9573C10.9008 13.1001 10.6908 13.1949 10.4773 13.2418C10.1869 13.2994 9.76799 13.327 9.21839 13.327H8.42632V15.5963H7.21076L7.21077 9.58423ZM23.9916 30.6494H6.00802V29.4494H23.9909L23.9916 30.6494ZM23.9916 26.4001H6.00802V25.2001H23.9909L23.9916 26.4001Z',
    fill: '#8E99B2'
  }));
}

var _excluded$q = ["libraryType"];
function generateAttachmentsTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$q);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$q(props);
  } else {
    return DefaultTemplate$e();
  }
}
function AtlasKitTemplate$q(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  var _useState = React.useState(false),
    isModalOpen = _useState[0],
    setIsOModalOpen = _useState[1];
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
  return React__default.createElement("div", {
    className: PiAttachmentClass(theme)
  }, React__default.createElement("div", {
    className: 'main-container'
  }, props.attachmentItem.thumbnail ? React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: 'image_Container'
  }, React__default.createElement("img", {
    alt: 'loading',
    src: props.attachmentItem.thumbnail
  })), React__default.createElement("div", {
    className: 'label label-image'
  }, React__default.createElement(PiTooltip, {
    content: props.attachmentItem.name,
    libraryType: "atalskit"
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, props.attachmentItem.name)))) : React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: 'icon-container'
  }, getIcon$1(props.attachmentItem.type)), React__default.createElement("div", {
    className: 'label'
  }, React__default.createElement(PiTooltip, {
    content: props.attachmentItem.name,
    libraryType: "atalskit"
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, props.attachmentItem.name)))), React__default.createElement("div", {
    className: 'overlay'
  }, React__default.createElement("div", {
    onClick: props.onClickDownload,
    className: 'icon_class'
  }, props.attachmentItem.downloadUrl ? React__default.createElement("div", {
    onClick: function onClick() {
      return downloadImage(props.attachmentItem);
    }
  }, React__default.createElement(PiAttachmentDownloadIcon, null)) : React__default.createElement(PiAttachmentDownloadIcon, null)), (props.attachmentItem.type === 'pdf' || props.attachmentItem.type === 'xlsx' || props.attachmentItem.type === 'docx' || props.attachmentItem.type === 'ppt' || props.attachmentItem.type === 'csv') && React__default.createElement("a", {
    target: '_blank',
    href: props.attachmentItem.url || props.attachmentItem.downloadUrl,
    className: 'icon_class',
    rel: 'noreferrer'
  }, React__default.createElement(PiZoomIcon, null)), (props.attachmentItem.type === 'jpg' || props.attachmentItem.type === 'jpeg' || props.attachmentItem.type === 'png' || props.attachmentItem.type === 'svg') && React__default.createElement("div", {
    onClick: function onClick() {
      return previewImage(props.attachmentItem);
    },
    className: 'icon_class'
  }, React__default.createElement(PiZoomIcon, null)), props.attachmentItem.isDeleteImg && React__default.createElement("div", {
    onClick: function onClick() {
      return deleteImage(props.attachmentItem);
    }
  }, React__default.createElement(PiDeleteIcon, null)))), React__default.createElement("div", {
    className: 'Model-container'
  }, React__default.createElement(PiModal$1, {
    isOpen: isModalOpen,
    width: 'auto'
  }, React__default.createElement("div", {
    id: 'model-div',
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      maxWidth: '600px'
    }
  }, React__default.createElement("div", {
    style: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      right: 0
    },
    onClick: function onClick() {
      return setIsOModalOpen(false);
    }
  }, getIcon$1('close')), React__default.createElement("img", {
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
        return React__default.createElement(PiCssAtachmentIcon, null);
      }
    case 'xlsx':
      {
        return React__default.createElement(PiXlsxAtachmentIcon, null);
      }
    case 'zip':
      {
        return React__default.createElement(PiZipAtachmentIcon, null);
      }
    case 'docx':
      {
        return React__default.createElement(PiDocAtachmentIcon, null);
      }
    case 'html':
      {
        return React__default.createElement(PiHtmlAtachmentIcon, null);
      }
    case 'ppt':
      {
        return React__default.createElement(PiPptAtachmentIcon, null);
      }
    case 'pdf':
      {
        return React__default.createElement(PiPdfAtachmentIcon, null);
      }
    case 'close':
      {
        return React__default.createElement(PiCloseIcon, null);
      }
    default:
      {
        return React__default.createElement(PiCssAtachmentIcon, null);
      }
  }
}
function DefaultTemplate$e() {
  return React__default.createElement(React.Fragment, null);
}

var PiAttachmentsProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiAttachmentsProps, _BaseProps);
  function PiAttachmentsProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiAttachmentsProps;
}(BaseProps);
function PiAttachments(props) {
  var newprops = new PiAttachmentsProps();
  return generateAttachmentsTemplate(_extends({}, newprops, props));
}

var _templateObject$p;
var PiAttachmentListClass = function PiAttachmentListClass() {
  return css.css(_templateObject$p || (_templateObject$p = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n"])));
};

var _excluded$r = ["libraryType"];
function generateAttachmentListTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$r);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$r(props);
  } else {
    return DefaultTemplate$f();
  }
}
function AtlasKitTemplate$r(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  function deleteImage(file) {
    props.onClickDelete(file);
  }
  function downloadImage(file) {
    props.onClickDownload(file);
  }
  function previewImage(file) {
    props.onClickPreview(file);
  }
  return React__default.createElement("div", {
    className: PiAttachmentListClass()
  }, props.attachmentItems.map(function (attachment, index) {
    return React__default.createElement("div", {
      key: index,
      className: 'main'
    }, React__default.createElement(PiAttachments, {
      attachmentItem: attachment,
      onClickDelete: function onClickDelete() {
        return deleteImage(attachment);
      },
      onClickDownload: function onClickDownload() {
        return downloadImage(attachment);
      },
      onClickPreview: function onClickPreview() {
        return previewImage(attachment);
      }
    }));
  }));
}
function DefaultTemplate$f() {
  return React__default.createElement(React.Fragment, null);
}

var PiAttachmentListProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiAttachmentListProps, _BaseProps);
  function PiAttachmentListProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiAttachmentListProps;
}(BaseProps);
function PiAttachmentList(props) {
  var newprops = new PiAttachmentListProps();
  return generateAttachmentListTemplate(_extends({}, newprops, props));
}

var _templateObject$q;
var PiTabClass = function PiTabClass(props) {
  return css.css(_templateObject$q || (_templateObject$q = _taggedTemplateLiteralLoose(["\n  .css-127ggxn-TabListWithMode {\n    padding: 0 16px;\n    border-bottom: 2px solid ", ";\n  }\n\n  .css-127ggxn-TabListWithMode::before {\n    display: none;\n  }\n\n  div[role='tab'] {\n    overflow: hidden;\n    span {\n      color: ", ";\n    }\n  }\n  div[role='tablist'] {\n    gap: 16px;\n    &::before {\n      background-color: unset !important;\n    }\n  }\n\n  div[role='tab'],\n  div[role='tab'][aria-selected='true'] {\n    // background: ", ";\n    color: ", ";\n    font-weight: 400;\n    font-size: 14px;\n    padding: 10px 0;\n  }\n\n  div[role='tab']::after {\n    content: '';\n    width: 100% !important;\n    height: 2px !important;\n    background-color: ", ";\n    border-radius: none !important;\n    border: none !important;\n    left: 0 !important;\n    right: 0 !important;\n    transform: translateX(-100%) !important;\n    transition: all 0.3s ease;\n    bottom: 0 !important;\n    position: absolute !important;\n  }\n\n  div[role='tab']:hover {\n    color: ", ";\n  }\n\n  div[role='tab'][aria-selected='true']::after {\n    transform: translateX(0) !important;\n  }\n\n  div[role='tab'][aria-selected='true'] {\n    color: ", " !important;\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])), props.primaryBG, props.primaryBG, props.tabHeaderBG, props.tabColor, props.tabBorder, props.tabBorder, props.tabBorder);
};

function PiTabGroup(props) {
  var theme = React.useContext(PiThemeContext);
  var handleChange = function handleChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return React__default.createElement("div", {
    className: PiTabClass(theme) + " pitabs-wrapper"
  }, React__default.createElement(Tabs__default, {
    id: props.id,
    selected: props.selected,
    onChange: handleChange
  }, props.children));
}
var tabGroup = React__default.memo(PiTabGroup);

function PiTabHeader(props) {
  return React__default.createElement(Tabs.Tab, null, props.children);
}
var PiTabHeader$1 = React__default.memo(PiTabHeader);

function PiTabHeaderPanel(props) {
  return React__default.createElement(Tabs.TabList, null, props.children, props.items && props.items.map(function (row) {
    return React__default.createElement(PiTabHeader$1, null, row);
  }));
}
var tabHeaderGroup = React__default.memo(PiTabHeaderPanel);

function PiTabPanel(props) {
  return React__default.createElement(Tabs.TabPanel, null, props.children);
}
var tabPanel = React__default.memo(PiTabPanel);

function PiModalHeader(props) {
  return React__default.createElement(Modal.ModalHeader, null, props.children);
}
var modalHeader = React__default.memo(PiModalHeader);

function PiModalTitle(props) {
  return React__default.createElement(Modal.ModalTitle, {
    appearance: props.appearance,
    isMultiline: props.isMultiline
  }, props.children);
}
var modalTitle = React__default.memo(PiModalTitle);

function PiModalFooter(props) {
  return React__default.createElement(Modal.ModalFooter, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      width: '100%',
      justifyContent: 'end'
    }
  }, props.children));
}
var modalFooter = React__default.memo(PiModalFooter);

function PiModalBody(props) {
  return React__default.createElement(Modal.ModalBody, null, props.children);
}
var modalBody = React__default.memo(PiModalBody);

var _templateObject$r;
var PiModalClass = css.css(_templateObject$r || (_templateObject$r = _taggedTemplateLiteralLoose(["\n  .css-4kplgf {\n    border-radius: 8px !important;\n    /*box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12) !important;*/\n  }\n"])));

function PiModal(props) {
  return React__default.createElement("div", {
    className: PiModalClass
  }, React__default.createElement(Modal.ModalTransition, null, props.isOpen && React__default.createElement(Modal__default, {
    onClose: props.onClose,
    width: props.width,
    height: props.height
  }, props.children)));
}
var PiModal$1 = React__default.memo(PiModal);

var _excluded$s = ["columns", "defaultColDef", "exportHandler"];
function AgGridRoot(_ref) {
  var columns = _ref.columns,
    defaultColDef = _ref.defaultColDef,
    exportHandler = _ref.exportHandler,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  var sidebarPanel = {
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
      action: function action() {
        if (exportHandler.action) {
          exportHandler.action(params);
        } else {
          var body = {
            method: exportHandler.method
          };
          if (exportHandler.method !== 'GET') {
            body['body'] = JSON.stringify(_extends({}, exportHandler.body));
          }
          fetch(exportHandler.url, body).then(function (resp) {
            return resp;
          })["catch"](function (err) {
            return err;
          });
        }
      }
    }];
    return result;
  }
  return React__default.createElement("div", {
    id: 'myGrid',
    style: {
      height: '100vh',
      width: '100%'
    },
    className: 'ag-theme-alpine'
  }, React__default.createElement(agGridReact.AgGridReact, Object.assign({
    reactUi: true,
    sideBar: sidebarPanel,
    defaultColDef: defaultColDef,
    getContextMenuItems: exportHandler ? getContextMenuItems : undefined
  }, props), columns.map(function (column) {
    return React__default.createElement(agGridReact.AgGridColumn, Object.assign({}, column, {
      key: column.field
    }));
  })));
}

var withGridStatic = function withGridStatic(WrapperComponent) {
  return function (_ref) {
    var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
    return React__default.createElement(WrapperComponent, Object.assign({}, props));
  };
};

var withGridInfinite = function withGridInfinite(WrapperComponent) {
  return function (_ref) {
    var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
    var onGridReady = function onGridReady(params) {
      console.log('infinite');
      if (props.onGridReady) {
        props.onGridReady(params);
      }
      var dataSource = InfiniteSideDatasource();
      params.api.setDatasource(dataSource);
    };
    function InfiniteSideDatasource() {
      return {
        getRows: function getRows(params) {
          console.log('[Datasource] - rows requested by grid: ', params);
          setTimeout(function () {
            var requestInfo = Object.assign({}, props.requestInfo);
            var body = {
              method: requestInfo.method
            };
            if (requestInfo.method !== 'GET') {
              body['body'] = JSON.stringify(_extends({
                startRow: params.startRow,
                endRow: params.endRow
              }, requestInfo.body));
            } else {
              requestInfo.url = requestInfo.url + ("?startRow=" + params.startRow + "&endRow=" + params.endRow);
            }
            fetch(requestInfo.url, body).then(function (resp) {
              return resp.json();
            }).then(function (data) {
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
    return React__default.createElement(WrapperComponent, Object.assign({
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
};

var withGridPagination = function withGridPagination(WrapperComponent) {
  return function (_ref) {
    var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
    var onGridReady = function onGridReady(params) {
      if (props.onGridReady) {
        props.onGridReady(params);
      }
      var dataSource = ServerSideDatasource();
      params.api.setServerSideDatasource(dataSource);
    };
    function ServerSideDatasource() {
      return {
        getRows: function getRows(params) {
          console.log('[Datasource] - rows requested by grid: ', params.request, props);
          setTimeout(function () {
            var requestInfo = Object.assign({}, props.requestInfo);
            var body = {
              method: requestInfo.method
            };
            if (requestInfo.method !== 'GET') {
              body['body'] = JSON.stringify(_extends({
                startRow: params.request.startRow,
                endRow: params.request.endRow
              }, requestInfo.body));
            } else {
              requestInfo.url = requestInfo.url + ("?startRow=" + params.request.startRow + "&endRow=" + params.request.endRow);
            }
            fetch(requestInfo.url, body).then(function (resp) {
              return resp.json();
            }).then(function (data) {
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
    return React__default.createElement(WrapperComponent, Object.assign({
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
};

function AgGridTemplate(props) {
  var defaultColDef = _extends({
    sortable: true,
    rowDrag: false,
    resizable: true,
    enableRowGroup: true,
    enableValue: true,
    enablePivot: true,
    flex: 1
  }, props === null || props === void 0 ? void 0 : props.defaultColDef);
  var GRIDCOMPONENT = getGridComponent(props);
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
  return React__default.createElement(GRIDCOMPONENT, Object.assign({}, props, {
    defaultColDef: defaultColDef
  }));
}

var _excluded$t = ["libraryType"];
function generateGridTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$t);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AgGridTemplate(props);
  } else {
    return DefaultTemplate$g();
  }
}
function DefaultTemplate$g() {
  return React__default.createElement("div", null);
}

var PiGridProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiGridProps, _BaseProps);
  function PiGridProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.columns = [];
    return _this;
  }
  return PiGridProps;
}(BaseProps);
function PiGrid(props) {
  var newprops = new PiGridProps();
  return generateGridTemplate(_extends({}, newprops, props));
}

var _templateObject$s;
var PiproductCardlass = function PiproductCardlass(props) {
  return css.css(_templateObject$s || (_templateObject$s = _taggedTemplateLiteralLoose(["\n  flex: 0 0 25%;\n  max-width: 100%;\n  background: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n  .image{\n    display:block;\n    text-align: center;\n    box-sizing: border-box;\n    img{\n      margin-left: auto;\n      margin-right: auto;\n      max-width: 100%;\n      height: auto;\n    }\n    a{\n      display: flex;\n      cursor: pointer;\n    }\n  }\n  .caption {\n      padding: 0 20px;\n      min-height: 180px;\n  }\n  .button-group{\n    border-top: 1px solid ", ";\n    display: flex;\n    \n\n    button{\n      width: 100%;\n      border-radius:0px !important;\n      text-transform: uppercase;\n      text-align: center;\n      cursor: pointer;\n      &:hover {\n        background: ", ";\n      }\n    }\n\n    .button-add-to-cart{\n      width:60%;\n      button{\n        border:none;\n      }\n    }\n    .button-add-to-wishlist, .button-compare{\n      width: 20%;\n      border-left: 1px solid ", " !important;\n    }\n\n    button:not(:disabled), [type=\"button\"]:not(:disabled){\n      cursor: pointer;\n    }\n  }\n\n"])), props.white, props.primaryColor, props.primaryColor, props.primaryHoverBG, props.white);
};

function PiAddToCartIcon() {
  return React__default.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M1 1H3L3.4 3M3.4 3H19L15 11H5M3.4 3L5 11M5 11L2.707 13.293C2.077 13.923 2.523 15 3.414 15H15M15 15C14.4696 15 13.9609 15.2107 13.5858 15.5858C13.2107 15.9609 13 16.4696 13 17C13 17.5304 13.2107 18.0391 13.5858 18.4142C13.9609 18.7893 14.4696 19 15 19C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15ZM7 17C7 17.5304 6.78929 18.0391 6.41421 18.4142C6.03914 18.7893 5.53043 19 5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15C5.53043 15 6.03914 15.2107 6.41421 15.5858C6.78929 15.9609 7 16.4696 7 17Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function PiAddToWishListIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M3.34255 7.77795C3.5687 7.23198 3.90017 6.7359 4.31804 6.31804C4.7359 5.90017 5.23198 5.5687 5.77795 5.34255C6.32392 5.1164 6.90909 5 7.50004 5C8.09099 5 8.67616 5.1164 9.22213 5.34255C9.7681 5.5687 10.2642 5.90017 10.682 6.31804L12 7.63604L13.318 6.31804C14.162 5.47412 15.3066 5.00001 16.5 5.00001C17.6935 5.00001 18.8381 5.47412 19.682 6.31804C20.526 7.16196 21.0001 8.30656 21.0001 9.50004C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2642 3.5687 11.7681 3.34255 11.2221C3.1164 10.6762 3 10.091 3 9.50004C3 8.90909 3.1164 8.32392 3.34255 7.77795Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function PiCompareIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M15.6038 4.89191C15.9975 5.28137 16.3932 5.67268 16.787 6.06214C17.4104 6.67864 18.0337 7.29512 18.6571 7.91162C18.8008 8.05374 18.9445 8.19587 19.0882 8.338L19.0882 6.77092C18.6944 7.16038 18.2987 7.55169 17.9049 7.94115L16.0349 9.79063C15.8912 9.93276 15.7475 10.0749 15.6038 10.217C15.4003 10.4182 15.2753 10.7154 15.2753 10.9996C15.2753 11.271 15.3966 11.5958 15.6038 11.7823C15.8165 11.9761 16.0965 12.1201 16.3951 12.1071C16.6918 12.0942 16.9718 11.9945 17.1864 11.7823C17.5802 11.3928 17.9759 11.0015 18.3697 10.612C18.993 9.99554 19.6164 9.37907 20.2397 8.76256C20.3834 8.62044 20.5271 8.47831 20.6708 8.33618C21.0982 7.91351 21.1001 7.19362 20.6708 6.7691C20.2771 6.37964 19.8814 5.98832 19.4876 5.59887C18.8642 4.98422 18.2409 4.36771 17.6194 3.75124C17.4757 3.60912 17.332 3.46699 17.1883 3.32486C16.9849 3.12367 16.6844 3 16.397 3C16.1226 3 15.7941 3.11998 15.6056 3.32486C15.4097 3.53528 15.2641 3.81216 15.2772 4.10749C15.2902 4.40281 15.391 4.67968 15.6038 4.89194L15.6038 4.89191Z",
    fill: "white"
  }), React__default.createElement("path", {
    d: "M19.8796 6.44613L19.5343 6.44613L18.5937 6.44613L17.2033 6.44613L15.5068 6.44613L13.648 6.44613L11.7704 6.44613L10.0198 6.44613L8.53985 6.44613L7.47605 6.44613C7.30808 6.44613 7.13824 6.44429 6.97029 6.44613L6.94789 6.44613C6.66048 6.44613 6.35998 6.5698 6.15655 6.77099C5.96246 6.96295 5.81688 7.27858 5.82808 7.55362C5.84115 7.83972 5.93633 8.13688 6.15655 8.33625C6.37491 8.5356 6.64552 8.66111 6.94789 8.66111L7.29315 8.66111L8.23376 8.66111L9.62416 8.66111L11.3206 8.66111L13.1795 8.66111L15.057 8.66111L16.8076 8.66111L18.2876 8.66111L19.3514 8.66111C19.5194 8.66111 19.6892 8.66296 19.8572 8.66111L19.8796 8.66111C20.167 8.66111 20.4675 8.53744 20.6709 8.33625C20.865 8.14429 21.0106 7.82866 20.9994 7.55362C20.9863 7.26752 20.8911 6.97036 20.6709 6.77099C20.4526 6.57165 20.1838 6.44613 19.8796 6.44613V6.44613Z",
    fill: "white"
  }), React__default.createElement("path", {
    d: "M6.81166 12.216C6.41787 12.6055 6.02221 12.9968 5.62842 13.3862L3.75836 15.2357C3.61466 15.3778 3.47095 15.52 3.32724 15.6621C2.89987 16.0848 2.89799 16.8047 3.32724 17.2292C3.72103 17.6186 4.1167 18.01 4.51049 18.3994C5.13385 19.0159 5.75718 19.6324 6.38054 20.2489C6.52424 20.391 6.66795 20.5332 6.81166 20.6753C7.01509 20.8765 7.31558 21.0002 7.603 21.0002C7.87735 21.0002 8.20581 20.8802 8.39433 20.6753C8.59029 20.4649 8.73587 20.188 8.7228 19.8927C8.70974 19.5992 8.60896 19.3223 8.39433 19.11C8.00054 18.7206 7.60487 18.3293 7.21108 17.9398C6.58772 17.3233 5.96439 16.7068 5.34103 16.0903C5.19733 15.9482 5.05362 15.8061 4.90991 15.6639L4.90991 17.231L8.39426 13.785C8.59769 13.5838 8.72273 13.2866 8.72273 13.0023C8.72273 12.731 8.60142 12.4062 8.39426 12.2197C8.1815 12.0259 7.90154 11.8819 7.60293 11.8948C7.30619 11.9041 7.02625 12.0038 6.81159 12.216L6.81166 12.216Z",
    fill: "white"
  }), React__default.createElement("path", {
    d: "M4.12041 17.5503L4.46567 17.5503L5.40628 17.5503L6.79668 17.5503L8.49316 17.5503L10.352 17.5503L12.2295 17.5503L13.9801 17.5503L15.4601 17.5503L16.5239 17.5503C16.6919 17.5503 16.8617 17.5521 17.0297 17.5503L17.0521 17.5503C17.3395 17.5503 17.64 17.4266 17.8434 17.2254C18.0375 17.0334 18.1831 16.7178 18.1719 16.4428C18.1588 16.1567 18.0636 15.8595 17.8434 15.6601C17.6251 15.4608 17.3545 15.3353 17.0521 15.3353L16.7068 15.3353L15.7662 15.3353L14.3758 15.3353L12.6793 15.3353L10.8205 15.3353L8.94296 15.3353L7.19235 15.3353L5.71237 15.3353L4.64857 15.3353C4.4806 15.3353 4.31076 15.3334 4.1428 15.3353L4.12041 15.3353C3.833 15.3353 3.53251 15.459 3.32907 15.6601C3.13498 15.8521 2.98941 16.1677 3.0006 16.4428C3.01367 16.7289 3.10885 17.026 3.32907 17.2254C3.54743 17.4247 3.81617 17.5503 4.12041 17.5503Z",
    fill: "white"
  }));
}

var _excluded$u = ["libraryType"];
function generateProductCardTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$s(props);
  } else {
    return defaultTemplate$b();
  }
}
function AtlasKitTemplate$s(props) {
  var theme = React.useContext(PiThemeContext);
  var defaultProps = generateDefaultProps$6(_extends({}, props));
  return React__default.createElement("div", {
    className: PiproductCardlass(theme)
  }, React__default.createElement("div", {
    className: "product-thumb transition"
  }, React__default.createElement("div", {
    className: "image"
  }, React__default.createElement("a", {
    onClick: function noRefCheck() {}
  }, React__default.createElement("img", {
    src: defaultProps.src,
    alt: "",
    title: "",
    className: "img-fluid"
  }))), React__default.createElement("div", {
    className: "caption"
  }, React__default.createElement(PiButton, {
    appearance: "link",
    isDisabled: props.isDisabled,
    size: "large",
    label: defaultProps.name,
    libraryType: "atalskit",
    onClick: function noRefCheck() {}
  }), React__default.createElement(PiTypography$1, {
    component: "p"
  }, defaultProps.description)), React__default.createElement("div", {
    className: "button-group"
  }, React__default.createElement("div", {
    className: "button-add-to-cart"
  }, React__default.createElement(PiTooltip, {
    content: defaultProps.button_lable,
    libraryType: "atalskit",
    position: "top"
  }, React__default.createElement(PiButton, {
    appearance: "primary",
    label: defaultProps.button_lable,
    libraryType: "atalskit",
    onClick: props.onAddToCartHandler,
    size: "medium",
    type: "button",
    iconBefore: React__default.createElement(PiAddToCartIcon, null),
    isDisabled: props.isDisabled
  }))), React__default.createElement("div", {
    className: "button-add-to-wishlist"
  }, React__default.createElement(PiTooltip, {
    content: "Add to Wish List",
    libraryType: "atalskit",
    position: "top"
  }, React__default.createElement(PiButton, {
    appearance: "primary",
    label: "",
    libraryType: "atalskit",
    onClick: props.onAddToWishListHandler,
    size: "medium",
    type: "button",
    iconBefore: React__default.createElement(PiAddToWishListIcon, null),
    isDisabled: props.isDisabled
  }))), React__default.createElement("div", {
    className: "button-compare"
  }, React__default.createElement(PiTooltip, {
    content: "Compare this Product",
    libraryType: "atalskit",
    position: "top"
  }, React__default.createElement(PiButton, {
    appearance: "primary",
    label: "",
    libraryType: "atalskit",
    onClick: props.onCompareHandler,
    size: "medium",
    type: "button",
    iconBefore: React__default.createElement(PiCompareIcon, null),
    isDisabled: props.isDisabled
  }))))));
}
function defaultTemplate$b() {
  return React__default.createElement("div", null);
}
function generateDefaultProps$6(props) {
  var defaultProps = {
    name: props.name,
    src: props.src,
    description: props.description,
    button_lable: props.button_lable
  };
  return defaultProps;
}

var PiProductCardProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiProductCardProps, _BaseProps);
  function PiProductCardProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.isDisabled = false;
    return _this;
  }
  return PiProductCardProps;
}(BaseProps);
function PiProductCard(props) {
  var newprops = new PiProductCardProps();
  return generateProductCardTemplate(_extends({}, newprops, props));
}

var _templateObject$t;
var PiActionIconClass = function PiActionIconClass(props) {
  return css.css(_templateObject$t || (_templateObject$t = _taggedTemplateLiteralLoose(["\n  background: transparent;\n  border: none;\n  outline: none;\n  display: inline-flex;\n  cursor: pointer;\n  align-items: center;\n  svg path{\n    fill: ", ";\n  }\n\n  .icon-text{\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 20px;\n    margin-left:9px;\n    color: ", ";\n  }\n  \n"])), props.primaryBG, props.primaryBG);
};

function PiDownloadIcon() {
  return React__default.createElement("svg", {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12.75 9.75H13.5C14.7721 9.56804 15.75 8.44743 15.75 7.125C15.75 5.67525 14.5747 4.5 13.125 4.5C12.8998 4.5 12.6811 4.52837 12.4725 4.58173C11.9132 3.21381 10.5692 2.25 9 2.25C7.13463 2.25 5.58737 3.61199 5.29842 5.39578C5.05029 5.30157 4.78117 5.25 4.5 5.25C3.25736 5.25 2.25 6.25736 2.25 7.5C2.25 8.74264 3.25736 9.75 4.5 9.75H5.25C5.87132 9.75 6.375 10.2537 6.375 10.875C6.375 11.4963 5.87132 12 5.25 12H4.5C2.01472 12 0 9.98528 0 7.5C0 5.26378 1.63115 3.40853 3.76856 3.05915C4.80346 1.22065 6.77285 0 9 0C10.8804 0 12.5989 0.873288 13.7125 2.28504C16.1279 2.57515 18 4.63144 18 7.125C18 9.55855 16.2075 11.6356 13.8186 11.9773L13.6634 11.9995L12.7813 11.9996C12.7709 11.9999 12.7605 12 12.75 12C12.1287 12 11.625 11.4963 11.625 10.875C11.625 10.2537 12.1287 9.75 12.75 9.75ZM10.125 14.159L10.4545 13.8295C10.8938 13.3902 11.6062 13.3902 12.0455 13.8295C12.4848 14.2688 12.4848 14.9812 12.0455 15.4205L9.7955 17.6705C9.35616 18.1098 8.64384 18.1098 8.2045 17.6705L5.9545 15.4205C5.51516 14.9812 5.51516 14.2688 5.9545 13.8295C6.39384 13.3902 7.10616 13.3902 7.5455 13.8295L7.875 14.159V5.25C7.875 4.62868 8.37868 4.125 9 4.125C9.62132 4.125 10.125 4.62868 10.125 5.25V14.159Z',
    fill: 'white'
  }));
}

function PiPrintIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.00039 4.80039V8.40039H4.80039C4.16387 8.40039 3.55342 8.65325 3.10333 9.10333C2.65325 9.55342 2.40039 10.1639 2.40039 10.8004V14.4004C2.40039 15.0369 2.65325 15.6474 3.10333 16.0974C3.55342 16.5475 4.16387 16.8004 4.80039 16.8004H6.00039V19.2004C6.00039 19.8369 6.25325 20.4474 6.70333 20.8974C7.15342 21.3475 7.76387 21.6004 8.40039 21.6004H15.6004C16.2369 21.6004 16.8474 21.3475 17.2974 20.8974C17.7475 20.4474 18.0004 19.8369 18.0004 19.2004V16.8004H19.2004C19.8369 16.8004 20.4474 16.5475 20.8974 16.0974C21.3475 15.6474 21.6004 15.0369 21.6004 14.4004V10.8004C21.6004 10.1639 21.3475 9.55342 20.8974 9.10333C20.4474 8.65325 19.8369 8.40039 19.2004 8.40039H18.0004V4.80039C18.0004 4.16387 17.7475 3.55342 17.2974 3.10333C16.8474 2.65325 16.2369 2.40039 15.6004 2.40039H8.40039C7.76387 2.40039 7.15342 2.65325 6.70333 3.10333C6.25325 3.55342 6.00039 4.16387 6.00039 4.80039ZM15.6004 4.80039H8.40039V8.40039H15.6004V4.80039ZM15.6004 14.4004H8.40039V19.2004H15.6004V14.4004Z",
    fill: "#B6C1D6"
  }));
}

function PiFilterIcon() {
  return React__default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61493 13.8979C8.98484 14.1568 9.5 13.8944 9.5 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z",
    fill: "#B6C1D6"
  }));
}

function PiSortIcon() {
  return React__default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839V4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14286 12.8125 7.14286H7.5625C7.32086 7.14286 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z",
    fill: "#B6C1D6"
  }));
}

function PiMailIcon() {
  return React__default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M2.40332 7.0606L11.9997 11.8582L21.5961 7.0606C21.5606 6.44914 21.2926 5.87439 20.8471 5.45408C20.4016 5.03376 19.8122 4.79969 19.1997 4.7998H4.79972C4.18722 4.79969 3.59786 5.03376 3.15233 5.45408C2.70681 5.87439 2.43885 6.44914 2.40332 7.0606V7.0606Z",
    fill: "#B6C1D6"
  }), React__default.createElement("path", {
    d: "M21.6004 9.74121L12.0004 14.5412L2.40039 9.74121V16.7996C2.40039 17.4361 2.65325 18.0466 3.10333 18.4967C3.55342 18.9468 4.16387 19.1996 4.80039 19.1996H19.2004C19.8369 19.1996 20.4474 18.9468 20.8974 18.4967C21.3475 18.0466 21.6004 17.4361 21.6004 16.7996V9.74121Z",
    fill: "#B6C1D6"
  }));
}

function PiMoreIcon() {
  return React__default.createElement("svg", {
    width: "5",
    height: "20",
    viewBox: "0 0 5 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.989258 2C0.989258 0.89543 1.88376 0 2.9872 0C4.09063 0 4.98513 0.89543 4.98513 2C4.98513 3.10457 4.09063 4 2.9872 4C1.88376 4 0.989258 3.10457 0.989258 2ZM0.989258 10C0.989258 8.89543 1.88376 8 2.9872 8C4.09063 8 4.98513 8.89543 4.98513 10C4.98513 11.1046 4.09063 12 2.9872 12C1.88376 12 0.989258 11.1046 0.989258 10ZM0.989258 18C0.989258 16.8954 1.88376 16 2.9872 16C4.09063 16 4.98513 16.8954 4.98513 18C4.98513 19.1046 4.09063 20 2.9872 20C1.88376 20 0.989258 19.1046 0.989258 18Z",
    fill: "#134C85"
  }));
}

var _excluded$v = ["libraryType"],
  _excluded2$a = ["appearance"];
function generateActionIconTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$v);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$t(props);
  } else {
    return defaultTemplate$c();
  }
}
function AtlasKitTemplate$t(_ref2) {
  var appearance = _ref2.appearance,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$a);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("button", Object.assign({}, props, {
    className: PiActionIconClass(theme)
  }), getIcon$2(appearance), React__default.createElement("span", {
    className: "icon-text"
  }, props.icontext));
}
function getIcon$2(appearance) {
  switch (appearance) {
    case 'download':
      {
        return React__default.createElement(PiDownloadIcon, null);
      }
    case 'print':
      {
        return React__default.createElement(PiPrintIcon, null);
      }
    case 'sort':
      {
        return React__default.createElement(PiSortIcon, null);
      }
    case 'filter':
      {
        return React__default.createElement(PiFilterIcon, null);
      }
    case 'mail':
      {
        return React__default.createElement(PiMailIcon, null);
      }
    case 'more':
      {
        return React__default.createElement(PiMoreIcon, null);
      }
    default:
      {
        return React__default.createElement(PiDownloadIcon, null);
      }
  }
}
function defaultTemplate$c() {
  return React__default.createElement("div", null);
}

var PiActionIconProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiActionIconProps, _BaseProps);
  function PiActionIconProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiActionIconProps;
}(BaseProps);
function PiActionIcon(props) {
  var newprops = new PiActionIconProps();
  return generateActionIconTemplate(_extends({}, newprops, props));
}

var _templateObject$u;
var PiLabelNameClass = function PiLabelNameClass(props) {
  return css.css(_templateObject$u || (_templateObject$u = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n  .label-text-div {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n     .pi-label-edit-icon {\n    width: 12px;\n    height: 12px;\n    display: flex;\n    cursor: pointer;\n    opacity: 1;\n    visibility: visible;\n    transition: all 0.5s ease;\n  }\n  &:hover {\n    .pi-label-edit-icon {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n  }\n  .label-text{\n    color: ", ";\n    margin: 4px 0px;\n    line-height: 16px;\n    display: flex;\n    align-items: center;\n    padding-left: 6px !important;\n    font-weight: 700;\n    font-size: 14px;\n    font-family: Inter;\n    color: #4e586d;\n    /*.pi-label-edit-icon {\n          padding: 10px 10px;\n\n    }*/\n    \n  }\n\n\n  .description-container {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    .copy-icon {\n      opacity:0;\n      visibility: visible;\n      cursor: pointer;\n    }\n    .description{\n      color: ", ";\n      font-size: 14px;\n      line-height: 20px;\n      font-weight: normal;\n      font-family: Inter;\n      padding-left: 6px;\n      margin: 0;\n      }\n    }\n    &:hover {\n      .copy-icon {\n        opacity:1;\n        visibility: visible;\n        transition: all 0.5s ease;\n        cursor: pointer;\n      }\n    }\n   \n  }\n}\n"])), props.labelColor, props.lablelDescription);
};

function PiEditIcon(_ref) {
  var _onClick = _ref.onClick;
  return React__default.createElement("svg", {
    width: '16',
    height: '16',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    onClick: function onClick() {
      return _onClick(true);
    }
  }, React__default.createElement("path", {
    d: 'M8.86919 0.871274C9.01679 0.718457 9.19334 0.596566 9.38854 0.512711C9.58375 0.428857 9.7937 0.384719 10.0061 0.382873C10.2186 0.381027 10.4293 0.42151 10.6259 0.501959C10.8226 0.582408 11.0012 0.701213 11.1514 0.851442C11.3017 1.00167 11.4205 1.18031 11.5009 1.37695C11.5814 1.57358 11.6218 1.78427 11.62 1.99672C11.6181 2.20916 11.574 2.41911 11.4902 2.61432C11.4063 2.80953 11.2844 2.98608 11.1316 3.13367L10.4972 3.76807L8.23479 1.50567L8.86919 0.871274ZM7.10359 2.63687L0.400391 9.34007V11.6025H2.66279L9.36679 4.89927L7.10279 2.63687H7.10359Z',
    fill: '#134C85'
  }));
}

function PiCopyIcon() {
  return React__default.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M16.2 9.60354H13.8C13.3226 9.60354 12.8648 9.4139 12.5272 9.07633C12.1897 8.73877 12 8.28093 12 7.80354V5.40354C11.9993 5.28436 12.0341 5.16768 12.1 5.06837C12.1659 4.96906 12.2599 4.89162 12.3699 4.84592C12.48 4.80022 12.6012 4.78833 12.718 4.81177C12.8349 4.83521 12.9421 4.89292 13.026 4.97754L16.626 8.57754C16.7106 8.66146 16.7683 8.76868 16.7918 8.88553C16.8152 9.00238 16.8033 9.12356 16.7576 9.23363C16.7119 9.34369 16.6345 9.43766 16.5352 9.50354C16.4359 9.56942 16.3192 9.60423 16.2 9.60354ZM13.2 6.84954V7.80354C13.2 7.96267 13.2632 8.11528 13.3757 8.2278C13.4883 8.34032 13.6409 8.40354 13.8 8.40354H14.754L13.2 6.84954Z",
    fill: "#124eb0"
  }), React__default.createElement("path", {
    d: "M14.9996 21.6035H5.39961C4.92222 21.6035 4.46438 21.4138 4.12682 21.0763C3.78925 20.7387 3.59961 20.2809 3.59961 19.8035V6.60348C3.59961 6.12609 3.78925 5.66825 4.12682 5.33068C4.46438 4.99312 4.92222 4.80348 5.39961 4.80348H12.5996C12.6786 4.80302 12.7569 4.81816 12.83 4.84801C12.9031 4.87787 12.9695 4.92187 13.0256 4.97748L16.6256 8.57748C16.6812 8.63354 16.7252 8.70003 16.7551 8.77313C16.7849 8.84624 16.8001 8.92451 16.7996 9.00348V19.8035C16.7996 20.2809 16.61 20.7387 16.2724 21.0763C15.9348 21.4138 15.477 21.6035 14.9996 21.6035ZM5.39961 6.00348C5.24048 6.00348 5.08787 6.06669 4.97535 6.17921C4.86282 6.29173 4.79961 6.44435 4.79961 6.60348V19.8035C4.79961 19.9626 4.86282 20.1152 4.97535 20.2277C5.08787 20.3403 5.24048 20.4035 5.39961 20.4035H14.9996C15.1587 20.4035 15.3114 20.3403 15.4239 20.2277C15.5364 20.1152 15.5996 19.9626 15.5996 19.8035V9.24948L12.3536 6.00348H5.39961Z",
    fill: "#124eb0"
  }), React__default.createElement("path", {
    d: "M19.7996 7.20339H17.3996C16.9222 7.20339 16.4644 7.01375 16.1268 6.67618C15.7893 6.33862 15.5996 5.88078 15.5996 5.40339V3.00339C15.5989 2.88422 15.6337 2.76754 15.6996 2.66822C15.7655 2.56891 15.8595 2.49147 15.9695 2.44577C16.0796 2.40007 16.2008 2.38818 16.3176 2.41162C16.4345 2.43507 16.5417 2.49277 16.6256 2.57739L20.2256 6.17739C20.3102 6.26131 20.3679 6.36853 20.3914 6.48538C20.4148 6.60223 20.4029 6.72341 20.3572 6.83348C20.3115 6.94355 20.2341 7.03751 20.1348 7.10339C20.0355 7.16927 19.9188 7.20408 19.7996 7.20339ZM16.7996 4.44939V5.40339C16.7996 5.56252 16.8628 5.71513 16.9754 5.82766C17.0879 5.94018 17.2405 6.00339 17.3996 6.00339H18.3536L16.7996 4.44939Z",
    fill: "#124eb0"
  }), React__default.createElement("path", {
    d: "M18.6002 19.2036H16.2002C16.0411 19.2036 15.8885 19.1404 15.7759 19.0278C15.6634 18.9153 15.6002 18.7627 15.6002 18.6036C15.6002 18.4444 15.6634 18.2918 15.7759 18.1793C15.8885 18.0668 16.0411 18.0036 16.2002 18.0036H18.6002C18.7593 18.0036 18.9119 17.9404 19.0245 17.8278C19.137 17.7153 19.2002 17.5627 19.2002 17.4036V6.84957L15.9542 3.60357H9.0002C8.84107 3.60357 8.68845 3.66679 8.57593 3.77931C8.46341 3.89183 8.4002 4.04444 8.4002 4.20357V5.40357C8.4002 5.5627 8.33698 5.71532 8.22446 5.82784C8.11194 5.94036 7.95933 6.00357 7.8002 6.00357C7.64107 6.00357 7.48845 5.94036 7.37593 5.82784C7.26341 5.71532 7.2002 5.5627 7.2002 5.40357V4.20357C7.2002 3.72618 7.38984 3.26835 7.7274 2.93078C8.06497 2.59322 8.52281 2.40357 9.0002 2.40357H16.2002C16.2792 2.40312 16.3574 2.41825 16.4305 2.44811C16.5036 2.47797 16.5701 2.52197 16.6262 2.57757L20.2262 6.17757C20.2818 6.23364 20.3258 6.30013 20.3557 6.37323C20.3855 6.44633 20.4007 6.52461 20.4002 6.60357V17.4036C20.4002 17.881 20.2106 18.3388 19.873 18.6764C19.5354 19.0139 19.0776 19.2036 18.6002 19.2036Z",
    fill: "#124eb0"
  }), React__default.createElement("path", {
    d: "M13.8 12.0035H6.6C6.44087 12.0035 6.28826 11.9403 6.17574 11.8277C6.06321 11.7152 6 11.5626 6 11.4035C6 11.2443 6.06321 11.0917 6.17574 10.9792C6.28826 10.8667 6.44087 10.8035 6.6 10.8035H13.8C13.9591 10.8035 14.1117 10.8667 14.2243 10.9792C14.3368 11.0917 14.4 11.2443 14.4 11.4035C14.4 11.5626 14.3368 11.7152 14.2243 11.8277C14.1117 11.9403 13.9591 12.0035 13.8 12.0035Z",
    fill: "#124eb0"
  }), React__default.createElement("path", {
    d: "M13.8 14.4036H6.6C6.44087 14.4036 6.28826 14.3404 6.17574 14.2279C6.06321 14.1154 6 13.9627 6 13.8036C6 13.6445 6.06321 13.4919 6.17574 13.3793C6.28826 13.2668 6.44087 13.2036 6.6 13.2036H13.8C13.9591 13.2036 14.1117 13.2668 14.2243 13.3793C14.3368 13.4919 14.4 13.6445 14.4 13.8036C14.4 13.9627 14.3368 14.1154 14.2243 14.2279C14.1117 14.3404 13.9591 14.4036 13.8 14.4036Z",
    fill: "#124eb0"
  }), React__default.createElement("path", {
    d: "M10.2 16.8035H6.6C6.44087 16.8035 6.28826 16.7403 6.17574 16.6278C6.06321 16.5153 6 16.3626 6 16.2035C6 16.0444 6.06321 15.8918 6.17574 15.7793C6.28826 15.6667 6.44087 15.6035 6.6 15.6035H10.2C10.3591 15.6035 10.5117 15.6667 10.6243 15.7793C10.7368 15.8918 10.8 16.0444 10.8 16.2035C10.8 16.3626 10.7368 16.5153 10.6243 16.6278C10.5117 16.7403 10.3591 16.8035 10.2 16.8035Z",
    fill: "#124eb0"
  }));
}

var _excluded$w = ["libraryType"];
function generateLabelNameTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$u(props);
  } else {
    return defaultTemplate$d();
  }
}
function AtlasKitTemplate$u(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  var _useState = React.useState('Copy to Clipboard'),
    copyTooltip = _useState[0],
    setCopyTooltip = _useState[1];
  var _useState2 = React.useState('11'),
    text = _useState2[0],
    setText = _useState2[1];
  var _useCopy = useCopy(text),
    copied = _useCopy[0],
    copy = _useCopy[1],
    setCopied = _useCopy[2];
  var onClickCopy = function onClickCopy(newtext) {
    try {
      text = newtext;
      return Promise.resolve(setText(newtext)).then(function () {
        setCopyTooltip('Copied');
        return Promise.resolve(copy()).then(function () {
          console.log(newtext, copied);
          setTimeout(function () {
            setCopied(false);
            setCopyTooltip('Copy to Clipboard');
          }, 3000);
          if (props.onCopyClick) {
            props.onCopyClick('copy');
          }
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return React__default.createElement("div", {
    className: PiLabelNameClass(theme) + " pi-label"
  }, React__default.createElement("div", {
    className: 'label-text-div'
  }, React__default.createElement("div", {
    className: 'field-label-div',
    style: {
      display: 'flex'
    }
  }, React__default.createElement("label", {
    className: 'label-text',
    title: props.label
  }, props.label), props.isMandatory && React__default.createElement("span", {
    className: 'mandatory-star',
    style: {
      color: 'red',
      paddingLeft: '4px'
    }
  }, "*")), props.isEditIcon && React__default.createElement("span", {
    className: 'pi-label-edit-icon',
    title: 'Edit'
  }, React__default.createElement(PiEditIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e, props.label) : null;
    }
  }))), React__default.createElement("div", {
    className: 'description-container'
  }, React__default.createElement("p", {
    className: 'description',
    title: props.description
  }, props.description), props.isCopyIcon && React__default.createElement("div", {
    onClick: function () {
      try {
        return Promise.resolve(onClickCopy(props.description));
      } catch (e) {
        return Promise.reject(e);
      }
    },
    className: 'copy-icon'
  }, React__default.createElement(PiTooltip, {
    content: copyTooltip,
    libraryType: "atalskit"
  }, React__default.createElement(PiCopyIcon, null)))));
}
function defaultTemplate$d() {
  return React__default.createElement("div", null);
}

var PiLabelNameProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiLabelNameProps, _BaseProps);
  function PiLabelNameProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.description = '';
    return _this;
  }
  return PiLabelNameProps;
}(BaseProps);
function PiLabelName(props) {
  var newprops = new PiLabelNameProps();
  return generateLabelNameTemplate(_extends({}, newprops, props));
}

var _templateObject$v;
var PiQuoteNameClass = function PiQuoteNameClass(props) {
  return css.css(_templateObject$v || (_templateObject$v = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  padding: 0px;\n  .avatar{\n    flex-direction: column;\n  }\n  .quote-block{\n    margin-left: 14px;\n    \n    .label-text{\n      color: ", ";\n      margin: 0px;\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 36px;\n    }\n  \n    .description{\n      color: ", ";\n      font-weight: normal;\n      font-size: 14px;\n      line-height: 20px;\n    }\n  }\n  \n}\n"])), props.lablelDescription, props.labelColor);
};

var _excluded$x = ["libraryType"];
function generateQuoteNameTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$x);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$v(props);
  } else {
    return defaultTemplate$e();
  }
}
function AtlasKitTemplate$v(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiQuoteNameClass(theme)
  }, React__default.createElement("div", {
    className: "avatar"
  }, React__default.createElement(PiAvatar, {
    onClick: function onClick() {},
    size: "large",
    src: props.src
  })), React__default.createElement("div", {
    className: "quote-block"
  }, React__default.createElement("h2", {
    className: 'label-text'
  }, props.label), React__default.createElement("p", {
    className: "description"
  }, props.description)));
}
function defaultTemplate$e() {
  return React__default.createElement("div", null);
}

var PiQuoteNameProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiQuoteNameProps, _BaseProps);
  function PiQuoteNameProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.description = '';
    _this.src = '';
    return _this;
  }
  return PiQuoteNameProps;
}(BaseProps);
function PiQuoteName(props) {
  var newprops = new PiQuoteNameProps();
  return generateQuoteNameTemplate(_extends({}, newprops, props));
}

var _excluded$y = ["libraryType"];
function generateEditorTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$w(props);
  } else {
    return defaultTemplate$f();
  }
}
function AtlasKitTemplate$w(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return React__default.createElement(ReactQuill, {
    value: props.value,
    onChange: props.onChange,
    onKeyPress: props.onKeyPress,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
    readOnly: props.readOnly
  });
}
function defaultTemplate$f() {
  return React__default.createElement("div", null, "NO template");
}

var PiEditorProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiEditorProps, _BaseProps);
  function PiEditorProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiEditorProps;
}(BaseProps);
function PiEditor(props) {
  var newprops = new PiEditorProps();
  return generateEditorTemplate(_extends({}, newprops, props));
}

var _templateObject$w;
var PiPermissionsClass = function PiPermissionsClass(props) {
  return css.css(_templateObject$w || (_templateObject$w = _taggedTemplateLiteralLoose(["\n  .header{\n    display: flex;\n    align-items:center;\n    justify-content: space-between;\n    height: 48px;\n    padding: 0 10px;\n    \n    margin-bottom:3px;\n    h2{\n      font-weight: 600;\n      font-size: 24px;\n      color: ", "\n      line-height:36px;\n    }\n    \n  }\n\n  .permissions-box{\n    /*border: 1px solid ", ";*/\n    box-sizing: border-box;\n    border-radius: 4px;\n    color: ", ";\n    font-size: 14px;\n    margin-bottom:3px;\n    \n\n    .permission{\n      display: flex;\n      align-items:center;\n      justify-content: space-between;\n      height: 48px;\n      padding: 0 10px;\n      /*background: ", ";*/\n      border-bottom: 1px solid #F2F7FF;\n          font-weight: 600;\n    }\n  \n    .child-permissions{\n        display: flex;\n        align-items:center;\n        justify-content: space-between;\n        height: 48px;\n        margin: 0 40px 0 40px;\n        background: ", ";\n        color: ", ";\n        border-bottom: 1px solid ", ";\n        &:last-child {\n          border: none;\n        }\n    }\n    \n\n    \n  }\n\n  .element{\n    display: inline-flex;\n    button{\n      margin-left:6px;\n    }\n  }\n\n  div[role=\"radiogroup\"]{\n    display:flex;\n  }\n  .pipermission-wrapper {}\n   .toggle-button{\n    div[role=\"radiogroup\"]{\n      display:flex;\n      gap: 6px;\n      label{\n        position:relative;\n        span{\n          background: #ffffff;\n          padding: 4px 12px;\n          color: ", ";\n          font-weight: 500;\n          cursor: pointer;\n          border-radius: 4px;\n          border: 2px solid ", ";\n\n           font-family: Inter;\n    font-style: normal;\n    font-size: 14px;\n        }\n        input{\n          position:absolute;\n          top:0;\n          left:0;\n          width:100%;\n          height:100%;\n          opacity:0;\n          z-index:-1;\n        }\n        /*&:not(:last-child){\n          margin-right: 2px;\n        }*/\n        input[type=\"radio\"]:checked + span{\n          background-color: ", ";\n          color: ", ";\n        }\n        /*&:first-child span{\n          border-top-left-radius: 4px;\n          border-bottom-left-radius: 4px;\n        }\n        &:last-child span{\n          border-top-right-radius: 4px;\n          border-bottom-right-radius: 4px;\n        }*/\n      }\n      \n    }\n  }\n  .permission-outer-border {\n        border: 1px solid #E3EAF6;\n        border-radius: 4px;\n  }\n  .role-parent-title {\n    padding: 20px 0px;\n    font-size: 20px;\n    font-weight: 600;\n  }\n  \n  .select-box{\n    min-width:190px;\n    margin-top:4px;\n    div:nth-child(2) {\n      /*height:30px;*/\n      \n    }\n  }\n  \n}\n"])), props.lablelDescription, props.primaryColor, props.lablelDescription, props.primaryDisabledBG, props.white, props.lablelDescription, props.primaryColor, props.primaryBG, props.primaryBG, props.primaryBG, props.white);
};

function getRadioTemplate(inputObject, values, onValueChange) {
  return React__default.createElement(PiRadioGroup, {
    name: inputObject.code,
    onChange: function onChange(_ref) {
      var value = _ref.currentTarget.value;
      console.log(value, inputObject);
      values[inputObject.id] = value;
      onValueChange(values, inputObject, value);
    },
    options: inputObject.options,
    value: values[inputObject.id]
  });
}
function getCheckboxTemplate(inputObject, values, onValueChange) {
  var initialValue = values && values[inputObject.id] ? values[inputObject.id] : '';
  var _useState = React.useState(initialValue),
    value = _useState[0],
    setValue = _useState[1];
  React.useEffect(function () {
    setValue(initialValue);
  }, [initialValue]);
  return React__default.createElement(PiCheckbox, {
    isChecked: value,
    name: inputObject.code,
    size: 'large',
    onChange: function onChange(e) {
      setValue(e.target.checked);
      values[inputObject.id] = e.target.checked;
      onValueChange(values);
    },
    value: inputObject.value
  });
}
function getToggleTemplate(inputObject, values, size, onValueChange) {
  var initialValue = values && values[inputObject.id] ? values[inputObject.id] : '';
  var _useState2 = React.useState(initialValue),
    value = _useState2[0],
    setValue = _useState2[1];
  React.useEffect(function () {
    setValue(initialValue);
  }, [initialValue]);
  return React__default.createElement(PiToggle, {
    isChecked: value,
    direction: 'row',
    name: inputObject.code,
    size: size,
    onChange: function onChange(e) {
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
  return React__default.createElement("div", {
    className: 'select-box'
  }, React__default.createElement(PiSelect, {
    name: 'select',
    onChange: function onChange(e) {
      values[inputObject.id] = e;
      inputObject = _extends({}, inputObject, e);
      onValueChange(values, inputObject);
    },
    options: inputObject.options,
    value: values[inputObject.id],
    placeholder: 'Select',
    variant: 'standard',
    isSearchable: false
  }));
}

var _excluded$z = ["libraryType"];
function generatePermissionsTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$z);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$x(props);
  } else {
    return defaultTemplate$g();
  }
}
function AtlasKitTemplate$x(_ref2) {
  var values = _ref2.values,
    inputObject = _ref2.inputObject,
    onValueChange = _ref2.onValueChange;
  var theme = React.useContext(PiThemeContext);
  var _useState = React.useState([]),
    permList = _useState[0],
    setpermList = _useState[1];
  var _useState2 = React.useState({}),
    permValues = _useState2[0],
    setpermValues = _useState2[1];
  React.useEffect(function () {
    permList = inputObject;
    setpermList(permList);
    permValues = values;
    setpermValues(permValues);
  }, [inputObject, values]);
  return React__default.createElement("div", {
    className: PiPermissionsClass(theme) + " pipermission-wrapper"
  }, permList && permList.type == 'header' ? React__default.createElement("div", {
    className: 'header'
  }, React__default.createElement("h2", {
    className: 'label-text'
  }, permList.name), React__default.createElement("span", {
    className: 'element'
  }, getElement(permList, permValues, onValueChange))) : React__default.createElement("div", null, React__default.createElement("div", {
    className: 'role-parent-title'
  }, React__default.createElement("span", {
    className: 'label-text'
  }, permList.name), React__default.createElement("span", {
    className: 'element'
  }, getElement(permList, permValues, onValueChange))), React__default.createElement("div", {
    className: 'permission-outer-border'
  }, permList.children ? permList.children.map(function (childElements, i) {
    if (childElements.children) {
      return React__default.createElement("div", {
        className: 'permissions-box',
        style: {
          margin: '2px 30px'
        }
      }, React__default.createElement("div", {
        className: 'permission'
      }, React__default.createElement("span", {
        className: 'label-text'
      }, childElements.name), React__default.createElement("span", {
        className: 'element'
      }, getElement(childElements, permValues, onValueChange))), childElements.children && childElements.allow_child ? childElements.children.map(function (child, i) {
        return React__default.createElement("div", {
          key: i,
          className: 'child-permissions'
        }, React__default.createElement("span", {
          className: 'label-text'
        }, child.name), React__default.createElement("span", {
          className: 'element'
        }, getElement(child, permValues, onValueChange)));
      }) : null);
    } else {
      return React__default.createElement("div", {
        key: i,
        className: 'child-permissions'
      }, React__default.createElement("span", {
        className: 'label-text'
      }, childElements.name), React__default.createElement("span", {
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
        return React__default.createElement("div", {
          className: 'toggle-button'
        }, getRadioTemplate(permList, values, onValueChange));
      }
    default:
      {
        return React__default.createElement("div", null);
      }
  }
}
function defaultTemplate$g() {
  return React__default.createElement("div", null);
}

var PiPermissionsProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiPermissionsProps, _BaseProps);
  function PiPermissionsProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiPermissionsProps;
}(BaseProps);
function PiPermissions(props) {
  console.log(props);
  var _useState = React.useState(props),
    permProps = _useState[0],
    setPermProps = _useState[1];
  React.useEffect(function () {
    setPermProps(props);
  }, [props.values]);
  if (permProps) {
    var newprops = new PiPermissionsProps();
    return generatePermissionsTemplate(_extends({}, newprops, permProps));
  } else {
    return null;
  }
}

var _templateObject$x;
var PiPermissionsClass$1 = function PiPermissionsClass(props) {
  return css.css(_templateObject$x || (_templateObject$x = _taggedTemplateLiteralLoose(["\n  \n  .header{\n    display: flex;\n    align-items:center;\n    justify-content: space-between;\n    height: 48px;\n    padding: 0 10px;\n    \n    margin-bottom:3px;\n    h2{\n      font-weight: 600;\n      font-size: 24px;\n      color: ", "\n      line-height:36px;\n    }\n    \n  }\n\n  .permissions-box{\n    /*border: 1px solid ", ";*/\n    box-sizing: border-box;\n    border-radius: 4px;\n    color: ", ";\n    font-size: 14px;\n    margin-bottom:3px;\n    \n\n    .permission{\n      display: flex;\n      align-items:center;\n      justify-content: space-between;\n      height: 48px;\n      padding: 0 10px;\n      /*background: ", ";*/\n      border-bottom: 1px solid #F2F7FF;\n          font-weight: 600;\n    }\n  \n    .child-permissions{\n        display: flex;\n        align-items:center;\n        justify-content: space-between;\n        height: 48px;\n        margin: 0 40px 0 40px;\n        background: ", ";\n        color: ", ";\n        border-bottom: 1px solid ", ";\n        &:last-child {\n          border: none;\n        }\n    }\n    \n\n    \n  }\n\n  .element{\n    display: inline-flex;\n    button{\n      margin-left:6px;\n    }\n  }\n\n  \n}\n"])), props.lablelDescription, props.primaryColor, props.lablelDescription, props.primaryDisabledBG, props.white, props.lablelDescription, props.primaryColor);
};

var _excluded$A = ["libraryType"];
function generatePermissionsListTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$A);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$y(props);
  } else {
    return defaultTemplate$h();
  }
}
function AtlasKitTemplate$y(props) {
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiPermissionsClass$1(theme)
  }, props.inputObject ? props.inputObject.map(function (data, i) {
    return React__default.createElement("div", {
      key: i
    }, React__default.createElement(PiPermissions, {
      inputObject: data,
      values: props.values,
      onValueChange: props.onValueChange
    }));
  }) : React__default.createElement("div", null, "No data found."));
}
function defaultTemplate$h() {
  return React__default.createElement("div", null);
}

var PiPermissionsListProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiPermissionsListProps, _BaseProps);
  function PiPermissionsListProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.inputObject = [];
    return _this;
  }
  return PiPermissionsListProps;
}(BaseProps);
function PiPermissionsList(props) {
  var newprops = new PiPermissionsListProps();
  return generatePermissionsListTemplate(_extends({}, newprops, props));
}

var _templateObject$y;
var PiHeaderMenuClass = function PiHeaderMenuClass(props) {
  return css.css(_templateObject$y || (_templateObject$y = _taggedTemplateLiteralLoose(["\n  .header-wrapper {\n    width: 100%;\n    background: ", ";\n    padding: 0 6px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .header-left {\n    display: flex;\n\n    .logo-container {\n      padding: 16px 24px;\n\n      img {\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n    }\n  }\n  .header-right {\n    display: flex;\n    gap: 16px;\n    > div {\n      button {\n        background: #2196f3;\n        padding: 0;\n        span {\n          color: #fff;\n        }\n      }\n    }\n    .header-dropdown-view {\n      button {\n        padding: 0 10px;\n      }\n    }\n  }\n\n  .logo img {\n    width: 120px;\n    height: 47px;\n    padding-left: 20px;\n  }\n\n  .menu-option {\n    margin-left: 20px;\n    display: flex;\n    align-items: center;\n\n    .menu-item-single {\n      font-size: 14px;\n      line-height: 20px;\n      color: #bbdefb !important;\n      display: flex;\n      height: 100%;\n      align-items: center;\n      position: relative;\n      overflow: hidden;\n      margin: 0 10px;\n      transition: all 0.3s ease;\n      cursor: pointer;\n\n      &::after {\n        content: '';\n        width: 100%;\n        height: 2px;\n        background-color: transparent;\n        border-radius: 4px;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n      }\n\n      &:hover {\n        color: #ffffff !important;\n      }\n\n      &.active {\n        font-weight: bold;\n        color: #ffffff !important;\n        &::after {\n          background-color: #f2f7ff;\n        }\n      }\n    }\n\n    .custom-icon {\n      margin-right: 4px;\n    }\n\n    .menu-item {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      position: relative;\n      transition: all 0.3s ease;\n      cursor: pointer;\n\n      button {\n        font-size: 14px;\n        color: #bbdefb !important;\n        background: none;\n        padding: 0;\n        font-weight: 600 !important;\n      }\n\n      &::after {\n        content: '';\n        width: 100%;\n        height: 2px;\n        background-color: transparent;\n        border-radius: 4px;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n      }\n\n      &:hover {\n        button {\n          color: #ffffff !important;\n        }\n      }\n\n      &.active {\n        button {\n          font-weight: bold;\n          color: #ffffff !important;\n        }\n        &::after {\n          background-color: #f2f7ff;\n        }\n      }\n    }\n  }\n"])), props.infoColor);
};

var _templateObject$z;
var PiDropdownMenuClass = function PiDropdownMenuClass(props) {
  return css.css(_templateObject$z || (_templateObject$z = _taggedTemplateLiteralLoose(["\n display: flex;\n  align-items: center;\n  padding: 0px;\n  .quote-block{\n    /* display: flex; */\n\n  .label-text {\n    color: ", ";\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n  }\n   .address-data {\n     display: flex;\n     color: #2E374A;\n     align-items: center;\n     font-family: Inter;\n      font-style: normal;\n      font-weight: bold;\n      font-size: 14px;\n      line-height: 20px;\n      flex: none;\n      order: 1;\n      flex-grow: 0;\n      margin: 4px 0px;\n   }\n}\n  \n"])), props.lablelDescription);
};

var _excluded$B = ["libraryType"];
function generateAddressTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$B);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$z(props);
  } else {
    return defaultTemplate$i();
  }
}
function AtlasKitTemplate$z(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  console.log(props);
  return React__default.createElement("div", {
    className: PiDropdownMenuClass(theme)
  }, React__default.createElement(DropdownMenu__default, {
    trigger: props.label
  }, props.items.length ? props.items.map(function (value) {
    if (value.display) {
      return React__default.createElement(DropdownMenu.DropdownItemGroup, null, React__default.createElement(DropdownMenu.DropdownItem, {
        onClick: function onClick() {
          return props.onOpenChange(value);
        },
        key: value.id,
        isSelected: value.isSelected
      }, value.name));
    } else {
      return null;
    }
  }) : null));
}
function defaultTemplate$i() {
  return React__default.createElement("div", null);
}

var PiDropdownMenuProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiDropdownMenuProps, _BaseProps);
  function PiDropdownMenuProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.appearance = 'default';
    _this.items = [];
    return _this;
  }
  return PiDropdownMenuProps;
}(BaseProps);
function PiDropdownMenu(props) {
  var newprops = new PiDropdownMenuProps();
  return generateAddressTemplate(_extends({}, newprops, props));
}

var _excluded$C = ["libraryType"];
function generateHeaderMenuTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$C);
  if (libraryType === ATALASLIT_LIBRARY) {
    return getHeaderTemplate(props);
  } else {
    return defaultTemplate$j();
  }
}
function getHeaderTemplate(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  console.log(props);
  return React__default.createElement("div", {
    className: PiHeaderMenuClass(theme)
  }, React__default.createElement("div", {
    className: 'header-wrapper'
  }, React__default.createElement("div", {
    className: 'header-left'
  }, React__default.createElement("div", {
    className: 'logo-container'
  }, React__default.createElement("img", {
    src: props.image,
    alt: 'loading'
  })), React__default.createElement("div", {
    className: 'menu-option'
  }, props.options.map(function (option) {
    if (option.display && option.children && option.children.length) {
      return React__default.createElement("div", {
        key: option.key,
        className: props.activeKey === option.key ? 'active menu-item' : 'menu-item'
      }, option.icon && React__default.createElement("span", {
        className: 'custom-icon'
      }, " ", option.icon, " "), option.href && React__default.createElement("span", {
        className: 'custom-icon'
      }, React__default.createElement("img", {
        src: option.href,
        alt: option.label,
        width: '20',
        height: '20'
      })), React__default.createElement(DropdownMenu__default, {
        trigger: option.label,
        placement: 'bottom-start'
      }, React__default.createElement(DropdownMenu.DropdownItemGroup, null, option.children.map(function (child) {
        if (child.display) {
          return React__default.createElement(DropdownMenu.DropdownItem, {
            key: child.key,
            onClick: function onClick() {
              return props.onMenuClick(child);
            }
          }, child.label);
        } else {
          return null;
        }
      }))));
    } else {
      if (option.display) {
        return React__default.createElement("div", {
          key: option.key,
          className: props.activeKey === option.key ? 'active menu-item-single' : 'menu-item-single',
          onClick: function onClick() {
            return props.onMenuClick(option);
          }
        }, option.icon && React__default.createElement("span", {
          className: 'custom-icon'
        }, " ", option.icon, " "), option.href && React__default.createElement("span", {
          className: 'custom-icon'
        }, React__default.createElement("img", {
          src: option.href,
          alt: option.label,
          width: '20',
          height: '20'
        })), option.label);
      } else {
        return null;
      }
    }
  }))), React__default.createElement("div", {
    className: 'header-right'
  }, props.headerDropdownOptions && props.headerDropdownOptions.length > 0 && React__default.createElement("div", {
    className: 'header-dropdown-view'
  }, React__default.createElement(PiDropdownMenu, {
    items: props.headerDropdownOptions,
    label: 'Create',
    onOpenChange: props.onOpenChange
  })), React__default.createElement(PiProfileSection, {
    items: props.profileOptions,
    onClick: props.onProfileClick,
    userImage: props.userImage
  }))));
}
function defaultTemplate$j() {
  return React__default.createElement("div", null, "NO template");
}

var PiHeaderMenuProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiHeaderMenuProps, _BaseProps);
  function PiHeaderMenuProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.options = [];
    _this.profileOptions = [];
    return _this;
  }
  return PiHeaderMenuProps;
}(BaseProps);
function PiHeaderMenu(props) {
  var newprops = new PiHeaderMenuProps();
  return generateHeaderMenuTemplate(_extends({}, newprops, props));
}

var _templateObject$A;
var PiProfileHeaderClass = function PiProfileHeaderClass(props) {
  return css.css(_templateObject$A || (_templateObject$A = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size:24px;\n  font-weight:600;\n  line-height: 36px;\n}\n"])), props.lablelDescription);
};

var _excluded$D = ["libraryType"];
function generateProfileHeaderTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$D);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$A(props);
  } else {
    return defaultTemplate$k();
  }
}
function AtlasKitTemplate$A(props) {
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("h2", {
    className: PiProfileHeaderClass(theme)
  }, props.text);
}
function defaultTemplate$k() {
  return React__default.createElement("div", null);
}

var PiProfileHeaderProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiProfileHeaderProps, _BaseProps);
  function PiProfileHeaderProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiProfileHeaderProps;
}(BaseProps);
function PiProfileHeader(props) {
  var newprops = new PiProfileHeaderProps();
  return generateProfileHeaderTemplate(_extends({}, newprops, props));
}

var _excluded$E = ["children"];
function PiAccordianPanel(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$E);
  return React__default.createElement(reactAccessibleAccordion.AccordionItemPanel, Object.assign({}, props), children);
}

var _excluded$F = ["children"];
function PiAccordianHeader(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$F);
  return React__default.createElement(reactAccessibleAccordion.AccordionItemHeading, null, React__default.createElement(reactAccessibleAccordion.AccordionItemButton, Object.assign({}, props), children));
}

var _excluded$G = ["children"];
function PiAccordianItem(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$G);
  return React__default.createElement(reactAccessibleAccordion.AccordionItem, Object.assign({}, props), children);
}

var _templateObject$B;
var PiAccordianClass = css.css(_templateObject$B || (_templateObject$B = _taggedTemplateLiteralLoose(["\n/* .accordion__button {\n    background-color: #fff;\n    color: #2E374A;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    text-align: left;\n    border: none;\n\n    font-family: Inter;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 20px;\n    letter-spacing: 0px;\n    text-align: left;\n\n} */\n/* .accordion__button::before {\n    display: inline-block;\n    content: '';\n    height: 10px;\n    width: 10px;\n    margin-right: 12px;\n    border-bottom: 2px solid currentColor;\n    border-right: 2px solid currentColor;\n    transform: rotate(-45deg);\n} */\n/* .accordion__button::after {\n    display: inline-block;\n    content: '';\n    height: 10px;\n    width: 10px;\n    margin-right: 12px;\n    border-bottom: 2px solid currentColor;\n    border-right: 2px solid currentColor;\n    transform: rotate(-45deg);\n} */\n  .css-4kplgf {\n    border-radius: 8px !important;\n    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12) !important;\n  }\n"])));

var _excluded$H = ["children"];
function PiAccordian(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$H);
  return React__default.createElement("div", {
    className: PiAccordianClass
  }, React__default.createElement(reactAccessibleAccordion.Accordion, Object.assign({}, props), children));
}

var _excluded$I = ["children"];
function PiDrawer(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$I);
  return React__default.createElement(Drawer, Object.assign({}, props), children);
}

function PiForm(props) {
  return React__default.createElement(formik.Formik, {
    validationSchema: props.validationSchema,
    onSubmit: props.handleSubmit,
    initialValues: props.initialValues,
    innerRef: props.handleRef
  }, function (_ref) {
    var formik$1 = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
    return React__default.createElement(formik.Form, null, React__default.createElement(props.component, {
      formik: formik$1
    }));
  });
}

var _excluded$J = ["onChange"];
function PiInputForm(_ref) {
  var onChange = _ref.onChange,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$J);
  var handleValueChange = function handleValueChange(e) {
    if (onChange) {
      onChange(e);
    }
  };
  function formatPhoneNumbers(value) {
    if (!value) return value;
    var phoneNumber = value.replace(/[^\d]/g, '');
    var phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return "(" + phoneNumber.slice(0, 3) + ") " + phoneNumber.slice(3);
    }
    return "(" + phoneNumber.slice(0, 3) + ") " + phoneNumber.slice(3, 6) + "-" + phoneNumber.slice(6, 10);
  }
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      form = _ref2.form,
      meta = _ref2.meta;
    return React__default.createElement(PiInput, Object.assign({}, field, {
      onChange: function onChange(e) {
        handleValueChange(e);
        if (formField.type === 'phone_number') {
          var formattedPhoneNumber = formatPhoneNumbers(e.target.value);
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
      onKeyPress: function onKeyPress(e) {
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
      onBlur: function onBlur(e) {
        form.setFieldValue(e.target.name, e.target.value ? e.target.value.trim() : e.target.value);
      },
      label: formField.label,
      type: formField.type,
      placeholder: formField.placeholder,
      helpText: meta.touched && meta.error ? meta.error : '',
      isDisabled: formField.isDisabled,
      maxLength: formField.maxLength,
      isMandatory: formField.isMandatory
    }));
  });
}

var _excluded$K = ["onChange", "options"];
function PiRadioForm(_ref) {
  var onChange = _ref.onChange,
    options = _ref.options,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$K);
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      setFieldValue = _ref2.form.setFieldValue,
      meta = _ref2.meta;
    var handleValueChange = function handleValueChange(e) {
      setFieldValue(field.name, e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    return React__default.createElement(PiRadioGroup, Object.assign({}, field, {
      label: formField.label,
      value: field.value,
      options: options,
      onChange: handleValueChange,
      helpText: meta.touched && meta.error ? meta.error : '',
      isDisabled: formField.isDisabled
    }));
  });
}

var _excluded$L = ["onChange", "options"];
function PiSelectForm(_ref) {
  var onChange = _ref.onChange,
    options = _ref.options,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$L);
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      setFieldValue = _ref2.form.setFieldValue,
      meta = _ref2.meta;
    var handleValueChange = function handleValueChange(e, actionMeta) {
      setFieldValue(field.name, e);
      if (onChange) {
        onChange(e, actionMeta);
      }
    };
    return React__default.createElement(PiSelect, Object.assign({}, field, {
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
      noOptionsMessage: function noOptionsMessage() {
        return formField.noOptionsMessage || "No " + formField.label + " Found";
      }
    }));
  });
}

function PiCheckboxForm(formField) {
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref) {
    var field = _ref.field,
      setFieldValue = _ref.form.setFieldValue,
      meta = _ref.meta;
    var handleValueChange = function handleValueChange(e) {
      setFieldValue(field.name, e.target.checked);
    };
    return React__default.createElement(PiCheckbox, Object.assign({}, field, {
      label: formField.label,
      libraryType: 'atalskit',
      isChecked: field.value,
      onChange: handleValueChange,
      helpText: meta.touched && meta.error ? meta.error : ''
    }));
  });
}

function PiDatepickerForm(formField) {
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref) {
    var field = _ref.field,
      setFieldValue = _ref.form.setFieldValue,
      meta = _ref.meta;
    var handleValueChange = function handleValueChange(e) {
      console.log(moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD')));
      var dateValid = moment(e).isBefore(moment(new Date()).format('YYYY-MM-DD'));
      if (dateValid === true) {
        return;
      }
      setFieldValue(field.name, e);
      if (formField.onChange) {
        formField.onChange(e);
      }
    };
    return React__default.createElement(PiDatePicker, Object.assign({}, field, {
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
      onKeyPress: function onKeyPress(e) {
        var key = e.charCode ? e.charCode : e.keyCode;
        console.log(key);
        e.target.value = '';
      }
    }));
  });
}

var _excluded$M = ["onChange"];
function PiTextareaForm(_ref) {
  var onChange = _ref.onChange,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$M);
  var handleValueChange = function handleValueChange(e) {
    if (onChange) {
      onChange(e);
    }
  };
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      form = _ref2.form,
      meta = _ref2.meta;
    return React__default.createElement(PiTextArea, Object.assign({}, field, {
      onChange: function onChange(e) {
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
    }));
  });
}

var _excluded$N = ["onChange"];
function PiInputForm2(_ref) {
  var onChange = _ref.onChange,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$N);
  var showSuccess = formField['showSuccess'] ? 'success' : '';
  var handleValueChange = function handleValueChange(e) {
    if (onChange) {
      onChange(e);
    }
  };
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      form = _ref2.form,
      meta = _ref2.meta;
    return React__default.createElement(PiInput, Object.assign({}, field, {
      onChange: function onChange(e) {
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
    }));
  });
}

var _excluded$O = ["onChange"];
function PiIconInputForm(_ref) {
  var onChange = _ref.onChange,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$O);
  var handleValueChange = function handleValueChange(e) {
    if (onChange) {
      onChange(e);
    }
  };
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      form = _ref2.form,
      meta = _ref2.meta;
    return React__default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, React__default.createElement("div", {
      className: 'select-label'
    }, formField.label && React__default.createElement("div", {
      className: 'field-label-div',
      style: {
        display: 'flex'
      }
    }, React__default.createElement(PiTypography$1, {
      component: 'label'
    }, formField.label), formField.isMandatory && React__default.createElement("span", {
      className: 'mandatory-star',
      style: {
        color: 'red',
        paddingLeft: '4px'
      }
    }, "*")), formField.isIcons && React__default.createElement("div", null, React__default.createElement("div", {
      className: 'tick-icon',
      title: 'Save Changes'
    }, React__default.createElement(PiTickIcon, {
      onClick: function onClick(e) {
        formField.emitSave ? formField.emitSave(e) : null;
      }
    })), React__default.createElement("div", {
      className: 'undo-icon',
      title: 'Undo Changes'
    }, React__default.createElement(PiUndoIcon, {
      onClick: function onClick(e) {
        formField.emitUndo ? formField.emitUndo(e) : null;
      }
    })))), React__default.createElement(AtlasTextfield, Object.assign({}, field, {
      onChange: function onChange(e) {
        handleValueChange(e);
        form.setFieldValue(e.target.name, e.target.value);
      },
      onKeyPress: function onKeyPress(e) {
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
      onKeyUp: function onKeyUp() {},
      onKeyDown: function onKeyDown() {},
      elemBeforeInput: formField.elemBeforeInput,
      label: formField.label,
      type: formField.type,
      placeholder: formField.placeholder,
      isDisabled: formField.isDisabled,
      maxLength: formField.maxLength,
      isMandatory: formField.isMandatory
    })), React__default.createElement("small", {
      className: 'validation-error'
    }, meta.touched && meta.error ? meta.error : ''));
  });
}

var _templateObject$C;
var PiSelectClass$1 = function PiSelectClass(props) {
  return css.css(_templateObject$C || (_templateObject$C = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .select-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    div.save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  div[class$='-menu'] {\n    margin: 3px !important;\n    div[class$='-MenuList'] {\n      padding: 0px !important;\n    }\n  }\n  /*.pi-select-wrapper {\n    div {\n      .css-1bx7l6n-control {\n        border-radius: 4px;\n        margin: 4px 0 8px 0;\n        background-color: ", ";\n        border: 2px solid ", ";\n        font-size: 14px;\n        height: 36px !important;\n        line-height: 1;\n        &:hover {\n          background: ", ";\n          border-color: ", ";\n        }\n        &:focus {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n    }\n  }*/\n\n  /*}*/\n  /*.pi-select-wrapper > div > div {\n    border-radius: 4px;\n    margin: 4px 0 8px 0;\n    background-color: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    height: 36px !important;\n    line-height: 1;\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n  }*/\n\n  .react-select__control {\n    border-radius: 4px;\n    margin: 4px 0 8px 0;\n    background-color: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    height: 36px !important;\n    line-height: 1;\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n  }\n  .css-rij6sy-ValueContainer {\n    padding: 0 8px !important;\n  }\n  /*.css-qyxenl-control {\n    margin: 4px 0 8px 0;\n    height: 36px !important;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    font-size: 14px;\n    background: ", ";\n    border: 2px solid ", ";\n  }*/\n  .css-12fvnfc-option {\n    box-shadow: none;\n    background-color: ", ";\n  }\n  .css-j6sl50-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n  .css-8acq3y-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n  .css-otwtzu-option:active {\n    background-color: ", ";\n  }\n  .css-12fvnfc-option:active {\n    background-color: ", ";\n  }\n  .form-error-msg {\n    color: #f60a31;\n    font-size: 12px;\n  }\n"])), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);
};

var _excluded$P = ["libraryType"],
  _excluded2$b = ["helpText", "label", "isMandatory"];
function generateSelectTemplate$1(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$P);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$B(props);
  } else {
    return DefaultTemplate$h(props);
  }
}
function AtlasKitTemplate$B(_ref2) {
  var helpText = _ref2.helpText,
    label = _ref2.label,
    isMandatory = _ref2.isMandatory,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$b);
  var theme = React.useContext(PiThemeContext);
  console.log(props);
  return React__default.createElement("div", {
    className: PiSelectClass$1(theme)
  }, React__default.createElement("div", {
    className: 'pi-select-wrapper'
  }, React__default.createElement("div", {
    className: 'select-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(Select.CheckboxSelect, Object.assign({
    classNamePrefix: props.classNamePrefix || 'react-select',
    noOptionsMessage: function noOptionsMessage() {
      return props.noOptionsMessage ? props.noOptionsMessage : "No " + label + " Found";
    }
  }, props)), helpText && React__default.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function DefaultTemplate$h(props) {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("select", null, props.options ? props.options.map(function (option) {
    return React__default.createElement("option", {
      value: option.value
    }, option.label);
  }) : null), props.helpText && React__default.createElement("span", null, props.helpText)));
}

var PiSelectProps$1 = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiSelectProps, _BaseProps);
  function PiSelectProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'select';
    _this.options = [];
    _this.placeholder = 'Select...';
    return _this;
  }
  return PiSelectProps;
}(BaseProps);
function PiCheckBoxSelect(props) {
  var newprops = new PiSelectProps$1();
  return generateSelectTemplate$1(_extends({}, newprops, props));
}

var _excluded$Q = ["onChange", "options"];
function PiCheckBoxSelectForm(_ref) {
  var onChange = _ref.onChange,
    options = _ref.options,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$Q);
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      setFieldValue = _ref2.form.setFieldValue,
      meta = _ref2.meta;
    var handleValueChange = function handleValueChange(e, actionMeta) {
      setFieldValue(field.name, e);
      if (onChange) {
        onChange(e, actionMeta);
      }
    };
    return React__default.createElement(PiCheckBoxSelect, Object.assign({}, field, {
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
      noOptionsMessage: function noOptionsMessage() {
        return formField.noOptionsMessage || "No " + formField.label + " Found";
      }
    }));
  });
}

var _templateObject$D;
var PiCreateSelectClass = function PiCreateSelectClass(props) {
  return css.css(_templateObject$D || (_templateObject$D = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  .select-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    div.save-reset-icons {\n      display: flex;\n      gap: 16px;\n    }\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  div[class$='-menu'] {\n    margin: 3px !important;\n    div[class$='-MenuList'] {\n      padding: 0px !important;\n    }\n  }\n  /*.pi-select-wrapper {\n    div {\n      .css-1bx7l6n-control {\n        border-radius: 4px;\n        margin: 4px 0 8px 0;\n        background-color: ", ";\n        border: 2px solid ", ";\n        font-size: 14px;\n        height: 36px !important;\n        line-height: 1;\n        &:hover {\n          background: ", ";\n          border-color: ", ";\n        }\n        &:focus {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n    }\n  }*/\n\n  /*}*/\n  /*.pi-select-wrapper > div > div {\n    border-radius: 4px;\n    margin: 4px 0 8px 0;\n    background-color: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    height: 36px !important;\n    line-height: 1;\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n  }*/\n\n  .react-select__control {\n    border-radius: 4px;\n    margin: 4px 0 8px 0;\n    background-color: ", ";\n    border: 2px solid ", ";\n    font-size: 14px;\n    height: 36px !important;\n    line-height: 1;\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n    &:focus {\n      background: ", ";\n      border-color: ", ";\n    }\n  }\n  .css-rij6sy-ValueContainer {\n    padding: 0 8px !important;\n  }\n  /*.css-qyxenl-control {\n    margin: 4px 0 8px 0;\n    height: 36px !important;\n    &:hover {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n    font-size: 14px;\n    background: ", ";\n    border: 2px solid ", ";\n  }*/\n  .css-12fvnfc-option {\n    box-shadow: none;\n    background-color: ", ";\n  }\n  .css-j6sl50-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n  .css-8acq3y-option {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n  .css-otwtzu-option:active {\n    background-color: ", ";\n  }\n  .css-12fvnfc-option:active {\n    background-color: ", ";\n  }\n  .form-error-msg {\n    color: #f60a31;\n    font-size: 12px;\n  }\n"])), props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.primaryDisabledBG, props.primaryColor, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.fieldBgColor, props.primaryColor, props.white, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputHoverBorder, props.white, props.inputFocusBorder, props.inputHoverBG, props.inputFocusBorder, props.white, props.inputFocusBorder, props.white, props.inputHoverBG, props.inputHoverBG);
};

var _excluded$R = ["libraryType"],
  _excluded2$c = ["helpText", "label", "isMandatory"];
function generateSelectTemplate$2(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$R);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$C(props);
  } else {
    return DefaultTemplate$i(props);
  }
}
function AtlasKitTemplate$C(_ref2) {
  var helpText = _ref2.helpText,
    label = _ref2.label,
    isMandatory = _ref2.isMandatory,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$c);
  var theme = React.useContext(PiThemeContext);
  console.log(props);
  return React__default.createElement("div", {
    className: PiCreateSelectClass(theme)
  }, React__default.createElement("div", {
    className: 'pi-select-wrapper'
  }, React__default.createElement("div", {
    className: 'select-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", {
    className: 'save-reset-icons'
  }, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(Select.CreatableSelect, Object.assign({
    classNamePrefix: props.classNamePrefix || 'react-select',
    noOptionsMessage: function noOptionsMessage() {
      return props.noOptionsMessage ? props.noOptionsMessage : "No " + label + " Found";
    }
  }, props)), helpText && React__default.createElement("span", {
    className: 'form-error-msg'
  }, helpText)));
}
function DefaultTemplate$i(props) {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, props.label), React__default.createElement("select", null, props.options ? props.options.map(function (option) {
    return React__default.createElement("option", {
      value: option.value
    }, option.label);
  }) : null), props.helpText && React__default.createElement("span", null, props.helpText)));
}

var PiCreateSelectProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiCreateSelectProps, _BaseProps);
  function PiCreateSelectProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'select';
    _this.options = [];
    _this.placeholder = 'Select...';
    return _this;
  }
  return PiCreateSelectProps;
}(BaseProps);
function PiCreateSelect(props) {
  var newprops = new PiCreateSelectProps();
  return generateSelectTemplate$2(_extends({}, newprops, props));
}

var _excluded$S = ["onChange", "options"];
function PiCreateSelectForm(_ref) {
  var onChange = _ref.onChange,
    options = _ref.options,
    formField = _objectWithoutPropertiesLoose(_ref, _excluded$S);
  return React__default.createElement(formik.Field, {
    name: formField.name
  }, function (_ref2) {
    var field = _ref2.field,
      setFieldValue = _ref2.form.setFieldValue,
      meta = _ref2.meta;
    var handleValueChange = function handleValueChange(e, actionMeta) {
      setFieldValue(field.name, e);
      if (onChange) {
        onChange(e, actionMeta);
      }
    };
    return React__default.createElement(PiCreateSelect, Object.assign({}, field, {
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
      noOptionsMessage: function noOptionsMessage() {
        return formField.noOptionsMessage || "No " + formField.label + " Found";
      },
      formatCreateLabel: formField.formatCreateLabel,
      isValidNewOption: formField.isValidNewOption
    }));
  });
}

var _templateObject$E;
var PiInvoiceClass = function PiInvoiceClass() {
  return css.css(_templateObject$E || (_templateObject$E = _taggedTemplateLiteralLoose(["\n  .main {\n    display: flex;\n    width: 100%;\n  }\n  .primary {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding-bottom: 32px;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 20px;\n    color: #2E374A;\n  }\n  .secondary {\n    width: 50%;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 20px;\n    color: #2E374A;\n  }\n"])));
};

var _excluded$T = ["libraryType"];
function generateInvoiceTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$D(props);
  } else {
    return DefaultTemplate$j();
  }
}
function AtlasKitTemplate$D(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return React__default.createElement("div", {
    className: PiInvoiceClass()
  }, Object.keys(props.invoiceOptions).map(function (option, index) {
    return React__default.createElement("div", {
      key: index
    }, React__default.createElement("div", {
      className: 'main'
    }, React__default.createElement("div", {
      className: 'primary'
    }, option), React__default.createElement("div", {
      className: 'secondary'
    }, props.invoiceOptions[option])));
  }));
}
function DefaultTemplate$j() {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", null));
}

var PiInvoiceProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiInvoiceProps, _BaseProps);
  function PiInvoiceProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiInvoiceProps;
}(BaseProps);
function PiBackSection$1(props) {
  var newprops = new PiInvoiceProps();
  return generateInvoiceTemplate(_extends({}, newprops, props));
}

var _templateObject$F;
var PiAddressClass = function PiAddressClass(props) {
  return css.css(_templateObject$F || (_templateObject$F = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  padding: 0px;\n  .quote-block {\n    /* display: flex; */\n\n    .label-text {\n      color: ", ";\n      font-family: 'Inter';\n      font-size: 14px;\n      line-height: 16px;\n      font-weight: 700;\n    }\n    .address-data {\n      display: flex;\n      color: ", ";\n      align-items: center;\n      font-family: 'Inter';\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 20px;\n      flex: none;\n      order: 1;\n      flex-grow: 0;\n      margin: 4px 0px;\n    }\n  }\n"])), props.lablelDescription, props.lablelDescription);
};

var _excluded$U = ["libraryType"];
function generateAddressTemplate$1(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$U);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$E(props);
  } else {
    return defaultTemplate$l();
  }
}
function AtlasKitTemplate$E(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiAddressClass(theme) + " pi-address"
  }, React__default.createElement("div", {
    className: 'quote-block'
  }, React__default.createElement("h2", {
    className: 'label-text'
  }, props.label), React__default.createElement("div", null, React__default.createElement("div", {
    className: 'address-data'
  }, props.data && props.data.address1 && React__default.createElement("div", null, props.data.address1, ",\xA0"), props.data && props.data.address2 && React__default.createElement("div", null, props.data.address2, ",\xA0"), props.data && props.data.street && React__default.createElement("div", null, props.data.street, ",\xA0"), props.data && props.data.city && React__default.createElement("div", null, props.data.city, ",\xA0"), props.data && props.data.state && React__default.createElement("div", null, props.data.state, ",\xA0"), props.data && props.data.country && React__default.createElement("div", null, props.data.country, ", \xA0"), props.data && props.data.zip && React__default.createElement("div", null, props.data.zip)))));
}
function defaultTemplate$l() {
  return React__default.createElement("div", null);
}

var PiAddressProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiAddressProps, _BaseProps);
  function PiAddressProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiAddressProps;
}(BaseProps);
function PiAddress(props) {
  var newprops = new PiAddressProps();
  return generateAddressTemplate$1(_extends({}, newprops, props));
}

var _templateObject$G;
var PiIconDropdownMenuClass = function PiIconDropdownMenuClass(props) {
  return css.css(_templateObject$G || (_templateObject$G = _taggedTemplateLiteralLoose(["\n display: flex;\n  align-items: center;\n  padding: 0px;\n\n    button{\n      background-color: ", ";\n      border: 1px solid transparent;\n      &[aria-expanded= \"true\"]{\n        background-color: transparent;\n      }\n      &:hover{\n        background-color: transparent;\n      }\n      span{\n        svg{\n          circle{\n            fill: #95A1A2;\n          }\n        }\n      }\n    }\n    \n  .quote-block{\n    /* display: flex; */\n\n    .label-text {\n    color: ", ";\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n    }\n   .address-data {\n     display: flex;\n     color: #2E374A;\n     align-items: center;\n     font-family: Inter;\n      font-style: normal;\n      font-weight: bold;\n      font-size: 14px;\n      line-height: 20px;\n      flex: none;\n      order: 1;\n      flex-grow: 0;\n      margin: 4px 0px;\n   }\n\n   button[aria-expanded=\"false\"]{\n     background: ", ";\n   }\n}\n  \n"])), props.white, props.lablelDescription, props.primaryBG);
};

var _excluded$V = ["libraryType"],
  _excluded2$d = ["triggerRef"];
function generateAddressTemplate$2(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$V);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$F(props);
  } else {
    return defaultTemplate$m();
  }
}
function AtlasKitTemplate$F(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: props.className ? PiIconDropdownMenuClass(theme) + " " + props.className : "" + PiIconDropdownMenuClass(theme)
  }, React__default.createElement(DropdownMenu__default, {
    trigger: function trigger(_ref3) {
      var triggerRef = _ref3.triggerRef,
        props = _objectWithoutPropertiesLoose(_ref3, _excluded2$d);
      return React__default.createElement(AtlasButton__default, Object.assign({}, props, {
        iconBefore: React__default.createElement(PiActionIcon, {
          appearance: 'more',
          onClick: function noRefCheck() {}
        }),
        ref: triggerRef
      }));
    }
  }, React__default.createElement(DropdownMenu.DropdownItemGroup, null, props.items.length ? props.items.map(function (value) {
    return React__default.createElement(DropdownMenu.DropdownItem, {
      onClick: function onClick() {
        return props.onOpenChange(value);
      },
      key: value.id
    }, value.element);
  }) : null)));
}
function defaultTemplate$m() {
  return React__default.createElement("div", null);
}

var PiIconDropdownMenuProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiIconDropdownMenuProps, _BaseProps);
  function PiIconDropdownMenuProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.appearance = 'default';
    _this.items = [];
    return _this;
  }
  return PiIconDropdownMenuProps;
}(BaseProps);
function PiIconDropdownMenu(props) {
  var newprops = new PiIconDropdownMenuProps();
  return generateAddressTemplate$2(_extends({}, newprops, props));
}

var _templateObject$H;
var PiIdClass = function PiIdClass(props) {
  return css.css(_templateObject$H || (_templateObject$H = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  .Back-main {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #e3f2fd;\n    border-radius: 4px;\n    cursor: pointer;\n    &:hover {\n      background-color: ", ";\n    }\n    &:focus {\n      background-color: ", ";\n    }\n  }\n  .label {\n    margin-left: 16px;\n  }\n  .css-1rm3tso {\n    color: #000;\n  }\n"])), props.inputHoverBG, props.white);
};

var _excluded$W = ["libraryType"];
function generateIdComponentTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$W);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$G(props);
  } else {
    return DefaultTemplate$k();
  }
}
function AtlasKitTemplate$G(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiIdClass(theme)
  }, React__default.createElement("div", {
    className: 'label'
  }, React__default.createElement(PiTypography$1, {
    component: 'h4'
  }, props.label)));
}
function DefaultTemplate$k() {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", null));
}

var PiIdProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiIdProps, _BaseProps);
  function PiIdProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiIdProps;
}(BaseProps);
function PiIdComponent(props) {
  var newprops = new PiIdProps();
  return generateIdComponentTemplate(_extends({}, newprops, props));
}

var _templateObject$I;
var PiMultiAddressClass = function PiMultiAddressClass(props) {
  return css.css(_templateObject$I || (_templateObject$I = _taggedTemplateLiteralLoose(["\n display: flex;\n  align-items: center;\n  padding: 0px;\n  .quote-block{\n    /* display: flex; */\n\n  .label-text {\n    color: ", ";\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n  }\n   .address-data {\n     display: flex;\n     color: ", ";\n     align-items: center;\n     font-family: Inter;\n      font-style: normal;\n      font-weight: bold;\n      font-size: 14px;\n      line-height: 20px;\n      flex: none;\n      order: 1;\n      flex-grow: 0;\n      margin: 4px 0px;\n   }\n}\n  \n"])), props.lablelDescription, props.lablelDescription);
};

var _excluded$X = ["libraryType"];
function generateAddressTemplate$3(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$X);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$H(props);
  } else {
    return defaultTemplate$n();
  }
}
function AtlasKitTemplate$H(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  console.log(props);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiMultiAddressClass(theme)
  }, React__default.createElement("div", {
    className: 'quote-block'
  }, Object.keys(props.data).map(function (option, index) {
    return React__default.createElement("div", {
      key: index
    }, index === 0 && Object.keys(props.data[option]).length !== 0 && React__default.createElement("h2", {
      className: 'label-text'
    }, props.billingLabel), index === 1 && Object.keys(props.data[option]).length !== 0 && React__default.createElement("h2", {
      className: 'label-text'
    }, props.shippingLabel), React__default.createElement("div", {
      className: 'address-data'
    }, props.data && props.data[option].address1 && React__default.createElement("div", null, props.data[option].address1, ","), props.data && props.data[option].address2 && React__default.createElement("div", null, props.data[option].address2, ","), props.data && props.data[option].street && React__default.createElement("div", null, props.data[option].street, ","), props.data && props.data[option].city && React__default.createElement("div", null, props.data[option].city, ","), props.data && props.data[option].state && React__default.createElement("div", null, props.data[option].state, ","), props.data && props.data[option].country && React__default.createElement("div", null, props.data[option].country, ","), props.data && props.data[option].zip && React__default.createElement("div", null, props.data[option].zip)));
  })));
}
function defaultTemplate$n() {
  return React__default.createElement("div", null);
}

var PiAddressProps$1 = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiAddressProps, _BaseProps);
  function PiAddressProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiAddressProps;
}(BaseProps);
function PiMultiAddress(props) {
  var newprops = new PiAddressProps$1();
  return generateAddressTemplate$3(_extends({}, newprops, props));
}

var _templateObject$J;
var PiLeftMenuClass = function PiLeftMenuClass(props) {
  return css.css(_templateObject$J || (_templateObject$J = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  background: ", ";\n\n  .left-menu {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .menu-option {\n    width: 100%;\n    height: 48px;\n\n    .menu-item-single {\n      flex-direction: row;\n      padding: 14px 0px 14px 24px;\n      color: ", ";\n      /*border-radius: 4px;*/\n      font-size: 14px;\n      line-height: 20px;\n      color: ", ";\n      background: ", ";\n      display: flex;\n      align-items: center;\n      position: relative;\n      overflow: hidden;\n      margin: 0;\n      transition: all 0.3s ease;\n      cursor: pointer;\n      gap: 14px;\n      border-radius: 4px;\n      &::after {\n        content: '';\n        width: 100%;\n        height: 2px;\n        background-color: transparent;\n        border-radius: 4px;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n      }\n\n      &:hover {\n        font-weight: 700;\n        /*color: ", ";*/\n        background: ", ";\n      }\n\n      &.active {\n        font-weight: 700;\n        color: ", ";\n        background: ", ";\n      }\n\n      .custom-icon {\n        margin: 1px 2px 0 0;\n      }\n    }\n\n    .menu-item {\n      flex-direction: row;\n\n      height: 100%;\n      border-radius: 4px;\n      font-size: 14px;\n      line-height: 20px;\n      color: ", ";\n      background: ", ";\n      display: flex;\n      align-items: center;\n      position: relative;\n      overflow: hidden;\n      margin: 0;\n      transition: all 0.3s ease;\n      cursor: pointer;\n      position: relative;\n      transition: all 0.3s ease;\n\n      button {\n        padding: 14px 0px 14px 24px;\n        font-size: 14px;\n        color: ", ";\n        background-color: transparent;\n        width: 100%;\n        height: 100%;\n        isplay: flex;\n        align-items: center;\n        span {\n          color: ", ";\n          text-align: left;\n        }\n      }\n\n      &::after {\n        content: '';\n        width: 100%;\n        height: 2px;\n        background-color: transparent;\n        border-radius: 4px;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n      }\n\n      &:hover {\n        color: ", ";\n        background: ", ";\n        button {\n          font-weight: 700;\n          color: ", ";\n          span {\n            color: ", ";\n            text-align: left;\n          }\n        }\n      }\n\n      &.active {\n        button {\n          font-weight: 700;\n          color: ", ";\n          background: ", ";\n          span {\n            color: ", ";\n            text-align: left;\n          }\n        }\n        &::after {\n          background-color: ", ";\n        }\n      }\n\n      .bottom-start {\n        width: 100%;\n      }\n    }\n  }\n"])), props.white, props.textColor, props.textColor, props.leftmenuBg, props.leftmenuHoverColor, props.leftmenuHoverBg, props.leftmenuHoverColor, props.leftmenuHoverBg, props.textColor, props.leftmenuBg, props.textColor, props.textColor, props.leftmenuHoverColor, props.leftmenuHoverBg, props.leftmenuHoverColor, props.leftmenuHoverColor, props.leftmenuHoverColor, props.leftmenuHoverBg, props.leftmenuHoverColor, props.leftmenuHoverBg);
};

var _excluded$Y = ["libraryType"];
function generateHeaderMenuTemplate$1(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  if (libraryType === ATALASLIT_LIBRARY) {
    return getHeaderTemplate$1(props);
  } else {
    return defaultTemplate$o();
  }
}
function getHeaderTemplate$1(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiLeftMenuClass(theme)
  }, React__default.createElement("div", {
    className: 'left-menu'
  }, React__default.createElement("div", {
    className: 'menu-option'
  }, props.options.map(function (option) {
    if (option.children && option.children.length) {
      return React__default.createElement("div", {
        key: option.key,
        className: props.activeKey === option.key ? 'active menu-item' : 'menu-item'
      }, option.icon && React__default.createElement("span", {
        className: 'custom-icon'
      }, " ", option.icon, " "), option.href && React__default.createElement("span", {
        className: 'custom-icon'
      }, React__default.createElement("img", {
        src: option.href,
        alt: option.label,
        width: '20',
        height: '20'
      })), React__default.createElement(DropdownMenu__default, {
        trigger: option.label,
        placement: 'bottom-start'
      }, React__default.createElement(DropdownMenu.DropdownItemGroup, null, option.children.map(function (child) {
        return React__default.createElement(DropdownMenu.DropdownItem, {
          key: child.key,
          onClick: function onClick() {
            return props.onMenuClick(child);
          }
        }, child.label);
      }))));
    } else {
      return React__default.createElement(React.Fragment, null, option.display && React__default.createElement("div", {
        key: option.key,
        className: props.activeKey === option.key ? 'active menu-item-single' : 'menu-item-single',
        onClick: function onClick() {
          return props.onMenuClick(option);
        }
      }, option.icon && React__default.createElement("div", null, React__default.createElement("span", {
        className: 'custom-icon'
      }, React__default.createElement("img", {
        style: {
          height: '30px',
          width: '30px',
          borderRadius: '50%'
        },
        src: option.icon
      }))), option.href && React__default.createElement("div", null, React__default.createElement("span", {
        className: 'custom-icon'
      }, React__default.createElement("img", {
        src: option.href,
        alt: option.label,
        width: '20',
        height: '20'
      }))), React__default.createElement("div", {
        className: 'user_info'
      }, React__default.createElement(PiTooltip, {
        content: option.label,
        libraryType: 'atalskit'
      }, React__default.createElement("div", {
        className: 'user_name'
      }, option.label)), option.email && React__default.createElement(PiTooltip, {
        content: option.email,
        libraryType: 'atalskit'
      }, React__default.createElement("div", {
        className: 'user_email'
      }, option.email)), option.code && React__default.createElement(PiTooltip, {
        content: option.code,
        libraryType: 'atalskit'
      }, React__default.createElement("div", {
        className: 'user_email'
      }, option.code)))));
    }
  }))));
}
function defaultTemplate$o() {
  return React__default.createElement("div", null, "NO template");
}

var PiLeftMenuProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiLeftMenuProps, _BaseProps);
  function PiLeftMenuProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.options = [];
    return _this;
  }
  return PiLeftMenuProps;
}(BaseProps);
function PiLeftMenu(props) {
  var newprops = new PiLeftMenuProps();
  return generateHeaderMenuTemplate$1(_extends({}, newprops, props));
}

var _templateObject$K;
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
var PiSideDrawerClass = function PiSideDrawerClass(props, width) {
  return css.css(_templateObject$K || (_templateObject$K = _taggedTemplateLiteralLoose(["\n\n/*height:100%;*/\n.side-drawer {\n  height: 100%;\n  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: ", "%;\n  z-index: 200;\n  transform: translateX(100%);\n  transition: transform 0.3s ease-out;\n  background: ", ";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )\n}\n\n.side-drawer.open { \n  transform: translateX(0);\n}\n.backdrop{\n    position:fixed;\n    width:100%;\n    height:100%;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 100;\n    top:0;\n    right:0;\n  }\n\n\n"])), getwidth(width), props.white);
};

var _excluded$Z = ["libraryType"],
  _excluded2$e = ["width"];
function generateSideDrawerTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Z);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$I(props);
  } else {
    return DefaultTemplate$l();
  }
}
function AtlasKitTemplate$I(_ref2) {
  var width = _ref2.width,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$e);
  var theme = React.useContext(PiThemeContext);
  var drawerClasses = 'side-drawer';
  if (props.isOpen) {
    drawerClasses = 'side-drawer open';
  }
  return React__default.createElement("div", {
    className: PiSideDrawerClass(theme, width)
  }, props.isOpen && React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: drawerClasses
  }, props.children), React__default.createElement("div", {
    className: "backdrop",
    onClick: props.onBackdropClose
  })));
}
function DefaultTemplate$l() {
  return React__default.createElement("div", null);
}

var PiSideDrawerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiSideDrawerProps, _BaseProps);
  function PiSideDrawerProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiSideDrawerProps;
}(BaseProps);
function PiSideDrawer(props) {
  var newprops = new PiSideDrawerProps();
  return generateSideDrawerTemplate(_extends({}, newprops, props));
}

var _templateObject$L;
var PiFileUploader = function PiFileUploader(props) {
  return css.css(_templateObject$L || (_templateObject$L = _taggedTemplateLiteralLoose(["\n    width: 100%;\n    \n    .container{\n      width:100%;\n      \n    }\n    background-color: ", ";\n    .upload-container{\n      width: 100%;\n      border: 1px dashed ", " ;\n      padding:10px;\n      min-height:30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .drag-container{\n      width: 100%;\n      border: 2px dashed ", ";\n      padding:10px;\n      min-height:30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .disabled{\n      opacity:0.3;\n      cursor:not-allowed\n    }\n    .error{\n      color:", "\n    }\n    .files-list{\n      list-style: none;\n      padding: 0px;\n      margin: 0px;\n      li{\n        margin:5px 0px;\n      }\n    }\n\n}\n  \n"])), props.white, props.tabBorder, props.tabBorder, props.error);
};

function PiUploadIcon() {
  return React__default.createElement("svg", {
    width: '32',
    height: '33',
    viewBox: '0 0 32 33',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M5.33337 22.2969V23.6302C5.33337 24.6911 5.7548 25.7085 6.50495 26.4586C7.25509 27.2088 8.27251 27.6302 9.33337 27.6302H22.6667C23.7276 27.6302 24.745 27.2088 25.4951 26.4586C26.2453 25.7085 26.6667 24.6911 26.6667 23.6302V22.2969M21.3334 11.6302L16 6.29688M16 6.29688L10.6667 11.6302M16 6.29688V22.2969',
    stroke: '#134C85',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}

var _excluded$_ = ["libraryType"],
  _excluded2$f = ["dropzoneProps"];
function generatefileUploaderComponentTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$_);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$J(props);
  } else {
    return DefaultTemplate$m();
  }
}
function AtlasKitTemplate$J(_ref2) {
  var dropzoneProps = _ref2.dropzoneProps,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$f);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiFileUploader(theme)
  }, React__default.createElement(Dropzone, Object.assign({
    onDrop: function onDrop(acceptedFiles) {
      props.onUpload(acceptedFiles);
    }
  }, dropzoneProps), function (_ref3) {
    var getRootProps = _ref3.getRootProps,
      getInputProps = _ref3.getInputProps,
      isDragActive = _ref3.isDragActive,
      isDragReject = _ref3.isDragReject,
      fileRejections = _ref3.fileRejections,
      acceptedFiles = _ref3.acceptedFiles;
    var disabled = dropzoneProps.disabled ? 'container disabled' : 'container';
    return React__default.createElement("div", {
      className: disabled
    }, React__default.createElement("div", Object.assign({}, getRootProps(), {
      className: isDragActive ? 'drag-container' : 'upload-container'
    }), React__default.createElement("input", Object.assign({}, getInputProps())), isDragActive ? 'Drop here' : dropzoneProps.text, React__default.createElement(PiUploadIcon, null), isDragReject && 'File type not accepted, sorry!'), React__default.createElement("ul", {
      className: 'files-list'
    }, acceptedFiles.length > 0 && acceptedFiles.map(function (acceptedFile, index) {
      return React__default.createElement("li", {
        key: index
      }, acceptedFile.name);
    })), fileRejections.length > 0 && fileRejections.map(function (_ref4) {
      var file = _ref4.file,
        errors = _ref4.errors;
      return React__default.createElement("ul", {
        key: file.name,
        className: 'files-list'
      }, errors.map(function (e) {
        return React__default.createElement("li", {
          key: e.code,
          className: 'error'
        }, getErrorMessage(e.code, dropzoneProps));
      }));
    }));
  }));
}
function getErrorMessage(code, props) {
  var message = '';
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
  return React__default.createElement("div", null);
}

var PiFileUploaderProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiFileUploaderProps, _BaseProps);
  function PiFileUploaderProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiFileUploaderProps;
}(BaseProps);
function PiFileUploader$1(props) {
  var newprops = new PiFileUploaderProps();
  return generatefileUploaderComponentTemplate(_extends({}, newprops, props));
}

var _templateObject$M;
var PiPasswordValidator = function PiPasswordValidator(props) {
  return css.css(_templateObject$M || (_templateObject$M = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  \n\n  p{\n    display: flex;\n    align-items: center;\n    margin: 8px 0px;\n\n    span{\n      font-size: 12px;\n      line-height: 16px;\n      margin: 0px 8px;\n    }\n  }\n  .valid svg path{\n    fill:", " !important;\n  }\n  .not-valid svg path{\n    fill:", " !important;\n  }\n  \n"])), props.passwordValide, props.passwordNotValide);
};

function PiCheckinIcon() {
  return React__default.createElement("svg", {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M10.8708 2C6.45257 2 2.87085 5.58172 2.87085 10C2.87085 14.4183 6.45257 18 10.8708 18C15.2891 18 18.8708 14.4183 18.8708 10C18.8708 5.58172 15.2891 2 10.8708 2ZM0.87085 10C0.87085 4.47715 5.348 0 10.8708 0C16.3937 0 20.8708 4.47715 20.8708 10C20.8708 15.5228 16.3937 20 10.8708 20C5.348 20 0.87085 15.5228 0.87085 10ZM15.5352 6.75259C15.948 7.11951 15.9852 7.75158 15.6183 8.16436L10.2849 14.1644C10.0952 14.3779 9.82315 14.5 9.53752 14.5C9.25188 14.5 8.97987 14.3779 8.79011 14.1644L6.12344 11.1644C5.75652 10.7516 5.7937 10.1195 6.20649 9.75259C6.61927 9.38567 7.25134 9.42285 7.61826 9.83564L9.53752 11.9948L14.1234 6.83564C14.4904 6.42285 15.1224 6.38567 15.5352 6.75259Z",
    fill: "none"
  }));
}

var _excluded$$ = ["libraryType"];
function generatefileUploaderComponentTemplate$1(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$$);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$K(props);
  } else {
    return DefaultTemplate$n();
  }
}
function AtlasKitTemplate$K(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var theme = React.useContext(PiThemeContext);
  var _React$useState = React__default.useState(false),
    uppercaseValid = _React$useState[0],
    setUppercaseValid = _React$useState[1];
  var _React$useState2 = React__default.useState(false),
    charNumberValid = _React$useState2[0],
    setCharNumberValid = _React$useState2[1];
  var _React$useState3 = React__default.useState(false),
    numberValid = _React$useState3[0],
    setNumberValid = _React$useState3[1];
  var _React$useState4 = React__default.useState(false),
    lowerCharValid = _React$useState4[0],
    setLowerCharValid = _React$useState4[1];
  var password = props.password;
  React.useEffect(function () {
    var upperCasePattern = /[A-Z]/;
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
    var NumberPattern = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if (NumberPattern.test(password)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
    var lowerCasePattern = /[a-z]/;
    if (lowerCasePattern.test(password)) {
      setLowerCharValid(true);
    } else {
      setLowerCharValid(false);
    }
  });
  return React__default.createElement("div", {
    className: PiPasswordValidator(theme)
  }, React__default.createElement("p", {
    className: charNumberValid ? "valid " : "not-valid "
  }, React__default.createElement(PiCheckinIcon, null), React__default.createElement("span", {
    className: "text-styles"
  }, "At least 8 characters long ")), React__default.createElement("p", {
    className: lowerCharValid ? "valid " : "not-valid "
  }, React__default.createElement(PiCheckinIcon, null), React__default.createElement("span", {
    className: "text-styles"
  }, "One lowercase character")), React__default.createElement("p", {
    className: uppercaseValid ? "valid " : "not-valid "
  }, React__default.createElement(PiCheckinIcon, null), React__default.createElement("span", {
    className: "text-styles"
  }, "One uppercase character")), React__default.createElement("p", {
    className: numberValid ? "valid " : "not-valid "
  }, React__default.createElement(PiCheckinIcon, null), React__default.createElement("span", {
    className: "text-styles"
  }, "One number, symbol")));
}
function DefaultTemplate$n() {
  return React__default.createElement("div", null);
}

var PiPasswordValidatorProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiPasswordValidatorProps, _BaseProps);
  function PiPasswordValidatorProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.password = 'image/*';
    _this.maxSize = 18;
    _this.minSize = 8;
    return _this;
  }
  return PiPasswordValidatorProps;
}(BaseProps);
function PiPasswordValidator$1(props) {
  var newprops = new PiPasswordValidatorProps();
  return generatefileUploaderComponentTemplate$1(_extends({}, newprops, props));
}

var _excluded$10 = ["libraryType"];
function generateGridTemplate$1(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, _excluded$10);
  var sidebarPanel = {
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
  var _useState = React.useState(''),
    appUrl = _useState[0],
    setAppUrl = _useState[1];
  var _useState2 = React.useState(true),
    loading = _useState2[0],
    setloading = _useState2[1];
  var _useState3 = React.useState(null),
    gridapi = _useState3[0],
    setGridApi = _useState3[1];
  var onGridReady = function onGridReady(params) {
    console.log(props);
    gridapi = params.api;
    setGridApi(gridapi);
    if (props.onGridReady) {
      props.onGridReady(params);
    }
    setTimeout(function () {
      var dataSource = ServerSideDatasource(props);
      params.api.setServerSideDatasource(dataSource);
    }, 1000);
  };
  React.useEffect(function () {}, []);
  function pageChanged(e) {
    console.log(e);
  }
  function ServerSideDatasource(props) {
    return {
      getRows: function getRows(params) {
        setloading(true);
        console.log('[Datasource] - rows requested by grid: ', params.request, props);
        var sort = params.request.sortModel.length ? params.request.sortModel[0].sort : '';
        var sortkey = params.request.sortModel.length ? params.request.sortModel[0].colId : '';
        setTimeout(function () {
          var info = localStorage.getItem('requestInfo');
          var requestInfo = JSON.parse(info);
          var body = {
            method: requestInfo.method,
            headers: requestInfo.headers
          };
          appUrl = requestInfo.url;
          setAppUrl(appUrl);
          if (requestInfo.method !== 'GET') {
            body.body = JSON.stringify(_extends({
              startRow: params.request.startRow,
              endRow: params.request.endRow
            }, requestInfo.body));
          } else {
            var page;
            page = params.request.endRow / 25;
            requestInfo.url = requestInfo.url + "?page=" + page + "&sort=" + sort + "&sort_key=" + sortkey;
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
            var searchValue = localStorage.getItem('test');
            if (searchValue && searchValue.length) {
              appUrl = ("" + appUrl).concat('&search=' + searchValue);
              setAppUrl(appUrl);
            }
            localStorage.setItem('appUrl', appUrl);
          }
          fetch(appUrl, body).then(function (resp) {
            return resp.json();
          }).then(function (data) {
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
  var filterArray = [];
  function getColumnFilterIds(params) {
    var info = localStorage.getItem('requestInfo');
    var requestInfo = JSON.parse(info);
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(function (obj1) {
          params.filterModel[key].values.map(function (obj, index) {
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
          appUrl = ("" + appUrl).concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function getAdminColumnFilterIds(params) {
    var info = localStorage.getItem('requestInfo');
    var requestInfo = JSON.parse(info);
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(function (obj1) {
          params.filterModel[key].values.map(function (obj, index) {
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
          appUrl = ("" + appUrl).concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function setAdditionalParams() {
    var info = localStorage.getItem('requestInfo');
    var requestInfo = JSON.parse(info);
    if (requestInfo) {
      for (var key in requestInfo.body) {
        if (requestInfo.body.hasOwnProperty(key)) {
          appUrl = ("" + appUrl).concat('&' + (key + "=" + requestInfo.body[key]));
          setAppUrl(appUrl);
        }
      }
    }
  }
  var selectedCustomerFilters = [];
  function setCustomerFilterParams() {
    selectedCustomerFilters = [];
    var info = localStorage.getItem('requestInfo');
    var requestInfo = JSON.parse(info);
    if (requestInfo && requestInfo.body.selectedFilterByCustomer && requestInfo.body.selectedFilterByCustomer.length) {
      console.log(requestInfo, selectedCustomerFilters);
      if (requestInfo.body.hasOwnProperty('selectedFilterByCustomer')) {
        console.log(selectedCustomerFilters);
        requestInfo.body.selectedFilterByCustomer.map(function (obj) {
          selectedCustomerFilters.push(obj.id);
        });
      }
      if (selectedCustomerFilters.length) {
        var paramKey = 'customer_name';
        paramKey = selectedCustomerFilters.map(function (el, idx) {
          return paramKey + '[' + idx + ']=' + el;
        }).join('&');
        appUrl = ("" + appUrl).concat('&' + paramKey);
        setAppUrl(appUrl);
      }
    }
  }
  var customfilterArray = [];
  function getCustomFilterIds() {
    var info = localStorage.getItem('requestInfo');
    var requestInfo = JSON.parse(info);
    for (var key in requestInfo.body.selectedCustomFilters) {
      if (requestInfo.body.selectedCustomFilters.hasOwnProperty(key)) {
        customfilterArray = [];
        requestInfo.body.selectedCustomFilters[key].map(function (obj) {
          console.log(obj.name);
          customfilterArray.push(obj.id);
        });
        if (customfilterArray.length) {
          key = customfilterArray.map(function (el, idx) {
            return key + '[' + idx + ']=' + el;
          }).join('&');
          appUrl = ("" + appUrl).concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  return React__default.createElement("div", {
    id: 'myGrid',
    style: {
      height: '100vh',
      width: '100%'
    },
    className: 'ag-theme-alpine'
  }, loading && React__default.createElement("div", {
    className: 'aggrid-pixel-spinner'
  }, React__default.createElement(PiSpinner, {
    color: 'primary',
    size: 50,
    libraryType: 'atalskit'
  })), React__default.createElement(agGridReact.AgGridReact, Object.assign({
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
    onPaginationChanged: function onPaginationChanged(e) {
      return pageChanged(e);
    }
  }, props, {
    onGridReady: onGridReady
  })));
}

var PiGridProps$1 = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiGridProps, _BaseProps);
  function PiGridProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.mode = 'static';
    _this.columns = [];
    return _this;
  }
  return PiGridProps;
}(BaseProps);
function PiServerGrid(props) {
  var newprops = new PiGridProps$1();
  return generateGridTemplate$1(_extends({}, newprops, props));
}

var _templateObject$N;
var PiFileUploader$2 = function PiFileUploader(props) {
  return css.css(_templateObject$N || (_templateObject$N = _taggedTemplateLiteralLoose(["\n    width: 100%;\n    \n    .container{\n      width:100%;\n      \n    }\n    background-color: ", ";\n    .upload-container{\n      width: 100%;\n      border: 1px dashed ", " ;\n      padding:10px;\n      min-height:30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 163px;\n      background-color: #F9FBFF;\n      flex-direction: column;\n    }\n    .drag-container{\n      width: 100%;\n      border: 2px dashed ", ";\n      padding:10px;\n      min-height:30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .disabled{\n      opacity:0.3;\n      cursor:not-allowed\n    }\n    .error{\n      color:", "\n    }\n    .files-list{\n      list-style: none;\n      padding: 0px;\n      margin: 0px;\n      li{\n        margin:5px 0px;\n      }\n    }\n    .drop-container {\n       height: 163px;\n       display: flex;\n       align-items: center;\n    justify-content: center;\n    }\n\n}\n  \n"])), props.white, props.tabBorder, props.tabBorder, props.error);
};

var _excluded$11 = ["libraryType"],
  _excluded2$g = ["dropzoneProps"];
function generatefileUploaderComponentTemplate$2(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$11);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$L(props);
  } else {
    return DefaultTemplate$o();
  }
}
function AtlasKitTemplate$L(_ref2) {
  var dropzoneProps = _ref2.dropzoneProps,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$g);
  var theme = React.useContext(PiThemeContext);
  return React__default.createElement("div", {
    className: PiFileUploader$2(theme)
  }, React__default.createElement(Dropzone, Object.assign({
    onDrop: function onDrop(acceptedFiles) {
      props.onUpload(acceptedFiles);
    }
  }, dropzoneProps), function (_ref3) {
    var getRootProps = _ref3.getRootProps,
      getInputProps = _ref3.getInputProps,
      isDragActive = _ref3.isDragActive,
      isDragReject = _ref3.isDragReject,
      fileRejections = _ref3.fileRejections,
      acceptedFiles = _ref3.acceptedFiles;
    var disabled = dropzoneProps.disabled ? 'container disabled' : 'container';
    return React__default.createElement("div", {
      className: disabled
    }, React__default.createElement("div", Object.assign({}, getRootProps(), {
      className: isDragActive ? 'drag-container' : 'upload-container'
    }), React__default.createElement("input", Object.assign({}, getInputProps())), isDragActive ? React__default.createElement(UploaderText, null) : dropzoneProps.text, isDragReject && 'File type not accepted, sorry!'), React__default.createElement("ul", {
      className: 'files-list'
    }, acceptedFiles.length > 0 && acceptedFiles.map(function (acceptedFile, index) {
      return React__default.createElement("li", {
        key: index
      }, acceptedFile.name);
    })), fileRejections.length > 0 && fileRejections.map(function (_ref4) {
      var file = _ref4.file,
        errors = _ref4.errors;
      return React__default.createElement("ul", {
        key: file.name,
        className: 'files-list'
      }, errors.map(function (e) {
        return React__default.createElement("li", {
          key: e.code,
          className: 'error'
        }, getErrorMessage$1(e.code, dropzoneProps));
      }));
    }));
  }));
}
function getErrorMessage$1(code, props) {
  var message = '';
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
  return React__default.createElement("div", null);
}
var UploaderText = function UploaderText() {
  return React__default.createElement("div", {
    className: 'drop-container'
  }, React__default.createElement("div", null, "Drop Here"));
};

var PiFileUploaderProps$1 = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiFileUploaderProps, _BaseProps);
  function PiFileUploaderProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiFileUploaderProps;
}(BaseProps);
function PiUploader(props) {
  var newprops = new PiFileUploaderProps$1();
  return generatefileUploaderComponentTemplate$2(_extends({}, newprops, props));
}

var _excluded$12 = ["libraryType"];
function generateGridTemplate$2(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, _excluded$12);
  var _useState = React.useState(props),
    requestProps = _useState[0],
    setRequestProps = _useState[1];
  var newprops = new PiGridProps$2();
  var _useState2 = React.useState(''),
    appUrl = _useState2[0],
    setAppUrl = _useState2[1];
  var _useState3 = React.useState(true),
    loading = _useState3[0],
    setloading = _useState3[1];
  var _useState4 = React.useState(null),
    gridapi = _useState4[0],
    setGridApi = _useState4[1];
  var _useState5 = React.useState(),
    columnsApi = _useState5[0],
    setColumnApi = _useState5[1];
  var _useState6 = React.useState(false),
    allowAutoResize = _useState6[0],
    setAllowAutoResize = _useState6[1];
  var onGridReady = function onGridReady(params) {
    console.log(props);
    gridapi = params.api;
    setGridApi(gridapi);
    columnsApi = params.columnApi;
    setColumnApi(columnsApi);
    if (props.onGridReady) {
      props.onGridReady(params);
      setTimeout(function () {
        var dataSource = ServerSideDatasource(requestProps);
        gridapi.setServerSideDatasource(dataSource);
      }, 1000);
    }
  };
  React.useEffect(function () {
    console.log(newprops, props);
    requestProps = {};
    requestProps = _extends({}, newprops, props);
    console.log(requestProps);
    setRequestProps(_extends({}, requestProps));
  }, []);
  React.useEffect(function () {
    if (gridapi) {
      setTimeout(function () {
        var dataSource = ServerSideDatasource(requestProps);
        gridapi.setServerSideDatasource(dataSource);
      }, 1000);
    }
  }, [props.requestInfo]);
  React.useEffect(function () {
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
  React.useEffect(function () {
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
    var allow_resize = false;
    if (coldata && coldata.length) {
      for (var i = 0; i < coldata.length; i++) {
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
  var autoSizeAll = function autoSizeAll() {
    var colList = props.requestInfo.columnsStateData;
    console.log(colList);
    var is_allow = allowAutoResizeColumns(colList);
    console.log(is_allow);
    setAllowAutoResize(is_allow);
  };
  var sidebarPanel = {
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
  var _useState7 = React.useState(true),
    viewAccess = _useState7[0],
    setViewAccess = _useState7[1];
  function ServerSideDatasource(requestProps) {
    return {
      getRows: function getRows(params) {
        setloading(true);
        console.log('[Datasource] - rows requested by grid: ', params.request, props);
        console.log(requestProps);
        var sort = params.request.sortModel.length ? params.request.sortModel[0].sort : '';
        var sortkey = params.request.sortModel.length ? params.request.sortModel[0].colId : '';
        setTimeout(function () {
          var info = props.requestInfo;
          var requestInfo = info;
          if (requestInfo && Object.keys(requestInfo).length > 0) {
            var body = {
              method: requestInfo.method,
              headers: requestInfo.headers
            };
            appUrl = requestInfo.url;
            setAppUrl(appUrl);
            if (requestInfo.method !== 'GET') {
              body.body = JSON.stringify(_extends({
                startRow: params.request.startRow,
                endRow: params.request.endRow
              }, requestInfo.body));
            } else {
              var page;
              var url = '';
              url = props.requestInfo.url;
              page = params.request.endRow / props.cacheBlockSize || 1;
              url = props.requestInfo.url + "?page=" + page + "&perPage=" + (props.cacheBlockSize || 25) + "&sort=" + sort + "&sort_key=" + sortkey;
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
              var searchValue = info.searchkey ? info.searchkey : localStorage.getItem('globalSearch');
              if (searchValue && searchValue.length) {
                var _url = new URL(appUrl);
                _url.searchParams.set('search', searchValue);
                console.log(_url);
                appUrl = _url;
                setAppUrl(appUrl);
              }
              localStorage.setItem('appUrl', appUrl);
            }
            fetch(appUrl, body).then(function (resp) {
              return resp.json();
            }).then(function (data) {
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
                setTimeout(function () {
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
  var filterArray = [];
  function getColumnFilterIds(params) {
    var info = props.requestInfo;
    var requestInfo = info;
    console.log(props);
    console.log(requestProps);
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(function (obj1) {
          params.filterModel[key].values.map(function (obj, index) {
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
          appUrl = ("" + appUrl).concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function getAdminColumnFilterIds(params) {
    var info = props.requestInfo;
    var requestInfo = info;
    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = [];
        requestInfo.body.serverFilterOptions && requestInfo.body.serverFilterOptions[key].map(function (obj1) {
          params.filterModel[key].values.map(function (obj, index) {
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
          appUrl = ("" + appUrl).concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  function setAdditionalParams() {
    console.log(props);
    var info = props.requestInfo;
    var requestInfo = info;
    if (requestInfo) {
      for (var key in requestInfo.body) {
        if (requestInfo.body.hasOwnProperty(key)) {
          appUrl = ("" + appUrl).concat('&' + (key + "=" + requestInfo.body[key]));
          setAppUrl(appUrl);
        }
      }
    }
  }
  var selectedCustomerFilters = [];
  function setCustomerFilterParams() {
    selectedCustomerFilters = [];
    var info = props.requestInfo;
    var requestInfo = info;
    if (requestInfo && requestInfo.body.selectedFilterByCustomer && requestInfo.body.selectedFilterByCustomer.length) {
      console.log(requestInfo, selectedCustomerFilters);
      if (requestInfo.body.hasOwnProperty('selectedFilterByCustomer')) {
        console.log(selectedCustomerFilters);
        requestInfo.body.selectedFilterByCustomer.map(function (obj) {
          selectedCustomerFilters.push(obj.id);
        });
      }
      if (selectedCustomerFilters.length) {
        var paramKey = 'customer_name';
        paramKey = selectedCustomerFilters.map(function (el, idx) {
          return paramKey + '[' + idx + ']=' + el;
        }).join('&');
        appUrl = ("" + appUrl).concat('&' + paramKey);
        setAppUrl(appUrl);
      }
    }
  }
  var customfilterArray = [];
  function getCustomFilterIds() {
    var info = props.requestInfo;
    var requestInfo = info;
    for (var key in requestInfo.body.selectedCustomFilters) {
      if (requestInfo.body.selectedCustomFilters.hasOwnProperty(key)) {
        customfilterArray = [];
        requestInfo.body.selectedCustomFilters[key].map(function (obj) {
          console.log(obj.name);
          customfilterArray.push(obj.id);
        });
        if (customfilterArray.length) {
          key = customfilterArray.map(function (el, idx) {
            return key + '[' + idx + ']=' + el;
          }).join('&');
          appUrl = ("" + appUrl).concat('&' + key);
          setAppUrl(appUrl);
        }
      }
    }
  }
  return React__default.createElement(React.Fragment, null, viewAccess ? React__default.createElement("div", {
    id: 'myGrid',
    style: {
      height: '100vh',
      width: '100%'
    },
    className: 'ag-theme-alpine'
  }, loading && React__default.createElement("div", {
    className: 'aggrid-pixel-spinner'
  }, React__default.createElement(PiSpinner, {
    color: 'primary',
    size: 50,
    libraryType: 'atalskit'
  })), React__default.createElement(agGridReact.AgGridReact, Object.assign({
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
    onPaginationChanged: function onPaginationChanged(e) {
      return pageChanged(e);
    }
  }, props, {
    onGridReady: onGridReady
  }))) : React__default.createElement("div", {
    className: 'access-denied'
  }, React__default.createElement("p", null, "Sorry, you do not have permissions to access this page.")));
}

var PiGridProps$2 = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiGridProps, _BaseProps);
  function PiGridProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.mode = 'static';
    _this.columns = [];
    return _this;
  }
  return PiGridProps;
}(BaseProps);
function PiServerGrid2(props) {
  var newprops = new PiGridProps$2();
  return generateGridTemplate$2(_extends({}, newprops, props));
}

var _templateObject$O;
var PiDateRangePickerClass = function PiDateRangePickerClass() {
  return css.css(_templateObject$O || (_templateObject$O = _taggedTemplateLiteralLoose(["\n  display: flex;\n"])));
};

var _excluded$13 = ["libraryType"];
function generateDateRangeTemplate(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$13);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$M(props);
  } else {
    return defaultTemplate$p();
  }
}
function AtlasKitTemplate$M(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  console.log(props);
  var onDateRangeChanged = function onDateRangeChanged(update) {
    console.log(update);
    props.onChange(update);
  };
  return React__default.createElement("div", {
    className: PiDateRangePickerClass()
  }, React__default.createElement(DatePicker, Object.assign({}, props, {
    onChange: onDateRangeChanged,
    placeholderText: props.placeholderText
  })));
}
function defaultTemplate$p() {
  return React__default.createElement("div", null);
}

var PiDateRangePickerProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiDateRangePickerProps, _BaseProps);
  function PiDateRangePickerProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiDateRangePickerProps;
}(BaseProps);
function PiDateRangePicker(props) {
  var newprops = new PiDateRangePickerProps();
  return generateDateRangeTemplate(_extends({}, newprops, props));
}

var _templateObject$P;
var PiConfirmClass = function PiConfirmClass(props) {
  return css.css(_templateObject$P || (_templateObject$P = _taggedTemplateLiteralLoose(["\n  /*display: flex;\n  align-items: center;\n  padding: 0px;*/\n  &.confirmation-container {\n    width: 480px;\n    background-color: #fff;\n    border-radius: 8px;\n    padding: 24px;\n    border: 1px solid #dee2e6;\n    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),\n      0px 20px 20px rgba(0, 0, 0, 0.08);\n    position: fixed;\n    top: 130px;\n    right: -200%;\n    z-index: 999;\n    transition: all 0.75s ease;\n    &.show {\n      right: 24px;\n    }\n    .close-icon-container {\n      /*background-color: #f2f7ff;*/\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      /*border-radius: 50%;*/\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 15px;\n      right: 15px;\n      cursor: pointer;\n    }\n    .text-container {\n      flex: 1;\n\n      a {\n        text-decoration: none;\n        font-size: 14px;\n        font-weight: 700;\n        color: #1976d2;\n      }\n    }\n    .text-container-header {\n      font-size: 20px;\n      font-weight: 600;\n      color: #4e586d;\n      margin-bottom: 8px;\n    }\n    .text-container-text {\n      color: #6d7992;\n      font-size: 14px;\n      margin-bottom: 16px;\n    }\n    .toast-action {\n      display: flex;\n      flex-direction: row;\n      gap: 20px;\n      button {\n        height: 32px !important;\n      }\n    }\n  }\n  .quote-block {\n    /* display: flex; */\n\n    .label-text {\n      color: ", ";\n      font-family: 'Inter';\n      font-size: 14px;\n      line-height: 16px;\n      font-weight: 700;\n    }\n    .address-data {\n      display: flex;\n      color: ", ";\n      align-items: center;\n      font-family: 'Inter';\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 20px;\n      flex: none;\n      order: 1;\n      flex-grow: 0;\n      margin: 4px 0px;\n    }\n  }\n"])), props.lablelDescription, props.lablelDescription);
};

var _excluded$14 = ["libraryType"];
function generateAddressTemplate$4(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$14);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$N(props);
  } else {
    return defaultTemplate$q();
  }
}
function AtlasKitTemplate$N(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  console.log(props);
  var theme = React.useContext(PiThemeContext);
  var _useState = React.useState(false),
    btnDisabled = _useState[0],
    setBtnDisabled = _useState[1];
  var _useState2 = React.useState(false),
    declineBtnDisabled = _useState2[0],
    setDeclineBtnDisabled = _useState2[1];
  React.useEffect(function () {
    console.log(props);
    setBtnDisabled(props.primaryBtnDisable || false);
    setDeclineBtnDisabled(props.secondaryBtnDisable || false);
  }, [props.className, props.primaryBtnDisable, props.secondaryBtnDisable]);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: PiConfirmClass(theme) + " pi-toast confirmation-container " + props.className
  }, React__default.createElement("div", {
    className: 'close-icon-container',
    onClick: props.onClose
  }, React__default.createElement(PiNewCloseIcon, null)), React__default.createElement("div", {
    className: 'text-container'
  }, React__default.createElement("div", {
    className: 'text-container-header'
  }, props.headerLabel), React__default.createElement("div", {
    className: 'text-container-text'
  }, props.message)), React__default.createElement("div", {
    className: 'toast-action'
  }, props.primaryBtnLabel && React__default.createElement(PiButton, {
    appearance: 'primary',
    label: props.primaryBtnLabel,
    libraryType: 'atalskit',
    onClick: function onClick() {
      props.onAccept ? props.onAccept('accept') : '';
    },
    isDisabled: btnDisabled
  }), props.secondaryBtnLabel && React__default.createElement(PiButton, {
    appearance: 'secondary',
    label: props.secondaryBtnLabel,
    libraryType: 'atalskit',
    onClick: function onClick() {
      props.onDecline ? props.onDecline('decline') : '';
    },
    isDisabled: declineBtnDisabled
  }))), (props.className === 'show' || props.className === 'show text-red') && React__default.createElement("div", {
    className: 'toast-backdrop'
  }));
}
function defaultTemplate$q() {
  return React__default.createElement("div", null);
}

var PiConfirmModelProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiConfirmModelProps, _BaseProps);
  function PiConfirmModelProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiConfirmModelProps;
}(BaseProps);
function PiConfirmModel(props) {
  var newprops = new PiConfirmModelProps();
  return generateAddressTemplate$4(_extends({}, newprops, props));
}

var _templateObject$Q;
var PiToastClass = function PiToastClass(props) {
  return css.css(_templateObject$Q || (_templateObject$Q = _taggedTemplateLiteralLoose(["\n  /*display: flex;\n  align-items: center;\n  padding: 0px;*/\n  &.confirmation-container {\n    width: 546px;\n    background-color: #fff;\n    border-radius: 8px;\n    padding: 24px;\n    border: 1px solid #dee2e6;\n    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),\n      0px 20px 20px rgba(0, 0, 0, 0.08);\n    position: fixed;\n    top: 130px;\n    right: -200%;\n    z-index: 999;\n    transition: all 0.75s ease;\n    &.show {\n      right: 24px;\n    }\n    .close-icon-container {\n      /*background-color: #f2f7ff;*/\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      /*border-radius: 50%;*/\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 15px;\n      right: 15px;\n      cursor: pointer;\n    }\n    .text-container {\n      flex: 1;\n\n      a {\n        text-decoration: none;\n        font-size: 14px;\n        font-weight: 700;\n        color: #1976d2;\n      }\n    }\n    .text-container-header {\n      font-size: 20px;\n      font-weight: 600;\n      color: #4e586d;\n      margin-bottom: 8px;\n    }\n    .text-container-text {\n      color: #6d7992;\n      font-size: 14px;\n      margin-bottom: 16px;\n    }\n    .success-content {\n      display: flex;\n      justify-content: space-between;\n      gap: 24px;\n      .tick-icon {\n        width: 56px;\n        height: 56px;\n        background-color: #e3f2fd;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    }\n  }\n  .quote-block {\n    /* display: flex; */\n\n    .label-text {\n      color: ", ";\n      font-family: 'Inter';\n      font-size: 14px;\n      line-height: 16px;\n      font-weight: 700;\n    }\n    .address-data {\n      display: flex;\n      color: ", ";\n      align-items: center;\n      font-family: 'Inter';\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 20px;\n      flex: none;\n      order: 1;\n      flex-grow: 0;\n      margin: 4px 0px;\n    }\n  }\n"])), props.lablelDescription, props.lablelDescription);
};

function PiCheck() {
  return React__default.createElement("svg", {
    width: '28',
    height: '28',
    viewBox: '0 0 28 28',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React__default.createElement("path", {
    d: 'M13.9999 25.6667C17.2216 25.6667 20.1382 24.3608 22.2495 22.2496C24.3607 20.1383 25.6666 17.2216 25.6666 14C25.6666 10.7784 24.3607 7.86169 22.2495 5.75041C20.1382 3.63917 17.2216 2.33333 13.9999 2.33333C10.7783 2.33333 7.86162 3.63917 5.75034 5.75041C3.63909 7.86169 2.33325 10.7784 2.33325 14C2.33325 17.2216 3.63909 20.1383 5.75034 22.2496C7.86162 24.3608 10.7783 25.6667 13.9999 25.6667Z',
    fill: '',
    stroke: '#4E586D',
    strokeWidth: '2',
    strokeLinejoin: 'round'
  }), React__default.createElement("path", {
    d: 'M9.33325 14L12.8333 17.5L19.8333 10.5',
    stroke: '#4E586D',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
}

var _excluded$15 = ["libraryType"];
function generateAddressTemplate$5(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$15);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$O(props);
  } else {
    return defaultTemplate$r();
  }
}
function AtlasKitTemplate$O(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  console.log(props);
  var theme = React.useContext(PiThemeContext);
  var _useState = React.useState(''),
    showPopupClass = _useState[0],
    setShowPopupClass = _useState[1];
  React.useEffect(function () {
    showPopupClass = props.className;
    setShowPopupClass(props.className);
    if (props.className) {
      setTimeout(function () {
        props.onClose();
      }, 2000);
    }
  }, [props.className]);
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: PiToastClass(theme) + " pi-toast confirmation-container " + showPopupClass
  }, React__default.createElement("div", {
    className: 'close-icon-container',
    onClick: props.onClose
  }, React__default.createElement(PiNewCloseIcon, null)), React__default.createElement("div", {
    className: 'success-content'
  }, React__default.createElement("div", {
    className: 'tick-icon'
  }, React__default.createElement(PiCheck, null)), React__default.createElement("div", {
    className: 'text-container'
  }, React__default.createElement("div", {
    className: 'text-container-header'
  }, props.headerLabel), React__default.createElement("div", {
    className: 'text-container-text'
  }, props.message)))), (props.className === 'show' || props.className === 'show text-red') && React__default.createElement("div", {
    className: 'toast-backdrop'
  }));
}
function defaultTemplate$r() {
  return React__default.createElement("div", null);
}

var PiToastProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiToastProps, _BaseProps);
  function PiToastProps() {
    return _BaseProps.apply(this, arguments) || this;
  }
  return PiToastProps;
}(BaseProps);
function PiToast(props) {
  var newprops = new PiToastProps();
  return generateAddressTemplate$5(_extends({}, newprops, props));
}

var _templateObject$R;
var PiIconInputClass = function PiIconInputClass(props) {
  return css.css(_templateObject$R || (_templateObject$R = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  text-align: left;\n  .select-label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n    /*> div {\n      display: flex;\n      gap: 8px;\n      margin-bottom: 4px;\n    }*/\n    .field-label-div {\n      display: flex;\n    }\n    .tick-icon,\n    .undo-icon {\n      border-radius: 4px;\n      cursor: pointer;\n      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/\n      max-height: 32px;\n      max-width: 32px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      background: #f7faff;\n      border: 1px solid transparent;\n      padding: 4px;\n\n      &:hover {\n        border: 1px solid #d0daec;\n      }\n    }\n    .mandatory-star {\n      color: red;\n      padding-left: 4px;\n    }\n  }\n  input {\n    margin: 4px 0 4px 0;\n    padding: 11px 12px 11px 14px !important;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    /*border: 0.125rem solid ", ";*/\n    border-radius: 4px;\n    height: 36px !important;\n    background-color: ", ";\n    &:hover {\n      background-color: #fff;\n      /*border: 0.125rem solid ", ";*/\n    }\n    &:focus {\n      background-color: ", ";\n      /*border: 0.125rem solid ", ";*/\n    }\n  }\n  div[data-ds--text-field--container='true'] {\n    max-height: 36px !important;\n    background-color: #f7faff !important;\n  }\n"])), props.inputHoverBorder, props.fieldBgColor, props.inputHoverBorder, props.white, props.inputFocusBorder);
};

var _excluded$16 = ["libraryType"],
  _excluded2$h = ["label", "helpText", "isMandatory"];
function generateInputTemplate$2(_ref) {
  var libraryType = _ref.libraryType,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$16);
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate$P(props);
  } else {
    return DefaultTemplate$p(props);
  }
}
function AtlasKitTemplate$P(_ref2) {
  var label = _ref2.label,
    helpText = _ref2.helpText,
    isMandatory = _ref2.isMandatory,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$h);
  var theme = React.useContext(PiThemeContext);
  var _useState = React.useState(''),
    value = _useState[0],
    setValue = _useState[1];
  console.log(theme);
  return React__default.createElement("div", {
    className: PiIconInputClass(theme)
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("div", {
    className: 'select-label'
  }, label && React__default.createElement("div", {
    className: 'field-label-div'
  }, React__default.createElement(PiTypography$1, {
    component: 'label'
  }, label), isMandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), props.isIcons && React__default.createElement("div", null, React__default.createElement("div", {
    className: 'tick-icon',
    title: 'Save Changes'
  }, React__default.createElement(PiTickIcon, {
    onClick: function onClick(e) {
      props.emitSave ? props.emitSave(e) : null;
    }
  })), React__default.createElement("div", {
    className: 'undo-icon',
    title: 'Undo Changes'
  }, React__default.createElement(PiUndoIcon, {
    onClick: function onClick(e) {
      props.emitUndo ? props.emitUndo(e) : null;
    }
  })))), React__default.createElement(React.Fragment, null, React__default.createElement(AtlasTextfield, Object.assign({}, props, {
    value: value,
    onChange: function onChange(e) {
      console.log(e.target.value);
      setValue(e.target.value);
      props.onChange ? props.onChange(e.target.value) : null;
    }
  })), helpText && React__default.createElement(PiTypography$1, null, helpText))));
}
function DefaultTemplate$p(props) {
  var defaultProps = generateDefaultProps$7(props);
  return React__default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React__default.createElement("label", null, defaultProps.label), React__default.createElement("input", Object.assign({}, defaultProps)), React__default.createElement("span", {
    className: 'form-error-msg'
  }, defaultProps.helperText));
}
function generateDefaultProps$7(props) {
  var defaultProps = {
    disabled: props.isDisabled,
    type: props.type || '',
    label: props.label,
    readonly: props.isReadOnly,
    helperText: props.helpText,
    placeholder: props.placeholder
  };
  return defaultProps;
}

var PiIconInputProps = /*#__PURE__*/function (_BaseProps) {
  _inheritsLoose(PiIconInputProps, _BaseProps);
  function PiIconInputProps() {
    var _this;
    _this = _BaseProps.apply(this, arguments) || this;
    _this.name = 'inputField';
    _this.appearance = 'standard';
    _this.type = 'text';
    return _this;
  }
  return PiIconInputProps;
}(BaseProps);
function PiIconInput(props) {
  var newprops = new PiIconInputProps();
  return generateInputTemplate$2(_extends({}, newprops, props));
}

exports.PInput2 = PiInput2;
exports.PiAccordian = PiAccordian;
exports.PiAccordianHeader = PiAccordianHeader;
exports.PiAccordianItem = PiAccordianItem;
exports.PiAccordianPanel = PiAccordianPanel;
exports.PiActionIcon = PiActionIcon;
exports.PiAddress = PiAddress;
exports.PiAttachmentList = PiAttachmentList;
exports.PiAttachments = PiAttachments;
exports.PiAvatar = PiAvatar;
exports.PiBackSection = PiBackSection;
exports.PiBanner = PiBanner;
exports.PiBreadCrumb = PiBreadCrumb;
exports.PiButton = PiButton;
exports.PiCheckBoxSelect = PiCheckBoxSelect;
exports.PiCheckBoxSelectForm = PiCheckBoxSelectForm;
exports.PiCheckbox = PiCheckbox;
exports.PiCheckboxForm = PiCheckboxForm;
exports.PiConfirmModel = PiConfirmModel;
exports.PiCreateSelect = PiCreateSelect;
exports.PiCreateSelectForm = PiCreateSelectForm;
exports.PiDatePicker = PiDatePicker;
exports.PiDateRangePicker = PiDateRangePicker;
exports.PiDateTimePicker = PiDateTimePicker;
exports.PiDatepickerForm = PiDatepickerForm;
exports.PiDrawer = PiDrawer;
exports.PiDropdownMenu = PiDropdownMenu;
exports.PiEditor = PiEditor;
exports.PiFileUploader = PiFileUploader$1;
exports.PiFlag = PiFlag;
exports.PiFleUploader = PiFileUploader$1;
exports.PiForm = PiForm;
exports.PiGrid = PiGrid;
exports.PiHeaderMenu = PiHeaderMenu;
exports.PiIconDropdownMenu = PiIconDropdownMenu;
exports.PiIconInput = PiIconInput;
exports.PiIconInputForm = PiIconInputForm;
exports.PiIdComponent = PiIdComponent;
exports.PiInput = PiInput;
exports.PiInputForm = PiInputForm;
exports.PiInputForm2 = PiInputForm2;
exports.PiInvoice = PiBackSection$1;
exports.PiLabelName = PiLabelName;
exports.PiLeftMenu = PiLeftMenu;
exports.PiLozenge = PiLozenge;
exports.PiModal = PiModal$1;
exports.PiModalBody = modalBody;
exports.PiModalFooter = modalFooter;
exports.PiModalHeader = modalHeader;
exports.PiModalTitle = modalTitle;
exports.PiMultiAddress = PiMultiAddress;
exports.PiPageHeader = PiPageHeader;
exports.PiPagination = PiPagination;
exports.PiPasswordValidator = PiPasswordValidator$1;
exports.PiPermissions = PiPermissions;
exports.PiPermissionsList = PiPermissionsList;
exports.PiProductCard = PiProductCard;
exports.PiProfileHeader = PiProfileHeader;
exports.PiProfileSection = PiProfileSection;
exports.PiProgressIndicator = PiProgressIndicator;
exports.PiQuoteName = PiQuoteName;
exports.PiRadioForm = PiRadioForm;
exports.PiRadioGroup = PiRadioGroup;
exports.PiSearch = PiSearch;
exports.PiSectionMessage = PiSectionMessage;
exports.PiSelect = PiSelect;
exports.PiSelectForm = PiSelectForm;
exports.PiServerGrid = PiServerGrid;
exports.PiServerGrid2 = PiServerGrid2;
exports.PiSideDrawer = PiSideDrawer;
exports.PiSpinner = PiSpinner;
exports.PiTabGroup = tabGroup;
exports.PiTabHeader = PiTabHeader$1;
exports.PiTabHeaderPanel = tabHeaderGroup;
exports.PiTabPanel = tabPanel;
exports.PiTag = PiTag;
exports.PiTextArea = PiTextArea;
exports.PiTextareaForm = PiTextareaForm;
exports.PiThemeContextProvider = PiThemeContextProvider;
exports.PiTimePicker = PiTimePicker;
exports.PiToast = PiToast;
exports.PiToggle = PiToggle;
exports.PiTooltip = PiTooltip;
exports.PiTypography = PiTypography$1;
exports.PiUploader = PiUploader;
//# sourceMappingURL=index.js.map
