var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');


// GET all reviews for a hotel
module.exports.reviewsGetAll = function (req, res) {

    var hotelId = req.params.hotelId;

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, doc){
            res
                .status(200)
                .json( doc.reviews );
        });
        
    console.log("GET hotelId: " + hotelId);

};


// GET single review for a hotel
module.exports.reviewsGetOne = function (req, res) {

    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;    
    console.log("GET reviewId " + reviewId + " for hotelId: " + hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, hotel){
            var review = hotel.reviews.id(reviewId);
            res
                .status(200)
                .json( review );
        });

};