import{j as S,u as ji,a as Ri,b as Di,r as Be,N as Li,L as Qe}from"./index-DOw_HPzt.js";function mr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Fi(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Mi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,zi=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ni={};function vt(e,n){return(Ni.jsx?zi:Mi).test(e)}const _i=/[ \t\n\f\r]/g;function Oi(e){return typeof e=="object"?e.type==="text"?Tt(e.value):!1:Tt(e)}function Tt(e){return e.replace(_i,"")===""}class Ge{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Ge.prototype.normal={};Ge.prototype.property={};Ge.prototype.space=void 0;function gr(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ge(t,r,n)}function zn(e){return e.toLowerCase()}class ie{constructor(n,t){this.attribute=t,this.property=n}}ie.prototype.attribute="";ie.prototype.booleanish=!1;ie.prototype.boolean=!1;ie.prototype.commaOrSpaceSeparated=!1;ie.prototype.commaSeparated=!1;ie.prototype.defined=!1;ie.prototype.mustUseProperty=!1;ie.prototype.number=!1;ie.prototype.overloadedBoolean=!1;ie.prototype.property="";ie.prototype.spaceSeparated=!1;ie.prototype.space=void 0;let Bi=0;const N=Ee(),G=Ee(),Nn=Ee(),I=Ee(),$=Ee(),Te=Ee(),ae=Ee();function Ee(){return 2**++Bi}const _n=Object.freeze(Object.defineProperty({__proto__:null,boolean:N,booleanish:G,commaOrSpaceSeparated:ae,commaSeparated:Te,number:I,overloadedBoolean:Nn,spaceSeparated:$},Symbol.toStringTag,{value:"Module"})),xn=Object.keys(_n);class Yn extends ie{constructor(n,t,r,i){let a=-1;if(super(n,t),It(this,"space",i),typeof r=="number")for(;++a<xn.length;){const o=xn[a];It(this,xn[a],(r&_n[o])===_n[o])}}}Yn.prototype.defined=!0;function It(e,n,t){t&&(e[n]=t)}function Fe(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const a=new Yn(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),n[r]=a,t[zn(r)]=r,t[zn(a.attribute)]=r}return new Ge(n,t,e.space)}const yr=Fe({properties:{ariaActiveDescendant:null,ariaAtomic:G,ariaAutoComplete:null,ariaBusy:G,ariaChecked:G,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:$,ariaCurrent:null,ariaDescribedBy:$,ariaDetails:null,ariaDisabled:G,ariaDropEffect:$,ariaErrorMessage:null,ariaExpanded:G,ariaFlowTo:$,ariaGrabbed:G,ariaHasPopup:null,ariaHidden:G,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:$,ariaLevel:I,ariaLive:null,ariaModal:G,ariaMultiLine:G,ariaMultiSelectable:G,ariaOrientation:null,ariaOwns:$,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:G,ariaReadOnly:G,ariaRelevant:null,ariaRequired:G,ariaRoleDescription:$,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:G,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function xr(e,n){return n in e?e[n]:n}function br(e,n){return xr(e,n.toLowerCase())}const Ui=Fe({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Te,acceptCharset:$,accessKey:$,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alpha:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:$,autoFocus:N,autoPlay:N,blocking:$,capture:null,charSet:null,checked:N,cite:null,className:$,closedBy:null,colorSpace:null,cols:I,colSpan:I,command:null,commandFor:null,content:null,contentEditable:G,controls:N,controlsList:$,coords:I|Te,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:Nn,draggable:G,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:$,height:I,hidden:Nn,high:I,href:null,hrefLang:null,htmlFor:$,httpEquiv:$,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:$,itemRef:$,itemScope:N,itemType:$,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:I,pattern:null,ping:$,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:$,required:N,reversed:N,rows:I,rowSpan:I,sandbox:$,scope:null,scoped:N,seamless:N,selected:N,shadowRootClonable:N,shadowRootCustomElementRegistry:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shadowRootSerializable:N,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:G,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:G,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:$,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:G,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:N,disablePictureInPicture:N,disableRemotePlayback:N,exportParts:Te,part:$,prefix:null,property:null,results:I,security:null,unselectable:null},space:"html",transform:br}),Wi=Fe({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ae,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:$,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Te,g2:Te,glyphName:Te,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:ae,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:$,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ae,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ae,rev:ae,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ae,requiredFeatures:ae,requiredFonts:ae,requiredFormats:ae,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:ae,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ae,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ae,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:xr}),kr=Fe({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),wr=Fe({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:br}),Sr=Fe({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Hi={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},qi=/[A-Z]/g,Et=/-[a-z]/g,Vi=/^data[-\w.:]+$/i;function $i(e,n){const t=zn(n);let r=n,i=ie;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Vi.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(Et,Xi);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!Et.test(a)){let o=a.replace(qi,Ji);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=Yn}return new i(r,n)}function Ji(e){return"-"+e.toLowerCase()}function Xi(e){return e.charAt(1).toUpperCase()}const Gi=gr([yr,Ui,kr,wr,Sr],"html"),Kn=gr([yr,Wi,kr,wr,Sr],"svg");function Yi(e){return e.join(" ").trim()}var De={},bn,Pt;function Ki(){if(Pt)return bn;Pt=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,s=/^\s+|\s+$/g,u=`
`,l="/",p="*",c="",d="comment",h="declaration";function g(v,y){if(typeof v!="string")throw new TypeError("First argument must be a string");if(!v)return[];y=y||{};var E=1,T=1;function R(L){var w=L.match(n);w&&(E+=w.length);var j=L.lastIndexOf(u);T=~j?L.length-j:T+L.length}function F(){var L={line:E,column:T};return function(w){return w.position=new k(L),V(),w}}function k(L){this.start=L,this.end={line:E,column:T},this.source=y.source}k.prototype.content=v;function z(L){var w=new Error(y.source+":"+E+":"+T+": "+L);if(w.reason=L,w.filename=y.source,w.line=E,w.column=T,w.source=v,!y.silent)throw w}function U(L){var w=L.exec(v);if(w){var j=w[0];return R(j),v=v.slice(j.length),w}}function V(){U(t)}function x(L){var w;for(L=L||[];w=A();)w!==!1&&L.push(w);return L}function A(){var L=F();if(!(l!=v.charAt(0)||p!=v.charAt(1))){for(var w=2;c!=v.charAt(w)&&(p!=v.charAt(w)||l!=v.charAt(w+1));)++w;if(w+=2,c===v.charAt(w-1))return z("End of comment missing");var j=v.slice(2,w-2);return T+=2,R(j),v=v.slice(w),T+=2,L({type:d,comment:j})}}function D(){var L=F(),w=U(r);if(w){if(A(),!U(i))return z("property missing ':'");var j=U(a),W=L({type:h,property:C(w[0].replace(e,c)),value:j?C(j[0].replace(e,c)):c});return U(o),W}}function H(){var L=[];x(L);for(var w;w=D();)w!==!1&&(L.push(w),x(L));return L}return V(),H()}function C(v){return v?v.replace(s,c):c}return bn=g,bn}var At;function Qi(){if(At)return De;At=1;var e=De&&De.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(De,"__esModule",{value:!0}),De.default=t;const n=e(Ki());function t(r,i){let a=null;if(!r||typeof r!="string")return a;const o=(0,n.default)(r),s=typeof i=="function";return o.forEach(u=>{if(u.type!=="declaration")return;const{property:l,value:p}=u;s?i(l,p,u):p&&(a=a||{},a[l]=p)}),a}return De}var Ue={},jt;function Zi(){if(jt)return Ue;jt=1,Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,a=function(l){return!l||t.test(l)||e.test(l)},o=function(l,p){return p.toUpperCase()},s=function(l,p){return"".concat(p,"-")},u=function(l,p){return p===void 0&&(p={}),a(l)?l:(l=l.toLowerCase(),p.reactCompat?l=l.replace(i,s):l=l.replace(r,s),l.replace(n,o))};return Ue.camelCase=u,Ue}var We,Rt;function eo(){if(Rt)return We;Rt=1;var e=We&&We.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},n=e(Qi()),t=Zi();function r(i,a){var o={};return!i||typeof i!="string"||(0,n.default)(i,function(s,u){s&&u&&(o[(0,t.camelCase)(s,a)]=u)}),o}return r.default=r,We=r,We}var no=eo();const to=mr(no),Cr=vr("end"),Qn=vr("start");function vr(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function ro(e){const n=Qn(e),t=Cr(e);if(n&&t)return{start:n,end:t}}function Ve(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Dt(e.position):"start"in e||"end"in e?Dt(e):"line"in e||"column"in e?On(e):""}function On(e){return Lt(e&&e.line)+":"+Lt(e&&e.column)}function Dt(e){return On(e&&e.start)+"-"+On(e&&e.end)}function Lt(e){return e&&typeof e=="number"?e:1}class Z extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",a={},o=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?i=n:!a.cause&&n&&(o=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?a.ruleId=r:(a.source=r.slice(0,u),a.ruleId=r.slice(u+1))}if(!a.place&&a.ancestors&&a.ancestors){const u=a.ancestors[a.ancestors.length-1];u&&(a.place=u.position)}const s=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Ve(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Z.prototype.file="";Z.prototype.name="";Z.prototype.reason="";Z.prototype.message="";Z.prototype.stack="";Z.prototype.column=void 0;Z.prototype.line=void 0;Z.prototype.ancestors=void 0;Z.prototype.cause=void 0;Z.prototype.fatal=void 0;Z.prototype.place=void 0;Z.prototype.ruleId=void 0;Z.prototype.source=void 0;const Zn={}.hasOwnProperty,io=new Map,oo=/[A-Z]/g,ao=new Set(["table","tbody","thead","tfoot","tr"]),so=new Set(["td","th"]),Tr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lo(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=yo(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=go(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Kn:Gi,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=Ir(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Ir(e,n,t){if(n.type==="element")return uo(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return co(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return ho(e,n,t);if(n.type==="mdxjsEsm")return po(e,n);if(n.type==="root")return fo(e,n,t);if(n.type==="text")return mo(e,n)}function uo(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Kn,e.schema=i),e.ancestors.push(n);const a=Pr(e,n.tagName,!1),o=xo(e,n);let s=nt(e,n);return ao.has(n.tagName)&&(s=s.filter(function(u){return typeof u=="string"?!Oi(u):!0})),Er(e,o,a,n),et(o,s),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function co(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Xe(e,n.position)}function po(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Xe(e,n.position)}function ho(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Kn,e.schema=i),e.ancestors.push(n);const a=n.name===null?e.Fragment:Pr(e,n.name,!0),o=bo(e,n),s=nt(e,n);return Er(e,o,a,n),et(o,s),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function fo(e,n,t){const r={};return et(r,nt(e,n)),e.create(n,e.Fragment,r,t)}function mo(e,n){return n.value}function Er(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function et(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function go(e,n,t){return r;function r(i,a,o,s){const l=Array.isArray(o.children)?t:n;return s?l(a,o,s):l(a,o)}}function yo(e,n){return t;function t(r,i,a,o){const s=Array.isArray(a.children),u=Qn(r);return n(i,a,o,s,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function xo(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Zn.call(n.properties,i)){const a=ko(e,i,n.properties[i]);if(a){const[o,s]=a;e.tableCellAlignToStyle&&o==="align"&&typeof s=="string"&&so.has(n.tagName)?r=s:t[o]=s}}if(r){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function bo(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const s=o.properties[0];s.type,Object.assign(t,e.evaluater.evaluateExpression(s.argument))}else Xe(e,n.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,a=e.evaluater.evaluateExpression(s.expression)}else Xe(e,n.position);else a=r.value===null?!0:r.value;t[i]=a}return t}function nt(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:io;for(;++r<n.children.length;){const a=n.children[r];let o;if(e.passKeys){const u=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(u){const l=i.get(u)||0;o=u+"-"+l,i.set(u,l+1)}}const s=Ir(e,a,o);s!==void 0&&t.push(s)}return t}function ko(e,n,t){const r=$i(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Fi(t):Yi(t)),r.property==="style"){let i=typeof t=="object"?t:wo(e,String(t));return e.stylePropertyNameCase==="css"&&(i=So(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Hi[r.property]||r.property:r.attribute,t]}}function wo(e,n){try{return to(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Z("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Tr+"#cannot-parse-style-attribute",i}}function Pr(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,o;for(;++a<i.length;){const s=vt(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:s,computed:!!(a&&s.type==="Literal"),optional:!1}:s}r=o}else r=vt(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Zn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xe(e)}function Xe(e,n){const t=new Z("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Tr+"#cannot-handle-mdx-estrees-without-createevaluater",t}function So(e){const n={};let t;for(t in e)Zn.call(e,t)&&(n[Co(t)]=e[t]);return n}function Co(e){let n=e.replace(oo,vo);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function vo(e){return"-"+e.toLowerCase()}const kn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},To={};function tt(e,n){const t=To,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Ar(e,r,i)}function Ar(e,n,t){if(Io(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ft(e.children,n,t)}return Array.isArray(e)?Ft(e,n,t):""}function Ft(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Ar(e[i],n,t);return r.join("")}function Io(e){return!!(e&&typeof e=="object")}const Mt=document.createElement("i");function rt(e){const n="&"+e+";";Mt.innerHTML=n;const t=Mt.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function pe(e,n,t,r){const i=e.length;let a=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);a<r.length;)o=r.slice(a,a+1e4),o.unshift(n,0),e.splice(...o),a+=1e4,n+=1e4}function se(e,n){return e.length>0?(pe(e,e.length,0,n),e):n}const zt={}.hasOwnProperty;function jr(e){const n={};let t=-1;for(;++t<e.length;)Eo(n,e[t]);return n}function Eo(e,n){let t;for(t in n){const i=(zt.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let o;if(a)for(o in a){zt.call(i,o)||(i[o]=[]);const s=a[o];Po(i[o],Array.isArray(s)?s:s?[s]:[])}}}function Po(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);pe(e,0,0,r)}function Rr(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function he(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ee=Se(/[A-Za-z]/),Q=Se(/[\dA-Za-z]/),Ao=Se(/[#-'*+\--9=?A-Z^-~]/);function an(e){return e!==null&&(e<32||e===127)}const Bn=Se(/\d/),jo=Se(/[\dA-Fa-f]/),Ro=Se(/[!-/:-@[-`{-~]/);function M(e){return e!==null&&e<-2}function J(e){return e!==null&&(e<0||e===32)}function B(e){return e===-2||e===-1||e===32}const pn=Se(new RegExp("\\p{P}|\\p{S}","u")),Ie=Se(/\s/);function Se(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Me(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const a=e.charCodeAt(t);let o="";if(a===37&&Q(e.charCodeAt(t+1))&&Q(e.charCodeAt(t+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const s=e.charCodeAt(t+1);a<56320&&s>56319&&s<57344?(o=String.fromCharCode(a,s),i=1):o="�"}else o=String.fromCharCode(a);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function q(e,n,t,r){const i=r?r-1:1/0;let a=0;return o;function o(u){return B(u)?(e.enter(t),s(u)):n(u)}function s(u){return B(u)&&a++<i?(e.consume(u),s):(e.exit(t),n(u))}}function Dr(e,n,t,r,i,a){let o=0;return s;function s(p){return B(p)?(e.enter(r),u(p)):l(p)}function u(p){return B(p)&&o<a?(e.consume(p),o++,u):(e.exit(r),l(p))}function l(p){return o>=i?n(p):t(p)}}const Do={tokenize:Lo};function Lo(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),q(e,n,"linePrefix")}function i(s){return e.enter("paragraph"),a(s)}function a(s){const u=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,o(s)}function o(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return M(s)?(e.consume(s),e.exit("chunkText"),a):(e.consume(s),o)}}let sn=class{constructor(){this.index=new Map,this.map=[]}add(n,t,r){Nt(this,n,t,r,!1)}addBefore(n,t,r){Nt(this,n,t,r,!0)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const a of i)n.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Nt(e,n,t,r,i){if(t===0&&r.length===0)return;const a=e.index.get(n);if(a){a[1]+=t,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}const o=[n,t,r];e.map.push(o),e.index.set(n,o)}const Fo={tokenize:Mo},_t={tokenize:zo};function Mo(e){const n=this,t=[];let r=0,i,a,o;return s;function s(T){if(r<t.length){const R=t[r];return n.containerState=R[1],e.attempt(R[0].continuation,u,l)(T)}return l(T)}function u(T){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&E();const R=n.events.length;let F=R,k;for(;F--;)if(n.events[F][0]==="exit"&&n.events[F][1].type==="chunkFlow"){k=n.events[F][1].end;break}y(r);let z=R;for(;z<n.events.length;)n.events[z][1].end={...k},z++;const U=new sn;return U.add(F+1,0,n.events.slice(R)),U.add(R,z-R,[]),U.consume(n.events),l(T)}return s(T)}function l(T){if(r===t.length){if(!i)return d(T);if(i.currentConstruct&&i.currentConstruct.concrete)return g(T);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(_t,p,c)(T)}function p(T){return i&&E(),y(r),d(T)}function c(T){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,g(T)}function d(T){return n.containerState={},e.attempt(_t,h,g)(T)}function h(T){return r++,t.push([n.currentConstruct,n.containerState]),d(T)}function g(T){if(T===null){i&&E(),y(0),e.consume(T);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),C(T)}function C(T){if(T===null){v(e.exit("chunkFlow"),!0),y(0),e.consume(T);return}return M(T)?(e.consume(T),v(e.exit("chunkFlow")),r=0,n.interrupt=void 0,s):(e.consume(T),C)}function v(T,R){const F=n.sliceStream(T);if(R&&F.push(null),T.previous=a,a&&(a.next=T),a=T,i.defineSkip(T.start),i.write(F),n.parser.lazy[T.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;const z=n.events.length;let U=z,V,x;for(;U--;)if(n.events[U][0]==="exit"&&n.events[U][1].type==="chunkFlow"){if(V){x=n.events[U][1].end;break}V=!0}for(y(r),k=z;k<n.events.length;)n.events[k][1].end={...x},k++;const A=new sn;A.add(U+1,0,n.events.slice(z)),A.add(z,k-z,[]),A.consume(n.events)}}function y(T){let R=t.length;for(;R-- >T;){const F=t[R];n.containerState=F[1],F[0].exit.call(n,e)}t.length=T}function E(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function zo(e,n,t){return q(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ln(e){if(e===null||J(e)||Ie(e))return 1;if(pn(e))return 2}function hn(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(n=a(n,t),r.push(a))}return n}const Un={name:"attention",resolveAll:No,tokenize:_o};function No(e,n){let t=-1,r;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){let i=t;for(;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;const a=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1,o={...e[i][1].end},s={...e[t][1].start};Ot(o,-a),Ot(s,a);const u={type:a>1?"strongSequence":"emphasisSequence",start:o,end:{...e[i][1].end}},l={type:a>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:s},p={type:a>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},c={type:a>1?"strong":"emphasis",start:{...u.start},end:{...l.end}};e[i][1].end={...u.start},e[t][1].start={...l.end},r=[],e[i][1].end.offset-e[i][1].start.offset&&(r=se(r,[["enter",e[i][1],n],["exit",e[i][1],n]])),r=se(r,[["enter",c,n],["enter",u,n],["exit",u,n],["enter",p,n]]),r=se(r,hn(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),r=se(r,[["exit",p,n],["enter",l,n],["exit",l,n],["exit",c,n]]);let d=0;e[t][1].end.offset-e[t][1].start.offset&&(d=2,r=se(r,[["enter",e[t][1],n],["exit",e[t][1],n]])),pe(e,i-1,t-i+3,r),t=i+r.length-d-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function _o(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=ln(r);let a;return o;function o(u){return a=u,e.enter("attentionSequence"),s(u)}function s(u){if(u===a)return e.consume(u),s;const l=e.exit("attentionSequence"),p=ln(u),c=!p||p===2&&i||t.includes(u)&&u!==42&&u!==95,d=!i||i===2&&p||t.includes(r)&&r!==42&&r!==95;return l._open=!!(a===42?c:c&&(i||!d)),l._close=!!(a===42?d:d&&(p||!c)),n(u)}}function Ot(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Oo={name:"autolink",tokenize:Bo};function Bo(e,n,t){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(h){return ee(h)?(e.consume(h),o):h===64?t(h):l(h)}function o(h){return h===43||h===45||h===46||Q(h)?(r=1,s(h)):l(h)}function s(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||Q(h))&&r++<32?(e.consume(h),s):(r=0,l(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):h===null||h===32||h===60||an(h)?t(h):(e.consume(h),u)}function l(h){return h===64?(e.consume(h),p):Ao(h)?(e.consume(h),l):t(h)}function p(h){return Q(h)?c(h):t(h)}function c(h){return h===46?(e.consume(h),r=0,p):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):d(h)}function d(h){if((h===45||Q(h))&&r++<63){const g=h===45?d:c;return e.consume(h),g}return t(h)}}const Ye={partial:!0,tokenize:Uo};function Uo(e,n,t){return r;function r(a){return B(a)?q(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||M(a)?n(a):t(a)}}const Lr={continuation:{tokenize:Ho},exit:qo,name:"blockQuote",tokenize:Wo};function Wo(e,n,t){const r=this;return i;function i(o){if(o===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return t(o)}function a(o){return B(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Ho(e,n,t){const r=this;return i;function i(o){return B(o)?q(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Lr,n,t)(o)}}function qo(e){e.exit("blockQuote")}const Fr={name:"characterEscape",tokenize:Vo};function Vo(e,n,t){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return Ro(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const Mr={name:"characterReference",tokenize:$o};function $o(e,n,t){const r=this;let i=0,a,o;return s;function s(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),u}function u(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),a=31,o=Q,p(c))}function l(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=jo,p):(e.enter("characterReferenceValue"),a=7,o=Bn,p(c))}function p(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return o===Q&&!rt(r.sliceSerialize(d))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(c)&&i++<a?(e.consume(c),p):t(c)}}const Wn={partial:!0,tokenize:Jo};function Jo(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const Bt={concrete:!0,name:"codeFenced",tokenize:Xo};function Xo(e,n,t){const r=this,i={partial:!0,tokenize:F};let a=0,o=0,s;return u;function u(k){return l(k)}function l(k){const z=r.events[r.events.length-1];return a=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,s=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===s?(o++,e.consume(k),p):o<3?t(k):(e.exit("codeFencedFenceSequence"),B(k)?q(e,c,"whitespace")(k):c(k))}function c(k){return k===null||M(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(Wn,C,R)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(k))}function d(k){return k===null||M(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),q(e,h,"whitespace")(k)):k===96&&k===s?t(k):(e.consume(k),d)}function h(k){return k===null||M(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(k))}function g(k){return k===null||M(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===s?t(k):(e.consume(k),g)}function C(k){return e.attempt(i,R,v)(k)}function v(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),y}function y(k){return a>0&&B(k)?q(e,E,"linePrefix",a+1)(k):E(k)}function E(k){return k===null||M(k)?e.check(Wn,C,R)(k):(e.enter("codeFlowValue"),T(k))}function T(k){return k===null||M(k)?(e.exit("codeFlowValue"),E(k)):(e.consume(k),T)}function R(k){return e.exit("codeFenced"),n(k)}function F(k,z,U){let V=0;return x;function x(w){return k.enter("lineEnding"),k.consume(w),k.exit("lineEnding"),A}function A(w){return k.enter("codeFencedFence"),B(w)?q(k,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):D(w)}function D(w){return w===s?(k.enter("codeFencedFenceSequence"),H(w)):U(w)}function H(w){return w===s?(V++,k.consume(w),H):V>=o?(k.exit("codeFencedFenceSequence"),B(w)?q(k,L,"whitespace")(w):L(w)):U(w)}function L(w){return w===null||M(w)?(k.exit("codeFencedFence"),z(w)):U(w)}}}const wn={name:"codeIndented",tokenize:Yo},Go={partial:!0,tokenize:Ko};function Yo(e,n,t){return r;function r(s){return e.enter("codeIndented"),Dr(e,i,t,"linePrefix",4,4)(s)}function i(s){return s===null?o(s):M(s)?e.attempt(Go,i,o)(s):(e.enter("codeFlowValue"),a(s))}function a(s){return s===null||M(s)?(e.exit("codeFlowValue"),i(s)):(e.consume(s),a)}function o(s){return e.exit("codeIndented"),n(s)}}function Ko(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):M(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):Dr(e,n,a,"linePrefix",4,4)(o)}function a(o){return M(o)?i(o):t(o)}}const Qo={name:"codeText",previous:ea,resolve:Zo,tokenize:na};function Zo(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function ea(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function na(e,n,t){let r=0,i,a;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),s(c)}function s(c){return c===96?(e.consume(c),r++,s):(e.exit("codeTextSequence"),u(c))}function u(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),u):c===96?(a=e.enter("codeTextSequence"),i=0,p(c)):M(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),u):(e.enter("codeTextData"),l(c))}function l(c){return c===null||c===32||c===96||M(c)?(e.exit("codeTextData"),u(c)):(e.consume(c),l)}function p(c){return c===96?(e.consume(c),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(a.type="codeTextData",l(c))}}class ta{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&He(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),He(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),He(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);He(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);He(this.left,t.reverse())}}}function He(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function zr(e){const n={};let t=-1,r,i,a,o,s,u,l;const p=new ta(e);for(;++t<p.length;){for(;t in n;)t=n[t];if(r=p.get(t),t&&r[1].type==="chunkFlow"&&p.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,ra(p,t)),t=n[t],l=!0);else if(r[1]._container){for(a=t,i=void 0;a--;)if(o=p.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},s=p.slice(i,t),s.unshift(r),p.splice(i,t-i+1,s))}}return pe(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!l}function ra(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const a=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const s=o.events,u=[],l={};let p,c,d=-1,h=t,g=0,C=0;const v=[C];for(;h;){for(;e.get(++i)[1]!==h;);a.push(i),h._tokenizer||(p=r.sliceStream(h),h.next||p.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(p),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=t;++d<s.length;)s[d][0]==="exit"&&s[d-1][0]==="enter"&&s[d][1].type===s[d-1][1].type&&s[d][1].start.line!==s[d][1].end.line&&(C=d+1,v.push(C),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):v.pop(),d=v.length;d--;){const y=s.slice(v[d],v[d+1]),E=a.pop();u.push([E,E+y.length-1]),e.splice(E,2,y)}for(u.reverse(),d=-1;++d<u.length;)l[g+u[d][0]]=g+u[d][1],g+=u[d][1]-u[d][0]-1;return l}const ia={resolve:aa,tokenize:sa},oa={partial:!0,tokenize:la};function aa(e){return zr(e),e}function sa(e,n){let t;return r;function r(s){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?a(s):M(s)?e.check(oa,o,a)(s):(e.consume(s),i)}function a(s){return e.exit("chunkContent"),e.exit("content"),n(s)}function o(s){return e.consume(s),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function la(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),q(e,a,"linePrefix")}function a(o){if(o===null||M(o))return t(o);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function Nr(e,n,t,r,i,a,o,s,u){const l=u||Number.POSITIVE_INFINITY;let p=0;return c;function c(y){return y===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(y),e.exit(a),d):y===null||y===32||y===41||an(y)?t(y):(e.enter(r),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),C(y))}function d(y){return y===62?(e.enter(a),e.consume(y),e.exit(a),e.exit(i),e.exit(r),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(e.exit("chunkString"),e.exit(s),d(y)):y===null||y===60||M(y)?t(y):(e.consume(y),y===92?g:h)}function g(y){return y===60||y===62||y===92?(e.consume(y),h):h(y)}function C(y){return!p&&(y===null||y===41||J(y))?(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(r),n(y)):p<l&&y===40?(e.consume(y),p++,C):y===41?(e.consume(y),p--,C):y===null||y===32||y===40||an(y)?t(y):(e.consume(y),y===92?v:C)}function v(y){return y===40||y===41||y===92?(e.consume(y),C):C(y)}}function _r(e,n,t,r,i,a){const o=this;let s=0,u;return l;function l(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(a),p}function p(h){return s>999||h===null||h===91||h===93&&!u||h===94&&!s&&"_hiddenFootnoteSupport"in o.parser.constructs?t(h):h===93?(e.exit(a),e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):M(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||M(h)||s++>999?(e.exit("chunkString"),p(h)):(e.consume(h),u||(u=!B(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(e.consume(h),s++,c):c(h)}}function Or(e,n,t,r,i,a){let o;return s;function s(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),o=d===40?41:d,u):t(d)}function u(d){return d===o?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):(e.enter(a),l(d))}function l(d){return d===o?(e.exit(a),u(o)):d===null?t(d):M(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),q(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(d))}function p(d){return d===o||d===null||M(d)?(e.exit("chunkString"),l(d)):(e.consume(d),d===92?c:p)}function c(d){return d===o||d===92?(e.consume(d),p):p(d)}}function $e(e,n){let t;return r;function r(i){return M(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):B(i)?q(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const ua={name:"definition",tokenize:pa},ca={partial:!0,tokenize:ha};function pa(e,n,t){const r=this;let i;return a;function a(h){return e.enter("definition"),o(h)}function o(h){return _r.call(r,e,s,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function s(h){return i=he(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):t(h)}function u(h){return J(h)?$e(e,l)(h):l(h)}function l(h){return Nr(e,p,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function p(h){return e.attempt(ca,c,c)(h)}function c(h){return B(h)?q(e,d,"whitespace")(h):d(h)}function d(h){return h===null||M(h)?(e.exit("definition"),r.parser.defined.push(i),n(h)):t(h)}}function ha(e,n,t){return r;function r(s){return J(s)?$e(e,i)(s):t(s)}function i(s){return Or(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function a(s){return B(s)?q(e,o,"whitespace")(s):o(s)}function o(s){return s===null||M(s)?n(s):t(s)}}const da={name:"hardBreakEscape",tokenize:fa};function fa(e,n,t){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return M(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const ma={name:"headingAtx",resolve:ga,tokenize:ya};function ga(e,n){let t=e.length-2,r=3;if(e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},a={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"};pe(e,r,t-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])}return e}function ya(e,n,t){let r=0;return i;function i(p){return e.enter("atxHeading"),a(p)}function a(p){return e.enter("atxHeadingSequence"),o(p)}function o(p){return p===35&&r++<6?(e.consume(p),o):p===null||J(p)?(e.exit("atxHeadingSequence"),s(p)):t(p)}function s(p){return p===35?(e.enter("atxHeadingSequence"),u(p)):p===null||M(p)?(e.exit("atxHeading"),n(p)):B(p)?q(e,s,"whitespace")(p):(e.enter("atxHeadingText"),l(p))}function u(p){return p===35?(e.consume(p),u):(e.exit("atxHeadingSequence"),s(p))}function l(p){return p===null||p===35||J(p)?(e.exit("atxHeadingText"),s(p)):(e.consume(p),l)}}const xa=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ut=["pre","script","style","textarea"],ba={concrete:!0,name:"htmlFlow",resolveTo:wa,tokenize:Sa},ka={partial:!0,tokenize:Ca};function wa(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function Sa(e,n,t){const r=this;let i,a,o,s,u;return l;function l(m){return p(m)}function p(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),c}function c(m){return m===33?(e.consume(m),d):m===47?(e.consume(m),a=!0,C):m===63?(e.consume(m),i=3,r.interrupt?n:f):ee(m)?(e.consume(m),o=String.fromCharCode(m),v):t(m)}function d(m){return m===45?(e.consume(m),i=2,h):m===91?(e.consume(m),i=5,s=0,g):ee(m)?(e.consume(m),i=4,r.interrupt?n:f):t(m)}function h(m){return m===45?(e.consume(m),r.interrupt?n:f):t(m)}function g(m){const ce="CDATA[";return m===ce.charCodeAt(s++)?(e.consume(m),s===ce.length?r.interrupt?n:D:g):t(m)}function C(m){return ee(m)?(e.consume(m),o=String.fromCharCode(m),v):t(m)}function v(m){if(m===null||m===47||m===62||J(m)){const ce=m===47,Pe=o.toLowerCase();return!ce&&!a&&Ut.includes(Pe)?(i=1,r.interrupt?n(m):D(m)):xa.includes(o.toLowerCase())?(i=6,ce?(e.consume(m),y):r.interrupt?n(m):D(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(m):a?E(m):T(m))}return m===45||Q(m)?(e.consume(m),o+=String.fromCharCode(m),v):t(m)}function y(m){return m===62?(e.consume(m),r.interrupt?n:D):t(m)}function E(m){return B(m)?(e.consume(m),E):x(m)}function T(m){return m===47?(e.consume(m),x):m===58||m===95||ee(m)?(e.consume(m),R):B(m)?(e.consume(m),T):x(m)}function R(m){return m===45||m===46||m===58||m===95||Q(m)?(e.consume(m),R):F(m)}function F(m){return m===61?(e.consume(m),k):B(m)?(e.consume(m),F):T(m)}function k(m){return m===null||m===60||m===61||m===62||m===96?t(m):m===34||m===39?(e.consume(m),u=m,z):B(m)?(e.consume(m),k):U(m)}function z(m){return m===u?(e.consume(m),u=null,V):m===null||M(m)?t(m):(e.consume(m),z)}function U(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||J(m)?F(m):(e.consume(m),U)}function V(m){return m===47||m===62||B(m)?T(m):t(m)}function x(m){return m===62?(e.consume(m),A):t(m)}function A(m){return m===null||M(m)?D(m):B(m)?(e.consume(m),A):t(m)}function D(m){return m===45&&i===2?(e.consume(m),j):m===60&&i===1?(e.consume(m),W):m===62&&i===4?(e.consume(m),ue):m===63&&i===3?(e.consume(m),f):m===93&&i===5?(e.consume(m),le):M(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(ka,ge,H)(m)):m===null||M(m)?(e.exit("htmlFlowData"),H(m)):(e.consume(m),D)}function H(m){return e.check(Wn,L,ge)(m)}function L(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),w}function w(m){return m===null||M(m)?H(m):(e.enter("htmlFlowData"),D(m))}function j(m){return m===45?(e.consume(m),f):D(m)}function W(m){return m===47?(e.consume(m),o="",K):D(m)}function K(m){if(m===62){const ce=o.toLowerCase();return Ut.includes(ce)?(e.consume(m),ue):D(m)}return ee(m)&&o.length<8?(e.consume(m),o+=String.fromCharCode(m),K):D(m)}function le(m){return m===93?(e.consume(m),f):D(m)}function f(m){return m===62?(e.consume(m),ue):m===45&&i===2?(e.consume(m),f):D(m)}function ue(m){return m===null||M(m)?(e.exit("htmlFlowData"),ge(m)):(e.consume(m),ue)}function ge(m){return e.exit("htmlFlow"),n(m)}}function Ca(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ye,n,t)}}const va={name:"htmlText",tokenize:Ta};function Ta(e,n,t){const r=this;let i,a,o;return s;function s(f){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(f),u}function u(f){return f===33?(e.consume(f),l):f===47?(e.consume(f),F):f===63?(e.consume(f),T):ee(f)?(e.consume(f),U):t(f)}function l(f){return f===45?(e.consume(f),p):f===91?(e.consume(f),a=0,g):ee(f)?(e.consume(f),E):t(f)}function p(f){return f===45?(e.consume(f),h):t(f)}function c(f){return f===null?t(f):f===45?(e.consume(f),d):M(f)?(o=c,W(f)):(e.consume(f),c)}function d(f){return f===45?(e.consume(f),h):c(f)}function h(f){return f===62?j(f):f===45?d(f):c(f)}function g(f){const ue="CDATA[";return f===ue.charCodeAt(a++)?(e.consume(f),a===ue.length?C:g):t(f)}function C(f){return f===null?t(f):f===93?(e.consume(f),v):M(f)?(o=C,W(f)):(e.consume(f),C)}function v(f){return f===93?(e.consume(f),y):C(f)}function y(f){return f===62?j(f):f===93?(e.consume(f),y):C(f)}function E(f){return f===null||f===62?j(f):M(f)?(o=E,W(f)):(e.consume(f),E)}function T(f){return f===null?t(f):f===63?(e.consume(f),R):M(f)?(o=T,W(f)):(e.consume(f),T)}function R(f){return f===62?j(f):T(f)}function F(f){return ee(f)?(e.consume(f),k):t(f)}function k(f){return f===45||Q(f)?(e.consume(f),k):z(f)}function z(f){return M(f)?(o=z,W(f)):B(f)?(e.consume(f),z):j(f)}function U(f){return f===45||Q(f)?(e.consume(f),U):f===47||f===62||J(f)?V(f):t(f)}function V(f){return f===47?(e.consume(f),j):f===58||f===95||ee(f)?(e.consume(f),x):M(f)?(o=V,W(f)):B(f)?(e.consume(f),V):j(f)}function x(f){return f===45||f===46||f===58||f===95||Q(f)?(e.consume(f),x):A(f)}function A(f){return f===61?(e.consume(f),D):M(f)?(o=A,W(f)):B(f)?(e.consume(f),A):V(f)}function D(f){return f===null||f===60||f===61||f===62||f===96?t(f):f===34||f===39?(e.consume(f),i=f,H):M(f)?(o=D,W(f)):B(f)?(e.consume(f),D):(e.consume(f),L)}function H(f){return f===i?(e.consume(f),i=void 0,w):f===null?t(f):M(f)?(o=H,W(f)):(e.consume(f),H)}function L(f){return f===null||f===34||f===39||f===60||f===61||f===96?t(f):f===47||f===62||J(f)?V(f):(e.consume(f),L)}function w(f){return f===47||f===62||J(f)?V(f):t(f)}function j(f){return f===62?(e.consume(f),e.exit("htmlTextData"),e.exit("htmlText"),n):t(f)}function W(f){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),K}function K(f){return B(f)?q(e,le,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):le(f)}function le(f){return e.enter("htmlTextData"),o(f)}}const it={name:"labelEnd",resolveAll:Aa,resolveTo:ja,tokenize:Ra},Ia={tokenize:Da},Ea={tokenize:La},Pa={tokenize:Fa};function Aa(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&pe(e,0,e.length,t),e}function ja(e,n){let t=e.length,r=0,i,a,o;for(;t--;){const p=e[t][1];if(i){if(p.type==="link"||p.type==="labelLink"&&p._inactive)break;e[t][0]==="enter"&&p.type==="labelLink"&&(p._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(p.type==="labelImage"||p.type==="labelLink")&&!p._balanced&&(i=t,p.type!=="labelLink")){r=2;break}}else p.type==="labelEnd"&&(a=t)}const s={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[i][1].start},end:{...e[a][1].end}},l={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[a-2][1].start}};return o=[["enter",s,n],["enter",u,n]],o=se(o,e.slice(i+1,i+r+3)),o=se(o,[["enter",l,n]]),o=se(o,hn(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),o=se(o,[["exit",l,n],e[a-2],e[a-1],["exit",u,n]]),o=se(o,e.slice(a+1)),o=se(o,[["exit",s,n]]),pe(e,i,e.length,o),e}function Ra(e,n,t){const r=this,i=r._labelStarts;let a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return s;function s(d){return a?a._inactive?c(d):(o=r.parser.defined.includes(he(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),u):t(d)}function u(d){return d===40?e.attempt(Ia,p,o?p:c)(d):d===91?e.attempt(Ea,p,o?l:c)(d):o?p(d):c(d)}function l(d){return e.attempt(Pa,p,c)(d)}function p(d){return i.pop(),n(d)}function c(d){return a._balanced=!0,t(d)}}function Da(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return J(c)?$e(e,a)(c):a(c)}function a(c){return c===41?p(c):Nr(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return J(c)?$e(e,u)(c):p(c)}function s(c){return t(c)}function u(c){return c===34||c===39||c===40?Or(e,l,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):p(c)}function l(c){return J(c)?$e(e,p)(c):p(c)}function p(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function La(e,n,t){const r=this;return i;function i(s){return _r.call(r,e,a,o,"reference","referenceMarker","referenceString")(s)}function a(s){return r.parser.defined.includes(he(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(s):t(s)}function o(s){return t(s)}}function Fa(e,n,t){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const Ma={name:"labelStartImage",resolveAll:it.resolveAll,tokenize:za};function za(e,n,t){const r=this;let i;return a;function a(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),o}function o(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),i=e.exit("labelImage"),s):t(u)}function s(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(u))}}const Na={name:"labelStartLink",resolveAll:it.resolveAll,tokenize:_a};function _a(e,n,t){const r=this;let i;return a;function a(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),i=e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(s))}}const Sn={name:"lineEnding",tokenize:Oa};function Oa(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),q(e,n,"linePrefix")}}const rn={name:"thematicBreak",tokenize:Ba};function Ba(e,n,t){let r=0,i;return a;function a(l){return e.enter("thematicBreak"),o(l)}function o(l){return i=l,s(l)}function s(l){return l===i?(e.enter("thematicBreakSequence"),u(l)):r>=3&&(l===null||M(l))?(e.exit("thematicBreak"),n(l)):t(l)}function u(l){return l===i?(e.consume(l),r++,u):(e.exit("thematicBreakSequence"),B(l)?q(e,s,"whitespace")(l):s(l))}}const re={continuation:{tokenize:qa},exit:$a,name:"list",tokenize:Ha},Ua={partial:!0,tokenize:Ja},Wa={partial:!0,tokenize:Va};function Ha(e,n,t){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Bn(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(rn,t,l)(h):l(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return t(h)}function u(h){return Bn(h)&&++o<10?(e.consume(h),u):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),l(h)):t(h)}function l(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Ye,r.interrupt?t:p,e.attempt(Ua,d,c))}function p(h){return r.containerState.initialBlankLine=!0,a++,d(h)}function c(h){return B(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),d):t(h)}function d(h){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(h)}}function qa(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Ye,i,a);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,q(e,n,"listItemIndent",r.containerState.size+1)(s)}function a(s){return r.containerState.furtherBlankLines||!B(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Wa,n,o)(s))}function o(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,q(e,e.attempt(re,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function Va(e,n,t){const r=this;return q(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(a):t(a)}}function $a(e){e.exit(this.containerState.type)}function Ja(e,n,t){const r=this;return q(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!B(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const Wt={name:"setextUnderline",resolveTo:Xa,tokenize:Ga};function Xa(e,n){const t=new sn;let r=e.length,i,a,o;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(a=r)}else e[r][1].type==="content"&&t.add(r,1,[]),!o&&e[r][1].type==="definition"&&(o=r);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",o?(t.add(a,0,[["enter",s,n]]),t.add(o+1,0,[["exit",e[i][1],n]]),e[i][1].end={...e[o][1].end}):e[i][1]=s,t.add(e.length,0,[["exit",s,n]]),t.consume(e),e}function Ga(e,n,t){const r=this;let i;return a;function a(l){let p=r.events.length,c;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){c=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=l,o(l)):t(l)}function o(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===i?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),B(l)?q(e,u,"lineSuffix")(l):u(l))}function u(l){return l===null||M(l)?(e.exit("setextHeadingLine"),n(l)):t(l)}}const Ya={tokenize:Ka};function Ka(e){const n=this,t=e.attempt(Ye,r,e.attempt(this.parser.constructs.flowInitial,i,q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ia,i)),"linePrefix")));return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Qa={resolveAll:Ur()},Za=Br("string"),es=Br("text");function Br(e){return{resolveAll:Ur(e==="text"?ns:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],a=t.attempt(i,o,s);return o;function o(p){return l(p)?a(p):s(p)}function s(p){if(p===null){t.consume(p);return}return t.enter("data"),t.consume(p),u}function u(p){return l(p)?(t.exit("data"),a(p)):(t.consume(p),u)}function l(p){if(p===null)return!0;const c=i[p];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Ur(e){return n;function n(t,r){let i=-1,a;for(;++i<=t.length;)a===void 0?t[i]&&t[i][1].type==="data"&&(a=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==a+2&&(t[a][1].end=t[i-1][1].end,t.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(t,r):t}}function ns(e,n){const t=new sn;let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],a=n.sliceStream(i);let o=a.length,s=-1,u=0,l;for(;o--;){const p=a[o];if(typeof p=="string"){for(s=p.length;p.charCodeAt(s-1)===32;)u++,s--;if(s)break;s=-1}else if(p===-2)l=!0,u++;else if(p!==-1){o++;break}}if(n._contentTypeTextTrailing&&r===e.length&&(u=0),u){const p={type:r===e.length||l||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-u,offset:i.end.offset-u},end:{...i.end}};i.end={...p.start},i.start.offset===i.end.offset?Object.assign(i,p):t.add(r,0,[["enter",p,n],["exit",p,n]])}r++}return t.consume(e),e}const ts={42:re,43:re,45:re,48:re,49:re,50:re,51:re,52:re,53:re,54:re,55:re,56:re,57:re,62:Lr},rs={91:ua},is={[-2]:wn,[-1]:wn,32:wn},os={35:ma,42:rn,45:[Wt,rn],60:ba,61:Wt,95:rn,96:Bt,126:Bt},as={38:Mr,92:Fr},ss={[-5]:Sn,[-4]:Sn,[-3]:Sn,33:Ma,38:Mr,42:Un,60:[Oo,va],91:Na,92:[da,Fr],93:it,95:Un,96:Qo},ls={null:[Un,Qa]},us={null:[42,95]},cs={null:[]},ps=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:us,contentInitial:rs,disable:cs,document:ts,flow:os,flowInitial:is,insideSpan:ls,string:as,text:ss},Symbol.toStringTag,{value:"Module"}));function hs(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},a=[];let o=[],s=[];const u={attempt:z(F),check:z(k),consume:E,enter:T,exit:R,interrupt:z(k,{interrupt:!0})},l={code:null,containerState:{},defineSkip:C,events:[],now:g,parser:e,previous:null,sliceSerialize:d,sliceStream:h,write:c};let p=n.tokenize.call(l,u);return n.resolveAll&&a.push(n),l;function c(A){return o=se(o,A),v(),o[o.length-1]!==null?[]:(U(n,0),l.events=hn(a,l.events,l),l.events)}function d(A,D){return fs(h(A),D)}function h(A){return ds(o,A)}function g(){const{_bufferIndex:A,_index:D,line:H,column:L,offset:w}=r;return{_bufferIndex:A,_index:D,line:H,column:L,offset:w}}function C(A){i[A.line]=A.column,x()}function v(){for(;r._index<o.length;){const A=o[r._index];if(typeof A=="string"){const D=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<A.length;)y(A.charCodeAt(r._bufferIndex))}else y(A)}}function y(A){p=p(A)}function E(A){M(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,x()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=A}function T(A,D){const H=D||{};return H.type=A,H.start=g(),l.events.push(["enter",H,l]),s.push(H),H}function R(A){const D=s.pop();return D.end=g(),l.events.push(["exit",D,l]),D}function F(A,D){U(A,D.from)}function k(A,D){D.restore()}function z(A,D){return H;function H(L,w,j){let W,K,le,f;return Array.isArray(L)?ge(L):"tokenize"in L?ge([L]):ue(L);function ue(Y){return ze;function ze(ke){const Ae=ke!==null&&Y[ke],je=ke!==null&&Y.null,gn=[...Array.isArray(Ae)?Ae:Ae?[Ae]:[],...Array.isArray(je)?je:je?[je]:[]];return ge(gn)(ke)}}function ge(Y){return W=Y,K=0,Y.length===0?j:m(Y[K])}function m(Y){return ze;function ze(ke){return f=V(),le=Y,Y.partial||(l.currentConstruct=Y),Y.name&&l.parser.constructs.disable.null.includes(Y.name)?Pe():Y.tokenize.call(D?Object.assign(Object.create(l),D):l,u,ce,Pe)(ke)}}function ce(Y){return A(le,f),w}function Pe(Y){return f.restore(),++K<W.length?m(W[K]):j}}}function U(A,D){A.resolveAll&&!a.includes(A)&&a.push(A),A.resolve&&pe(l.events,D,l.events.length-D,A.resolve(l.events.slice(D),l)),A.resolveTo&&(l.events=A.resolveTo(l.events,l))}function V(){const A=g(),D=l.previous,H=l.currentConstruct,L=l.events.length,w=Array.from(s);return{from:L,restore:j};function j(){r=A,l.previous=D,l.currentConstruct=H,l.events.length=L,s=w,x()}}function x(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ds(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,a)];else{if(o=e.slice(t,i),r>-1){const s=o[0];typeof s=="string"?o[0]=s.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function fs(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const a=e[t];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function ms(e){const r={constructs:jr([ps,...(e||{}).extensions||[]]),content:i(Do),defined:[],document:i(Fo),flow:i(Ya),lazy:{},string:i(Za),text:i(es)};return r;function i(a){return o;function o(s){return hs(r,a,s)}}}function gs(e){for(;!zr(e););return e}const Ht=/[\0\t\n\r]/g;function ys(){let e=1,n="",t=!0,r;return i;function i(a,o,s){a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a));const u=[];let l=0;for(n="",t&&(a.charCodeAt(0)===65279&&l++,t=void 0);l<a.length;){Ht.lastIndex=l;const p=Ht.exec(a),c=p&&p.index!==void 0?p.index:a.length,d=a.charCodeAt(c);if(!p){n=a.slice(l);break}if(d===10&&l===c&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),l<c&&(u.push(a.slice(l,c)),e+=c-l),d){case 0:{u.push(65533),e++;break}case 9:{const h=Math.ceil(e/4)*4;for(u.push(-2);e++<h;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}l=c+1}return s&&(r&&u.push(-5),n&&u.push(n),u.push(null)),u}}const xs=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function bs(e){return e.replace(xs,ks)}function ks(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),a=i===120||i===88;return Rr(t.slice(a?2:1),a?16:10)}return rt(t)||e}const Wr={}.hasOwnProperty;function ws(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),Ss(t)(gs(ms(t).document().write(ys()(e,n,!0))))}function Ss(e){const n={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(wt),autolinkProtocol:x,autolinkEmail:x,atxHeading:o(xt),blockQuote:o(gn),characterEscape:x,characterReference:x,codeFenced:o(yt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(yt,s),codeText:o(wi,s),codeTextData:x,data:x,codeFlowValue:x,definition:o(Si),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Ci),hardBreakEscape:o(bt),hardBreakTrailing:o(bt),htmlFlow:o(kt,s),htmlFlowData:x,htmlText:o(kt,s),htmlTextData:x,image:o(vi),label:s,link:o(wt),listItem:o(Ti),listItemValue:h,listOrdered:o(St,d),listUnordered:o(St),paragraph:o(Ii),reference:ce,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(xt),strong:o(Ei),thematicBreak:o(Ai)},exit:{atxHeading:l(),atxHeadingSequence:k,autolink:l(),autolinkEmail:je,autolinkProtocol:Ae,blockQuote:l(),characterEscapeValue:A,characterReferenceMarkerHexadecimal:Y,characterReferenceMarkerNumeric:Y,characterReferenceValue:ze,characterReference:ke,codeFenced:l(y),codeFencedFence:v,codeFencedFenceInfo:g,codeFencedFenceMeta:C,codeFlowValue:A,codeIndented:l(E),codeText:l(j),codeTextData:A,data:A,definition:l(),definitionDestinationString:F,definitionLabelString:T,definitionTitleString:R,emphasis:l(),hardBreakEscape:l(H),hardBreakTrailing:l(H),htmlFlow:l(L),htmlFlowData:A,htmlText:l(w),htmlTextData:A,image:l(K),label:f,labelText:le,lineEnding:D,link:l(W),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Pe,resourceDestinationString:ue,resourceTitleString:ge,resource:m,setextHeading:l(V),setextHeadingLineSequence:U,setextHeadingText:z,strong:l(),thematicBreak:l()}};Hr(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(b){let P={type:"root",children:[],position:void 0};const _={stack:[P],tokenStack:[],config:n,enter:u,exit:p,buffer:s,resume:c,data:t},O=[],ne=[];let X=-1;for(;++X<b.length;)if(ne.push(b[X]),b[X][1].type==="listOrdered"||b[X][1].type==="listUnordered")if(b[X][0]==="enter")O.push(ne.length-1);else{const te=O.pop();a(ne,te)}for(b=ne,X=-1;++X<b.length;){const te=n[b[X][0]];b[X][0]==="enter"&&n.beforeEnter.length>0&&i(n.beforeEnter,{..._,sliceSerialize:b[X][2].sliceSerialize},b[X][1]),Wr.call(te,b[X][1].type)&&te[b[X][1].type].call({..._,sliceSerialize:b[X][2].sliceSerialize},b[X][1]),b[X][0]==="exit"&&n.afterExit.length>0&&i(n.afterExit,{..._,sliceSerialize:b[X][2].sliceSerialize},b[X][1])}if(_.tokenStack.length>0){const te=_.tokenStack[_.tokenStack.length-1];(te[1]||qt).call(_,void 0,te[0])}for(P.position={start:we(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:we(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},X=-1;++X<n.transforms.length;)P=n.transforms[X](P)||P;return P}function i(b,P,_){let O=-1;for(;++O<b.length;)b[O].call(P,_)}function a(b,P){const _=b.length-1;let O=P-1,ne=-1,X=!1,te,de,Ne,_e;const Oe=[];for(;++O<=_;){const oe=b[O];switch(oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{oe[0]==="enter"?ne++:ne--,_e=void 0;break}case"lineEndingBlank":{oe[0]==="enter"&&(te&&!_e&&!ne&&!Ne&&(Ne=O),_e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_e=void 0}if(!ne&&oe[0]==="enter"&&oe[1].type==="listItemPrefix"||ne===-1&&oe[0]==="exit"&&(oe[1].type==="listUnordered"||oe[1].type==="listOrdered")){if(te){let Re=O;for(de=void 0;Re--;){const ye=b[Re];if(ye[1].type==="lineEnding"||ye[1].type==="lineEndingBlank"){if(ye[0]==="exit")continue;de&&(b[de][1].type="lineEndingBlank",X=!0),ye[1].type="lineEnding",de=Re}else if(!(ye[1].type==="linePrefix"||ye[1].type==="blockQuotePrefix"||ye[1].type==="blockQuotePrefixWhitespace"||ye[1].type==="blockQuoteMarker"||ye[1].type==="listItemIndent"))break}Ne&&(!de||Ne<de)&&(te._spread=!0),te.end=Object.assign({},de?b[de][1].start:oe[1].end),Oe.push({at:de||O,event:["exit",te,oe[2]]})}if(oe[1].type==="listItemPrefix"){const Re={type:"listItem",_spread:!1,start:Object.assign({},oe[1].start),end:void 0};te=Re,Oe.push({at:O,event:["enter",Re,oe[2]]}),Ne=void 0,_e=!0}}}const Ct=b.splice(P);let yn=0;for(O=-1;++O<Ct.length;){for(;yn<Oe.length&&Oe[yn].at===P+O;)b.push(Oe[yn++].event);b.push(Ct[O])}b[P][1]._spread=X}function o(b,P){return _;function _(O){u.call(this,b(O),O),P&&P.call(this,O)}}function s(){this.stack.push({type:"fragment",children:[]})}function u(b,P,_){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([P,_||void 0]),b.position={start:we(P.start),end:void 0}}function l(b){return P;function P(_){b&&b.call(this,_),p.call(this,_)}}function p(b,P){const _=this.stack.pop(),O=this.tokenStack.pop();if(!O)throw new Error("Cannot close `"+b.type+"` ("+Ve({start:b.start,end:b.end})+"): it’s not open");O[0].type!==b.type&&(P?P.call(this,b,O[0]):(O[1]||qt).call(this,b,O[0])),_.position.end=we(b.end)}function c(){return tt(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(b){if(this.data.expectingFirstListItemValue){const P=this.stack[this.stack.length-2];P.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function g(){const b=this.resume(),P=this.stack[this.stack.length-1];P.lang=b}function C(){const b=this.resume(),P=this.stack[this.stack.length-1];P.meta=b}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function y(){const b=this.resume(),P=this.stack[this.stack.length-1];P.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function E(){const b=this.resume(),P=this.stack[this.stack.length-1];P.value=b.replace(/(\r?\n|\r)$/g,"")}function T(b){const P=this.resume(),_=this.stack[this.stack.length-1];_.label=P,_.identifier=he(this.sliceSerialize(b)).toLowerCase()}function R(){const b=this.resume(),P=this.stack[this.stack.length-1];P.title=b}function F(){const b=this.resume(),P=this.stack[this.stack.length-1];P.url=b}function k(b){const P=this.stack[this.stack.length-1];if(!P.depth){const _=this.sliceSerialize(b).length;P.depth=_}}function z(){this.data.setextHeadingSlurpLineEnding=!0}function U(b){const P=this.stack[this.stack.length-1];P.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function V(){this.data.setextHeadingSlurpLineEnding=void 0}function x(b){const _=this.stack[this.stack.length-1].children;let O=_[_.length-1];(!O||O.type!=="text")&&(O=Pi(),O.position={start:we(b.start),end:void 0},_.push(O)),this.stack.push(O)}function A(b){const P=this.stack.pop();P.value+=this.sliceSerialize(b),P.position.end=we(b.end)}function D(b){const P=this.stack[this.stack.length-1];if(this.data.atHardBreak){const _=P.children[P.children.length-1];_.position.end=we(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(P.type)&&(x.call(this,b),A.call(this,b))}function H(){this.data.atHardBreak=!0}function L(){const b=this.resume(),P=this.stack[this.stack.length-1];P.value=b}function w(){const b=this.resume(),P=this.stack[this.stack.length-1];P.value=b}function j(){const b=this.resume(),P=this.stack[this.stack.length-1];P.value=b}function W(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=P,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function K(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=P,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function le(b){const P=this.sliceSerialize(b),_=this.stack[this.stack.length-2];_.label=bs(P),_.identifier=he(P).toLowerCase()}function f(){const b=this.stack[this.stack.length-1],P=this.resume(),_=this.stack[this.stack.length-1];if(this.data.inReference=!0,_.type==="link"){const O=b.children;_.children=O}else _.alt=P}function ue(){const b=this.resume(),P=this.stack[this.stack.length-1];P.url=b}function ge(){const b=this.resume(),P=this.stack[this.stack.length-1];P.title=b}function m(){this.data.inReference=void 0}function ce(){this.data.referenceType="collapsed"}function Pe(b){const P=this.resume(),_=this.stack[this.stack.length-1];_.label=P,_.identifier=he(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function Y(b){this.data.characterReferenceType=b.type}function ze(b){const P=this.sliceSerialize(b),_=this.data.characterReferenceType;let O;_?(O=Rr(P,_==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):O=rt(P);const ne=this.stack[this.stack.length-1];ne.value+=O}function ke(b){const P=this.stack.pop();P.position.end=we(b.end)}function Ae(b){A.call(this,b);const P=this.stack[this.stack.length-1];P.url=this.sliceSerialize(b)}function je(b){A.call(this,b);const P=this.stack[this.stack.length-1];P.url="mailto:"+this.sliceSerialize(b)}function gn(){return{type:"blockquote",children:[],position:void 0}}function yt(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function wi(){return{type:"inlineCode",value:"",position:void 0}}function Si(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Ci(){return{type:"emphasis",children:[],position:void 0}}function xt(){return{type:"heading",depth:0,children:[],position:void 0}}function bt(){return{type:"break",position:void 0}}function kt(){return{type:"html",value:"",position:void 0}}function vi(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function wt(){return{type:"link",title:null,url:"",children:[],position:void 0}}function St(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[],position:void 0}}function Ti(b){return{type:"listItem",spread:b._spread,checked:null,children:[],position:void 0}}function Ii(){return{type:"paragraph",children:[],position:void 0}}function Ei(){return{type:"strong",children:[],position:void 0}}function Pi(){return{type:"text",value:"",position:void 0}}function Ai(){return{type:"thematicBreak",position:void 0}}}function we(e){return{line:e.line,column:e.column,offset:e.offset}}function Hr(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Hr(e,r):Cs(e,r)}}function Cs(e,n){let t;for(t in n)if(Wr.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=n[t];r&&e[t].push(r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function qt(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Ve({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Ve({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Ve({start:n.start,end:n.end})+") is still open")}function vs(e){const n=this;n.parser=t;function t(r){return ws(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Ts(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Is(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function Es(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(a.data={meta:n.meta}),e.patch(n,a),a=e.applyData(n,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(n,a),a}function Ps(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function As(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function js(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Me(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);const u={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,u);const l={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(n,l),e.applyData(n,l)}function Rs(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ds(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function qr(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Ls(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return qr(e,n);const i={src:Me(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function Fs(e,n){const t={src:Me(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Ms(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function zs(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return qr(e,n);const i={href:Me(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Ns(e,n){const t={href:Me(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function _s(e,n,t){const r=e.all(n),i=t?Os(t):Vr(n),a={},o=[];if(typeof n.checked=="boolean"){const p=r[0];let c;p&&p.type==="element"&&p.tagName==="p"?c=p:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const p=r[s];(i||s!==0||p.type!=="element"||p.tagName!=="p")&&o.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?o.push(...p.children):o.push(p)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:a,children:o};return e.patch(n,l),e.applyData(n,l)}function Os(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=Vr(t[r])}return n}function Vr(e){const n=e.spread;return n??e.children.length>1}function Bs(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function Us(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ws(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Hs(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function qs(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},s=Qn(n.children[1]),u=Cr(n.children[n.children.length-1]);s&&u&&(o.position={start:s,end:u}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function Vs(e,n,t){const r=t?t.children:void 0,a=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,s=o?o.length:n.children.length;let u=-1;const l=[];for(;++u<s;){const c=n.children[u],d={},h=o?o[u]:void 0;h&&(d.align=h);let g={type:"element",tagName:a,properties:d,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),l.push(g)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(n,p),e.applyData(n,p)}function $s(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Vt=9,$t=32;function Js(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const a=[];for(;r;)a.push(Jt(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return a.push(Jt(n.slice(i),i>0,!1)),a.join("")}function Jt(e,n,t){let r=0,i=e.length;if(n){let a=e.codePointAt(r);for(;a===Vt||a===$t;)r++,a=e.codePointAt(r)}if(t){let a=e.codePointAt(i-1);for(;a===Vt||a===$t;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Xs(e,n){const t={type:"text",value:Js(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Gs(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Ys={blockquote:Ts,break:Is,code:Es,delete:Ps,emphasis:As,footnoteReference:js,heading:Rs,html:Ds,imageReference:Ls,image:Fs,inlineCode:Ms,linkReference:zs,link:Ns,listItem:_s,list:Bs,paragraph:Us,root:Ws,strong:Hs,table:qs,tableCell:$s,tableRow:Vs,text:Xs,thematicBreak:Gs,toml:Ze,yaml:Ze,definition:Ze,footnoteDefinition:Ze};function Ze(){}const $r=-1,dn=0,Je=1,un=2,ot=3,at=4,st=5,lt=6,Jr=7,Xr=8,{defineProperty:Ks}=Object,Gr=typeof self=="object"?self:globalThis,Xt=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Gr[e](n)},Qs=(e,n)=>{const t=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=n[i];switch(a){case dn:case $r:return t(o,i);case Je:{const s=t([],i);for(const u of o)s.push(r(u));return s}case un:{const s=t({},i);for(const[u,l]of o){const p=r(u),c=r(l);p==="__proto__"?Ks(s,p,{value:c,configurable:!0,enumerable:!0,writable:!0}):s[p]=c}return s}case ot:return t(new Date(o),i);case at:{const{source:s,flags:u}=o;return t(new RegExp(s,u),i)}case st:{const s=t(new Map,i);for(const[u,l]of o)s.set(r(u),r(l));return s}case lt:{const s=t(new Set,i);for(const u of o)s.add(r(u));return s}case Jr:{const{name:s,message:u}=o;return t(typeof Gr[s]=="function"?Xt(s,u):new Error(u),i)}case Xr:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:s}=new Uint8Array(o);return t(new DataView(s),o)}case"-0":return-0}return t(Xt(a,o),i)};return r},Gt=e=>Qs(new Map,e)(0),ve="",{toString:Zs}={},{keys:el,is:nl}=Object,qe=e=>{const n=typeof e;if(n!=="object"||!e)return[dn,n];const t=Zs.call(e).slice(8,-1);switch(t){case"Array":return[Je,ve];case"Object":return[un,ve];case"Date":return[ot,ve];case"RegExp":return[at,ve];case"Map":return[st,ve];case"Set":return[lt,ve];case"DataView":return[Je,t]}return t.includes("Array")?[Je,t]:e instanceof Error?[Jr,e.name||"Error"]:[un,t]},en=([e,n])=>e===dn&&(n==="function"||n==="symbol"),tl=(e,n,t,r)=>{const i=(o,s)=>{const u=r.push(o)-1;return t.set(s,u),u},a=o=>{if(t.has(o))return t.get(o);let[s,u]=qe(o);switch(s){case dn:{let p=o;switch(u){case"bigint":s=Xr,p=o.toString();break;case"number":if(!o&&nl(o,-0))return r.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);p=null;break;case"undefined":return i([$r],o)}return i([s,p],o)}case Je:{if(u){let d=o;return u==="DataView"?d=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(d=new Uint8Array(o)),i([u,[...d]],o)}const p=[],c=i([s,p],o);for(const d of o)p.push(a(d));return c}case un:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(n&&"toJSON"in o)return a(o.toJSON());const p=[],c=i([s,p],o);for(const d of el(o))(e||!en(qe(o[d])))&&p.push([a(d),a(o[d])]);return c}case ot:return i([s,isNaN(o.getTime())?ve:o.toISOString()],o);case at:{const{source:p,flags:c}=o;return i([s,{source:p,flags:c}],o)}case st:{const p=[],c=i([s,p],o);for(const[d,h]of o)(e||!(en(qe(d))||en(qe(h))))&&p.push([a(d),a(h)]);return c}case lt:{const p=[],c=i([s,p],o);for(const d of o)(e||!en(qe(d)))&&p.push(a(d));return c}}const{message:l}=o;return i([s,{name:u,message:l}],o)};return a},Yt=(e,{json:n,lossy:t}={})=>{const r=[];return tl(!(n||t),!!n,new Map,r)(e),r},cn=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Gt(Yt(e,n)):structuredClone(e):(e,n)=>Gt(Yt(e,n));function rl(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function il(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function ol(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||rl,r=e.options.footnoteBackLabel||il,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let u=-1;for(;++u<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[u]);if(!l)continue;const p=e.all(l),c=String(l.identifier).toUpperCase(),d=Me(c.toLowerCase());let h=0;const g=[],C=e.footnoteCounts.get(c);for(;C!==void 0&&++h<=C;){g.length>0&&g.push({type:"text",value:" "});let E=typeof t=="string"?t:t(u,h);typeof E=="string"&&(E={type:"text",value:E}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const v=p[p.length-1];if(v&&v.type==="element"&&v.tagName==="p"){const E=v.children[v.children.length-1];E&&E.type==="text"?E.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...g)}else p.push(...g);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+d},children:e.wrap(p,!0)};e.patch(l,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...cn(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const fn=(function(e){if(e==null)return ul;if(typeof e=="function")return mn(e);if(typeof e=="object")return Array.isArray(e)?al(e):sl(e);if(typeof e=="string")return ll(e);throw new Error("Expected function, string, or object as test")});function al(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=fn(e[t]);return mn(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function sl(e){const n=e;return mn(t);function t(r){const i=r;let a;for(a in e)if(i[a]!==n[a])return!1;return!0}}function ll(e){return mn(n);function n(t){return t&&t.type===e}}function mn(e){return n;function n(t,r,i){return!!(cl(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function ul(){return!0}function cl(e){return e!==null&&typeof e=="object"&&"type"in e}const Yr=[],pl=!0,on=!1,Hn="skip";function qn(e,n,t,r){if(!e||typeof e!="object")throw new Error("Unexpected value `"+e+"` for `tree`, expected node");let i=!0,a,o,s,u;if(typeof t=="function"||t&&typeof t=="object"?(a=n,o=t,r&&(i=!1)):(o=n,t&&(i=!1)),typeof o=="function")s=o;else if(o&&typeof o=="object"){if(!(o.enter===null||o.enter===void 0))if(typeof o.enter=="function")s=o.enter;else throw new Error("Unexpected value `"+o.enter+"` for `visitors.enter`, expected optional visitor");if(typeof o.exit=="function")u=o.exit;else throw new Error("Unexpected value `"+o.exit+"` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)")}else throw new Error("Unexpected value `"+o+"` for `enter` or `visitors`, expected visitor or object with visitors");const l=fn(a),p=i?1:-1;c(e,void 0,[])();function c(d,h,g){const C=d&&typeof d=="object"?d:{};if(typeof C.type=="string"){const y=typeof C.tagName=="string"?C.tagName:typeof C.name=="string"?C.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(d.type+(y?"<"+y+">":""))+")"})}return v;function v(){const y=!a||l(d,h,g[g.length-1]||void 0);let E=Yr;if(s&&y&&(E=Kt(s(d,g,h)),E[0]===on))return E;if("children"in d&&d.children){const T=d;if(T.children&&E[0]!==Hn){let R=(i?-1:T.children.length)+p;const F=[...g,T];for(;R>-1&&R<T.children.length;){const k=T.children[R],z=c(k,R,F)();if(z[0]===on)return z;R=typeof z[1]=="number"?z[1]:R+p}}}if(u&&y){const T=Kt(u(d,g,h));if(T[0]===Hn)throw new Error("Unexpected value `"+T[0]+"` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");if(T[0]===on||typeof T[1]=="number")return T}return E}}}function Kt(e){return Array.isArray(e)?e:typeof e=="number"?[pl,e]:e==null?Yr:[e]}function ut(e,n,t,r){let i,a,o;a=n,o=t,typeof a=="function"?qn(e,i,Vn(a),o):qn(e,i,hl(a),o)}function hl(e){return!e||typeof e!="object"?e:{enter:typeof e.enter=="function"?Vn(e.enter):e.enter,exit:typeof e.exit=="function"?Vn(e.exit):e.exit}}function Vn(e){return n;function n(t,r,i){return e(t,i,r[r.length-1])}}const $n={}.hasOwnProperty,dl={};function fl(e,n){const t=n||dl,r=new Map,i=new Map,a=new Map,o={...Ys,...t.handlers},s={all:l,applyData:gl,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:u,options:t,patch:ml,wrap:xl};return ut(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const c=p.type==="definition"?r:i,d=String(p.identifier).toUpperCase();c.has(d)||c.set(d,p)}}),s;function u(p,c){const d=p.type,h=s.handlers[d];if($n.call(s.handlers,d)&&h)return h(s,p,c);if(s.options.passThrough&&s.options.passThrough.includes(d)){if("children"in p){const{children:C,...v}=p,y=cn(v);return y.children=s.all(p),y}return cn(p)}return(s.options.unknownHandler||yl)(s,p,c)}function l(p){const c=[];if("children"in p){const d=p.children;let h=-1;for(;++h<d.length;){const g=s.one(d[h],p);if(g){if(h&&d[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Qt(g.value)),!Array.isArray(g)&&g.type==="element")){const C=g.children[0];C&&C.type==="text"&&(C.value=Qt(C.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function ml(e,n){e.position&&(n.position=ro(e))}function gl(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&a&&Object.assign(t.properties,cn(a)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function yl(e,n){const t=n.data||{},r="value"in n&&!($n.call(t,"hProperties")||$n.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function xl(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Qt(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Zt(e,n){const t=fl(e,n),r=t.one(e,void 0),i=ol(t),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function bl(e,n){return e&&"run"in e?async function(t,r){const i=Zt(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Zt(t,{file:r,...e||n})}}function er(e){if(e)throw e}var Cn,nr;function kl(){if(nr)return Cn;nr=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(l){return typeof Array.isArray=="function"?Array.isArray(l):n.call(l)==="[object Array]"},a=function(l){if(!l||n.call(l)!=="[object Object]")return!1;var p=e.call(l,"constructor"),c=l.constructor&&l.constructor.prototype&&e.call(l.constructor.prototype,"isPrototypeOf");if(l.constructor&&!p&&!c)return!1;var d;for(d in l);return typeof d>"u"||e.call(l,d)},o=function(l,p){t&&p.name==="__proto__"?t(l,p.name,{enumerable:!0,configurable:!0,value:p.newValue,writable:!0}):l[p.name]=p.newValue},s=function(l,p){if(p==="__proto__")if(e.call(l,p)){if(r)return r(l,p).value}else return;return l[p]};return Cn=function u(){var l,p,c,d,h,g,C=arguments[0],v=1,y=arguments.length,E=!1;for(typeof C=="boolean"&&(E=C,C=arguments[1]||{},v=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});v<y;++v)if(l=arguments[v],l!=null)for(p in l)c=s(C,p),d=s(l,p),C!==d&&(E&&d&&(a(d)||(h=i(d)))?(h?(h=!1,g=c&&i(c)?c:[]):g=c&&a(c)?c:{},o(C,{name:p,newValue:u(E,g,d)})):typeof d<"u"&&o(C,{name:p,newValue:d}));return C},Cn}var wl=kl();const vn=mr(wl);function Jn(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Sl(){const e=[],n={run:t,use:r};return n;function t(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);s(null,...i);function s(u,...l){const p=e[++a];let c=-1;if(u){o(u);return}for(;++c<i.length;)(l[c]===null||l[c]===void 0)&&(l[c]=i[c]);i=l,p?Cl(p,s)(...l):o(null,...l)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function Cl(e,n){let t;return r;function r(...o){const s=e.length>o.length;let u;s&&o.push(i);try{u=e.apply(this,o)}catch(l){const p=l;if(s&&t)throw p;return i(p)}s||(u&&u.then&&typeof u.then=="function"?u.then(a,i):u instanceof Error?i(u):a(u))}function i(o,...s){t||(t=!0,n(o,...s))}function a(o){i(null,o)}}const fe={basename:vl,dirname:Tl,extname:Il,join:El,sep:"/"};function vl(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ke(e);let t=0,r=-1,i=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,s=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===n.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function Tl(e){if(Ke(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Il(e){Ke(e);let n=e.length,t=-1,r=0,i=-1,a=0,o;for(;n--;){const s=e.codePointAt(n);if(s===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),s===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||t<0||a===0||a===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function El(...e){let n=-1,t;for(;++n<e.length;)Ke(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Pl(t)}function Pl(e){Ke(e);const n=e.codePointAt(0)===47;let t=Al(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Al(e,n){let t="",r=0,i=-1,a=0,o=-1,s,u;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else{if(s===47)break;s=47}if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=o,a=0;continue}}else if(t.length>0){t="",r=0,i=o,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return t}function Ke(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const jl={cwd:Rl};function Rl(){return"/"}function Xn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Dl(e){if(typeof e=="string")e=new URL(e);else if(!Xn(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Ll(e)}function Ll(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Tn=["history","path","basename","stem","extname","dirname"];class Kr{constructor(n){let t;n?Xn(n)?t={path:n}:typeof n=="string"||Fl(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":jl.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Tn.length;){const a=Tn[r];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let i;for(i in t)Tn.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?fe.basename(this.path):void 0}set basename(n){En(n,"basename"),In(n,"basename"),this.path=fe.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?fe.dirname(this.path):void 0}set dirname(n){tr(this.basename,"dirname"),this.path=fe.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?fe.extname(this.path):void 0}set extname(n){if(In(n,"extname"),tr(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=fe.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Xn(n)&&(n=Dl(n)),En(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?fe.basename(this.path,this.extname):void 0}set stem(n){En(n,"stem"),In(n,"stem"),this.path=fe.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Z(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function In(e,n){if(e&&e.includes(fe.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+fe.sep+"`")}function En(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function tr(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Fl(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ml=(function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a}),zl={}.hasOwnProperty;class ct extends Ml{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Sl()}copy(){const n=new ct;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(vn(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(jn("data",this.frozen),this.namespace[n]=t,this):zl.call(this.namespace,n)&&this.namespace[n]||void 0:n?(jn("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=nn(n),r=this.parser||this.Parser;return Pn("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Pn("process",this.parser||this.Parser),An("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(a,o){const s=nn(n),u=r.parse(s);r.run(u,s,function(p,c,d){if(p||!c||!d)return l(p);const h=c,g=r.stringify(h,d);Ol(g)?d.value=g:d.result=g,l(p,d)});function l(p,c){p||!c?o(p):a?a(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),Pn("processSync",this.parser||this.Parser),An("processSync",this.compiler||this.Compiler),this.process(n,i),ir("processSync","process",t),r;function i(a,o){t=!0,er(a),r=o}}run(n,t,r){rr(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?a(void 0,r):new Promise(a);function a(o,s){const u=nn(t);i.run(n,u,l);function l(p,c,d){const h=c||n;p?s(p):o?o(h):r(void 0,h,d)}}}runSync(n,t){let r=!1,i;return this.run(n,t,a),ir("runSync","run",r),i;function a(o,s){er(o),i=s,r=!0}}stringify(n,t){this.freeze();const r=nn(t),i=this.compiler||this.Compiler;return An("stringify",i),rr(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(jn("use",this.frozen),n!=null)if(typeof n=="function")u(n,t);else if(typeof n=="object")Array.isArray(n)?s(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(l){if(typeof l=="function")u(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[p,...c]=l;u(p,c)}else o(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function o(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(i.settings=vn(!0,i.settings,l.settings))}function s(l){let p=-1;if(l!=null)if(Array.isArray(l))for(;++p<l.length;){const c=l[p];a(c)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function u(l,p){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===l){d=c;break}if(d===-1)r.push([l,...p]);else if(p.length>0){let[h,...g]=p;const C=r[d][1];Jn(C)&&Jn(h)&&(h=vn(!0,C,h)),r[d]=[l,h,...g]}}}}const Nl=new ct().freeze();function Pn(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function An(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function jn(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rr(e){if(!Jn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ir(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function nn(e){return _l(e)?e:new Kr(e)}function _l(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Ol(e){return typeof e=="string"||Bl(e)}function Bl(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ul="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",or=[],ar={allowDangerousHtml:!0},Wl=/^(https?|ircs?|mailto|xmpp)$/i,Hl=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ql(e){const n=Vl(e),t=$l(e);return Jl(n.runSync(n.parse(t),t),e)}function Vl(e){const n=e.rehypePlugins||or,t=e.remarkPlugins||or,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ar}:ar;return Nl().use(vs).use(t).use(bl,r).use(n)}function $l(e){const n=e.children||"",t=new Kr;return typeof n=="string"&&(t.value=n),t}function Jl(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,a=n.disallowedElements,o=n.skipHtml,s=n.unwrapDisallowed,u=n.urlTransform||Xl;for(const p of Hl)Object.hasOwn(n,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+Ul+p.id,void 0);return ut(e,l),lo(e,{Fragment:S.Fragment,components:i,ignoreInvalidStyle:!0,jsx:S.jsx,jsxs:S.jsxs,passKeys:!0,passNode:!0});function l(p,c,d){if(p.type==="raw"&&d&&typeof c=="number")return o?d.children.splice(c,1):d.children[c]={type:"text",value:p.value},c;if(p.type==="element"){let h;for(h in kn)if(Object.hasOwn(kn,h)&&Object.hasOwn(p.properties,h)){const g=p.properties[h],C=kn[h];(C===null||C.includes(p.tagName))&&(p.properties[h]=u(String(g||""),h,p))}}if(p.type==="element"){let h=t?!t.includes(p.tagName):a?a.includes(p.tagName):!1;if(!h&&r&&typeof c=="number"&&(h=!r(p,c,d)),h&&d&&typeof c=="number")return s&&p.children?d.children.splice(c,1,...p.children):d.children.splice(c,1),c}}}function Xl(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||Wl.test(e.slice(0,n))?e:""}function sr(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function Gl(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Yl(e,n,t){const i=fn((t||{}).ignore||[]),a=Kl(n);let o=-1;for(;++o<a.length;)qn(e,s);function s(l,p,c){if(l.type==="text"&&typeof c=="number")return u(l,p,c);if(i(l,c,p[p.length-1]))return Hn}function u(l,p,c){const d=p[p.length-1],h=a[o][0],g=a[o][1];let C=0,v=!1,y=[];h.lastIndex=0;let E=h.exec(l.value);for(;E;){const R=E.index,F={index:E.index,input:E.input,stack:[...p,l]};let k=g(...E,F);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1)h.lastIndex=R+1;else{if(C!==R&&T({type:"text",value:l.value.slice(C,R)}),Array.isArray(k))for(const z of k)T(z);else k&&T(k);C=R+E[0].length,v=!0}if(!h.global)break;E=h.exec(l.value)}return v?(C<l.value.length&&T({type:"text",value:l.value.slice(C)}),d.children.splice(c,1,...y)):y=[l],c+y.length;function T(R){const F=y[y.length-1];F&&F.type==="text"&&R.type==="text"?F.value+=R.value:y.push(R)}}}function Kl(e){if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=[],t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([Ql(i[0]),Zl(i[1])])}return n}function Ql(e){return typeof e=="string"?new RegExp(Gl(e),"g"):e}function Zl(e){return typeof e=="function"?e:function(){return e}}const Rn="phrasing",Dn=["autolink","link","image","label"];function eu(){return{transforms:[su],enter:{literalAutolink:tu,literalAutolinkEmail:Ln,literalAutolinkHttp:Ln,literalAutolinkWww:Ln},exit:{literalAutolink:au,literalAutolinkEmail:ou,literalAutolinkHttp:ru,literalAutolinkWww:iu}}}function nu(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Rn,notInConstruct:Dn},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Rn,notInConstruct:Dn},{character:":",before:"[ps]",after:"\\/",inConstruct:Rn,notInConstruct:Dn}]}}function tu(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ln(e){this.config.enter.autolinkProtocol.call(this,e)}function ru(e){this.config.exit.autolinkProtocol.call(this,e)}function iu(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function ou(e){this.config.exit.autolinkEmail.call(this,e)}function au(e){this.exit(e)}function su(e){Yl(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,lu],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),uu]],{ignore:["link","linkReference"]})}function lu(e,n,t,r,i){let a="";if(!Qr(i)||(/^w/i.test(n)&&(t=n+t,n="",a="http://"),!cu(t)))return!1;const o=pu(t+r);if(!o[0])return!1;const s={type:"link",title:null,url:a+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[s,{type:"text",value:o[1]}]:s}function uu(e,n,t,r){return!Qr(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function cu(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function pu(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=sr(e,"(");let a=sr(e,")");for(;r!==-1&&i>a;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),a++;return[e,t]}function Qr(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Ie(t)||pn(t))&&(!n||t!==47)}Zr.peek=ku;function hu(){this.buffer()}function du(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function fu(){this.buffer()}function mu(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function gu(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=he(this.sliceSerialize(e)).toLowerCase(),t.label=n}function yu(e){this.exit(e)}function xu(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=he(this.sliceSerialize(e)).toLowerCase(),t.label=n}function bu(e){this.exit(e)}function ku(){return"["}function Zr(e,n,t,r){const i=t.createTracker(r);let a=i.move("[^");const o=t.enter("footnoteReference"),s=t.enter("reference");return a+=i.move(t.safe(t.associationId(e),{after:"]",before:a})),s(),o(),a+=i.move("]"),a}function wu(){return{enter:{gfmFootnoteCallString:hu,gfmFootnoteCall:du,gfmFootnoteDefinitionLabelString:fu,gfmFootnoteDefinition:mu},exit:{gfmFootnoteCallString:gu,gfmFootnoteCall:yu,gfmFootnoteDefinitionLabelString:xu,gfmFootnoteDefinition:bu}}}function Su(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Zr},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,a,o){const s=a.createTracker(o);let u=s.move("[^");const l=a.enter("footnoteDefinition"),p=a.enter("label");return u+=s.move(a.safe(a.associationId(r),{before:u,after:"]"})),p(),u+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),u+=s.move((n?`
`:" ")+a.indentLines(a.containerFlow(r,s.current()),n?ei:Cu))),l(),u}}function Cu(e,n,t){return n===0?e:ei(e,n,t)}function ei(e,n,t){return(t?"":"    ")+e}const vu=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];pt.attention=Au;pt.peek=ju;function Tu(){return{canContainEols:["delete"],enter:{strikethrough:Eu},exit:{strikethrough:Pu}}}function Iu(){return{handlers:{delete:pt},unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:vu}]}}function Eu(e){this.enter({type:"delete",children:[],position:void 0},e)}function Pu(e){this.exit(e)}function pt(e,n,t,r){const i=t.createTracker(r),a=t.stack.includes("strikethrough")?"~":"~~",o=t.enter("strikethrough");let s=i.move(a);return s+=t.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move(a),o(),s}function Au(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function ju(){return"~"}function Ru(e){return e.length}function Du(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||Ru,a=[],o=[],s=[],u=[];let l=0,p=-1;for(;++p<e.length;){const C=[],v=[];let y=-1;for(e[p].length>l&&(l=e[p].length);++y<e[p].length;){const E=Lu(e[p][y]);if(t.alignDelimiters!==!1){const T=i(E);v[y]=T,(u[y]===void 0||T>u[y])&&(u[y]=T)}C.push(E)}o[p]=C,s[p]=v}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<l;)a[c]=lr(r[c]);else{const C=lr(r);for(;++c<l;)a[c]=C}c=-1;const d=[],h=[];for(;++c<l;){const C=a[c];let v="",y="";C===99?(v=":",y=":"):C===108?v=":":C===114&&(y=":");let E=t.alignDelimiters===!1?1:Math.max(1,u[c]-v.length-y.length);const T=v+"-".repeat(E)+y;t.alignDelimiters!==!1&&(E=v.length+E+y.length,E>u[c]&&(u[c]=E),h[c]=E),d[c]=T}o.splice(1,0,d),s.splice(1,0,h),p=-1;const g=[];for(;++p<o.length;){const C=o[p],v=s[p];c=-1;const y=[];for(;++c<l;){const E=C[c]||"";let T="",R="";if(t.alignDelimiters!==!1){const F=u[c]-(v[c]||0),k=a[c];k===114?T=" ".repeat(F):k===99?F%2?(T=" ".repeat(F/2+.5),R=" ".repeat(F/2-.5)):(T=" ".repeat(F/2),R=T):R=" ".repeat(F)}t.delimiterStart!==!1&&!c&&y.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&E==="")&&(t.delimiterStart!==!1||c)&&y.push(" "),t.alignDelimiters!==!1&&y.push(T),y.push(E),t.alignDelimiters!==!1&&y.push(R),t.padding!==!1&&y.push(" "),(t.delimiterEnd!==!1||c!==l-1)&&y.push("|")}g.push(t.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return g.join(`
`)}function Lu(e){return e==null?"":String(e)}function lr(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}const Fu=fn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Mu(e,n,t,r){const i=t.enter("blockquote"),a=t.createTracker(r);a.move("> "),a.shift(2);const o=t.indentLines(t.containerFlow(e,a.current()),zu);return i(),o}function zu(e,n,t){return">"+(t?"":" ")+e}function Nu(e,n){return ur(e,n.inConstruct,!0)&&!ur(e,n.notInConstruct,!1)}function ur(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function cr(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;){const a=t.unsafe[i];if(a.character===`
`&&!a.before&&!a.after&&Nu(t.stack,a))return/[\t ]/.test(r.before)?"":" "}return`\\
`}function _u(e,n){const t=String(e);let r=t.indexOf(n),i=r,a=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+n.length,r=t.indexOf(n,i);return o}function Ou(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^\n\r ]/.test(e.value)&&!/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))}function Bu(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function Uu(e,n,t,r){const i=Bu(t),a=e.value||"";if(Ou(e,t)){const c=t.enter("codeIndented"),d=t.indentLines(a,Wu);return c(),d}const o=t.createTracker(r),s=i.repeat(Math.max(_u(a,i)+1,3)),u=t.enter("codeFenced"),l=i==="`"?"GraveAccent":"Tilde";let p=o.move(s);if(e.lang){const c=t.enter(`codeFencedLang${l}`);p+=o.move(t.safe(e.lang,{before:p,after:" ",encode:["`"],...o.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${l}`);p+=o.move(" "),p+=o.move(t.safe(e.meta,{before:p,after:`
`,encode:["`"],...o.current()})),c()}return p+=o.move(`
`),a&&(p+=o.move(a+`
`)),p+=o.move(s),u(),p}function Wu(e,n,t){return(t?"":"    ")+e}function ht(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function Hu(e,n,t,r){const i=ht(t),a=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let s=t.enter("label");const u=t.createTracker(r);let l=u.move("[");return l+=u.move(t.safe(t.associationId(e),{before:l,after:"]",...u.current()})),l+=u.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),l+=u.move("<"),l+=u.move(t.safe(e.url,{before:l,after:">",...u.current()})),l+=u.move(">")):(s=t.enter("destinationRaw"),l+=u.move(t.safe(e.url,{before:l,after:e.title?" ":`
`,...u.current()}))),s(),e.title&&(s=t.enter(`title${a}`),l+=u.move(" "+i),l+=u.move(t.safe(e.title,{before:l,after:i,...u.current()})),l+=u.move(i),s()),o(),l}function qu(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}dt.attention=Vu;dt.peek=$u;function dt(e,n,t,r){const i=t.enter("phrasing"),a=t.containerPhrasing({type:"root",children:[e]},r);return i(),a}function Vu(e,n){return{construct:"emphasis",markers:qu(n)==="*"?["*","_"]:["_","*"],sizes:[1]}}function $u(e,n,t){return t.options.emphasis||"*"}function Ju(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Xu(e,n){let t=!1;return ut(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,on}),!!((!e.depth||e.depth<3)&&tt(e)&&(n.options.setext||t))}function Gu(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),a=t.createTracker(r);if(Xu(e,t)){const c=t.enter("headingSetext"),d=t.enter("phrasing"),h=t.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return d(),c(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const o="#".repeat(i),s=t.enter("headingAtx"),u=t.enter("phrasing");a.move(o+" ");let l=t.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});const p=l.charCodeAt(0);return(p===9||p===32)&&(l=Ju(p)+l.slice(1)),l=l?o+" "+l:o,t.options.closeAtx&&(l+=" "+o),u(),s(),l}ni.peek=Yu;function ni(e){return e.value||""}function Yu(){return"<"}ti.peek=Ku;function ti(e,n,t,r){const i=ht(t),a=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let s=t.enter("label");const u=t.createTracker(r);let l=u.move("![");return l+=u.move(t.safe(e.alt,{before:l,after:"]",...u.current()})),l+=u.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),l+=u.move("<"),l+=u.move(t.safe(e.url,{before:l,after:">",...u.current()})),l+=u.move(">")):(s=t.enter("destinationRaw"),l+=u.move(t.safe(e.url,{before:l,after:e.title?" ":")",...u.current()}))),s(),e.title&&(s=t.enter(`title${a}`),l+=u.move(" "+i),l+=u.move(t.safe(e.title,{before:l,after:i,...u.current()})),l+=u.move(i),s()),l+=u.move(")"),o(),l}function Ku(){return"!"}ri.peek=Qu;function ri(e,n,t,r){const i=e.referenceType,a=t.enter("imageReference");let o=t.enter("label");const s=t.createTracker(r);let u=s.move("![");const l=t.safe(e.alt,{before:u,after:"]",...s.current()});u+=s.move(l+"]["),o();const p=t.stack;t.stack=p.filter(function(d){return d!=="phrasing"}),o=t.enter("reference");const c=t.safe(t.associationId(e),{before:u,after:"]",...s.current()});return o(),t.stack=p,a(),i==="full"||!l||l!==c?u+=s.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=s.move("]"),u}function Qu(){return"!"}ii.peek=Zu;function ii(e,n,t){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^\n\r ]/.test(r)&&(/^[\n\r ]/.test(r)&&/[\n\r ]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<t.unsafe.length;){const o=t.unsafe[a],s=t.compilePattern(o);if(!o.atBreak)continue;let u;for(;u=s.exec(r);){let l=u.index;r.charCodeAt(l)===10&&r.charCodeAt(l-1)===13&&l--,r=r.slice(0,l)+" "+r.slice(u.index+1)}}return i+r+i}function Zu(){return"`"}function oi(e,n){const t=tt(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][+\-.a-z]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ai.peek=ec;function ai(e,n,t,r){const i=ht(t),a=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);if(oi(e,t)){const p=t.stack;t.stack=p.filter(function(h){return h!=="phrasing"});const c=t.enter("autolink");let d=o.move("<");return d+=o.move(t.containerPhrasing(e,{before:d,after:">",...o.current()})),d+=o.move(">"),c(),t.stack=p,d}const s=t.enter("link");let u=t.enter("label"),l=o.move("[");return l+=o.move(t.containerPhrasing(e,{before:l,after:"](",...o.current()})),l+=o.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),l+=o.move("<"),l+=o.move(t.safe(e.url,{before:l,after:">",...o.current()})),l+=o.move(">")):(u=t.enter("destinationRaw"),l+=o.move(t.safe(e.url,{before:l,after:e.title?" ":")",...o.current()}))),u(),e.title&&(u=t.enter(`title${a}`),l+=o.move(" "+i),l+=o.move(t.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),u()),l+=o.move(")"),s(),l}function ec(e,n,t){return oi(e,t)?"<":"["}si.peek=nc;function si(e,n,t,r){const i=e.referenceType,a=t.enter("linkReference");let o=t.enter("label");const s=t.createTracker(r);let u=s.move("[");const l=t.containerPhrasing(e,{before:u,after:"]",...s.current()});u+=s.move(l+"]["),o();const p=t.stack;t.stack=p.filter(function(d){return d!=="phrasing"}),o=t.enter("reference");const c=t.safe(t.associationId(e),{before:u,after:"]",...s.current()});return o(),t.stack=p,a(),i==="full"||!l||l!==c?u+=s.move(c+"]"):i==="shortcut"?u=u.slice(0,-1):u+=s.move("]"),u}function nc(){return"["}function ft(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function tc(e){const n=ft(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function rc(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function li(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function ic(e,n,t,r){const i=t.enter("list"),a=t.bulletCurrent;let o=e.ordered?rc(t):ft(t);const s=e.ordered?o==="."?")":".":tc(t);let u=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const p=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&p&&(!p.children||!p.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(u=!0),li(t)===o&&p){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(o=s),t.bulletCurrent=o;const l=t.containerFlow(e,r);return t.bulletLastUsed=o,t.bulletCurrent=a,i(),l}function oc(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function ac(e,n,t,r){const i=oc(t);let a=t.bulletCurrent||ft(t);n&&n.type==="list"&&n.ordered&&(a=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const s=t.createTracker(r);s.move(a+" ".repeat(o-a.length)),s.shift(o);const u=t.enter("listItem"),l=t.indentLines(t.containerFlow(e,s.current()),p);return u(),l;function p(c,d,h){return d?(h?"":" ".repeat(o))+c:(h?a:a+" ".repeat(o-a.length))+c}}function sc(e,n,t,r){const i=t.enter("paragraph"),a=t.enter("phrasing"),o=t.containerPhrasing(e,r);return a(),i(),o}function lc(e,n,t,r){if(!e.children.some(function(s){return Fu(s)}))return t.containerFlow(e,r);const a=t.enter("phrasing"),o=t.containerPhrasing(e,r);return a(),o}function uc(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}mt.attention=cc;mt.peek=pc;function mt(e,n,t,r){const i=t.enter("phrasing"),a=t.containerPhrasing({type:"root",children:[e]},r);return i(),a}function cc(e,n){return{construct:"strong",markers:uc(n)==="*"?["*","_"]:["_","*"],sizes:[2]}}function pc(e,n,t){return t.options.strong||"*"}function hc(e,n,t,r){const i=n?n.children:[],a=i.indexOf(e);return t.safe(e.value,{...r,afterNode:i[a+1],beforeNode:i[a-1]})}function dc(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function fc(e,n,t){const r=(li(t)+(t.options.ruleSpaces?" ":"")).repeat(dc(t));return t.options.ruleSpaces?r.slice(0,-1):r}const ui={blockquote:Mu,break:cr,code:Uu,definition:Hu,emphasis:dt,hardBreak:cr,heading:Gu,html:ni,image:ti,imageReference:ri,inlineCode:ii,link:ai,linkReference:si,list:ic,listItem:ac,paragraph:sc,root:lc,strong:mt,text:hc,thematicBreak:fc};function mc(){return{enter:{table:gc,tableData:pr,tableHeader:pr,tableRow:xc},exit:{codeText:bc,table:yc,tableData:Fn,tableHeader:Fn,tableRow:Fn}}}function gc(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function yc(e){this.exit(e),this.data.inTable=void 0}function xc(e){this.enter({type:"tableRow",children:[]},e)}function Fn(e){this.exit(e)}function pr(e){this.enter({type:"tableCell",children:[]},e)}function bc(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,kc));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function kc(e,n){return n==="|"?n:e}function wc(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,a=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:o,tableCell:u,tableRow:s}};function o(h,g,C,v){return l(p(h,C,v),h.align)}function s(h,g,C,v){const y=c(h,C,v),E=l([y]);return E.slice(0,E.indexOf(`
`))}function u(h,g,C,v){const y=C.enter("tableCell"),E=C.enter("phrasing"),T=C.containerPhrasing(h,{...v,before:a,after:a});return E(),y(),T}function l(h,g){return Du(h,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function p(h,g,C){const v=h.children;let y=-1;const E=[],T=g.enter("table");for(;++y<v.length;)E[y]=c(v[y],g,C);return T(),E}function c(h,g,C){const v=h.children;let y=-1;const E=[],T=g.enter("tableRow");for(;++y<v.length;)E[y]=u(v[y],h,g,C);return T(),E}function d(h,g,C){let v=ui.inlineCode(h,g,C);return C.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function Sc(){return{exit:{taskListCheckValueChecked:hr,taskListCheckValueUnchecked:hr,paragraph:vc}}}function Cc(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Tc}}}function hr(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function vc(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let a=-1,o;for(;++a<i.length;){const s=i[a];if(s.type==="paragraph"){o=s;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function Tc(e,n,t,r){const i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",s=t.createTracker(r);a&&s.move(o);let u=ui.listItem(e,n,t,{...r,...s.current()});return a&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),u;function l(p){return p+o}}function Ic(){return[eu(),wu(),Tu(),mc(),Sc()]}function Ec(e){return{extensions:[nu(),Su(e),Iu(),wc(e),Cc()]}}const Pc={tokenize:Fc,partial:!0},ci={tokenize:Mc,partial:!0},pi={tokenize:zc,partial:!0},hi={tokenize:Nc,partial:!0},Ac={tokenize:_c,partial:!0},di={name:"wwwAutolink",tokenize:Dc,previous:mi},fi={name:"protocolAutolink",tokenize:Lc,previous:gi},be={name:"emailAutolink",tokenize:Rc,previous:yi},me={};function jc(){return{text:me}}let Ce=48;for(;Ce<123;)me[Ce]=be,Ce++,Ce===58?Ce=65:Ce===91&&(Ce=97);me[43]=be;me[45]=be;me[46]=be;me[95]=be;me[72]=[be,fi];me[104]=[be,fi];me[87]=[be,di];me[119]=[be,di];function Rc(e,n,t){const r=this;let i,a;return o;function o(c){return!Gn(c)||!yi.call(r,r.previous)||gt(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(c))}function s(c){return Gn(c)?(e.consume(c),s):c===64?(e.consume(c),u):t(c)}function u(c){return c===46?e.check(Ac,p,l)(c):c===45||c===95||Q(c)?(a=!0,e.consume(c),u):p(c)}function l(c){return e.consume(c),i=!0,u}function p(c){return a&&i&&ee(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function Dc(e,n,t){const r=this;return i;function i(o){return o!==87&&o!==119||!mi.call(r,r.previous)||gt(r.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Pc,e.attempt(ci,e.attempt(pi,a),t),t)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function Lc(e,n,t){const r=this;let i="",a=!1;return o;function o(c){return(c===72||c===104)&&gi.call(r,r.previous)&&!gt(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),s):t(c)}function s(c){if(ee(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),s;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),u}return t(c)}function u(c){return c===47?(e.consume(c),a?l:(a=!0,u)):t(c)}function l(c){return c===null||an(c)||J(c)||Ie(c)||pn(c)?t(c):e.attempt(ci,e.attempt(pi,p),t)(c)}function p(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function Fc(e,n,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):t(o)}function a(o){return o===null?t(o):n(o)}}function Mc(e,n,t){let r,i,a;return o;function o(l){return l===46||l===95?e.check(hi,u,s)(l):l===null||J(l)||Ie(l)||l!==45&&pn(l)?u(l):(a=!0,e.consume(l),o)}function s(l){return l===95?r=!0:(i=r,r=void 0),e.consume(l),o}function u(l){return i||r||!a?t(l):n(l)}}function zc(e,n){let t=0,r=0;return i;function i(o){return o===40?(t++,e.consume(o),i):o===41&&r<t?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(hi,n,a)(o):o===null||J(o)||Ie(o)?n(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function Nc(e,n,t){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),a):s===93?(e.consume(s),i):s===60||s===null||J(s)||Ie(s)?n(s):t(s)}function i(s){return s===null||s===40||s===91||J(s)||Ie(s)?n(s):r(s)}function a(s){return ee(s)?o(s):t(s)}function o(s){return s===59?(e.consume(s),r):ee(s)?(e.consume(s),o):t(s)}}function _c(e,n,t){return r;function r(a){return e.consume(a),i}function i(a){return Q(a)?t(a):n(a)}}function mi(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||J(e)}function gi(e){return!ee(e)}function yi(e){return!(e===47||Gn(e))}function Gn(e){return e===43||e===45||e===46||e===95||Q(e)}function gt(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const Oc={tokenize:Jc,partial:!0};function Bc(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:qc,continuation:{tokenize:Vc},exit:$c}},text:{91:{name:"gfmFootnoteCall",tokenize:Hc},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Uc,resolveTo:Wc}}}}function Uc(e,n,t){const r=this;let i=r.events.length;const a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const u=r.events[i][1];if(u.type==="labelImage"){o=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return s;function s(u){if(!o||!o._balanced)return t(u);const l=he(r.sliceSerialize({start:o.end,end:r.now()}));return l.codePointAt(0)!==94||!a.includes(l.slice(1))?t(u):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),n(u))}}function Wc(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",a,n],["enter",o,n],["exit",o,n],["exit",a,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...s),e}function Hc(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a=0,o;return s;function s(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),u}function u(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",l)}function l(c){if(a>999||c===93&&!o||c===null||c===91||J(c))return t(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(he(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return J(c)||(o=!0),a++,e.consume(c),c===92?p:l}function p(c){return c===91||c===92||c===93?(e.consume(c),a++,l):l(c)}}function qc(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a,o=0,s;return u;function u(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),l}function l(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):t(g)}function p(g){if(o>999||g===93&&!s||g===null||g===91||J(g))return t(g);if(g===93){e.exit("chunkString");const C=e.exit("gfmFootnoteDefinitionLabelString");return a=he(r.sliceSerialize(C)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return J(g)||(s=!0),o++,e.consume(g),g===92?c:p}function c(g){return g===91||g===92||g===93?(e.consume(g),o++,p):p(g)}function d(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(a)||i.push(a),q(e,h,"gfmFootnoteDefinitionWhitespace")):t(g)}function h(g){return n(g)}}function Vc(e,n,t){return e.check(Ye,n,e.attempt(Oc,n,t))}function $c(e){e.exit("gfmFootnoteDefinition")}function Jc(e,n,t){const r=this;return q(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(a):t(a)}}function Xc(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:a,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,s){let u=-1;for(;++u<o.length;)if(o[u][0]==="enter"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._close){let l=u;for(;l--;)if(o[l][0]==="exit"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._open&&o[u][1].end.offset-o[u][1].start.offset===o[l][1].end.offset-o[l][1].start.offset){o[u][1].type="strikethroughSequence",o[l][1].type="strikethroughSequence";const p={type:"strikethrough",start:Object.assign({},o[l][1].start),end:Object.assign({},o[u][1].end)},c={type:"strikethroughText",start:Object.assign({},o[l][1].end),end:Object.assign({},o[u][1].start)},d=[["enter",p,s],["enter",o[l][1],s],["exit",o[l][1],s],["enter",c,s]],h=s.parser.constructs.insideSpan.null;h&&pe(d,d.length,0,hn(h,o.slice(l+1,u),s)),pe(d,d.length,0,[["exit",c,s],["enter",o[u][1],s],["exit",o[u][1],s],["exit",p,s]]),pe(o,l-1,u-l+3,d),u=l+d.length-2;break}}for(u=-1;++u<o.length;)o[u][1].type==="strikethroughSequenceTemporary"&&(o[u][1].type="data");return o}function a(o,s,u){const l=this.previous,p=this.events;let c=0;return d;function d(g){return l===126&&p[p.length-1][1].type!=="characterEscape"?u(g):(o.enter("strikethroughSequenceTemporary"),h(g))}function h(g){const C=ln(l);if(g===126)return c>1?u(g):(o.consume(g),c++,h);if(c<2&&!t)return u(g);const v=o.exit("strikethroughSequenceTemporary"),y=ln(g);return v._open=!y||y===2&&!!C,v._close=!C||C===2&&!!y,s(g)}}}class Gc{constructor(){this.map=[],this.index=new Map}add(n,t,r){Yc(this,n,t,r)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const a of i)n.push(a);i=r.pop()}this.map.length=0,this.index.clear()}}function Yc(e,n,t,r){if(t===0&&r.length===0)return;const i=e.index.get(n);if(i){i[1]+=t,i[2].push(...r);return}const a=[n,t,r];e.map.push(a),e.index.set(n,a)}function Kc(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function Qc(){return{flow:{null:{name:"table",tokenize:Zc,resolveAll:ep}}}}function Zc(e,n,t){const r=this;let i=0,a=0,o;return s;function s(x){let A=r.events.length-1;for(;A>-1;){const{type:L}=r.events[A][1];if(L==="lineEnding"||L==="linePrefix")A--;else break}const D=A>-1?r.events[A][1].type:null,H=D==="tableHead"||D==="tableRow"?k:u;return H===k&&r.parser.lazy[r.now().line]?t(x):H(x)}function u(x){return e.enter("tableHead"),e.enter("tableRow"),l(x)}function l(x){return x===124||(o=!0,a+=1),p(x)}function p(x){return x===null?t(x):M(x)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),h):t(x):B(x)?q(e,p,"whitespace")(x):(a+=1,o&&(o=!1,i+=1),x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),o=!0,p):(e.enter("data"),c(x)))}function c(x){return x===null||x===124||J(x)?(e.exit("data"),p(x)):(e.consume(x),x===92?d:c)}function d(x){return x===92||x===124?(e.consume(x),c):c(x)}function h(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(x):(e.enter("tableDelimiterRow"),o=!1,B(x)?q(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):g(x))}function g(x){return x===45||x===58?v(x):x===124?(o=!0,e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),C):F(x)}function C(x){return B(x)?q(e,v,"whitespace")(x):v(x)}function v(x){return x===58?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),y):x===45?(a+=1,y(x)):x===null||M(x)?R(x):F(x)}function y(x){return x===45?(e.enter("tableDelimiterFiller"),E(x)):F(x)}function E(x){return x===45?(e.consume(x),E):x===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),T):(e.exit("tableDelimiterFiller"),T(x))}function T(x){return B(x)?q(e,R,"whitespace")(x):R(x)}function R(x){return x===124?g(x):x===null||M(x)?!o||i!==a?F(x):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(x)):F(x)}function F(x){return t(x)}function k(x){return e.enter("tableRow"),z(x)}function z(x){return x===124?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),z):x===null||M(x)?(e.exit("tableRow"),n(x)):B(x)?q(e,z,"whitespace")(x):(e.enter("data"),U(x))}function U(x){return x===null||x===124||J(x)?(e.exit("data"),z(x)):(e.consume(x),x===92?V:U)}function V(x){return x===92||x===124?(e.consume(x),U):U(x)}}function ep(e,n){let t=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,u=0,l,p,c;const d=new Gc;for(;++t<e.length;){const h=e[t],g=h[1];h[0]==="enter"?g.type==="tableHead"?(s=!1,u!==0&&(dr(d,n,u,l,p),p=void 0,u=0),l={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(t,0,[["enter",l,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,t+1,0,0],s&&(s=!1,p={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(t,0,[["enter",p,n]])),i=g.type==="tableDelimiterRow"?2:p?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=tn(d,n,a,i,void 0,c),a=[0,0,0,0]),o[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=tn(d,n,a,i,void 0,c)),a=o,o=[a[1],t,0,0])):g.type==="tableHead"?(s=!0,u=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(u=t,a[1]!==0?(o[0]=o[1],c=tn(d,n,a,i,t,c)):o[1]!==0&&(c=tn(d,n,o,i,t,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=t)}for(u!==0&&dr(d,n,u,l,p),d.consume(n.events),t=-1;++t<n.events.length;){const h=n.events[t];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Kc(n.events,t))}return e}function tn(e,n,t,r,i,a){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";t[0]!==0&&(a.end=Object.assign({},Le(n.events,t[0])),e.add(t[0],0,[["exit",a,n]]));const u=Le(n.events,t[1]);if(a={type:o,start:Object.assign({},u),end:Object.assign({},u)},e.add(t[1],0,[["enter",a,n]]),t[2]!==0){const l=Le(n.events,t[2]),p=Le(n.events,t[3]),c={type:s,start:Object.assign({},l),end:Object.assign({},p)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const d=n.events[t[2]],h=n.events[t[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,C=t[3]-t[2]-1;e.add(g,C,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(a.end=Object.assign({},Le(n.events,i)),e.add(i,0,[["exit",a,n]]),a=void 0),a}function dr(e,n,t,r,i){const a=[],o=Le(n.events,t);i&&(i.end=Object.assign({},o),a.push(["exit",i,n])),r.end=Object.assign({},o),a.push(["exit",r,n]),e.add(t+1,0,a)}function Le(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const np={name:"tasklistCheck",tokenize:rp};function tp(){return{text:{91:np}}}function rp(e,n,t){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),a)}function a(u){return J(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),o):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),o):t(u)}function o(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):t(u)}function s(u){return M(u)?n(u):B(u)?e.check({tokenize:ip},n,t)(u):t(u)}}function ip(e,n,t){return q(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function op(e){return jr([jc(),Bc(),Xc(e),Qc(),tp()])}const ap={};function sp(e){const n=this,t=e||ap,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(op(t)),a.push(Ic()),o.push(Ec(t))}const lp=`# Chapter 1 — Coding exercises

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
`,up=`# Chapter 1 — Interview questions and answers

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
`,cp=`# Chapter 1 — Introduction to React and TypeScript

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
`,hp=`# Chapter 2 — Interview questions and answers

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
`,dp=`# Chapter 2 — React + TypeScript Project Setup

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
`,fr=[{title:"Part 1 — Getting started",chapters:[{part:"Part 1 — Getting started",title:"Introduction to React and TypeScript",lessons:["What Is React?","What Is TypeScript?","Why Use React with TypeScript?","Modern React Development Mindset","Mini Project: Simple Profile Dashboard"],project:"Simple Profile Dashboard",materials:{notes:cp,exercises:lp,interviews:up}},{part:"Part 1 — Getting started",title:"React + TypeScript Project Setup",lessons:["What Is Project Setup?","Understanding Generated Project Files","Understanding package.json and Scripts","Understanding tsconfig.json","Creating Your First Clean React TypeScript Component","Mini Project: Company Team Dashboard Setup"],project:"Company Team Dashboard Setup",materials:{notes:dp,exercises:pp,interviews:hp}},{part:"Part 1 — Getting started",title:"JSX with TypeScript",lessons:["What Is JSX?","JSX Rules and Common Syntax","Using JavaScript Values in JSX","JSX Attributes and Type Safety","JSX Children and React.ReactNode","Mini Project: Course Landing Section with JSX"],project:"Course Landing Section with JSX"}]},{title:"Part 2 — Core React with TypeScript",chapters:[{part:"Part 2 — Core React with TypeScript",title:"Props and State with TypeScript",lessons:["Props with TypeScript","Optional Props and Default Values","State with useState","Object and Array State","Props vs State","Mini Project: Shopping Cart Item Manager"],project:"Shopping Cart Item Manager"},{part:"Part 2 — Core React with TypeScript",title:"Functional Components and Component Design",lessons:["Functional Components","Component Responsibility","Pure Components","Component Composition","Smart and Presentational Components","Mini Project: Employee Directory Component Design"],project:"Employee Directory Component Design"},{part:"Part 2 — Core React with TypeScript",title:"Hooks with TypeScript",lessons:["Rules of Hooks","useState with TypeScript","useEffect with TypeScript","useContext with TypeScript","useReducer with TypeScript","useRef with TypeScript","Mini Project: Support Ticket Dashboard"],project:"Support Ticket Dashboard"}]},{title:"Part 3 — User interaction and UI logic",chapters:[{part:"Part 3 — User interaction and UI logic",title:"Forms and Event Handling with TypeScript",lessons:["Event Handling with TypeScript","Controlled Inputs","Form Submit Handling","Handling Multiple Form Fields","Checkbox, Select, and Textarea","Basic Form Validation","Mini Project: Job Application Form"],project:"Job Application Form"},{part:"Part 3 — User interaction and UI logic",title:"Conditional Rendering, Lists, and Keys",lessons:["Conditional Rendering","Ternary and && Rendering","Rendering Lists with map","Filtering Lists","Keys in React","Mini Project: Task Manager with Filters"],project:"Task Manager with Filters"}]},{title:"Part 4 — Advanced TypeScript for React",chapters:[{part:"Part 4 — Advanced TypeScript for React",title:"Advanced TypeScript for React",lessons:["Generics in TypeScript","Generic React Components","Utility Types","Interfaces vs Types","Advanced Type Patterns for React","Mini Project: Generic Data Table with Typed API State"],project:"Generic Data Table with Typed API State"}]},{title:"Part 5 — Real-world data and app state",chapters:[{part:"Part 5 — Real-world data and app state",title:"API Integration and Error Handling with TypeScript",lessons:["What Is API Integration?","Fetching Data with useEffect","Error Handling with TypeScript","Creating a Reusable API Client","Axios with TypeScript","Mini Project: Product API Dashboard"],project:"Product API Dashboard"},{part:"Part 5 — Real-world data and app state",title:"Custom Hooks and Reusable Logic with TypeScript",lessons:["What Is a Custom Hook?","Creating a useFetch Hook","Custom Hook for Forms","useLocalStorage Hook","useDebounce Hook","Mini Project: Reusable Searchable Course Dashboard"],project:"Reusable Searchable Course Dashboard"},{part:"Part 5 — Real-world data and app state",title:"Context API and Global State Patterns with TypeScript",lessons:["What Is Context API?","Creating Type-Safe Context","Updating Context State","Context with useReducer","Global State Patterns and When Not to Use Context","Mini Project: Auth and Cart Context System"],project:"Auth and Cart Context System"}]},{title:"Part 6 — Industry-ready React practices",chapters:[{part:"Part 6 — Industry-ready React practices",title:"Performance Optimization with React and TypeScript",lessons:["What Is Performance Optimization?","React.memo","useMemo","useCallback","Large Lists and Rendering Optimization","Measuring Performance with Profiler","Mini Project: Optimized Product Search Dashboard"],project:"Optimized Product Search Dashboard"},{part:"Part 6 — Industry-ready React practices",title:"Folder Structure and Clean Code for React TypeScript Projects",lessons:["Why Folder Structure Matters","Component Organisation","Clean TypeScript Types","API and Service Layer Organisation","Clean Code Rules for React TypeScript","Import, Export, and Naming Conventions","Mini Project: Clean Feature-Based Course App Structure"],project:"Clean Feature-Based Course App Structure"},{part:"Part 6 — Industry-ready React practices",title:"Testing Basics for React TypeScript Applications",lessons:["What Is Testing?","Setting Up Testing in React TypeScript","Testing Components with React Testing Library","Testing User Events","Testing Forms and Validation","Testing API States and Mocking","Mini Project: Tested Login and Product List"],project:"Tested Login and Product List"}]},{title:"Part 7 — Application-level features",chapters:[{part:"Part 7 — Application-level features",title:"Authentication Flow with React and TypeScript",lessons:["What Is Authentication?","Login and Logout Flow","Auth Context with TypeScript","Protected Routes","Token Storage and Security Basics","Role-Based Access Control","Handling Auth Loading and Errors","Mini Project: Protected Dashboard App"],project:"Protected Dashboard App"},{part:"Part 7 — Application-level features",title:"Routing with React Router and TypeScript",lessons:["What Is Routing?","Setting Up React Router","Route Components and Layout Routes","Dynamic Routes and URL Params","Navigation with Link and useNavigate","Protected Routes","Not Found Page","Mini Project: Multi-Page Course Platform"],project:"Multi-Page Course Platform"},{part:"Part 7 — Application-level features",title:"State Management with Redux Toolkit Basics",lessons:["What Is Global State?","Why Redux Toolkit?","Store and Slice Setup","Actions and Reducers","useSelector and useDispatch with TypeScript","Async State with Redux Toolkit","Best Practices and When to Use Redux","Mini Project: Course Platform Global State Management"],project:"Course Platform Global State Management"}]},{title:"Part 8 — Real-world projects and production skills",chapters:[{part:"Part 8 — Real-world projects and production skills",title:"Real-World Project Patterns",lessons:["Building Feature-Based Apps","Handling Loading, Error, Empty, and Success States","Reusable Components and Hooks","API Layer Patterns","Form Patterns","Permission-Based UI","Common Industry Mistakes","Debugging Tips for Real Projects"],project:"Real-World Project Patterns"},{part:"Part 8 — Real-world projects and production skills",title:"Final Big Project — React TypeScript Admin Dashboard",lessons:["Project Overview","Features and Requirements","Folder Structure","Authentication Flow","Routing Setup","Dashboard Layout","API Integration","Forms and Validation","Global State Management","Performance Optimization","Testing Important Flows","Final Best Practices","Possible Improvements"],project:"React TypeScript Admin Dashboard"}]}];function fp(e){return e.toLowerCase().replace(/^mini project:\s*/,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}const xe=fr.flatMap((e,n)=>e.chapters.map((t,r)=>{const i=fr.slice(0,n).reduce((a,o)=>a+o.chapters.length,0)+r+1;return{id:`chapter-${String(i).padStart(2,"0")}`,number:i,part:e.title,title:t.title,lessons:t.lessons.map(a=>({title:a.replace(/^Mini Project:\s*/,""),slug:fp(a),isProject:a.startsWith("Mini Project:")})),project:t.project,materials:t.materials}}));function Mn(e,n){return`/course/${e.id}/${n.slug}`}const xi="react-typescript-mastery-progress-v1",bi="react-typescript-mastery-theme-v1",ki=[{id:"notes",label:"Chapter notes"},{id:"exercises",label:"Coding exercises"},{id:"interviews",label:"Interview questions"}];function mp(){try{const e=localStorage.getItem(bi);if(e==="dark"||e==="light")return e}catch(e){console.error("Could not read saved theme preference.",e)}return window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function gp(){try{const e=localStorage.getItem(xi);if(!e)return{};const n=JSON.parse(e);if(n&&typeof n=="object"&&!Array.isArray(n))return Object.fromEntries(Object.entries(n).filter(([,t])=>typeof t=="boolean"))}catch(e){console.error("Could not read saved lesson progress.",e)}return{}}function yp(e){const n=e.get("resource");return ki.some(t=>t.id===n)?n:"notes"}function kp(){const{chapterId:e,lessonId:n}=ji(),t=Ri(),[r,i]=Di(),[a,o]=Be.useState(mp),[s,u]=Be.useState(gp),l=xe.findIndex(w=>w.id===e),p=l<0?0:l,c=xe[p],d=c.lessons.findIndex(w=>w.slug===n),h=d<0?0:d,g=c.lessons[h],C=yp(r),v=c.materials,y=!!v,E=Object.values(s).filter(Boolean).length,T=xe.reduce((w,j)=>w+j.lessons.length,0),R=Math.round(E/T*100),F=`${c.id}:${g.slug}`,k=s[F]===!0,z=c.lessons.filter(w=>s[`${c.id}:${w.slug}`]).length,U=v==null?void 0:v[C],V=h>0?{chapterIndex:p,lessonIndex:h-1}:p>0?{chapterIndex:p-1,lessonIndex:xe[p-1].lessons.length-1}:void 0,x=h<c.lessons.length-1?{chapterIndex:p,lessonIndex:h+1}:p<xe.length-1?{chapterIndex:p+1,lessonIndex:0}:void 0;if(Be.useEffect(()=>{var w;document.documentElement.dataset.theme=a,(w=document.querySelector('meta[name="theme-color"]'))==null||w.setAttribute("content",a==="light"?"#f5f6f7":"#0b1020");try{localStorage.setItem(bi,a)}catch(j){console.error("Could not save theme preference.",j)}return()=>{var j;delete document.documentElement.dataset.theme,(j=document.querySelector('meta[name="theme-color"]'))==null||j.setAttribute("content","#0b1020")}},[a]),Be.useEffect(()=>{l<0||(n!==g.slug||e!==c.id)&&t({pathname:Mn(c,g),search:r.toString()},{replace:!0})},[c,e,l,g,n,t,r]),Be.useEffect(()=>{var w;window.scrollTo(0,0),(w=document.querySelector("#course-main"))==null||w.focus({preventScroll:!0})},[e,n]),l<0)return S.jsx(Li,{to:"/course/chapter-01",replace:!0});function A(w){i(j=>{const W=new URLSearchParams(j);return W.set("resource",w),W})}function D(w,j){const W=xe[w],K=W.lessons[j];t(Mn(W,K))}function H(){const w={...s};k?delete w[F]:w[F]=!0,u(w);try{localStorage.setItem(xi,JSON.stringify(w))}catch(j){console.error("Could not save lesson progress.",j)}}const L={a:({href:w,children:j})=>{const W=w==null?void 0:w.match(/(notes|exercises|interview-questions)\.md/);if(W){const K=W[1]==="interview-questions"?"interviews":W[1]==="exercises"?"exercises":"notes";return S.jsx("button",{className:"course-markdown-link",type:"button",onClick:()=>A(K),children:j})}return w!=null&&w.startsWith("#")?S.jsx("a",{href:w,children:j}):S.jsx("a",{href:w,target:"_blank",rel:"noreferrer",children:j})}};return S.jsxs("div",{className:"course-shell","data-theme":a,children:[S.jsxs("header",{className:"course-topbar",children:[S.jsxs(Qe,{className:"course-brand",to:"/","aria-label":"Return to React TypeScript Mastery home",children:[S.jsx("span",{className:"course-brand-mark","aria-hidden":"true",children:"R"}),S.jsxs("span",{children:["React TypeScript ",S.jsx("strong",{children:"Mastery"})]})]}),S.jsxs("div",{className:"course-topbar-actions",children:[S.jsxs("span",{className:"course-status",children:[S.jsx("i",{"aria-hidden":"true"})," Free learning path"]}),S.jsxs("button",{className:"theme-toggle",type:"button","aria-label":`Switch to ${a==="light"?"dark":"light"} theme`,"aria-pressed":a==="light",onClick:()=>o(a==="light"?"dark":"light"),children:[S.jsx("span",{"aria-hidden":"true",children:a==="light"?"◐":"☼"}),a==="light"?"Dark theme":"Light theme"]})]})]}),S.jsxs("div",{className:"course-layout",children:[S.jsxs("aside",{className:"course-sidebar","aria-label":"Course chapters",children:[S.jsxs("div",{className:"course-sidebar-heading",children:[S.jsx("p",{children:"Complete learning path"}),S.jsx("h1",{children:"React.js Mastery"}),S.jsx("span",{children:"20 chapters · 8 parts"})]}),S.jsxs("div",{className:"course-progress",children:[S.jsxs("div",{className:"course-progress-copy",children:[S.jsx("span",{children:"Your course progress"}),S.jsxs("strong",{children:[R,"%"]})]}),S.jsx("div",{className:"course-progress-track",role:"progressbar","aria-label":"Course progress","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":R,children:S.jsx("span",{style:{width:`${R}%`}})}),S.jsxs("small",{children:[E," of ",T," lessons complete"]})]}),S.jsx("nav",{"aria-label":"Chapters by course part",children:Array.from(new Set(xe.map(w=>w.part))).map(w=>S.jsxs("section",{className:"course-part",children:[S.jsx("h2",{children:w}),xe.filter(j=>j.part===w).map(j=>{const W=xe.indexOf(j),K=j.lessons.filter(f=>s[`${j.id}:${f.slug}`]).length,le=!!j.materials;return S.jsxs(Qe,{className:"course-chapter-link",to:`/course/${j.id}/${j.lessons[0].slug}`,"aria-current":W===l?"page":void 0,children:[S.jsx("span",{className:"course-chapter-number",children:String(j.number).padStart(2,"0")}),S.jsx("span",{className:"course-chapter-title",children:j.title}),K===j.lessons.length?S.jsx("span",{className:"course-chapter-done","aria-label":"Chapter complete",children:"✓"}):le?null:S.jsx("span",{className:"course-coming-soon","aria-label":"Coming soon",children:"···"})]},j.id)})]},w))})]}),S.jsxs("main",{className:"course-main",id:"course-main",tabIndex:-1,children:[S.jsxs("div",{className:"course-breadcrumb",children:[S.jsx(Qe,{to:"/",children:"Course"}),S.jsx("span",{"aria-hidden":"true",children:"/"}),S.jsx("span",{children:c.part}),S.jsx("span",{"aria-hidden":"true",children:"/"}),S.jsxs("span",{children:["Chapter ",c.number]})]}),S.jsxs("div",{className:"course-chapter-heading",children:[S.jsxs("div",{children:[S.jsxs("p",{className:"course-eyebrow",children:[c.part," · CHAPTER ",String(c.number).padStart(2,"0")]}),S.jsx("h2",{children:c.title}),S.jsx("p",{children:y?`Follow the lessons in order, explore the chapter notes, and practise with the ${c.project} project.`:"This chapter is part of the course roadmap. Learning materials will be published here as the course is developed."})]}),S.jsx("span",{className:`course-published-badge ${y?"is-published":""}`,children:y?"Published":"Coming soon"})]}),S.jsxs("section",{className:"course-video","aria-label":"Lesson video",children:[g.videoId?S.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${encodeURIComponent(g.videoId)}`,title:`${g.title} — React TypeScript Mastery`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}):S.jsxs("div",{className:"course-video-placeholder",children:[S.jsx("span",{className:"course-play-icon","aria-hidden":"true",children:"▶"}),S.jsx("strong",{children:g.title}),S.jsx("p",{children:y?"The video for this lesson will appear here when it is published.":"This chapter’s lesson video and written materials are coming soon."})]}),S.jsxs("div",{className:"course-video-caption",children:[S.jsxs("span",{children:["CH ",String(c.number).padStart(2,"0")," · LESSON"," ",String(h+1).padStart(2,"0")]}),S.jsx("span",{children:"YouTube lesson"})]})]}),S.jsxs("div",{className:"course-current-lesson",children:[S.jsxs("div",{children:[S.jsx("p",{className:"course-eyebrow",children:"CURRENT LESSON"}),S.jsx("h3",{children:g.title})]}),S.jsx("span",{children:g.isProject?"Hands-on project":"Video · Notes · Practice"})]}),S.jsx("p",{className:"course-lesson-description",children:y?`Work through ${g.title.toLowerCase()} with the chapter video and notes. Pause to try each idea in your own code, then use the exercise and interview review to check your understanding.`:"This lesson is on the course roadmap. Its video, notes, and practice materials will be published here."}),S.jsxs("section",{className:"course-materials","aria-label":"Lesson learning materials",children:[S.jsx("div",{className:"course-resource-tabs","aria-label":"Chapter learning materials",children:ki.map(w=>S.jsx("button",{className:"course-resource-tab",type:"button","aria-pressed":C===w.id,disabled:!v,onClick:()=>A(w.id),children:w.label},w.id))}),S.jsx("div",{className:"course-resource-content",id:"course-resource-content",tabIndex:0,"aria-live":"polite",children:U?S.jsx("article",{className:"course-markdown",children:S.jsx(ql,{remarkPlugins:[sp],components:L,children:U})}):S.jsxs("div",{className:"course-materials-empty",children:[S.jsx("span",{"aria-hidden":"true",children:"✦"}),S.jsx("h3",{children:"Chapter materials are on the way"}),S.jsx("p",{children:"This chapter is in the public learning path. Notes, exercises, and interview questions will appear here as they are published."})]})})]}),S.jsxs("div",{className:"course-lesson-actions",children:[S.jsxs("button",{className:`course-complete-button ${k?"is-complete":""}`,type:"button","aria-pressed":k,disabled:!y,onClick:H,children:[S.jsx("span",{"aria-hidden":"true",children:k?"✓":"○"}),k?"Lesson completed":"Mark lesson complete"]}),S.jsxs("div",{children:[V?S.jsx("button",{className:"course-nav-button",type:"button",onClick:()=>D(V.chapterIndex,V.lessonIndex),children:"← Previous lesson"}):null,x?S.jsx("button",{className:"course-nav-button is-next",type:"button",onClick:()=>D(x.chapterIndex,x.lessonIndex),children:"Next lesson →"}):null]})]})]}),S.jsxs("aside",{className:"course-detail-sidebar","aria-label":"Chapter details",children:[S.jsxs("section",{className:"course-detail-section",children:[S.jsx("p",{className:"course-side-label",children:"CHAPTER CONTENTS"}),S.jsx("h2",{children:"Lessons in this chapter"}),S.jsxs("p",{className:"course-chapter-progress",children:[z," of ",c.lessons.length," complete"]}),S.jsx("div",{className:"course-lesson-list",children:c.lessons.map((w,j)=>{const W=s[`${c.id}:${w.slug}`]===!0;return S.jsxs(Qe,{className:`course-lesson-link ${W?"is-complete":""}`,to:Mn(c,w),"aria-current":w.slug===g.slug?"true":void 0,children:[S.jsx("span",{className:"course-lesson-state","aria-hidden":"true"}),S.jsxs("span",{children:[S.jsx("span",{className:"course-lesson-link-title",children:w.title}),S.jsx("small",{children:w.isProject?"Chapter project":`Lesson ${String(j+1).padStart(2,"0")}`})]})]},w.slug)})})]}),S.jsxs("section",{className:"course-detail-section",children:[S.jsx("p",{className:"course-side-label",children:"PUT IT INTO PRACTICE"}),S.jsxs("div",{className:"course-project-card",children:[S.jsx("span",{children:"CHAPTER PROJECT"}),S.jsx("h3",{children:c.project}),S.jsx("p",{children:y?`Bring this chapter’s ideas together in ${c.project}. Build it in small steps and explain the choices you make.`:"The guided project will be published alongside this chapter’s materials."}),S.jsx("button",{className:"course-project-button",type:"button",disabled:!v,onClick:()=>A("exercises"),children:y?"Open project exercise →":"Project coming soon"})]})]}),S.jsxs("section",{className:"course-detail-section",children:[S.jsx("p",{className:"course-side-label",children:"A SIMPLE STUDY ROUTINE"}),S.jsx("h2",{children:"Make each lesson stick"}),S.jsxs("ol",{className:"course-study-routine",children:[S.jsxs("li",{children:[S.jsx("strong",{children:"Watch with a question"}),S.jsx("span",{children:"Note one thing you want to understand or try."})]}),S.jsxs("li",{children:[S.jsx("strong",{children:"Code alongside"}),S.jsx("span",{children:"Pause, type it yourself, then change one detail."})]}),S.jsxs("li",{children:[S.jsx("strong",{children:"Explain it back"}),S.jsx("span",{children:"Write a short takeaway before moving on."})]})]})]})]})]})]})}export{kp as default};
