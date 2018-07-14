(function () {
    var appModule = angular.module('appModule');
    appModule.controller('updateProductController', ['$scope', 'updateProductService', function ($scope, updateProductService) {
        console.log('update product controller');
        var referenceObj = {};
        $scope.getProductToUpdate = function (data) {
            updateProductService.getProductToUpdate(data).then(function (response) {
                if (response.data.length === 1) {
                    $scope.product.id = '';
                    var constructionDetailString = '';
                    for (var i = 0; i < response.data[0].construction_details.length; i++) {
                        constructionDetailString += '@' + response.data[0].construction_details[i];
                    }
                    var sp_req_str = '';
                    for (var i = 0; i < response.data[0].special_req.length; i++) {
                        sp_req_str += '@' + response.data[0].special_req[i];
                    }
                    response.data[0].construction_details = constructionDetailString;
                    response.data[0].special_req = sp_req_str;
                    $scope.updatedProduct = {
                        productImageURL: response.data[0].productImageURL,
                        name: response.data[0].name,
                        productPrice: response.data[0].productPrice,
                        productID: response.data[0].productID,
                        productCode: response.data[0].productCode,
                        vendorID: response.data[0].vendorID,
                        availabilityType: response.data[0].availabilityType,
                        dimension: response.data[0].dimension,
                        built_material: response.data[0].built_material,
                        application: response.data[0].application,
                        construction_details: response.data[0].construction_details,
                        quantity: response.data[0].quantity,
                        warranty: response.data[0].warranty,
                        rating: response.data[0].rating,
                        deliveryTime: response.data[0].deliveryTime,
                        paymentMode: response.data[0].paymentMode,
                        special_req: response.data[0].special_req
                    };
                    referenceObj = JSON.parse(JSON.stringify($scope.updatedProduct));
                }
            }, function (response) {
                console.log('failed response', response);
            });
        }

        $scope.updateThisProduct = function (data) {
            console.log(data);
            if (!checkIfproductUpdated(data, referenceObj)) {
                var contructionDetailStr = data.construction_details.split('@');
                var sp_req = data.special_req.split('@');
                data.special_req = sp_req;
                data.construction_details = contructionDetailStr;
                updateProductService.updateProduct(data).then(function (response) {
                    if (response.status === 200) {
                        $scope.updatedProduct = {};
                    }
                }, function (response) {
                    console.log('failed to update the product', response);
                });
            } else {
                alert('there was no change detected in the updated and previous product');
            }
        }
        checkIfproductUpdated = function (newObj, preObj) {
            if (newObj['productImageURL'] === preObj['productImageURL'] &&
                newObj['name'] === preObj['name'] &&
                newObj['productPrice'] === preObj['productPrice'] &&
                newObj['productCode'] === preObj['productCode'] &&
                newObj['vendorID'] === preObj['vendorID'] &&
                newObj['availabilityType'] === preObj['availabilityType'] &&
                newObj['dimension'] === preObj['dimension'] &&
                newObj['built_material'] === preObj['built_material'] &&
                newObj['application'] === preObj['application'] &&
                newObj['construction_details'] === preObj['construction_details'] &&
                newObj['quantity'] === preObj['quantity'] &&
                newObj['warranty'] === preObj['warranty'] &&
                newObj['rating'] === preObj['rating'] &&
                newObj['deliveryTime'] === preObj['deliveryTime'] &&
                newObj['paymentMode'] === preObj['paymentMode'] &&
                newObj['special_req'] === preObj['special_req']
            ) {
                return true;
            } else {
                return false;
            }
        }
    }]);
})();