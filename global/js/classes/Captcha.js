(function(window) {
	
	window.Captcha = {};

    var captcha = function(O) {

        var me = new ArmGraph.Node( O )

        me._items = [];
        me._row = 2;
        me._col = 2;
        me._itemWidth = 100;
        me._itemHeight = 100;

        me._width = 500;
        me._height = 500;

        me.GetTask = function() {
            var map = {};

            var self = this;

            $.ajax({
                url: "index.php/getTask",
                dataType: 'json',
                // data: data,
                success: function( data ) {
                    map = data;
                    console.log(data);
                    console.log( "success" );    
            


            // var map = new Captcha.Map({items: [
            //     {id: 1, pos: {x: 0, y: 0}, path: "global/img/image0.png"},
            //     {id: 2, pos: {x: 1, y: 0}, path: "global/img/image1.png"},
            //     {id: 3, pos: {x: 0, y: 1}, path: "global/img/image2.png"},
            //     {id: 4, pos: {x: 1, y: 1}, path: "global/img/image3.png"}],
            //     //itemWidth: itemW,
            //     //itemHeight: itemH,
            //     row: 2,
            //     col: 2}
            // );

                    

                    self.SetMap(new Captcha.Map(map));
                }

            });
        };

        me.CheckTask = function() {

        };        

        me.GetMap = function() {
            var items = [];
            
            for(var itemName in this._items) {
                var item = this._items[itemName];

                items.push({id: item.GetID(), pos: {x: item.GetX(), y: item.GetY()}, path: item.GetPath()});
                
            };

            console.log(items)
            return new Captcha.Map({"items": items, row: this.GetRow(), col: this.GetCol()});

        };

        me.SetMap = function(map) {
            var self = this;
            
            this._row = map.GetRow();
            this._col = map.GetCol();
            // this._itemWidth = map.GetItemWidth();
            // this._itemHeight = map.GetItemHeight();

            loader = new ArmContext.Loader({})
            var items = map.GetItems();

            for(var elemName in items) {
                var elem = items[elemName];
                loader.AddObject(elem.id+"", elem.path, "image");

            };

            loader.SetLisener("onLoadObject", function(img, progress) {
                console.log(img.name + " was loaded!");
                console.log("Progress: " + progress + "%");
            })
            .SetLisener("onLoad", function(object) {
                for(var elemName in items) {
                    var elem = items[elemName];
                    var wK = self.GetWidth()  / map.GetRow()// / map.GetItemWidth();
                    var hK = self.GetHeight() / map.GetCol()// / map.GetItemHeight();
                    
                    var item = new Captcha.Item({owner: self, id: elem.id+"", path: elem.path, image: this.GetObject(elem.id+""), x: elem.pos.x *wK, y: elem.pos.y * hK, width: wK/* * map.GetItemWidth()*/, height: hK /** map.GetItemHeight()*/, maxLeft: 0, maxTop: 0, maxRight: self.GetWidth(), maxBottom: self.GetHeight()});
                    self._items.push( item );
                };

            })
            .Start();

        };

        me.SetWidth = function(width) {
            gizmo.Filter(width, "Number");
            this._width = width;
        };

        me.SetHeight = function(height) {
            gizmo.Filter(height, "Number");
            this._height = height;
        };

        me.GetWidth = function() {
            return this._width;
        };

        me.GetHeight = function() {
            return this._height;
        };

        me.GetRow = function() {
            return this._row;
        };

        me.GetCol = function() {
            return this._col;
        };

        me.Set = function(O) {
            for(var name in O) {
                switch( name ) {
                    case "width" : {  this.SetWidth(O[name]); };
                    break;
                    
                    case "height": {  this.SetHeight(O[name]); };
                    break;
                };
            };

        };    
 
        // me.SetFunc("begin", function() {
        //     this.layer = ArmContext.Layer({name: "layer!", width: this.GetWidth(), height: this.GetHeight(), container: "captchaDiv"});    
        //     Root.Set({layer: this.layer})
        //     this.layer.ListenMouseEvents();
       
        //     //console.log("Captcha begin");
        //     this.GetTask();


        // })
        me.SetFunc("afterUpdate", function() {
            this.layer.__update();
        
        })
        .SetFunc("afterClear", function() {
            this.layer.__clear();

        })
        .SetFunc("afterDraw", function() {
            this.layer.__draw();

        });

        me.Set(O);
        
        me.layer = ArmContext.Layer({name: "layer!", width: me.GetWidth(), height: me.GetHeight(), container: "captchaDiv"});    
        Root.Set({layer: me.layer})
        me.layer.ListenMouseEvents();

        me.GetTask();


        return me;
    };

    window.Captcha.Captcha = captcha;

})(window);