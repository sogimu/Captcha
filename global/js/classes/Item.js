(function() {

    var Item = function(O) {

        var me = new ArmGraph.Node( O );

        me.SetFunc("onMouseMove", function(e) {
            var x = e.e.offsetX;
            var y = e.e.offsetY;
            
            if(this.isDruging && x > this.GetMaxLeft() && x < this.GetMaxRight() && y > this.GetMaxTop() && y < this.GetMaxBottom()) {
                
                this.x = x - this.offsetX;
                this.y = y - this.offsetY;
                this.Button.TranslateTo({x: this.x, y: this.y});

            }

        })
        .SetFunc("onMouseDown", function(e) {
            var x = e.e.offsetX;
            var y = e.e.offsetY;
            
            if( this.Button.HasPoint({x: x, y: y}) ) {
                
                this.isDruging = true;

                this.offsetX = x - Math.round(this.Button._globalRepresentation.GetX())//this.ButtonX;
                this.offsetY = y - Math.round(this.Button._globalRepresentation.GetY())//this.ButtonY;

            }

        })
        .SetFunc("onMouseUp", function(e) {
            this.isDruging = false;

        })

        me.SetX = function(x) {
            gizmo.Filter(x, "Number");
            this._x = x;
        };

        me.SetY = function(y) {
            gizmo.Filter(y, "Number");
            this._y = y;
        };

        me.SetWidth = function(width) {
            gizmo.Filter(width, "Number");
            this._width = width;
        };

        me.SetHeight = function(height) {
            gizmo.Filter(height, "Number");
            this._height = height;
        };

        me.SetMaxLeft = function(maxLeft) {
            gizmo.Filter(maxLeft, "Number");
            this._maxLeft = maxLeft;
        };

        me.SetMaxRight = function(maxRight) {
            gizmo.Filter(maxRight, "Number");
            this._maxRight = maxRight;
        };

        me.SetMaxTop = function(maxTop) {
            gizmo.Filter(maxTop, "Number");
            this._maxTop = maxTop;
        };

        me.SetMaxBottom = function(maxBottom) {
            gizmo.Filter(maxBottom, "Number");
            this._maxBottom = maxBottom;
        };

        me.SetID = function(id) {
            gizmo.Filter(id, "String");
            this._id = id;
        };

        me.SetPath = function(path) {
            gizmo.Filter(path, "String");
            this._path = path;
        };

        me.SetImage = function(image) {
            gizmo.Filter(image, "HTMLImageElement");
            this._image = image;
        };

        me.GetX = function() {
            return this._x;
        };

        me.GetY = function() {
            return this._y;
        };

        me.GetWidth = function() {
            return this._width;
        };

        me.GetHeigth = function() {
            return this._height;
        };

        me.GetMaxLeft = function() {
            return this._maxLeft;
        };

        me.GetMaxRight = function() {
            return this._maxRight;
        };

        me.GetMaxTop = function() {
            return this._maxTop;
        };

        me.GetMaxBottom = function() {
            return this._maxBottom;
        };

        me.GetID = function() {
            return this._id;
        };

        me.GetPath = function() {
            return this._path;
        };

        me.GetImage = function() {
            return this._image;
        };
        
        me.Set = function(O) {
            for(var name in O) {
                switch( name ) {
                    case "x"  : {  this.SetX(O[name]); };
                    break;
                    
                    case "y" : {  this.SetY(O[name]); };
                    break;

                    case "width"  : {  this.SetWidth(O[name]); };
                    break;
                    
                    case "height" : {  this.SetHeight(O[name]); };
                    break;

                    case "maxLeft"  : {  this.SetMaxLeft(O[name]); };
                    break;
                    
                    case "maxRight" : {  this.SetMaxRight(O[name]); };
                    break;

                    case "maxTop"   : {  this.SetMaxTop(O[name]); };
                    break;
                    
                    case "maxBottom": {  this.SetMaxBottom(O[name]); };
                    break;

                    case "id"   : {  this.SetID(O[name]); };
                    break;
                    
                    case "path": {  this.SetPath(O[name]); };
                    break;

                    case "image": {  this.SetImage(O[name]); };
                    break;
                };
            };

        };    


        me._x = 0;
        me._y = 0;
        me._width = 50;
        me._height = 50;
        me._image = null;
        
        me.isDruging = false;

        me._maxLeft = 0;
        me._maxTop = 0;
        me._maxRight = 400;
        me._maxBootom = 300;

        me.Set(O);

        me.layer = me.GetProp("owner").layer;

        me.Button = new ArmContext.Image({layer: me.layer, image: me.GetImage(), width: me.GetWidth(), height: me.GetHeigth()})
        me.Button.TranslateTo({x: me.GetX(), y: me.GetY()})

        return me;
    };

    window.Captcha.Item = Item;

})();