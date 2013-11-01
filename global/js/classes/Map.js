(function(window) {
	
    var map = function(O) {

        var me = {};

        me._items = [];
        me._row = 0;
        me._col = 0;

        me.GetJSON = function(itemWidth, itemHeight) {
            var items = this.GetItems();

            for(var itemName in items) {
                var item = items[itemName];

                item.pos.x /= itemWidth;
                item.pos.y /= itemHeight;
            }   
                     
            var map = {
                items: items,
                row: this.GetRow(),
                col: this.GetCol()
            };

            return map; 
        };

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