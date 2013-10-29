window.onload = function() {

    Root = new ArmGraph.Root({fps: 60});
    
    G = new Captcha.Captcha({owner: Root, width: 200, height: 140})

    G.GetMap();

    Root.Start();
	
};