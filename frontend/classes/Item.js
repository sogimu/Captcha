(function() {

    var Item = function(O) {

        var me = new ArmGraph.ArmObject( O )

        me.SetFunc("begin", function() {
            console.log("Item begin");
            
        })
        .SetFunc("update", function() {
            console.log("Item update");

        })
        .SetFunc("onMouseMove", function(e) {
            var x = e.offsetX;
            var y = e.offsetY;

            if(this.isDruging) {
                
                this.x = x - this.offsetX;
                this.y = y - this.offsetY;
                this.Button.TranslateTo({x: this.x, y: this.y});

            }

        })
        .SetFunc("onMouseDown", function(e) {
            var x = e.offsetX;
            var y = e.offsetY;
            
            if( this.Button.HasPoint({x: x, y: y}) ) {
                this.isDruging = true;

                this.offsetX = x - Math.round(this.Button._globalRepresentation.GetX())//this.ButtonX;
                this.offsetY = y - Math.round(this.Button._globalRepresentation.GetY())//this.ButtonY;

            }

        })
        .SetFunc("onMouseUp", function(e) {
            this.isDruging = false;

        })

        this.x = O.x || 50;
        this.y = O.y || 50;
        this.width = O.width || 100;
        this.height = O.height || 50;
        this.image = O.image || null;
        
        this.isDruging = false;

        this.layer = this.GetProp("owner").layer;

        // this.Button = new ArmContext.Rect({layer: this.layer, /*lineDash: [3,1], lineWidth: 4,*/ width: this.width, height: this.height, fillObject: this.normalColor})
        this.Button = new ArmContext.Image({layer: this.layer, image: this.image, width: this.width, height: this.height})

        this.Button.TranslateTo({x: this.x, y: this.y})

        return me;
    };

    window.Captcha.Item = Item;

})();