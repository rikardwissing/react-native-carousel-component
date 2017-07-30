Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _jsxFileName='src/components/PageControl.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_ReactElement=require('react').babelPluginFlowReactPropTypes_proptype_ReactElement||require('prop-types').any;var CIRCLE_SIZE=4;var styles=_reactNative.StyleSheet.create({container:{alignItems:'center',justifyContent:'center'},innerContainer:{flexDirection:'row'},circle:{margin:2,width:CIRCLE_SIZE,height:CIRCLE_SIZE,borderRadius:CIRCLE_SIZE/2},full:{backgroundColor:'#fff'},empty:{backgroundColor:'#fff5'}});var defaultProps={style:null};function Circle(_ref){var isSelected=_ref.isSelected;var extraStyle=isSelected?styles.full:styles.empty;return _react2.default.createElement(_reactNative.View,{style:[styles.circle,extraStyle],__source:{fileName:_jsxFileName,lineNumber:44}});}Circle.propTypes={isSelected:require('prop-types').bool.isRequired};var PageControl=function(_Component){_inherits(PageControl,_Component);function PageControl(){_classCallCheck(this,PageControl);return _possibleConstructorReturn(this,(PageControl.__proto__||Object.getPrototypeOf(PageControl)).apply(this,arguments));}_createClass(PageControl,[{key:'render',value:function render(){var _props=this.props,style=_props.style,count=_props.count,selectedIndex=_props.selectedIndex;var images=[];for(var i=0;i<count;i+=1){var isSelected=selectedIndex===i;images.push(_react2.default.createElement(Circle,{key:i,isSelected:isSelected,__source:{fileName:_jsxFileName,lineNumber:63}}));}return _react2.default.createElement(_reactNative.View,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:67}},_react2.default.createElement(_reactNative.View,{style:styles.innerContainer,__source:{fileName:_jsxFileName,lineNumber:68}},images));}}]);return PageControl;}(_react.Component);PageControl.defaultProps=defaultProps;PageControl.propTypes={style:require('prop-types').any,count:require('prop-types').number.isRequired,selectedIndex:require('prop-types').number.isRequired};exports.default=PageControl;