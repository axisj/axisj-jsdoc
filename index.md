# AXISJ 시작하기

AXISJ 를 처음 사용하시는 분들을 위한 사용 가이드입니다.
>This guide walks through the easy steps of setting up AXISJ.

<<<<<<< HEAD
AXISJ의 모든 소르는 다음의 주소(gitHub)에서 모두 다운로드 받으실 수 있고 사용상 질문도 하실 수 있습니다. https://github.com/axisj/axisj.
>directory image sample
Please download AXISJ.
Download available on https://github.com/axisj/axisj.
=======
AXISJ의 모든 소르는 다음의 주소(gitHub)에서 모두 다운로드 받으실 수 있고 사용상 질문도 하실 수 있습니다. https://github.com/axisj-com/axisj.
>directory image sample
Please download AXISJ.
Download available on https://github.com/axisj-com/axisj.
>>>>>>> 293d56bdd520d6d6abf2744627b312d32911df86

다운로드 받은 파일 중에 _AXJ 폴더를 작업 중인 폴더 안에 위치시킵니다. 우측의 이미지에 보시면 루트 밑에 "_AXJ" 폴더를 위치시켰습니다. 위치는 사용상의 편의에 따라서 이동가능 합니다. 위치를 변경하셨다면 링크시에 위치를 적절하게 변경 해 주셔야 합니다. 이번 예제에서는 우측 이미지처럼 루트 밑에 지정했다는 가정 하에 진행합니다.
>You can find '_AXJ' or 'axisj' folder from the downloaded files. Place it in the folder of your current project. As can be seen from the image on the right, '_AXJ' or 'axisj' folder can be placed just under the root folder. The location of the folder can be changed, but you need to change the folder path when you link if the folder is located under other folders not the root folder. Please keep in mind that '_AXJ' folder is assumed to be right under the root folder in the following example below.

## 요구사항
AXISJ는 IE7+, Chrome, FF, Safari 브라우저에서 작동이 확인되었으며 보장됩니다. 또한 AXISJ를 구동하기 위해서는 jQuery 1.6이상이 필요합니다. 
>AXISJ is "IE7 +, Chrome, FF, Safari Browser" is guaranteed to work in was OK. JQuery 1.6 or later is also required in order to operate the AXISJ.

## 설치
AXISJ를 사용하시려는 페이지의 코딩 안에 AXISJ 의 공통적으로 사용되는 CSS 와 JS 파일을 링크시킵니다.
>You need to link the CSS and JS files of AXISJ to be used commonly in the coding of the page you are working on.

```
<!-- css block -->
<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXJ.css">
<!-- css block -->
<!-- js block -->
<script type="text/javascript" src="/_AXJ/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/_AXJ/lib/AXJ.js"></script>
```

그 외에 실제로 사용하실 기능의 CSS 와 JS도 함께 링크시킵니다. 다음 예제는 사용자가 AXISJ 의 여러 기능 중 AXProgress 를 사용할 시의 가이드입니다.
>Also, you can add the CSS and JS files of the functions you want to use. The following example show how to link 'AXProgress' which is one of the functions AXISJ has.


```
<link href="/_AXJ/ui/arongi/AXProgress.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/_AXJ/lib/AXProgress.js"></script>
```

## 사용자 설정
AXISJ 기능 중 사용할 기능을 자바스크립트 안에 오브젝트로 생성하고 변수를 선언해 줍니다. 다음 예제는 AXProgress 기능을 자바스크립트 안에 선언할 때의 가이드입니다.
>Please create the function you want to use from AXISJ as Object and announces a variable. The following example shows how to set up to use 'AXProgress'.

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
여기까지의 과정을 마치셨으면, 이제 AXISJ의 기능을 사용하실 준비가 되어있으며, 미리 생성해 놓은 오브젝트를 html 의body 안에 선언하여 사용시면 됩니다.
>If you have reached this stage, you are ready to use the functions of AXISJ. You can use the Object which you have created by announcing it in body of html.

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
구현된 오브젝트의 스타일을 간단히 변경해야 하는 경우 /_AXJ/ui/default/AXProgress.css 열어 css 구조를 확인하신 후 원하는 스타일을 재종하시거나 css 파일을 복제하여 자신만의 스타일로 재구현할 수 있습니다.
>If you need to chage the style of the Object you use, you can edit the style you want after opening '/_AXJ/ui/default/AXProgress.css' file and checking the CSS structure, or redefine your own style after copying the CSS file.

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

<<<<<<< HEAD
보다 편리한 이용을 위해서는 AXU를 이용하시는 것을 권장 합니다. http://axu.axisj.com, https://github.com/axisj/axu
>and you can use with 'AXU' http://axu.axisj.com, https://github.com/axisj/axu
=======
보다 편리한 이용을 위해서는 AXU를 이용하시는 것을 권장 합니다. http://axu.axisj.com, https://github.com/axisj-com/axu
>and you can use with 'AXU' http://axu.axisj.com, https://github.com/axisj-com/axu
>>>>>>> 293d56bdd520d6d6abf2744627b312d32911df86

## AXGrid 사용가이드

당신의 웹페이지에 AX그리드를 쉽게 붙이는 방법을 소개합니다. AXISJ를 사용하시려는 페이지의 코딩 안에 AXISJ 의 공통적으로 사용되는 CSS 와 JS 파일을 링크시킵니다.
>This guide helps you paste AXGrid on your web page easily. You need to link the CSS and JS files of AXISJ to be used commonly in the coding of the page you are working on.

```
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>AXISJ</title>
	<!-- css block -->
	<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXJ.css">
	<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXInput.css">
	<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXButton.css">
	<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXSelect.css">
	<link rel="stylesheet" type="text/css" href="/_AXJ/ui/arongi/AXGrid.css">
	<!-- 이것 저것 많이 넣어야 합니다. 이런저런 것들이 귀찮은 분들은 AXJ.min.css 선언해 주셔도 됩니다. -->
	<!-- css block -->
	<!-- js block -->
	<script type="text/javascript" src="/_AXJ/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="/_AXJ/lib/AXJ.js"></script>
	<script type="text/javascript" src="/_AXJ/lib/AXInput.js"></script>
	<script type="text/javascript" src="/_AXJ/lib/AXSelect.js"></script>
	<script type="text/javascript" src="/_AXJ/lib/AXGrid.js"></script>
	<!-- 
	js 파일도 dist/AXJ.min.js 사용하셔도 무방 하겠습니다.
	 -->
	<!-- js block -->
</head>
<body>
	
</body>
</html>
```

이렇게 코딩이 되었으면 다음은 파일을 저장합니다. 파일의 저장위치와 이름은 각자 취향에 맞게 정하십시오.
단. 예제에서는 웹 서비스폴더 경로 루트에 "_AXJ" 폴더가 있다고 가정되었기 때문에 조건이 달라진다면 수정해주셔야 합니다.
>After coding like this, save the file. You can define the location and name of the file to save.
However, you need to edit if the condition changes as it was assumed that "_AXJ" folder located in the root path of web service folder in this example.

다음 단계로는 그리드가 삽입될 HTML 노드를 body 안쪽에 넣어 주시면 됩니다. 원하시는 곳에 태그를 삽입해 주세요.
>The next following step is to put HTML node where the grid will be inserted inside body. Please insert the tag where you want to.

```
<!--
.
헤드 생략
.
-->
<body>
	<div id="AXGridTarget" style="height:400px;"></div>
</body>
</html>
```

style="height:400px;" 라고 되어있는 것은 그리드의 높이를 400px로 하겠다는 의미 입니다. 겁 먹지 않아도 됩니다. 여기까지 읽으셨는데 이해가 되지 않으신다면 html 에 대한 공부를 조금 하셔야 할 필요가 있습니다. html 관련 기초 서적이 많이 있으니 이 글은 그만 읽으셔도 좋겠습니다.
>style="height:400px;" means that it will set the height of the grid to 400px. You do not need to be afraid. If you cannot understand it reading this guide so far, you might need to study html a bit more. There will be many useful basic html books.

다음은 javascript 코딩을 해야 합니다. head 태그에 그리드 초기화 구문과 setConfig 구문을 작성합니다.
>Then, you need to code javascript. Write syntax of 'setConfig' and intialization of Grid in head tag.

```
<!--
.
이전 생략
.
-->
	<!-- js block -->
<script type="text/javascript">
var myGrid = new AXGrid(); // 그리드 변수를 초기화 합니다.
var fnObj = {
	pageStart: function(){
		myGrid.setConfig({
			targetID : "AXGridTarget",
			colGroup : [
				{key:"no", label:"번호", width:"50", align:"right"},
				{key:"title", label:"제목", width:"200"},
				{key:"writer", label:"작성자", width:"100"},
				{key:"regDate", label:"작성일", width:"100"},
				{key:"price", label:"가격", width:"100", align:"right", formatter:"money"},
				{key:"amount", label:"수량", width:"80", align:"right", formatter:"money"},
				{key:"cost", label:"금액", width:"100", align:"right", formatter:function(){
					return (this.item.price.number() * this.item.amount.number()).money();
				}},
				{key:"desc", label:"비고", width:"*"}
			],
			body : {
				onclick: function(){
					toast.push(Object.toJSON(this.item));
				}
			}
		});
	}	
};
$(document).ready(fnObj.pageStart);
</script>
</head>
<body>
<!--
.
다음 생략
.
-->
```

위의 코드를 잘 따라오셨다면 아래와 같은 화면을 보실 수 있습니다. 
글꼴과 크기가 다른것은 그리드에서 글꼴을 고정하지 않았기 때문입니다. 똑같이 보이기를 원하신다면 AXISJ gitHub에서 제공해드리는 css 폴더안에 common.css 를 이용하십시요.
>If you have followed successfully so far, you will see the screen like below. 
Font types and sizes might vary because they were not defined in Grid. If you want to make them look same, please use 'common.css' in css folder provided from AXISJ github.

![](https://lh5.googleusercontent.com/-CBpli7E43Gg/VHfheUNqvlI/AAAAAAAAA4I/OMnexOs2pRo/w809-h416-no/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%2B2014-11-28%2B%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2B11.43.24.png)

이제 그리드 틀이 준비되었으니 그리드에 데이터를 채워야 합니다. 그리드에 데이터를 채워넣는 일은 스크립트로 지정하는 방법과 AJAX 통신을 이용하여 비동기 방식으로 지정하는 방법이 있습니다. 여기서는 스크립트로 지정하는 방법을 소개 합니다.
>Now, the frame of Grid is ready and you just need to fill in Grid with data. It can be done by either by defining in script or defining in AJAX communication style. The following sample shows how to define by using script.

```
<!--
.
이전 생략
.
-->
	<!-- js block -->
<script type="text/javascript">
var myGrid = new AXGrid(); // 그리드 변수를 초기화 합니다.
var fnObj = {
	pageStart: function(){
		myGrid.setConfig({
			targetID : "AXGridTarget",
			colGroup : [
				{key:"no", label:"번호", width:"50", align:"right"},
				{key:"title", label:"제목", width:"200"},
				{key:"writer", label:"작성자", width:"100"},
				{key:"regDate", label:"작성일", width:"100"},
				{key:"price", label:"가격", width:"100", align:"right", formatter:"money"},
				{key:"amount", label:"수량", width:"80", align:"right", formatter:"money"},
				{key:"cost", label:"금액", width:"100", align:"right", formatter:function(){
					return (this.item.price.number() * this.item.amount.number()).money();
				}},
				{key:"desc", label:"비고", width:"*"}
			],
			body : {
				onclick: function(){
					toast.push(Object.toJSON(this.item));
				}
			}
		});
	
		var list = [
			{no:1, title:"AXGrid 첫번째 줄 입니다.", writer:"김기영", regDate:"2013-01-18", 
				desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:123000, amount:10},
			{no:2, title:"AXGrid 두번째 줄 입니다.", writer:"정기영", regDate:"2013-01-18", 
				desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:12300, amount:7},
			{no:3, title:"AXGrid 세번째 줄 입니다.", writer:"한기영", regDate:"2013-01-18", 
				desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:12000, amount:5},
			{no:4, title:"AXGrid 세번째 줄 입니다.", writer:"박기영", regDate:"2013-01-18", 
				desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:13000, amount:4},
			{no:5, title:"AXGrid 세번째 줄 입니다.", writer:"곽기영", regDate:"2013-01-18", 
				desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:3000, amount:3}
		];
		myGrid.setList(list);
		
	}	
};
$(document).ready(fnObj.pageStart);
</script>
</head>
<body>
<!--
.
다음 생략
.
-->
```

AXGrid.setList 메소드를 붙이는데 문제가 없다면 아래와 같은 화면을 보실 수 있습니다. 만약에 setList 가 제대로 되지 않는다면 json 구문이 깨져서 오류가 날 수 있습니다. 그런 경우 개발자 도구를 오픈하여 콘솔창을 확인하시기 바랍니다.
>If no problem in pasting AXGrid.setList method, you will see the screen like below. If setList does not work properly, errors might occur because of broken json syntax. In that case, please check the console by opening developer tool on window.

![](https://lh3.googleusercontent.com/-H6WA3NAyw7I/VHfheRruSgI/AAAAAAAAA4M/OSoihJ3-3dQ/w811-h413-no/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%2B2014-11-28%2B%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2B11.43.35.png)

## 참조
* [AXISJ웹사이트] https://www.axisj.com
<<<<<<< HEAD
* [AXISJ gitHub] https://github.com/axisj
=======
* [AXISJ gitHub] https://github.com/axisj-com
>>>>>>> 293d56bdd520d6d6abf2744627b312d32911df86
* [AXISJ Facebook] https://www.facebook.com/axisj

## 문서작업 기여자
Thomas Jang, Bruce Kim, HS Lee, HJ Park