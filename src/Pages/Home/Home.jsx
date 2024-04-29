import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import '../../components/Products/Products.scss';

const Home = () => {
    return (
        <>
           <NavBar/>
           <Banner/>
           <div className='Product-card-container'>
           <Products />
           </div>
        </>    

    );


};

export default Home