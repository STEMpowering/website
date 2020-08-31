gdjs.Lesson_325_32Part_323_32_45_32WiresCode = {};
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackgroundObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackgroundObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTitleObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTitleObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDNextObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDNextObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDoutlineObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDoutlineObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTextObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTextObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDPictureObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDPictureObjects2= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDSymbolObjects1= [];
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDSymbolObjects2= [];

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.conditionTrue_0 = {val:false};
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_325_32Part_323_32_45_32WiresCode.mapOfGDgdjs_46Lesson_95325_9532Part_95323_9532_9545_9532WiresCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackObjects1});gdjs.Lesson_325_32Part_323_32_45_32WiresCode.mapOfGDgdjs_46Lesson_95325_9532Part_95323_9532_9545_9532WiresCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDNextObjects1});gdjs.Lesson_325_32Part_323_32_45_32WiresCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_323_32_45_32WiresCode.mapOfGDgdjs_46Lesson_95325_9532Part_95323_9532_9545_9532WiresCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 2 - Cells", false);
}}

}


{

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_323_32_45_32WiresCode.mapOfGDgdjs_46Lesson_95325_9532Part_95323_9532_9545_9532WiresCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_323_32_45_32WiresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 4 - Loads", false);
}}

}


};

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTitleObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDBackObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDNextObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDNextObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDoutlineObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDoutlineObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTextObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDTextObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDPictureObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDPictureObjects2.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDSymbolObjects1.length = 0;
gdjs.Lesson_325_32Part_323_32_45_32WiresCode.GDSymbolObjects2.length = 0;

gdjs.Lesson_325_32Part_323_32_45_32WiresCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_325_32Part_323_32_45_32WiresCode'] = gdjs.Lesson_325_32Part_323_32_45_32WiresCode;
