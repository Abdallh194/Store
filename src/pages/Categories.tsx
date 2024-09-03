import { memo } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@styles/Asset/Global.module.css";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const { Categoris, CategorisCard, LinkStyle, title } = styles;
const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "electric machines",
      prefix: "electricmachines",
      image: "/cat_01.png",
    },
    {
      id: 2,
      title: "Fashion and Accessories",
      prefix: "FashionandAccessories",
      image: "/cat_04.png",
    },
    {
      id: 3,
      title: "Cars",
      prefix: "Cars",
      image: "/cat_05.png",
    },
    {
      id: 4,
      title: "Accessories devices",
      prefix: "Accessoriesdevices",
      image: "/cat_03.png",
    },
    {
      id: 5,
      title: "Sports",
      prefix: "Sports",
      image: "/cat_02.png",
    },
    {
      id: 6,
      title: "Home Furniture",
      prefix: "HomeFurniture",
      image: "/cat_06.png",
    },
  ];

  return (
    <div className={Categoris}>
      <Container fluid>
        <Row>
          {categories.length > 0 ? (
            categories.map((e) => {
              return (
                <Col md={4} lg="2" className={CategorisCard} key={e.id}>
                  <Link
                    to={`/categories/products/${e.prefix}`}
                    key={e.id}
                    className={LinkStyle}
                  >
                    <img
                      src={e.image}
                      alt={e.title}
                      width={100}
                      height={80}
                      className="img-fluid"
                    />
                    <div className={title}>{e.title}</div>
                  </Link>
                </Col>
              );
            })
          ) : (
            <LottieHandler type="empty" message="There Is No Categoreis" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default memo(Categories);
