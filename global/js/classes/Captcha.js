(function(window) {
	
	window.Captcha = {};

    var captcha = function(O) {

        var me = new ArmGraph.Node( O )

        me._items = [];
        // me._row = 0;
        // me._col = 0;
        // me._count = 0;
        me._map = null;
        me._itemWidth = 10;
        me._itemHeight = 10;

        me._width = 500;
        me._height = 500;

        me.GetTask = function() {
            var self = this;
            
            $('#myModal').modal('show');
            
            $.ajax({
                url: "index.php/getTask",
                dataType: 'json',
                // data: data,
                success: function( data ) {
                    var map = data;
                    // console.log(data);
                    // console.log( "task gived!" );    

                    // var map = {items: [
                    //     {id: 1, pos: {x: 0, y: 0}, path: "global/img/image0.png"},
                    //     {id: 2, pos: {x: 1, y: 0}, path: "global/img/image1.png"},
                    //     {id: 3, pos: {x: 0, y: 1}, path: "global/img/image2.png"},
                    //     {id: 4, pos: {x: 1, y: 1}, path: "global/img/image3.png"}],
                    //     row: 2,
                    //     col: 2,
                    //     count: 4
                    // };                    

                    var newMap = new Captcha.Map(map);
                    self.SetMap(newMap);
                }

            });
        };

        me.AddMessage = function() {
            var self = this;

            var map = this.GetMap().GetJSON(this.GetItemWidth(), this.GetItemHeight());
            var message = $('#newMessageInput').val();

            $data = {message: message, map: map};
            
            // console.log($data);

            $.ajax({
                type: "POST",
                url: "index.php/addMessage",
                dataType: 'json',
                data: "data="+JSON.stringify($data),
            
                success: function( data ) {
                    // console.log(data);
                    if(data.status == true) {
                        //console.log("Get messages!");
                        self.GetMessages();
                    } else {
                        //console.log("failed...");

                    }
                    self.GetTask();
                }

            });
        };

        me.GetMessages = function() {
            var self = this;

            $.ajax({
                url: "index.php/getMessages",
                
                success: function( data ) {
                    // console.log(data);
                    $('#messages').html(data);    
                }

            });
        };                

        me.GetMap = function() {
            var items = [];
            
            for(var itemName in this._items) {
                var item = this._items[itemName];

                items.push({id: item.GetID(), pos: {x: item.GetX(), y: item.GetY()}, path: item.GetPath()});
                
            };

            return new Captcha.Map({"items": items, row: this._map.GetRow(), col: this._map.GetCol(), count: this._map.GetCount()});

        };

        me.SetMap = function(map) {
            var self = this;
            
            this.RemoveAll();
            this._items = [];

            this._map = map;
            
            loader = new ArmContext.Loader({})
            var items = map.GetItems();

            for(var elemName in items) {
                var elem = items[elemName];
                loader.AddObject(elem.id+"", elem.path, "image");

            };

            loader.SetLisener("onLoadObject", function(img, progress) {
                // console.log(img.name + " was loaded!");
                // console.log("Progress: " + progress + "%");
                $('#myModal .modal-body .progress .bar').css('width',progress+'%')
            })
            .SetLisener("onLoad", function(object) {
                for(var elemName in items) {
                    var elem = items[elemName];
                    self.SetItemWidth(self.GetWidth()  / map.GetRow());
                    self.SetItemHeight(self.GetHeight() / map.GetCol());
                    var wK = self.GetItemWidth();
                    var hK = self.GetItemHeight();
                    // var wK = self.GetWidth()  / map.GetRow();
                    // var hK = self.GetHeight() / map.GetCol();
                    
                    var item = new Captcha.Item({owner: self, id: elem.id+"", path: elem.path, image: this.GetObject(elem.id+""), x: elem.pos.x * wK, y: elem.pos.y * hK, width: wK/* * map.GetItemWidth()*/, height: hK /** map.GetItemHeight()*/, maxLeft: 0, maxTop: 0, maxRight: self.GetWidth(), maxBottom: self.GetHeight()});
                    self._items.push( item );
                };
                $('#myModal').modal('hide');
            
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

        me.SetItemWidth = function(width) {
            gizmo.Filter(width, "Number");
            this._itemWidth = width;
        };

        me.SetItemHeight = function(height) {
            gizmo.Filter(height, "Number");
            this._itemHeight = height;
        };

        me.GetWidth = function() {
            return this._width;
        };

        me.GetHeight = function() {
            return this._height;
        };

        // me.GetRow = function() {
        //     return this._row;
        // };

        // me.GetCol = function() {
        //     return this._col;
        // };

        me.GetItemWidth = function() {
            return this._itemWidth;
        };

        me.GetItemHeight = function() {
            return this._itemHeight;
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
        me.SetFunc("update", function() {
            // this.layer.__update();
        
        })
        .SetFunc("clear", function() {
            me.layer.GetCtx().clearRect(0,0,me.layer.GetWidth(),me.layer.GetHeight());
            // this.layer.__clear();

        })
        .SetFunc("draw", function() {
            // this.layer.__draw();


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