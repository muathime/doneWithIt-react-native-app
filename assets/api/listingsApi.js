import apiClient from './client';

const getListings = () => apiClient.get('/listings')

const postListings = listing => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category);
  data.append("description", listing.description);

  listing.imageUrl.forEach((element, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpg",
      uri: element.image,
    })
  );

//  data.append("images",
//             {
//                 name: "Uploaded_image",
//                 type: "image/jpg",
//                 uri: "http://192.168.0.104:9000/assets/camera2_full.jpg",
//             });


  if (listing.userLoc)
  data.append("location", JSON.stringify(listing.userLoc));

  // return console.log(data);

  return apiClient.post("/listings", data);
}

export default {
  getListings,
  postListings,
};