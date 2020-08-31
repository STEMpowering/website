gdjs.Lesson_325_32_45_32CircuitsCode = {};
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackgroundObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackgroundObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDTitleObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDTitleObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDNextObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDNextObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDoutlineObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDoutlineObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDTextObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDTextObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDPictureObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDPictureObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDSwitchObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDSwitchObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDConductorObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDConductorObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDCellObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDCellObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDLoadObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDLoadObjects2= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDDiagramTitleObjects1= [];
gdjs.Lesson_325_32_45_32CircuitsCode.GDDiagramTitleObjects2= [];

gdjs.Lesson_325_32_45_32CircuitsCode.conditionTrue_0 = {val:false};
gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_325_32_45_32CircuitsCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_325_32_45_32CircuitsCode.mapOfGDgdjs_46Lesson_95325_9532_9545_9532CircuitsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_325_32_45_32CircuitsCode.GDBackObjects1});gdjs.Lesson_325_32_45_32CircuitsCode.mapOfGDgdjs_46Lesson_95325_9532_9545_9532CircuitsCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_325_32_45_32CircuitsCode.GDNextObjects1});gdjs.Lesson_325_32_45_32CircuitsCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_325_32_45_32CircuitsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32_45_32CircuitsCode.mapOfGDgdjs_46Lesson_95325_9532_9545_9532CircuitsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 4 - Conductors & Insulators", false);
}}

}


{

gdjs.Lesson_325_32_45_32CircuitsCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_325_32_45_32CircuitsCode.mapOfGDgdjs_46Lesson_95325_9532_9545_9532CircuitsCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_325_32_45_32CircuitsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_325_32_45_32CircuitsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 5 Part 2 - Cells", false);
}}

}


};

gdjs.Lesson_325_32_45_32CircuitsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_325_32_45_32CircuitsCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDTitleObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDTitleObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDBackObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDNextObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDNextObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDoutlineObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDoutlineObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDTextObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDTextObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDPictureObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDPictureObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDSwitchObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDSwitchObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDConductorObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDConductorObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDCellObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDCellObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDLoadObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDLoadObjects2.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDDiagramTitleObjects1.length = 0;
gdjs.Lesson_325_32_45_32CircuitsCode.GDDiagramTitleObjects2.length = 0;

gdjs.Lesson_325_32_45_32CircuitsCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_325_32_45_32CircuitsCode'] = gdjs.Lesson_325_32_45_32CircuitsCode;
