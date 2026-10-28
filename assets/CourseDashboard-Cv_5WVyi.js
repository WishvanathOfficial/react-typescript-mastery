import{j as S,u as Ri,a as ji,b as Li,r as Be,N as Di,L as Ke}from"./index-ClWHily0.js";function fr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ni(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Fi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Mi=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ui={};function Ct(e,n){return(Ui.jsx?Mi:Fi).test(e)}const zi=/[ \t\n\f\r]/g;function Oi(e){return typeof e=="object"?e.type==="text"?Tt(e.value):!1:Tt(e)}function Tt(e){return e.replace(zi,"")===""}class Qe{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Qe.prototype.normal={};Qe.prototype.property={};Qe.prototype.space=void 0;function gr(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Qe(t,r,n)}function Mn(e){return e.toLowerCase()}class ie{constructor(n,t){this.attribute=t,this.property=n}}ie.prototype.attribute="";ie.prototype.booleanish=!1;ie.prototype.boolean=!1;ie.prototype.commaOrSpaceSeparated=!1;ie.prototype.commaSeparated=!1;ie.prototype.defined=!1;ie.prototype.mustUseProperty=!1;ie.prototype.number=!1;ie.prototype.overloadedBoolean=!1;ie.prototype.property="";ie.prototype.spaceSeparated=!1;ie.prototype.space=void 0;let Bi=0;const U=Ie(),Q=Ie(),Un=Ie(),P=Ie(),X=Ie(),Te=Ie(),oe=Ie();function Ie(){return 2**++Bi}const zn=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:Q,commaOrSpaceSeparated:oe,commaSeparated:Te,number:P,overloadedBoolean:Un,spaceSeparated:X},Symbol.toStringTag,{value:"Module"})),bn=Object.keys(zn);class Gn extends ie{constructor(n,t,r,i){let o=-1;if(super(n,t),Pt(this,"space",i),typeof r=="number")for(;++o<bn.length;){const a=bn[o];Pt(this,bn[o],(r&zn[a])===zn[a])}}}Gn.prototype.defined=!0;function Pt(e,n,t){t&&(e[n]=t)}function Ne(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const o=new Gn(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),n[r]=o,t[Mn(r)]=r,t[Mn(o.attribute)]=r}return new Qe(n,t,e.space)}const yr=Ne({properties:{ariaActiveDescendant:null,ariaAtomic:Q,ariaAutoComplete:null,ariaBusy:Q,ariaChecked:Q,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:X,ariaCurrent:null,ariaDescribedBy:X,ariaDetails:null,ariaDisabled:Q,ariaDropEffect:X,ariaErrorMessage:null,ariaExpanded:Q,ariaFlowTo:X,ariaGrabbed:Q,ariaHasPopup:null,ariaHidden:Q,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:X,ariaLevel:P,ariaLive:null,ariaModal:Q,ariaMultiLine:Q,ariaMultiSelectable:Q,ariaOrientation:null,ariaOwns:X,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:Q,ariaReadOnly:Q,ariaRelevant:null,ariaRequired:Q,ariaRoleDescription:X,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:Q,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function br(e,n){return n in e?e[n]:n}function xr(e,n){return br(e,n.toLowerCase())}const _i=Ne({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Te,acceptCharset:X,accessKey:X,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alpha:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:X,autoFocus:U,autoPlay:U,blocking:X,capture:null,charSet:null,checked:U,cite:null,className:X,closedBy:null,colorSpace:null,cols:P,colSpan:P,command:null,commandFor:null,content:null,contentEditable:Q,controls:U,controlsList:X,coords:P|Te,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:Un,draggable:Q,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:X,height:P,hidden:Un,high:P,href:null,hrefLang:null,htmlFor:X,httpEquiv:X,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:X,itemRef:X,itemScope:U,itemType:X,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:P,pattern:null,ping:X,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:X,required:U,reversed:U,rows:P,rowSpan:P,sandbox:X,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootCustomElementRegistry:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shadowRootSerializable:U,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:Q,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:Q,width:P,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:X,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:Q,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:U,disablePictureInPicture:U,disableRemotePlayback:U,exportParts:Te,part:X,prefix:null,property:null,results:P,security:null,unselectable:null},space:"html",transform:xr}),Wi=Ne({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:oe,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:X,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Te,g2:Te,glyphName:Te,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:oe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:X,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:oe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:oe,rev:oe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:oe,requiredFeatures:oe,requiredFonts:oe,requiredFormats:oe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:oe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:oe,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:oe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:br}),kr=Ne({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),wr=Ne({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:xr}),Sr=Ne({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Hi={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ji=/[A-Z]/g,It=/-[a-z]/g,qi=/^data[-\w.:]+$/i;function Xi(e,n){const t=Mn(n);let r=n,i=ie;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&qi.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace(It,$i);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!It.test(o)){let a=o.replace(Ji,Vi);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}i=Gn}return new i(r,n)}function Vi(e){return"-"+e.toLowerCase()}function $i(e){return e.charAt(1).toUpperCase()}const Qi=gr([yr,_i,kr,wr,Sr],"html"),Yn=gr([yr,Wi,kr,wr,Sr],"svg");function Gi(e){return e.join(" ").trim()}var Le={},xn,At;function Yi(){if(At)return xn;At=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,a=/^[;\s]*/,s=/^\s+|\s+$/g,c=`
`,l="/",p="*",u="",h="comment",d="declaration";function g(C,y){if(typeof C!="string")throw new TypeError("First argument must be a string");if(!C)return[];y=y||{};var I=1,T=1;function j(D){var w=D.match(n);w&&(I+=w.length);var R=D.lastIndexOf(c);T=~R?D.length-R:T+D.length}function N(){var D={line:I,column:T};return function(w){return w.position=new k(D),q(),w}}function k(D){this.start=D,this.end={line:I,column:T},this.source=y.source}k.prototype.content=C;function M(D){var w=new Error(y.source+":"+I+":"+T+": "+D);if(w.reason=D,w.filename=y.source,w.line=I,w.column=T,w.source=C,!y.silent)throw w}function _(D){var w=D.exec(C);if(w){var R=w[0];return j(R),C=C.slice(R.length),w}}function q(){_(t)}function b(D){var w;for(D=D||[];w=E();)w!==!1&&D.push(w);return D}function E(){var D=N();if(!(l!=C.charAt(0)||p!=C.charAt(1))){for(var w=2;u!=C.charAt(w)&&(p!=C.charAt(w)||l!=C.charAt(w+1));)++w;if(w+=2,u===C.charAt(w-1))return M("End of comment missing");var R=C.slice(2,w-2);return T+=2,j(R),C=C.slice(w),T+=2,D({type:h,comment:R})}}function L(){var D=N(),w=_(r);if(w){if(E(),!_(i))return M("property missing ':'");var R=_(o),W=D({type:d,property:v(w[0].replace(e,u)),value:R?v(R[0].replace(e,u)):u});return _(a),W}}function H(){var D=[];b(D);for(var w;w=L();)w!==!1&&(D.push(w),b(D));return D}return q(),H()}function v(C){return C?C.replace(s,u):u}return xn=g,xn}var Et;function Ki(){if(Et)return Le;Et=1;var e=Le&&Le.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Le,"__esModule",{value:!0}),Le.default=t;const n=e(Yi());function t(r,i){let o=null;if(!r||typeof r!="string")return o;const a=(0,n.default)(r),s=typeof i=="function";return a.forEach(c=>{if(c.type!=="declaration")return;const{property:l,value:p}=c;s?i(l,p,c):p&&(o=o||{},o[l]=p)}),o}return Le}var _e={},Rt;function Zi(){if(Rt)return _e;Rt=1,Object.defineProperty(_e,"__esModule",{value:!0}),_e.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,o=function(l){return!l||t.test(l)||e.test(l)},a=function(l,p){return p.toUpperCase()},s=function(l,p){return"".concat(p,"-")},c=function(l,p){return p===void 0&&(p={}),o(l)?l:(l=l.toLowerCase(),p.reactCompat?l=l.replace(i,s):l=l.replace(r,s),l.replace(n,a))};return _e.camelCase=c,_e}var We,jt;function ea(){if(jt)return We;jt=1;var e=We&&We.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},n=e(Ki()),t=Zi();function r(i,o){var a={};return!i||typeof i!="string"||(0,n.default)(i,function(s,c){s&&c&&(a[(0,t.camelCase)(s,o)]=c)}),a}return r.default=r,We=r,We}var na=ea();const ta=fr(na),vr=Cr("end"),Kn=Cr("start");function Cr(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function ra(e){const n=Kn(e),t=vr(e);if(n&&t)return{start:n,end:t}}function qe(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Lt(e.position):"start"in e||"end"in e?Lt(e):"line"in e||"column"in e?On(e):""}function On(e){return Dt(e&&e.line)+":"+Dt(e&&e.column)}function Lt(e){return On(e&&e.start)+"-"+On(e&&e.end)}function Dt(e){return e&&typeof e=="number"?e:1}class Z extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},a=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?i=n:!o.cause&&n&&(a=!0,i=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=qe(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Z.prototype.file="";Z.prototype.name="";Z.prototype.reason="";Z.prototype.message="";Z.prototype.stack="";Z.prototype.column=void 0;Z.prototype.line=void 0;Z.prototype.ancestors=void 0;Z.prototype.cause=void 0;Z.prototype.fatal=void 0;Z.prototype.place=void 0;Z.prototype.ruleId=void 0;Z.prototype.source=void 0;const Zn={}.hasOwnProperty,ia=new Map,aa=/[A-Z]/g,oa=new Set(["table","tbody","thead","tfoot","tr"]),sa=new Set(["td","th"]),Tr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function la(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ga(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=fa(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Yn:Qi,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=Pr(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Pr(e,n,t){if(n.type==="element")return ca(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return ua(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return da(e,n,t);if(n.type==="mdxjsEsm")return pa(e,n);if(n.type==="root")return ha(e,n,t);if(n.type==="text")return ma(e,n)}function ca(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Yn,e.schema=i),e.ancestors.push(n);const o=Ar(e,n.tagName,!1),a=ya(e,n);let s=nt(e,n);return oa.has(n.tagName)&&(s=s.filter(function(c){return typeof c=="string"?!Oi(c):!0})),Ir(e,a,o,n),et(a,s),e.ancestors.pop(),e.schema=r,e.create(n,o,a,t)}function ua(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}$e(e,n.position)}function pa(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);$e(e,n.position)}function da(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Yn,e.schema=i),e.ancestors.push(n);const o=n.name===null?e.Fragment:Ar(e,n.name,!0),a=ba(e,n),s=nt(e,n);return Ir(e,a,o,n),et(a,s),e.ancestors.pop(),e.schema=r,e.create(n,o,a,t)}function ha(e,n,t){const r={};return et(r,nt(e,n)),e.create(n,e.Fragment,r,t)}function ma(e,n){return n.value}function Ir(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function et(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function fa(e,n,t){return r;function r(i,o,a,s){const l=Array.isArray(a.children)?t:n;return s?l(o,a,s):l(o,a)}}function ga(e,n){return t;function t(r,i,o,a){const s=Array.isArray(o.children),c=Kn(r);return n(i,o,a,s,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function ya(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Zn.call(n.properties,i)){const o=xa(e,i,n.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&sa.has(n.tagName)?r=s:t[a]=s}}if(r){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function ba(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(t,e.evaluater.evaluateExpression(s.argument))}else $e(e,n.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else $e(e,n.position);else o=r.value===null?!0:r.value;t[i]=o}return t}function nt(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:ia;for(;++r<n.children.length;){const o=n.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const l=i.get(c)||0;a=c+"-"+l,i.set(c,l+1)}}const s=Pr(e,o,a);s!==void 0&&t.push(s)}return t}function xa(e,n,t){const r=Xi(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Ni(t):Gi(t)),r.property==="style"){let i=typeof t=="object"?t:ka(e,String(t));return e.stylePropertyNameCase==="css"&&(i=wa(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Hi[r.property]||r.property:r.attribute,t]}}function ka(e,n){try{return ta(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Z("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Tr+"#cannot-parse-style-attribute",i}}function Ar(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let o=-1,a;for(;++o<i.length;){const s=Ct(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=Ct(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Zn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);$e(e)}function $e(e,n){const t=new Z("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Tr+"#cannot-handle-mdx-estrees-without-createevaluater",t}function wa(e){const n={};let t;for(t in e)Zn.call(e,t)&&(n[Sa(t)]=e[t]);return n}function Sa(e){let n=e.replace(aa,va);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function va(e){return"-"+e.toLowerCase()}const kn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ca={};function tt(e,n){const t=Ca,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Er(e,r,i)}function Er(e,n,t){if(Ta(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Nt(e.children,n,t)}return Array.isArray(e)?Nt(e,n,t):""}function Nt(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Er(e[i],n,t);return r.join("")}function Ta(e){return!!(e&&typeof e=="object")}const Ft=document.createElement("i");function rt(e){const n="&"+e+";";Ft.innerHTML=n;const t=Ft.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function pe(e,n,t,r){const i=e.length;let o=0,a;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);o<r.length;)a=r.slice(o,o+1e4),a.unshift(n,0),e.splice(...a),o+=1e4,n+=1e4}function se(e,n){return e.length>0?(pe(e,e.length,0,n),e):n}const Mt={}.hasOwnProperty;function Rr(e){const n={};let t=-1;for(;++t<e.length;)Pa(n,e[t]);return n}function Pa(e,n){let t;for(t in n){const i=(Mt.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let a;if(o)for(a in o){Mt.call(i,a)||(i[a]=[]);const s=o[a];Ia(i[a],Array.isArray(s)?s:s?[s]:[])}}}function Ia(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);pe(e,0,0,r)}function jr(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function de(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ee=Se(/[A-Za-z]/),K=Se(/[\dA-Za-z]/),Aa=Se(/[#-'*+\--9=?A-Z^-~]/);function on(e){return e!==null&&(e<32||e===127)}const Bn=Se(/\d/),Ea=Se(/[\dA-Fa-f]/),Ra=Se(/[!-/:-@[-`{-~]/);function F(e){return e!==null&&e<-2}function V(e){return e!==null&&(e<0||e===32)}function B(e){return e===-2||e===-1||e===32}const pn=Se(new RegExp("\\p{P}|\\p{S}","u")),Pe=Se(/\s/);function Se(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Fe(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const o=e.charCodeAt(t);let a="";if(o===37&&K(e.charCodeAt(t+1))&&K(e.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(t+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+i+1,a=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function J(e,n,t,r){const i=r?r-1:1/0;let o=0;return a;function a(c){return B(c)?(e.enter(t),s(c)):n(c)}function s(c){return B(c)&&o++<i?(e.consume(c),s):(e.exit(t),n(c))}}function Lr(e,n,t,r,i,o){let a=0;return s;function s(p){return B(p)?(e.enter(r),c(p)):l(p)}function c(p){return B(p)&&a<o?(e.consume(p),a++,c):(e.exit(r),l(p))}function l(p){return a>=i?n(p):t(p)}}const ja={tokenize:La};function La(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),J(e,n,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const c=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=c),t=c,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return F(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}let sn=class{constructor(){this.index=new Map,this.map=[]}add(n,t,r){Ut(this,n,t,r,!1)}addBefore(n,t,r){Ut(this,n,t,r,!0)}consume(n){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0,this.index.clear()}};function Ut(e,n,t,r,i){if(t===0&&r.length===0)return;const o=e.index.get(n);if(o){o[1]+=t,i?(r.push(...o[2]),o[2]=r):o[2].push(...r);return}const a=[n,t,r];e.map.push(a),e.index.set(n,a)}const Da={tokenize:Na},zt={tokenize:Fa};function Na(e){const n=this,t=[];let r=0,i,o,a;return s;function s(T){if(r<t.length){const j=t[r];return n.containerState=j[1],e.attempt(j[0].continuation,c,l)(T)}return l(T)}function c(T){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&I();const j=n.events.length;let N=j,k;for(;N--;)if(n.events[N][0]==="exit"&&n.events[N][1].type==="chunkFlow"){k=n.events[N][1].end;break}y(r);let M=j;for(;M<n.events.length;)n.events[M][1].end={...k},M++;const _=new sn;return _.add(N+1,0,n.events.slice(j)),_.add(j,M-j,[]),_.consume(n.events),l(T)}return s(T)}function l(T){if(r===t.length){if(!i)return h(T);if(i.currentConstruct&&i.currentConstruct.concrete)return g(T);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(zt,p,u)(T)}function p(T){return i&&I(),y(r),h(T)}function u(T){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,g(T)}function h(T){return n.containerState={},e.attempt(zt,d,g)(T)}function d(T){return r++,t.push([n.currentConstruct,n.containerState]),h(T)}function g(T){if(T===null){i&&I(),y(0),e.consume(T);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),v(T)}function v(T){if(T===null){C(e.exit("chunkFlow"),!0),y(0),e.consume(T);return}return F(T)?(e.consume(T),C(e.exit("chunkFlow")),r=0,n.interrupt=void 0,s):(e.consume(T),v)}function C(T,j){const N=n.sliceStream(T);if(j&&N.push(null),T.previous=o,o&&(o.next=T),o=T,i.defineSkip(T.start),i.write(N),n.parser.lazy[T.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<a&&(!i.events[k][1].end||i.events[k][1].end.offset>a))return;const M=n.events.length;let _=M,q,b;for(;_--;)if(n.events[_][0]==="exit"&&n.events[_][1].type==="chunkFlow"){if(q){b=n.events[_][1].end;break}q=!0}for(y(r),k=M;k<n.events.length;)n.events[k][1].end={...b},k++;const E=new sn;E.add(_+1,0,n.events.slice(M)),E.add(M,k-M,[]),E.consume(n.events)}}function y(T){let j=t.length;for(;j-- >T;){const N=t[j];n.containerState=N[1],N[0].exit.call(n,e)}t.length=T}function I(){i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Fa(e,n,t){return J(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ln(e){if(e===null||V(e)||Pe(e))return 1;if(pn(e))return 2}function dn(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const _n={name:"attention",resolveAll:Ma,tokenize:Ua};function Ma(e,n){let t=-1,r;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){let i=t;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;const o=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1,a={...e[i][1].end},s={...e[t][1].start};Ot(a,-o),Ot(s,o);const c={type:o>1?"strongSequence":"emphasisSequence",start:a,end:{...e[i][1].end}},l={type:o>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:s},p={type:o>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},u={type:o>1?"strong":"emphasis",start:{...c.start},end:{...l.end}};e[i][1].end={...c.start},e[t][1].start={...l.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=se(r,[["enter",e[i][1],n],["exit",e[i][1],n]])),r=se(r,[["enter",u,n],["enter",c,n],["exit",c,n],["enter",p,n]]),r=se(r,dn(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),r=se(r,[["exit",p,n],["enter",l,n],["exit",l,n],["exit",u,n]]);let h=0;e[t][1].end.offset-e[t][1].start.offset&&(h=2,r=se(r,[["enter",e[t][1],n],["exit",e[t][1],n]])),pe(e,i-1,t-i+3,r),t=i+r.length-h-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Ua(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ln(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),s(c)}function s(c){if(c===o)return e.consume(c),s;const l=e.exit("attentionSequence"),p=ln(c),u=!p||p===2&&i||t.includes(c)&&c!==42&&c!==95,h=!i||i===2&&p||t.includes(r)&&r!==42&&r!==95;return l._open=!!(o===42?u:u&&(i||!h)),l._close=!!(o===42?h:h&&(p||!u)),n(c)}}function Ot(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const za={name:"autolink",tokenize:Oa};function Oa(e,n,t){let r=0;return i;function i(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(d){return ee(d)?(e.consume(d),a):d===64?t(d):l(d)}function a(d){return d===43||d===45||d===46||K(d)?(r=1,s(d)):l(d)}function s(d){return d===58?(e.consume(d),r=0,c):(d===43||d===45||d===46||K(d))&&r++<32?(e.consume(d),s):(r=0,l(d))}function c(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):d===null||d===32||d===60||on(d)?t(d):(e.consume(d),c)}function l(d){return d===64?(e.consume(d),p):Aa(d)?(e.consume(d),l):t(d)}function p(d){return K(d)?u(d):t(d)}function u(d){return d===46?(e.consume(d),r=0,p):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):h(d)}function h(d){if((d===45||K(d))&&r++<63){const g=d===45?h:u;return e.consume(d),g}return t(d)}}const Ge={partial:!0,tokenize:Ba};function Ba(e,n,t){return r;function r(o){return B(o)?J(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||F(o)?n(o):t(o)}}const Dr={continuation:{tokenize:Wa},exit:Ha,name:"blockQuote",tokenize:_a};function _a(e,n,t){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return t(a)}function o(a){return B(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function Wa(e,n,t){const r=this;return i;function i(a){return B(a)?J(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Dr,n,t)(a)}}function Ha(e){e.exit("blockQuote")}const Nr={name:"characterEscape",tokenize:Ja};function Ja(e,n,t){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Ra(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const Fr={name:"characterReference",tokenize:qa};function qa(e,n,t){const r=this;let i=0,o,a;return s;function s(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),c}function c(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),o=31,a=K,p(u))}function l(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=Ea,p):(e.enter("characterReferenceValue"),o=7,a=Bn,p(u))}function p(u){if(u===59&&i){const h=e.exit("characterReferenceValue");return a===K&&!rt(r.sliceSerialize(h))?t(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(u)&&i++<o?(e.consume(u),p):t(u)}}const Wn={partial:!0,tokenize:Xa};function Xa(e,n,t){const r=this;return i;function i(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const Bt={concrete:!0,name:"codeFenced",tokenize:Va};function Va(e,n,t){const r=this,i={partial:!0,tokenize:N};let o=0,a=0,s;return c;function c(k){return l(k)}function l(k){const M=r.events[r.events.length-1];return o=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,s=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===s?(a++,e.consume(k),p):a<3?t(k):(e.exit("codeFencedFenceSequence"),B(k)?J(e,u,"whitespace")(k):u(k))}function u(k){return k===null||F(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(Wn,v,j)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||F(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(k)):B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),J(e,d,"whitespace")(k)):k===96&&k===s?t(k):(e.consume(k),h)}function d(k){return k===null||F(k)?u(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(k))}function g(k){return k===null||F(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(k)):k===96&&k===s?t(k):(e.consume(k),g)}function v(k){return e.attempt(i,j,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return o>0&&B(k)?J(e,I,"linePrefix",o+1)(k):I(k)}function I(k){return k===null||F(k)?e.check(Wn,v,j)(k):(e.enter("codeFlowValue"),T(k))}function T(k){return k===null||F(k)?(e.exit("codeFlowValue"),I(k)):(e.consume(k),T)}function j(k){return e.exit("codeFenced"),n(k)}function N(k,M,_){let q=0;return b;function b(w){return k.enter("lineEnding"),k.consume(w),k.exit("lineEnding"),E}function E(w){return k.enter("codeFencedFence"),B(w)?J(k,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):L(w)}function L(w){return w===s?(k.enter("codeFencedFenceSequence"),H(w)):_(w)}function H(w){return w===s?(q++,k.consume(w),H):q>=a?(k.exit("codeFencedFenceSequence"),B(w)?J(k,D,"whitespace")(w):D(w)):_(w)}function D(w){return w===null||F(w)?(k.exit("codeFencedFence"),M(w)):_(w)}}}const wn={name:"codeIndented",tokenize:Qa},$a={partial:!0,tokenize:Ga};function Qa(e,n,t){return r;function r(s){return e.enter("codeIndented"),Lr(e,i,t,"linePrefix",4,4)(s)}function i(s){return s===null?a(s):F(s)?e.attempt($a,i,a)(s):(e.enter("codeFlowValue"),o(s))}function o(s){return s===null||F(s)?(e.exit("codeFlowValue"),i(s)):(e.consume(s),o)}function a(s){return e.exit("codeIndented"),n(s)}}function Ga(e,n,t){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?t(a):F(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Lr(e,n,o,"linePrefix",4,4)(a)}function o(a){return F(a)?i(a):t(a)}}const Ya={name:"codeText",previous:Za,resolve:Ka,tokenize:eo};function Ka(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function Za(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function eo(e,n,t){let r=0,i,o;return a;function a(u){return e.enter("codeText"),e.enter("codeTextSequence"),s(u)}function s(u){return u===96?(e.consume(u),r++,s):(e.exit("codeTextSequence"),c(u))}function c(u){return u===null?t(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),c):u===96?(o=e.enter("codeTextSequence"),i=0,p(u)):F(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),c):(e.enter("codeTextData"),l(u))}function l(u){return u===null||u===32||u===96||F(u)?(e.exit("codeTextData"),c(u)):(e.consume(u),l)}function p(u){return u===96?(e.consume(u),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(u)):(o.type="codeTextData",l(u))}}class no{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&He(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),He(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),He(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);He(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);He(this.left,t.reverse())}}}function He(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Mr(e){const n={};let t=-1,r,i,o,a,s,c,l;const p=new no(e);for(;++t<p.length;){for(;t in n;)t=n[t];if(r=p.get(t),t&&r[1].type==="chunkFlow"&&p.get(t-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,to(p,t)),t=n[t],l=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(a=p.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},s=p.slice(i,t),s.unshift(r),p.splice(i,t-i+1,s))}}return pe(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!l}function to(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const o=[];let a=t._tokenizer;a||(a=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,c=[],l={};let p,u,h=-1,d=t,g=0,v=0;const C=[v];for(;d;){for(;e.get(++i)[1]!==d;);o.push(i),d._tokenizer||(p=r.sliceStream(d),d.next||p.push(null),u&&a.defineSkip(d.start),d._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(p),d._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),u=d,d=d.next}for(d=t;++h<s.length;)s[h][0]==="exit"&&s[h-1][0]==="enter"&&s[h][1].type===s[h-1][1].type&&s[h][1].start.line!==s[h][1].end.line&&(v=h+1,C.push(v),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(a.events=[],d?(d._tokenizer=void 0,d.previous=void 0):C.pop(),h=C.length;h--;){const y=s.slice(C[h],C[h+1]),I=o.pop();c.push([I,I+y.length-1]),e.splice(I,2,y)}for(c.reverse(),h=-1;++h<c.length;)l[g+c[h][0]]=g+c[h][1],g+=c[h][1]-c[h][0]-1;return l}const ro={resolve:ao,tokenize:oo},io={partial:!0,tokenize:so};function ao(e){return Mr(e),e}function oo(e,n){let t;return r;function r(s){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):F(s)?e.check(io,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),n(s)}function a(s){return e.consume(s),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function so(e,n,t){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),J(e,o,"linePrefix")}function o(a){if(a===null||F(a))return t(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function Ur(e,n,t,r,i,o,a,s,c){const l=c||Number.POSITIVE_INFINITY;let p=0;return u;function u(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),h):y===null||y===32||y===41||on(y)?t(y):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),v(y))}function h(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),d(y))}function d(y){return y===62?(e.exit("chunkString"),e.exit(s),h(y)):y===null||y===60||F(y)?t(y):(e.consume(y),y===92?g:d)}function g(y){return y===60||y===62||y===92?(e.consume(y),d):d(y)}function v(y){return!p&&(y===null||y===41||V(y))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),n(y)):p<l&&y===40?(e.consume(y),p++,v):y===41?(e.consume(y),p--,v):y===null||y===32||y===40||on(y)?t(y):(e.consume(y),y===92?C:v)}function C(y){return y===40||y===41||y===92?(e.consume(y),v):v(y)}}function zr(e,n,t,r,i,o){const a=this;let s=0,c;return l;function l(d){return e.enter(r),e.enter(i),e.consume(d),e.exit(i),e.enter(o),p}function p(d){return s>999||d===null||d===91||d===93&&!c||d===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?t(d):d===93?(e.exit(o),e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):F(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),u(d))}function u(d){return d===null||d===91||d===93||F(d)||s++>999?(e.exit("chunkString"),p(d)):(e.consume(d),c||(c=!B(d)),d===92?h:u)}function h(d){return d===91||d===92||d===93?(e.consume(d),s++,u):u(d)}}function Or(e,n,t,r,i,o){let a;return s;function s(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),a=h===40?41:h,c):t(h)}function c(h){return h===a?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):(e.enter(o),l(h))}function l(h){return h===a?(e.exit(o),c(a)):h===null?t(h):F(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),J(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===a||h===null||F(h)?(e.exit("chunkString"),l(h)):(e.consume(h),h===92?u:p)}function u(h){return h===a||h===92?(e.consume(h),p):p(h)}}function Xe(e,n){let t;return r;function r(i){return F(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):B(i)?J(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const lo={name:"definition",tokenize:uo},co={partial:!0,tokenize:po};function uo(e,n,t){const r=this;let i;return o;function o(d){return e.enter("definition"),a(d)}function a(d){return zr.call(r,e,s,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function s(d){return i=de(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),c):t(d)}function c(d){return V(d)?Xe(e,l)(d):l(d)}function l(d){return Ur(e,p,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function p(d){return e.attempt(co,u,u)(d)}function u(d){return B(d)?J(e,h,"whitespace")(d):h(d)}function h(d){return d===null||F(d)?(e.exit("definition"),r.parser.defined.push(i),n(d)):t(d)}}function po(e,n,t){return r;function r(s){return V(s)?Xe(e,i)(s):t(s)}function i(s){return Or(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return B(s)?J(e,a,"whitespace")(s):a(s)}function a(s){return s===null||F(s)?n(s):t(s)}}const ho={name:"hardBreakEscape",tokenize:mo};function mo(e,n,t){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return F(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const fo={name:"headingAtx",resolve:go,tokenize:yo};function go(e,n){let t=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},o={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"};pe(e,r,t-r+1,[["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n]])}return e}function yo(e,n,t){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),a(p)}function a(p){return p===35&&r++<6?(e.consume(p),a):p===null||V(p)?(e.exit("atxHeadingSequence"),s(p)):t(p)}function s(p){return p===35?(e.enter("atxHeadingSequence"),c(p)):p===null||F(p)?(e.exit("atxHeading"),n(p)):B(p)?J(e,s,"whitespace")(p):(e.enter("atxHeadingText"),l(p))}function c(p){return p===35?(e.consume(p),c):(e.exit("atxHeadingSequence"),s(p))}function l(p){return p===null||p===35||V(p)?(e.exit("atxHeadingText"),s(p)):(e.consume(p),l)}}const bo=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],_t=["pre","script","style","textarea"],xo={concrete:!0,name:"htmlFlow",resolveTo:wo,tokenize:So},ko={partial:!0,tokenize:vo};function wo(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function So(e,n,t){const r=this;let i,o,a,s,c;return l;function l(f){return p(f)}function p(f){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(f),u}function u(f){return f===33?(e.consume(f),h):f===47?(e.consume(f),o=!0,v):f===63?(e.consume(f),i=3,r.interrupt?n:m):ee(f)?(e.consume(f),a=String.fromCharCode(f),C):t(f)}function h(f){return f===45?(e.consume(f),i=2,d):f===91?(e.consume(f),i=5,s=0,g):ee(f)?(e.consume(f),i=4,r.interrupt?n:m):t(f)}function d(f){return f===45?(e.consume(f),r.interrupt?n:m):t(f)}function g(f){const ue="CDATA[";return f===ue.charCodeAt(s++)?(e.consume(f),s===ue.length?r.interrupt?n:L:g):t(f)}function v(f){return ee(f)?(e.consume(f),a=String.fromCharCode(f),C):t(f)}function C(f){if(f===null||f===47||f===62||V(f)){const ue=f===47,Ae=a.toLowerCase();return!ue&&!o&&_t.includes(Ae)?(i=1,r.interrupt?n(f):L(f)):bo.includes(a.toLowerCase())?(i=6,ue?(e.consume(f),y):r.interrupt?n(f):L(f)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(f):o?I(f):T(f))}return f===45||K(f)?(e.consume(f),a+=String.fromCharCode(f),C):t(f)}function y(f){return f===62?(e.consume(f),r.interrupt?n:L):t(f)}function I(f){return B(f)?(e.consume(f),I):b(f)}function T(f){return f===47?(e.consume(f),b):f===58||f===95||ee(f)?(e.consume(f),j):B(f)?(e.consume(f),T):b(f)}function j(f){return f===45||f===46||f===58||f===95||K(f)?(e.consume(f),j):N(f)}function N(f){return f===61?(e.consume(f),k):B(f)?(e.consume(f),N):T(f)}function k(f){return f===null||f===60||f===61||f===62||f===96?t(f):f===34||f===39?(e.consume(f),c=f,M):B(f)?(e.consume(f),k):_(f)}function M(f){return f===c?(e.consume(f),c=null,q):f===null||F(f)?t(f):(e.consume(f),M)}function _(f){return f===null||f===34||f===39||f===47||f===60||f===61||f===62||f===96||V(f)?N(f):(e.consume(f),_)}function q(f){return f===47||f===62||B(f)?T(f):t(f)}function b(f){return f===62?(e.consume(f),E):t(f)}function E(f){return f===null||F(f)?L(f):B(f)?(e.consume(f),E):t(f)}function L(f){return f===45&&i===2?(e.consume(f),R):f===60&&i===1?(e.consume(f),W):f===62&&i===4?(e.consume(f),ce):f===63&&i===3?(e.consume(f),m):f===93&&i===5?(e.consume(f),le):F(f)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(ko,ge,H)(f)):f===null||F(f)?(e.exit("htmlFlowData"),H(f)):(e.consume(f),L)}function H(f){return e.check(Wn,D,ge)(f)}function D(f){return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),w}function w(f){return f===null||F(f)?H(f):(e.enter("htmlFlowData"),L(f))}function R(f){return f===45?(e.consume(f),m):L(f)}function W(f){return f===47?(e.consume(f),a="",Y):L(f)}function Y(f){if(f===62){const ue=a.toLowerCase();return _t.includes(ue)?(e.consume(f),ce):L(f)}return ee(f)&&a.length<8?(e.consume(f),a+=String.fromCharCode(f),Y):L(f)}function le(f){return f===93?(e.consume(f),m):L(f)}function m(f){return f===62?(e.consume(f),ce):f===45&&i===2?(e.consume(f),m):L(f)}function ce(f){return f===null||F(f)?(e.exit("htmlFlowData"),ge(f)):(e.consume(f),ce)}function ge(f){return e.exit("htmlFlow"),n(f)}}function vo(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ge,n,t)}}const Co={name:"htmlText",tokenize:To};function To(e,n,t){const r=this;let i,o,a;return s;function s(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),c}function c(m){return m===33?(e.consume(m),l):m===47?(e.consume(m),N):m===63?(e.consume(m),T):ee(m)?(e.consume(m),_):t(m)}function l(m){return m===45?(e.consume(m),p):m===91?(e.consume(m),o=0,g):ee(m)?(e.consume(m),I):t(m)}function p(m){return m===45?(e.consume(m),d):t(m)}function u(m){return m===null?t(m):m===45?(e.consume(m),h):F(m)?(a=u,W(m)):(e.consume(m),u)}function h(m){return m===45?(e.consume(m),d):u(m)}function d(m){return m===62?R(m):m===45?h(m):u(m)}function g(m){const ce="CDATA[";return m===ce.charCodeAt(o++)?(e.consume(m),o===ce.length?v:g):t(m)}function v(m){return m===null?t(m):m===93?(e.consume(m),C):F(m)?(a=v,W(m)):(e.consume(m),v)}function C(m){return m===93?(e.consume(m),y):v(m)}function y(m){return m===62?R(m):m===93?(e.consume(m),y):v(m)}function I(m){return m===null||m===62?R(m):F(m)?(a=I,W(m)):(e.consume(m),I)}function T(m){return m===null?t(m):m===63?(e.consume(m),j):F(m)?(a=T,W(m)):(e.consume(m),T)}function j(m){return m===62?R(m):T(m)}function N(m){return ee(m)?(e.consume(m),k):t(m)}function k(m){return m===45||K(m)?(e.consume(m),k):M(m)}function M(m){return F(m)?(a=M,W(m)):B(m)?(e.consume(m),M):R(m)}function _(m){return m===45||K(m)?(e.consume(m),_):m===47||m===62||V(m)?q(m):t(m)}function q(m){return m===47?(e.consume(m),R):m===58||m===95||ee(m)?(e.consume(m),b):F(m)?(a=q,W(m)):B(m)?(e.consume(m),q):R(m)}function b(m){return m===45||m===46||m===58||m===95||K(m)?(e.consume(m),b):E(m)}function E(m){return m===61?(e.consume(m),L):F(m)?(a=E,W(m)):B(m)?(e.consume(m),E):q(m)}function L(m){return m===null||m===60||m===61||m===62||m===96?t(m):m===34||m===39?(e.consume(m),i=m,H):F(m)?(a=L,W(m)):B(m)?(e.consume(m),L):(e.consume(m),D)}function H(m){return m===i?(e.consume(m),i=void 0,w):m===null?t(m):F(m)?(a=H,W(m)):(e.consume(m),H)}function D(m){return m===null||m===34||m===39||m===60||m===61||m===96?t(m):m===47||m===62||V(m)?q(m):(e.consume(m),D)}function w(m){return m===47||m===62||V(m)?q(m):t(m)}function R(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),n):t(m)}function W(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),Y}function Y(m){return B(m)?J(e,le,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):le(m)}function le(m){return e.enter("htmlTextData"),a(m)}}const it={name:"labelEnd",resolveAll:Eo,resolveTo:Ro,tokenize:jo},Po={tokenize:Lo},Io={tokenize:Do},Ao={tokenize:No};function Eo(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&pe(e,0,e.length,t),e}function Ro(e,n){let t=e.length,r=0,i,o,a;for(;t--;){const p=e[t][1];if(i){if(p.type==="link"||p.type==="labelLink"&&p._inactive)break;e[t][0]==="enter"&&p.type==="labelLink"&&(p._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(p.type==="labelImage"||p.type==="labelLink")&&!p._balanced&&(i=t,p.type!=="labelLink")){r=2;break}}else p.type==="labelEnd"&&(o=t)}const s={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[i][1].start},end:{...e[o][1].end}},l={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",s,n],["enter",c,n]],a=se(a,e.slice(i+1,i+r+3)),a=se(a,[["enter",l,n]]),a=se(a,dn(n.parser.constructs.insideSpan.null,e.slice(i+r+4,o-3),n)),a=se(a,[["exit",l,n],e[o-2],e[o-1],["exit",c,n]]),a=se(a,e.slice(o+1)),a=se(a,[["exit",s,n]]),pe(e,i,e.length,a),e}function jo(e,n,t){const r=this,i=r._labelStarts;let o,a;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();o=i[i.length-1]}return s;function s(h){return o?o._inactive?u(h):(a=r.parser.defined.includes(de(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):t(h)}function c(h){return h===40?e.attempt(Po,p,a?p:u)(h):h===91?e.attempt(Io,p,a?l:u)(h):a?p(h):u(h)}function l(h){return e.attempt(Ao,p,u)(h)}function p(h){return i.pop(),n(h)}function u(h){return o._balanced=!0,t(h)}}function Lo(e,n,t){return r;function r(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),i}function i(u){return V(u)?Xe(e,o)(u):o(u)}function o(u){return u===41?p(u):Ur(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function a(u){return V(u)?Xe(e,c)(u):p(u)}function s(u){return t(u)}function c(u){return u===34||u===39||u===40?Or(e,l,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):p(u)}function l(u){return V(u)?Xe(e,p)(u):p(u)}function p(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),n):t(u)}}function Do(e,n,t){const r=this;return i;function i(s){return zr.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(de(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(s):t(s)}function a(s){return t(s)}}function No(e,n,t){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const Fo={name:"labelStartImage",resolveAll:it.resolveAll,tokenize:Mo};function Mo(e,n,t){const r=this;let i;return o;function o(c){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(c),e.exit("labelImageMarker"),a}function a(c){return c===91?(e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),i=e.exit("labelImage"),s):t(c)}function s(c){return c===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(c):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(c))}}const Uo={name:"labelStartLink",resolveAll:it.resolveAll,tokenize:zo};function zo(e,n,t){const r=this;let i;return o;function o(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),i=e.exit("labelLink"),a}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(s))}}const Sn={name:"lineEnding",tokenize:Oo};function Oo(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),J(e,n,"linePrefix")}}const rn={name:"thematicBreak",tokenize:Bo};function Bo(e,n,t){let r=0,i;return o;function o(l){return e.enter("thematicBreak"),a(l)}function a(l){return i=l,s(l)}function s(l){return l===i?(e.enter("thematicBreakSequence"),c(l)):r>=3&&(l===null||F(l))?(e.exit("thematicBreak"),n(l)):t(l)}function c(l){return l===i?(e.consume(l),r++,c):(e.exit("thematicBreakSequence"),B(l)?J(e,s,"whitespace")(l):s(l))}}const re={continuation:{tokenize:Jo},exit:Xo,name:"list",tokenize:Ho},_o={partial:!0,tokenize:Vo},Wo={partial:!0,tokenize:qo};function Ho(e,n,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(d){const g=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:Bn(d)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(rn,t,l)(d):l(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(d)}return t(d)}function c(d){return Bn(d)&&++a<10?(e.consume(d),c):(!r.interrupt||a<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),l(d)):t(d)}function l(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(Ge,r.interrupt?t:p,e.attempt(_o,h,u))}function p(d){return r.containerState.initialBlankLine=!0,o++,h(d)}function u(d){return B(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),h):t(d)}function h(d){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(d)}}function Jo(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Ge,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,J(e,n,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!B(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Wo,n,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,J(e,e.attempt(re,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function qo(e,n,t){const r=this;return J(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(o):t(o)}}function Xo(e){e.exit(this.containerState.type)}function Vo(e,n,t){const r=this;return J(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!B(o)&&a&&a[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const Wt={name:"setextUnderline",resolveTo:$o,tokenize:Qo};function $o(e,n){const t=new sn;let r=e.length,i,o,a;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(o=r)}else e[r][1].type==="content"&&t.add(r,1,[]),!a&&e[r][1].type==="definition"&&(a=r);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",a?(t.add(o,0,[["enter",s,n]]),t.add(a+1,0,[["exit",e[i][1],n]]),e[i][1].end={...e[a][1].end}):e[i][1]=s,t.add(e.length,0,[["exit",s,n]]),t.consume(e),e}function Qo(e,n,t){const r=this;let i;return o;function o(l){let p=r.events.length,u;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){u=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||u)?(e.enter("setextHeadingLine"),i=l,a(l)):t(l)}function a(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===i?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),B(l)?J(e,c,"lineSuffix")(l):c(l))}function c(l){return l===null||F(l)?(e.exit("setextHeadingLine"),n(l)):t(l)}}const Go={tokenize:Yo};function Yo(e){const n=this,t=e.attempt(Ge,r,e.attempt(this.parser.constructs.flowInitial,i,J(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ro,i)),"linePrefix")));return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Ko={resolveAll:_r()},Zo=Br("string"),es=Br("text");function Br(e){return{resolveAll:_r(e==="text"?ns:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],o=t.attempt(i,a,s);return a;function a(p){return l(p)?o(p):s(p)}function s(p){if(p===null){t.consume(p);return}return t.enter("data"),t.consume(p),c}function c(p){return l(p)?(t.exit("data"),o(p)):(t.consume(p),c)}function l(p){if(p===null)return!0;const u=i[p];let h=-1;if(u)for(;++h<u.length;){const d=u[h];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function _r(e){return n;function n(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(t,r):t}}function ns(e,n){const t=new sn;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],o=n.sliceStream(i);let a=o.length,s=-1,c=0,l;for(;a--;){const p=o[a];if(typeof p=="string"){for(s=p.length;p.charCodeAt(s-1)===32;)c++,s--;if(s)break;s=-1}else if(p===-2)l=!0,c++;else if(p!==-1){a++;break}}if(n._contentTypeTextTrailing&&r===e.length&&(c=0),c){const p={type:r===e.length||l||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?s:i.start._bufferIndex+s,_index:i.start._index+a,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...p.start},i.start.offset===i.end.offset?Object.assign(i,p):t.add(r,0,[["enter",p,n],["exit",p,n]])}r++}return t.consume(e),e}const ts={42:re,43:re,45:re,48:re,49:re,50:re,51:re,52:re,53:re,54:re,55:re,56:re,57:re,62:Dr},rs={91:lo},is={[-2]:wn,[-1]:wn,32:wn},as={35:fo,42:rn,45:[Wt,rn],60:xo,61:Wt,95:rn,96:Bt,126:Bt},os={38:Fr,92:Nr},ss={[-5]:Sn,[-4]:Sn,[-3]:Sn,33:Fo,38:Fr,42:_n,60:[za,Co],91:Uo,92:[ho,Nr],93:it,95:_n,96:Ya},ls={null:[_n,Ko]},cs={null:[42,95]},us={null:[]},ps=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:cs,contentInitial:rs,disable:us,document:ts,flow:as,flowInitial:is,insideSpan:ls,string:os,text:ss},Symbol.toStringTag,{value:"Module"}));function ds(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let a=[],s=[];const c={attempt:M(N),check:M(k),consume:I,enter:T,exit:j,interrupt:M(k,{interrupt:!0})},l={code:null,containerState:{},defineSkip:v,events:[],now:g,parser:e,previous:null,sliceSerialize:h,sliceStream:d,write:u};let p=n.tokenize.call(l,c);return n.resolveAll&&o.push(n),l;function u(E){return a=se(a,E),C(),a[a.length-1]!==null?[]:(_(n,0),l.events=dn(o,l.events,l),l.events)}function h(E,L){return ms(d(E),L)}function d(E){return hs(a,E)}function g(){const{_bufferIndex:E,_index:L,line:H,column:D,offset:w}=r;return{_bufferIndex:E,_index:L,line:H,column:D,offset:w}}function v(E){i[E.line]=E.column,b()}function C(){for(;r._index<a.length;){const E=a[r._index];if(typeof E=="string"){const L=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<E.length;)y(E.charCodeAt(r._bufferIndex))}else y(E)}}function y(E){p=p(E)}function I(E){F(E)?(r.line++,r.column=1,r.offset+=E===-3?2:1,b()):E!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=E}function T(E,L){const H=L||{};return H.type=E,H.start=g(),l.events.push(["enter",H,l]),s.push(H),H}function j(E){const L=s.pop();return L.end=g(),l.events.push(["exit",L,l]),L}function N(E,L){_(E,L.from)}function k(E,L){L.restore()}function M(E,L){return H;function H(D,w,R){let W,Y,le,m;return Array.isArray(D)?ge(D):"tokenize"in D?ge([D]):ce(D);function ce(G){return Me;function Me(ke){const Ee=ke!==null&&G[ke],Re=ke!==null&&G.null,gn=[...Array.isArray(Ee)?Ee:Ee?[Ee]:[],...Array.isArray(Re)?Re:Re?[Re]:[]];return ge(gn)(ke)}}function ge(G){return W=G,Y=0,G.length===0?R:f(G[Y])}function f(G){return Me;function Me(ke){return m=q(),le=G,G.partial||(l.currentConstruct=G),G.name&&l.parser.constructs.disable.null.includes(G.name)?Ae():G.tokenize.call(L?Object.assign(Object.create(l),L):l,c,ue,Ae)(ke)}}function ue(G){return E(le,m),w}function Ae(G){return m.restore(),++Y<W.length?f(W[Y]):R}}}function _(E,L){E.resolveAll&&!o.includes(E)&&o.push(E),E.resolve&&pe(l.events,L,l.events.length-L,E.resolve(l.events.slice(L),l)),E.resolveTo&&(l.events=E.resolveTo(l.events,l))}function q(){const E=g(),L=l.previous,H=l.currentConstruct,D=l.events.length,w=Array.from(s);return{from:D,restore:R};function R(){r=E,l.previous=L,l.currentConstruct=H,l.events.length=D,s=w,b()}}function b(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function hs(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let a;if(t===i)a=[e[t].slice(r,o)];else{if(a=e.slice(t,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function ms(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function fs(e){const r={constructs:Rr([ps,...(e||{}).extensions||[]]),content:i(ja),defined:[],document:i(Da),flow:i(Go),lazy:{},string:i(Zo),text:i(es)};return r;function i(o){return a;function a(s){return ds(r,o,s)}}}function gs(e){for(;!Mr(e););return e}const Ht=/[\0\t\n\r]/g;function ys(){let e=1,n="",t=!0,r;return i;function i(o,a,s){o=n+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o));const c=[];let l=0;for(n="",t&&(o.charCodeAt(0)===65279&&l++,t=void 0);l<o.length;){Ht.lastIndex=l;const p=Ht.exec(o),u=p&&p.index!==void 0?p.index:o.length,h=o.charCodeAt(u);if(!p){n=o.slice(l);break}if(h===10&&l===u&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),l<u&&(c.push(o.slice(l,u)),e+=u-l),h){case 0:{c.push(65533),e++;break}case 9:{const d=Math.ceil(e/4)*4;for(c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}l=u+1}return s&&(r&&c.push(-5),n&&c.push(n),c.push(null)),c}}const bs=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function xs(e){return e.replace(bs,ks)}function ks(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return jr(t.slice(o?2:1),o?16:10)}return rt(t)||e}const Wr={}.hasOwnProperty;function ws(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),Ss(t)(gs(fs(t).document().write(ys()(e,n,!0))))}function Ss(e){const n={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(wt),autolinkProtocol:b,autolinkEmail:b,atxHeading:a(bt),blockQuote:a(gn),characterEscape:b,characterReference:b,codeFenced:a(yt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:a(yt,s),codeText:a(wi,s),codeTextData:b,data:b,codeFlowValue:b,definition:a(Si),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:a(vi),hardBreakEscape:a(xt),hardBreakTrailing:a(xt),htmlFlow:a(kt,s),htmlFlowData:b,htmlText:a(kt,s),htmlTextData:b,image:a(Ci),label:s,link:a(wt),listItem:a(Ti),listItemValue:d,listOrdered:a(St,h),listUnordered:a(St),paragraph:a(Pi),reference:ue,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:a(bt),strong:a(Ii),thematicBreak:a(Ei)},exit:{atxHeading:l(),atxHeadingSequence:k,autolink:l(),autolinkEmail:Re,autolinkProtocol:Ee,blockQuote:l(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:G,characterReferenceMarkerNumeric:G,characterReferenceValue:Me,characterReference:ke,codeFenced:l(y),codeFencedFence:C,codeFencedFenceInfo:g,codeFencedFenceMeta:v,codeFlowValue:E,codeIndented:l(I),codeText:l(R),codeTextData:E,data:E,definition:l(),definitionDestinationString:N,definitionLabelString:T,definitionTitleString:j,emphasis:l(),hardBreakEscape:l(H),hardBreakTrailing:l(H),htmlFlow:l(D),htmlFlowData:E,htmlText:l(w),htmlTextData:E,image:l(Y),label:m,labelText:le,lineEnding:L,link:l(W),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Ae,resourceDestinationString:ce,resourceTitleString:ge,resource:f,setextHeading:l(q),setextHeadingLineSequence:_,setextHeadingText:M,strong:l(),thematicBreak:l()}};Hr(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(x){let A={type:"root",children:[],position:void 0};const z={stack:[A],tokenStack:[],config:n,enter:c,exit:p,buffer:s,resume:u,data:t},O=[],ne=[];let $=-1;for(;++$<x.length;)if(ne.push(x[$]),x[$][1].type==="listOrdered"||x[$][1].type==="listUnordered")if(x[$][0]==="enter")O.push(ne.length-1);else{const te=O.pop();o(ne,te)}for(x=ne,$=-1;++$<x.length;){const te=n[x[$][0]];x[$][0]==="enter"&&n.beforeEnter.length>0&&i(n.beforeEnter,{...z,sliceSerialize:x[$][2].sliceSerialize},x[$][1]),Wr.call(te,x[$][1].type)&&te[x[$][1].type].call({...z,sliceSerialize:x[$][2].sliceSerialize},x[$][1]),x[$][0]==="exit"&&n.afterExit.length>0&&i(n.afterExit,{...z,sliceSerialize:x[$][2].sliceSerialize},x[$][1])}if(z.tokenStack.length>0){const te=z.tokenStack[z.tokenStack.length-1];(te[1]||Jt).call(z,void 0,te[0])}for(A.position={start:we(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:we(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},$=-1;++$<n.transforms.length;)A=n.transforms[$](A)||A;return A}function i(x,A,z){let O=-1;for(;++O<x.length;)x[O].call(A,z)}function o(x,A){const z=x.length-1;let O=A-1,ne=-1,$=!1,te,he,Ue,ze;const Oe=[];for(;++O<=z;){const ae=x[O];switch(ae[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ae[0]==="enter"?ne++:ne--,ze=void 0;break}case"lineEndingBlank":{ae[0]==="enter"&&(te&&!ze&&!ne&&!Ue&&(Ue=O),ze=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ze=void 0}if(!ne&&ae[0]==="enter"&&ae[1].type==="listItemPrefix"||ne===-1&&ae[0]==="exit"&&(ae[1].type==="listUnordered"||ae[1].type==="listOrdered")){if(te){let je=O;for(he=void 0;je--;){const ye=x[je];if(ye[1].type==="lineEnding"||ye[1].type==="lineEndingBlank"){if(ye[0]==="exit")continue;he&&(x[he][1].type="lineEndingBlank",$=!0),ye[1].type="lineEnding",he=je}else if(!(ye[1].type==="linePrefix"||ye[1].type==="blockQuotePrefix"||ye[1].type==="blockQuotePrefixWhitespace"||ye[1].type==="blockQuoteMarker"||ye[1].type==="listItemIndent"))break}Ue&&(!he||Ue<he)&&(te._spread=!0),te.end=Object.assign({},he?x[he][1].start:ae[1].end),Oe.push({at:he||O,event:["exit",te,ae[2]]})}if(ae[1].type==="listItemPrefix"){const je={type:"listItem",_spread:!1,start:Object.assign({},ae[1].start),end:void 0};te=je,Oe.push({at:O,event:["enter",je,ae[2]]}),Ue=void 0,ze=!0}}}const vt=x.splice(A);let yn=0;for(O=-1;++O<vt.length;){for(;yn<Oe.length&&Oe[yn].at===A+O;)x.push(Oe[yn++].event);x.push(vt[O])}x[A][1]._spread=$}function a(x,A){return z;function z(O){c.call(this,x(O),O),A&&A.call(this,O)}}function s(){this.stack.push({type:"fragment",children:[]})}function c(x,A,z){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([A,z||void 0]),x.position={start:we(A.start),end:void 0}}function l(x){return A;function A(z){x&&x.call(this,z),p.call(this,z)}}function p(x,A){const z=this.stack.pop(),O=this.tokenStack.pop();if(!O)throw new Error("Cannot close `"+x.type+"` ("+qe({start:x.start,end:x.end})+"): it’s not open");O[0].type!==x.type&&(A?A.call(this,x,O[0]):(O[1]||Jt).call(this,x,O[0])),z.position.end=we(x.end)}function u(){return tt(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function d(x){if(this.data.expectingFirstListItemValue){const A=this.stack[this.stack.length-2];A.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function g(){const x=this.resume(),A=this.stack[this.stack.length-1];A.lang=x}function v(){const x=this.resume(),A=this.stack[this.stack.length-1];A.meta=x}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function y(){const x=this.resume(),A=this.stack[this.stack.length-1];A.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function I(){const x=this.resume(),A=this.stack[this.stack.length-1];A.value=x.replace(/(\r?\n|\r)$/g,"")}function T(x){const A=this.resume(),z=this.stack[this.stack.length-1];z.label=A,z.identifier=de(this.sliceSerialize(x)).toLowerCase()}function j(){const x=this.resume(),A=this.stack[this.stack.length-1];A.title=x}function N(){const x=this.resume(),A=this.stack[this.stack.length-1];A.url=x}function k(x){const A=this.stack[this.stack.length-1];if(!A.depth){const z=this.sliceSerialize(x).length;A.depth=z}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function _(x){const A=this.stack[this.stack.length-1];A.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function b(x){const z=this.stack[this.stack.length-1].children;let O=z[z.length-1];(!O||O.type!=="text")&&(O=Ai(),O.position={start:we(x.start),end:void 0},z.push(O)),this.stack.push(O)}function E(x){const A=this.stack.pop();A.value+=this.sliceSerialize(x),A.position.end=we(x.end)}function L(x){const A=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=A.children[A.children.length-1];z.position.end=we(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(A.type)&&(b.call(this,x),E.call(this,x))}function H(){this.data.atHardBreak=!0}function D(){const x=this.resume(),A=this.stack[this.stack.length-1];A.value=x}function w(){const x=this.resume(),A=this.stack[this.stack.length-1];A.value=x}function R(){const x=this.resume(),A=this.stack[this.stack.length-1];A.value=x}function W(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=A,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function Y(){const x=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=A,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function le(x){const A=this.sliceSerialize(x),z=this.stack[this.stack.length-2];z.label=xs(A),z.identifier=de(A).toLowerCase()}function m(){const x=this.stack[this.stack.length-1],A=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const O=x.children;z.children=O}else z.alt=A}function ce(){const x=this.resume(),A=this.stack[this.stack.length-1];A.url=x}function ge(){const x=this.resume(),A=this.stack[this.stack.length-1];A.title=x}function f(){this.data.inReference=void 0}function ue(){this.data.referenceType="collapsed"}function Ae(x){const A=this.resume(),z=this.stack[this.stack.length-1];z.label=A,z.identifier=de(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function G(x){this.data.characterReferenceType=x.type}function Me(x){const A=this.sliceSerialize(x),z=this.data.characterReferenceType;let O;z?(O=jr(A,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):O=rt(A);const ne=this.stack[this.stack.length-1];ne.value+=O}function ke(x){const A=this.stack.pop();A.position.end=we(x.end)}function Ee(x){E.call(this,x);const A=this.stack[this.stack.length-1];A.url=this.sliceSerialize(x)}function Re(x){E.call(this,x);const A=this.stack[this.stack.length-1];A.url="mailto:"+this.sliceSerialize(x)}function gn(){return{type:"blockquote",children:[],position:void 0}}function yt(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function wi(){return{type:"inlineCode",value:"",position:void 0}}function Si(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function vi(){return{type:"emphasis",children:[],position:void 0}}function bt(){return{type:"heading",depth:0,children:[],position:void 0}}function xt(){return{type:"break",position:void 0}}function kt(){return{type:"html",value:"",position:void 0}}function Ci(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function wt(){return{type:"link",title:null,url:"",children:[],position:void 0}}function St(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[],position:void 0}}function Ti(x){return{type:"listItem",spread:x._spread,checked:null,children:[],position:void 0}}function Pi(){return{type:"paragraph",children:[],position:void 0}}function Ii(){return{type:"strong",children:[],position:void 0}}function Ai(){return{type:"text",value:"",position:void 0}}function Ei(){return{type:"thematicBreak",position:void 0}}}function we(e){return{line:e.line,column:e.column,offset:e.offset}}function Hr(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Hr(e,r):vs(e,r)}}function vs(e,n){let t;for(t in n)if(Wr.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=n[t];r&&e[t].push(r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Jt(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+qe({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+qe({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+qe({start:n.start,end:n.end})+") is still open")}function Cs(e){const n=this;n.parser=t;function t(r){return ws(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Ts(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Ps(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function Is(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function As(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Es(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Rs(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Fe(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const c={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,c);const l={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(n,l),e.applyData(n,l)}function js(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ls(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Jr(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function Ds(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Jr(e,n);const i={src:Fe(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,o),e.applyData(n,o)}function Ns(e,n){const t={src:Fe(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Fs(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function Ms(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Jr(e,n);const i={href:Fe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function Us(e,n){const t={href:Fe(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function zs(e,n,t){const r=e.all(n),i=t?Os(t):qr(n),o={},a=[];if(typeof n.checked=="boolean"){const p=r[0];let u;p&&p.type==="element"&&p.tagName==="p"?u=p:(u={type:"element",tagName:"p",properties:{},children:[]},r.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const p=r[s];(i||s!==0||p.type!=="element"||p.tagName!=="p")&&a.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?a.push(...p.children):a.push(p)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:o,children:a};return e.patch(n,l),e.applyData(n,l)}function Os(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=qr(t[r])}return n}function qr(e){const n=e.spread;return n??e.children.length>1}function Bs(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,o),e.applyData(n,o)}function _s(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ws(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Hs(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Js(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),i.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},s=Kn(n.children[1]),c=vr(n.children[n.children.length-1]);s&&c&&(a.position={start:s,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function qs(e,n,t){const r=t?t.children:void 0,o=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,s=a?a.length:n.children.length;let c=-1;const l=[];for(;++c<s;){const u=n.children[c],h={},d=a?a[c]:void 0;d&&(h.align=d);let g={type:"element",tagName:o,properties:h,children:[]};u&&(g.children=e.all(u),e.patch(u,g),g=e.applyData(u,g)),l.push(g)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(n,p),e.applyData(n,p)}function Xs(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const qt=9,Xt=32;function Vs(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const o=[];for(;r;)o.push(Vt(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return o.push(Vt(n.slice(i),i>0,!1)),o.join("")}function Vt(e,n,t){let r=0,i=e.length;if(n){let o=e.codePointAt(r);for(;o===qt||o===Xt;)r++,o=e.codePointAt(r)}if(t){let o=e.codePointAt(i-1);for(;o===qt||o===Xt;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function $s(e,n){const t={type:"text",value:Vs(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Qs(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Gs={blockquote:Ts,break:Ps,code:Is,delete:As,emphasis:Es,footnoteReference:Rs,heading:js,html:Ls,imageReference:Ds,image:Ns,inlineCode:Fs,linkReference:Ms,link:Us,listItem:zs,list:Bs,paragraph:_s,root:Ws,strong:Hs,table:Js,tableCell:Xs,tableRow:qs,text:$s,thematicBreak:Qs,toml:Ze,yaml:Ze,definition:Ze,footnoteDefinition:Ze};function Ze(){}const Xr=-1,hn=0,Ve=1,cn=2,at=3,ot=4,st=5,lt=6,Vr=7,$r=8,{defineProperty:Ys}=Object,Qr=typeof self=="object"?self:globalThis,$t=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Qr[e](n)},Ks=(e,n)=>{const t=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=n[i];switch(o){case hn:case Xr:return t(a,i);case Ve:{const s=t([],i);for(const c of a)s.push(r(c));return s}case cn:{const s=t({},i);for(const[c,l]of a){const p=r(c),u=r(l);p==="__proto__"?Ys(s,p,{value:u,configurable:!0,enumerable:!0,writable:!0}):s[p]=u}return s}case at:return t(new Date(a),i);case ot:{const{source:s,flags:c}=a;return t(new RegExp(s,c),i)}case st:{const s=t(new Map,i);for(const[c,l]of a)s.set(r(c),r(l));return s}case lt:{const s=t(new Set,i);for(const c of a)s.add(r(c));return s}case Vr:{const{name:s,message:c}=a;return t(typeof Qr[s]=="function"?$t(s,c):new Error(c),i)}case $r:return t(BigInt(a),i);case"BigInt":return t(Object(BigInt(a)),i);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return t(new DataView(s),a)}case"-0":return-0}return t($t(o,a),i)};return r},Qt=e=>Ks(new Map,e)(0),Ce="",{toString:Zs}={},{keys:el,is:nl}=Object,Je=e=>{const n=typeof e;if(n!=="object"||!e)return[hn,n];const t=Zs.call(e).slice(8,-1);switch(t){case"Array":return[Ve,Ce];case"Object":return[cn,Ce];case"Date":return[at,Ce];case"RegExp":return[ot,Ce];case"Map":return[st,Ce];case"Set":return[lt,Ce];case"DataView":return[Ve,t]}return t.includes("Array")?[Ve,t]:e instanceof Error?[Vr,e.name||"Error"]:[cn,t]},en=([e,n])=>e===hn&&(n==="function"||n==="symbol"),tl=(e,n,t,r)=>{const i=(a,s)=>{const c=r.push(a)-1;return t.set(s,c),c},o=a=>{if(t.has(a))return t.get(a);let[s,c]=Je(a);switch(s){case hn:{let p=a;switch(c){case"bigint":s=$r,p=a.toString();break;case"number":if(!a&&nl(a,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);p=null;break;case"undefined":return i([Xr],a)}return i([s,p],a)}case Ve:{if(c){let h=a;return c==="DataView"?h=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(h=new Uint8Array(a)),i([c,[...h]],a)}const p=[],u=i([s,p],a);for(const h of a)p.push(o(h));return u}case cn:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(n&&"toJSON"in a)return o(a.toJSON());const p=[],u=i([s,p],a);for(const h of el(a))(e||!en(Je(a[h])))&&p.push([o(h),o(a[h])]);return u}case at:return i([s,isNaN(a.getTime())?Ce:a.toISOString()],a);case ot:{const{source:p,flags:u}=a;return i([s,{source:p,flags:u}],a)}case st:{const p=[],u=i([s,p],a);for(const[h,d]of a)(e||!(en(Je(h))||en(Je(d))))&&p.push([o(h),o(d)]);return u}case lt:{const p=[],u=i([s,p],a);for(const h of a)(e||!en(Je(h)))&&p.push(o(h));return u}}const{message:l}=a;return i([s,{name:c,message:l}],a)};return o},Gt=(e,{json:n,lossy:t}={})=>{const r=[];return tl(!(n||t),!!n,new Map,r)(e),r},un=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Qt(Gt(e,n)):structuredClone(e):(e,n)=>Qt(Gt(e,n));function rl(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function il(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function al(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||rl,r=e.options.footnoteBackLabel||il,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let c=-1;for(;++c<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[c]);if(!l)continue;const p=e.all(l),u=String(l.identifier).toUpperCase(),h=Fe(u.toLowerCase());let d=0;const g=[],v=e.footnoteCounts.get(u);for(;v!==void 0&&++d<=v;){g.length>0&&g.push({type:"text",value:" "});let I=typeof t=="string"?t:t(c,d);typeof I=="string"&&(I={type:"text",value:I}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,d),className:["data-footnote-backref"]},children:Array.isArray(I)?I:[I]})}const C=p[p.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const I=C.children[C.children.length-1];I&&I.type==="text"?I.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...g)}else p.push(...g);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(p,!0)};e.patch(l,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...un(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const mn=(function(e){if(e==null)return cl;if(typeof e=="function")return fn(e);if(typeof e=="object")return Array.isArray(e)?ol(e):sl(e);if(typeof e=="string")return ll(e);throw new Error("Expected function, string, or object as test")});function ol(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=mn(e[t]);return fn(r);function r(...i){let o=-1;for(;++o<n.length;)if(n[o].apply(this,i))return!0;return!1}}function sl(e){const n=e;return fn(t);function t(r){const i=r;let o;for(o in e)if(i[o]!==n[o])return!1;return!0}}function ll(e){return fn(n);function n(t){return t&&t.type===e}}function fn(e){return n;function n(t,r,i){return!!(ul(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function cl(){return!0}function ul(e){return e!==null&&typeof e=="object"&&"type"in e}const Gr=[],pl=!0,an=!1,Hn="skip";function Jn(e,n,t,r){if(!e||typeof e!="object")throw new Error("Unexpected value `"+e+"` for `tree`, expected node");let i=!0,o,a,s,c;if(typeof t=="function"||t&&typeof t=="object"?(o=n,a=t,r&&(i=!1)):(a=n,t&&(i=!1)),typeof a=="function")s=a;else if(a&&typeof a=="object"){if(!(a.enter===null||a.enter===void 0))if(typeof a.enter=="function")s=a.enter;else throw new Error("Unexpected value `"+a.enter+"` for `visitors.enter`, expected optional visitor");if(typeof a.exit=="function")c=a.exit;else throw new Error("Unexpected value `"+a.exit+"` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)")}else throw new Error("Unexpected value `"+a+"` for `enter` or `visitors`, expected visitor or object with visitors");const l=mn(o),p=i?1:-1;u(e,void 0,[])();function u(h,d,g){const v=h&&typeof h=="object"?h:{};if(typeof v.type=="string"){const y=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(C,"name",{value:"node ("+(h.type+(y?"<"+y+">":""))+")"})}return C;function C(){const y=!o||l(h,d,g[g.length-1]||void 0);let I=Gr;if(s&&y&&(I=Yt(s(h,g,d)),I[0]===an))return I;if("children"in h&&h.children){const T=h;if(T.children&&I[0]!==Hn){let j=(i?-1:T.children.length)+p;const N=[...g,T];for(;j>-1&&j<T.children.length;){const k=T.children[j],M=u(k,j,N)();if(M[0]===an)return M;j=typeof M[1]=="number"?M[1]:j+p}}}if(c&&y){const T=Yt(c(h,g,d));if(T[0]===Hn)throw new Error("Unexpected value `"+T[0]+"` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");if(T[0]===an||typeof T[1]=="number")return T}return I}}}function Yt(e){return Array.isArray(e)?e:typeof e=="number"?[pl,e]:e==null?Gr:[e]}function ct(e,n,t,r){let i,o,a;o=n,a=t,typeof o=="function"?Jn(e,i,qn(o),a):Jn(e,i,dl(o),a)}function dl(e){return!e||typeof e!="object"?e:{enter:typeof e.enter=="function"?qn(e.enter):e.enter,exit:typeof e.exit=="function"?qn(e.exit):e.exit}}function qn(e){return n;function n(t,r,i){return e(t,i,r[r.length-1])}}const Xn={}.hasOwnProperty,hl={};function ml(e,n){const t=n||hl,r=new Map,i=new Map,o=new Map,a={...Gs,...t.handlers},s={all:l,applyData:gl,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:t,patch:fl,wrap:bl};return ct(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const u=p.type==="definition"?r:i,h=String(p.identifier).toUpperCase();u.has(h)||u.set(h,p)}}),s;function c(p,u){const h=p.type,d=s.handlers[h];if(Xn.call(s.handlers,h)&&d)return d(s,p,u);if(s.options.passThrough&&s.options.passThrough.includes(h)){if("children"in p){const{children:v,...C}=p,y=un(C);return y.children=s.all(p),y}return un(p)}return(s.options.unknownHandler||yl)(s,p,u)}function l(p){const u=[];if("children"in p){const h=p.children;let d=-1;for(;++d<h.length;){const g=s.one(h[d],p);if(g){if(d&&h[d-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Kt(g.value)),!Array.isArray(g)&&g.type==="element")){const v=g.children[0];v&&v.type==="text"&&(v.value=Kt(v.value))}Array.isArray(g)?u.push(...g):u.push(g)}}}return u}}function fl(e,n){e.position&&(n.position=ra(e))}function gl(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&o&&Object.assign(t.properties,un(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function yl(e,n){const t=n.data||{},r="value"in n&&!(Xn.call(t,"hProperties")||Xn.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function bl(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Kt(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Zt(e,n){const t=ml(e,n),r=t.one(e,void 0),i=al(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function xl(e,n){return e&&"run"in e?async function(t,r){const i=Zt(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Zt(t,{file:r,...e||n})}}function er(e){if(e)throw e}var vn,nr;function kl(){if(nr)return vn;nr=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(l){return typeof Array.isArray=="function"?Array.isArray(l):n.call(l)==="[object Array]"},o=function(l){if(!l||n.call(l)!=="[object Object]")return!1;var p=e.call(l,"constructor"),u=l.constructor&&l.constructor.prototype&&e.call(l.constructor.prototype,"isPrototypeOf");if(l.constructor&&!p&&!u)return!1;var h;for(h in l);return typeof h>"u"||e.call(l,h)},a=function(l,p){t&&p.name==="__proto__"?t(l,p.name,{enumerable:!0,configurable:!0,value:p.newValue,writable:!0}):l[p.name]=p.newValue},s=function(l,p){if(p==="__proto__")if(e.call(l,p)){if(r)return r(l,p).value}else return;return l[p]};return vn=function c(){var l,p,u,h,d,g,v=arguments[0],C=1,y=arguments.length,I=!1;for(typeof v=="boolean"&&(I=v,v=arguments[1]||{},C=2),(v==null||typeof v!="object"&&typeof v!="function")&&(v={});C<y;++C)if(l=arguments[C],l!=null)for(p in l)u=s(v,p),h=s(l,p),v!==h&&(I&&h&&(o(h)||(d=i(h)))?(d?(d=!1,g=u&&i(u)?u:[]):g=u&&o(u)?u:{},a(v,{name:p,newValue:c(I,g,h)})):typeof h<"u"&&a(v,{name:p,newValue:h}));return v},vn}var wl=kl();const Cn=fr(wl);function Vn(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Sl(){const e=[],n={run:t,use:r};return n;function t(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(c,...l){const p=e[++o];let u=-1;if(c){a(c);return}for(;++u<i.length;)(l[u]===null||l[u]===void 0)&&(l[u]=i[u]);i=l,p?vl(p,s)(...l):a(null,...l)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function vl(e,n){let t;return r;function r(...a){const s=e.length>a.length;let c;s&&a.push(i);try{c=e.apply(this,a)}catch(l){const p=l;if(s&&t)throw p;return i(p)}s||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...s){t||(t=!0,n(a,...s))}function o(a){i(null,a)}}const me={basename:Cl,dirname:Tl,extname:Pl,join:Il,sep:"/"};function Cl(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ye(e);let t=0,r=-1,i=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,s=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===n.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function Tl(e){if(Ye(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Pl(e){Ye(e);let n=e.length,t=-1,r=0,i=-1,o=0,a;for(;n--;){const s=e.codePointAt(n);if(s===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),s===46?i<0?i=n:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function Il(...e){let n=-1,t;for(;++n<e.length;)Ye(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Al(t)}function Al(e){Ye(e);const n=e.codePointAt(0)===47;let t=El(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function El(e,n){let t="",r=0,i=-1,o=0,a=-1,s,c;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(c=t.lastIndexOf("/"),c!==t.length-1){c<0?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),i=a,o=0;continue}}else if(t.length>0){t="",r=0,i=a,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,a):t=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return t}function Ye(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Rl={cwd:jl};function jl(){return"/"}function $n(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ll(e){if(typeof e=="string")e=new URL(e);else if(!$n(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Dl(e)}function Dl(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Tn=["history","path","basename","stem","extname","dirname"];class Yr{constructor(n){let t;n?$n(n)?t={path:n}:typeof n=="string"||Nl(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Rl.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Tn.length;){const o=Tn[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)Tn.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?me.basename(this.path):void 0}set basename(n){In(n,"basename"),Pn(n,"basename"),this.path=me.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?me.dirname(this.path):void 0}set dirname(n){tr(this.basename,"dirname"),this.path=me.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?me.extname(this.path):void 0}set extname(n){if(Pn(n,"extname"),tr(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=me.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){$n(n)&&(n=Ll(n)),In(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?me.basename(this.path,this.extname):void 0}set stem(n){In(n,"stem"),Pn(n,"stem"),this.path=me.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Z(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Pn(e,n){if(e&&e.includes(me.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+me.sep+"`")}function In(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function tr(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Nl(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Fl=(function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o}),Ml={}.hasOwnProperty;class ut extends Fl{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Sl()}copy(){const n=new ut;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Cn(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Rn("data",this.frozen),this.namespace[n]=t,this):Ml.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Rn("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=nn(n),r=this.parser||this.Parser;return An("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),An("process",this.parser||this.Parser),En("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,a){const s=nn(n),c=r.parse(s);r.run(c,s,function(p,u,h){if(p||!u||!h)return l(p);const d=u,g=r.stringify(d,h);Ol(g)?h.value=g:h.result=g,l(p,h)});function l(p,u){p||!u?a(p):o?o(u):t(void 0,u)}}}processSync(n){let t=!1,r;return this.freeze(),An("processSync",this.parser||this.Parser),En("processSync",this.compiler||this.Compiler),this.process(n,i),ir("processSync","process",t),r;function i(o,a){t=!0,er(o),r=a}}run(n,t,r){rr(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const c=nn(t);i.run(n,c,l);function l(p,u,h){const d=u||n;p?s(p):a?a(d):r(void 0,d,h)}}}runSync(n,t){let r=!1,i;return this.run(n,t,o),ir("runSync","run",r),i;function o(a,s){er(a),i=s,r=!0}}stringify(n,t){this.freeze();const r=nn(t),i=this.compiler||this.Compiler;return En("stringify",i),rr(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Rn("use",this.frozen),n!=null)if(typeof n=="function")c(n,t);else if(typeof n=="object")Array.isArray(n)?s(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(l){if(typeof l=="function")c(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[p,...u]=l;c(p,u)}else a(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function a(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(i.settings=Cn(!0,i.settings,l.settings))}function s(l){let p=-1;if(l!=null)if(Array.isArray(l))for(;++p<l.length;){const u=l[p];o(u)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function c(l,p){let u=-1,h=-1;for(;++u<r.length;)if(r[u][0]===l){h=u;break}if(h===-1)r.push([l,...p]);else if(p.length>0){let[d,...g]=p;const v=r[h][1];Vn(v)&&Vn(d)&&(d=Cn(!0,v,d)),r[h]=[l,d,...g]}}}}const Ul=new ut().freeze();function An(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function En(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Rn(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rr(e){if(!Vn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ir(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function nn(e){return zl(e)?e:new Yr(e)}function zl(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Ol(e){return typeof e=="string"||Bl(e)}function Bl(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _l="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ar=[],or={allowDangerousHtml:!0},Wl=/^(https?|ircs?|mailto|xmpp)$/i,Hl=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Jl(e){const n=ql(e),t=Xl(e);return Vl(n.runSync(n.parse(t),t),e)}function ql(e){const n=e.rehypePlugins||ar,t=e.remarkPlugins||ar,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...or}:or;return Ul().use(Cs).use(t).use(xl,r).use(n)}function Xl(e){const n=e.children||"",t=new Yr;return typeof n=="string"&&(t.value=n),t}function Vl(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,o=n.disallowedElements,a=n.skipHtml,s=n.unwrapDisallowed,c=n.urlTransform||$l;for(const p of Hl)Object.hasOwn(n,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+_l+p.id,void 0);return ct(e,l),la(e,{Fragment:S.Fragment,components:i,ignoreInvalidStyle:!0,jsx:S.jsx,jsxs:S.jsxs,passKeys:!0,passNode:!0});function l(p,u,h){if(p.type==="raw"&&h&&typeof u=="number")return a?h.children.splice(u,1):h.children[u]={type:"text",value:p.value},u;if(p.type==="element"){let d;for(d in kn)if(Object.hasOwn(kn,d)&&Object.hasOwn(p.properties,d)){const g=p.properties[d],v=kn[d];(v===null||v.includes(p.tagName))&&(p.properties[d]=c(String(g||""),d,p))}}if(p.type==="element"){let d=t?!t.includes(p.tagName):o?o.includes(p.tagName):!1;if(!d&&r&&typeof u=="number"&&(d=!r(p,u,h)),d&&h&&typeof u=="number")return s&&p.children?h.children.splice(u,1,...p.children):h.children.splice(u,1),u}}}function $l(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||Wl.test(e.slice(0,n))?e:""}function sr(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function Ql(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Gl(e,n,t){const i=mn((t||{}).ignore||[]),o=Yl(n);let a=-1;for(;++a<o.length;)Jn(e,s);function s(l,p,u){if(l.type==="text"&&typeof u=="number")return c(l,p,u);if(i(l,u,p[p.length-1]))return Hn}function c(l,p,u){const h=p[p.length-1],d=o[a][0],g=o[a][1];let v=0,C=!1,y=[];d.lastIndex=0;let I=d.exec(l.value);for(;I;){const j=I.index,N={index:I.index,input:I.input,stack:[...p,l]};let k=g(...I,N);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1)d.lastIndex=j+1;else{if(v!==j&&T({type:"text",value:l.value.slice(v,j)}),Array.isArray(k))for(const M of k)T(M);else k&&T(k);v=j+I[0].length,C=!0}if(!d.global)break;I=d.exec(l.value)}return C?(v<l.value.length&&T({type:"text",value:l.value.slice(v)}),h.children.splice(u,1,...y)):y=[l],u+y.length;function T(j){const N=y[y.length-1];N&&N.type==="text"&&j.type==="text"?N.value+=j.value:y.push(j)}}}function Yl(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=[],t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([Kl(i[0]),Zl(i[1])])}return n}function Kl(e){return typeof e=="string"?new RegExp(Ql(e),"g"):e}function Zl(e){return typeof e=="function"?e:function(){return e}}const jn="phrasing",Ln=["autolink","link","image","label"];function ec(){return{transforms:[sc],enter:{literalAutolink:tc,literalAutolinkEmail:Dn,literalAutolinkHttp:Dn,literalAutolinkWww:Dn},exit:{literalAutolink:oc,literalAutolinkEmail:ac,literalAutolinkHttp:rc,literalAutolinkWww:ic}}}function nc(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:jn,notInConstruct:Ln},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:jn,notInConstruct:Ln},{character:":",before:"[ps]",after:"\\/",inConstruct:jn,notInConstruct:Ln}]}}function tc(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Dn(e){this.config.enter.autolinkProtocol.call(this,e)}function rc(e){this.config.exit.autolinkProtocol.call(this,e)}function ic(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function ac(e){this.config.exit.autolinkEmail.call(this,e)}function oc(e){this.exit(e)}function sc(e){Gl(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,lc],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),cc]],{ignore:["link","linkReference"]})}function lc(e,n,t,r,i){let o="";if(!Kr(i)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!uc(t)))return!1;const a=pc(t+r);if(!a[0])return!1;const s={type:"link",title:null,url:o+n+a[0],children:[{type:"text",value:n+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function cc(e,n,t,r){return!Kr(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function uc(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function pc(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=sr(e,"(");let o=sr(e,")");for(;r!==-1&&i>o;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),o++;return[e,t]}function Kr(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Pe(t)||pn(t))&&(!n||t!==47)}Zr.peek=kc;function dc(){this.buffer()}function hc(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function mc(){this.buffer()}function fc(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function gc(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=de(this.sliceSerialize(e)).toLowerCase(),t.label=n}function yc(e){this.exit(e)}function bc(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=de(this.sliceSerialize(e)).toLowerCase(),t.label=n}function xc(e){this.exit(e)}function kc(){return"["}function Zr(e,n,t,r){const i=t.createTracker(r);let o=i.move("[^");const a=t.enter("footnoteReference"),s=t.enter("reference");return o+=i.move(t.safe(t.associationId(e),{after:"]",before:o})),s(),a(),o+=i.move("]"),o}function wc(){return{enter:{gfmFootnoteCallString:dc,gfmFootnoteCall:hc,gfmFootnoteDefinitionLabelString:mc,gfmFootnoteDefinition:fc},exit:{gfmFootnoteCallString:gc,gfmFootnoteCall:yc,gfmFootnoteDefinitionLabelString:bc,gfmFootnoteDefinition:xc}}}function Sc(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Zr},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,o,a){const s=o.createTracker(a);let c=s.move("[^");const l=o.enter("footnoteDefinition"),p=o.enter("label");return c+=s.move(o.safe(o.associationId(r),{before:c,after:"]"})),p(),c+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),c+=s.move((n?`
`:" ")+o.indentLines(o.containerFlow(r,s.current()),n?ei:vc))),l(),c}}function vc(e,n,t){return n===0?e:ei(e,n,t)}function ei(e,n,t){return(t?"":"    ")+e}const Cc=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];pt.attention=Ec;pt.peek=Rc;function Tc(){return{canContainEols:["delete"],enter:{strikethrough:Ic},exit:{strikethrough:Ac}}}function Pc(){return{handlers:{delete:pt},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Cc}]}}function Ic(e){this.enter({type:"delete",children:[],position:void 0},e)}function Ac(e){this.exit(e)}function pt(e,n,t,r){const i=t.createTracker(r),o=t.stack.includes("strikethrough")?"~":"~~",a=t.enter("strikethrough");let s=i.move(o);return s+=t.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move(o),a(),s}function Ec(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function Rc(){return"~"}function jc(e){return e.length}function Lc(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||jc,o=[],a=[],s=[],c=[];let l=0,p=-1;for(;++p<e.length;){const v=[],C=[];let y=-1;for(e[p].length>l&&(l=e[p].length);++y<e[p].length;){const I=Dc(e[p][y]);if(t.alignDelimiters!==!1){const T=i(I);C[y]=T,(c[y]===void 0||T>c[y])&&(c[y]=T)}v.push(I)}a[p]=v,s[p]=C}let u=-1;if(typeof r=="object"&&"length"in r)for(;++u<l;)o[u]=lr(r[u]);else{const v=lr(r);for(;++u<l;)o[u]=v}u=-1;const h=[],d=[];for(;++u<l;){const v=o[u];let C="",y="";v===99?(C=":",y=":"):v===108?C=":":v===114&&(y=":");let I=t.alignDelimiters===!1?1:Math.max(1,c[u]-C.length-y.length);const T=C+"-".repeat(I)+y;t.alignDelimiters!==!1&&(I=C.length+I+y.length,I>c[u]&&(c[u]=I),d[u]=I),h[u]=T}a.splice(1,0,h),s.splice(1,0,d),p=-1;const g=[];for(;++p<a.length;){const v=a[p],C=s[p];u=-1;const y=[];for(;++u<l;){const I=v[u]||"";let T="",j="";if(t.alignDelimiters!==!1){const N=c[u]-(C[u]||0),k=o[u];k===114?T=" ".repeat(N):k===99?N%2?(T=" ".repeat(N/2+.5),j=" ".repeat(N/2-.5)):(T=" ".repeat(N/2),j=T):j=" ".repeat(N)}t.delimiterStart!==!1&&!u&&y.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&I==="")&&(t.delimiterStart!==!1||u)&&y.push(" "),t.alignDelimiters!==!1&&y.push(T),y.push(I),t.alignDelimiters!==!1&&y.push(j),t.padding!==!1&&y.push(" "),(t.delimiterEnd!==!1||u!==l-1)&&y.push("|")}g.push(t.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return g.join(`
`)}function Dc(e){return e==null?"":String(e)}function lr(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}const Nc=mn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Fc(e,n,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const a=t.indentLines(t.containerFlow(e,o.current()),Mc);return i(),a}function Mc(e,n,t){return">"+(t?"":" ")+e}function Uc(e,n){return cr(e,n.inConstruct,!0)&&!cr(e,n.notInConstruct,!1)}function cr(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function ur(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;){const o=t.unsafe[i];if(o.character===`
`&&!o.before&&!o.after&&Uc(t.stack,o))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function zc(e,n){const t=String(e);let r=t.indexOf(n),i=r,o=0,a=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>a&&(a=o):o=1,i=r+n.length,r=t.indexOf(n,i);return a}function Oc(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function Bc(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function _c(e,n,t,r){const i=Bc(t),o=e.value||"";if(Oc(e,t)){const u=t.enter("codeIndented"),h=t.indentLines(o,Wc);return u(),h}const a=t.createTracker(r),s=i.repeat(Math.max(zc(o,i)+1,3)),c=t.enter("codeFenced"),l=i==="`"?"GraveAccent":"Tilde";let p=a.move(s);if(e.lang){const u=t.enter(`codeFencedLang${l}`);p+=a.move(t.safe(e.lang,{before:p,after:" ",encode:["`"],...a.current()})),u()}if(e.lang&&e.meta){const u=t.enter(`codeFencedMeta${l}`);p+=a.move(" "),p+=a.move(t.safe(e.meta,{before:p,after:`
`,encode:["`"],...a.current()})),u()}return p+=a.move(`
`),o&&(p+=a.move(o+`
`)),p+=a.move(s),c(),p}function Wc(e,n,t){return(t?"":"    ")+e}function dt(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function Hc(e,n,t,r){const i=dt(t),o=i==='"'?"Quote":"Apostrophe",a=t.enter("definition");let s=t.enter("label");const c=t.createTracker(r);let l=c.move("[");return l+=c.move(t.safe(t.associationId(e),{before:l,after:"]",...c.current()})),l+=c.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),l+=c.move("<"),l+=c.move(t.safe(e.url,{before:l,after:">",...c.current()})),l+=c.move(">")):(s=t.enter("destinationRaw"),l+=c.move(t.safe(e.url,{before:l,after:e.title?" ":`
`,...c.current()}))),s(),e.title&&(s=t.enter(`title${o}`),l+=c.move(" "+i),l+=c.move(t.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),a(),l}function Jc(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}ht.attention=qc;ht.peek=Xc;function ht(e,n,t,r){const i=t.enter("phrasing"),o=t.containerPhrasing({type:"root",children:[e]},r);return i(),o}function qc(e,n){return{construct:"emphasis",markers:Jc(n)==="*"?["*","_"]:["_","*"],sizes:[1]}}function Xc(e,n,t){return t.options.emphasis||"*"}function Vc(e){return"&#x"+e.toString(16).toUpperCase()+";"}function $c(e,n){let t=!1;return ct(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,an}),!!((!e.depth||e.depth<3)&&tt(e)&&(n.options.setext||t))}function Qc(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(r);if($c(e,t)){const u=t.enter("headingSetext"),h=t.enter("phrasing"),d=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return h(),u(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const a="#".repeat(i),s=t.enter("headingAtx"),c=t.enter("phrasing");o.move(a+" ");let l=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});const p=l.charCodeAt(0);return(p===9||p===32)&&(l=Vc(p)+l.slice(1)),l=l?a+" "+l:a,t.options.closeAtx&&(l+=" "+a),c(),s(),l}ni.peek=Gc;function ni(e){return e.value||""}function Gc(){return"<"}ti.peek=Yc;function ti(e,n,t,r){const i=dt(t),o=i==='"'?"Quote":"Apostrophe",a=t.enter("image");let s=t.enter("label");const c=t.createTracker(r);let l=c.move("![");return l+=c.move(t.safe(e.alt,{before:l,after:"]",...c.current()})),l+=c.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),l+=c.move("<"),l+=c.move(t.safe(e.url,{before:l,after:">",...c.current()})),l+=c.move(">")):(s=t.enter("destinationRaw"),l+=c.move(t.safe(e.url,{before:l,after:e.title?" ":")",...c.current()}))),s(),e.title&&(s=t.enter(`title${o}`),l+=c.move(" "+i),l+=c.move(t.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(")"),a(),l}function Yc(){return"!"}ri.peek=Kc;function ri(e,n,t,r){const i=e.referenceType,o=t.enter("imageReference");let a=t.enter("label");const s=t.createTracker(r);let c=s.move("![");const l=t.safe(e.alt,{before:c,after:"]",...s.current()});c+=s.move(l+"]["),a();const p=t.stack;t.stack=p.filter(function(h){return h!=="phrasing"}),a=t.enter("reference");const u=t.safe(t.associationId(e),{before:c,after:"]",...s.current()});return a(),t.stack=p,o(),i==="full"||!l||l!==u?c+=s.move(u+"]"):i==="shortcut"?c=c.slice(0,-1):c+=s.move("]"),c}function Kc(){return"!"}ii.peek=Zc;function ii(e,n,t){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const a=t.unsafe[o],s=t.compilePattern(a);if(!a.atBreak)continue;let c;for(;c=s.exec(r);){let l=c.index;r.charCodeAt(l)===10&&r.charCodeAt(l-1)===13&&l--,r=r.slice(0,l)+" "+r.slice(c.index+1)}}return i+r+i}function Zc(){return"`"}function ai(e,n){const t=tt(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}oi.peek=eu;function oi(e,n,t,r){const i=dt(t),o=i==='"'?"Quote":"Apostrophe",a=t.createTracker(r);if(ai(e,t)){const p=t.stack;t.stack=p.filter(function(d){return d!=="phrasing"});const u=t.enter("autolink");let h=a.move("<");return h+=a.move(t.containerPhrasing(e,{before:h,after:">",...a.current()})),h+=a.move(">"),u(),t.stack=p,h}const s=t.enter("link");let c=t.enter("label"),l=a.move("[");return l+=a.move(t.containerPhrasing(e,{before:l,after:"](",...a.current()})),l+=a.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=t.enter("destinationLiteral"),l+=a.move("<"),l+=a.move(t.safe(e.url,{before:l,after:">",...a.current()})),l+=a.move(">")):(c=t.enter("destinationRaw"),l+=a.move(t.safe(e.url,{before:l,after:e.title?" ":")",...a.current()}))),c(),e.title&&(c=t.enter(`title${o}`),l+=a.move(" "+i),l+=a.move(t.safe(e.title,{before:l,after:i,...a.current()})),l+=a.move(i),c()),l+=a.move(")"),s(),l}function eu(e,n,t){return ai(e,t)?"<":"["}si.peek=nu;function si(e,n,t,r){const i=e.referenceType,o=t.enter("linkReference");let a=t.enter("label");const s=t.createTracker(r);let c=s.move("[");const l=t.containerPhrasing(e,{before:c,after:"]",...s.current()});c+=s.move(l+"]["),a();const p=t.stack;t.stack=p.filter(function(h){return h!=="phrasing"}),a=t.enter("reference");const u=t.safe(t.associationId(e),{before:c,after:"]",...s.current()});return a(),t.stack=p,o(),i==="full"||!l||l!==u?c+=s.move(u+"]"):i==="shortcut"?c=c.slice(0,-1):c+=s.move("]"),c}function nu(){return"["}function mt(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function tu(e){const n=mt(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function ru(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function li(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function iu(e,n,t,r){const i=t.enter("list"),o=t.bulletCurrent;let a=e.ordered?ru(t):mt(t);const s=e.ordered?a==="."?")":".":tu(t);let c=n&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!e.ordered){const p=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&p&&(!p.children||!p.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(c=!0),li(t)===a&&p){let u=-1;for(;++u<e.children.length;){const h=e.children[u];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){c=!0;break}}}}c&&(a=s),t.bulletCurrent=a;const l=t.containerFlow(e,r);return t.bulletLastUsed=a,t.bulletCurrent=o,i(),l}function au(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function ou(e,n,t,r){const i=au(t);let o=t.bulletCurrent||mt(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let a=o.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(a=Math.ceil(a/4)*4);const s=t.createTracker(r);s.move(o+" ".repeat(a-o.length)),s.shift(a);const c=t.enter("listItem"),l=t.indentLines(t.containerFlow(e,s.current()),p);return c(),l;function p(u,h,d){return h?(d?"":" ".repeat(a))+u:(d?o:o+" ".repeat(a-o.length))+u}}function su(e,n,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),a=t.containerPhrasing(e,r);return o(),i(),a}function lu(e,n,t,r){if(!e.children.some(function(s){return Nc(s)}))return t.containerFlow(e,r);const o=t.enter("phrasing"),a=t.containerPhrasing(e,r);return o(),a}function cu(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}ft.attention=uu;ft.peek=pu;function ft(e,n,t,r){const i=t.enter("phrasing"),o=t.containerPhrasing({type:"root",children:[e]},r);return i(),o}function uu(e,n){return{construct:"strong",markers:cu(n)==="*"?["*","_"]:["_","*"],sizes:[2]}}function pu(e,n,t){return t.options.strong||"*"}function du(e,n,t,r){const i=n?n.children:[],o=i.indexOf(e);return t.safe(e.value,{...r,afterNode:i[o+1],beforeNode:i[o-1]})}function hu(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function mu(e,n,t){const r=(li(t)+(t.options.ruleSpaces?" ":"")).repeat(hu(t));return t.options.ruleSpaces?r.slice(0,-1):r}const ci={blockquote:Fc,break:ur,code:_c,definition:Hc,emphasis:ht,hardBreak:ur,heading:Qc,html:ni,image:ti,imageReference:ri,inlineCode:ii,link:oi,linkReference:si,list:iu,listItem:ou,paragraph:su,root:lu,strong:ft,text:du,thematicBreak:mu};function fu(){return{enter:{table:gu,tableData:pr,tableHeader:pr,tableRow:bu},exit:{codeText:xu,table:yu,tableData:Nn,tableHeader:Nn,tableRow:Nn}}}function gu(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function yu(e){this.exit(e),this.data.inTable=void 0}function bu(e){this.enter({type:"tableRow",children:[]},e)}function Nn(e){this.exit(e)}function pr(e){this.enter({type:"tableCell",children:[]},e)}function xu(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,ku));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function ku(e,n){return n==="|"?n:e}function wu(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:a,tableCell:c,tableRow:s}};function a(d,g,v,C){return l(p(d,v,C),d.align)}function s(d,g,v,C){const y=u(d,v,C),I=l([y]);return I.slice(0,I.indexOf(`
`))}function c(d,g,v,C){const y=v.enter("tableCell"),I=v.enter("phrasing"),T=v.containerPhrasing(d,{...C,before:o,after:o});return I(),y(),T}function l(d,g){return Lc(d,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function p(d,g,v){const C=d.children;let y=-1;const I=[],T=g.enter("table");for(;++y<C.length;)I[y]=u(C[y],g,v);return T(),I}function u(d,g,v){const C=d.children;let y=-1;const I=[],T=g.enter("tableRow");for(;++y<C.length;)I[y]=c(C[y],d,g,v);return T(),I}function h(d,g,v){let C=ci.inlineCode(d,g,v);return v.stack.includes("tableCell")&&(C=C.replace(/\|/g,"\\$&")),C}}function Su(){return{exit:{taskListCheckValueChecked:dr,taskListCheckValueUnchecked:dr,paragraph:Cu}}}function vu(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Tu}}}function dr(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function Cu(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let o=-1,a;for(;++o<i.length;){const s=i[o];if(s.type==="paragraph"){a=s;break}}a===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function Tu(e,n,t,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",s=t.createTracker(r);o&&s.move(a);let c=ci.listItem(e,n,t,{...r,...s.current()});return o&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(p){return p+a}}function Pu(){return[ec(),wc(),Tc(),fu(),Su()]}function Iu(e){return{extensions:[nc(),Sc(e),Pc(),wu(e),vu()]}}const Au={tokenize:Nu,partial:!0},ui={tokenize:Fu,partial:!0},pi={tokenize:Mu,partial:!0},di={tokenize:Uu,partial:!0},Eu={tokenize:zu,partial:!0},hi={name:"wwwAutolink",tokenize:Lu,previous:fi},mi={name:"protocolAutolink",tokenize:Du,previous:gi},xe={name:"emailAutolink",tokenize:ju,previous:yi},fe={};function Ru(){return{text:fe}}let ve=48;for(;ve<123;)fe[ve]=xe,ve++,ve===58?ve=65:ve===91&&(ve=97);fe[43]=xe;fe[45]=xe;fe[46]=xe;fe[95]=xe;fe[72]=[xe,mi];fe[104]=[xe,mi];fe[87]=[xe,hi];fe[119]=[xe,hi];function ju(e,n,t){const r=this;let i,o;return a;function a(u){return!Qn(u)||!yi.call(r,r.previous)||gt(r.events)?t(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(u))}function s(u){return Qn(u)?(e.consume(u),s):u===64?(e.consume(u),c):t(u)}function c(u){return u===46?e.check(Eu,p,l)(u):u===45||u===95||K(u)?(o=!0,e.consume(u),c):p(u)}function l(u){return e.consume(u),i=!0,c}function p(u){return o&&i&&ee(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(u)):t(u)}}function Lu(e,n,t){const r=this;return i;function i(a){return a!==87&&a!==119||!fi.call(r,r.previous)||gt(r.events)?t(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Au,e.attempt(ui,e.attempt(pi,o),t),t)(a))}function o(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(a)}}function Du(e,n,t){const r=this;let i="",o=!1;return a;function a(u){return(u===72||u===104)&&gi.call(r,r.previous)&&!gt(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(u),e.consume(u),s):t(u)}function s(u){if(ee(u)&&i.length<5)return i+=String.fromCodePoint(u),e.consume(u),s;if(u===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(u),c}return t(u)}function c(u){return u===47?(e.consume(u),o?l:(o=!0,c)):t(u)}function l(u){return u===null||on(u)||V(u)||Pe(u)||pn(u)?t(u):e.attempt(ui,e.attempt(pi,p),t)(u)}function p(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(u)}}function Nu(e,n,t){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),o):t(a)}function o(a){return a===null?t(a):n(a)}}function Fu(e,n,t){let r,i,o;return a;function a(l){return l===46||l===95?e.check(di,c,s)(l):l===null||V(l)||Pe(l)||l!==45&&pn(l)?c(l):(o=!0,e.consume(l),a)}function s(l){return l===95?r=!0:(i=r,r=void 0),e.consume(l),a}function c(l){return i||r||!o?t(l):n(l)}}function Mu(e,n){let t=0,r=0;return i;function i(a){return a===40?(t++,e.consume(a),i):a===41&&r<t?o(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(di,n,o)(a):a===null||V(a)||Pe(a)?n(a):(e.consume(a),i)}function o(a){return a===41&&r++,e.consume(a),i}}function Uu(e,n,t){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),o):s===93?(e.consume(s),i):s===60||s===null||V(s)||Pe(s)?n(s):t(s)}function i(s){return s===null||s===40||s===91||V(s)||Pe(s)?n(s):r(s)}function o(s){return ee(s)?a(s):t(s)}function a(s){return s===59?(e.consume(s),r):ee(s)?(e.consume(s),a):t(s)}}function zu(e,n,t){return r;function r(o){return e.consume(o),i}function i(o){return K(o)?t(o):n(o)}}function fi(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||V(e)}function gi(e){return!ee(e)}function yi(e){return!(e===47||Qn(e))}function Qn(e){return e===43||e===45||e===46||e===95||K(e)}function gt(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const Ou={tokenize:Vu,partial:!0};function Bu(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Ju,continuation:{tokenize:qu},exit:Xu}},text:{91:{name:"gfmFootnoteCall",tokenize:Hu},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:_u,resolveTo:Wu}}}}function _u(e,n,t){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const c=r.events[i][1];if(c.type==="labelImage"){a=c;break}if(c.type==="gfmFootnoteCall"||c.type==="labelLink"||c.type==="label"||c.type==="image"||c.type==="link")break}return s;function s(c){if(!a||!a._balanced)return t(c);const l=de(r.sliceSerialize({start:a.end,end:r.now()}));return l.codePointAt(0)!==94||!o.includes(l.slice(1))?t(c):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),n(c))}}function Wu(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",o,n],["enter",a,n],["exit",a,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...s),e}function Hu(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,a;return s;function s(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),c}function c(u){return u!==94?t(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",l)}function l(u){if(o>999||u===93&&!a||u===null||u===91||V(u))return t(u);if(u===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(de(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(u)}return V(u)||(a=!0),o++,e.consume(u),u===92?p:l}function p(u){return u===91||u===92||u===93?(e.consume(u),o++,l):l(u)}}function Ju(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,a=0,s;return c;function c(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),l}function l(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):t(g)}function p(g){if(a>999||g===93&&!s||g===null||g===91||V(g))return t(g);if(g===93){e.exit("chunkString");const v=e.exit("gfmFootnoteDefinitionLabelString");return o=de(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return V(g)||(s=!0),a++,e.consume(g),g===92?u:p}function u(g){return g===91||g===92||g===93?(e.consume(g),a++,p):p(g)}function h(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(o)||i.push(o),J(e,d,"gfmFootnoteDefinitionWhitespace")):t(g)}function d(g){return n(g)}}function qu(e,n,t){return e.check(Ge,n,e.attempt(Ou,n,t))}function Xu(e){e.exit("gfmFootnoteDefinition")}function Vu(e,n,t){const r=this;return J(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?n(o):t(o)}}function $u(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,s){let c=-1;for(;++c<a.length;)if(a[c][0]==="enter"&&a[c][1].type==="strikethroughSequenceTemporary"&&a[c][1]._close){let l=c;for(;l--;)if(a[l][0]==="exit"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._open&&a[c][1].end.offset-a[c][1].start.offset===a[l][1].end.offset-a[l][1].start.offset){a[c][1].type="strikethroughSequence",a[l][1].type="strikethroughSequence";const p={type:"strikethrough",start:Object.assign({},a[l][1].start),end:Object.assign({},a[c][1].end)},u={type:"strikethroughText",start:Object.assign({},a[l][1].end),end:Object.assign({},a[c][1].start)},h=[["enter",p,s],["enter",a[l][1],s],["exit",a[l][1],s],["enter",u,s]],d=s.parser.constructs.insideSpan.null;d&&pe(h,h.length,0,dn(d,a.slice(l+1,c),s)),pe(h,h.length,0,[["exit",u,s],["enter",a[c][1],s],["exit",a[c][1],s],["exit",p,s]]),pe(a,l-1,c-l+3,h),c=l+h.length-2;break}}for(c=-1;++c<a.length;)a[c][1].type==="strikethroughSequenceTemporary"&&(a[c][1].type="data");return a}function o(a,s,c){const l=this.previous,p=this.events;let u=0;return h;function h(g){return l===126&&p[p.length-1][1].type!=="characterEscape"?c(g):(a.enter("strikethroughSequenceTemporary"),d(g))}function d(g){const v=ln(l);if(g===126)return u>1?c(g):(a.consume(g),u++,d);if(u<2&&!t)return c(g);const C=a.exit("strikethroughSequenceTemporary"),y=ln(g);return C._open=!y||y===2&&!!v,C._close=!v||v===2&&!!y,s(g)}}}class Qu{constructor(){this.map=[],this.index=new Map}add(n,t,r){Gu(this,n,t,r)}consume(n){if(this.map.sort(function(o,a){return o[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0,this.index.clear()}}function Gu(e,n,t,r){if(t===0&&r.length===0)return;const i=e.index.get(n);if(i){i[1]+=t,i[2].push(...r);return}const o=[n,t,r];e.map.push(o),e.index.set(n,o)}function Yu(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function Ku(){return{flow:{null:{name:"table",tokenize:Zu,resolveAll:ep}}}}function Zu(e,n,t){const r=this;let i=0,o=0,a;return s;function s(b){let E=r.events.length-1;for(;E>-1;){const{type:D}=r.events[E][1];if(D==="lineEnding"||D==="linePrefix")E--;else break}const L=E>-1?r.events[E][1].type:null,H=L==="tableHead"||L==="tableRow"?k:c;return H===k&&r.parser.lazy[r.now().line]?t(b):H(b)}function c(b){return e.enter("tableHead"),e.enter("tableRow"),l(b)}function l(b){return b===124||(a=!0,o+=1),p(b)}function p(b){return b===null?t(b):F(b)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),d):t(b):B(b)?J(e,p,"whitespace")(b):(o+=1,a&&(a=!1,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),a=!0,p):(e.enter("data"),u(b)))}function u(b){return b===null||b===124||V(b)?(e.exit("data"),p(b)):(e.consume(b),b===92?h:u)}function h(b){return b===92||b===124?(e.consume(b),u):u(b)}function d(b){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(b):(e.enter("tableDelimiterRow"),a=!1,B(b)?J(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):g(b))}function g(b){return b===45||b===58?C(b):b===124?(a=!0,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),v):N(b)}function v(b){return B(b)?J(e,C,"whitespace")(b):C(b)}function C(b){return b===58?(o+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),y):b===45?(o+=1,y(b)):b===null||F(b)?j(b):N(b)}function y(b){return b===45?(e.enter("tableDelimiterFiller"),I(b)):N(b)}function I(b){return b===45?(e.consume(b),I):b===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),T):(e.exit("tableDelimiterFiller"),T(b))}function T(b){return B(b)?J(e,j,"whitespace")(b):j(b)}function j(b){return b===124?g(b):b===null||F(b)?!a||i!==o?N(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(b)):N(b)}function N(b){return t(b)}function k(b){return e.enter("tableRow"),M(b)}function M(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),M):b===null||F(b)?(e.exit("tableRow"),n(b)):B(b)?J(e,M,"whitespace")(b):(e.enter("data"),_(b))}function _(b){return b===null||b===124||V(b)?(e.exit("data"),M(b)):(e.consume(b),b===92?q:_)}function q(b){return b===92||b===124?(e.consume(b),_):_(b)}}function ep(e,n){let t=-1,r=!0,i=0,o=[0,0,0,0],a=[0,0,0,0],s=!1,c=0,l,p,u;const h=new Qu;for(;++t<e.length;){const d=e[t],g=d[1];d[0]==="enter"?g.type==="tableHead"?(s=!1,c!==0&&(hr(h,n,c,l,p),p=void 0,c=0),l={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},h.add(t,0,[["enter",l,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,u=void 0,o=[0,0,0,0],a=[0,t+1,0,0],s&&(s=!1,p={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},h.add(t,0,[["enter",p,n]])),i=g.type==="tableDelimiterRow"?2:p?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(o[1]!==0&&(a[0]=a[1],u=tn(h,n,o,i,void 0,u),o=[0,0,0,0]),a[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(a[0]=a[1],u=tn(h,n,o,i,void 0,u)),o=a,a=[o[1],t,0,0])):g.type==="tableHead"?(s=!0,c=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(c=t,o[1]!==0?(a[0]=a[1],u=tn(h,n,o,i,t,u)):a[1]!==0&&(u=tn(h,n,a,i,t,u)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(a[3]=t)}for(c!==0&&hr(h,n,c,l,p),h.consume(n.events),t=-1;++t<n.events.length;){const d=n.events[t];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=Yu(n.events,t))}return e}function tn(e,n,t,r,i,o){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";t[0]!==0&&(o.end=Object.assign({},De(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const c=De(n.events,t[1]);if(o={type:a,start:Object.assign({},c),end:Object.assign({},c)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const l=De(n.events,t[2]),p=De(n.events,t[3]),u={type:s,start:Object.assign({},l),end:Object.assign({},p)};if(e.add(t[2],0,[["enter",u,n]]),r!==2){const h=n.events[t[2]],d=n.events[t[3]];if(h[1].end=Object.assign({},d[1].end),h[1].type="chunkText",h[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,v=t[3]-t[2]-1;e.add(g,v,[])}}e.add(t[3]+1,0,[["exit",u,n]])}return i!==void 0&&(o.end=Object.assign({},De(n.events,i)),e.add(i,0,[["exit",o,n]]),o=void 0),o}function hr(e,n,t,r,i){const o=[],a=De(n.events,t);i&&(i.end=Object.assign({},a),o.push(["exit",i,n])),r.end=Object.assign({},a),o.push(["exit",r,n]),e.add(t+1,0,o)}function De(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const np={name:"tasklistCheck",tokenize:rp};function tp(){return{text:{91:np}}}function rp(e,n,t){const r=this;return i;function i(c){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(c):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),o)}function o(c){return V(c)?(e.enter("taskListCheckValueUnchecked"),e.consume(c),e.exit("taskListCheckValueUnchecked"),a):c===88||c===120?(e.enter("taskListCheckValueChecked"),e.consume(c),e.exit("taskListCheckValueChecked"),a):t(c)}function a(c){return c===93?(e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):t(c)}function s(c){return F(c)?n(c):B(c)?e.check({tokenize:ip},n,t)(c):t(c)}}function ip(e,n,t){return J(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function ap(e){return Rr([Ru(),Bu(),$u(e),Ku(),tp()])}const op={};function sp(e){const n=this,t=e||op,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(ap(t)),o.push(Pu()),a.push(Iu(t))}const lp=`# Chapter 1 — Coding exercises

Work through these exercises after reading the
[chapter notes](./notes.md). Type the code rather than copy-pasting it, and
check that your editor and build report the expected types.

## Exercise 1 — Compose a small interface

Create \`Welcome\` and \`App\` function components. \`App\` should render \`Welcome\`
and one additional paragraph.

**Check your work**

- Both components begin with uppercase names.
- \`Welcome\` returns a heading.
- \`App\` composes \`Welcome\` using \`<Welcome />\`.

## Exercise 2 — Add a typed component contract

Create a \`UserCard\` component that accepts a \`name\` string and an \`age\` number.
Render both values.

\`\`\`tsx
interface UserCardProps {
  name: string;
  age: number;
}
\`\`\`

Try a valid invocation, then temporarily pass a string as \`age\`. Observe the
TypeScript diagnostic and restore the valid value. Remember: this is
development-time checking, not runtime validation.

## Exercise 3 — Model predictable data

Create a \`Product\` interface with \`id\`, \`name\`, \`price\`, and \`inStock\`
properties. Create one valid product object and render its name and price in a
\`ProductCard\`.

**Extension:** intentionally omit one required property, observe the error, and
then fix it.

## Mini project: Simple Profile Dashboard

Build a small profile dashboard using data and reusable components.

### Requirements

1. Define a \`Profile\` interface with:
   - \`name: string\`
   - \`role: string\`
   - \`location: string\`
   - \`bio: string\`
   - \`skills: string[]\`
   - \`projects: number\`
   - \`experience: number\`
2. Put the interface in \`src/types/profile.ts\`.
3. Create \`ProfileCard.tsx\`, accepting a typed \`profile\` prop and showing the
   name, role, location, and bio.
4. Create \`SkillList.tsx\`, accepting \`string[]\` and rendering each skill as a
   list item with a stable key.
5. Create \`StatCard.tsx\`, accepting a label and numeric value.
6. Compose the pieces in \`App.tsx\` using fictional sample data. Do not publish
   personal contact information or real credentials in course examples.
7. Display at least two statistics, such as projects and years of experience.

### Suggested component contracts

\`\`\`tsx
interface ProfileCardProps {
  profile: Profile;
}

interface SkillListProps {
  skills: string[];
}

interface StatCardProps {
  label: string;
  value: number;
}
\`\`\`

### Completion checklist

- [ ] The project compiles without type errors.
- [ ] \`Profile\` is imported with a type-only import where appropriate.
- [ ] Components receive data through typed props.
- [ ] Skills render from an array and each item has a stable \`key\`.
- [ ] \`App.tsx\` composes components instead of owning all markup.
- [ ] Sample content is fictional and does not expose private data.
- [ ] You can explain the flow: \`Profile\` → component props → rendered UI.

### Hints

- Keep \`Profile\` in one shared type file so components agree on its shape.
- Keep each component focused on its display responsibility.
- TypeScript can check your declared data shape, but data received from an
  external API would need runtime validation in a real application.
- Start with a simple component contract; avoid building a generic component
  framework for this small dashboard.
`,cp=`# Chapter 1 — Interview questions and answers

Use these questions for self-review after completing the
[chapter notes](./notes.md) and [coding exercises](./exercises.md). Try
answering aloud before reading each answer.

## Core questions

### 1. What is React?

React is a JavaScript library for building user interfaces using reusable,
composable components.

### 2. Why is React called component-based?

React applications are built by combining independent UI components into larger
interfaces. Components help organize rendering and reuse.

### 3. What is a React component?

A component is a reusable piece of UI, commonly a function that returns JSX.
It can receive data through props and can participate in rendering and user
interaction.

### 4. What is JSX?

JSX is a syntax extension used to describe UI in JavaScript or TypeScript. A
build tool transforms it into JavaScript the runtime can execute.

### 5. Is JSX HTML?

No. JSX resembles HTML, but it is JavaScript syntax used to describe UI
elements. It has its own rules and is transformed during the build.

### 6. What is TypeScript?

TypeScript extends JavaScript with a static type system and development-time
tooling. TypeScript source is transformed into JavaScript for execution.

### 7. Does the browser directly execute TypeScript?

Browsers execute JavaScript. A toolchain typically type-checks and transforms
TypeScript source into JavaScript before it runs.

### 8. What is type inference?

Type inference is TypeScript's ability to determine a value's type from its
initializer or context. For example, \`const age = 30\` is inferred as a number.

### 9. Why use TypeScript with React?

It can make props and data contracts clearer, improve editor support, detect
many type-related mistakes, and make refactoring safer.

### 10. How do you type React component props?

Define a type or interface for the props and use it to type the component
parameter:

\`\`\`tsx
interface UserProps {
  name: string;
  age: number;
}

function User({ name, age }: UserProps) {
  return (
    <p>
      {name} — {age}
    </p>
  );
}
\`\`\`

### 11. What is the difference between JavaScript and TypeScript?

JavaScript is the language executed by the runtime. TypeScript adds static type
checking and other development-time features, and is typically transformed
into JavaScript before execution.

### 12. What is \`any\` in TypeScript?

\`any\` opts out of most type checking for a value. Excessive use removes much of
TypeScript's benefit. Prefer a specific type, or \`unknown\` with narrowing when
the value is not yet known.

### 13. What is the difference between props and state?

Props are inputs passed to a component by its parent. State is data managed by
a component or another state owner that can change over time. State and hooks
are covered in detail in later chapters.

### 14. Why should components be small and focused?

Focused components are easier to understand, test, reuse, maintain, and debug.
The goal is meaningful responsibility boundaries, not making every line its
own component.

### 15. Can TypeScript prevent all runtime errors?

No. TypeScript catches many type-related problems during development, but
network failures, invalid external data, logic errors, and other runtime
problems remain possible. Runtime validation and tests are still important.

### 16. Does TypeScript make JavaScript faster?

Not inherently. TypeScript primarily improves development-time checking and
tooling. Runtime performance depends on the JavaScript that runs and how the
application is implemented.

### 17. Why is TypeScript useful for large React applications?

Explicit contracts help teams understand data, editor tooling helps navigate
code, and the type checker can identify many affected locations during a
refactor.

### 18. What is component composition?

Component composition is building a larger interface by combining smaller
components. For example:

\`\`\`tsx
function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}
\`\`\`

## Practice prompts

1. Explain how typed props can catch an incorrect component invocation.
2. Describe when you would use an explicit annotation and when you would rely on
   inference.
3. Draw a component tree for a dashboard you have used.
4. Explain one thing TypeScript cannot guarantee about data received from an
   API.
5. Describe the relationship between data, types, components, and rendered UI.
`,up=`# Chapter 1 — Introduction to React and TypeScript

## Learning goals

- Understand React's component-based approach to building user interfaces.
- Understand what TypeScript adds to JavaScript.
- Explain why React and TypeScript work well together.
- Practise a modern component, data-flow, and code-quality mindset.

Modern web applications include dashboards, forms, authentication flows,
interactive tables, reusable components, API integrations, and complex state.
As applications grow, we need a way to organize the user interface and reduce
mistakes in code. React and TypeScript address these needs from different
directions.

## 1. What Is React?

React is a JavaScript library for building user interfaces. Its central idea is
**component-based development**: divide an interface into small, reusable
pieces called components, then compose those pieces into larger interfaces.

An employee dashboard might be composed like this:

\`\`\`text
EmployeeDashboard
├── Header
├── Sidebar
├── EmployeeSummary
├── EmployeeList
│   ├── EmployeeDetailsCard
│   ├── EmployeeAttendanceCard
│   └── EmployeeCheckInCard
└── Footer
\`\`\`

Each component can have its own rendering logic and receive data from another
component.

### 1.1 A simple React component

A function component returns JSX:

\`\`\`tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <p>Let's start learning React.</p>
    </div>
  );
}
\`\`\`

\`Welcome\` and \`App\` are components. \`<Welcome />\` renders the \`Welcome\`
component. JSX elements such as \`<h1>\` and \`<p>\` describe interface output.
Component names begin with an uppercase letter so React can distinguish them
from built-in HTML elements such as \`<div>\`.

### 1.2 Why components matter

If the same button is copied across many pages, a design change requires edits
in many places. A component provides one place for shared structure:

\`\`\`tsx
interface PrimaryButtonProps {
  label: string;
}

function PrimaryButton({ label }: PrimaryButtonProps) {
  return <button className="primary-button">{label}</button>;
}
\`\`\`

Use it with different data:

\`\`\`tsx
<PrimaryButton label="Save" />
<PrimaryButton label="Update" />
<PrimaryButton label="Submit" />
\`\`\`

The key idea is to build small components and compose them into larger
interfaces. Components are most useful when they provide a clear boundary or
reusable responsibility, not simply because a piece of code can be extracted.

### 1.3 React is about UI composition

React is not a replacement for HTML. JSX looks like markup, but it is syntax
used in JavaScript or TypeScript to describe UI. For example:

\`\`\`tsx
function ProductCard() {
  return (
    <article>
      <img src="/product.jpg" alt="Laptop" />
      <h2>Laptop</h2>
      <p>Professional laptop</p>
      <button>Buy now</button>
    </article>
  );
}

function ProductPage() {
  return (
    <section>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
\`\`\`

An application can grow from a small component to pages and complete features
by composing pieces together.

### 1.4 Data and the UI

A useful mental model is:

\`\`\`text
Data → Components → UI → User interaction → Updated data → Updated UI
\`\`\`

When a user clicks a like button, application state changes and React renders
the UI for the new state. Instead of manually changing individual DOM nodes,
describe what the UI should look like for the current data and state.

## 2. What Is TypeScript?

TypeScript extends JavaScript with a static type system. A type describes the
kind of value code expects:

\`\`\`ts
let age: number = 30;
age = 'thirty'; // TypeScript reports an error.
\`\`\`

Types make code contracts more explicit and allow a type checker and editor to
find many mistakes before the code runs.

### 2.1 Why types matter

In JavaScript, a function's expected inputs may be unclear:

\`\`\`ts
function calculateTotal(price, quantity) {
  return price * quantity;
}
\`\`\`

With TypeScript, the function can state its contract:

\`\`\`ts
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
\`\`\`

The function expects two numbers and returns a number. This improves
readability, editor support, and detection of type-related mistakes.

### 2.2 TypeScript is not a separate runtime

TypeScript does not replace JavaScript in the browser. A build tool removes
TypeScript-only syntax and produces JavaScript for the runtime:

\`\`\`text
TypeScript source → Type checking/build → JavaScript → Browser/runtime
\`\`\`

The type annotation in this example is used during development and compilation:

\`\`\`ts
const username: string = 'Learner';
\`\`\`

The browser runs the resulting JavaScript. JavaScript fundamentals therefore
remain important when learning TypeScript.

Type checking also cannot validate every value received at runtime. Data from a
network, browser storage, or another external source may need runtime
validation.

### 2.3 Type inference

TypeScript can often infer a value's type:

\`\`\`ts
const name = 'Learner'; // inferred as string
const score = 30; // inferred as number
\`\`\`

You do not need to write every type explicitly. Use explicit types where they
clarify a contract, such as a public function or component props, and rely on
inference when the type is already obvious.

### 2.4 Common TypeScript types

\`\`\`ts
let username: string = 'Learner';
let age: number = 30;
let isActive: boolean = true;
let scores: number[] = [80, 90, 95];
let names: string[] = ['Amit', 'Rahul', 'Priya'];

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Amit',
  email: 'amit@example.com',
};
\`\`\`

Types are especially useful in a React app because data is passed between
components, hooks, and services.

## 3. Why Use React with TypeScript?

React and TypeScript solve different problems:

| React                                  | TypeScript                                   |
| -------------------------------------- | -------------------------------------------- |
| Organizes UI into components           | Describes data and function contracts        |
| Renders interfaces                     | Checks many type mistakes during development |
| Handles UI composition and interaction | Improves editor tools and safer refactoring  |

Together, they support a type-safe, component-based UI.

### 3.1 Type-safe props

Props are the data a component receives. TypeScript can describe the expected
shape:

\`\`\`tsx
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{age}</p>
    </article>
  );
}
\`\`\`

The following use is valid:

\`\`\`tsx
<UserCard name="Amit" age={30} />
\`\`\`

Passing \`age="thirty"\` is a type error because \`age\` expects a number. This
checking is performed by the TypeScript tooling; it does not add runtime
validation to incoming data.

### 3.2 Better developer experience and communication

When types are known, an editor can offer auto-completion, parameter
information, navigation, refactoring support, and clearer error messages.
Types can also act as living documentation:

\`\`\`ts
function createUser(name: string, age: number, isAdmin: boolean) {
  // Implementation goes here.
}
\`\`\`

A reader can see the expected inputs without first finding the implementation
or separate documentation.

### 3.3 Safer refactoring

If a shared data shape changes, the type checker can show locations that still
use the old shape:

\`\`\`ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
}
\`\`\`

Types do not guarantee a bug-free application, but they make many changes easier
to reason about across a larger codebase.

## 4. Modern React Development Mindset

Learning syntax is only one part of becoming a React developer. Consider
component design, data flow, and clarity as you build.

### 4.1 Think in components

Instead of thinking only about how to build a page, identify the pieces it is
made from:

\`\`\`text
Dashboard
├── Header
├── Sidebar
├── Statistics
│   ├── StatCard
│   ├── StatCard
│   └── StatCard
├── RecentOrders
└── Footer
\`\`\`

### 4.2 Think about data flow

For each component, ask:

- What data does it need, and where does that data come from?
- Should it own local state, or receive data through props?
- Which component should handle a user interaction?
- What should update when that interaction happens?

Data commonly flows from parent components to children through props. State
ownership and shared state are explored in later chapters.

### 4.3 Keep components focused

Avoid putting an entire feature into one large component. Split by meaningful
responsibility:

\`\`\`tsx
function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Statistics />
      <UserList />
      <Footer />
    </>
  );
}
\`\`\`

Focused components are easier to read, test, reuse, maintain, and debug.

### 4.4 Avoid premature abstraction

Reusable code is valuable when it removes a real repeated pattern or clarifies
design. Start simply, notice repetition, and extract a component or function
when that improves the code. Do not build a configurable abstraction before
there is a problem for it to solve.

### 4.5 Treat TypeScript as a design tool

Types describe contracts between parts of an application. A shared product type
can keep data consistent between an API layer and product components:

\`\`\`ts
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}
\`\`\`

For example, a component can express its expected product:

\`\`\`tsx
function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>\${product.price}</p>
    </article>
  );
}
\`\`\`

### 4.6 Use predictable data structures

Make the data shape explicit when it is part of a component or function
contract. Keep in mind that a TypeScript interface describes what code expects;
it does not check an API response at runtime. Runtime validation is a separate
topic for the API chapter.

## 5. A React + TypeScript development flow

A practical feature workflow is:

\`\`\`text
Requirement → Component design → Data model/types → Implementation
            → Interaction/state → API integration → Testing → Optimization
\`\`\`

For an employee profile card, define its data:

\`\`\`ts
interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
}
\`\`\`

Then define a component contract:

\`\`\`tsx
function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <span>{employee.department}</span>
    </article>
  );
}
\`\`\`

Create data that follows the contract and render it:

\`\`\`tsx
const employee: Employee = {
  id: 1,
  name: 'Rahul Kumar',
  role: 'Software Engineer',
  department: 'Engineering',
};

<EmployeeCard employee={employee} />;
\`\`\`

This creates a clear relationship between **data → type → component → UI**.

## 6. Chapter project preview — Simple Profile Dashboard

The project combines a profile card, a list of skills, and reusable statistic
cards. The full step-by-step task and acceptance checklist are in
[the coding exercises](./exercises.md#mini-project-simple-profile-dashboard).

Suggested structure:

\`\`\`text
src/
├── components/
│   ├── ProfileCard.tsx
│   ├── SkillList.tsx
│   └── StatCard.tsx
├── types/
│   └── profile.ts
├── App.tsx
└── main.tsx
\`\`\`

## Common beginner mistakes

1. **Treating React as HTML.** JSX resembles markup, but it is syntax for
   describing UI in JavaScript or TypeScript.
2. **Using \`any\` everywhere.** \`any\` opts out of useful checking. Prefer a
   specific type and use \`unknown\` plus narrowing when a value is not yet known.
3. **Creating huge components.** Split the UI around understandable
   responsibilities.
4. **Adding types without a reason.** Use inference where the value is obvious
   and explicit types where they clarify contracts.
5. **Learning React without JavaScript fundamentals.** Practise functions,
   objects, arrays, \`map\`, \`filter\`, destructuring, spread syntax, modules,
   promises, \`async\`/\`await\`, and closures.
6. **Assuming TypeScript prevents every bug.** It catches many type errors but
   does not replace runtime validation, tests, or sound application logic.

## Memory points

1. React is a JavaScript library for building user interfaces.
2. Components are reusable building blocks that can be composed.
3. Function components commonly return JSX.
4. JSX describes UI; it is not HTML itself.
5. TypeScript adds static type checking to JavaScript.
6. Browser applications run JavaScript produced from TypeScript source.
7. Type inference means explicit annotations are not always necessary.
8. Props describe data a component receives.
9. Components should have clear responsibilities.
10. Avoid excessive use of \`any\`.
11. React focuses on UI; TypeScript focuses on static types and tooling.
12. Strong JavaScript fundamentals help you learn React and TypeScript.

## Quick revision

Be able to explain this contract and write it without copying:

\`\`\`tsx
interface UserProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
\`\`\`

Explain what the props type checks, what React renders, and what still requires
runtime checks.

## Chapter summary

React provides a component-based way to build user interfaces. TypeScript adds
static types to JavaScript, helping developers communicate data contracts and
detect many mistakes during development. Together they provide a strong
foundation for maintainable front-end applications.
`,pp=`# Chapter 2 — Coding exercises

Use these exercises with the [chapter notes](./notes.md). Run commands in a
practice project, not inside \`node_modules/\` or a generated \`dist/\` folder.

## Exercise 1 — Inspect your environment

Run:

\`\`\`bash
node --version
npm --version
\`\`\`

Create or open a Vite React TypeScript project, then run:

\`\`\`bash
npm install
npm run dev
\`\`\`

Open the local URL printed by Vite.

**Check your work**

- You can explain which tool runs the development server.
- You can find the npm scripts in \`package.json\`.
- You can stop the development server without changing source files.

## Exercise 2 — Trace the application entry point

In your project, locate \`index.html\`, \`src/main.tsx\`, and \`src/App.tsx\`.
Draw the path from the HTML root element to the first rendered React component.

**Check your work**

- Identify the root DOM element.
- Identify which file calls \`createRoot\`.
- Identify which component is rendered first.
- Explain why \`index.html\` is not the entire React UI.

## Exercise 3 — Read project configuration

Inspect \`package.json\`, \`package-lock.json\`, \`vite.config.ts\`, and every
TypeScript configuration used by the app.

Write a short note in your own words describing:

- one runtime dependency and one development tool;
- what \`npm run dev\`, \`npm run build\`, and \`npm run preview\` do;
- where strict TypeScript checking and JSX behavior are configured;
- whether the root TypeScript config references other configs.

Do not change compiler settings just to match an example. The goal is to
understand your actual project.

## Exercise 4 — Build a reusable EmployeeCard

Create \`src/components/EmployeeCard.tsx\` with a typed prop contract:

\`\`\`tsx
interface EmployeeCardProps {
  name: string;
  role: string;
  department: string;
}
\`\`\`

Render the values inside an \`<article>\`, then use the card from \`App.tsx\` with
fictional sample data. Try supplying the wrong type for one prop, observe the
TypeScript error, and correct it.

## Mini project: Company Team Dashboard Setup

Build a small dashboard with a heading, team statistics, and a list of
employees. The emphasis is project setup and clear component boundaries, not a
large design system.

### Suggested structure

\`\`\`text
src/
├── components/
│   ├── DashboardHeader.tsx
│   ├── EmployeeCard.tsx
│   ├── EmployeeList.tsx
│   └── StatCard.tsx
├── types/
│   └── employee.ts
├── App.tsx
└── main.tsx
\`\`\`

### Requirements

1. Define and export an \`Employee\` interface in \`src/types/employee.ts\`:
   \`id\`, \`name\`, \`role\`, \`department\`, \`location\`, \`experience\`, and \`skills\`.
2. Use fictional sample employees. Do not publish real personal details or
   sensitive company information.
3. Create \`DashboardHeader\` with typed \`companyName\` and \`subtitle\` props.
4. Create \`StatCard\` with a string label and numeric value.
5. Create \`EmployeeCard\` with a typed \`employee\` prop. Render the employee's
   role, department, location, experience, and skills.
6. Create \`EmployeeList\` with an \`Employee[]\` prop. Render an \`EmployeeCard\`
   per employee and use \`employee.id\` as the React \`key\`.
7. Compose the dashboard in \`App.tsx\`. Show total employees, distinct
   departments, and distinct locations.
8. Add simple styling consistent with the project. Avoid adding a dependency
   just for basic layout.

### Suggested employee type

\`\`\`ts
export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
  experience: number;
  skills: string[];
}
\`\`\`

### Completion checklist

- [ ] Project dependencies install successfully.
- [ ] \`npm run dev\` displays the dashboard.
- [ ] Employee data matches the shared \`Employee\` type.
- [ ] Components receive data through typed props.
- [ ] Employee cards render from an array with stable keys.
- [ ] Statistics are derived from the data rather than hard-coded.
- [ ] \`npm run build\` completes successfully.
- [ ] You can explain the purpose of the files you added.

### Reflection

1. Which configuration file did you inspect first, and why?
2. Which component owns the employee array, and which components receive it?
3. What does the build put in \`dist/\`?
4. Which parts of your structure would you change if the dashboard gained
   filtering and employee detail pages?
`,dp=`# Chapter 2 — Interview questions and answers

Practise answering in your own words after completing the
[chapter notes](./notes.md) and [coding exercises](./exercises.md).

## Core questions

### 1. What is Vite?

Vite is a front-end development tool that provides a development server and a
production build workflow.

### 2. Why is Vite commonly used with React?

It provides fast development feedback and a modern build system. React support
is added through its plugin ecosystem.

### 3. What is \`package.json\`?

It is a project manifest containing metadata, scripts, dependency declarations,
and other package-management information.

### 4. What is the difference between \`dependencies\` and \`devDependencies\`?

\`dependencies\` generally describe packages required by the application at
runtime. \`devDependencies\` generally describe tools used during development,
testing, linting, or building. The deployment workflow determines which
packages are needed to produce the built static site.

### 5. What is \`node_modules/\`?

It is where npm installs the project's dependency packages. It is generated
from project configuration and is generally not committed.

### 6. Should \`node_modules/\` be committed to Git?

Generally no. It can be recreated using the package manifest and lock file with
npm.

### 7. What is \`package-lock.json\`?

It records the resolved npm dependency tree to make installations more
reproducible. Application repositories generally commit it.

### 8. What does \`npm install\` do?

It reads the project's dependency declarations and lock information, then
installs the required packages.

### 9. What does \`npm run dev\` do?

It runs the \`dev\` script defined in \`package.json\`. In a typical Vite project,
that starts the development server.

### 10. What does \`npm run build\` do?

It runs the configured build script. Depending on the script, this can include
TypeScript checks followed by a Vite production build that generates static
assets.

### 11. What is the \`dist/\` folder?

It commonly contains production build output. It is generated from source and
should not normally be edited manually.

### 12. What is \`main.tsx\`?

It is commonly the React browser entry point that mounts the root component
into an HTML element.

### 13. What is the purpose of \`index.html\` in a Vite app?

It is the HTML document Vite uses to host the app. It contains the root DOM
element and loads the application entry module.

### 14. What is the purpose of \`vite.config.ts\`?

It configures Vite, for example by enabling plugins or setting build and
development-server options.

### 15. What is \`tsconfig.json\`?

It configures how TypeScript projects are checked and understood. A template
may use referenced or extended app-specific and tooling-specific configs.

### 16. What does \`strict: true\` do?

It enables a collection of stronger TypeScript checks, helping detect more
type-related mistakes and encouraging clearer types.

### 17. What is the purpose of the TypeScript \`jsx\` option?

It configures how TypeScript handles JSX syntax. Modern React projects commonly
use the automatic React JSX runtime.

### 18. What does the TypeScript \`target\` option control?

It describes the JavaScript language level TypeScript emits. The appropriate
setting depends on supported runtimes and the build pipeline.

### 19. What is module resolution?

Module resolution is the process TypeScript uses to locate files and packages
referenced by imports.

### 20. Why can a project have multiple \`tsconfig\` files?

Browser application code and Node-based tooling can use different compiler
settings and environments. Separate configs allow each project to be checked
appropriately.

### 21. Why make React components reusable?

Meaningfully reusable components reduce duplication and keep interface
behavior and presentation consistent.

### 22. Why separate a shared data type from a component?

A shared model can be reused across components and helps keep their data
contracts consistent. Keep types local when they are truly specific to one
component.

### 23. Why should \`any\` generally be avoided?

\`any\` opts out of much of TypeScript's checking. Using it broadly can let
mistakes pass that more specific types would catch.

### 24. What is the purpose of a lock file?

It records resolved dependency information so installs can use a consistent
dependency tree.

### 25. What happens when \`npm run dev\` is executed?

npm looks up the \`dev\` entry in \`package.json\`, executes its command, and in a
typical Vite app starts the development server.

### 26. What happens during a production build?

The configured build tools check and transform source code, then generate
optimized production assets (often in \`dist/\`) for deployment.

### 27. Why should generated build files not be edited manually?

They are recreated from source and configuration. Manual edits can be lost on
the next build and do not fix the maintained source.

### 28. Why avoid unnecessary dependencies?

Each dependency adds maintenance, update, security, and complexity
considerations.

### 29. What is the role of \`App.tsx\`?

It commonly defines the root application component and composes other UI
components.

### 30. What is the role of \`src/\`?

It generally contains application source code, such as components, types,
hooks, pages, and application logic.

## Scenario prompts

1. A teammate edited a file in \`node_modules/\`, but the change disappeared
   after reinstalling. Explain why and suggest the right place to fix it.
2. A component receives incorrect data. Where would you look for its prop
   contract and the data model?
3. A project has \`tsconfig.app.json\` and \`tsconfig.node.json\`. What is the
   likely reason for separating them?
4. A production site is deployed from \`dist/\`. Which files should be changed
   when a UI fix is needed?
5. Before changing \`moduleResolution\`, which tooling and imports would you
   inspect?
`,hp=`# Chapter 2 — React + TypeScript Project Setup

## Learning goals

- Understand the tools and workflow behind a React + TypeScript application.
- Identify the responsibilities of common generated files and folders.
- Read npm project metadata, scripts, and dependency declarations.
- Understand the purpose of the important TypeScript configuration options.
- Create a clean, reusable, typed React component.
- Organize and run a small Company Team Dashboard.

A strong React application begins with a project foundation that developers
understand. A new project may contain several generated files. Rather than
treating them as mysterious configuration, learn what they do and when a change
is justified.

## 1. What Is Project Setup?

Project setup prepares an application for development. A React + TypeScript
project commonly needs:

\`\`\`text
Project initialization
  → package installation
  → React and TypeScript configuration
  → build-tool configuration
  → development scripts
  → source folder structure
  → application entry point
\`\`\`

The goal is a reliable, repeatable foundation before application features are
built.

### 1.1 Why project setup matters

Before starting a project, the team needs a consistent way to organize source,
install dependencies, run development checks, start the app, and produce a
production build. When these responsibilities are unclear, projects become
harder to maintain and deploy.

During development, the flow is roughly:

\`\`\`text
Developer writes source
  → development server and build tooling
  → browser loads the application
\`\`\`

For production:

\`\`\`text
Source code → production build → static assets → host/server → browser
\`\`\`

Understanding this flow helps when learning deployment, testing, performance,
and CI.

### 1.2 Creating a modern React project with Vite

Vite provides a development server and production build workflow. A React +
TypeScript template can be created with:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

Vite prints a local development URL, often similar to
\`http://localhost:5173\`. The exact port can vary if that port is already in use.
Focus on understanding the workflow:

\`\`\`text
Create project → install dependencies → start dev server → open browser
\`\`\`

Templates and their generated files evolve, so your structure may not exactly
match an older tutorial.

### 1.3 What project creation generates

The template supplies a starting point: source files, project metadata,
configuration, and scripts. It is not a finished application architecture.
As the app grows, organize source code around real features and responsibilities.

### 1.4 Node.js and npm

- **Node.js** is a JavaScript runtime that can run JavaScript programs outside
  the browser. Project tooling such as Vite and TypeScript runs in this
  environment.
- **npm** is a package manager commonly used to install project dependencies
  and execute project scripts.

Check that they are installed:

\`\`\`bash
node --version
npm --version
\`\`\`

Use a currently supported Node.js LTS release and follow the version
requirements of the project and its tools.

### 1.5 Installing dependencies

Run:

\`\`\`bash
npm install
\`\`\`

npm reads the dependency declarations and lock file, then installs packages in
\`node_modules/\`. That directory can be large and is generated; it should
generally not be committed to source control. It can be recreated from the
repository's package files.

A typical project includes:

\`\`\`text
my-react-app/
├── node_modules/          # Installed packages (generated)
├── public/                # Public static assets (optional)
├── src/                   # Application source
├── package.json           # Metadata, scripts, dependency declarations
├── package-lock.json      # Resolved npm dependency tree
├── tsconfig.json          # TypeScript project references/configuration
├── vite.config.ts         # Vite configuration
└── index.html             # HTML document that hosts the app
\`\`\`

## 2. Understanding Generated Project Files

A React + TypeScript template might look like this:

\`\`\`text
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
\`\`\`

Exact names vary by template and tool version. Understand each file's role
rather than memorizing one template's tree.

### 2.1 \`node_modules/\`

This directory holds packages installed for the project, such as React, Vite,
and TypeScript. Do not edit package files in this directory; reinstalling can
replace them. If it is missing, restore packages with \`npm install\`.

### 2.2 \`public/\`

Use \`public/\` for files that should be served directly with stable public paths,
such as a favicon or a robots file. Imported assets can instead be referenced
from application modules so the build tool can process them. Follow the
project's asset conventions and use \`public/\` only when direct serving is
needed.

### 2.3 \`src/\`

\`src/\` contains application source code. A small project might start with
\`App.tsx\` and \`main.tsx\`. As the application grows, it can gain components,
types, hooks, pages, services, and other feature folders. Start simple and add
structure when it improves the project.

### 2.4 \`main.tsx\`

\`main.tsx\` is commonly the browser entry point that mounts the root React
component into the HTML document. A simplified example:

\`\`\`tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
\`\`\`

The flow is:

\`\`\`text
index.html → #root element → main.tsx → <App /> → React UI
\`\`\`

The non-null assertion in this minimal template example tells TypeScript that
the element exists. In production code, make sure the root element is present
and handle a missing element explicitly if the application's setup requires it.

### 2.5 \`App.tsx\`

\`App.tsx\` commonly defines the root application component and composes
components:

\`\`\`tsx
function App() {
  return (
    <main>
      <h1>Company Team</h1>
    </main>
  );
}

export default App;
\`\`\`

As the application grows, move reusable pieces into focused component files
rather than making one component responsible for everything.

### 2.6 \`index.html\`

Vite uses the root \`index.html\` as the HTML document that hosts the application.
The root element and module entry connect it to React:

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React TypeScript App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
\`\`\`

### 2.7 \`vite.config.ts\`

Vite configuration commonly lives in \`vite.config.ts\`. A React setup can enable
the React plugin:

\`\`\`ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
\`\`\`

Configuration may later include plugins, aliases, build options, or development
server settings. Add configuration to meet a real requirement; avoid changing
it without understanding the effect.

### 2.8 \`package-lock.json\`

The npm lock file records the resolved dependency tree. Commit it in an
application repository so other developers and CI can install a consistent
dependency graph. Use the same package manager consistently.

### 2.9 \`.gitignore\`

\`.gitignore\` tells Git which paths should normally not be committed. Typical
entries include generated directories (\`node_modules/\`, \`dist/\`), local
environment files, and operating-system metadata. Review the actual file
instead of assuming that a sensitive file is ignored.

## 3. Understanding \`package.json\` and Scripts

\`package.json\` describes project metadata, scripts, and dependency
declarations. A simplified example:

\`\`\`json
{
  "name": "company-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "..."
  },
  "devDependencies": {
    "typescript": "...",
    "vite": "..."
  }
}
\`\`\`

Versions are omitted here for readability. Use the versions declared by your
project rather than copying placeholder values.

### 3.1 Important fields

- \`name\` identifies the package/project.
- \`version\` records its package version.
- \`private: true\` helps prevent accidentally publishing an application as an
  npm package.
- \`type: "module"\` configures Node.js to interpret \`.js\` files as ECMAScript
  modules in that package scope.
- \`scripts\` defines named project commands.
- \`dependencies\` and \`devDependencies\` declare packages.

### 3.2 Dependencies and development dependencies

\`dependencies\` are packages the application needs in its runtime environment.
\`devDependencies\` are primarily tools used during development, testing,
linting, or building. Exact deployment behavior depends on the hosting/build
workflow: a static host serves the built assets, not the source project.

Do not install packages just because they are popular. Each dependency adds
maintenance, upgrade, security, and complexity costs.

### 3.3 npm scripts

Given:

\`\`\`json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
\`\`\`

Run a script by its name:

\`\`\`bash
npm run dev
npm run build
npm run lint
npm run preview
\`\`\`

\`npm run dev\` finds the \`dev\` script and starts Vite's development server. This
is how \`npm run <name>\` works for the other scripts too.

### 3.4 What does a production build do?

A build script runs the configured checks and build tools. For the example
above, \`tsc -b\` checks the TypeScript project references, and \`vite build\`
creates optimized static assets. The generated \`dist/\` directory is deployment
output:

\`\`\`text
Source files → checks/build → dist/ → static hosting
\`\`\`

Do not manually edit generated \`dist/\` files; rebuild from source after
changes. \`npm run preview\` serves the production build locally so it can be
checked before deployment.

## 4. Understanding \`tsconfig.json\`

TypeScript configuration tells TypeScript tooling how to understand and check
the project. Modern Vite templates may split configuration among
\`tsconfig.json\`, \`tsconfig.app.json\`, and \`tsconfig.node.json\`. The root file
may mostly contain project references, while browser application and
Node-based tooling use different settings.

Inspect the configuration actually used by the project before making a change.
When a setting is inherited through \`extends\` or project references, understand
which configuration owns it.

### 4.1 \`compilerOptions\`

Most compiler behavior is configured under \`compilerOptions\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx"
  }
}
\`\`\`

### 4.2 \`strict\`

\`strict: true\` enables a collection of stronger checks. For example, strict
checking can require a function parameter to have a type instead of silently
treating it as \`any\`. Keeping strict checking enabled helps catch mistakes and
makes contracts clearer.

### 4.3 \`target\`

\`target\` describes the JavaScript language level TypeScript emits. The
appropriate target depends on supported runtimes and the build pipeline. Vite
also performs production transformations, so understand how TypeScript and Vite
settings interact before changing this option.

### 4.4 \`module\`

\`module\` controls the JavaScript module format TypeScript uses or understands.
Modern front-end code commonly uses ECMAScript imports and exports:

\`\`\`ts
import { calculateTotal } from './utils';

export function checkout() {
  return calculateTotal();
}
\`\`\`

### 4.5 \`moduleResolution\`

\`moduleResolution\` controls how TypeScript locates imported packages and files.
Vite projects commonly use a bundler-aware resolution mode. Keep the TypeScript
resolution mode aligned with the project's bundler and package export behavior.

### 4.6 \`jsx\`

The \`jsx\` setting controls how TypeScript handles JSX. Modern React projects
commonly use the automatic runtime:

\`\`\`json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
\`\`\`

### 4.7 \`include\`, \`exclude\`, and project references

\`include\` and \`exclude\` help define which files a TypeScript project checks.
Project references allow a larger setup to separate application code from
tooling configuration. In a modern Vite template, inspect the root config and
the referenced app and Node configs together; do not assume every setting
lives in the root file.

## 5. Creating Your First Clean React TypeScript Component

Build a reusable employee card. Begin with a focused component:

\`\`\`tsx
interface EmployeeCardProps {
  name: string;
  role: string;
  department: string;
}

function EmployeeCard({ name, role, department }: EmployeeCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <span>{department}</span>
    </article>
  );
}

export default EmployeeCard;
\`\`\`

The component now receives data rather than embedding one person's details.
Use it from the root component:

\`\`\`tsx
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <main>
      <EmployeeCard
        name="Alex Morgan"
        role="Frontend Engineer"
        department="Engineering"
      />
    </main>
  );
}

export default App;
\`\`\`

Use fictional sample people in a public learning project. Avoid publishing real
personal details without permission.

### 5.1 Share a data model when appropriate

When multiple components use the same employee shape, move that model into a
type file:

\`\`\`ts
export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
}
\`\`\`

Then use a type-only import and typed object prop:

\`\`\`tsx
import type { Employee } from '../types/employee';

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>
        {employee.department} · {employee.location}
      </p>
    </article>
  );
}

export default EmployeeCard;
\`\`\`

\`import type\` makes it explicit that the imported symbol is used only for
type-checking and is not a runtime value.

### 5.2 Clean component principles

A focused component generally has:

- a clear purpose and prop contract;
- predictable, typed data;
- minimal unrelated logic;
- readable JSX.

An employee card should primarily render employee information. It should not
also fetch unrelated API data, authenticate users, or manage application-wide
state. Those responsibilities belong in appropriate application layers as the
project grows.

### 5.3 Naming and project structure

PascalCase filenames are common for React components (\`EmployeeCard.tsx\`,
\`DashboardHeader.tsx\`). Lower camelCase is common for utility files
(\`formatDate.ts\`). Type files are often named for the domain (\`employee.ts\`).
Conventions vary; consistency within the project matters most.

Do not create many architectural folders before the application needs them.
Start small and introduce clearer boundaries as the project grows.

## 6. Mini project — Company Team Dashboard Setup

Build a dashboard that demonstrates project setup, type modeling, component
reuse, and composition. The complete guided task is in
[the coding exercises](./exercises.md#mini-project-company-team-dashboard-setup).

The target component tree:

\`\`\`text
App
├── DashboardHeader
├── TeamStats
│   └── StatCard
└── EmployeeList
    └── EmployeeCard
\`\`\`

A small source structure:

\`\`\`text
src/
├── components/
│   ├── DashboardHeader.tsx
│   ├── EmployeeCard.tsx
│   ├── EmployeeList.tsx
│   └── StatCard.tsx
├── types/
│   └── employee.ts
├── App.tsx
└── main.tsx
\`\`\`

Model employees with an \`Employee\` type containing an ID, name, role,
department, location, years of experience, and a list of skills. The \`App\`
component owns fictional sample data, derives simple department/location
counts, and passes typed props to child components. \`EmployeeList\` maps
employees to cards using each employee ID as the React key.

After implementation:

\`\`\`bash
npm run dev
npm run build
npm run preview
\`\`\`

Confirm the dashboard renders in the browser and the production build succeeds.

## Common project setup mistakes

1. **Editing \`node_modules/\`.** Package files can be replaced on installation;
   make changes through project source or package configuration.
2. **Ignoring \`package.json\`.** Understand the scripts and declared
   dependencies that drive the workflow.
3. **Changing \`tsconfig\` randomly.** Know what a setting controls and which
   configuration file is active before changing it.
4. **Installing packages without a need.** Every dependency increases ongoing
   maintenance and complexity.
5. **Putting everything in \`App.tsx\`.** Extract meaningful reusable UI when
   that improves clarity.
6. **Creating too many folders too soon.** Use enough structure to keep the
   current project understandable; let architecture grow with the application.
7. **Committing generated or sensitive files.** Check \`.gitignore\` and review
   \`git status\` before publishing.

## Memory points

- Project setup establishes the tools and repeatable workflow for development.
- Node.js runs project tooling; npm installs packages and runs named scripts.
- Vite provides development and production build workflows.
- \`src/\` normally contains app source; \`public/\` is for directly served assets.
- \`main.tsx\` mounts React; \`App.tsx\` commonly composes the root UI.
- \`index.html\` provides the root document; Vite uses \`vite.config.ts\` for
  configuration.
- \`package.json\` declares project metadata, dependencies, and scripts.
- \`package-lock.json\` records resolved npm dependency information.
- \`tsconfig\` files control TypeScript checking and may be split by environment.
- \`strict: true\` enables stronger type checks; \`jsx\` configures JSX handling.
- Define data types, pass them through typed props, and compose focused
  components.
- \`dist/\` is generated build output, not source code.

## Quick revision

Explain the roles of these files without looking them up:

\`\`\`text
package.json       → project metadata, scripts, dependencies
package-lock.json  → resolved npm dependency tree
tsconfig*.json     → TypeScript project checking/configuration
vite.config.ts     → Vite configuration
index.html         → HTML document hosting the app
main.tsx           → React mounting entry point
App.tsx            → root UI composition
src/               → application source
public/            → directly served static assets (when needed)
node_modules/      → installed packages (generated)
dist/              → production build output (generated)
\`\`\`

Be able to describe:

\`\`\`text
Write source → npm run dev → browser
Write source → npm run build → dist/ → deploy
\`\`\`

## Chapter summary

A React project includes source code, dependencies, build tooling, TypeScript
configuration, scripts, and an application entry point. Understanding how
those parts fit together makes setup and debugging more predictable. This
chapter also turns the concepts into reusable typed components and a small
Company Team Dashboard, preparing us to explore JSX in the next chapter.
`,mp=`# Chapter 3 — Coding exercises

Use these exercises with the [chapter notes](./notes.md). Work in a React +
TypeScript practice project and run its development server or production build
to check your work.

## Exercise 1 — Describe a UI with JSX

Create a \`Welcome\` component that returns a heading and a paragraph. Compose
it inside an \`App\` component.

**Check your work**

- Both component names begin with uppercase letters.
- The returned elements have one root or use a Fragment.
- Every JSX tag is properly closed.

## Exercise 2 — Fix JSX syntax

Create a small profile card containing an image, a heading, and a label/input
pair. Use \`className\` for CSS classes and \`htmlFor\` for the label. Make sure
empty elements use self-closing syntax.

**Extension:** add a JSX comment above the card heading.

## Exercise 3 — Render values and conditions

Create a typed \`CourseStatus\` component with \`isPublished: boolean\`. Render a
different message and CSS class for published and draft courses.

\`\`\`tsx
interface CourseStatusProps {
  isPublished: boolean;
}
\`\`\`

**Check your work**

- The component handles both boolean values.
- The status text is rendered with a conditional expression.
- No boolean is displayed directly as text.

## Exercise 4 — Render a typed list

Create a \`SkillList\` component that accepts \`skills: string[]\`. Render every
skill as an \`<li>\` and use a stable key.

**Extension:** replace the strings with objects containing \`id\` and \`name\`,
then use \`id\` as the key.

## Exercise 5 — Type component attributes

Create a \`CourseBadge\` component with \`title: string\` and
\`level: 'Beginner' | 'Intermediate' | 'Advanced'\`. Render the props, then
temporarily pass an unsupported level and observe the TypeScript diagnostic.
Restore a valid value afterward.

## Exercise 6 — Compose content with children

Create a \`Section\` component with a \`title\` and required \`children\`. Type
children with \`ReactNode\` from React:

\`\`\`tsx
import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}
\`\`\`

Use it with a paragraph, then use it with a list. The same layout component
should support both.

## Mini project: Course Landing Section with JSX

Build a responsive course landing section using typed data and reusable
components. Keep all sample course and instructor data fictional.

### Suggested structure

\`\`\`text
src/
├── components/
│   ├── CourseHero.tsx
│   ├── CourseStats.tsx
│   ├── CourseStatus.tsx
│   └── Section.tsx
├── types/
│   └── course.ts
├── App.tsx
└── index.css
\`\`\`

### Requirements

1. Define and export a \`Course\` interface with \`title\`, \`description\`,
   \`instructor\`, \`level\`, \`students\`, \`lessons\`, \`durationHours\`, \`skills\`,
   and \`isPublished\`.
2. Define \`level\` as the union
   \`'Beginner' | 'Intermediate' | 'Advanced'\`.
3. Create a typed \`CourseHero\` that renders the course level, title,
   description, and instructor.
4. Create \`CourseStats\` to render student count, lesson count, and duration.
5. Create \`CourseStatus\` to render a published or draft message using
   conditional JSX.
6. Create \`Section\` with a \`title\` and \`children: ReactNode\`.
7. Render the course skills from an array and provide each item a stable key.
8. Compose the pieces in \`App.tsx\` using one typed fictional course object.
9. Add simple, readable styling without installing a dependency for basic
   layout.
10. Ensure the enroll button is disabled while the course is not published.

### Completion checklist

- [ ] The project compiles without type errors.
- [ ] Course data matches the shared \`Course\` type.
- [ ] Components receive data through typed props.
- [ ] Children render inside the reusable \`Section\`.
- [ ] Skills render from an array with stable keys.
- [ ] Published and draft states both render correctly.
- [ ] \`npm run build\` completes successfully.
- [ ] JSX is readable and complex calculations are outside the markup.

### Reflection

1. Which values are component props, and which are nested children?
2. Which type prevents unsupported course levels?
3. Why does each mapped skill need a key?
4. What would change if course data came from an API?
5. Which parts of the section have a clear reason to be separate components?
`,fp=`# Chapter 3 — Interview questions and answers

Practise answering these questions after completing the
[chapter notes](./notes.md) and [coding exercises](./exercises.md).

## Core questions

### 1. What is JSX?

JSX is a syntax extension commonly used with React to describe UI inside
JavaScript or TypeScript source code.

### 2. Is JSX HTML?

No. It looks similar to HTML but is part of the source code and is transformed
by build tooling into JavaScript.

### 3. Why do React developers use JSX?

JSX makes UI structure readable while allowing expressions and component
composition to live close to the interface they describe.

### 4. How does JSX become usable by the browser?

The project's compiler and build tooling transform JSX into JavaScript that
React can use. The browser does not directly run raw JSX.

### 5. How do you embed a value in JSX?

Wrap a JavaScript or TypeScript expression in curly braces, such as
\`<p>{userName}</p>\`.

### 6. Can JSX braces contain statements?

No. Braces contain expressions. Move statements such as \`if\` outside the JSX
or express the condition with a ternary or logical expression.

### 7. Why must a component return one root element?

The returned markup must form one React element tree. Use a parent element or
a Fragment to group siblings.

### 8. What does a Fragment do?

A Fragment groups multiple elements without adding an extra DOM node.

### 9. What is the JSX syntax for an empty element?

Use a self-closing tag, such as \`<img src="/cover.jpg" alt="Cover" />\`.

### 10. Why is \`className\` used instead of \`class\`?

JSX uses the \`className\` property to set an element's CSS class.

### 11. Why is \`htmlFor\` used on labels?

\`htmlFor\` is the JSX property that associates a label with a form control ID.

### 12. How are comments written inside JSX?

Use JavaScript comment syntax inside braces: \`{/* comment */}\`.

### 13. How does React distinguish a component from an HTML element?

Component names conventionally begin with an uppercase letter, while
intrinsic HTML element names are lowercase.

### 14. How do you render a list?

Map the data to JSX elements and assign each element a stable \`key\`.

### 15. What is the purpose of a \`key\`?

A key helps React identify an item across renders when a list changes. A
stable ID is preferable to an array index when items can move or change.

### 16. Can an object be rendered directly?

Generally no. Select the object's properties needed for the UI or map its data
to renderable elements.

### 17. How do you render one of two UI states?

Use a conditional expression such as
\`isPublished ? <Published /> : <Draft />\`.

### 18. What should you watch for when using \`&&\` for conditional rendering?

If the left side is a number such as \`0\`, React can render that number. Use a
boolean comparison such as \`count > 0 && <Notice />\`.

### 19. How should a boolean attribute be set dynamically?

Pass a boolean expression, such as \`disabled={isDisabled}\`. A string like
\`"false"\` is not equivalent to the boolean \`false\`.

### 20. How do you handle a button click in JSX?

Pass a function reference: \`onClick={handleClick}\`. Do not invoke the handler
during rendering unless the returned value is intentionally the handler.

### 21. How can an input change event be typed?

Use React's event types, for example
\`ChangeEvent<HTMLInputElement>\`, when an explicit annotation is useful.

### 22. What are component props?

Props are values passed to a component through JSX attributes.

### 23. How does TypeScript check props?

The component's props type declares required names and value types. TypeScript
checks call sites and reports missing or incompatible values.

### 24. Why use a union type for course level?

A union such as \`'Beginner' | 'Intermediate' | 'Advanced'\` permits only the
listed values and catches unsupported values during development.

### 25. What is \`children\`?

\`children\` is the prop containing content nested between a component's opening
and closing tags.

### 26. What is \`ReactNode\`?

\`ReactNode\` is a broad type for renderable React content, including elements,
strings, numbers, fragments, arrays, and empty values.

### 27. When would you use an element type instead of \`ReactNode\`?

Use an element type when a prop must specifically be a React element. Use
\`ReactNode\` when any generally renderable content is acceptable.

### 28. How can children be optional?

Declare the prop as \`children?: ReactNode\`.

### 29. What is component composition?

Composition builds larger interfaces from smaller components, supplying
values through props and nested content through children.

### 30. Why should complex logic be moved out of JSX?

Named values and helpers make the UI easier to read, test, and maintain.

### 31. Is JSX mandatory when using React?

No. React elements can be created without JSX, but JSX is widely used for its
readable UI syntax.

### 32. What can TypeScript check in JSX?

It can check component props and many intrinsic element attributes, as well
as types used by the surrounding JavaScript or TypeScript expressions. It
does not validate arbitrary runtime data by itself.

## Scenario prompts

1. A list renders but React warns that children need keys. What should you
   inspect and what makes a good key?
2. A component needs to accept either text or several nested elements. Which
   children type would you choose and why?
3. A conditional \`{count && <Notice />}\` displays \`0\`. How would you fix it?
4. TypeScript accepts a declared type, but an API returns malformed data. Why
   is an additional runtime check needed?
5. A component has a large inline conditional and calculation. How could you
   make the returned JSX easier to read?
`,gp=`# Chapter 3 — JSX with TypeScript

JSX is the bridge between JavaScript logic and the user interface. TypeScript
makes that bridge safer by checking the values passed to elements and
components.

In the previous chapters, we introduced React components and set up a React +
TypeScript project. Now we will learn how to describe a component's UI with
JSX, embed expressions, pass typed props, and compose content with children.

## Learning goals

- Explain what JSX is and why it is transformed before it runs.
- Follow JSX's structural and naming rules.
- Use JavaScript expressions to render dynamic values.
- Understand how TypeScript checks intrinsic element attributes and component
  props.
- Type reusable component children with \`ReactNode\`.
- Build a Course Landing Section from small, typed components.

## 1. What Is JSX?

JSX is a syntax extension commonly used with React. It lets us describe UI
using syntax that resembles HTML inside JavaScript or TypeScript:

\`\`\`tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
\`\`\`

JSX is not HTML. It is part of the source code and is transformed by the
project's compiler and build tooling into JavaScript that React can use. The
browser runs the resulting JavaScript, not raw JSX.

\`\`\`text
JSX source → build transformation → JavaScript → React renders the UI
\`\`\`

The exact output depends on the React and build-tool configuration. The
important point is that JSX makes UI structure easier to read and compose.

### 1.1 JSX and React elements

Without JSX, a UI element can be described with a function call:

\`\`\`tsx
const heading = React.createElement('h1', null, 'Welcome to React');
\`\`\`

JSX expresses the same intent more clearly:

\`\`\`tsx
const heading = <h1>Welcome to React</h1>;
\`\`\`

Think of JSX as a readable description of a React element tree, rather than as
HTML pasted into JavaScript.

### 1.2 JSX, expressions, and components

JSX can contain expressions that use values from the surrounding function:

\`\`\`tsx
function UserGreeting() {
  const userName = 'Learner';

  return (
    <section>
      <h1>Hello, {userName}</h1>
      <p>Welcome back to your dashboard.</p>
    </section>
  );
}
\`\`\`

JSX also lets us compose components:

\`\`\`tsx
function Header() {
  return <header>Company Portal</header>;
}

function App() {
  return (
    <main>
      <Header />
      <h1>Dashboard</h1>
    </main>
  );
}
\`\`\`

\`<header>\` is a built-in HTML element. \`<Header />\` refers to a React
component. Component names conventionally begin with an uppercase letter so
they can be distinguished from lowercase intrinsic elements such as \`<div>\`.

## 2. JSX Rules and Common Syntax

JSX resembles HTML, but it follows JavaScript-oriented syntax rules. These
rules help the compiler form a well-structured element tree.

### 2.1 Return one root element

A component's returned JSX must form one root tree. Wrap sibling elements in a
parent:

\`\`\`tsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}
\`\`\`

If an extra DOM element is not needed, use a Fragment:

\`\`\`tsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
\`\`\`

### 2.2 Close every element

JSX requires elements to be properly closed. Empty elements use a self-closing
tag:

\`\`\`tsx
function CourseImage() {
  return (
    <section>
      <img src="/course-cover.jpg" alt="React course cover" />
      <input aria-label="Search lessons" />
    </section>
  );
}
\`\`\`

Nested elements must also be correctly ordered:

\`\`\`tsx
<div>
  <h1>Course</h1>
  <p>Learn React and TypeScript.</p>
</div>
\`\`\`

Treat JSX as a tree: every opening tag has a matching closing tag, unless it
is self-closing.

### 2.3 Use \`className\` and \`htmlFor\`

JSX uses JavaScript property names for common DOM attributes:

\`\`\`tsx
function EmailField() {
  return (
    <div className="field">
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />
    </div>
  );
}
\`\`\`

Use \`className\` instead of HTML's \`class\`, and \`htmlFor\` instead of \`for\` on a
label.

### 2.4 Comments and capitalization

Write a comment inside JSX as a JavaScript comment wrapped in braces:

\`\`\`tsx
function Dashboard() {
  return (
    <main>
      {/* The page's primary content */}
      <h1>Dashboard</h1>
    </main>
  );
}
\`\`\`

Use lowercase names for intrinsic elements (\`<button />\`) and uppercase names
for React components (\`<UserCard />\`). A lowercase \`<userCard />\` is treated
as an intrinsic or custom element, not as the \`UserCard\` component.

## 3. Using JavaScript Values in JSX

Curly braces mark a JavaScript or TypeScript expression inside JSX:

\`\`\`tsx
function Profile() {
  const name = 'Learner';
  const yearsOfExperience = 3;

  return (
    <section>
      <h1>{name}</h1>
      <p>{yearsOfExperience} years of experience</p>
    </section>
  );
}
\`\`\`

The expression is evaluated and its renderable result is placed in the UI.
Curly braces accept expressions, not statements such as \`if\` or \`for\`.

### 3.1 Calculations and functions

Calculations and function calls can be used when they keep the markup clear:

\`\`\`tsx
function formatPrice(price: number): string {
  return \`₹\${price.toLocaleString('en-IN')}\`;
}

function ProductPrice() {
  const price = 75_000;
  const quantity = 2;

  return (
    <p>
      {formatPrice(price)} × {quantity} = {formatPrice(price * quantity)}
    </p>
  );
}
\`\`\`

Move complex logic into a variable or helper function before the \`return\`
instead of embedding a long calculation in JSX.

### 3.2 Boolean values and conditional rendering

Booleans are useful for choosing what to render, but \`true\` and \`false\` are
not displayed as text nodes. Use a conditional expression:

\`\`\`tsx
function CourseStatus({ isPublished }: { isPublished: boolean }) {
  return (
    <p>{isPublished ? 'This course is available.' : 'This course is being prepared.'}</p>
  );
}
\`\`\`

For optional content, logical \`&&\` is common:

\`\`\`tsx
function Notice({ hasUpdate }: { hasUpdate: boolean }) {
  return <>{hasUpdate && <p>A new lesson is available.</p>}</>;
}
\`\`\`

Be careful with numeric conditions: \`count && <Notice />\` renders \`0\` when
\`count\` is zero. Use \`count > 0 && <Notice />\` when a boolean condition is
intended.

### 3.3 Arrays and objects

Render arrays by mapping each item to an element with a stable key:

\`\`\`tsx
function SkillList() {
  const skills = ['React', 'TypeScript', 'Accessibility'];

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
\`\`\`

Keys help React match items when a list changes. Prefer a stable identifier
from the data; avoid using an array index when items can be reordered,
inserted, or removed.

Objects are data, not directly renderable text. Select the properties needed
for the UI:

\`\`\`tsx
const user = { name: 'Learner', role: 'Frontend Developer' };

function UserSummary() {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </article>
  );
}
\`\`\`

## 4. JSX Attributes and Type Safety

Attributes describe an element or provide props to a component:

\`\`\`tsx
<button type="button" disabled>
  Save
</button>
\`\`\`

### 4.1 Static and dynamic values

String attributes can use quotes, while dynamic values use braces:

\`\`\`tsx
const imageUrl = '/course-cover.jpg';
const isDisabled = false;

function CourseCover() {
  return <img src={imageUrl} alt="Course cover" hidden={isDisabled} />;
}
\`\`\`

Boolean attributes should receive a boolean value. Do not write
\`disabled="false"\` when you mean the boolean \`false\`; that is a string and
still represents a present HTML attribute.

### 4.2 Event handlers

Pass a function to an event handler; do not call it while rendering:

\`\`\`tsx
function SaveButton() {
  function handleSave() {
    console.log('Saved');
  }

  return (
    <button type="button" onClick={handleSave}>
      Save
    </button>
  );
}
\`\`\`

When an explicit event type is useful, React provides types such as
\`ChangeEvent\`:

\`\`\`tsx
import { useState, type ChangeEvent } from 'react';

function SearchBox() {
  const [query, setQuery] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return <input aria-label="Search" value={query} onChange={handleChange} />;
}
\`\`\`

TypeScript can often infer an inline handler's event type from the element
attribute, so explicit annotations are not required everywhere.

### 4.3 Component props are typed JSX attributes

When a component is used in JSX, its attributes are props. Define the expected
contract with TypeScript:

\`\`\`tsx
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </article>
  );
}

function App() {
  return <UserCard name="Learner" age={30} />;
}
\`\`\`

\`age={30}\` is valid; \`age="30"\` is a type error because the value is a string.
The same principle applies to native element attributes, which TypeScript
checks using the React JSX types.

For a finite set of values, use a union type:

\`\`\`tsx
type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

interface Course {
  title: string;
  level: CourseLevel;
  isPublished: boolean;
}
\`\`\`

Use spread props only when it improves clarity. If a component's inputs are
hidden behind several spreads, it becomes harder to see where its values come
from.

## 5. JSX Children and \`ReactNode\`

Content nested between a component's opening and closing tags is passed to the
component as \`children\`:

\`\`\`tsx
<Card>
  <h2>React Course</h2>
  <p>Learn React with TypeScript.</p>
</Card>
\`\`\`

Type general renderable children with \`ReactNode\`:

\`\`\`tsx
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <section className="card">{children}</section>;
}
\`\`\`

\`ReactNode\` is broad: it can represent elements, strings, numbers, fragments,
arrays of renderable values, and empty values such as \`null\`. Use a narrower
element type only when the component specifically requires a React element
rather than arbitrary renderable content.

Children can be optional when the component is meaningful without nested
content:

\`\`\`tsx
interface PanelProps {
  title: string;
  children?: ReactNode;
}

function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
\`\`\`

This pattern is useful for layout components: the component controls the
structure, while its caller supplies the content.

## 6. Common JSX Mistakes

Keep these checks in mind when JSX does not compile or render as expected:

| Mistake                                  | Better approach                                |
| ---------------------------------------- | ---------------------------------------------- |
| Returning sibling roots                  | Wrap them in a parent or Fragment              |
| Leaving an element unclosed              | Close it or use a self-closing tag             |
| Writing \`class\` on an element            | Use \`className\`                                |
| Writing \`for\` on a label                 | Use \`htmlFor\`                                  |
| Placing a variable outside braces        | Write \`{value}\`                                |
| Rendering an object directly             | Render the properties the UI needs             |
| Passing \`"false"\` to a boolean attribute | Pass \`false\` as a boolean                      |
| Rendering an array without keys          | Use a stable key for each list item            |
| Lowercase component name                 | Start component names with an uppercase letter |
| Putting complex logic in markup          | Calculate a named value before \`return\`        |

## 7. Mini Project — Course Landing Section with JSX

Build a small, reusable landing section using JSX and TypeScript. It should
display:

\`\`\`text
Course Landing Section
├── Course title, description, and instructor
├── Course statistics
├── Skills list
├── Published or draft status
└── Enroll action
\`\`\`

### 7.1 Define the course model

\`\`\`ts
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  title: string;
  description: string;
  instructor: string;
  level: CourseLevel;
  students: number;
  lessons: number;
  durationHours: number;
  skills: string[];
  isPublished: boolean;
}
\`\`\`

The union type prevents unsupported level values from being used by mistake.

### 7.2 Create a reusable section

\`\`\`tsx
import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
\`\`\`

The section owns its heading and layout, while its caller supplies the
content through \`children\`.

### 7.3 Compose the course UI

The following example demonstrates typed data, dynamic expressions,
conditional rendering, list rendering, attributes, and children:

\`\`\`tsx
import type { Course } from './types/course';
import Section from './components/Section';

const course: Course = {
  title: 'React with TypeScript',
  description: 'Build clear, reusable interfaces with confidence.',
  instructor: 'Alex Morgan',
  level: 'Intermediate',
  students: 2400,
  lessons: 32,
  durationHours: 12,
  skills: ['React', 'TypeScript', 'Component design'],
  isPublished: true,
};

function CourseLandingSection() {
  return (
    <main className="course-page">
      <section className="course-hero">
        <span className="course-level">{course.level}</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <p>
          Instructor: <strong>{course.instructor}</strong>
        </p>
      </section>

      <Section title="Course statistics">
        <dl className="course-stats">
          <div>
            <dt>Students</dt>
            <dd>{course.students.toLocaleString()}</dd>
          </div>
          <div>
            <dt>Lessons</dt>
            <dd>{course.lessons}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{course.durationHours} hours</dd>
          </div>
        </dl>
      </Section>

      <Section title="Skills you will practise">
        <ul className="skills">
          {course.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section>

      <p className={course.isPublished ? 'published' : 'draft'}>
        {course.isPublished
          ? 'This course is currently available.'
          : 'This course is being prepared.'}
      </p>
      <button type="button" disabled={!course.isPublished}>
        Enroll in the course
      </button>
    </main>
  );
}

export default CourseLandingSection;
\`\`\`

Use fictional sample data in your practice project. Keep the example focused:
the goal is to practise JSX and typed component contracts, not to build a
complete enrollment system.

### 7.4 Component structure

As the section grows, extract focused components such as \`CourseHero\`,
\`CourseStats\`, \`CourseStatus\`, and \`Section\`. Each component should have a
clear responsibility and explicit prop types. Avoid creating abstractions
that make a small example harder to follow.

## 8. JSX Best Practices

- Format JSX so the element tree is easy to scan.
- Move calculations and complicated conditions out of the returned markup.
- Extract a section when it has a clear responsibility or useful reuse.
- Define component contracts with specific TypeScript types instead of \`any\`.
- Use \`ReactNode\` for general renderable children.
- Use stable keys when rendering lists.
- Prefer predictable data structures and meaningful component names.

## 9. Memory Points

- JSX describes UI with JavaScript-like syntax; it is not HTML.
- Build tooling transforms JSX into JavaScript that React can use.
- Use one root element or a Fragment and close all JSX tags.
- Use \`className\`, \`htmlFor\`, braces for expressions, and uppercase component
  names.
- Render arrays with \`map\` and stable keys; render object properties rather
  than the object itself.
- JSX attributes pass values to DOM elements or component props.
- TypeScript checks props and many attributes during development.
- \`children\` is content nested inside a component, and \`ReactNode\` is a
  common type for general renderable content.
- Keep JSX readable by moving complex logic into named values and functions.

## 10. Interview Questions and Answers

### 1. What is JSX?

JSX is a syntax extension commonly used with React to describe UI inside
JavaScript or TypeScript source.

### 2. Is JSX HTML?

No. JSX resembles HTML, but it is source syntax that build tooling transforms
into JavaScript.

### 3. Why is JSX useful?

It provides a readable way to describe UI while placing expressions and
component composition close to the structure they affect.

### 4. How do you embed a JavaScript expression in JSX?

Use curly braces, for example \`<h1>Hello, {name}</h1>\`.

### 5. Can you put an \`if\` statement directly inside JSX braces?

No. Braces in JSX contain expressions. Use a ternary or logical expression,
or calculate a value before returning JSX.

### 6. Why must a component return one root?

The returned JSX must form one element tree. Wrap siblings in a parent element
or a Fragment.

### 7. What is a Fragment?

A Fragment groups multiple elements without adding another DOM element.

### 8. Why do JSX tags need to be closed?

JSX must have a well-formed element tree so it can be parsed and transformed.
Empty elements use self-closing syntax.

### 9. What is the difference between \`class\` and \`className\`?

JSX uses the \`className\` property to set an element's CSS class.

### 10. Why is \`htmlFor\` used on a label?

\`htmlFor\` is the JSX property used to associate a label with an element ID.

### 11. How are comments written inside JSX?

Use JavaScript comment syntax inside braces: \`{/* comment */}\`.

### 12. Why do React component names start with uppercase letters?

Capitalization distinguishes component references such as \`<UserCard />\` from
lowercase intrinsic elements such as \`<div />\`.

### 13. How do you render an array in JSX?

Use \`map\` to return an element for each item and give each element a stable
\`key\`.

### 14. Why does React need keys for lists?

Keys help React match list items between renders, especially when items are
added, removed, or reordered.

### 15. Can an object be rendered directly as JSX text?

Generally no. Render the object's relevant properties or transform its data
into renderable content.

### 16. How do you conditionally render one of two outputs?

Use a conditional expression such as
\`isPublished ? <Published /> : <Draft />\`.

### 17. How does logical \`&&\` render optional content?

When the condition is truthy, the expression to the right is rendered; when it
is false, React renders no element. Ensure a numeric left side cannot
accidentally display \`0\`.

### 18. How should a boolean JSX attribute receive a false value?

Pass the boolean \`false\`, such as \`disabled={false}\`. A string like
\`"false"\` is not the boolean value.

### 19. What is a component prop?

A prop is a value supplied to a component through its JSX attributes.

### 20. How does TypeScript help with component props?

A props interface or type defines the expected values, allowing TypeScript to
report invalid or missing values during development.

### 21. How do you pass an event handler?

Pass a function reference to the event prop, such as \`onClick={handleSave}\`.
Calling it during render, as in \`onClick={handleSave()}\`, runs it too early.

### 22. When should a React event be explicitly typed?

When it improves clarity or inference is insufficient. React provides types
such as \`ChangeEvent<HTMLInputElement>\`.

### 23. What is \`children\`?

\`children\` is the prop that receives content nested between a component's
opening and closing tags.

### 24. What is \`ReactNode\`?

\`ReactNode\` is a broad React type for values that can be rendered, including
elements, text, numbers, fragments, arrays, and empty values.

### 25. What is the difference between \`ReactNode\` and an element type?

\`ReactNode\` covers many renderable values. An element type is narrower and
represents a React element value specifically.

### 26. How do you make children optional?

Declare \`children?: ReactNode\` in the component's props type.

### 27. What is component composition?

Composition is building a larger UI by combining smaller components, often
passing content through props and children.

### 28. Why move complex calculations outside JSX?

Named values and helper functions make the markup easier to read, understand,
and test.

### 29. Is JSX required to use React?

No. React elements can be created without JSX, but JSX is widely used because
it makes UI descriptions more readable.

### 30. How do JSX and TypeScript complement each other?

JSX describes the UI structure, while TypeScript checks the values and
contracts used by that UI, including component props and many element
attributes.

## Chapter summary

JSX is a readable way to describe a React element tree in JavaScript or
TypeScript. We practised its structural rules, expressions, attributes,
conditional and list rendering, and typed component props. We also used
\`ReactNode\` to create a reusable layout component that accepts nested content.
The Course Landing Section combines these techniques into one small,
composed interface.
`,yp=`# Chapter 4 — Coding exercises

These exercises complement the
[chapter notes](./notes.md). Practise in a React + TypeScript project and run
the build to check your types.

## Exercise 1 — Define component props

Create a \`UserCard\` component that accepts a required \`name\` and an optional
\`role\`. Provide a default role of \`"Learner"\`.

\`\`\`tsx
interface UserCardProps {
  name: string;
  role?: string;
}
\`\`\`

Render the name and role. Use the component once with both props and once
without \`role\`.

**Check your work**

- \`name\` is required and has type \`string\`.
- \`role\` can be omitted.
- The default value appears when no role is supplied.
- Passing a number for either prop produces a TypeScript error.

## Exercise 2 — Pass a callback prop

Create a \`RenameButton\` component that accepts a label and an
\`onRename: (name: string) => void\` callback. Render a button that calls
\`onRename\` with a new name when clicked.

Use the component from a parent that owns the name in state and displays the
current value.

**Check your work**

- The child does not mutate a prop.
- The parent owns the name state.
- The parent passes the current name and callback through props.
- Clicking the button updates the parent's displayed name.

## Exercise 3 — Type state and use functional updates

Create a counter using \`useState\`. Add increment and decrement buttons. Add a
reset button that returns the count to zero.

Use functional updates for increment and decrement:

\`\`\`tsx
setCount((previousCount) => previousCount + 1);
\`\`\`

**Extension:** add a nullable selected-user state using
\`useState<User | null>(null)\` and render a loading or empty message until a
user is selected.

## Exercise 4 — Update objects and arrays immutably

Create a profile editor with \`name\` and \`role\` fields stored in typed object
state. Update one field at a time while preserving the other field.

Then create a skills list stored as \`string[]\`. Add a skill and remove a skill
without calling mutating methods such as \`push\` or changing the existing
array.

**Check your work**

- Object updates spread the previous object before changing a property.
- Array additions create a new array.
- Array removals use \`filter\`.
- The existing value is not mutated.

## Mini project: Shopping Cart Item Manager

Build a small interactive cart to practise typed props, state ownership,
callback props, and immutable array updates.

### Suggested structure

\`\`\`text
src/
├── components/
│   ├── CartItem.tsx
│   ├── CartList.tsx
│   └── CartSummary.tsx
├── types/
│   └── cart.ts
├── App.tsx
└── index.css
\`\`\`

### Requirements

1. Define and export a \`CartItem\` type with \`id\`, \`name\`, \`price\`, and
   \`quantity\`.
2. Keep the cart items in state in the parent component.
3. Render each cart item with a reusable \`CartItem\` component and a stable
   key.
4. Pass typed callbacks to increase or decrease an item's quantity.
5. Remove an item when its quantity reaches zero, or provide a separate
   remove action.
6. Calculate the total from the current cart items instead of storing a
   duplicate total in state.
7. Disable the decrease action when an item's quantity is one if the chosen
   behavior does not allow zero quantities.
8. Use a union type for any constrained values, such as a filter or item
   status.
9. Use fictional sample product data.

### Completion checklist

- [ ] Cart data matches the \`CartItem\` type.
- [ ] The parent owns the shared cart state.
- [ ] Child components receive data and callbacks through typed props.
- [ ] Updates use functional state setters when based on previous state.
- [ ] Array items are added, updated, and removed immutably.
- [ ] The total is derived from cart state.
- [ ] \`npm run build\` completes successfully.

### Reflection

1. Which component owns the cart state, and why?
2. Why should a child call a callback instead of mutating its item prop?
3. Why is the total derived instead of stored as separate state?
4. Which update uses \`map\`, and which uses \`filter\`?
5. When would it make sense to lift the cart state higher in the tree?
`,bp=`# Chapter 4 — Scenario-Based Interview Questions and Answers

Technical interviews often test whether you understand how React works in real
situations rather than simply asking definitions. The following scenarios are
particularly important.

## Scenario 1 — A Child Needs to Update Parent Data

**Question**

A parent component owns a user's name. A child component contains a button that
should change the name. Should the child directly modify the prop?

**Answer**

No. Props should be treated as read-only. The parent should own the state and
pass a callback to the child.

\`\`\`tsx
interface ChildProps {
  name: string;
  onChangeName: (name: string) => void;
}

function Child({ name, onChangeName }: ChildProps) {
  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={() => onChangeName('Rahul')}>
        Change Name
      </button>
    </div>
  );
}
\`\`\`

The parent owns the state:

\`\`\`tsx
function Parent() {
  const [name, setName] = useState('Wishvanath');

  return <Child name={name} onChangeName={setName} />;
}
\`\`\`

The data flow is:

\`\`\`text
Parent State
  ↓
Props
  ↓
Child
  ↓
Callback
  ↓
Parent State Update
\`\`\`

## Scenario 2 — State Starts as \`null\`

**Question**

An API call will eventually return a \`User\`, but initially there is no user.
How should the state be typed?

**Answer**

Use a union type:

\`\`\`tsx
interface User {
  id: number;
  name: string;
}

const [user, setUser] = useState<User | null>(null);
\`\`\`

This tells TypeScript that the state can contain either a \`User\` or \`null\`.

## Scenario 3 — Updating Based on Previous State

**Question**

You have a counter and want to increment it. Which approach is safer when the
new value depends on the previous value?

**Answer**

Use the functional updater:

\`\`\`tsx
setCount((previousCount) => previousCount + 1);
\`\`\`

This explicitly tells React that the next value depends on the previous
state.

## Scenario 4 — Adding an Item to an Array

**Question**

You have:

\`\`\`tsx
const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);
\`\`\`

How do you add \`"Node.js"\` without mutating the existing array?

**Answer**

Create a new array:

\`\`\`tsx
setSkills((previousSkills) => [...previousSkills, 'Node.js']);
\`\`\`

## Scenario 5 — Updating One Object in an Array

**Question**

You have an array of employees and want to update one employee's role. How
would you do it?

**Answer**

Use \`map()\` and return a new object for the matching employee:

\`\`\`tsx
setEmployees((previousEmployees) =>
  previousEmployees.map((employee) =>
    employee.id === employeeId
      ? {
          ...employee,
          role: 'Lead Engineer',
        }
      : employee,
  ),
);
\`\`\`

This preserves immutability.

## Scenario 6 — Optional Prop

**Question**

A component's title is optional and should default to \`"Dashboard"\`. How
would you define it?

**Answer**

\`\`\`tsx
interface HeaderProps {
  title?: string;
}

function Header({ title = 'Dashboard' }: HeaderProps) {
  return <h1>{title}</h1>;
}
\`\`\`

## Scenario 7 — Restricting a Prop to Specific Values

**Question**

A button should accept only primary, secondary, or danger. How would you type
it?

**Answer**

Use a union type:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
}
\`\`\`

This prevents invalid values such as:

\`\`\`tsx
<Button variant="success" />
\`\`\`

## Scenario 8 — Should Derived Data Be State?

**Question**

You have:

\`\`\`tsx
const [firstName, setFirstName] = useState('Wishvanath');
const [lastName, setLastName] = useState('Sah');
\`\`\`

Should you also store \`fullName\` in state?

**Answer**

Usually no. Derive it:

\`\`\`tsx
const fullName = \`\${firstName} \${lastName}\`;
\`\`\`

This avoids duplicated state and multiple sources of truth.

## Scenario 9 — Object State Update

**Question**

You have:

\`\`\`tsx
interface Profile {
  name: string;
  role: string;
}

const [profile, setProfile] = useState<Profile>({
  name: 'Wishvanath',
  role: 'Engineer',
});
\`\`\`

How do you update only the role?

**Answer**

\`\`\`tsx
setProfile((previousProfile) => ({
  ...previousProfile,
  role: 'Lead Engineer',
}));
\`\`\`

The spread operator preserves the existing properties.

## Scenario 10 — Child Needs Only One Property

**Question**

A parent has a large \`User\` object, but a child only needs the user's name.
Should you always pass the entire object?

**Answer**

Not necessarily. If the child only needs the name, passing only the required
data can make the component's contract clearer.

\`\`\`tsx
interface UserNameProps {
  name: string;
}
\`\`\`

Usage:

\`\`\`tsx
<UserName name={user.name} />
\`\`\`

The appropriate choice depends on component design and reuse.

## Scenario 11 — Two Components Need the Same State

**Question**

Two sibling components need access to the same selected user. Where should
the state live?

**Answer**

Usually, move the shared state to their closest common parent.

\`\`\`text
       Parent
       /    \\
      ↓      ↓
  Child A  Child B
\`\`\`

The parent owns:

\`\`\`tsx
const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
\`\`\`

and passes the required value and callbacks to both children. This is
commonly called lifting state up.

## Scenario 12 — Why Not Mutate State Directly?

**Question**

Why is this problematic?

\`\`\`tsx
skills.push('React');
\`\`\`

**Answer**

Because it directly mutates the existing state array. Instead:

\`\`\`tsx
setSkills((previousSkills) => [...previousSkills, 'React']);
\`\`\`

React state should be updated by providing a new value rather than mutating
the existing value.

## Scenario 13 — Form State

**Question**

You are building a login form with email and password. Should these values be
state?

**Answer**

If the component needs to respond to user input and submit the current values,
local state is a common approach.

\`\`\`tsx
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
\`\`\`

The values can then be connected to controlled inputs.

## Scenario 14 — Loading State

**Question**

A component fetches data from an API. What state might you need?

**Answer**

A common design includes:

\`\`\`tsx
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [user, setUser] = useState<User | null>(null);
\`\`\`

This allows the UI to represent different states:

\`\`\`text
Loading
  ↓
Success → User
  ↓
Failure → Error
\`\`\`

The exact architecture depends on the application's data-fetching strategy.

## Scenario 15 — Props or State?

**Question**

A modal has an \`isOpen\` value. Should it always be state?

**Answer**

Not necessarily. If the parent controls whether the modal is open, \`isOpen\`
can be a prop:

\`\`\`tsx
<Modal isOpen={isModalOpen} />
\`\`\`

The actual state may live in the parent:

\`\`\`tsx
const [isModalOpen, setIsModalOpen] = useState(false);
\`\`\`

The important question is: which component should own the changing value?
`,xp=`# Chapter 4 — Props and State with TypeScript

Props define what a component receives. State defines what a component manages
and changes.

In the previous chapters, we learned to create React applications, organize
project files, write JSX, and combine JSX with TypeScript. We have already
seen props in examples such as:

\`\`\`tsx
<UserCard name="Learner" age={30} />
\`\`\`

Here, \`name\` and \`age\` are props. Real applications also respond to
interactions: users click buttons, enter text, select options, open menus, add
and remove products, update profiles, filter lists, submit forms, and toggle
settings. When application data changes as a result of interaction, React
needs a way to manage that changing data. That is where state comes in.

\`\`\`text
Props → data received by a component
State → data managed by a component
\`\`\`

With TypeScript, we can make both props and state strongly typed. The result
is a clearer data contract and more predictable UI.

## Learning goals

- Type required, optional, object, union, and function props.
- Provide defaults for optional props.
- Manage local state with \`useState\` and TypeScript.
- Update object and array state without mutation.
- Decide whether data belongs in props or state.
- Keep one source of truth and derive values when possible.

## 1. Props with TypeScript

Props are values passed from a parent component to a child component:

\`\`\`tsx
function App() {
  return <UserCard name="Learner" role="Frontend Developer" />;
}
\`\`\`

\`UserCard\` receives the \`name\` and \`role\` props. Describe the component's
expected inputs with a TypeScript interface:

\`\`\`tsx
interface UserCardProps {
  name: string;
  role: string;
}

function UserCard({ name, role }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}
\`\`\`

The interface is the component contract: \`name\` and \`role\` are both required
strings. TypeScript reports an error if a required prop is missing or if a
value has the wrong type.

### 1.1 Required props

Every property in an interface is required unless it is marked optional:

\`\`\`tsx
interface ProductCardProps {
  name: string;
  price: number;
  category: string;
}
\`\`\`

This usage supplies all three properties:

\`\`\`tsx
<ProductCard name="Laptop" price={75000} category="Electronics" />
\`\`\`

If \`category\` is omitted, TypeScript reports an error. Required props help
prevent a component from silently receiving incomplete data.

### 1.2 Props with different types

Props can contain strings, numbers, booleans, arrays, objects, functions,
renderable React content, and union types. For example:

\`\`\`tsx
interface Employee {
  id: number;
  name: string;
  role: string;
}

interface EmployeeCardProps {
  employee: Employee;
  isSelected: boolean;
}

function EmployeeCard({ employee, isSelected }: EmployeeCardProps) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      {isSelected && <strong>Selected</strong>}
    </article>
  );
}
\`\`\`

The caller supplies an \`Employee\` object and a boolean:

\`\`\`tsx
<EmployeeCard
  employee={{
    id: 1,
    name: 'Learner',
    role: 'Frontend Developer',
  }}
  isSelected
/>
\`\`\`

For shared data models, define the model once and reuse it across components.

### 1.3 Function props

A child may need to notify its parent when an action occurs. Pass a callback
through a function prop:

\`\`\`tsx
interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
\`\`\`

The parent supplies the callback:

\`\`\`tsx
function App() {
  function handleSave() {
    console.log('Saved');
  }

  return <ActionButton label="Save" onClick={handleSave} />;
}
\`\`\`

A callback can accept parameters too:

\`\`\`tsx
interface UserActionsProps {
  onSelect: (userId: number) => void;
}

function UserActions({ onSelect }: UserActionsProps) {
  return (
    <button type="button" onClick={() => onSelect(101)}>
      Select user
    </button>
  );
}
\`\`\`

The function type \`(userId: number) => void\` describes its input and indicates
that callers should not expect a return value.

### 1.4 Object props

When a group of values describes one entity, a component can receive a
structured object rather than many separate values:

\`\`\`tsx
interface User {
  name: string;
  role: string;
  location: string;
  experience: number;
}

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <p>{user.location}</p>
      <p>{user.experience} years of experience</p>
    </article>
  );
}
\`\`\`

Choose between individual props and an object based on the component's
responsibility and reuse. Prefer a clear contract over passing an unnecessarily
large object.

## 2. Optional Props and Default Values

Mark a property optional with \`?\`:

\`\`\`tsx
interface ProfileProps {
  name: string;
  role?: string;
}
\`\`\`

The caller may provide \`role\` or omit it:

\`\`\`tsx
<Profile name="Learner" role="Frontend Developer" />
<Profile name="Learner" />
\`\`\`

An optional value may be \`undefined\`, so the component must handle that case.
It can conditionally render the value:

\`\`\`tsx
function Profile({ name, role }: ProfileProps) {
  return (
    <article>
      <h2>{name}</h2>
      {role && <p>{role}</p>}
    </article>
  );
}
\`\`\`

### 2.1 Defaults during destructuring

Provide a default while destructuring the props:

\`\`\`tsx
interface ButtonProps {
  label?: string;
}

function Button({ label = 'Submit' }: ButtonProps) {
  return <button type="button">{label}</button>;
}
\`\`\`

\`<Button />\` uses \`"Submit"\`; \`<Button label="Save" />\` uses \`"Save"\`.
Optionality describes whether the caller may omit a prop. The default value
describes the component's behavior when the value is omitted or \`undefined\`.

Optional boolean props can also have defaults:

\`\`\`tsx
interface ModalProps {
  title: string;
  isClosable?: boolean;
}

function Modal({ title, isClosable = true }: ModalProps) {
  return (
    <section>
      <h2>{title}</h2>
      {isClosable && <button type="button">Close</button>}
    </section>
  );
}
\`\`\`

### 2.2 Union types for props

Use a union when a prop should accept only specific values:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
}
\`\`\`

These are valid:

\`\`\`tsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="danger" />
\`\`\`

This is invalid because \`"success"\` is not part of the union:

\`\`\`tsx
<Button variant="success" />
\`\`\`

Optional union props can have a default as well:

\`\`\`tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <button className={\`button button-\${variant}\`} type="button">
      Submit
    </button>
  );
}
\`\`\`

## 3. State with \`useState\`

Props are received by a component; state is managed by a component. React's
\`useState\` Hook stores local state:

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

The general pattern is:

\`\`\`tsx
const [state, setState] = useState(initialValue);
\`\`\`

The setter requests a state update. React then renders the component with the
updated state.

### 3.1 Type inference and explicit types

TypeScript often infers a useful state type from the initial value:

\`\`\`tsx
const [count, setCount] = useState(0); // number
const [name, setName] = useState('Learner'); // string
\`\`\`

When the initial value does not describe every value the state can later
contain, provide a type argument. For data that may not have loaded yet:

\`\`\`tsx
interface User {
  id: number;
  name: string;
  role: string;
}

const [user, setUser] = useState<User | null>(null);
\`\`\`

The state can contain either a \`User\` or \`null\`. The component should account
for both:

\`\`\`tsx
function UserProfile({ user }: { user: User | null }) {
  if (!user) {
    return <p>Loading user...</p>;
  }

  return <h2>{user.name}</h2>;
}
\`\`\`

### 3.2 Updating from previous state

Use the functional updater when the next value depends on the previous value:

\`\`\`tsx
setCount((previousCount) => previousCount + 1);
\`\`\`

The updater receives the previous state and returns the next state. This makes
the dependency explicit and is the safer pattern for updates based on current
state:

\`\`\`tsx
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
\`\`\`

When state changes, React schedules a render so the UI can reflect the new
value:

\`\`\`text
Initial state → render → user interaction → state update → render → updated UI
\`\`\`

### 3.3 Choose state for UI-relevant data

Good state candidates are values that change over time and affect what the
user sees, such as:

- whether a modal is open;
- the selected tab or item;
- search text and form values;
- loading or error status;
- expanded sections.

Not every value needs to be state. If a value can be calculated from existing
data, derive it instead:

\`\`\`tsx
const firstName = 'Learner';
const lastName = 'One';
const fullName = \`\${firstName} \${lastName}\`;
\`\`\`

Avoid separate \`fullName\` state when it can always be calculated from
\`firstName\` and \`lastName\`. Store the minimum state necessary and prefer one
source of truth.

## 4. Object and Array State

Applications commonly manage profile objects, form objects, product lists,
and arrays of employees. TypeScript can describe their shapes, and React state
should be updated by creating new values rather than mutating existing ones.

### 4.1 Object state

Define the object shape and use it as the state type:

\`\`\`tsx
interface Profile {
  name: string;
  role: string;
  location: string;
}

const [profile, setProfile] = useState<Profile>({
  name: 'Learner',
  role: 'Frontend Developer',
  location: 'Hyderabad',
});
\`\`\`

To update one property, copy the existing properties and replace the value:

\`\`\`tsx
setProfile((previousProfile) => ({
  ...previousProfile,
  role: 'Lead Engineer',
}));
\`\`\`

Do not directly assign to \`profile.role\`. State should be treated as
immutable.

### 4.2 Nested object updates

Copy every object level that changes:

\`\`\`tsx
interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  address: Address;
}

const [user, setUser] = useState<User>({
  name: 'Learner',
  address: {
    city: 'Hyderabad',
    country: 'India',
  },
});

setUser((previousUser) => ({
  ...previousUser,
  address: {
    ...previousUser.address,
    city: 'Bengaluru',
  },
}));
\`\`\`

The outer user and nested address are both copied, so the existing state
objects are not mutated.

### 4.3 Array state

Use an array type such as \`string[]\` or \`Product[]\`:

\`\`\`tsx
const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);
\`\`\`

Add an item by returning a new array:

\`\`\`tsx
setSkills((previousSkills) => [...previousSkills, 'Node.js']);
\`\`\`

Remove items with \`filter\`, which returns a new array:

\`\`\`tsx
setSkills((previousSkills) => previousSkills.filter((skill) => skill !== 'Node.js'));
\`\`\`

Update one item with \`map\`, returning a new object for the item that changed:

\`\`\`tsx
interface Product {
  id: number;
  name: string;
  price: number;
}

setProducts((previousProducts) =>
  previousProducts.map((product) =>
    product.id === productId ? { ...product, price: newPrice } : product,
  ),
);
\`\`\`

Avoid mutating the existing array or its objects with methods such as
\`push\`, or direct property assignments. Create a new state value instead.

## 5. Props vs State

Props and state are closely related, but serve different purposes:

| Feature             | Props                          | State                       |
| ------------------- | ------------------------------ | --------------------------- |
| Source              | Parent component               | Component itself            |
| Purpose             | Pass data or configuration     | Manage changing data        |
| Direct modification | Treat as read-only             | Update through its setter   |
| Can change?         | Parent can provide a new value | Yes, through a state update |
| Typical use         | Data and configuration         | Interaction and UI state    |

Props describe what a component receives. State describes what a component
manages.

### 5.1 Parent-owned state and callbacks

A child should not directly change a prop. If a child interaction needs to
change parent-owned data, the parent can pass a callback:

\`\`\`tsx
interface ChildProps {
  value: number;
  onChange: (value: number) => void;
}

function Parent() {
  const [value, setValue] = useState(0);

  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }: ChildProps) {
  return (
    <button type="button" onClick={() => onChange(value + 1)}>
      {value}
    </button>
  );
}
\`\`\`

The parent owns the state, passes its current value through props, and
provides a callback the child can call. When multiple components need the
same changing data, move the state to their closest common parent. This is
called lifting state up.

### 5.2 Decide whether data belongs in props or state

Use props when a parent owns the value and a child needs to display it, receive
configuration, or request a change through a callback.

Use state when a value changes over time, user interaction changes it, and
the component owns the behavior that changes it.

For example, \`isOpen\` can be a prop if a parent controls a modal:

\`\`\`tsx
<Modal isOpen={isModalOpen} />
\`\`\`

The actual state may live in the parent:

\`\`\`tsx
const [isModalOpen, setIsModalOpen] = useState(false);
\`\`\`

The key question is: which component should own the changing value?

### 5.3 Avoid duplicated or excessive state

Do not store a value in state if it can be derived from other values. Avoid
using \`any\` for state when a meaningful type is available, and do not
automatically turn every variable into state. Ask whether the value changes
over time and whether the UI needs to respond.

A component receiving many unrelated props may indicate that its boundary
should be reconsidered. A structured object or more focused component
responsibilities can make the contract clearer, but do not add abstraction
without a reason.

## 6. Common Mistakes with Props and State

### 6.1 Mutating props

Avoid assigning to a prop such as \`user.name\`. Props are read-only inputs. A
child can request a change through a callback provided by its parent.

### 6.2 Mutating state

Avoid mutating an existing array:

\`\`\`tsx
items.push(newItem);
\`\`\`

Instead, use the setter to provide a new array:

\`\`\`tsx
setItems((previousItems) => [...previousItems, newItem]);
\`\`\`

### 6.3 Storing derived values

Avoid duplicate state when a value can be calculated from existing values.
For example, derive a full name from the current first and last names.

### 6.4 Using \`any\` for state

Avoid opting out of type checking:

\`\`\`tsx
const [user, setUser] = useState<any>(null);
\`\`\`

Prefer a meaningful model, for example \`useState<User | null>(null)\`.

### 6.5 Using too much state

Store values in state only when they change and the UI needs to respond to
those changes. Other values can be regular variables or derived values.

## 7. Memory Points

### Props

- Props are data passed from a parent to a child and should be treated as
  read-only.
- Interfaces describe prop contracts; required props must be supplied.
- Optional props use \`?\`, and destructuring can provide defaults.
- Props can contain objects, arrays, functions, and union types.
- Callback props let children request changes from parents.

### State

- State is managed by a component with \`useState\`.
- TypeScript can infer simple state types; explicit types help when the
  initial value does not describe every possible value.
- \`User | null\` is common for data that may not have loaded yet.
- Use functional updates when the next value depends on the previous state.
- State updates cause React to render the component with the new state.
- Avoid unnecessary state and derive values when possible.

### Objects, arrays, and architecture

- Do not mutate state directly.
- Use object spread to copy and update objects.
- Use array spread to add items, \`filter\` to remove them, and \`map\` to update
  them.
- Parent components can own state and pass values and callbacks through props.
- Lift state up when components need to share changing data.
- Prefer one source of truth.

## 8. Quick Revision Sheet

\`\`\`text
Props → data from parent → child component
State → data owned by component → interaction → update → re-render
\`\`\`

Typed props:

\`\`\`tsx
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{age}</p>
    </article>
  );
}
\`\`\`

Typed state and immutable updates:

\`\`\`tsx
const [count, setCount] = useState(0);

interface Profile {
  name: string;
  role: string;
}

const [profile, setProfile] = useState<Profile>({
  name: 'Learner',
  role: 'Engineer',
});

setProfile((previousProfile) => ({
  ...previousProfile,
  role: 'Lead Engineer',
}));

const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);

setSkills((previousSkills) => [...previousSkills, 'Node.js']);
setSkills((previousSkills) => previousSkills.filter((skill) => skill !== 'Node.js'));
\`\`\`

The central idea is: props describe what a component receives; state describes
what it manages and changes. TypeScript can make both contracts more
predictable.
`,mr=[{title:"Part 1 — Getting started",chapters:[{part:"Part 1 — Getting started",title:"Introduction to React and TypeScript",lessons:["What Is React?","What Is TypeScript?","Why Use React with TypeScript?","Modern React Development Mindset","Mini Project: Simple Profile Dashboard"],project:"Simple Profile Dashboard",materials:{notes:up,exercises:lp,interviews:cp}},{part:"Part 1 — Getting started",title:"React + TypeScript Project Setup",lessons:["What Is Project Setup?","Understanding Generated Project Files","Understanding package.json and Scripts","Understanding tsconfig.json","Creating Your First Clean React TypeScript Component","Mini Project: Company Team Dashboard Setup"],project:"Company Team Dashboard Setup",materials:{notes:hp,exercises:pp,interviews:dp}},{part:"Part 1 — Getting started",title:"JSX with TypeScript",lessons:["What Is JSX?","JSX Rules and Common Syntax","Using JavaScript Values in JSX","JSX Attributes and Type Safety","JSX Children and React.ReactNode","Mini Project: Course Landing Section with JSX"],project:"Course Landing Section with JSX",materials:{notes:gp,exercises:mp,interviews:fp}}]},{title:"Part 2 — Core React with TypeScript",chapters:[{part:"Part 2 — Core React with TypeScript",title:"Props and State with TypeScript",lessons:["Props with TypeScript","Optional Props and Default Values","State with useState","Object and Array State","Props vs State","Mini Project: Shopping Cart Item Manager"],project:"Shopping Cart Item Manager",materials:{notes:xp,exercises:yp,interviews:bp}},{part:"Part 2 — Core React with TypeScript",title:"Functional Components and Component Design",lessons:["Functional Components","Component Responsibility","Pure Components","Component Composition","Smart and Presentational Components","Mini Project: Employee Directory Component Design"],project:"Employee Directory Component Design"},{part:"Part 2 — Core React with TypeScript",title:"Hooks with TypeScript",lessons:["Rules of Hooks","useState with TypeScript","useEffect with TypeScript","useContext with TypeScript","useReducer with TypeScript","useRef with TypeScript","Mini Project: Support Ticket Dashboard"],project:"Support Ticket Dashboard"}]},{title:"Part 3 — User interaction and UI logic",chapters:[{part:"Part 3 — User interaction and UI logic",title:"Forms and Event Handling with TypeScript",lessons:["Event Handling with TypeScript","Controlled Inputs","Form Submit Handling","Handling Multiple Form Fields","Checkbox, Select, and Textarea","Basic Form Validation","Mini Project: Job Application Form"],project:"Job Application Form"},{part:"Part 3 — User interaction and UI logic",title:"Conditional Rendering, Lists, and Keys",lessons:["Conditional Rendering","Ternary and && Rendering","Rendering Lists with map","Filtering Lists","Keys in React","Mini Project: Task Manager with Filters"],project:"Task Manager with Filters"}]},{title:"Part 4 — Advanced TypeScript for React",chapters:[{part:"Part 4 — Advanced TypeScript for React",title:"Advanced TypeScript for React",lessons:["Generics in TypeScript","Generic React Components","Utility Types","Interfaces vs Types","Advanced Type Patterns for React","Mini Project: Generic Data Table with Typed API State"],project:"Generic Data Table with Typed API State"}]},{title:"Part 5 — Real-world data and app state",chapters:[{part:"Part 5 — Real-world data and app state",title:"API Integration and Error Handling with TypeScript",lessons:["What Is API Integration?","Fetching Data with useEffect","Error Handling with TypeScript","Creating a Reusable API Client","Axios with TypeScript","Mini Project: Product API Dashboard"],project:"Product API Dashboard"},{part:"Part 5 — Real-world data and app state",title:"Custom Hooks and Reusable Logic with TypeScript",lessons:["What Is a Custom Hook?","Creating a useFetch Hook","Custom Hook for Forms","useLocalStorage Hook","useDebounce Hook","Mini Project: Reusable Searchable Course Dashboard"],project:"Reusable Searchable Course Dashboard"},{part:"Part 5 — Real-world data and app state",title:"Context API and Global State Patterns with TypeScript",lessons:["What Is Context API?","Creating Type-Safe Context","Updating Context State","Context with useReducer","Global State Patterns and When Not to Use Context","Mini Project: Auth and Cart Context System"],project:"Auth and Cart Context System"}]},{title:"Part 6 — Industry-ready React practices",chapters:[{part:"Part 6 — Industry-ready React practices",title:"Performance Optimization with React and TypeScript",lessons:["What Is Performance Optimization?","React.memo","useMemo","useCallback","Large Lists and Rendering Optimization","Measuring Performance with Profiler","Mini Project: Optimized Product Search Dashboard"],project:"Optimized Product Search Dashboard"},{part:"Part 6 — Industry-ready React practices",title:"Folder Structure and Clean Code for React TypeScript Projects",lessons:["Why Folder Structure Matters","Component Organisation","Clean TypeScript Types","API and Service Layer Organisation","Clean Code Rules for React TypeScript","Import, Export, and Naming Conventions","Mini Project: Clean Feature-Based Course App Structure"],project:"Clean Feature-Based Course App Structure"},{part:"Part 6 — Industry-ready React practices",title:"Testing Basics for React TypeScript Applications",lessons:["What Is Testing?","Setting Up Testing in React TypeScript","Testing Components with React Testing Library","Testing User Events","Testing Forms and Validation","Testing API States and Mocking","Mini Project: Tested Login and Product List"],project:"Tested Login and Product List"}]},{title:"Part 7 — Application-level features",chapters:[{part:"Part 7 — Application-level features",title:"Authentication Flow with React and TypeScript",lessons:["What Is Authentication?","Login and Logout Flow","Auth Context with TypeScript","Protected Routes","Token Storage and Security Basics","Role-Based Access Control","Handling Auth Loading and Errors","Mini Project: Protected Dashboard App"],project:"Protected Dashboard App"},{part:"Part 7 — Application-level features",title:"Routing with React Router and TypeScript",lessons:["What Is Routing?","Setting Up React Router","Route Components and Layout Routes","Dynamic Routes and URL Params","Navigation with Link and useNavigate","Protected Routes","Not Found Page","Mini Project: Multi-Page Course Platform"],project:"Multi-Page Course Platform"},{part:"Part 7 — Application-level features",title:"State Management with Redux Toolkit Basics",lessons:["What Is Global State?","Why Redux Toolkit?","Store and Slice Setup","Actions and Reducers","useSelector and useDispatch with TypeScript","Async State with Redux Toolkit","Best Practices and When to Use Redux","Mini Project: Course Platform Global State Management"],project:"Course Platform Global State Management"}]},{title:"Part 8 — Real-world projects and production skills",chapters:[{part:"Part 8 — Real-world projects and production skills",title:"Real-World Project Patterns",lessons:["Building Feature-Based Apps","Handling Loading, Error, Empty, and Success States","Reusable Components and Hooks","API Layer Patterns","Form Patterns","Permission-Based UI","Common Industry Mistakes","Debugging Tips for Real Projects"],project:"Real-World Project Patterns"},{part:"Part 8 — Real-world projects and production skills",title:"Final Big Project — React TypeScript Admin Dashboard",lessons:["Project Overview","Features and Requirements","Folder Structure","Authentication Flow","Routing Setup","Dashboard Layout","API Integration","Forms and Validation","Global State Management","Performance Optimization","Testing Important Flows","Final Best Practices","Possible Improvements"],project:"React TypeScript Admin Dashboard"}]}];function kp(e){return e.toLowerCase().replace(/^mini project:\s*/,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}const be=mr.flatMap((e,n)=>e.chapters.map((t,r)=>{const i=mr.slice(0,n).reduce((o,a)=>o+a.chapters.length,0)+r+1;return{id:`chapter-${String(i).padStart(2,"0")}`,number:i,part:e.title,title:t.title,lessons:t.lessons.map(o=>({title:o.replace(/^Mini Project:\s*/,""),slug:kp(o),isProject:o.startsWith("Mini Project:")})),project:t.project,materials:t.materials}}));function Fn(e,n){return`/course/${e.id}/${n.slug}`}const bi="react-typescript-mastery-progress-v1",xi="react-typescript-mastery-theme-v1",ki=[{id:"notes",label:"Chapter notes"},{id:"exercises",label:"Coding exercises"},{id:"interviews",label:"Interview questions"}];function wp(){try{const e=localStorage.getItem(xi);if(e==="dark"||e==="light")return e}catch(e){console.error("Could not read saved theme preference.",e)}return window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function Sp(){try{const e=localStorage.getItem(bi);if(!e)return{};const n=JSON.parse(e);if(n&&typeof n=="object"&&!Array.isArray(n))return Object.fromEntries(Object.entries(n).filter(([,t])=>typeof t=="boolean"))}catch(e){console.error("Could not read saved lesson progress.",e)}return{}}function vp(e){const n=e.get("resource");return ki.some(t=>t.id===n)?n:"notes"}function Pp(){const{chapterId:e,lessonId:n}=Ri(),t=ji(),[r,i]=Li(),[o,a]=Be.useState(wp),[s,c]=Be.useState(Sp),l=be.findIndex(w=>w.id===e),p=l<0?0:l,u=be[p],h=u.lessons.findIndex(w=>w.slug===n),d=h<0?0:h,g=u.lessons[d],v=vp(r),C=u.materials,y=!!C,I=Object.values(s).filter(Boolean).length,T=be.reduce((w,R)=>w+R.lessons.length,0),j=Math.round(I/T*100),N=`${u.id}:${g.slug}`,k=s[N]===!0,M=u.lessons.filter(w=>s[`${u.id}:${w.slug}`]).length,_=C==null?void 0:C[v],q=d>0?{chapterIndex:p,lessonIndex:d-1}:p>0?{chapterIndex:p-1,lessonIndex:be[p-1].lessons.length-1}:void 0,b=d<u.lessons.length-1?{chapterIndex:p,lessonIndex:d+1}:p<be.length-1?{chapterIndex:p+1,lessonIndex:0}:void 0;if(Be.useEffect(()=>{var w;document.documentElement.dataset.theme=o,(w=document.querySelector('meta[name="theme-color"]'))==null||w.setAttribute("content",o==="light"?"#f5f6f7":"#0b1020");try{localStorage.setItem(xi,o)}catch(R){console.error("Could not save theme preference.",R)}return()=>{var R;delete document.documentElement.dataset.theme,(R=document.querySelector('meta[name="theme-color"]'))==null||R.setAttribute("content","#0b1020")}},[o]),Be.useEffect(()=>{l<0||(n!==g.slug||e!==u.id)&&t({pathname:Fn(u,g),search:r.toString()},{replace:!0})},[u,e,l,g,n,t,r]),Be.useEffect(()=>{var w;window.scrollTo(0,0),(w=document.querySelector("#course-main"))==null||w.focus({preventScroll:!0})},[e,n]),l<0)return S.jsx(Di,{to:"/course/chapter-01",replace:!0});function E(w){i(R=>{const W=new URLSearchParams(R);return W.set("resource",w),W})}function L(w,R){const W=be[w],Y=W.lessons[R];t(Fn(W,Y))}function H(){const w={...s};k?delete w[N]:w[N]=!0,c(w);try{localStorage.setItem(bi,JSON.stringify(w))}catch(R){console.error("Could not save lesson progress.",R)}}const D={a:({href:w,children:R})=>{const W=w==null?void 0:w.match(/(notes|exercises|interview-questions)\.md/);if(W){const Y=W[1]==="interview-questions"?"interviews":W[1]==="exercises"?"exercises":"notes";return S.jsx("button",{className:"course-markdown-link",type:"button",onClick:()=>E(Y),children:R})}return w!=null&&w.startsWith("#")?S.jsx("a",{href:w,children:R}):S.jsx("a",{href:w,target:"_blank",rel:"noreferrer",children:R})}};return S.jsxs("div",{className:"course-shell","data-theme":o,children:[S.jsxs("header",{className:"course-topbar",children:[S.jsxs(Ke,{className:"course-brand",to:"/","aria-label":"Return to React TypeScript Mastery home",children:[S.jsx("span",{className:"course-brand-mark","aria-hidden":"true",children:"R"}),S.jsxs("span",{children:["React TypeScript ",S.jsx("strong",{children:"Mastery"})]})]}),S.jsxs("div",{className:"course-topbar-actions",children:[S.jsxs("span",{className:"course-status",children:[S.jsx("i",{"aria-hidden":"true"})," Free learning path"]}),S.jsxs("button",{className:"theme-toggle",type:"button","aria-label":`Switch to ${o==="light"?"dark":"light"} theme`,"aria-pressed":o==="light",onClick:()=>a(o==="light"?"dark":"light"),children:[S.jsx("span",{"aria-hidden":"true",children:o==="light"?"◐":"☼"}),o==="light"?"Dark theme":"Light theme"]})]})]}),S.jsxs("div",{className:"course-layout",children:[S.jsxs("aside",{className:"course-sidebar","aria-label":"Course chapters",children:[S.jsxs("div",{className:"course-sidebar-heading",children:[S.jsx("p",{children:"Complete learning path"}),S.jsx("h1",{children:"React.js Mastery"}),S.jsx("span",{children:"20 chapters · 8 parts"})]}),S.jsxs("div",{className:"course-progress",children:[S.jsxs("div",{className:"course-progress-copy",children:[S.jsx("span",{children:"Your course progress"}),S.jsxs("strong",{children:[j,"%"]})]}),S.jsx("div",{className:"course-progress-track",role:"progressbar","aria-label":"Course progress","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":j,children:S.jsx("span",{style:{width:`${j}%`}})}),S.jsxs("small",{children:[I," of ",T," lessons complete"]})]}),S.jsx("nav",{"aria-label":"Chapters by course part",children:Array.from(new Set(be.map(w=>w.part))).map(w=>S.jsxs("section",{className:"course-part",children:[S.jsx("h2",{children:w}),be.filter(R=>R.part===w).map(R=>{const W=be.indexOf(R),Y=R.lessons.filter(m=>s[`${R.id}:${m.slug}`]).length,le=!!R.materials;return S.jsxs(Ke,{className:"course-chapter-link",to:`/course/${R.id}/${R.lessons[0].slug}`,"aria-current":W===l?"page":void 0,children:[S.jsx("span",{className:"course-chapter-number",children:String(R.number).padStart(2,"0")}),S.jsx("span",{className:"course-chapter-title",children:R.title}),Y===R.lessons.length?S.jsx("span",{className:"course-chapter-done","aria-label":"Chapter complete",children:"✓"}):le?null:S.jsx("span",{className:"course-coming-soon","aria-label":"Coming soon",children:"···"})]},R.id)})]},w))})]}),S.jsxs("main",{className:"course-main",id:"course-main",tabIndex:-1,children:[S.jsxs("div",{className:"course-breadcrumb",children:[S.jsx(Ke,{to:"/",children:"Course"}),S.jsx("span",{"aria-hidden":"true",children:"/"}),S.jsx("span",{children:u.part}),S.jsx("span",{"aria-hidden":"true",children:"/"}),S.jsxs("span",{children:["Chapter ",u.number]})]}),S.jsxs("div",{className:"course-chapter-heading",children:[S.jsxs("div",{children:[S.jsxs("p",{className:"course-eyebrow",children:[u.part," · CHAPTER ",String(u.number).padStart(2,"0")]}),S.jsx("h2",{children:u.title}),S.jsx("p",{children:y?`Follow the lessons in order, explore the chapter notes, and practise with the ${u.project} project.`:"This chapter is part of the course roadmap. Learning materials will be published here as the course is developed."})]}),S.jsx("span",{className:`course-published-badge ${y?"is-published":""}`,children:y?"Published":"Coming soon"})]}),S.jsxs("section",{className:"course-video","aria-label":"Lesson video",children:[g.videoId?S.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${encodeURIComponent(g.videoId)}`,title:`${g.title} — React TypeScript Mastery`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}):S.jsxs("div",{className:"course-video-placeholder",children:[S.jsx("span",{className:"course-play-icon","aria-hidden":"true",children:"▶"}),S.jsx("strong",{children:g.title}),S.jsx("p",{children:y?"The video for this lesson will appear here when it is published.":"This chapter’s lesson video and written materials are coming soon."})]}),S.jsxs("div",{className:"course-video-caption",children:[S.jsxs("span",{children:["CH ",String(u.number).padStart(2,"0")," · LESSON"," ",String(d+1).padStart(2,"0")]}),S.jsx("span",{children:"YouTube lesson"})]})]}),S.jsxs("div",{className:"course-current-lesson",children:[S.jsxs("div",{children:[S.jsx("p",{className:"course-eyebrow",children:"CURRENT LESSON"}),S.jsx("h3",{children:g.title})]}),S.jsx("span",{children:g.isProject?"Hands-on project":"Video · Notes · Practice"})]}),S.jsx("p",{className:"course-lesson-description",children:y?`Work through ${g.title.toLowerCase()} with the chapter video and notes. Pause to try each idea in your own code, then use the exercise and interview review to check your understanding.`:"This lesson is on the course roadmap. Its video, notes, and practice materials will be published here."}),S.jsxs("section",{className:"course-materials","aria-label":"Lesson learning materials",children:[S.jsx("div",{className:"course-resource-tabs","aria-label":"Chapter learning materials",children:ki.map(w=>S.jsx("button",{className:"course-resource-tab",type:"button","aria-pressed":v===w.id,disabled:!C,onClick:()=>E(w.id),children:w.label},w.id))}),S.jsx("div",{className:"course-resource-content",id:"course-resource-content",tabIndex:0,"aria-live":"polite",children:_?S.jsx("article",{className:"course-markdown",children:S.jsx(Jl,{remarkPlugins:[sp],components:D,children:_})}):S.jsxs("div",{className:"course-materials-empty",children:[S.jsx("span",{"aria-hidden":"true",children:"✦"}),S.jsx("h3",{children:"Chapter materials are on the way"}),S.jsx("p",{children:"This chapter is in the public learning path. Notes, exercises, and interview questions will appear here as they are published."})]})})]}),S.jsxs("div",{className:"course-lesson-actions",children:[S.jsxs("button",{className:`course-complete-button ${k?"is-complete":""}`,type:"button","aria-pressed":k,disabled:!y,onClick:H,children:[S.jsx("span",{"aria-hidden":"true",children:k?"✓":"○"}),k?"Lesson completed":"Mark lesson complete"]}),S.jsxs("div",{children:[q?S.jsx("button",{className:"course-nav-button",type:"button",onClick:()=>L(q.chapterIndex,q.lessonIndex),children:"← Previous lesson"}):null,b?S.jsx("button",{className:"course-nav-button is-next",type:"button",onClick:()=>L(b.chapterIndex,b.lessonIndex),children:"Next lesson →"}):null]})]})]}),S.jsxs("aside",{className:"course-detail-sidebar","aria-label":"Chapter details",children:[S.jsxs("section",{className:"course-detail-section",children:[S.jsx("p",{className:"course-side-label",children:"CHAPTER CONTENTS"}),S.jsx("h2",{children:"Lessons in this chapter"}),S.jsxs("p",{className:"course-chapter-progress",children:[M," of ",u.lessons.length," complete"]}),S.jsx("div",{className:"course-lesson-list",children:u.lessons.map((w,R)=>{const W=s[`${u.id}:${w.slug}`]===!0;return S.jsxs(Ke,{className:`course-lesson-link ${W?"is-complete":""}`,to:Fn(u,w),"aria-current":w.slug===g.slug?"true":void 0,children:[S.jsx("span",{className:"course-lesson-state","aria-hidden":"true"}),S.jsxs("span",{children:[S.jsx("span",{className:"course-lesson-link-title",children:w.title}),S.jsx("small",{children:w.isProject?"Chapter project":`Lesson ${String(R+1).padStart(2,"0")}`})]})]},w.slug)})})]}),S.jsxs("section",{className:"course-detail-section",children:[S.jsx("p",{className:"course-side-label",children:"PUT IT INTO PRACTICE"}),S.jsxs("div",{className:"course-project-card",children:[S.jsx("span",{children:"CHAPTER PROJECT"}),S.jsx("h3",{children:u.project}),S.jsx("p",{children:y?`Bring this chapter’s ideas together in ${u.project}. Build it in small steps and explain the choices you make.`:"The guided project will be published alongside this chapter’s materials."}),S.jsx("button",{className:"course-project-button",type:"button",disabled:!C,onClick:()=>E("exercises"),children:y?"Open project exercise →":"Project coming soon"})]})]}),S.jsxs("section",{className:"course-detail-section",children:[S.jsx("p",{className:"course-side-label",children:"A SIMPLE STUDY ROUTINE"}),S.jsx("h2",{children:"Make each lesson stick"}),S.jsxs("ol",{className:"course-study-routine",children:[S.jsxs("li",{children:[S.jsx("strong",{children:"Watch with a question"}),S.jsx("span",{children:"Note one thing you want to understand or try."})]}),S.jsxs("li",{children:[S.jsx("strong",{children:"Code alongside"}),S.jsx("span",{children:"Pause, type it yourself, then change one detail."})]}),S.jsxs("li",{children:[S.jsx("strong",{children:"Explain it back"}),S.jsx("span",{children:"Write a short takeaway before moving on."})]})]})]})]})]})]})}export{Pp as default};
