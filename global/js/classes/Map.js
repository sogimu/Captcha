(function(window) {
	
    var map = function(O) {

        var me = {};

        me._items = [];
        // me._itemWidth = 400;
        // me._itemHeight = 300;
        me._row = 0;
        me._col = 0;

        me.GetJSON = function() {
            var map = {
                items: this.GetItems(),
                // width: this.GetItemWidth(),
                // height: this.GetItemHeight(),
                row: this.GetRow(),
                col: this.GetCol()
            };

            return map; 
        };
        // me.SetItemWidth = function(width) {
        //     gizmo.Filter(width, "Number");
        //     this._width = width;
        // };

        // me.SetItemHeight = function(height) {
        //     gizmo.Filter(height, "Number");
        //     this._height = height;
        // };

        me.SetRow = function(row) {
            gizmo.Filter(row, "Number");
            this._row = row;
        };

        me.SetCol = function(col) {
            gizmo.Filter(col, "Number");
            this._col = col;
        };

        me.SetItems = function(items) {
            gizmo.Filter(items, "Array");
            this._items = items;
        };

        // me.GetItemWidth = function() {
        //     return this._itemWidth;
        // };

        // me.GetItemHeight = function() {
        //     return this._itemHeight;
        // };

        me.GetRow = function() {
            return this._row;
        };

        me.GetCol = function() {
            return this._col;
        };

        me.GetItems = function() {
            return this._items;
        };

        me.Set = function(O) {
            for(var name in O) {
                switch( name ) {
                    // case "itemWidth" : {  this.SetItemWidth(O[name]); };
                    // break;
                    
                    // case "itemHeight": {  this.SetItemHeight(O[name]); };
                    // break;

                    case "row" : {  this.SetRow(O[name]); };
                    break;
                    
                    case "col": {  this.SetCol(O[name]); };
                    break;

                    case "items" : {  this.SetItems(O[name]); };
                    break;

                };
            };

        };    
 
        me.Set(O || {});
     
        return me;
    };

    window.Captcha.Map = map;

})(window);