const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Welcome to Bite Buddy..!</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Your go-to solution for delicious meals delivered right to your doorstep. Our mission is to make your dining experience convenient, enjoyable, and diverse, offering a wide range of cuisines and dishes from the best local restaurants.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Founded in 2023, Bite Buddy..! was born out of a passion for great food and a desire to connect people with their favorite meals effortlessly. We understand that in today’s fast-paced world, convenience is key, and that’s why we’ve created a platform that brings your favorite restaurants to your fingertips.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
          <li>
            <strong className="font-semibold">Wide Selection of Cuisines:</strong> Whether you’re craving Italian, Chinese, Indian, Mexican, or anything in between, we’ve got you covered. Our extensive network of restaurant partners ensures that you’ll always find something to satisfy your taste buds.
          </li>
          <li>
            <strong className="font-semibold">Fast and Reliable Delivery:</strong> We pride ourselves on our efficient delivery service. Our team of dedicated delivery partners works tirelessly to ensure your food arrives hot and fresh, just the way you like it.
          </li>
          <li>
            <strong className="font-semibold">User-Friendly App:</strong> Our app is designed with you in mind. With an intuitive interface, easy navigation, and secure payment options, ordering food has never been simpler.
          </li>
          <li>
            <strong className="font-semibold">Exclusive Deals and Offers:</strong> We love to treat our customers with special deals, discounts, and promotions. Keep an eye out for our exclusive offers and make your meals even more enjoyable.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
          <li>
            <strong className="font-semibold">Customer Satisfaction:</strong> Your satisfaction is our top priority. We are committed to providing exceptional service and delicious food every time you order.
          </li>
          <li>
            <strong className="font-semibold">Quality and Freshness:</strong> We partner with the best local restaurants that use high-quality, fresh ingredients to prepare your meals.
          </li>
          <li>
            <strong className="font-semibold">Community Focus:</strong> We believe in supporting local businesses and contributing to the community. By partnering with local restaurants, we help them reach a broader audience and grow their business.
          </li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Join Us</h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          Experience the joy of convenient dining with Bite Buddy. Whether you’re at home, at work, or on the go, we’re here to make sure you never have to compromise on great food. Download our app today and start exploring the world of culinary delights at your fingertips.
        </p>
        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          Thank you for choosing Bite Buddy..1. Bon appétit!
        </p>
        <a href="https://www.zomato.com/mobile" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Download the App
        </a>
      </section>
    </div>
  );
};

export default About;
