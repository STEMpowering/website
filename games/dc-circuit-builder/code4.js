gdjs.Lesson_322_32_45_32CurrentCode = {};
gdjs.Lesson_322_32_45_32CurrentCode.GDBackgroundObjects1= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDBackgroundObjects2= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDTitleObjects1= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDTitleObjects2= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDPowerLinesObjects1= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDPowerLinesObjects2= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDBackObjects1= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDBackObjects2= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDNextObjects1= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDNextObjects2= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDTextObjects1= [];
gdjs.Lesson_322_32_45_32CurrentCode.GDTextObjects2= [];

gdjs.Lesson_322_32_45_32CurrentCode.conditionTrue_0 = {val:false};
gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_322_32_45_32CurrentCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_322_32_45_32CurrentCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532CurrentCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_322_32_45_32CurrentCode.GDBackObjects1});gdjs.Lesson_322_32_45_32CurrentCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532CurrentCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_322_32_45_32CurrentCode.GDNextObjects1});gdjs.Lesson_322_32_45_32CurrentCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_322_32_45_32CurrentCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32_45_32CurrentCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532CurrentCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 - Static", false);
}}

}


{

gdjs.Lesson_322_32_45_32CurrentCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32_45_32CurrentCode.mapOfGDgdjs_46Lesson_95322_9532_9545_9532CurrentCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32_45_32CurrentCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32_45_32CurrentCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 and a half - Generators", false);
}}

}


{


{
}

}


};

gdjs.Lesson_322_32_45_32CurrentCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_322_32_45_32CurrentCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDTitleObjects1.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDTitleObjects2.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDPowerLinesObjects1.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDPowerLinesObjects2.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDBackObjects1.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDBackObjects2.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDNextObjects1.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDNextObjects2.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDTextObjects1.length = 0;
gdjs.Lesson_322_32_45_32CurrentCode.GDTextObjects2.length = 0;

gdjs.Lesson_322_32_45_32CurrentCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_322_32_45_32CurrentCode'] = gdjs.Lesson_322_32_45_32CurrentCode;
