const address = {
    pincode: 400001,
    street: 'Some Street',
    city: 'Some City',
    country: 'Some Country'
}

//Traditional Way
// const pincode = address.pincode;
// const street = address.street;
// const city = address.city;
const country = 'India';


//ES 6 Way
const { pincode, city, street, country: cn } = address;

console.log(pincode, city, street, cn);