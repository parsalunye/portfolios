if (self.CavalryLogger) { CavalryLogger.start_js(["9T+Kt"]); }

__d("XLiveVideoLoadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/video/load/",{video_id:{type:"FBID",required:!0}})}),null);
__d("notificationListRendererIsStoryOnlyLiveVideoNotification",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.renderer_data;return a==null?!1:a.__typename==="LiveVideoNotificationRendererData"&&!!a.bucket_data}e.exports=a}),null);
__d("notificationListRendererOpenNotification",["AsyncRequest","Bootloader","NotificationURI","PageTransitions","URI","VideoChainingCaller","XLiveVideoLoadController","notificationListRendererIsStoryOnlyLiveVideoNotification"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=c.renderer_data;if(d==null)return;if(!b("notificationListRendererIsStoryOnlyLiveVideoNotification")(c)&&(a.metaKey||a.ctrlKey||a.button===1))return;if(d.__typename==="LiveVideoNotificationRendererData"){a.preventDefault();d=b("XLiveVideoLoadController").getURIBuilder().setFBID("video_id",d.video_id).getURI();d=new(b("AsyncRequest"))(d).setHandler(function(d){d.payload?g(a,c):b("PageTransitions").go(c.url)});d.send()}}function g(a,b){var c=b.renderer_data;if(c==null)return;c.bucket_data?h(a,c):c.can_render_in_tahoe&&i(a,c,b)}function h(a,c){b("Bootloader").loadModules(["FBStoriesLiveNotificationHandler"],function(a){a.renderLiveStory(c)},"notificationListRendererOpenNotification")}function i(a,c,d){b("Bootloader").loadModules(["TahoeController"],function(a){var e=b("NotificationURI").localize(new(b("URI"))(d.url)),f=c.video_channel_caller;a.openFromVideoLink(new(b("URI"))(e),{channelID:c.video_channel_id,caller:f?(a=b("VideoChainingCaller"))!=null?a[f]:a:null})},"notificationListRendererOpenNotification")}e.exports=a}),null);
__d("NotificationBeeperItemContents.react",["cx","Animation","AsyncRequest","Bootloader","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","NotificationBeeperItemCloseButton.react","NotificationInterpolator","NotificationURI","NotificationUserActions","React","ReactDOM","TextWithEntities.react","Timestamp.react","URI","notificationListRendererOpenNotification"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.isLiveVideo=null,d.onClick=function(a){__p&&__p();d.$1();d.props.onHide();if(a.button===1||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;var c=d.props.notification;b("notificationListRendererOpenNotification")(a,c);if(a.isDefaultPrevented()===!0)return;var e=c.primerAttributes;if(e&&(e.rel==="async"||e.rel==="async-post")){var f=new(b("AsyncRequest"))(e.ajaxify||c.url);e.rel==="async-post"&&f.setMethod("POST");f.send();a.preventDefault()}else e&&e.rel==="theater"?(a.persist(),b("Bootloader").loadModules(["PhotoSnowlift"],function(b){b.bootstrap(e.ajaxify||c.url,a.currentTarget)},"NotificationBeeperItemContents.react"),a.preventDefault()):e&&(e.rel==="dialog"||e.rel==="dialog-post")&&(b("Bootloader").loadModules(["AsyncDialog"],function(b){b.bootstrap(e.ajaxify||c.url,a.currentTarget,"dialog")},"NotificationBeeperItemContents.react"),a.preventDefault())},d.onClose=function(){d.$1(),d.props.onHide()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){b("NotificationUserActions").markNotificationsAsRead([this.props.notification.alert_id])};d.$2=function(){new(b("Animation"))(b("ReactDOM").findDOMNode(this.refs.inner)).from("opacity","0").to("opacity","1").duration(200).go()};d.$3=function(){var a=this.$4();a=JSON.parse(a);return a.content_id};d.$5=function(){if(this.isLiveVideo===null){var a=this.$4();this.isLiveVideo=a.indexOf("live_video")!==-1}return!!this.isLiveVideo};d.$4=function(){return this.props.notification.tracking||"{}"};d.componentDidMount=function(){var a=this;this.props.onReadyToHide(this.props.notification.alert_id);this.$5()&&b("Bootloader").loadModules(["VideoPlayerMetaData","PhotoSnowliftVideoNode"],function(b,c){c=a.$3();c&&b.genVideoData(c)},"NotificationBeeperItemContents.react")};d.componentDidUpdate=function(a){(a.notification.alert_id!==this.props.notification.alert_id||a.notification.creation_time!==this.props.notification.creation_time)&&(this.$2(),this.props.onReadyToHide(this.props.notification.alert_id))};d.render=function(){var a=this.props.notification,c=a.thumbnail?a.thumbnail.uri:null,d=a.icon?a.icon.uri:null,e=b("NotificationURI").localize(new(b("URI"))(a.url));return b("React").createElement("div",{ref:"inner",className:this.props.className},b("React").createElement(b("NotificationBeeperItemCloseButton.react"),{onClick:this.onClose}),b("React").createElement("a",{href:e,onClick:this.onClick,className:"_3soi"},b("React").createElement(b("ImageBlock.react"),{className:"_3soj",spacing:"medium"},b("React").createElement(b("FBProfilePhotoShadow.react"),{className:"_2yt7"},b("React").createElement(b("Image.react"),{src:c,className:"_3sok"+(c?"":" hidden_elem")})),b("React").createElement("div",{className:"_3sol"},b("React").createElement(b("TextWithEntities.react"),{renderEmoticons:!0,renderEmoji:!0,interpolator:b("NotificationInterpolator"),ranges:a.title.ranges,aggregatedranges:a.title.aggregated_ranges,text:a.title.text}),b("React").createElement(b("ImageBlock.react"),{className:"_3som"},b("React").createElement(b("Image.react"),{className:"_1x8t"+(d?"":" hidden_elem"),src:d}),b("React").createElement(b("Timestamp.react"),{time:a.timestamp.time,text:a.timestamp.text,verbose:a.timestamp.verbose}))))))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeperItem.react",["cx","CSSFade","NotificationBeeperConst","NotificationBeeperItemContents.react","NotificationBeeperItemRenderersList","React","ReactDOM","Style","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("NotificationBeeperConst").FADE_OUT_LENGTH;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={encounteredException:!1,fadedIn:!1,hidden:!1},c.$3=function(){c.setState({hidden:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidCatch=function(){this.props.onReadyToHide(this.props.notification.alert_id),this.setState(function(a){return babelHelpers["extends"]({},a,{encounteredException:!0})})};d.componentDidMount=function(){var a=this;b("setTimeoutAcrossTransitions")(function(){a.setState({fadedIn:!0})},50);this.props.onInserted(this.props.notification.alert_id)};d.componentWillUnmount=function(){this.$1&&this.$1.cancel()};d.render=function(){var a=this;if(this.state.encounteredException)return null;var c=this.props.notification,d=c.renderer_data;c=c.tracking;d=this.$4(d);return b("React").createElement("li",{className:this.state.hidden?"hidden_elem":"",ref:function(b){return a.$2=b},"data-gt":c},b("React").createElement(d,{className:"_3sod"+(this.state.fadedIn?" _3soe":""),notification:this.props.notification,onHide:this.$3,onReadyToHide:this.props.onReadyToHide,onPreventHide:this.props.onPreventHide}))};d.componentDidUpdate=function(a,c,d){if(!this.$2)return;a=b("ReactDOM").findDOMNode(this.$2);if(!a)return;this.props.fadingOut?(this.$1=b("CSSFade").hide(a,{callback:this.$3,duration:h}),a.style.transitionDuration="0ms"):(this.$1&&(this.$1.cancel(),this.$1=void 0),b("Style").set(a,"opacity","1"))};d.$4=function(a){return a&&a.__typename==="LiveVideoNotificationRendererData"&&a.video_id==null?b("NotificationBeeperItemContents.react"):b("NotificationBeeperItemRenderersList")[a&&a.__typename]||b("NotificationBeeperItemContents.react")};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationImpressions",["AsyncSignal","NotificationTokens","URI"],(function(a,b,c,d,e,f){var g="/ajax/notifications/impression.php";function a(a,c){var d={ref:c};b("NotificationTokens").untokenizeIDs(a).forEach(function(a,b){d["alert_ids["+b+"]"]=a});new(b("AsyncSignal"))(new(b("URI"))(g).getQualifiedURI().toString(),d).send()}e.exports={log:a}}),null);
__d("NotificationBeeper.react",["cx","Arbiter","ChannelConstants","FacebookWebNotificationsSubscription","NotificationBeeperConst","NotificationBeeperItem.react","NotificationConstants","NotificationImpressions","NotificationSound","NotificationUpdates","NotificationUserActions","NotifTestIDs","React","SubscriptionsHandler","clearTimeout","setTimeoutAcrossTransitions","shield"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("NotificationBeeperConst").ACTIVE_DELAY_LONG,i=b("NotificationBeeperConst").BeepStates,j=b("NotificationBeeperConst").FADE_OUT_LENGTH,k=b("NotificationBeeperConst").IDLE_DELAY,l="beeper";a=b("NotificationConstants").PayloadSourceType;var m=a.CLIENT,n=a.OTHER_APPLICATION;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={beeps:{},fading:!1,hovering:!1,soundEnabled:d.props.soundEnabled},d.onMouseEnter=function(){d.$2&&b("clearTimeout")(d.$2);var a=[],c=d.state.beeps;Object.keys(c).forEach(function(b){c[b].state!=i.PENDING?a.push(b):c[b].state=i.RENDERED});b("NotificationUserActions").markNotificationsAsSeen(a);d.setState({hovering:!0,fading:!1,beeps:c})},d.onMouseLeave=function(){d.$5(h),d.setState({hovering:!1})},d.$6=function(a){d.state.hovering||d.$5(),d.state.soundEnabled&&d.state.beeps[a].shouldPlaySound&&(d.$3||(d.$3=new(b("NotificationSound"))(d.props.soundPath)),d.$3.play(a)),d.props.shouldLogImpressions&&b("NotificationImpressions").log([a],l)},d.onReadyToHide=function(a,b){d.setState(function(b){var c=babelHelpers["extends"]({},b.beeps);c[a]=babelHelpers["extends"]({},c[a],{state:i.READY_TO_HIDE});return babelHelpers["extends"]({},b,{beeps:c})}),d.$2||d.$5(b)},d.$8=function(a){d.setState(function(b){var c=babelHelpers["extends"]({},b.beeps);c[a]=babelHelpers["extends"]({},c[a],{state:i.RENDERED});return babelHelpers["extends"]({},b,{beeps:c})})},d.$7=function(){d.$2=null,d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.READY_TO_HIDE&&(b[a]=babelHelpers["extends"]({},b[a],{state:i.FADING_OUT}))});return babelHelpers["extends"]({},a,{beeps:b,fading:!0})}),b("setTimeoutAcrossTransitions")(b("shield")(d.$9,babelHelpers.assertThisInitialized(d)),j)},d.$9=function(){__p&&__p();if(!d.state.fading)return;d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.FADING_OUT&&delete b[a]});return babelHelpers["extends"]({},a,{beeps:b,fading:!1})});b("setTimeoutAcrossTransitions")(function(){d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.PENDING&&(b[a]=babelHelpers["extends"]({},b[a],{state:i.RENDERED}))});return babelHelpers["extends"]({},a,{beeps:b})})})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){__p&&__p();var a=this,c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("NotificationUpdates").subscribe("update-notifications",function(b,c){if(c.payloadsource===n||c.payloadsource===m){b=c.nodes;b&&b.length&&a.handleBeepChanges(a.$4(b))}}),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notif_sound_pref_changed"),function(b,c){a.setState({soundEnabled:c.obj.enabled})}));c.addSubscriptions(b("FacebookWebNotificationsSubscription").subscribe({event:"NEW_BEEPER",callback:function(b){var c=b.notification;b=b.should_play_sound;if(c!==null){var d;a.handleBeepChanges((d={},d[c.alert_id]={notification:c,shouldPlaySound:b},d))}}}));this.$1=c;b("Arbiter").inform("NotificationBeeper/mounted",null,"persistent")};d.componentWillUnmount=function(){this.$1&&this.$1.release(),this.$1=null};d.$5=function(a){this.$2&&b("clearTimeout")(this.$2),this.$2=b("setTimeoutAcrossTransitions")(b("shield")(this.$7,this),a==null?k:a)};d.handleBeepChanges=function(a){var b=this.state.fading?i.PENDING:i.RENDERED,c=!1,d=babelHelpers["extends"]({},this.state.beeps);Object.keys(a).reverse().forEach(function(e){var f=a[e],g=d[e];(!g||g.notification.alert_id!==f.notification.alert_id||g.notification.creation_time!==f.notification.creation_time)&&(g&&(c=!0,delete d[e]),d[e]=babelHelpers["extends"]({},f,{state:b}))});c&&this.$5();this.setState({beeps:d})};d.render=function(){var a=this,c=this.state.beeps,d=[];Object.keys(c).reverse().forEach(function(e){var f=c[e];if(f.state==i.PENDING)return;d.push(b("React").createElement(b("NotificationBeeperItem.react"),{key:e,fadingOut:a.state.fading&&f.state==i.FADING_OUT,notification:f.notification,onInserted:a.$6,onReadyToHide:a.onReadyToHide,onPreventHide:a.$8}))},this);var e=d.length>0;e=(e?"":"hidden_elem")+" _50d1";return b("React").createElement("ul",{ref:"container",className:e,"data-gt":this.props.tracking,"data-testid":b("NotifTestIDs").BEEPER_LIST,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},d)};d.$4=function(a){return a.reduce(function(a,b){a[b.alert_id]={notification:b,shouldPlaySound:!1};return a},{})};return c}(b("React").Component);e.exports=c}),null);
__d("NotificationBeeperContainer",["NotificationBeeper.react","React","ReactDOM"],(function(a,b,c,d,e,f){a={renderBeeper:function(a,c){b("ReactDOM").render(b("React").createElement(b("NotificationBeeper.react"),a),c)}};e.exports=a}),null);
__d("LiveVideoBeeperItemContents.react",["BootloadOnRender.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("BootloadOnRender.react"),{loader:b("JSResource")("LiveVideoBeeperItemContentsImpl.react").__setRef("LiveVideoBeeperItemContents.react"),placeholder:b("React").createElement("div",null),component:b("React").createElement(b("LazyComponent.react"),babelHelpers["extends"]({},this.props,{ref:"itemContents"}))})};return c}(b("React").Component);e.exports=a}),null);
__d("XWorkUserSettingsUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/user_settings/",{})}),null);
__d("DockNubs",["AsyncRequest","CSS","WorkUserSettings","XWorkUserSettingsUpdateController"],(function(a,b,c,d,e,f){__p&&__p();var g="hidden_elem",h=b("WorkUserSettings").hideDock,i=null,j=[],k={init:function(a){i=a,k.registerSubscriber(k._updateCssClasses)},isVisible:function(){return!h},registerSubscriber:function(a){j.push(a);a(h);return{unsubscribe:function(){k._unregisterSubscriber(a)}}},_unregisterSubscriber:function(a){j=j.filter(function(b){return b!==a})},_updateSubscribers:function(){j.forEach(function(a){return a(h)})},toggleVisibility:function(){if(!i)return;h=!h;this._saveVisibilityPreferences(h);this._updateSubscribers()},_saveVisibilityPreferences:function(a){var c=b("XWorkUserSettingsUpdateController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setMethod("POST").setData({hide_dock:a}).send()},_updateCssClasses:function(){if(!i)return;h?b("CSS").addClass(i,g):b("CSS").removeClass(i,g)}};e.exports=k}),null);
__d("KeyboardShortcutFlyout.react",["cx","fbt","Bootloader","KeyboardShortcuts","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={shortcutInfos:b("KeyboardShortcuts").getShortcutInfos()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:"_yqu _2ph_ _2pim"},b("React").createElement("table",{className:"_67br"},b("React").createElement("tbody",null,this.$2())))};d.componentDidMount=function(){var a=this;this.$1=b("KeyboardShortcuts").subscribe(["cleanup","token_added"],function(){a.setState({shortcutInfos:b("KeyboardShortcuts").getShortcutInfos()})});b("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut_flyout_shown").log()},"KeyboardShortcutFlyout.react")};d.componentWillUnmount=function(){b("KeyboardShortcuts").unsubscribe(this.$1)};d.$2=function(){return this.state.shortcutInfos.length?this.state.shortcutInfos.map(this.$3):h._("No shortcuts on this Page")};d.$3=function(a,c){return b("React").createElement("tr",{key:"shortcut_info_"+c,className:"_3-12"},b("React").createElement("th",{className:"_2pin _52ju"},a.displayKeys.map(function(c,a){return b("React").createElement("span",{className:"_3-28 _2e42 _653d _52jv",key:a},c)})),b("React").createElement("td",{className:"_2pin _2pii"},a.description))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("NubController",["csx","ArbiterMixin","Dock"],(function(a,b,c,d,e,f,g){__p&&__p();function a(){}Object.assign(a.prototype,b("ArbiterMixin"),{init:function(a){this.el=a;this.nubButton=a.querySelector(".fbNubButton");this.closeButton=a.querySelector("._2dv8");b("Dock").registerNubController(a,this);this.closeButton&&this.closeButton.addEventListener("click",this.hide.bind(this));return this},buttonContentChanged:function(){this.inform("nub/button/content-changed")},flyoutContentChanged:function(){this.inform("nub/flyout/content-changed")},hide:function(){b("Dock").hide(this.el)},show:function(){b("Dock").show(this.el)}});e.exports=a}),null);
__d("ReactNub",["csx","DOM","Focus","NubController","Parent","React","ReactDOM","getActiveElement"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.$ReactNub4=function(){b("ReactDOM").unmountComponentAtNode(e.$ReactNub1),b("Focus").set(e.$ReactNub3),e.$ReactNub3!==b("getActiveElement")()&&b("Focus").set(e.nubButton)};e.$ReactNub5=function(){e.$ReactNub3=b("getActiveElement")();var a=e.$ReactNub2;b("ReactDOM").render(b("React").createElement(a,null),e.$ReactNub1);b("Focus").set(e.closeButton)};e.$ReactNub1=c;e.$ReactNub2=d;d=b("Parent").bySelector(c,"._50-v");a.prototype.init.call(babelHelpers.assertThisInitialized(e),d);b("DOM").empty(c);e.subscribe("hide",e.$ReactNub4);e.subscribe("show",e.$ReactNub5);return e}return c}(b("NubController"));e.exports=a}),null);
__d("NotificationJewelReminderLoader",["promiseDone"],(function(a,b,c,d,e,f){e.exports={init:function(a,c){b("promiseDone")(a.load(),function(a){a.init(c)})}}}),null);