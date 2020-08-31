gdjs.Activity_321Code = {};
gdjs.Activity_321Code.GDBackgroundObjects1= [];
gdjs.Activity_321Code.GDBackgroundObjects2= [];
gdjs.Activity_321Code.GDBackgroundObjects3= [];
gdjs.Activity_321Code.GDTitleObjects1= [];
gdjs.Activity_321Code.GDTitleObjects2= [];
gdjs.Activity_321Code.GDTitleObjects3= [];
gdjs.Activity_321Code.GDPowerInverterObjects1= [];
gdjs.Activity_321Code.GDPowerInverterObjects2= [];
gdjs.Activity_321Code.GDPowerInverterObjects3= [];
gdjs.Activity_321Code.GDGearBoxObjects1= [];
gdjs.Activity_321Code.GDGearBoxObjects2= [];
gdjs.Activity_321Code.GDGearBoxObjects3= [];
gdjs.Activity_321Code.GDGridObjects1= [];
gdjs.Activity_321Code.GDGridObjects2= [];
gdjs.Activity_321Code.GDGridObjects3= [];
gdjs.Activity_321Code.GDGeneratorObjects1= [];
gdjs.Activity_321Code.GDGeneratorObjects2= [];
gdjs.Activity_321Code.GDGeneratorObjects3= [];
gdjs.Activity_321Code.GDTurbineObjects1= [];
gdjs.Activity_321Code.GDTurbineObjects2= [];
gdjs.Activity_321Code.GDTurbineObjects3= [];
gdjs.Activity_321Code.GDWindObjects1= [];
gdjs.Activity_321Code.GDWindObjects2= [];
gdjs.Activity_321Code.GDWindObjects3= [];
gdjs.Activity_321Code.GDBackObjects1= [];
gdjs.Activity_321Code.GDBackObjects2= [];
gdjs.Activity_321Code.GDBackObjects3= [];
gdjs.Activity_321Code.GDNextObjects1= [];
gdjs.Activity_321Code.GDNextObjects2= [];
gdjs.Activity_321Code.GDNextObjects3= [];
gdjs.Activity_321Code.GDHintObjects1= [];
gdjs.Activity_321Code.GDHintObjects2= [];
gdjs.Activity_321Code.GDHintObjects3= [];
gdjs.Activity_321Code.GDTextObjects1= [];
gdjs.Activity_321Code.GDTextObjects2= [];
gdjs.Activity_321Code.GDTextObjects3= [];
gdjs.Activity_321Code.GDGridHitBoxObjects1= [];
gdjs.Activity_321Code.GDGridHitBoxObjects2= [];
gdjs.Activity_321Code.GDGridHitBoxObjects3= [];
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects1= [];
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2= [];
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects3= [];
gdjs.Activity_321Code.GDGeneratorHitBoxObjects1= [];
gdjs.Activity_321Code.GDGeneratorHitBoxObjects2= [];
gdjs.Activity_321Code.GDGeneratorHitBoxObjects3= [];
gdjs.Activity_321Code.GDGearBoxHitBoxObjects1= [];
gdjs.Activity_321Code.GDGearBoxHitBoxObjects2= [];
gdjs.Activity_321Code.GDGearBoxHitBoxObjects3= [];
gdjs.Activity_321Code.GDTurbineHitBoxObjects1= [];
gdjs.Activity_321Code.GDTurbineHitBoxObjects2= [];
gdjs.Activity_321Code.GDTurbineHitBoxObjects3= [];
gdjs.Activity_321Code.GDBadZone2Objects1= [];
gdjs.Activity_321Code.GDBadZone2Objects2= [];
gdjs.Activity_321Code.GDBadZone2Objects3= [];
gdjs.Activity_321Code.GDBadZone1Objects1= [];
gdjs.Activity_321Code.GDBadZone1Objects2= [];
gdjs.Activity_321Code.GDBadZone1Objects3= [];

gdjs.Activity_321Code.conditionTrue_0 = {val:false};
gdjs.Activity_321Code.condition0IsTrue_0 = {val:false};
gdjs.Activity_321Code.condition1IsTrue_0 = {val:false};
gdjs.Activity_321Code.condition2IsTrue_0 = {val:false};


gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Activity_321Code.GDBackObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.Activity_321Code.GDNextObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects2Objects = Hashtable.newFrom({"TurbineHitBox": gdjs.Activity_321Code.GDTurbineHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects = Hashtable.newFrom({"GridHitBox": gdjs.Activity_321Code.GDGridHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects = Hashtable.newFrom({"PowerInvertHitBox": gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects = Hashtable.newFrom({"GeneratorHitBox": gdjs.Activity_321Code.GDGeneratorHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects1Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects1Objects = Hashtable.newFrom({"GearBoxHitBox": gdjs.Activity_321Code.GDGearBoxHitBoxObjects1});gdjs.Activity_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDTurbineObjects2.createFrom(runtimeScene.getObjects("Turbine"));
gdjs.Activity_321Code.GDTurbineHitBoxObjects2.createFrom(runtimeScene.getObjects("TurbineHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects2 */
/* Reuse gdjs.Activity_321Code.GDTurbineHitBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].setPosition(107,207);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineHitBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineHitBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.Activity_321Code.GDGridHitBoxObjects2.createFrom(runtimeScene.getObjects("GridHitBox"));
gdjs.Activity_321Code.GDTurbineObjects2.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].setPosition(509,205);
}
}}

}


{

gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2.createFrom(runtimeScene.getObjects("PowerInvertHitBox"));
gdjs.Activity_321Code.GDTurbineObjects2.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].setPosition(509,205);
}
}}

}


{

gdjs.Activity_321Code.GDGeneratorHitBoxObjects2.createFrom(runtimeScene.getObjects("GeneratorHitBox"));
gdjs.Activity_321Code.GDTurbineObjects2.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].setPosition(509,205);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxHitBoxObjects1.createFrom(runtimeScene.getObjects("GearBoxHitBox"));
gdjs.Activity_321Code.GDTurbineObjects1.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects1[i].setPosition(509,205);
}
}}

}


};gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects = Hashtable.newFrom({"GearBoxHitBox": gdjs.Activity_321Code.GDGearBoxHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects = Hashtable.newFrom({"PowerInvertHitBox": gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects = Hashtable.newFrom({"GridHitBox": gdjs.Activity_321Code.GDGridHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects2Objects = Hashtable.newFrom({"TurbineHitBox": gdjs.Activity_321Code.GDTurbineHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects1Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects1Objects = Hashtable.newFrom({"GeneratorHitBox": gdjs.Activity_321Code.GDGeneratorHitBoxObjects1});gdjs.Activity_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDGearBoxObjects2.createFrom(runtimeScene.getObjects("GearBox"));
gdjs.Activity_321Code.GDGearBoxHitBoxObjects2.createFrom(runtimeScene.getObjects("GearBoxHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects2 */
/* Reuse gdjs.Activity_321Code.GDGearBoxHitBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].setPosition(164,320);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxHitBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxHitBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxObjects2.createFrom(runtimeScene.getObjects("GearBox"));
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2.createFrom(runtimeScene.getObjects("PowerInvertHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].setPosition(592,416);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxObjects2.createFrom(runtimeScene.getObjects("GearBox"));
gdjs.Activity_321Code.GDGridHitBoxObjects2.createFrom(runtimeScene.getObjects("GridHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].setPosition(592,416);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxObjects2.createFrom(runtimeScene.getObjects("GearBox"));
gdjs.Activity_321Code.GDTurbineHitBoxObjects2.createFrom(runtimeScene.getObjects("TurbineHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].setPosition(592,416);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxObjects1.createFrom(runtimeScene.getObjects("GearBox"));
gdjs.Activity_321Code.GDGeneratorHitBoxObjects1.createFrom(runtimeScene.getObjects("GeneratorHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects1[i].setPosition(592,416);
}
}}

}


};gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects = Hashtable.newFrom({"GeneratorHitBox": gdjs.Activity_321Code.GDGeneratorHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects2Objects = Hashtable.newFrom({"TurbineHitBox": gdjs.Activity_321Code.GDTurbineHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects = Hashtable.newFrom({"GearBoxHitBox": gdjs.Activity_321Code.GDGearBoxHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects = Hashtable.newFrom({"GridHitBox": gdjs.Activity_321Code.GDGridHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects1Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects1Objects = Hashtable.newFrom({"PowerInvertHitBox": gdjs.Activity_321Code.GDPowerInvertHitBoxObjects1});gdjs.Activity_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDGeneratorObjects2.createFrom(runtimeScene.getObjects("Generator"));
gdjs.Activity_321Code.GDGeneratorHitBoxObjects2.createFrom(runtimeScene.getObjects("GeneratorHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects2 */
/* Reuse gdjs.Activity_321Code.GDGeneratorHitBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].setPosition(245,316);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorHitBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorHitBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.Activity_321Code.GDGeneratorObjects2.createFrom(runtimeScene.getObjects("Generator"));
gdjs.Activity_321Code.GDTurbineHitBoxObjects2.createFrom(runtimeScene.getObjects("TurbineHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].setPosition(655,207);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxHitBoxObjects2.createFrom(runtimeScene.getObjects("GearBoxHitBox"));
gdjs.Activity_321Code.GDGeneratorObjects2.createFrom(runtimeScene.getObjects("Generator"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].setPosition(655,207);
}
}}

}


{

gdjs.Activity_321Code.GDGeneratorObjects2.createFrom(runtimeScene.getObjects("Generator"));
gdjs.Activity_321Code.GDGridHitBoxObjects2.createFrom(runtimeScene.getObjects("GridHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].setPosition(655,207);
}
}}

}


{

gdjs.Activity_321Code.GDGeneratorObjects1.createFrom(runtimeScene.getObjects("Generator"));
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects1.createFrom(runtimeScene.getObjects("PowerInvertHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects1[i].setPosition(655,207);
}
}}

}


};gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects = Hashtable.newFrom({"PowerInvertHitBox": gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects = Hashtable.newFrom({"GeneratorHitBox": gdjs.Activity_321Code.GDGeneratorHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects = Hashtable.newFrom({"GridHitBox": gdjs.Activity_321Code.GDGridHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects = Hashtable.newFrom({"GearBoxHitBox": gdjs.Activity_321Code.GDGearBoxHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects1Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects1Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects1});gdjs.Activity_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2.createFrom(runtimeScene.getObjects("PowerInvertHitBox"));
gdjs.Activity_321Code.GDPowerInverterObjects2.createFrom(runtimeScene.getObjects("PowerInverter"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2 */
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects2[i].setPosition(314,276);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects2[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.Activity_321Code.GDGeneratorHitBoxObjects2.createFrom(runtimeScene.getObjects("GeneratorHitBox"));
gdjs.Activity_321Code.GDPowerInverterObjects2.createFrom(runtimeScene.getObjects("PowerInverter"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects2[i].setPosition(691,284);
}
}}

}


{

gdjs.Activity_321Code.GDGridHitBoxObjects2.createFrom(runtimeScene.getObjects("GridHitBox"));
gdjs.Activity_321Code.GDPowerInverterObjects2.createFrom(runtimeScene.getObjects("PowerInverter"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects2[i].setPosition(691,284);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxHitBoxObjects2.createFrom(runtimeScene.getObjects("GearBoxHitBox"));
gdjs.Activity_321Code.GDPowerInverterObjects2.createFrom(runtimeScene.getObjects("PowerInverter"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects2[i].setPosition(691,284);
}
}}

}


{

gdjs.Activity_321Code.GDPowerInverterObjects1.createFrom(runtimeScene.getObjects("PowerInverter"));
gdjs.Activity_321Code.GDTurbineObjects1.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects1[i].setPosition(691,284);
}
}}

}


};gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects = Hashtable.newFrom({"GridHitBox": gdjs.Activity_321Code.GDGridHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects = Hashtable.newFrom({"GeneratorHitBox": gdjs.Activity_321Code.GDGeneratorHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects = Hashtable.newFrom({"PowerInvertHitBox": gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects = Hashtable.newFrom({"GearBoxHitBox": gdjs.Activity_321Code.GDGearBoxHitBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects1Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects1Objects = Hashtable.newFrom({"TurbineHitBox": gdjs.Activity_321Code.GDTurbineHitBoxObjects1});gdjs.Activity_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDGridObjects2.createFrom(runtimeScene.getObjects("Grid"));
gdjs.Activity_321Code.GDGridHitBoxObjects2.createFrom(runtimeScene.getObjects("GridHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects2 */
/* Reuse gdjs.Activity_321Code.GDGridHitBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].setPosition(406,261);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDGridHitBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridHitBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].activateBehavior("Draggable", false);
}
}}

}


{

gdjs.Activity_321Code.GDGeneratorHitBoxObjects2.createFrom(runtimeScene.getObjects("GeneratorHitBox"));
gdjs.Activity_321Code.GDGridObjects2.createFrom(runtimeScene.getObjects("Grid"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].setPosition(583,262);
}
}}

}


{

gdjs.Activity_321Code.GDGridObjects2.createFrom(runtimeScene.getObjects("Grid"));
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2.createFrom(runtimeScene.getObjects("PowerInvertHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInvertHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].setPosition(583,262);
}
}}

}


{

gdjs.Activity_321Code.GDGearBoxHitBoxObjects2.createFrom(runtimeScene.getObjects("GearBoxHitBox"));
gdjs.Activity_321Code.GDGridObjects2.createFrom(runtimeScene.getObjects("Grid"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxHitBoxObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].setPosition(583,262);
}
}}

}


{

gdjs.Activity_321Code.GDGridObjects1.createFrom(runtimeScene.getObjects("Grid"));
gdjs.Activity_321Code.GDTurbineHitBoxObjects1.createFrom(runtimeScene.getObjects("TurbineHitBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineHitBoxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects1[i].setPosition(583,262);
}
}}

}


};gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects = Hashtable.newFrom({"BadZone1": gdjs.Activity_321Code.GDBadZone1Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects = Hashtable.newFrom({"BadZone1": gdjs.Activity_321Code.GDBadZone1Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects = Hashtable.newFrom({"BadZone1": gdjs.Activity_321Code.GDBadZone1Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects = Hashtable.newFrom({"BadZone1": gdjs.Activity_321Code.GDBadZone1Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects1Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects1Objects = Hashtable.newFrom({"BadZone1": gdjs.Activity_321Code.GDBadZone1Objects1});gdjs.Activity_321Code.eventsList5 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDBadZone1Objects2.createFrom(runtimeScene.getObjects("BadZone1"));
gdjs.Activity_321Code.GDGearBoxObjects2.createFrom(runtimeScene.getObjects("GearBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].setPosition(592,416);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone1Objects2.createFrom(runtimeScene.getObjects("BadZone1"));
gdjs.Activity_321Code.GDGridObjects2.createFrom(runtimeScene.getObjects("Grid"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].setPosition(583,262);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone1Objects2.createFrom(runtimeScene.getObjects("BadZone1"));
gdjs.Activity_321Code.GDTurbineObjects2.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].setPosition(509,205);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone1Objects2.createFrom(runtimeScene.getObjects("BadZone1"));
gdjs.Activity_321Code.GDGeneratorObjects2.createFrom(runtimeScene.getObjects("Generator"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].setPosition(655,207);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone1Objects1.createFrom(runtimeScene.getObjects("BadZone1"));
gdjs.Activity_321Code.GDPowerInverterObjects1.createFrom(runtimeScene.getObjects("PowerInverter"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects1[i].setPosition(691,284);
}
}}

}


};gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects = Hashtable.newFrom({"GearBox": gdjs.Activity_321Code.GDGearBoxObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects = Hashtable.newFrom({"BadZone2": gdjs.Activity_321Code.GDBadZone2Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects = Hashtable.newFrom({"Turbine": gdjs.Activity_321Code.GDTurbineObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects = Hashtable.newFrom({"BadZone2": gdjs.Activity_321Code.GDBadZone2Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects = Hashtable.newFrom({"Grid": gdjs.Activity_321Code.GDGridObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects = Hashtable.newFrom({"BadZone2": gdjs.Activity_321Code.GDBadZone2Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects = Hashtable.newFrom({"Generator": gdjs.Activity_321Code.GDGeneratorObjects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects = Hashtable.newFrom({"BadZone2": gdjs.Activity_321Code.GDBadZone2Objects2});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects1Objects = Hashtable.newFrom({"PowerInverter": gdjs.Activity_321Code.GDPowerInverterObjects1});gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects1Objects = Hashtable.newFrom({"BadZone2": gdjs.Activity_321Code.GDBadZone2Objects1});gdjs.Activity_321Code.eventsList6 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDBadZone2Objects2.createFrom(runtimeScene.getObjects("BadZone2"));
gdjs.Activity_321Code.GDGearBoxObjects2.createFrom(runtimeScene.getObjects("GearBox"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGearBoxObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGearBoxObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGearBoxObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGearBoxObjects2[i].setPosition(592,416);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone2Objects2.createFrom(runtimeScene.getObjects("BadZone2"));
gdjs.Activity_321Code.GDTurbineObjects2.createFrom(runtimeScene.getObjects("Turbine"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDTurbineObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDTurbineObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDTurbineObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDTurbineObjects2[i].setPosition(509,205);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone2Objects2.createFrom(runtimeScene.getObjects("BadZone2"));
gdjs.Activity_321Code.GDGridObjects2.createFrom(runtimeScene.getObjects("Grid"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGridObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGridObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGridObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGridObjects2[i].setPosition(583,262);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone2Objects2.createFrom(runtimeScene.getObjects("BadZone2"));
gdjs.Activity_321Code.GDGeneratorObjects2.createFrom(runtimeScene.getObjects("Generator"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDGeneratorObjects2Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDGeneratorObjects2 */
{for(var i = 0, len = gdjs.Activity_321Code.GDGeneratorObjects2.length ;i < len;++i) {
    gdjs.Activity_321Code.GDGeneratorObjects2[i].setPosition(655,207);
}
}}

}


{

gdjs.Activity_321Code.GDBadZone2Objects1.createFrom(runtimeScene.getObjects("BadZone2"));
gdjs.Activity_321Code.GDPowerInverterObjects1.createFrom(runtimeScene.getObjects("PowerInverter"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDPowerInverterObjects1Objects, gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBadZone2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Activity_321Code.GDPowerInverterObjects1 */
{for(var i = 0, len = gdjs.Activity_321Code.GDPowerInverterObjects1.length ;i < len;++i) {
    gdjs.Activity_321Code.GDPowerInverterObjects1[i].setPosition(691,284);
}
}}

}


};gdjs.Activity_321Code.eventsList7 = function(runtimeScene) {

{

gdjs.Activity_321Code.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Page", false);
}}

}


{

gdjs.Activity_321Code.GDNextObjects1.createFrom(runtimeScene.getObjects("Next"));

gdjs.Activity_321Code.condition0IsTrue_0.val = false;
gdjs.Activity_321Code.condition1IsTrue_0.val = false;
{
gdjs.Activity_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Activity_321Code.mapOfGDgdjs_46Activity_95321Code_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Activity_321Code.condition0IsTrue_0.val ) {
{
gdjs.Activity_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Activity_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity 2", false);
}}

}


{


gdjs.Activity_321Code.eventsList0(runtimeScene);
}


{


gdjs.Activity_321Code.eventsList1(runtimeScene);
}


{


gdjs.Activity_321Code.eventsList2(runtimeScene);
}


{


gdjs.Activity_321Code.eventsList3(runtimeScene);
}


{


gdjs.Activity_321Code.eventsList4(runtimeScene);
}


{


gdjs.Activity_321Code.eventsList5(runtimeScene);
}


{


gdjs.Activity_321Code.eventsList6(runtimeScene);
}


};

gdjs.Activity_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Activity_321Code.GDBackgroundObjects1.length = 0;
gdjs.Activity_321Code.GDBackgroundObjects2.length = 0;
gdjs.Activity_321Code.GDBackgroundObjects3.length = 0;
gdjs.Activity_321Code.GDTitleObjects1.length = 0;
gdjs.Activity_321Code.GDTitleObjects2.length = 0;
gdjs.Activity_321Code.GDTitleObjects3.length = 0;
gdjs.Activity_321Code.GDPowerInverterObjects1.length = 0;
gdjs.Activity_321Code.GDPowerInverterObjects2.length = 0;
gdjs.Activity_321Code.GDPowerInverterObjects3.length = 0;
gdjs.Activity_321Code.GDGearBoxObjects1.length = 0;
gdjs.Activity_321Code.GDGearBoxObjects2.length = 0;
gdjs.Activity_321Code.GDGearBoxObjects3.length = 0;
gdjs.Activity_321Code.GDGridObjects1.length = 0;
gdjs.Activity_321Code.GDGridObjects2.length = 0;
gdjs.Activity_321Code.GDGridObjects3.length = 0;
gdjs.Activity_321Code.GDGeneratorObjects1.length = 0;
gdjs.Activity_321Code.GDGeneratorObjects2.length = 0;
gdjs.Activity_321Code.GDGeneratorObjects3.length = 0;
gdjs.Activity_321Code.GDTurbineObjects1.length = 0;
gdjs.Activity_321Code.GDTurbineObjects2.length = 0;
gdjs.Activity_321Code.GDTurbineObjects3.length = 0;
gdjs.Activity_321Code.GDWindObjects1.length = 0;
gdjs.Activity_321Code.GDWindObjects2.length = 0;
gdjs.Activity_321Code.GDWindObjects3.length = 0;
gdjs.Activity_321Code.GDBackObjects1.length = 0;
gdjs.Activity_321Code.GDBackObjects2.length = 0;
gdjs.Activity_321Code.GDBackObjects3.length = 0;
gdjs.Activity_321Code.GDNextObjects1.length = 0;
gdjs.Activity_321Code.GDNextObjects2.length = 0;
gdjs.Activity_321Code.GDNextObjects3.length = 0;
gdjs.Activity_321Code.GDHintObjects1.length = 0;
gdjs.Activity_321Code.GDHintObjects2.length = 0;
gdjs.Activity_321Code.GDHintObjects3.length = 0;
gdjs.Activity_321Code.GDTextObjects1.length = 0;
gdjs.Activity_321Code.GDTextObjects2.length = 0;
gdjs.Activity_321Code.GDTextObjects3.length = 0;
gdjs.Activity_321Code.GDGridHitBoxObjects1.length = 0;
gdjs.Activity_321Code.GDGridHitBoxObjects2.length = 0;
gdjs.Activity_321Code.GDGridHitBoxObjects3.length = 0;
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects1.length = 0;
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects2.length = 0;
gdjs.Activity_321Code.GDPowerInvertHitBoxObjects3.length = 0;
gdjs.Activity_321Code.GDGeneratorHitBoxObjects1.length = 0;
gdjs.Activity_321Code.GDGeneratorHitBoxObjects2.length = 0;
gdjs.Activity_321Code.GDGeneratorHitBoxObjects3.length = 0;
gdjs.Activity_321Code.GDGearBoxHitBoxObjects1.length = 0;
gdjs.Activity_321Code.GDGearBoxHitBoxObjects2.length = 0;
gdjs.Activity_321Code.GDGearBoxHitBoxObjects3.length = 0;
gdjs.Activity_321Code.GDTurbineHitBoxObjects1.length = 0;
gdjs.Activity_321Code.GDTurbineHitBoxObjects2.length = 0;
gdjs.Activity_321Code.GDTurbineHitBoxObjects3.length = 0;
gdjs.Activity_321Code.GDBadZone2Objects1.length = 0;
gdjs.Activity_321Code.GDBadZone2Objects2.length = 0;
gdjs.Activity_321Code.GDBadZone2Objects3.length = 0;
gdjs.Activity_321Code.GDBadZone1Objects1.length = 0;
gdjs.Activity_321Code.GDBadZone1Objects2.length = 0;
gdjs.Activity_321Code.GDBadZone1Objects3.length = 0;

gdjs.Activity_321Code.eventsList7(runtimeScene);
return;

}

gdjs['Activity_321Code'] = gdjs.Activity_321Code;
