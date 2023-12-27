
  // Your Flickr API key
  const flickrApiKey = 'dde68e792b627ad09b0ffcf15a6cab2d';

  // Function to fetch photos from a photoset using Flickr API
  async function fetchPhotoset(photosetId) {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickrApiKey}&photoset_id=${photosetId}&format=json&nojsoncallback=1`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.stat === 'ok') {
      return data.photoset.photo;
    } else {
      console.error('Error fetching photos:', data.message);
      return [];
    }
  }

  // Function to initialize Owl Carousel with photo URLs
  function initializeCarousel(photoUrls) {
    const owlCarousel = $('#myCarousel');
    
    // Fixed height for all photos
    const fixedHeight = 800; // Set your desired fixed height in pixels
    
    // Append images to the carousel container
    photoUrls.forEach(photoUrl => {
      owlCarousel.append(`<div class="item"><img src="${photoUrl}" alt="Flickr Photo" style="height: ${fixedHeight}px; width: auto;"></div>`);
    });

    // Initialize Owl Carousel
    owlCarousel.owlCarousel({
    items:2,
    loop:true,
    margin:1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
    });
  }

  // Example: Fetch photos from a photoset and initialize the carousel
  const photosetId = '72177720313521573'; // Replace with your actual photoset ID
  fetchPhotoset(photosetId)
    .then(photoData => {
      const photoUrls = photoData.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`);
      initializeCarousel(photoUrls);
    })
    .catch(error => console.error('Error:', error));

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:1,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:false
// });

//Key:
//dde68e792b627ad09b0ffcf15a6cab2d

//Secret:
//ac4243378d7ea417

//Get NewLiq Photos

// var getPhotosURL = 'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=dde68e792b627ad09b0ffcf15a6cab2d&photoset_id=72177720313521573&user_id=199743816%40N02&format=json&nojsoncallback=1'
// $.ajax(getPhotosURL).done(function (result) {
//     //console.log(result.photoset.photo);
    
//       const owlCarousel = $('.owl-carousel');
//     // Add the demo images as links with thumbnails to the page:
//     $.each(result.photoset.photo, function (index, photo) {
//         var photoUrl = nlsPhoto(photo.id, index);
//         owlCarousel.append(`<div class="item"><img src="${photoUrl}" alt="Flickr Photo"></div>`);
      
//     });
//     // Initialize Owl Carousel
//       owlCarousel.owlCarousel({
//         items: 1,
//         autoplay: true,
//         autoplayTimeout: 3000, // Auto-slide every 3 seconds
//         loop: true
//       });
// }); 


// function nlsPhoto(photoID, index){
    
//     var getPhotoURL = 'https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=dde68e792b627ad09b0ffcf15a6cab2d&photo_id='+photoID+'&secret=ac4243378d7ea417&format=json&nojsoncallback=1';
//     var photoURL = '';
// // {
// //         url: (window.location.protocol === 'https:' ? 'https://secure' : 'http://api') + '.flickr.com/services/rest/',
// //         data: {
// //             format: 'json',
// //             method: 'flickr.photos.getInfo',
// //             api_key: 'dde68e792b627ad09b0ffcf15a6cab2d',
// //             photo_id: photoID,
// //             secret: 'ac4243378d7ea417'
// //         },
// //         dataType: 'jsonp',
// //         jsonp: 'jsoncallback'
// //     }
    
//     $.ajax(getPhotoURL).done(function (result) {
//         // Extract photo URLs from the response
//       photoURL =  'http://farm' + result.photo.farm + '.static.flickr.com/' + result.photo.server + '/' + result.photo.id + '_' + result.photo.secret +  '_b.jpg'; 

// //       // Reference to the Owl Carousel container
// //       const owlCarousel = $('.owl-stage');

// //       // Append images to the carousel container
// //       owlCarousel.append(`<div class="owl-item cloned"><div><img src="${photoUrl}" alt="Flickr Photo"></div></div>`);


        
// //         console.log(result.photo);
// //         var tags = result.photo.tags.tag.map(tag => tag.raw);
// //         var baseUrl = 'http://farm' + result.photo.farm + '.static.flickr.com/' + result.photo.server + '/' + result.photo.id + '_' + result.photo.secret +  '_b.jpg'; 
// //         if(tags.includes('image1')){
// //             replaceSrcForDuplicates('image1', baseUrl);
// //         }
// //         if(tags.includes('image2')){
// //             replaceSrcForDuplicates('image2', baseUrl);
// //         }
// //         if(tags.includes('image3')){
// //             replaceSrcForDuplicates('image3', baseUrl);
// //         }
// //         if(tags.includes('image4')){
// //             replaceSrcForDuplicates('image4', baseUrl);
// //         }
// //         if(tags.includes('image5')){
// //             replaceSrcForDuplicates('image5', baseUrl);
// //         }
//     }); 
//     console.log(photoURL);
//     return photoURL;
// }

//   function replaceSrcForDuplicates(elementId, newSrc) {
//     const elements = document.querySelectorAll(`[id="${elementId}"]`);
//     if (elements.length > 0) {
//       elements.forEach(element => {
//         element.src = newSrc;
//       });
//     } else {
//       console.error(`No elements found with ID '${elementId}'.`);
//     }
//   }
