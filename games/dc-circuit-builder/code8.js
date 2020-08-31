gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode = {};
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackgroundObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackgroundObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTitleObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTitleObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDCarObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDCarObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDEngineObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDEngineObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDNextObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDNextObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTextObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTextObjects2= [];

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.conditionTrue_0 = {val:false};
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532GeneratorsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackObjects1});gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532GeneratorsCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDNextObjects1});gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532GeneratorsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 - Current", false);
}}

}


{

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532GeneratorsCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 and a half - Generators2", false);
}}

}


{


{
}

}


};

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTitleObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTitleObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDCarObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDCarObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDEngineObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDEngineObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDBackObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDNextObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDNextObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTextObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.GDTextObjects2.length = 0;

gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_322_32and_32a_32half_32_45_32GeneratorsCode'] = gdjs.Lesson_322_32and_32a_32half_32_45_32GeneratorsCode;
