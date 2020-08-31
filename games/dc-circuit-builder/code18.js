gdjs.Lesson_325_32Part_324_32_45_32LoadsCode = {};
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackgroundObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackgroundObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTitleObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTitleObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDNextObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDNextObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDoutlineObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDoutlineObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTextObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTextObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDPicturePhotoshopObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDPicturePhotoshopObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol3Objects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol3Objects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol2Objects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol2Objects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbolObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbolObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDLightbulbTitleObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDLightbulbTitleObjects2= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDResistorTitleObjects1= [];
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDResistorTitleObjects2= [];

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.conditionTrue_0 = {val:false};
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95324_9532_9545_9532LoadsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackObjects1});gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95324_9532_9545_9532LoadsCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDNextObjects1});gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95324_9532_9545_9532LoadsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 3 - Wires", false);
}}

}


{

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.mapOfGDgdjs_46Lesson_95325_9532Part_95324_9532_9545_9532LoadsCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 5 - Switches", false);
}}

}


};

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTitleObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDBackObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDNextObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDNextObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDoutlineObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDoutlineObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTextObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDTextObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDPicturePhotoshopObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDPicturePhotoshopObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol3Objects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol3Objects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol2Objects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbol2Objects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbolObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDSymbolObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDLightbulbTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDLightbulbTitleObjects2.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDResistorTitleObjects1.length = 0;
gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.GDResistorTitleObjects2.length = 0;

gdjs.Lesson_325_32Part_324_32_45_32LoadsCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_325_32Part_324_32_45_32LoadsCode'] = gdjs.Lesson_325_32Part_324_32_45_32LoadsCode;
