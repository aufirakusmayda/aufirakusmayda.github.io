// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/JewelryBoxTheme/panels/LDockablePanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \t\x3cdiv class\x3d"empty-tip"\x3e${nls.emptyDocablePanelTip}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"bar" data-dojo-attach-point\x3d"barNode" data-dojo-attach-event\x3d"onclick:_onBarClick"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html require dojo/topic dijit/_TemplatedMixin dojo/text!./Panel.html jimu/BaseWidgetPanel jimu/dijit/LoadingIndicator jimu/utils".split(" "),function(d,k,a,l,c,e,f,g,m,h){return d([g,e],{baseClass:"jimu-panel jimu-ldockable-panel",templateString:f,width:0,postCreate:function(){this.inherited(arguments);this.maxWidth=this.position.width},startup:function(){var b=this.getAllWidgetConfigs(),b=Array.isArray(this.config.widgets)?this.config.widgets:
[this.config];0<b.length&&a.empty(this.containerNode);this.inherited(arguments)},onOpen:function(){this._setPostionWidthAndLeft();a.setStyle(this.domNode,{width:this.position.width+"px"});0===this.position.width?this.panelManager.minimizePanel(this):this.panelManager.maximizePanel(this)},setPosition:function(a){this.inherited(arguments);c.publish("changeMapPosition",{left:this.position.left+this.position.width})},onMaximize:function(){a.addClass(this.barNode,"max");a.removeClass(this.barNode,"min");
this.position.left=0;this.setPosition(this.position);this.inherited(arguments)},onMinimize:function(){a.removeClass(this.barNode,"max");a.addClass(this.barNode,"min");this.position.left=0-this.position.width;this.setPosition(this.position);this.inherited(arguments)},resize:function(){this._setPostionWidthAndLeft();var b=h.getPositionStyle(this.position);b.position="absolute";a.setStyle(this.domNode,b);c.publish("changeMapPosition",{left:this.position.left+this.position.width})},_setPostionWidthAndLeft:function(){if(window.appInfo.isRunInMobile){var b=
a.getMarginBox(window.jimuConfig.layoutId);this.position.width=.8*b.w;this.position.width>this.maxWidth&&(this.position.width=this.maxWidth)}else this.position.width=this.position.width},_onBarClick:function(){"maximized"===this.windowState?this.panelManager.minimizePanel(this):this.panelManager.maximizePanel(this)}})});