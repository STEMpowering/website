gdjs.Main_32PageCode = {};
gdjs.Main_32PageCode.GDActivitiesObjects1= [];
gdjs.Main_32PageCode.GDActivitiesObjects2= [];
gdjs.Main_32PageCode.GDSandboxObjects1= [];
gdjs.Main_32PageCode.GDSandboxObjects2= [];
gdjs.Main_32PageCode.GDLessonsObjects1= [];
gdjs.Main_32PageCode.GDLessonsObjects2= [];
gdjs.Main_32PageCode.GDTitleObjects1= [];
gdjs.Main_32PageCode.GDTitleObjects2= [];
gdjs.Main_32PageCode.GDBackgroundObjects1= [];
gdjs.Main_32PageCode.GDBackgroundObjects2= [];
gdjs.Main_32PageCode.GDlinkObjects1= [];
gdjs.Main_32PageCode.GDlinkObjects2= [];

gdjs.Main_32PageCode.conditionTrue_0 = {val:false};
gdjs.Main_32PageCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32PageCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32PageCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDLessonsObjects1Objects = Hashtable.newFrom({"Lessons": gdjs.Main_32PageCode.GDLessonsObjects1});gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.Main_32PageCode.GDlinkObjects1});gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDSandboxObjects1Objects = Hashtable.newFrom({"Sandbox": gdjs.Main_32PageCode.GDSandboxObjects1});gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDActivitiesObjects1Objects = Hashtable.newFrom({"Activities": gdjs.Main_32PageCode.GDActivitiesObjects1});gdjs.Main_32PageCode.eventsList0 = function(runtimeScene) {

{

gdjs.Main_32PageCode.GDLessonsObjects1.createFrom(runtimeScene.getObjects("Lessons"));

gdjs.Main_32PageCode.condition0IsTrue_0.val = false;
gdjs.Main_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDLessonsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "All Lessons", false);
}}

}


{

gdjs.Main_32PageCode.GDlinkObjects1.createFrom(runtimeScene.getObjects("link"));

gdjs.Main_32PageCode.condition0IsTrue_0.val = false;
gdjs.Main_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDlinkObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://www.stempowering.ca/", runtimeScene);
}}

}


{

gdjs.Main_32PageCode.GDSandboxObjects1.createFrom(runtimeScene.getObjects("Sandbox"));

gdjs.Main_32PageCode.condition0IsTrue_0.val = false;
gdjs.Main_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDSandboxObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sandbox", false);
}}

}


{

gdjs.Main_32PageCode.GDActivitiesObjects1.createFrom(runtimeScene.getObjects("Activities"));

gdjs.Main_32PageCode.condition0IsTrue_0.val = false;
gdjs.Main_32PageCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32PageCode.mapOfGDgdjs_46Main_9532PageCode_46GDActivitiesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32PageCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32PageCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32PageCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity 1", false);
}}

}


};

gdjs.Main_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32PageCode.GDActivitiesObjects1.length = 0;
gdjs.Main_32PageCode.GDActivitiesObjects2.length = 0;
gdjs.Main_32PageCode.GDSandboxObjects1.length = 0;
gdjs.Main_32PageCode.GDSandboxObjects2.length = 0;
gdjs.Main_32PageCode.GDLessonsObjects1.length = 0;
gdjs.Main_32PageCode.GDLessonsObjects2.length = 0;
gdjs.Main_32PageCode.GDTitleObjects1.length = 0;
gdjs.Main_32PageCode.GDTitleObjects2.length = 0;
gdjs.Main_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32PageCode.GDlinkObjects1.length = 0;
gdjs.Main_32PageCode.GDlinkObjects2.length = 0;

gdjs.Main_32PageCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32PageCode'] = gdjs.Main_32PageCode;
