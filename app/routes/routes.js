var express = require('express');
var fs = require('fs-extra');
var productSchema = require('../models/addProduct');
var sellEquipmentSchema = require('../models/sellEquipment');
var designEquipmentSchema = require('../models/designEquipment');
var sliderData = require('../models/sliderData');
var designArchitecturalAreaSchema = require('../models/designArchitecturalArea');
var designCommercialKitchenSchema = require('../models/designCommercialKitchen');
var placeOrderSchema = require('../models/placeOrder');
var logoSchema = require('../models/addLogo');
var sendGridCredentials = require('../models/credentials');
var util = require('util');
var router = express.Router();
var imageUpload = require('../config/uploadConfig');
var logoUpload = require('../config/uploadLogoConfig');
router.route('/').get(function (req, res) {
    res.render('index', {
        title: 'Express'
    });
});

/* #########################################       website routes        ################################################*/

router.route('/sendGridCredentials').get(function (req, res) {
    sendGridCredentials.find(function (err, credentialDetails) {
        if (err)
            res.send(err);
        res.json(credentialDetails);
    });
});

router.route('/product/sendQuotationToEmail')
    .post(function (req, res) {
        var sendgrid = require('sendgrid')(req.body.username, req.body.key);
        var from_address = 'equipmentSupply@gmail.com';
        // SUBJECT
        var subject = "Email from SHUBHAM Tomar";
        // TEXT BODY
        var text_body = "You mail has been registered , wil get back to you shortly";
        /*console.log({
                to:         req.body.email,
                from:       from_address,
                subject:    subject,
                text:       text_body
            });*/
        /* SEND THE MAIL */
        try {
            console.log('sending mail');
            sendgrid.send({
                to: req.body.email,
                from: from_address,
                subject: subject,
                text: text_body
            }, function (err, json) {
                if (err)
                    res.send(err);
                res.send('sent' + json);
            });
        } catch (e) {
            res.send(e);
        }
    });

router.route('/websiteViews/getLogoData')
    .get(function (req, res) {
        logoSchema.find(function (err, logoData) {
            if (err)
                res.send(err);
            res.json(logoData);
        });
    });

router.route('/allProducts')
    .get(function (req, res) {
        productSchema.find(function (err, productData) {
            if (err)
                res.send(err);
            //console.log(productData);
            res.json(productData);
        });
    });

router.route('/getSliderData')
    .get(function (req, res) {
        console.log('returning slider data');
        sliderData.find(function (err, productData) {
            if (err)
                res.send(err);
            res.json(productData);
        });
    });


router.route('/getProductDetails')
    .get(function (req, res) {
        //console.log('this is product id '+ util.inspect(req.body.id));
        console.log(req.query.id);
        productSchema.find({
            productID: req.query.id
        }, function (err, productDetails) {
            if (err)
                res.send(err);
            console.log(productDetails);
            res.json(productDetails);
        });
    });

router.route('/placeUserOrder')
    .post(function (req, res) {
        placeOrderSchema.create({
                contact: req.body.contact,
                mail: req.body.mail,
                name: req.body.name,
                productID: req.body.productID,
                productPrice: req.body.productPrice
            },
            function (err, placedOrder) { // this function does the additional thing after placing order
                if (err)
                    res.send(err);
                console.log('order Placed successfully');
                res.status(200).send('order Placed successfully');

            });
    });


router.route('/sellEquipment')
    .post(function (req, res) {
        sellEquipmentSchema.create({
                username: req.body.username,
                userContact: req.body.userContact,
                userCompanyName: req.body.userCompanyName,
                productDescription: req.body.productDescription
            },
            function (err, sellEquipmentComplete) { // this function does the additional thing after placing order
                if (err)
                    res.send(err);
                console.log('details saved successfully');
                res.status(200).send('details saved successfully');

            });
    });


router.route('/designEquipment')
    .post(function (req, res) {
        console.log('asdasdasdasdasdas');
        designEquipmentSchema.create({
                username: req.body.username,
                usermail: req.body.usermail,
                userContact: req.body.userContact,
                productDescription: req.body.productDescription,
                equipmentName: req.body.equipmentName,
                equipmentDimenstion: req.body.equipmentDimenstion
            },
            function (err, designEquipmentComplete) { // this function does the additional thing after placing order
                if (err)
                    res.send(err);
                console.log('details saved successfully');
                res.status(200).send('details saved successfully');

            });
    });

router.route('/designArchitecturalArea')
    .post(function (req, res) {
        console.log('designArchitecturalArea');
        designArchitecturalAreaSchema.create({
                username: req.body.username,
                usermail: req.body.usermail,
                userContact: req.body.userContact,
                productDescription: req.body.productDescription,
                planningAreaName: req.body.planningAreaName,
                areaDimension: req.body.areaDimension
            },
            function (err, designArchitecturalComplete) { // this function does the additional thing after saving design architecturalArea
                if (err)
                    res.send(err);
                console.log('details saved successfully');
                res.status(200).send('details saved successfully');

            });
    });

router.route('/designCommercialKitchen')
    .post(function (req, res) {
        console.log('designCommercialKitchen');
        designCommercialKitchenSchema.create({
                username: req.body.username,
                usermail: req.body.usermail,
                userContact: req.body.userContact,
                productDescription: req.body.productDescription,
                planningKitchenName: req.body.planningKitchenName,
                menuServed: req.body.menuServed,
                kitchenAreaDimension: req.body.kitchenAreaDimension
            },
            function (err, designCommercialKitchen) { // this function does the additional thing after designCommercialKitchen
                if (err)
                    res.send(err);
                console.log('details saved successfully');
                res.status(200).send('details saved successfully');

            });
    });

    router.route('/updateProductAvailability')
    .put(function (req, res) {
        console.log('update product availability',req.body);
        // productSchema.findOneAndUpdate(req.body.productID, req.body, function (err, updateProductObject) {
        //     if(err)
        //         res.send(err);
        //     res.send({
        //         status:200,
        //         updatedProduct: updateProductObject
        //     });
        // });
        productSchema.update({
            productID: req.body.productID
        },{
            productAvailability: 'sold'
        }, function (err, updateProductAvailability) {
            if(err)
            res.send(err);
            res.send({
                status: 200,
                soldProduct: updateProductAvailability
            });
        });
    });

/* ######################################  admin routes  ###########################################*/

/*#######################################################
	for viewing orders ====================
#########################################################*/

router.route('/admin/viewOrders')
    .get(function (req, res) {
        placeOrderSchema.find(function (err, placeOrderData) {
            if (err)
                res.send(err);
            //console.log(placeOrderData);
            res.json(placeOrderData);
        });
    });

/*#######################################################
	for deleting an order ====================
#########################################################*/

router.route('/admin/deleteAnOrder/:deleteId')
    .delete(function (req, res) {
        var id = req.params.deleteId;
        console.log('delete order req',req.params.deleteId);
        placeOrderSchema.remove({_id: id},function (err) {
            if (err)
                res.status(500).send();
            //console.log(placeOrderData);
            else
            res.status(200).send();
        });
    });
/*#######################################################
	for adding a product to database ====================
#########################################################*/
router.route('/admin/addProductToDB')
    .post(function (req, res) {
        console.log('Post - addProduct object', req.body);
        productSchema.create({
            name: req.body.name,
            productImageURL : req.body.productImageURL,
            productID: req.body.productID,
            productCode: req.body.productCode,
            length: req.body.length,
            width: req.body.width,
            height: req.body.height,
            built_material: req.body.buildMaterial,
            application: req.body.applications,
            construction_details: req.body.construction_details,
            productPrice : req.body.productPrice,
            vendorID: req.body.vendorID,
            productAvailability: '',
            availabilityType: 'F',
            isProductSold: false,
            quantity: req.body.quantity,
            warranty: req.body.warranty,
            rating: req.body.rating,
            deliveryTime: req.body.deliveryTime,
            paymentMode: req.body.paymentMode,
            special_req: req.body.special_req
            },
            function (err, product) { // this function does the additional thing after adding product
                if (err)
                    res.send(err);
                console.log('product added successfully');
                productSchema.find(function (err, products) {
                    if (err)
                        res.send(err);
                    res.json(products); // send all the products available in database
                });
            });
    });


/*###################################################################################
    get the product from DB for update ====================
#####################################################################################*/

router.route('/admin/productForUpdate')
    .post(function (req, res) {
        productSchema.find({productID: req.body.productID}, function (err, outputProduct) {
            if(err){
                res.send(err);
            }
            res.json(outputProduct);
        });
    });

router.route('/admin/updateProduct')
    .put(function (req, res) {
        console.log(req.body);
        productSchema.findOneAndUpdate(req.body.productID, req.body, function (err, updateProductObject) {
            if(err)
                res.send(err);
            res.send({
                status:200,
                updatedProduct: updateProductObject
            });
        });
    });

    /*###################################################################################
    for deleting logo from database and emptying logo directory ====================
#####################################################################################*/

router.route('/admin/deleteLogo')
    .post(function (req, res) {
        logoSchema.remove({},
            function (err, removed) {
                if (err)
                    res.send(err);
                res.json(removed);
            });
    });

router.route('/admin/deleteLogoDirectory')
    .post(function (req, res) {
        console.log('to empty the directory', req.body);
        fs.emptyDir(req.body.directoryPath, function (err) {
            if (!err) console.log('successfully deleted!')
        });
    });
/*#######################################################
    for adding a logo to database ====================
#########################################################*/
router.route('/admin/addLogo')
    .post(function (req, res) {
        console.log('Post - addLogo object', req.body);
        logoSchema.create({
                logoImagePath: req.body.logoImagePath
            },
            function (err, product) { // this function does the additional thing after adding logo to db
                if (err)
                    res.send(err);
                console.log('logo added successfully');
                logoSchema.find(function (err, logo) {
                    if (err)
                        res.send(err);
                    res.json(logo); // get the added logo object and send it as response
                });
            });
    });

/*#########################################################
	for uploading images to local-disk ====================
##########################################################*/
router.route('/admin/addProduct/productImage')
    .post(function (req, res) {
        imageUpload(req, res, function (err) {
            if (err) {
                console.log(err);
                res.json({
                    error_code: 1,
                    err_desc: err
                });
                return;
            }
            res.json({
                error_code: 0,
                err_desc: null
            });
        });
    });
module.exports = router;

/*#########################################################
    for uploading website logo to local-disk ====================
##########################################################*/
router.route('/admin/landingPage/addLogoImage')
    .post(function (req, res) {
        logoUpload(req, res, function (err) {
            if (err) {
                console.log(err);
                res.json({
                    error_code: 1,
                    err_desc: err
                });
                return;
            }
            res.json({
                error_code: 0,
                err_desc: null
            });
        });
    });
module.exports = router;