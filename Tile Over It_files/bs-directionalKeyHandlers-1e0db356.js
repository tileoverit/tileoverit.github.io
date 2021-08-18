define("@widget/GALLERY/c/bs-directionalKeyHandlers-1e0db356.js",["exports","@widget/GALLERY/c/bs-wrapWithLazyLoader"],(function(e,t){"use strict";const a={height:70,width:100},o={left:{step:-1},right:{step:1}},i=(e,t)=>window.getComputedStyle(e)[t];class n extends(global.React||guac.react).Component{constructor(e){super(e),this.state={conveyorMarginLeft:0},this.moveConveyor=this.moveConveyor.bind(this),this.onThumbnailChange=this.onThumbnailChange.bind(this)}componentDidMount(){window.addEventListener("resize",this.onThumbnailChange)}componentWillUnmount(){window.removeEventListener("resize",this.onThumbnailChange)}componentDidUpdate(e){const{selectedIndex:t,images:o,thumbHeight:i}=this.props;if(e.images.length===o.length&&e.thumbHeight===i||this.onThumbnailChange(),t===e.selectedIndex)return;const n=this.thumbs.childNodes[t].offsetLeft;n<0?this.moveConveyor("left",Math.ceil(-n/this.stepSize))():this.conveyorWidth<n+a.width&&this.moveConveyor("right",Math.ceil((n+a.width-this.conveyorWidth)/this.stepSize))()}get conveyorWidth(){return parseFloat(i(this.conveyor,"width"))}get thumbsExceededWidth(){const{thumbWidth:e,thumbMargin:t}=this.props;if(this.cachedThumbsExceededWidth)return this.cachedThumbsExceededWidth;const a=this.conveyor,o=this.thumbs;if(!a||!o||!o.childNodes.length)return 0;if(1===o.childNodes.length)return parseFloat(i(o.childNodes.item(0),"width"));const n=(e||parseFloat(i(o.childNodes.item(1),"width")))*o.childNodes.length+t*(o.childNodes.length-1)-this.conveyorWidth;return this.cachedThumbsExceededWidth=n,n}get cachedThumbsExceededWidth(){return this._cachedThumbsExceededWidth}set cachedThumbsExceededWidth(e){e<=0||(this._cachedThumbsExceededWidth=e)}get stepSize(){return this.props.stepSize||200}onThumbnailChange(){this.cachedThumbsExceededWidth=null}renderThumbnail(){const{images:e,selectedIndex:a,goToSlide:o,thumbWidth:i}=this.props,{conveyorMarginLeft:n}=this.state,r=e.map(((e,t)=>{const n=e.url,r=t===a?{outline:"3px solid",outlineOffset:-3}:null,l={color:"highlight",overflowY:"hidden",marginLeft:0===t?0:10};return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.ListItem.Inline,{tag:"li",key:`thumb-${t}`,"data-index":`thumb-${t}`,style:l,onClick:o.bind(null,t)},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Image,{tag:"img",src:n,"data-route":"",alt:e.alt||"",key:t,style:{width:i,cursor:"pointer",...r},"data-edit-interactive":!0}))})),l={listStyle:"none",padding:0,margin:0,textAlign:"left",whiteSpace:"nowrap",transition:"margin-left 0.5s",marginLeft:n};return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:{position:"relative"}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{tag:"button",style:this.getArrowStyle("left"),onClick:this.moveConveyor("left")},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{"data-edit-interactive":!0,style:{color:"white"},icon:"chevronLeft"})),(global.React||guac.react).createElement("ul",{style:l,ref:e=>{this.thumbs=e},"data-aid":t.dataAids.THUMBNAIL_NAV_LIST,children:r}),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{tag:"button",style:this.getArrowStyle("right"),onClick:this.moveConveyor("right")},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{"data-edit-interactive":!0,style:{color:"white"},icon:"chevronRight"})))}getArrowStyle(e){const{transparentBackground:t,thumbHeight:a}=this.props,{conveyorMarginLeft:o}=this.state,i=this.thumbsExceededWidth,n={display:"none"};return"left"===e&&o||"right"===e&&i!==Math.abs(o)&&i>0?((global._||guac.lodash).merge(n,{position:"absolute",zIndex:1,border:"none",height:a,width:50,background:t?"transparent":"rgba(0, 0, 0, 0.5)",padding:0,cursor:"pointer",outline:"none",top:0,display:"block"}),"left"===e?n.left=0:n.right=0,n):n}moveConveyor(e,t=1){return a=>{a&&a.preventDefault();const i=this.state.conveyorMarginLeft,n=Math.abs(i);let r=t*this.stepSize;"left"===e&&n<r?r=n:"right"===e&&this.thumbsExceededWidth-n<r&&(r=this.thumbsExceededWidth-n),this.setState({conveyorMarginLeft:i+-o[e].step*r})}}render(){const{renderContainer:e,overrideStyle:t}=this.props,a=e?(global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Container:(global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,o={marginTop:"small",...t};return(global.React||guac.react).createElement(a,{style:o},(global.React||guac.react).createElement("div",{style:{overflow:"hidden",width:"100%"},ref:e=>{this.conveyor=e},children:this.renderThumbnail()}))}}n.propTypes={goToSlide:(global.PropTypes||guac["prop-types"]).func,selectedIndex:(global.PropTypes||guac["prop-types"]).number,images:(global.PropTypes||guac["prop-types"]).array.isRequired,transparentBackground:(global.PropTypes||guac["prop-types"]).bool,stepSize:(global.PropTypes||guac["prop-types"]).number,thumbHeight:(global.PropTypes||guac["prop-types"]).number,overrideStyle:(global.PropTypes||guac["prop-types"]).object,renderContainer:(global.PropTypes||guac["prop-types"]).bool,thumbWidth:(global.PropTypes||guac["prop-types"]).number,thumbMargin:(global.PropTypes||guac["prop-types"]).number},n.defaultProps={goToSlide:(global._||guac.lodash).noop,selectedIndex:0,renderContainer:!1,thumbMargin:10};class r extends(global.React||guac.react).Component{render(){const{images:e,thumbImageDimensions:a,thumbLength:o,baseStyle:i}=this.props,n=Math.min(this.props.images.length,o);if(n<=1)return null;const{width:r,height:l}=a,s=[];(global._||guac.lodash).some(e,(({imageData:e},t)=>{if(t===n)return!0;const a={height:l,overflowY:"hidden",marginLeft:0===t?0:10,...0===t?{border:"5px solid",borderColor:"inherit",boxSizing:"border-box"}:null};s.push((global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.ListItem.Inline,{tag:"li",style:a,key:`fakeThumb-${t}`,"data-index":`fakeThumb-${t}`},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Image,{tag:"img","data-route":"",key:t,style:{maxWidth:"none",width:r,height:l},imageData:e})))}));const c={listStyle:"none",padding:0,margin:0,textAlign:"left",height:l,whiteSpace:"nowrap"};return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:i},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.List,{tag:"ul",style:c,"data-aid":t.dataAids.FAKE_THUMBNAIL_NAV_LIST,children:s}))}}r.propTypes={images:(global.PropTypes||guac["prop-types"]).array,thumbLength:(global.PropTypes||guac["prop-types"]).number,thumbImageDimensions:(global.PropTypes||guac["prop-types"]).object,baseStyle:(global.PropTypes||guac["prop-types"]).object},r.defaultProps={thumbLength:9};const l=37,s=39;e.FakeThumbNav=r,e.ThumbnailNavList=n,e.handleDirectionalKeys=({keyCode:e,context:t})=>{let a=t.state.nextSlideIncremental;e===l&&(a-=1),e===s&&(a+=1),t.setState({nextSlideIncremental:a})},e.modifyKeyDownEventHandler=(e=(()=>{}),t=!1)=>{t?document.addEventListener("keydown",e,!1):document.removeEventListener("keydown",e,!1)},e.smallthumbImageDimensions={height:68,width:95},e.thumbImageDimensions=a})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-directionalKeyHandlers-1e0db356.js.map
