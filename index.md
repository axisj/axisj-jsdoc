This guide walks through the easy steps of setting up AXISJ.

directory image sample
Please download AXISJ.
Download available on https://github.com/axisj-com/axisj.

You can find '_AXJ' or 'axisj' folder from the downloaded files. Place it in the folder of your current project. As can be seen from the image on the right, '_AXJ' or 'axisj' folder can be placed just under the root folder. The location of the folder can be changed, but you need to change the folder path when you link if the folder is located under other folders not the root folder. Please keep in mind that '_AXJ' folder is assumed to be right under the root folder in the following example below. 

You need to link the CSS and JS files of AXISJ to be used commonly in the coding of the page you are working on.

```
<!-- css block -->
<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXJ.css">
<!-- css block -->
<!-- js block -->
<script type="text/javascript" src="/_AXJ/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/_AXJ/lib/AXJ.js"></script>
```

Also, you can add the CSS and JS files of the functions you want to use. The following example show how to link 'AXProgress' which is one of the functions AXISJ has.
```
<link href="/_AXJ/ui/arongi/AXProgress.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/_AXJ/lib/AXProgress.js"></script>
```

Please create the function you want to use from AXISJ as Object and announces a variable. The following example shows how to set up to use 'AXProgress'.
```
<script type="text/javascript">
var myProgress = new AXProgress();
var fnObj = {
	pageStart: function(){
	    myProgress.setConfig({
			totalCount:50, 
			width:300, 
			top:100, 
			title:"AXProgress BAR",
			duration:50 // Animation speed value of progress bar
		});
		//Not necessarily, but recommended to apply the code after preparing your page.
	},
	progressStart: function(){
		mask.open();
		myProgress.start(function(){
			trace(this);
			if(this.isEnd){
				myProgress.close();
				mask.close();
				toast.push("progress end");
			}else{
				// Processes something.	
				// Mostly, asynchronous AJAX communication.
				myProgress.update(); 
				// Starts the next count of Progress.
			}	
		});
	}
};

$(document.body).ready(function(){
	setTimeout(fnObj.pageStart, 1);
});
</script>
```

If you have reached this stage, you are ready to use the functions of AXISJ. You can use the Object which you have created by announcing it in <body> of 
<html>.
```
<body>
	<div style="padding:20px;">
		<h2>AXProgress</h2>
		<input type="button" value="AXProgress Start" 
		class="AXButton Red" onclick="fnObj.progressStart();">
		<div class="Hspace20"></div>
	</div>
</body>
```

If you need to chage the style of the Object you use, you can edit the style you want after opening '/_AXJ/ui/default/AXProgress.css' file and checking the CSS structure, or redefine your own style after copying the CSS file.
```
<style type="text/css">
.AXlineProgress .AXprogressTitle{
	color:#000;
	font-weight:bold;
}
.AXlineProgress .AXprogress .AXprogressContainer .AXprogressLoadedText{
	color:#000;
}
</style>
```

and you can use with 'AXU' http://axu.axisj.com
```
// bower install
$ bower install axisj
/*
http://dev.axisj.com : Demonstration
http://jdoc.axisj.com : Documentation
http://www.axisj.com : Website
http://facebook.com/axisj : Fanpage
http://google.com/+axisj : Google+
*/
```

