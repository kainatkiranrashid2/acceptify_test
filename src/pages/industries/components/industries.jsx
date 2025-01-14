import React from "react";


const IndustriesSection = () => {
  const cardsData = [
  {
    "id": 1,
    "title": "Airlines",
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736761892/components/industries_page/industries_cards/airlines.png",
    "description": "Enable seamless inflight transactions for food and beverage purchases, seat upgrades and duty-free purchases with or without internet connectivity. With the ability to automatically switch between real-time and store and forward transactions. Enhance passenger experience, boost revenue opportunities and reduce declined transaction rates with Acceptify."
  },
  {
    "id": 2,
    "title": "Parking Operators", 
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736761944/components/industries_page/industries_cards/parking_operator.png",
    "description": "Parking operators can benefit greatly from a payment solution that can operate in online and offline environments. During major events, when thousands of attendees overwhelm local cellular or WiFi networks Acceptify’s offline capability ensures uninterrupted payment process, keeping attendees moving, reducing delays and maximizing revenue."
    
  },
  {
    "id": 3,
    "title": "Ferries & Cruises", 
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736762030/components/industries_page/industries_cards/cruises.png",
    "description": "Provide smooth onboard transactions for ticket upgrades, food and beverage services, and merchandise purchases, whether connected to the internet or not. With the capability to seamlessly toggle between real-time and offline transactions. Enhance the passenger experience, maximize revenue potential, and minimize declined transactions with Acceptify"

  },
  {
    "id": 4,
    "title": "Trains", 
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736762080/components/industries_page/industries_cards/trains.png",
    "description": "Offer hassle-free in-train transactions for ticket upgrades, snacks, beverages, and other onboard services, even without an active internet connection. Automatically switch between live and store-and-forward transaction modes for uninterrupted service. Elevate passenger satisfaction, drive additional revenue, and reduce transaction declines with Acceptify."

  },
  {
    "id": 5,
    "title": "Hospitality", 
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736762111/components/industries_page/industries_cards/hospitality.png",
    "description": "Enhance guest experience and streamline transactions in hotels, resorts, and other hospitality settings with Acceptify’s mobile payment solution. Whether guests are checking in, purchasing room upgrades, or ordering room service, transactions can be processed smoothly, online or offline, ensuring uninterrupted service.",

  },
  {
    "id": 6,
    "title": "Retail", 
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736762209/components/industries_page/industries_cards/retail.png",
    "description": "Revolutionize your retail operations with Acceptify, providing mobile payment solutions that work both online and offline. Whether you’re in a pop-up shop, or a busy retail store, Acceptify ensures that your customers can pay for purchases without interruptions, even when Wi-Fi or cellular networks are unavailable.",

  },
  {
    "id": 7,
    "title": "Live Events", 
    "src": "https://res.cloudinary.com/acceptify/image/upload/v1736762141/components/industries_page/industries_cards/live_events.png",
    "description": "Maximize revenue and minimize delays during live events with Acceptify’s offline payment solution. At concerts, festivals, or sports events, Acceptify ensures seamless transactions for ticket sales, merchandise, food, and beverages – even when local networks are overwhelmed or unavailable. Ensure your event runs smoothly and attendees are happy.",

  },
  ]
  return (
    <section className="dark:bg-[#06142F]">
      <div className="container">
        <div className="mx-[95px] mt-9">
          <h1 className="text-center dark:text-white">
            Payments everywhere, even without Internet
          </h1>
          <p className="text-center dark:text-white">
            Empower your enterprise with a cutting-edge payment solution
            designed for mobile environments where offline capability maybe
            required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
