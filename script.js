var app = angular.module("myApp", []);
app.controller("MyCtl", function ($scope) {
  
    $scope.toogle = function(i)
  {
    i.booleanVal = !i.booleanVal 

  };

  $scope.Countr = {"Departments": 
	[
		{
			"Department": "CE",
			"Events": ["CAD RAW", "Tall Structures", "Brick Masonry"]
		},
		{
			"Department": "ME",
			"Events": ["CAD Contest", "Machino", "Lathe Master"]
		},
		{
			"Department": "CSE/IT/CST",
			"Events": ["Debugging Contest", "Coding Contest", "Online Gamingt"]
		},
		{
			"Department": "ECE/ECT",
			"Events": ["Coding Contest", "Circuit-Mania", "E-Cubic"]
		},
		{
			"Department": "MS",
			"Events": ["Young Manager","Stock Game","Business Quiz"," Business Plan"]
		}

	]};

  $scope.changedVal=""

  $scope.getVal=function(){

    console.log($scope.changedVal);
   $scope.changedVal;
    if($scope.changedVal==="Yes"){
      console.log("hello")
     $scope.col=true;

    }else{
      console.log("nahi")
      $scope.col=false;
    }
  }
})