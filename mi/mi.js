window.onload = function(){
        	var ms= document.getElementsByClassName("outer");
        	var pop = document.getElementsByClassName("pop");
        	for (var i = ms.length- 1; i >= 0; i--) 
            {
        	ms[i].onmouseover = function()
            {
                var j=0;
                for (var j = 0; j < 8; j++) 
                {
                   pop[j].style.display = "block";
                    console.log(this.ms[i]);
                 };
        	};

        	ms[i].onmouseout = function()
            {
            	var j=0;
                for (var j = 0; j < 8; j++) 
                {
                   pop[j].style.display = "block";
                   console.log(this.ms[i]);
                 };
       	 	};
       	 	};
    	};