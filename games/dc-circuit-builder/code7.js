gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code = {};
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackgroundObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackgroundObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTitleObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTitleObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDHydroObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDHydroObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDWindObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDWindObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDNextObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDNextObjects2= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTextObjects1= [];
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTextObjects2= [];

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.conditionTrue_0 = {val:false};
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0 = {val:false};
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0 = {val:false};
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition2IsTrue_0 = {val:false};


gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532Generators2Code_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackObjects1});gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532Generators2Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDNextObjects1});gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532Generators2Code_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 and a half - Generators", false);
}}

}


{

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0.val = false;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0.val = false;
{
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.mapOfGDgdjs_46Lesson_95322_9532and_9532a_9532half_9532_9545_9532Generators2Code_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition0IsTrue_0.val ) {
{
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 and a half - Activity", false);
}}

}


{


{
}

}


};

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackgroundObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackgroundObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTitleObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTitleObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDHydroObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDHydroObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDWindObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDWindObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDBackObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDNextObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDNextObjects2.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTextObjects1.length = 0;
gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.GDTextObjects2.length = 0;

gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_322_32and_32a_32half_32_45_32Generators2Code'] = gdjs.Lesson_322_32and_32a_32half_32_45_32Generators2Code;
