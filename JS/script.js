// fade-in //
const sections =
document.querySelectorAll(".fade-in");

const observer =
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
sections.forEach(section => {
    observer.observe(section);
});

// Hero Slider
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 5000);

}


//navbar
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});

document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }

});

//Back To Top
const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* Quick Availability Section */
const availabilityForm = document.getElementById('availabilityForm');

if (availabilityForm) {
  availabilityForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // Basic validation
    if (checkin && checkout) {
      const url =
        `booking.html?checkin=${checkin}&checkout=${checkout}&guests=${guests}`;

      window.location.href = url;
    }
  });
}

/* Property Details Page Logic */
const properties = {
  'lekki-suite': {
    type: 'Shortlet',
    title: 'Lekki Phase 1 Executive Suite',
    location: 'Lekki Phase 1, Lagos',
    price: '₦85,000',
    priceLabel: 'per night',
    cta: 'Book Now',
    description: 'This modern serviced apartment is located in the heart of Lekki Phase 1, just minutes from restaurants, shopping malls, and business districts. Enjoy 24/7 power supply, fast Wi‑Fi, smart TV, housekeeping, and secure parking.',
    features: ['2 Bedrooms', '2 Bathrooms', '4 Guests', 'Parking'],
    amenities: ['Free Wi‑Fi', 'Smart TV', '24/7 Power', 'Security', 'Air Conditioning', 'Housekeeping'],
    images: [
      'Assets/Images/2_bedroom_shortlet.jfif',
      'Assets/Images/executive_suits.jfif',
      'Assets/Images/Shortlet.jfif',
      'Assets/Images/Bed.jpg'
    ]
  },

  'ikoyi-AP': {
    type: 'Shortlet',
    title: 'Ikoyi Premium Serviced Apartment',
    location: 'Ikoyi, Lagos',
    price: '₦150,000',
    priceLabel: 'per night',
    cta: 'Book Now',
    description: 'This modern serviced apartment is located in the heart of Ikoyi, just minutes from restaurants, shopping malls, and business districts. Enjoy 24/7 power supply, fast Wi‑Fi, smart TV, housekeeping, and secure parking.',
    features: ['2 Bedrooms', '2 Bathrooms', '4 Guests', 'Parking'],
    amenities: ['Free Wi‑Fi', 'Smart TV', '24/7 Power', 'Security', 'Air Conditioning', 'Housekeeping'],
    images: [
      'Assets/Images/shortlet_penthouse.jfif',
      'Assets/Images/AP_bedroom.jfif',
      'Assets/Images/AP_livingroom.jfif',
      'Assets/Images/AP_forSale_bedroom.jfif'
    ]
  },

  'vi-city-view': {
    type: 'Shortlet',
    title: 'Victoria Island City View Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦120,000',
    priceLabel: 'per night',
    cta: 'Book Now',
    description: 'A luxury city-view apartment designed for business travelers and premium short stays, featuring skyline views, high-speed internet, concierge support, and modern interiors.',
    features: ['1 Bedroom', '1 Bathroom', '2 Guests', 'City View'],
    amenities: ['Free Wi‑Fi', 'Smart TV', 'Gym Access', '24/7 Power', 'Security', 'Balcony'],
    images: [
      'Assets/images/VI_AP.jfif',
      'Assets/images/Premium_Shortlet.jfif',
      'Assets/images/Shortlet_Bedroom.jfif',
      'Assets/images/Suit_dining.jfif'
    ]
  },


  '3-bedroom-AP': {
    type: 'For Sale',
    title: '3 bedroom Apartment',
    location: 'Lekki, Lagos',
    price: '₦165M',
    priceLabel: 'asking price',
    cta: 'Request Inspection',
    description: 'An exceptional luxury duplex in lekki with spacious living areas, premium finishes, private parking, landscaped outdoor space, and excellent security.',
    features: ['5 Bedrooms', '6 Bathrooms', '2 Parking Spaces', 'Pool'],
    amenities: ['Private Pool', 'Smart Home Features', 'CCTV', 'Security Gate', 'Walk‑in Closet', 'Garden'],
    images: [
      'Assets/Images/3_bedroom_AP.jfif',
      'Assets/images/3_bedroom_shortlet.jfif',
      'Assets/images/Ap_forSale2_bedroom.jfif',
      'Assets/images/Studio_shortlet.jfif'
    
    ]
  },

  'ikoyi-duplex': {
    type: 'For Sale',
    title: 'Ikoyi Luxury Duplex',
    location: 'Ikoyi, Lagos',
    price: '₦350M',
    priceLabel: 'asking price',
    cta: 'Request Inspection',
    description: 'An exceptional luxury duplex in Ikoyi with spacious living areas, premium finishes, private parking, landscaped outdoor space, and excellent security.',
    features: ['5 Bedrooms', '6 Bathrooms', '2 Parking Spaces', 'Pool'],
    amenities: ['Private Pool', 'Smart Home Features', 'CCTV', 'Security Gate', 'Walk‑in Closet', 'Garden'],
    images: [
      'Assets/Images/AP_forSale.jfif',
      'Assets/images/3_edroom_shortlet.jfif',
      'Assets/images/Single_room_shortlet.jfif',
      'Assets/images/Ap_closet.jfif'
    
    ]
  },

  'vi-waterfront': {
    type: 'For Rent',
    title: 'Victoria Island Luxury Waterfront Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦15.5M',
    priceLabel: 'per year',
    cta: 'Schedule Inspection',
    description: 'A bright waterfront apartment offering lagoon views, modern finishes, excellent ventilation, secure parking, and a peaceful residential environment.',
    features: ['2 Bedrooms', '2 Bathrooms', 'Lagoon View', 'Parking'],
    amenities: ['Waterfront View', 'Elevator', '24/7 Power', 'Security', 'Parking', 'Balcony'],
    images: [
      'Assets/images/Luxury_AP.jfif',
      'Assets/images/Ap_forSale2_bedroom.jfif',
      'Assets/images/AP_bedroom3.jfif',
      'Assets/images/shortlet living_room.jfif'
    ]
  }

};

document.addEventListener('DOMContentLoaded', () => {

  // Only run on property page
  if (!document.getElementById('propertyTitle')) return;

  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get('id');

  const property = properties[propertyId];

  if (!property) {
    document.querySelector('main').innerHTML =
      '<h1 style="text-align:center;margin-top:50px;">Property not found</h1>';
    return;
  }

  // Basic info
  document.getElementById('propertyType').textContent = property.type;
  document.getElementById('propertyTitle').textContent = property.title;
  document.getElementById('propertyLocation').innerHTML =
    `<i class="fa-solid fa-location-dot"></i> ${property.location}`;

  document.getElementById('propertyDescription').textContent = property.description;

  // Price
  document.getElementById('propertyPrice').textContent = property.price;
  document.getElementById('propertyPriceLabel').textContent = property.priceLabel;

  // CTA button
  const ctaBtn = document.getElementById('propertyCTA');
  ctaBtn.textContent = property.cta;

  if (property.type !== 'Shortlet') {
    ctaBtn.href = '#contact';
  }

  // Features
  const featuresContainer = document.getElementById('propertyFeatures');
  featuresContainer.innerHTML = property.features
    .map(item => `<div>${item}</div>`)
    .join('');

  // Amenities
  const amenitiesContainer = document.getElementById('propertyAmenities');
  amenitiesContainer.innerHTML = property.amenities
    .map(item => `<div>${item}</div>`)
    .join('');

  // Images
  document.getElementById('mainImage').src = property.images[0];
  document.getElementById('thumb1').src = property.images[1];
  document.getElementById('thumb2').src = property.images[2];
  document.getElementById('thumb3').src = property.images[3];

  // Thumbnail click
  ['thumb1', 'thumb2', 'thumb3'].forEach(id => {
    document.getElementById(id).addEventListener('click', function () {
      document.getElementById('mainImage').src = this.src;
    });
  });

  document.title = `${property.title} | UrbanNest Realty`;
});