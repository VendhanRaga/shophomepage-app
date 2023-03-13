
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

function App() {

  const data = [
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/kh80vww0/foundation/9/m/u/30-9-to-5-complexion-care-face-cream-beige-lakme-original-imafxahkgmkmvsmd.jpeg?q=70",
      productName: "Care Face Cream",
      productPrice: "$80.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/krce64w0/foundation/z/h/9/invisible-finish-spf-8-lakme-original-imag55bw3qadten7.jpeg?q=70",
      productName: "Invisible Finish SPF",
      productPrice: "$24.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/kyrlifk0/lipstick/p/f/d/2-moisture-matte-longstay-lipstick-for-12-hour-long-stay-melon-original-imagaxh9e2vehsvd.jpeg?q=70",
      productName: "Longstay Lipsstrick",
      productPrice: "$99.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/ki96c280/mascara/t/p/k/12-ultra-curl-long-lasting-fabulash-mascara-mars-original-imafy36zc4yhqenb.jpeg?q=70",
      productName: "Fabulash Mascara",
      productPrice: "$17.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/kwzap3k0/lipstick/8/s/8/36-16-color-ultra-pigmented-infinity-matte-lip-color-palette-original-imag9j5tr7hcurvq.jpeg?q=70",
      productName: "Mattle Lip Color",
      productPrice: "$51.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/xif0q/lip-balm/d/d/d/-original-imagm83m2gzfe39v.jpeg?q=70",
      productName: "Lip Plumbing Mask",
      productPrice: "$75.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/xif0q/lip-balm/g/5/q/7-bubblegum-lip-balm-for-men-1-beardo-original-imagjkhzfjt5srxj.jpeg?q=70",
      productName: "Lip Balm for Men",
      productPrice: "$87.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImg: "https://rukminim1.flixcart.com/image/612/612/kebpqq80/lip-balm/g/w/c/39-8-baby-lips-pink-lolita-baby-lips-cherry-kiss-maybelline-new-original-imafvf4krxdekxhq.jpeg?q=70",
      productName: "Baby Lips Pink",
      productPrice: "$229.00",
      rating: "⭐⭐⭐⭐⭐",
    },

  ]
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='nav-links'>
        <a className='tittle1' href="#">Cosmetics Cart</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <select>
          <option >Shop</option>
          <option value="option2">All products</option>
          <option value="option3">popular Items</option>
          <option value="option4">New Arrivals</option>
        </select>

      </nav>
      <header className='header'>
        <div >
          <h1>Beauty trends and fashion</h1>
          <p>Beauty begins the moment you decide to be yourself.</p>
        </div>
      </header>
      <div className='cart'>
        <Badge bg="success">
          CART {count}
        </Badge>
      </div>

      <div className='map'>
        {data.map((prod, idx) => <Makeup
          idx={idx}
          prod={prod}
          count={count}
          setCount={setCount}

        />

        )}

      </div>










      <footer className='footer'>
        <div>
          <p>Copyright © Your Website 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Makeup({ prod, idx, count, setCount }) {
  const [show, setShow] = useState(false)
  function addToCart() {
    setShow(!show)
    setCount(count + 1)
  }
  function removeFromCart() {
    setShow(!show)
    setCount(count - 1)
  }
  return (


    <Card key={idx} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImg} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>
          {prod.productPrice}
        </Card.Text>
        <Card.Text>
          {prod.rating}
        </Card.Text>
        {/* conditional rendering */}
        {!show ?
          <Button
            variant="primary"
            onClick={addToCart}
          >ADD CART</Button> : ""}

        {show ? <Button
          variant="danger"
          onClick={removeFromCart}
        >Remove CART</Button> : ""}

      </Card.Body>
    </Card>



  )
}