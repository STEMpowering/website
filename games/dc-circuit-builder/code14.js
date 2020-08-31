gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode = {};
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackgroundObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackgroundObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDTitleObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDTitleObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDPictureObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDPictureObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDNextObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDNextObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDText1Objects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDText1Objects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupTitleObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupTitleObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireTitleObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireTitleObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondTitleObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondTitleObjects2= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostTitleObjects1= [];
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostTitleObjects2= [];

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.conditionTrue_0 = {val:false};
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0 = {val:false};
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0 = {val:false};
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition2IsTrue_0 = {val:false};


gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.mapOfGDgdjs_46Lesson_95324_9532Part_95322_9532_9545_9532InsulatorsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackObjects1});gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.mapOfGDgdjs_46Lesson_95324_9532Part_95322_9532_9545_9532InsulatorsCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDNextObjects1});gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.eventsList0 = function(runtimeScene) {

{

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.mapOfGDgdjs_46Lesson_95324_9532Part_95322_9532_9545_9532InsulatorsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 4 - Conductors", false);
}}

}


{

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0.val = false;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0.val = false;
{
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.mapOfGDgdjs_46Lesson_95324_9532Part_95322_9532_9545_9532InsulatorsCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition0IsTrue_0.val ) {
{
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lesson 4 Part 2 - Activity Instructions", false);
}}

}


{


{
}

}


};

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackgroundObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackgroundObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDTitleObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDTitleObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDPictureObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDPictureObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDBackObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDNextObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDNextObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDText1Objects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDText1Objects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupTitleObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDGlassCupTitleObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireTitleObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDRubberTireTitleObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondTitleObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDDiamondTitleObjects2.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostTitleObjects1.length = 0;
gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.GDWoodenPostTitleObjects2.length = 0;

gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode.eventsList0(runtimeScene);
return;

}

gdjs['Lesson_324_32Part_322_32_45_32InsulatorsCode'] = gdjs.Lesson_324_32Part_322_32_45_32InsulatorsCode;
