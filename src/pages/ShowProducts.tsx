//icons
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

//mui
import { IconButton, Rating, Tooltip } from "@mui/material";

//styles
import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
const {
  ShowItems,
  ProductCard,
  discount,
  imgcontainer,
  head,
  price,
  FavIcon,
  Button,
  buyBtn_Price,
  topMemu,
  row,
  form,
  searchBtn,
  formInput,
  basket,
  Haert,
} = styles;
import { AddItemToCard, AddItemToFavList } from "@Redux/Cart/CartSlice";
import { memo } from "react";

import Basket from "@components/feedback/Basket";
import { Link } from "react-router-dom";
import useProducts from "@hooks/useProducts";

import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

// type TItem = {
//   AllItems: {
//     id: string;
//     images: string;
//     title: string;
//     price: number;
//     cat_prefix: string;
//     Quantity?: number;
//     discount: string;
//   }[];
// };
const ShowProducts = () => {
  const { FavItem, dispatch, isDisabled, setisDisabled, CartItem } =
    useProducts();
  const Allproducts = [
    {
      id: "1",
      images: "/img/product_01.png",
      title: "Real Madrid shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "2",
      images: "/img/product_02.png",
      title: "men's shoes",
      price: 300,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "20%",
    },
    {
      id: "3",
      images: "/img/product_03.png",
      title: "Vacuum Cleaner ",
      price: 3500,
      cat_prefix: "electricmachines",
      Quantity: 1,
      max: 3,
      discount: "10%",
    },
    {
      id: "4",
      images: "/img/product_04.png",
      title: " Mobile",
      price: 5400,
      cat_prefix: "Accessoriesdevices",
      Quantity: 1,
      max: 3,
      discount: "30%",
    },
    {
      id: "5",
      images: "/img/product_05.png",
      title: " Fully automatic",
      price: 8000,
      cat_prefix: "electricmachines",
      Quantity: 1,
      max: 3,
      discount: "7%",
    },
    {
      id: "6",
      images: "/img/product_06.png",
      title: "Football ",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "10%",
    },
    {
      id: "7",
      images: "/img/product_07.png",
      title: "polo shirt",
      price: 100,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "21%",
    },
    {
      id: "8",
      images: "/img/product_08.png",
      title: "generating",
      price: 6000,
      cat_prefix: "electricmachines",
      Quantity: 1,
      max: 3,
      discount: "13%",
    },
    {
      id: "9",
      images: "/img/product_09.png",
      title: " set of clothes ",
      price: 1500,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "10%",
    },
    {
      id: "10",
      images: "/img/product_10.png",
      title: " Dress Soiree ",
      price: 2000,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "7%",
    },
    {
      id: "11",
      images: "/img/product_11.png",
      title: "Women's hat ",
      price: 200,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "8%",
    },
    {
      id: "12",
      images: "/img/product_12.png",
      title: " High heels",
      price: 900,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "13",
      images: "/img/product_13.png",
      title: "microwave",
      price: 4000,
      cat_prefix: "electricmachines",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "14",
      images: "/img/product_14.png",
      title: "a fan",
      price: 300,
      cat_prefix: "electricmachines",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "15",
      images: "/img/product_15.png",
      title: " Barcelona T-shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "16",
      images: "/img/product_16.png",
      title: " Brazil T-shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "17",
      images: "/img/product_17.png",
      title: "  female bag",
      price: 900,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "18",
      images: "/img/product_18.png",
      title: "Wristwatch",
      price: 350,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "19",
      images: "/img/product_19.png",
      title: "Kochi",
      price: 250,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "20",
      images: "/img/product_20.png",
      title: "  Arsenal shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "21",
      images: "/img/product_21.png",
      title: "Dress Soiree ",
      price: 2000,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "22",
      images: "/img/product_22.png",
      title: " men suit",
      price: 1500,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "23",
      images: "/img/product_23.png",
      title: "electric motor ",
      price: 7000,
      cat_prefix: "electricmachines",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "24",
      images: "/img/product_24.png",
      title: " Liverpool T-shirt ",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "25",
      images: "/img/product_25.png",
      title: " Bayern T-shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "26",
      images: "/img/product_26.png",
      title: "Paris T-shirt ",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "27",
      images: "/img/product_27.png",
      title: " Chelsea T-shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "28",
      images: "/img/product_28.png",
      title: "United shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "29",
      images: "/img/product_29.png",
      title: "City T-shirt",
      price: 120,
      cat_prefix: "Sports",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "30",
      images: "/img/product_30.png",
      title: "female bag ",
      price: 900,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "31",
      images: "/img/product_31.png",
      title: " female bag",
      price: 900,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "32",
      images: "/img/product_32.png",
      title: "female bag ",
      price: 900,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "33",
      images: "/img/product_33.png",
      title: "female bag ",
      price: 900,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "34",
      images: "/img/product_34.png",
      title: "Dress Soiree",
      price: 2500,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "35",
      images: "/img/product_35.png",
      title: "set of clothes",
      price: 2000,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "36",
      images: "/img/product_36.png",
      title: " Mobile",
      price: 5400,
      cat_prefix: "Accessoriesdevices",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "37",
      images: "/img/product_37.png",
      title: " Mobile ",
      price: 9000,
      cat_prefix: "Accessoriesdevices",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "38",
      images: "/img/product_38.png",
      title: " Mobile ",
      price: 7500,
      cat_prefix: "Accessoriesdevices",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "39",
      images: "/img/product_39.png",
      title: " Mobile ",
      price: 7500,
      cat_prefix: "Accessoriesdevices",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "40",
      images: "/img/product_40.png",
      title: " Sunglasses ",
      price: 300,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "41",
      images: "/img/product_41.png",
      title: " Shaver ",
      price: 200,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "42",
      images: "/img/product_42.png",
      title: " Wristwatch ",
      price: 100,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "43",
      images: "/img/product_43.png",
      title: " headphone ",
      price: 500,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "44",
      images: "/img/product_44.png",
      title: " Kochi ",
      price: 50,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "45",
      images: "/img/product_45.png",
      title: " Kochi ",
      price: 50,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "46",
      images: "/img/product_46.png",
      title: " Kochi ",
      price: 50,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "47",
      images: "/img/product_47.png",
      title: " boots ",
      price: 200,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "48",
      images: "/img/product_48.png",
      title: " Kochi ",
      price: 50,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "49",
      images: "/img/product_49.png",
      title: " T-shirt ",
      price: 20,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "50",
      images: "/img/product_50.png",
      title: " T-shirt ",
      price: 30,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "51",
      images: "/img/product_51.png",
      title: " T-shirt ",
      price: 30,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "52",
      images: "/img/product_52.png",
      title: " T-shirt ",
      price: 30,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "53",
      images: "/img/product_53.png",
      title: " T-shirt ",
      price: 100,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "54",
      images: "/img/product_54.png",
      title: "chair",
      price: 100,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "55",
      images: "/img/product_55.png",
      title: " chair ",
      price: 100,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "56",
      images: "/img/product_56.png",
      title: "chair ",
      price: 100,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "57",
      images: "/img/product_57.png",
      title: " Bed ",
      price: 300,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "58",
      images: "/img/product_58.png",
      title: "chair ",
      price: 100,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "59",
      images: "/img/product_59.png",
      title: "chair ",
      price: 100,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "60",
      images: "/img/product_60.png",
      title: "chair ",
      price: 150,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "61",
      images: "/img/product_61.png",
      title: "chair ",
      price: 100,
      cat_prefix: "HomeFurniture",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "62",
      images: "/img/product_62.png",
      title: " Wristwatch ",
      price: 80,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "63",
      images: "/img/product_63.png",
      title: " stockings ",
      price: 30,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "64",
      images: "/img/product_64.png",
      title: " Bag ",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "65",
      images: "/img/product_65.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "66",
      images: "/img/product_66.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "67",
      images: "/img/product_67.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "68",
      images: "/img/product_68.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "69",
      images: "/img/product_69.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "70",
      images: "/img/product_70.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "71",
      images: "/img/product_71.png",
      title: " Cars ",
      price: 60,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "72",
      images: "/img/product_72.png",
      title: " Cars ",
      price: 600000,
      cat_prefix: "Cars",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "73",
      images: "/img/product_73.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "74",
      images: "/img/product_74.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "75",
      images: "/img/product_75.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "76",
      images: "/img/product_76.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "77",
      images: "/img/product_77.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "78",
      images: "/img/product_78.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "79",
      images: "/img/product_79.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
    {
      id: "80",
      images: "/img/product_80.png",
      title: "Beauty Bursh",
      price: 60,
      cat_prefix: "FashionandAccessories",
      Quantity: 1,
      max: 3,
      discount: "15%",
    },
  ];

  return (
    <>
      <div className={ShowItems}>
        <Container style={{ maxWidth: "1700px" }}>
          <div className={topMemu}>
            <div className={head}>Shop Our Products</div>
            <Form className={form}>
              <FormControl
                type="text"
                className={formInput}
                style={{ height: "55px" }}
                placeholder="Are you looking for a specific product?"
              />
              <div style={{ textDecoration: "none" }} className={searchBtn}>
                Search
              </div>
            </Form>
          </div>
          <Row className={row}>
            {Allproducts.length > 0 ? (
              Allproducts.map((e) => (
                <Col md={6} lg={3} key={e.id} className={ProductCard}>
                  <div className="d-flex justify-content-between">
                    <Tooltip title="Add to favourites">
                      <IconButton
                        onClick={() => {
                          dispatch(AddItemToFavList(e));
                        }}
                      >
                        <FaHeart className={FavIcon} />
                      </IconButton>
                    </Tooltip>
                    <div className={discount}>discount : {e.discount}</div>
                  </div>
                  <div className={imgcontainer}>
                    <img src={e.images} alt={e.title} className="img-fluid" />
                  </div>
                  <div className={head}>{e.title}</div>
                  <Rating
                    name="simple"
                    value={5}
                    style={{ direction: "ltr" }}
                  />

                  <div className={buyBtn_Price}>
                    <div className={price}>Price : {e.price} $</div>

                    <button
                      className={Button}
                      onClick={() => {
                        dispatch(AddItemToCard(e));
                        setisDisabled(true);
                      }}
                      disabled={isDisabled}
                    >
                      {isDisabled ? (
                        <>
                          <Spinner animation="border" size="sm" /> Loading ...
                        </>
                      ) : (
                        <>
                          Add to cart
                          <TiShoppingCart />
                        </>
                      )}
                    </button>
                  </div>
                </Col>
              ))
            ) : (
              <LottieHandler type="empty" message="There Is No Products" />
            )}
          </Row>
        </Container>
      </div>
      {CartItem.length > 0 && (
        <div className={basket}>
          <Basket />
        </div>
      )}

      {FavItem.length > 0 && (
        <Link to="/fav" className={Haert} cart-length={FavItem.length}>
          <FaHeart />
        </Link>
      )}
    </>
  );
};

export default memo(ShowProducts);
