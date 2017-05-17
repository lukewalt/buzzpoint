import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});


module.exports.createPost = ({ body }, res, next) => {
  console.log('posted body', body);

  // deconstructs requst body with items from post table shema
  let deconstructedPost = {
    "user_id": body.user_id,
    "positive": body.positive,
    "comment": body.comment,
    "image": body.image,
    "latitude": body.latitude,
    "longitude": body.longitude,
    "timestamp": body.timestamp,
  };

  // cleans array of commas from raw address
  let getRidofCommas = body.formattedAddress.replace(/[, ]+/g, " ").trim();
  // turns cleaned string into array
  let stringToArray = getRidofCommas.split(' ');
  // compares every zipcode to the new array
  zipcodes.map(i => {
    stringToArray.forEach(e => {
      if (e === i.zipcode) {
        deconstructedPost.zipcode = parseInt(i.zipcode);
        deconstructedPost.area_name = i.area_name;
        deconstructedPost.zone = i.zone;
      } else {
        deconstructedPost.zipcode = 37201;
        deconstructedPost.area_name = "Downtown";
        deconstructedPost.zone = 1;

      }
    })
  })


  // deconstructs tag ids from req body to make row insertinos for pivot table
  let tagIDs = body.tag_ids;

  // sends deconstructed obj to be posted to post tables
  Post.createPost(deconstructedPost)
  .then( post => {
    res.status(201).json(post);
    // defines empty array to hold object rows for pivot table
    let postTagRow = [];
    // creates object for each row insertion
    // pushed each tag id as a value along with the post id that we get back from the promise
    tagIDs.forEach( tagId => {
      postTagRow.push({"post_id": post.id, "tag_id": tagId})
    })
    // calls bookshelf method to save our collection to the pivot table
    PostTags.createPostTagRows(postTagRow)
    .then( rows => rows )
    .catch( err => err )
  })
  .catch( error => next(error))
};



[
    {
        "zipcode": "37214",
        "area_name": "Donelson",
        "zone" : 2
    },
    {
        "zipcode": "37076",
        "area_name": "Hermitage",
        "zone" : 2
    },
    {
        "zipcode": "37138",
        "area_name": "Old Hickory",
        "zone" : 2
    },
    {
        "zipcode": "37206",
        "area_name": "East Nashville",
        "zone" : 2
    },
    {
        "zipcode": "37216",
        "area_name": "Inglewood",
        "zone" : 2
    },
    {
        "zipcode": "37115",
        "area_name": "Madison",
        "zone" : 2
    },
    {
        "zipcode": "37211",
        "area_name": "South Nashville",
        "zone" : 3
    },
    {
        "zipcode": "37013",
        "area_name": "Antioch, Cane Ridge",
        "zone" : 3
    },
    {
        "zipcode": "37027",
        "area_name": "Brentwood",
        "zone" : 3
    },
    {
        "zipcode": "37220",
        "area_name": "Oak Hill",
        "zone" : 3
    },
    {
        "zipcode": "37204",
        "area_name": "12 South, Berry Hill, Waverly",
        "zone" : 3
    },
    {
        "zipcode": "37215",
        "area_name": "Green Hills",
        "zone" : 3
    },
    {
        "zipcode": "37221",
        "area_name": "Bellevue",
        "zone" : 4
    },
    {
        "zipcode": "37205",
        "area_name": "West Nashville",
        "zone" : 4
    },
    {
        "zipcode": "37203",
        "area_name": "Midtown",
        "zone" : 4
    },
    {
        "zipcode": "37201",
        "area_name": "Downtown",
        "zone" : 1
    },
    {
        "zipcode": "37219",
        "area_name": "Downtown",
        "zone" : 1
    },
    {
        "zipcode": "37212",
        "area_name": "Hillsboro Village",
        "zone" : 3
    },
    {
        "zipcode": "37208",
        "area_name": "Germantown",
        "zone" : 1
    },
    {
        "zipcode": "37122",
        "area_name": "Mt. Juliet",
        "zone" : 2
    },
    {
        "zipcode": "37167",
        "area_name": "Smyrna",
        "zone" : 2
    },
    {
        "zipcode": "37086",
        "area_name": "LaVergne",
        "zone" : 2
    },
    {
        "zipcode": "37072",
        "area_name": "Goodlettsville",
        "zone" : 1
    },
    {
        "zipcode": "37075",
        "area_name": "Hendersonville",
        "zone" : 1
    },
    {
        "zipcode": "37137",
        "area_name": "Nolensville",
        "zone" : 3
    },
    {
        "zipcode": "37209",
        "area_name": "West Nashville",
        "zone" : 4
    }
]
