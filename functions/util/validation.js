const isEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Boolean(email.match(regEx));
};

let options = {
    provider: 'openstreetmap',
}
const geoCoder = require('node-geocoder')(options);

let getGeoCode = (address, city, country) => {

    let stringToGeocode;
    // Conditionals determine which string to give to the geoCoder
    if(!(exports.isEmpty(address))){
        stringToGeocode = address
    }
    else if(!(exports.isEmpty(city))){
        stringToGeocode = city
    }
    else if(!(exports.isEmpty(country))){
        stringToGeocode = country
    }
    // If everything is empty/undefined - return null
    else{
        return null;
    }

    return geoCoder.geocode(stringToGeocode);

}

exports.getGeoCodeLat=(address, city, country)=>{

    // Gets geoCode and returns back the latitude if geoCode request was successful
    let code = getGeoCode(address, city, country)
    if(code !== null){
        return code
            .then((res) => {
                return res[0].latitude;
            })
            .catch((err) => {
                console.log(err);
                return 0;
            });
    }
    // Else returns 0
    else{
        return 0;
    }

}

exports.getGeoCodeLong=(address, city, country)=>{

    // Gets geoCode and returns back the longitude if geoCode request was successful
    let code = getGeoCode(address, city, country)
    if(code !== null){
        return code
            .then((res) => {
                return res[0].longitude;
            })
            .catch((err) => {
                console.log(err);
                return 0;
            })
    }
    // Else returns 0
    else{
        return 0;
    }

}

exports.isEmpty = (string) => {
    if (string === null || string === undefined) {
        return false;
    }
    return string.trim() === '';
};

exports.validateSignUpData = (newUser) => {
    let errors = {};

    // Handle field
    if (newUser.handle === undefined || exports.isEmpty(newUser.handle)) errors.handle = 'Must not be undefined or empty';

    // Sign Up Method
    if (newUser.handle === undefined || exports.isEmpty(newUser.signUpMethod)) errors.signUpMethod = 'Must not be empty (Google or Email)'
    if (newUser.signUpMethod.toLowerCase() === 'email'){
        // Email Field
        if (newUser.email === undefined || exports.isEmpty(newUser.email)) errors.email = 'Must not be undefined or empty';
        else if (!isEmail(newUser.email)) errors.email = 'Must be a valid email address';

        // Password Field
        if (newUser.password === undefined || exports.isEmpty(newUser.password)) errors.password = 'Must not be undefined or empty'
    }
    else if (newUser.signUpMethod.toLowerCase() === 'google'){
        // Sign Up Token
        if (!newUser.hasOwnProperty('signUpToken') || exports.isEmpty(newUser.signUpToken)) errors.signUpToken = 'signUpToken not optional';
    }
    else
        errors.signUpMethod = 'Not a valid sign up method';

    // User Type (is Supplier?)
    if (!newUser.isSupplier === undefined) errors.isSupplier = 'Not optional - must indicate true or false (boolean)'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };

};

exports.reduceUserDetails = (data) => {
    let userDetails = {};
    let errors = {};

    // User Handle
    if(!exports.isEmpty(data.handle)) userDetails.handle = data.handle;
    else
        errors.handle = 'Must not be empty';

    // User Bio
    if(!exports.isEmpty(data.bio)) userDetails.bio = data.bio;

    // User Location Data
    if(data.hasOwnProperty('latitude') && data.hasOwnProperty('longitude')){
        const x = !(isNaN(data.latitude)) && data.latitude <= 90 && data.latitude >= -90;
        const y = isNaN(data.longitude) && data.longitude <= 180 && data.longitude >= -180;
        if(!x){
            errors.latitude = 'Incorrect format or range (needs number from -90 to 90)';
        }
        if(!y){
            errors.longitude = 'Incorrect format or range (needs number from -180 to 180)';
        }

        if(x && y){
            userDetails.location = new firebase.firestore.GeoPoint(data.latitude, data.longitude);
        }
    }

    // Add fields as necessary

    return userDetails;

};

exports.validateNewPostData = (post) => {

    let errors = {};
    // Basic Validation
    if(!post.hasOwnProperty('userHandle') || exports.isEmpty(post.userHandle)) errors.userHandle = 'Must not be empty'
    if(!post.hasOwnProperty('title') || exports.isEmpty(post.title)) errors.title = 'Must not be empty'
    // Add additional as necessary

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };

}