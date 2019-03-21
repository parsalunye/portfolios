if (self.CavalryLogger) { CavalryLogger.start_js(["2IE7a"]); }

__d("DraftEffectsPerSite",["fbt","Bootloader"],(function(a,b,c,d,e,f,g){"use strict";a={handleExtensionCausedError:function(){b("Bootloader").loadModules(["SimpleXUIDialog"],function(a){a.show(g._("An extension installed in your web browser is preventing text entry from working correctly. Please disable any extensions and reload the Page."),g._("Text editing is limited"),null,{width:600})},"DraftEffectsPerSite")}};e.exports=a}),null);
__d("DraftJsEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAnonymizedDom=function(a){this.$1.anonymized_dom=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExtraParams=function(a){this.$1.extra_params=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.setSelectionState=function(a){this.$1.selection_state=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={anonymized_dom:!0,event:!0,extra_params:!0,script_path:!0,selection_state:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FBStoriesPrivacySelectorLoadingPlaceholder.react",["fbt","React","XUIButton.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{size:"medium",haschevron:!1,label:g._("Loading..."),image:b("React").createElement(b("XUISpinner.react"),null),onClick:function(a){a.stopPropagation()}}))};e.exports=a}),null);
__d("FBStoriesPrivacySelectorLoadingContainerBootloader.react",["FBStoriesGating","FBStoriesPrivacySelectorLoadingPlaceholder.react","JSResource","React","lazyLoadComponent","uuid"],(function(a,b,c,d,e,f){"use strict";var g=b("lazyLoadComponent")(b("JSResource")("FBStoriesPrivacySelectorLoadingContainer.react").__setRef("FBStoriesPrivacySelectorLoadingContainerBootloader.react")),h=b("lazyLoadComponent")(b("JSResource")("FBStoriesPrivacyRelaySelectorLoadingContainer.react").__setRef("FBStoriesPrivacySelectorLoadingContainerBootloader.react"));a=function(a){var c;c=(c=a.sessionKey)!=null?c:b("uuid")();var d=b("FBStoriesGating").shouldUseRelayPrivacySelector();return b("React").createElement(b("React").Suspense,{fallback:b("React").createElement(b("FBStoriesPrivacySelectorLoadingPlaceholder.react"),null)},d?b("React").createElement(h,babelHelpers["extends"]({},a,{sessionKey:c})):b("React").createElement(g,babelHelpers["extends"]({},a,{sessionKey:c})))};e.exports=a}),null);
__d("DraftEditorTextNode.react",["invariant","React","ReactDOM","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("UserAgent").isBrowser("IE <= 11");function i(a){return h?a.textContent==="\n":a.tagName==="BR"}var j=h?b("React").createElement("span",{key:"A","data-text":"true"},"\n"):b("React").createElement("br",{key:"A","data-text":"true"}),k=h?b("React").createElement("span",{key:"B","data-text":"true"},"\n"):b("React").createElement("br",{key:"B","data-text":"true"});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.$1=!1;return b}var d=c.prototype;d.shouldComponentUpdate=function(a){var c=b("ReactDOM").findDOMNode(this),d=a.children==="";c instanceof Element||g(0,6158);return d?!i(c):c.textContent!==a.children};d.componentDidMount=function(){this.$1=!this.$1};d.componentDidUpdate=function(){this.$1=!this.$1};d.render=function(){return this.props.children===""?this.$1?j:k:b("React").createElement("span",{key:this.$1?"A":"B","data-text":"true"},this.props.children)};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEffects",["cx","BanzaiODS","CurrentUser","DraftEffectsPerSite","fbjs/lib/CSSCore","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("CurrentUser").isEmployee()?".employee":"",i=!1;a={initODS:function(){document.addEventListener("input",function(a){a.target.nodeType===1&&b("fbjs/lib/CSSCore").hasClass(a.target,"_5rpu")&&b("BanzaiODS").bumpEntityKey("draft_js","input_events"+h)})},handleExtensionCausedError:function(){b("BanzaiODS").bumpEntityKey("draft_js","extension_caused_errors"+h);if(i||!b("gkx")("676843"))return;i=!0;b("DraftEffectsPerSite").handleExtensionCausedError()}};e.exports=a}),null);
__d("DraftJsDebugLogging",["CurrentUser","DraftJsEventsTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){"use strict";e.exports={logBlockedSelectionEvent:function(a){var c=a.anonymizedDom,d=a.extraParams;a=a.selectionState;new(b("DraftJsEventsTypedLogger"))().setEvent("blocked_selection_event").setAnonymizedDom(c).setExtraParams(d).setScriptPath(b("ScriptPath").getScriptPath()).setSelectionState(a).log()},logSelectionStateFailure:function(a){var c=a.anonymizedDom,d=a.extraParams;a=a.selectionState;b("CurrentUser").isEmployee()&&new(b("DraftJsEventsTypedLogger"))().setEvent("selection_state_failure").setAnonymizedDom(c).setExtraParams(d).setScriptPath(b("ScriptPath").getScriptPath()).setSelectionState(a).log()}}}),null);
__d("setDraftEditorSelection",["invariant","DraftEffects","DraftJsDebugLogging","containsNode","getActiveElement"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){if(!a)return"[empty]";a=i(a,b);if(a.nodeType===Node.TEXT_NODE)return a.textContent;a instanceof Element||g(0,3425);return a.outerHTML}function i(a,b){__p&&__p();var c=b!==void 0?b(a):[];if(a.nodeType===Node.TEXT_NODE){var d=a.textContent.length;return document.createTextNode("[text "+d+(c.length?" | "+c.join(", "):"")+"]")}d=a.cloneNode();d.nodeType===1&&c.length&&d.setAttribute("data-labels",c.join(", "));c=a.childNodes;for(var a=0;a<c.length;a++)d.appendChild(i(c[a],b));return d}function j(a,b){a=a;while(a)if(a instanceof Element&&a.hasAttribute("contenteditable"))return h(a,b);else a=a.parentNode;return"Could not find contentEditable parent of node"}function k(a){return a.nodeValue===null?a.childNodes.length:a.nodeValue.length}function c(c,d,e,f,g){__p&&__p();if(!b("containsNode")(document.documentElement,d))return;var h=a.getSelection(),i=c.getAnchorKey(),j=c.getAnchorOffset(),k=c.getFocusKey(),n=c.getFocusOffset(),o=c.getIsBackward();if(!h.extend&&o){var p=i,q=j;i=k;j=n;k=p;n=q;o=!1}p=i===e&&f<=j&&g>=j;q=k===e&&f<=n&&g>=n;if(p&&q){h.removeAllRanges();m(h,d,j-f,c);l(h,d,n-f,c);return}if(!o)p&&(h.removeAllRanges(),m(h,d,j-f,c)),q&&l(h,d,n-f,c);else{q&&(h.removeAllRanges(),m(h,d,n-f,c));if(p){i=h.focusNode;k=h.focusOffset;h.removeAllRanges();m(h,d,j-f,c);l(h,i,k,c)}}}function l(a,c,d,e){__p&&__p();var f=b("getActiveElement")();if(a.extend&&b("containsNode")(f,c)){d>k(c)&&b("DraftJsDebugLogging").logSelectionStateFailure({anonymizedDom:j(c),extraParams:JSON.stringify({offset:d}),selectionState:JSON.stringify(e.toJS())});var g=c===a.focusNode;try{a.extend(c,d)}catch(h){b("DraftJsDebugLogging").logSelectionStateFailure({anonymizedDom:j(c,function(b){var c=[];b===f&&c.push("active element");b===a.anchorNode&&c.push("selection anchor node");b===a.focusNode&&c.push("selection focus node");return c}),extraParams:JSON.stringify({activeElementName:f?f.nodeName:null,nodeIsFocus:c===a.focusNode,nodeWasFocus:g,selectionRangeCount:a.rangeCount,selectionAnchorNodeName:a.anchorNode?a.anchorNode.nodeName:null,selectionAnchorOffset:a.anchorOffset,selectionFocusNodeName:a.focusNode?a.focusNode.nodeName:null,selectionFocusOffset:a.focusOffset,message:h?""+h:null,offset:d},null,2),selectionState:JSON.stringify(e.toJS(),null,2)});throw h}}else{g=a.getRangeAt(0);g.setEnd(c,d);a.addRange(g.cloneRange())}}function m(a,c,d,e){var f=document.createRange();d>k(c)&&(b("DraftJsDebugLogging").logSelectionStateFailure({anonymizedDom:j(c),extraParams:JSON.stringify({offset:d}),selectionState:JSON.stringify(e.toJS())}),b("DraftEffects").handleExtensionCausedError());f.setStart(c,d);a.addRange(f)}e.exports=c}),null);
__d("DraftEditorLeaf.react",["invariant","DraftEditorTextNode.react","React","ReactDOM","setDraftEditorSelection"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){__p&&__p();var a=this.props.selection;if(a==null||!a.getHasFocus())return;var c=this.props,d=c.block,e=c.start;c=c.text;d=d.getKey();c=e+c.length;if(!a.hasEdgeWithin(d,e,c))return;var f=b("ReactDOM").findDOMNode(this);f||g(0,5590);var h=f.firstChild;h||g(0,5591);var i;h.nodeType===Node.TEXT_NODE?i=h:h.tagName==="BR"?i=f:(i=h.firstChild,i||g(0,5592));b("setDraftEditorSelection")(a,i,d,e,c)};d.shouldComponentUpdate=function(a){var c=b("ReactDOM").findDOMNode(this.leaf);c||g(0,5593);c=c.textContent!==a.text||a.styleSet!==this.props.styleSet||a.forceSelection;return c};d.componentDidUpdate=function(){this.$1()};d.componentDidMount=function(){this.$1()};d.render=function(){__p&&__p();var a=this,c=this.props.block,d=this.props.text;d.endsWith("\n")&&this.props.isLast&&(d+="\n");var e=this.props,f=e.customStyleMap,g=e.customStyleFn,h=e.offsetKey;e=e.styleSet;var i=e.reduce(function(a,b){var c={};b=f[b];b!==void 0&&a.textDecoration!==b.textDecoration&&(c.textDecoration=[a.textDecoration,b.textDecoration].join(" ").trim());return Object.assign(a,b,c)},{});if(g){g=g(e,c);i=Object.assign(i,g)}return b("React").createElement("span",{"data-offset-key":h,ref:function(b){return a.leaf=b},style:i},b("React").createElement(b("DraftEditorTextNode.react"),null,d))};return c}(b("React").Component);e.exports=a}),null);
__d("DraftOffsetKey",[],(function(a,b,c,d,e,f){"use strict";var g="-";a={encode:function(a,b,c){return a+g+b+g+c},decode:function(a){a=a.split(g).reverse();var b=a[0],c=a[1];a=a.slice(2);return{blockKey:a.reverse().join(g),decoratorKey:parseInt(c,10),leafKey:parseInt(b,10)}}};e.exports=a}),null);
__d("DraftEditorBlock.react",["cx","invariant","DraftEditorLeaf.react","DraftOffsetKey","React","ReactDOM","Scroll","Style","UnicodeBidi","UnicodeBidiDirection","getElementPosition","getScrollPosition","getViewportDimensions","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=10,j=function(a,b){return a.getAnchorKey()===b||a.getFocusKey()===b};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){return this.props.block!==a.block||this.props.tree!==a.tree||this.props.direction!==a.direction||j(a.selection,a.block.getKey())&&a.forceSelection};d.componentDidMount=function(){__p&&__p();var a=this.props.selection,c=a.getEndKey();if(!a.getHasFocus()||c!==this.props.block.getKey())return;a=b("ReactDOM").findDOMNode(this);c=b("Style").getScrollParent(a);var d=b("getScrollPosition")(c);if(c===window){var e=b("getElementPosition")(a);e=e.y+e.height;var f=b("getViewportDimensions")().height;e=e-f;e>0&&window.scrollTo(d.x,d.y+e+i)}else{a instanceof HTMLElement||h(0,4852);f=a.offsetHeight+a.offsetTop;a=c.offsetHeight+d.y;e=f-a;e>0&&b("Scroll").setTop(c,b("Scroll").getTop(c)+e+i)}};d.$1=function(){__p&&__p();var a=this,c=this.props.block,d=c.getKey(),e=c.getText(),f=this.props.tree.size-1,g=j(this.props.selection,d);return this.props.tree.map(function(h,i){__p&&__p();var j=h.get("leaves"),k=j.size-1,l=j.map(function(j,l){var m=b("DraftOffsetKey").encode(d,i,l),h=j.get("start");j=j.get("end");return b("React").createElement(b("DraftEditorLeaf.react"),{key:m,offsetKey:m,block:c,start:h,selection:g?a.props.selection:null,forceSelection:a.props.forceSelection,text:e.slice(h,j),styleSet:c.getInlineStyleAt(h),customStyleMap:a.props.customStyleMap,customStyleFn:a.props.customStyleFn,isLast:i===f&&l===k})}).toArray(),m=h.get("decoratorKey");if(m==null)return l;if(!a.props.decorator)return l;var n=b("nullthrows")(a.props.decorator),o=n.getComponentForKey(m);if(!o)return l;n=n.getPropsForKey(m);m=b("DraftOffsetKey").encode(d,i,0);var p=j.first().get("start");j=j.last().get("end");var q=e.slice(p,j);h=c.getEntityAt(h.get("start"));var r=b("UnicodeBidiDirection").getHTMLDirIfDifferent(b("UnicodeBidi").getDirection(q),a.props.direction);q={contentState:a.props.contentState,decoratedText:q,dir:r,key:m,start:p,end:j,blockKey:d,entityKey:h,offsetKey:m};return b("React").createElement(o,babelHelpers["extends"]({},n,q),l)}).toArray()};d.render=function(){var a=this.props,c=a.direction;a=a.offsetKey;c="_1mf"+(c==="LTR"?" _1mj":"")+(c==="RTL"?" _1mk":"");return b("React").createElement("div",{"data-offset-key":a,className:c},this.$1())};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEditorContents-core.react",["cx","DraftEditorBlock.react","DraftOffsetKey","React","joinClasses","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a,b,c,d){return(a==="unordered-list-item"?"_3kpz":"")+(a==="ordered-list-item"?" _3kp_":"")+(c?" _3kq0":"")+(b===0?" _3kq1":"")+(b===1?" _3kq2":"")+(b===2?" _3kq3":"")+(b===3?" _3kq4":"")+(b>=4?" _3kq5":"")+(d==="LTR"?" _3kq6":"")+(d==="RTL"?" _3kq7":"")};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){__p&&__p();var b=this.props.editorState;a=a.editorState;var c=b.getDirectionMap(),d=a.getDirectionMap();if(c!==d)return!0;c=b.getSelection().getHasFocus();d=a.getSelection().getHasFocus();if(c!==d)return!0;c=a.getNativelyRenderedContent();d=b.isInCompositionMode();var e=a.isInCompositionMode();if(b===a||c!==null&&a.getCurrentContent()===c||d&&e)return!1;c=b.getCurrentContent();var f=a.getCurrentContent();b=b.getDecorator();var g=a.getDecorator();return d!==e||c!==f||b!==g||a.mustForceSelection()};d.render=function(){__p&&__p();var a=this.props,c=a.blockRenderMap,d=a.blockRendererFn,e=a.blockStyleFn,f=a.customStyleMap,g=a.customStyleFn,i=a.editorState,j=a.editorKey;a=a.textDirectionality;var k=i.getCurrentContent(),l=i.getSelection(),m=i.mustForceSelection(),n=i.getDecorator(),o=b("nullthrows")(i.getDirectionMap()),p=k.getBlocksAsArray(),q=[],r=null,s=null;for(var t=0;t<p.length;t++){var u=p[t],v=u.getKey(),w=u.getType(),x=d(u),y=void 0,z=void 0,A=void 0;x&&(y=x.component,z=x.props,A=x.editable);x=a?a:o.get(v);var B=b("DraftOffsetKey").encode(v,0,0);z={contentState:k,block:u,blockProps:z,blockStyleFn:e,customStyleMap:f,customStyleFn:g,decorator:n,direction:x,forceSelection:m,key:v,offsetKey:B,selection:l,tree:i.getBlockTree(v)};var C=c.get(w)||c.get("unstyled"),D=C.wrapper;C=C.element||c.get("unstyled").element;var E=u.getDepth(),F="";e&&(F=e(u));if(C==="li"){var G=s!==D||r===null||E>r;F=b("joinClasses")(F,h(w,E,G,x))}w=y||b("DraftEditorBlock.react");E={className:F,"data-block":!0,"data-editor":j,"data-offset-key":B,key:v};A!==void 0&&(E=babelHelpers["extends"]({},E,{contentEditable:A,suppressContentEditableWarning:!0}));G=b("React").createElement(C,E,b("React").createElement(w,z));q.push({block:G,wrapperTemplate:D,key:v,offsetKey:B});D?r=u.getDepth():r=null;s=D}x=[];for(var y=0;y<q.length;){F=q[y];if(F.wrapperTemplate){A=[];do A.push(q[y].block),y++;while(y<q.length&&q[y].wrapperTemplate===F.wrapperTemplate);C=b("React").cloneElement(F.wrapperTemplate,{key:F.key+"-wrap","data-offset-key":F.offsetKey},A);x.push(C)}else x.push(F.block),y++}return b("React").createElement("div",{"data-contents":"true"},x)};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEditorDecoratedLeaves.react",["DraftOffsetKey","React","UnicodeBidi","UnicodeBidiDirection"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.block,d=a.children,e=a.contentState,f=a.decorator,g=a.decoratorKey,h=a.direction,i=a.leafSet;a=a.text;var j=c.getKey(),k=i.get("leaves"),l=f.getComponentForKey(g);f=f.getPropsForKey(g);j=b("DraftOffsetKey").encode(j,parseInt(g,10),0);g=a.slice(k.first().get("start"),k.last().get("end"));a=b("UnicodeBidiDirection").getHTMLDirIfDifferent(b("UnicodeBidi").getDirection(g),h);return b("React").createElement(l,babelHelpers["extends"]({},f,{contentState:e,decoratedText:g,dir:a,key:j,entityKey:c.getEntityAt(i.get("start")),offsetKey:j}),d)};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEditorNode.react",["cx","DraftEditorDecoratedLeaves.react","DraftEditorLeaf.react","DraftOffsetKey","immutable","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();b("immutable").List;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.block,d=a.contentState,e=a.customStyleFn,f=a.customStyleMap,g=a.decorator,h=a.direction,i=a.forceSelection,j=a.hasSelection,k=a.selection;a=a.tree;var l=c.getKey(),m=c.getText(),n=a.size-1;a=this.props.children||a.map(function(a,o){var p=a.get("decoratorKey"),q=a.get("leaves"),r=q.size-1;q=q.map(function(a,d){var g=b("DraftOffsetKey").encode(l,o,d),h=a.get("start");a=a.get("end");return b("React").createElement(b("DraftEditorLeaf.react"),{key:g,offsetKey:g,block:c,start:h,selection:j?k:null,forceSelection:i,text:m.slice(h,a),styleSet:c.getInlineStyleAt(h),customStyleMap:f,customStyleFn:e,isLast:p===n&&d===r})}).toArray();return!p||!g?q:b("React").createElement(b("DraftEditorDecoratedLeaves.react"),{block:c,children:q,contentState:d,decorator:g,decoratorKey:p,direction:h,leafSet:a,text:m,key:o})}).toArray();return b("React").createElement("div",{"data-offset-key":b("DraftOffsetKey").encode(l,0,0),className:"_1mf"+(h==="LTR"?" _1mj":"")+(h==="RTL"?" _1mk":"")},a)};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEditorBlockNode.react",["invariant","DraftEditorNode.react","DraftOffsetKey","React","ReactDOM","Scroll","Style","getElementPosition","getScrollPosition","getViewportDimensions","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=10;b("immutable").List;var i=function(a,b){return a.getAnchorKey()===b||a.getFocusKey()===b},j=function(a,b){var c=a.getNextSiblingKey();return c?b.getBlockForKey(c).getType()===a.getType():!1},k=function(a,c,d){__p&&__p();var e=[];for(var f=d.reverse(),g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;if(i.type!==c)break;e.push(i)}d.splice(d.indexOf(e[0]),e.length+1);i=e.reverse();c=i[0].key;d.push(b("React").cloneElement(a,{key:c+"-wrap","data-offset-key":b("DraftOffsetKey").encode(c,0,0)},i));return d},l=function(a,b){a=b.get(a.getType())||b.get("unstyled");var c=a.wrapper;a=a.element||b.get("unstyled").element;return{Element:a,wrapperTemplate:c}},m=function(a,b){b=b(a);if(!b)return{};a=b.component;var c=b.props;b=b.editable;return{CustomComponent:a,customProps:c,customEditable:b}},n=function(a,b,c,d,e){b={"data-block":!0,"data-editor":b,"data-offset-key":c,key:a.getKey()};c=d(a);c&&(b.className=c);e.customEditable!==void 0&&(b=babelHelpers["extends"]({},b,{contentEditable:e.customEditable,suppressContentEditableWarning:!0}));return b};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){var b=this.props,c=b.block,d=b.direction;b=b.tree;var e=!c.getChildKeys().isEmpty();c=c!==a.block||b!==a.tree||d!==a.direction||i(a.selection,a.block.getKey())&&a.forceSelection;return e||c};d.componentDidMount=function(){__p&&__p();var a=this.props.selection,c=a.getEndKey();if(!a.getHasFocus()||c!==this.props.block.getKey())return;a=b("ReactDOM").findDOMNode(this);c=b("Style").getScrollParent(a);var d=b("getScrollPosition")(c);if(c===window){var e=b("getElementPosition")(a);e=e.y+e.height;var f=b("getViewportDimensions")().height;e=e-f;e>0&&window.scrollTo(d.x,d.y+e+h)}else{a instanceof HTMLElement||g(0,4852);f=a.offsetHeight+a.offsetTop;a=c.offsetHeight+d.y;e=f-a;e>0&&b("Scroll").setTop(c,b("Scroll").getTop(c)+e+h)}};d.render=function(){__p&&__p();var a=this,d=this.props,e=d.block,f=d.blockRenderMap,g=d.blockRendererFn,h=d.blockStyleFn,o=d.contentState,p=d.decorator,q=d.editorKey,r=d.editorState,s=d.customStyleFn,t=d.customStyleMap,u=d.direction,v=d.forceSelection,w=d.selection;d=d.tree;var x=null;e.children.size&&(x=e.children.reduce(function(p,s){var d=b("DraftOffsetKey").encode(s,0,0),t=o.getBlockForKey(s),e=m(t,g),i=e.CustomComponent||c,u=l(t,f),v=u.Element;u=u.wrapperTemplate;var w=n(t,q,d,h,e);s=babelHelpers["extends"]({},a.props,{tree:r.getBlockTree(s),blockProps:e.customProps,offsetKey:d,block:t});p.push(b("React").createElement(v,w,b("React").createElement(i,s)));if(!u||j(t,o))return p;k(u,v,p);return p},[]));var y=e.getKey(),z=b("DraftOffsetKey").encode(y,0,0),A=m(e,g),B=A.CustomComponent;B=B!=null?b("React").createElement(B,babelHelpers["extends"]({},this.props,{tree:r.getBlockTree(y),blockProps:A.customProps,offsetKey:z,block:e})):b("React").createElement(b("DraftEditorNode.react"),{block:e,children:x,contentState:o,customStyleFn:s,customStyleMap:t,decorator:p,direction:u,forceSelection:v,hasSelection:i(w,y),selection:w,tree:d});if(e.getParentKey())return B;x=l(e,f);s=x.Element;t=n(e,q,z,h,A);return b("React").createElement(s,t,B)};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEditorContentsExperimental.react",["DraftEditorBlockNode.react","DraftOffsetKey","React","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){__p&&__p();var b=this.props.editorState;a=a.editorState;var c=b.getDirectionMap(),d=a.getDirectionMap();if(c!==d)return!0;c=b.getSelection().getHasFocus();d=a.getSelection().getHasFocus();if(c!==d)return!0;c=a.getNativelyRenderedContent();d=b.isInCompositionMode();var e=a.isInCompositionMode();if(b===a||c!==null&&a.getCurrentContent()===c||d&&e)return!1;c=b.getCurrentContent();var f=a.getCurrentContent();b=b.getDecorator();var g=a.getDecorator();return d!==e||c!==f||b!==g||a.mustForceSelection()};d.render=function(){__p&&__p();var a=this.props,c=a.blockRenderMap,d=a.blockRendererFn,e=a.blockStyleFn,f=a.customStyleMap,g=a.customStyleFn,h=a.editorState,i=a.editorKey;a=a.textDirectionality;var j=h.getCurrentContent(),k=h.getSelection(),l=h.mustForceSelection(),m=h.getDecorator(),n=b("nullthrows")(h.getDirectionMap()),o=j.getBlocksAsArray();o=o[0];var p=[];o=o;while(o){var q=o.getKey(),r={blockRenderMap:c,blockRendererFn:d,blockStyleFn:e,contentState:j,customStyleFn:g,customStyleMap:f,decorator:m,editorKey:i,editorState:h,forceSelection:l,selection:k,block:o,direction:a?a:n.get(q),tree:h.getBlockTree(q)},s=c.get(o.getType())||c.get("unstyled");s=s.wrapper;p.push({block:b("React").createElement(b("DraftEditorBlockNode.react"),babelHelpers["extends"]({key:q},r)),wrapperTemplate:s,key:q,offsetKey:b("DraftOffsetKey").encode(q,0,0)});r=o.getNextSiblingKey();o=r?j.getBlockForKey(r):null}s=[];for(var q=0;q<p.length;){r=p[q];if(r.wrapperTemplate){c=[];do c.push(p[q].block),q++;while(q<p.length&&p[q].wrapperTemplate===r.wrapperTemplate);d=b("React").cloneElement(r.wrapperTemplate,{key:r.key+"-wrap","data-offset-key":r.offsetKey},c);s.push(d)}else s.push(r.block),q++}return b("React").createElement("div",{"data-contents":"true"},s)};return c}(b("React").Component);e.exports=a}),null);
__d("DraftEditorContents.react",["gkx","DraftEditorContentsExperimental.react","DraftEditorContents-core.react"],(function(a,b,c,d,e,f){"use strict";a=b("gkx")("676842");e.exports=a?b("DraftEditorContentsExperimental.react"):b("DraftEditorContents-core.react")}),null);
__d("splitTextIntoTextBlocks",[],(function(a,b,c,d,e,f){"use strict";var g=/\r\n?|\n/g;function a(a){return a.split(g)}e.exports=a}),null);
__d("DefaultDraftBlockRenderMap",["cx","immutable","React"],(function(a,b,c,d,e,f,g){"use strict";a=b("immutable").Map;c=b("React").createElement("ul",{className:"_1bv0"});d=b("React").createElement("ol",{className:"_1bv1"});f=b("React").createElement("pre",{className:"_1bv2"});g=a({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:c},"ordered-list-item":{element:"li",wrapper:d},blockquote:{element:"blockquote"},atomic:{element:"figure"},"code-block":{element:"pre",wrapper:f},unstyled:{element:"div",aliasedElements:["p"]}});e.exports=g}),null);