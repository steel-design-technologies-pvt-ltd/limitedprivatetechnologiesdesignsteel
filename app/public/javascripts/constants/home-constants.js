(function(){
    var appModule = angular.module('appModule');
    appModule.constant('homeConstants',{
        "websiteMotto": "Online Sale of equipment, new development of ferrous and stainless steel equipment, commercial and residential kitchen layout planning.",
        
        "companyPromise": [{
            "promiseHeading": "Our Promise",
            "promiseText": "Minimise the cost to give best quality product",
            "imageLink": "company-promises/promise"
        },{
            "promiseHeading": "100% Assurance",
            "promiseText": "Be 100% assured about the product delivered.",
            "imageLink": "company-promises/promise"
        },{
            "promiseHeading": "Customer Support",
            "promiseText": "Always ready to support customer with flexibility mode",
            "imageLink": "company-promises/promise"
        }],
        
        "testimonyList": [{
            "imageUrl": "images/testimonial/person.jpg",
            "testimonyText": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!",
            "testimonyUsername": "Shivir Kumar Tomar"
        },{
            "imageUrl": "images/testimonial/person.jpg",
            "testimonyText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.",
            "testimonyUsername": "Shubham"
        },{
            "imageUrl": "images/testimonial/person.jpg",
            "testimonyText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.",
            "testimonyUsername": "Anonymous"
        }]
    });
})();