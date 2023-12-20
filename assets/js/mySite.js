//Key:
//dde68e792b627ad09b0ffcf15a6cab2d

//Secret:
//ac4243378d7ea417

//Get NewLiq Photos
$.ajax({
    url: (window.location.protocol === 'https:' ? 'https://secure' : 'http://api') + '.flickr.com/services/rest/',
    data: {
        format: 'json',
        method: 'flickr.photosets.getPhotos',
        api_key: 'dde68e792b627ad09b0ffcf15a6cab2d',
        photoset_id: '72177720313521573'
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
}).done(function (result) {
    //console.log(result);
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photoset.photo, function (index, photo) {
        nlsPhoto(photo.id, index);
    });
}); 


function nlsPhoto(photoID, index){
    var image1 = $('#image1');
    var image2 = $('#image2');
    var image3 = $('#image3');
    var image4 = $('#image4');
    var image5 = $('#image5');
    
    $.ajax({
        url: (window.location.protocol === 'https:' ? 'https://secure' : 'http://api') + '.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.photos.getInfo',
            api_key: 'dde68e792b627ad09b0ffcf15a6cab2d',
            photo_id: photoID,
            secret: 'ac4243378d7ea417'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var st = result.photo.description._content.split('.-.');
        var tags = result.photo.tags.tag.map(tag => tag._content);
        console.log(tags);
        var baseUrl = 'http://farm' + result.photo.farm + '.static.flickr.com/' + result.photo.server + '/' + result.photo.id + '_' + result.photo.secret +  '_b.jpg'; 
        if(tags.includes('image1')){
            document.getElementById("image1").src = baseUrl;
        }
        if(tags.includes('image2')){
            document.getElementById("image2").src = baseUrl;
        }
        if(tags.includes('image3')){
            document.getElementById("image3").src = baseUrl;
        }
        if(tags.includes('image4')){
            document.getElementById("image4").src = baseUrl;
        }
        if(tags.includes('image5')){
            document.getElementById("image5").src = baseUrl;
        }
    }); 
}
