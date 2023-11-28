import feature1 from "../images/featured/feature/bags and luggages-1.jpg";
import feature2 from "../images/featured/feature/bags and luggages-4.jpg";
import feature3 from "../images/featured/feature/bath skin care-1.jpg";
import feature4 from "../images/featured/feature/bath skin care-3.jpg";
import onsale1 from "../images/featured/feature/diapers-3.jpg";
import onsale2 from "../images/featured/feature/footwear-2.jpg";
import onsale3 from "../images/featured/feature/home decor-4.jpg";
import onsale4 from "../images/featured/feature/jewelry-3.jpg";
import toprated1 from "../images/featured/feature/shirts-1.jpg";
import toprated2 from "../images/featured/feature/shirts-3.jpg";
import toprated3 from "../images/featured/feature/jewelry-4.jpg";
import toprated4 from "../images/featured/feature/toys-2.jpg";

const FeaturedApi = [
  {
    feature: [
      {
        id: 1,
        name: "Feature",
        products: [
            {
                id: 1,
                img: feature1,
                title:
                  "SUITCASES",
                heading: "foot wear",
                price: "685",
              },
              {
                id: 2,
                img: feature2,
                title:
                  "BACK PACKS",
                heading: "foot wear",
                price: "685",
              },
              {
                id: 3,
                img: feature3,
                title:
                  "PERSONAL PRODUCTS",
                heading: "foot wear",
                price: "685",
              },
              {
                id: 4,
                img: feature4,
                title:
                  "MASSAGE OIL",
                heading: "foot wear",
                price: "685",
              },
        ],
      },
    ],
  },
  {
    feature: [
      {
        id: 2,
        name: "On Sale",
        products: [
            {
                id: 1,
                img: onsale1,
                title:
                  "DIAPERS",
                heading: "shirts",
                price: "685",
              },
              {
                id: 2,
                img: onsale2,
                title:
                  "SHOES",
                heading: "shirts",
                price: "685",
              },
              {
                id: 3,
                img: onsale3,
                title:
                  "HOME DECOR",
                heading: "shirts",
                price: "685",
              },
              {
                id: 4,
                img: onsale4,
                title:
                  "NECKLACE",
                heading: "shirts",
                price: "685",
              },
              
        ],
      },
    ],
  },
  {
    feature: [
      {
        id: 3,
        name: "Top Rated",
        products: [
            {
                id: 1,
                img: toprated1,
                title:
                  "MEN SHIRTS",
                heading: "home decor",
                price: "685",
              },
              {
                id: 2,
                img: toprated2,
                title:
                  "WOMAN SHIRT",
                heading: "home decor",
                price: "685",
              },
              {
                id: 3,
                img: toprated3,
                title:
                  "WOMAN NECKLACE",
                heading: "home decor",
                price: "685",
              },
              {
                id: 4,
                img: toprated4,
                title:
                  "WOMAN SHIRT",
                heading: "home decor",
                price: "685",
              },
        ],
      },
    ],
  },
 
];

export default FeaturedApi;
