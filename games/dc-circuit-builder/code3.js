gdjs.Lesson_321_32_45_32ElectricityCode = {};
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackgroundObjects1= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackgroundObjects2= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDTitleObjects1= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDTitleObjects2= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackObjects1= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackObjects2= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDNextObjects1= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDNextObjects2= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDoutlineObjects1= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDoutlineObjects2= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDTextObjects1= [];
gdjs.Lesson_321_32_45_32ElectricityCode.GDTextObjects2= [];

gdjs.Lesson_321_32_45_32ElectricityCode.conditionTrue_0 = {val:false};
gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_321_32_45_32ElectricityCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_321_32_45_32ElectricityCode.mapOfGDgdjs_46Lesson_95321_9532_9545_9532ElectricityCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_321_32_45_32ElectricityCode.GDBackObjects1});gdjs.Lesson_321_32_45_32ElectricityCode.mapOfGDgdjs_46Lesson_95321_9532_9545_9532ElectricityCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_321_32_45_32ElectricityCode.GDNextObjects1});gdjs.Lesson_321_32_45_32ElectricityCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_321_32_45_32ElectricityCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0.val = false;
gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_321_32_45_32ElectricityCode.mapOfGDgdjs_46Lesson_95321_9532_9545_9532ElectricityCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "All Lessons", false);
}}

}


{

gdjs.Lesson_321_32_45_32ElectricityCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0.val = false;
gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_321_32_45_32ElectricityCode.mapOfGDgdjs_46Lesson_95321_9532_9545_9532ElectricityCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_321_32_45_32ElectricityCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_321_32_45_32ElectricityCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 2 - Static", false);
}}

}


};

gdjs.Lesson_321_32_45_32ElectricityCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_321_32_45_32ElectricityCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDTitleObjects1.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDTitleObjects2.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackObjects1.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDBackObjects2.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDNextObjects1.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDNextObjects2.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDoutlineObjects1.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDoutlineObjects2.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDTextObjects1.length = 0;
gdjs.Lesson_321_32_45_32ElectricityCode.GDTextObjects2.length = 0;

gdjs.Lesson_321_32_45_32ElectricityCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_321_32_45_32ElectricityCode'] = gdjs.Lesson_321_32_45_32ElectricityCode;
