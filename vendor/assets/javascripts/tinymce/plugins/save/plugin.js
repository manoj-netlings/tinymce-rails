tinymce.PluginManager.add("save",function(a){function b(){var b;return b=tinymce.DOM.getParent(a.id,"form"),!a.getParam("save_enablewhendirty",!0)||a.isDirty()?(tinymce.triggerSave(),a.getParam("save_onsavecallback")?(a.execCallback("save_onsavecallback",a),void a.nodeChanged()):void(b?(a.setDirty(!1),b.onsubmit&&!b.onsubmit()||("function"==typeof b.submit?b.submit():c(a.translate("Error: Form submit field collision."))),a.nodeChanged()):c(a.translate("Error: No form element found.")))):void 0}function c(b){a.notificationManager.open({text:b,type:"error"})}function d(){var b=tinymce.trim(a.startContent);return a.getParam("save_oncancelcallback")?void a.execCallback("save_oncancelcallback",a):(a.setContent(b),a.undoManager.clear(),void a.nodeChanged())}function e(){var b=this;a.on("nodeChange dirty",function(){b.disabled(a.getParam("save_enablewhendirty",!0)&&!a.isDirty())})}a.addCommand("mceSave",b),a.addCommand("mceCancel",d),a.addButton("save",{icon:"save",text:"Save",cmd:"mceSave",disabled:!0,onPostRender:e}),a.addButton("cancel",{text:"Cancel",icon:!1,cmd:"mceCancel",disabled:!0,onPostRender:e}),a.addShortcut("Meta+S","","mceSave")});