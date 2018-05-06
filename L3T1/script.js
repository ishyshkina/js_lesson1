function Machine(power) {
 this._power = power;
 this._enabled = false;

 var self = this;
 this.enable = function()
  { self._enabled = true; 
  };

 this.disable = function()
  { self._enabled = false;

   };
}

function Fridge (power) {
	Machine.apply(this, arguments);

	var food = [];     	    	

    this.addFood = function(){
    		if (!this._enabled) {
    			alert("Enadle the fridge");
    			return;
    		}
    		if (food.length + arguments.length > this._power/100)
    		{
    			alert("max quantity of food items is limited");
    			return;
    		}
    		for (var i = 0; i< arguments.length; i++){
    			food.push(arguments[i]);

    		}
    	}
      

   this.getFood = function(){
   
   //alert("" +  food.slice());
        return food.slice();
    	};
}
    


	var fridge = new Fridge(300);
	fridge.enable();
	fridge.addFood('apple');
	fridge.addFood('orange');
	fridge.addFood('cola', 'milk');

	var fridge = new Fridge (100);
	fridge.addFood('apple');

	var fridge = new Fridge(300);
	fridge.enable();
	fridge.addFood('apple', 'milk', 'orange');
	alert(fridge.getFood());



