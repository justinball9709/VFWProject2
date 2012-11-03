//Justin Ball
//Project 2
//November 2, 2012
window.addEventListener("DOMloadup", function)
{
	//Function getElementById
	function $(x)
	{
		var element = document.getElementById(e);
		return element;
	}

}

	var eat = ["Yes", "No"];
	
		//selct field options
	function willEat ()
	{
		var tagform = document.getElementsByTagName("Form"),
			selectLi = $("Yes"),
			Selectmade = document.createElement("Select");
			Selectmade =.setAttribute("id", "groups");
			
		for (var a = 0, b=eat.length; a<b; a++)
		{
			var option = document.createElement("option");
			var optmsg = eat[a];
			option.setAttribute("value", optmsg);
			option.innerHTML = optmsg;
			makeselect.appendChild(option);
		}
		selectLi.appendChild(Selectmade); 
	}
	
	function dropControls(dc)
	{
		switch(dc)
		{
			case "on":
				$("mealform").style.display = "none";
				$("cleardata").style.display = "inline";
				$("displaydata").style.display = "none";
				$("addnew").style.display = "inline";
				break;
			case "off":
				$("mealform").style.display = "block";
				$("cleardata").style.display = "inline";
				$("displaydata").style.display = "inline";
				$("addnew").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
		
	}

	function dataStore()
	{
		var sdata	= Math.floor((Math.random()=2000001);
		console.log("dataStored launch");
		//Store form field info.
		//Array with form labels and values
		//Toggles
		var piece				={};
			piece.flname		=["Name:" ,  $("flname").value];
			piece.pword			=["Password", $("pword").value];
			piece.date			=["Date Taken:", $('date').value];
			piece.mealname		=["Meal Name:", $('mealname').value];
			piece.carbs			=["Carbs:"	, $('carbs').value];
			piece.calories		=["Calories:", $('calories').value];
			piece.Eatopt		=["Eat:", $('groups').value];
			piece.comments		=["Comments:", $('comments').value];
		
		
		//Save data 
		localStorage.setItem(id, JSON.stringify(item));
		alert('Meal Saved!');
	}
	
	function recData()
	{
		dropControls("on");
		if(localstorage.length == 0)
		{
			alert("No meal added.");
		}
			var divmade = document.createElement('div');
			divmade.setAttribute("id", "items");
			
			var makemeal = document.createElement('ml');
			
			divmade.appendChild(makemeal);
			document.body.appendChild(divmade);
			$("items").style.display = "block";
			
		for(var d=0, loc=localstorage.length; d<loc; d++)
		{
			var limake = document.createElement("li");
			limake.appendChild(limake);
			var lkey = localstorage.key(d);
			var result = localstorage.getitem(key);
			
			//Json convert string from local
			
			var item = JSON.parse(result);
			var createl = document.createElement('ml');
			limake.appendChild(createl);
			for(var t in item)
		{
			var createsl = document.createElement('li');
			createl.appendChild(createsl);
			var textsub = item [t][0]+""+item [t] [1];
			createsl.innerHTML = textsub;
			
		}					
}

	function datawipe()
	{
		if(localstorage.length == 0)
		{
			alert("There are no meals to Delete");
		}
		else
		{
			localstorage.clear();
			alert("All Meals Deleted!");
			window.location.reload();
			return false;
		}
	}
	
		willEat();
		//Submit Event Clicks
		
		var datashow = $('datashow');
		datashow.addEventListener ("click", getData);
		
		var wipedata = $("cleardata");
		wipedata.addEventListener ("click", deleteData);
		
		var addmeals = $('addmeals');
		addmeals.addEventListener ("click, storeData");

};