(function(){
	var appModule = angular.module('appModule');
	appModule.controller('addProductController',['$scope','addProductService','logService',function($scope,addProductService,logService){
		console.log('add product controller');
		$scope.response_data = [];

/* ################################################################################		
 function to upload image
###################################################################################*/		
		$scope.uploadProductImage = function(){	
			var imageUrlPrefix = './images/products/';
			$scope.product_data.product_image = imageUrlPrefix + $scope.productImage.name;//add the product image file name to the form data
			/*console.log($scope.product_data);*/	
			var file = $scope.productImage;
			var fd = new FormData();			
			fd.append('file',file);
			/*console.log(file);*/
			addProductService.uploadProductImage(fd).then(
				function(response){
					logService.success('addProductService.uploadProductImage()',response);
				},
				function(response){
					logService.failed('addProductService.uploadProductImage()',response);
				}
			);
		}
		
/* ################################################################################		
 function to add the product to the database
###################################################################################*/			
		$scope.addProduct = function(productData){
			console.log(productData);
			var constructionDetails = productData.construction_details.split('@');
			var sp_req = productData.special_req.split('@')
			productData.construction_details = constructionDetails;
			productData.special_req = sp_req;
			addProductService.addProduct(productData).then(
				function(response){
					$scope.product = {};$scope.productImage='';// clear the form data so that new value can be entered
					$scope.responseData = response.data;					
					logService.success('addProductService.addProduct()',response);
				},
				function(response){					
					logService.failed('addProductService.addProduct()',response);
				}
			);			
		};

/* ################################################################################		
 function to preview image
###################################################################################*/				

	}]);
})();