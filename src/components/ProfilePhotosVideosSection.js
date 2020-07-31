import React from "react";

const ProfilePhotosVideosSection = (props) => {
  let testArr = [
    {
      name: "Bryon",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/21/2019/08/Triban-RC120-road-bike-1-bafe6ca.jpg?quality=90&resize=768,574",
    },
    {
      name: "Karethel",
      image:
        "https://electric-scooter.shop/wp-content/uploads/2018/10/Electric-scooter-5400w.jpg",
    },
    {
      name: "Ruben",
      image:
        "https://cdn.shopify.com/s/files/1/1297/3303/products/starter-wooden-chess-set-and-box-combo-21184199809_grande.jpg?v=1575932119",
    },
  ];
  return (
    <div className="profile-photos-videos-container">
      {testArr.length > 0 ? (
        testArr.map((ele) => (
          <div className="photo-video-item">
            <div className="photo-video-item-image">
              <img src={ele.image} alt="test-pic" />
            </div>
            <div className="photo-video-item-name">{ele.name}</div>
          </div>
        ))
      ) : (
        <>You have no items</>
      )}
    </div>
  );
};
export default ProfilePhotosVideosSection;
