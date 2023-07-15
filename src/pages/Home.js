import React , {useState,useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'
import hero_img from '../assets/images/kylielips1.jpg'
import { Link } from 'react-router-dom'
import Services from '../service/Services'
import '../styles/home.css'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

const Home = () => {

const [trendingProducts,setTrendingProducts]=useState([])
const [bestSalesProducts,setBestSalesProducts]=useState([])

const year = new Date().getFullYear();

useEffect(()=>{
  const filteredTrendingProducts=products.filter(
  (item)=>item.category ==='lipstick'
  );

  const filteredBestSalesProducts=products.filter(
    (item)=>item.category ==='lipstick'
    );
  setTrendingProducts(filteredTrendingProducts);
  setBestSalesProducts(filteredBestSalesProducts);

},[])
  return (
    <Helmet title={"Home"}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero_content'>
                <p className='hero_subtitle'>
                  Trending Products in {year}</p>
                <h2>Yes Girl, You're Unique</h2>
                <p>The Essence Of Health & Vitality In One Place</p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'><Link to='/shop'>Shop Now</Link></motion.button>

              </div>
            </Col>
            <Col lg='4' md='4'>
              <div className='hero_img'>
                <img src={hero_img} alt='hgjyh' />
              </div>

            </Col>

          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text_center'>
              <h2 className='section_title'> Trending items</h2>
              <p></p>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
        </section>
        <section className='best_sales'>
          <Container>
          <Row>
            <Col lg='12' className='text_center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
          </Container>
        </section>
    </Helmet>
  

  )
}

export default Home;
