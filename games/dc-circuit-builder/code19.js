gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode = {};
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackgroundObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackgroundObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTitleObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTitleObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDNextObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDNextObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDoutlineObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDoutlineObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTextObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTextObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop2Objects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop2Objects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop1Objects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop1Objects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDSymbolObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDSymbolObjects2= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPictureTitleObjects1= [];
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPictureTitleObjects2= [];

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.conditionTrue_0 = {val:false};
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.mapOfGDgdjs_46Lesson_95325_9532Part_95325_9532_9545_9532SwitchesCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackObjects1});gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.mapOfGDgdjs_46Lesson_95325_9532Part_95325_9532_9545_9532SwitchesCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDNextObjects1});gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.mapOfGDgdjs_46Lesson_95325_9532Part_95325_9532_9545_9532SwitchesCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 4 - Loads", false);
}}

}


{

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.mapOfGDgdjs_46Lesson_95325_9532Part_95325_9532_9545_9532SwitchesCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 - Simulator", false);
}}

}


};

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTitleObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDBackObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDNextObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDNextObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDoutlineObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDoutlineObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTextObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDTextObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop2Objects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop2Objects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop1Objects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPicturePhotoshop1Objects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDSymbolObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDSymbolObjects2.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPictureTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.GDPictureTitleObjects2.length = 0;

gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_325_32Part_325_32_45_32SwitchesCode'] = gdjs.Lesson_325_32Part_325_32_45_32SwitchesCode;
