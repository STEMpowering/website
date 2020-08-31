gdjs.Lesson_322_32_45_32StaticCode = {};
gdjs.Lesson_322_32_45_32StaticCode.GDBackgroundObjects1= [];
gdjs.Lesson_322_32_45_32StaticCode.GDBackgroundObjects2= [];
gdjs.Lesson_322_32_45_32StaticCode.GDTitleObjects1= [];
gdjs.Lesson_322_32_45_32StaticCode.GDTitleObjects2= [];
gdjs.Lesson_322_32_45_32StaticCode.GDLightningObjects1= [];
gdjs.Lesson_322_32_45_32StaticCode.GDLightningObjects2= [];
gdjs.Lesson_322_32_45_32StaticCode.GDBackObjects1= [];
gdjs.Lesson_322_32_45_32StaticCode.GDBackObjects2= [];
gdjs.Lesson_322_32_45_32StaticCode.GDNextObjects1= [];
gdjs.Lesson_322_32_45_32StaticCode.GDNextObjects2= [];
gdjs.Lesson_322_32_45_32StaticCode.GDTextObjects1= [];
gdjs.Lesson_322_32_45_32StaticCode.GDTextObjects2= [];

gdjs.Lesson_322_32_45_32StaticCode.conditionTrue_0 = {val:false};
gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_322_32_45_32StaticCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_322_32_45_32StaticCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532StaticCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_322_32_45_32StaticCode.GDBackObjects1});gdjs.Lesson_322_32_45_32StaticCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532StaticCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_322_32_45_32StaticCode.GDNextObjects1});gdjs.Lesson_322_32_45_32StaticCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_322_32_45_32StaticCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32_45_32StaticCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532StaticCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 1 - Electricity", false);
}}

}


{

gdjs.Lesson_322_32_45_32StaticCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32_45_32StaticCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532StaticCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32_45_32StaticCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32_45_32StaticCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 - Current", false);
}}

}


{


{
}

}


};

gdjs.Lesson_322_32_45_32StaticCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_322_32_45_32StaticCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDTitleObjects1.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDTitleObjects2.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDLightningObjects1.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDLightningObjects2.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDBackObjects1.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDBackObjects2.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDNextObjects1.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDNextObjects2.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDTextObjects1.length = 0;
gdjs.Lesson_322_32_45_32StaticCode.GDTextObjects2.length = 0;

gdjs.Lesson_322_32_45_32StaticCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_322_32_45_32StaticCode'] = gdjs.Lesson_322_32_45_32StaticCode;
