window.onload = function() {

    Root = new ArmGraph.Root({fps: 60});
    
    G = new Captcha.Captcha({owner: Root, width: 285, height: 200})
    G.GetMessages();

    $('#newMessageBtn').bind('click', function() {
    	G.AddMessage();
    });

    Root.Start();
	
};