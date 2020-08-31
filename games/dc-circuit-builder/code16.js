gdjs.Lesson_325_32Part_322_32_45_32CellsCode = {};
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackgroundObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackgroundObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTitleObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTitleObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDNextObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDNextObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDoutlineObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDoutlineObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTextObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTextObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDPictureObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDPictureObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolObjects2= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolTitleObjects1= [];
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolTitleObjects2= [];

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.conditionTrue_0 = {val:false};
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_325_32Part_322_32_45_32CellsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95322_9532_9545_9532CellsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackObjects1});gdjs.Lesson_325_32Part_322_32_45_32CellsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95322_9532_9545_9532CellsCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDNextObjects1});gdjs.Lesson_325_32Part_322_32_45_32CellsCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_322_32_45_32CellsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95322_9532_9545_9532CellsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 - Circuits", false);
}}

}


{

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_322_32_45_32CellsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95322_9532_9545_9532CellsCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_322_32_45_32CellsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 3 - Wires", false);
}}

}


};

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTitleObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDBackObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDNextObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDNextObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDoutlineObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDoutlineObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTextObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDTextObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDPictureObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDPictureObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolObjects2.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_322_32_45_32CellsCode.GDSymbolTitleObjects2.length = 0;

gdjs.Lesson_325_32Part_322_32_45_32CellsCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_325_32Part_322_32_45_32CellsCode'] = gdjs.Lesson_325_32Part_322_32_45_32CellsCode;
