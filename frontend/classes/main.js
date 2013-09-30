window.onload = function() {

    layer1 = ArmContext.Layer({name: "layer1", container: "container"});
    
    layer1.ListenMouseEvents();

    Root = new ArmGraph.Root({layer: layer1, fps: 0});
     
    Root.Start();

};