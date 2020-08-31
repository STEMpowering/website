gdjs.Activity_322Code = {};
gdjs.Activity_322Code.GDBackgroundObjects1= [];
gdjs.Activity_322Code.GDBackgroundObjects2= [];
gdjs.Activity_322Code.GDTitleObjects1= [];
gdjs.Activity_322Code.GDTitleObjects2= [];
gdjs.Activity_322Code.GDPictureObjects1= [];
gdjs.Activity_322Code.GDPictureObjects2= [];
gdjs.Activity_322Code.GDBackObjects1= [];
gdjs.Activity_322Code.GDBackObjects2= [];
gdjs.Activity_322Code.GDNextObjects1= [];
gdjs.Activity_322Code.GDNextObjects2= [];
gdjs.Activity_322Code.GDText1Objects1= [];
gdjs.Activity_322Code.GDText1Objects2= [];
gdjs.Activity_322Code.GDWoodenPostObjects1= [];
gdjs.Activity_322Code.GDWoodenPostObjects2= [];
gdjs.Activity_322Code.GDRubberTireObjects1= [];
gdjs.Activity_322Code.GDRubberTireObjects2= [];
gdjs.Activity_322Code.GDGlassCupObjects1= [];
gdjs.Activity_322Code.GDGlassCupObjects2= [];
gdjs.Activity_322Code.GDDiamondObjects1= [];
gdjs.Activity_322Code.GDDiamondObjects2= [];
gdjs.Activity_322Code.GDGlassCupTitleObjects1= [];
gdjs.Activity_322Code.GDGlassCupTitleObjects2= [];
gdjs.Activity_322Code.GDRubberTireTitleObjects1= [];
gdjs.Activity_322Code.GDRubberTireTitleObjects2= [];
gdjs.Activity_322Code.GDDiamondTitleObjects1= [];
gdjs.Activity_322Code.GDDiamondTitleObjects2= [];
gdjs.Activity_322Code.GDWoodenPostTitleObjects1= [];
gdjs.Activity_322Code.GDWoodenPostTitleObjects2= [];

gdjs.Activity_322Code.conditionTrue_0 = {val:false};
gdjs.Activity_322Code.condition0IsTrue_0 = {val:false};
gdjs.Activity_322Code.condition1IsTrue_0 = {val:false};
gdjs.Activity_322Code.condition2IsTrue_0 = {val:false};


gdjs.Activity_322Code.mapOfGDgdjs_46Activity_95322Code_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Activity_322Code.GDBackObjects1});gdjs.Activity_322Code.mapOfGDgdjs_46Activity_95322Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Activity_322Code.GDNextObjects1});gdjs.Activity_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.Activity_322Code.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Activity_322Code.condition0IsTrue_0.val = false;
gdjs.Activity_322Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Activity_322Code.mapOfGDgdjs_46Activity_95322Code_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Activity_322Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity 1", false);
}}

}


{

gdjs.Activity_322Code.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Activity_322Code.condition0IsTrue_0.val = false;
gdjs.Activity_322Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Activity_322Code.mapOfGDgdjs_46Activity_95322Code_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Activity_322Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_322Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity 3", false);
}}

}


{


{
}

}


};

gdjs.Activity_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Activity_322Code.GDBackgroundObjects1.length = 0;
gdjs.Activity_322Code.GDBackgroundObjects2.length = 0;
gdjs.Activity_322Code.GDTitleObjects1.length = 0;
gdjs.Activity_322Code.GDTitleObjects2.length = 0;
gdjs.Activity_322Code.GDPictureObjects1.length = 0;
gdjs.Activity_322Code.GDPictureObjects2.length = 0;
gdjs.Activity_322Code.GDBackObjects1.length = 0;
gdjs.Activity_322Code.GDBackObjects2.length = 0;
gdjs.Activity_322Code.GDNextObjects1.length = 0;
gdjs.Activity_322Code.GDNextObjects2.length = 0;
gdjs.Activity_322Code.GDText1Objects1.length = 0;
gdjs.Activity_322Code.GDText1Objects2.length = 0;
gdjs.Activity_322Code.GDWoodenPostObjects1.length = 0;
gdjs.Activity_322Code.GDWoodenPostObjects2.length = 0;
gdjs.Activity_322Code.GDRubberTireObjects1.length = 0;
gdjs.Activity_322Code.GDRubberTireObjects2.length = 0;
gdjs.Activity_322Code.GDGlassCupObjects1.length = 0;
gdjs.Activity_322Code.GDGlassCupObjects2.length = 0;
gdjs.Activity_322Code.GDDiamondObjects1.length = 0;
gdjs.Activity_322Code.GDDiamondObjects2.length = 0;
gdjs.Activity_322Code.GDGlassCupTitleObjects1.length = 0;
gdjs.Activity_322Code.GDGlassCupTitleObjects2.length = 0;
gdjs.Activity_322Code.GDRubberTireTitleObjects1.length = 0;
gdjs.Activity_322Code.GDRubberTireTitleObjects2.length = 0;
gdjs.Activity_322Code.GDDiamondTitleObjects1.length = 0;
gdjs.Activity_322Code.GDDiamondTitleObjects2.length = 0;
gdjs.Activity_322Code.GDWoodenPostTitleObjects1.length = 0;
gdjs.Activity_322Code.GDWoodenPostTitleObjects2.length = 0;

gdjs.Activity_322Code.eventsList0(runtimeScene);
return;

}

gdjs['Activity_322Code'] = gdjs.Activity_322Code;
