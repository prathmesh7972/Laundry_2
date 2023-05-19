import React from "react";
import vg from "../assets/2.jpeg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h2>Falashruti laundry</h2>
          <p>"Where Clean Meets Convenience"</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            "Experience impeccable laundry care at Falashruti Laundry. We deliver convenience, quality, and freshness. Trust us with your garments and enjoy a pristine wardrobe hassle-free."
          </p>
        </div>
      </div>
     <div>
      
     </div>
      <div className="home3" id="about">
        <div>
          <h1>About Us</h1>
          <p>
            Welcome to Falashruti Laundry! We are your premier destination for top-quality laundry services. With a strong focus on cleanliness and customer satisfaction, we are dedicated to providing a convenient and exceptional laundry experience.

            At Falashruti Laundry, we value your time and strive to make your laundry process hassle-free. Our modern facilities and advanced equipment ensure efficient and thorough cleaning of your garments.
          </p>
          {/* <p2>
          What sets us apart is our meticulous attention to detail and commitment to quality. We handle each item with care, utilizing industry-leading practices and eco-friendly detergents for clean, fresh, and well-maintained clothes.

Customer satisfaction is our utmost priority. We go above and beyond to provide reliable, timely, and affordable laundry services that meet your needs. Trust us with your laundry, and experience the Falashruti Laundry difference.

Make the most of your laundry experience by choosing Falashruti Laundry. Let us take care of your laundry needs so you can enjoy clean, well-cared-for clothes with convenience and peace of mind.
Join us today and discover the excellence of Falashruti Laundry.

          </p2> */}
        </div>
      </div>

      {/* <div className="home4" id="brands"> */}
      {/* <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div> */}

      {/* </div> */}
    </>
  );
};

export default Home;
