gdjs.Lesson_324_32_45_32ConductorsCode = {};
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackgroundObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackgroundObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDTitleObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDTitleObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDPictureObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDPictureObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDNextObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDNextObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDText1Objects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDText1Objects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSpoonObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSpoonObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperPennyObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperPennyObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldBarObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldBarObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelBarObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelBarObjects2= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSilverSpoonObjects1= [];
gdjs.Lesson_324_32_45_32ConductorsCode.GDSilverSpoonObjects2= [];

gdjs.Lesson_324_32_45_32ConductorsCode.conditionTrue_0 = {val:false};
gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_324_32_45_32ConductorsCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_324_32_45_32ConductorsCode.mapOfGDgdjs_46Lesson_95324_9532_9545_9532ConductorsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_324_32_45_32ConductorsCode.GDBackObjects1});gdjs.Lesson_324_32_45_32ConductorsCode.mapOfGDgdjs_46Lesson_95324_9532_9545_9532ConductorsCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_324_32_45_32ConductorsCode.GDNextObjects1});gdjs.Lesson_324_32_45_32ConductorsCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_324_32_45_32ConductorsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_324_32_45_32ConductorsCode.mapOfGDgdjs_46Lesson_95324_9532_9545_9532ConductorsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 3 - Ohm's Law", false);
}}

}


{

gdjs.Lesson_324_32_45_32ConductorsCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_324_32_45_32ConductorsCode.mapOfGDgdjs_46Lesson_95324_9532_9545_9532ConductorsCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_324_32_45_32ConductorsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_324_32_45_32ConductorsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 4 Part 2 - Insulators", false);
}}

}


{


{
}

}


};

gdjs.Lesson_324_32_45_32ConductorsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_324_32_45_32ConductorsCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDTitleObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDTitleObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDPictureObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDPictureObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDBackObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDNextObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDNextObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDText1Objects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDText1Objects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSpoonObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSpoonObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperPennyObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDCopperPennyObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldBarObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDGoldBarObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelBarObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSteelBarObjects2.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSilverSpoonObjects1.length = 0;
gdjs.Lesson_324_32_45_32ConductorsCode.GDSilverSpoonObjects2.length = 0;

gdjs.Lesson_324_32_45_32ConductorsCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_324_32_45_32ConductorsCode'] = gdjs.Lesson_324_32_45_32ConductorsCode;
