const isEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Boolean(email.match(regEx));
};

const isEmpty = (string) => {
    return string.trim() === '';
};

exports.validateSignUpData = (newUser) => {
    let errors = {};

    // Handle field
    if (!newUser.hasOwnProperty('handle') || isEmpty(newUser.handle)) errors.handle = 'Must not be empty';

    // Sign Up Method
    if (!newUser.hasOwnProperty('signUpMethod') || isEmpty(newUser.signUpMethod)) errors.signUpMethod = 'Must not be empty (Google or Email)'
    else if (newUser.signUpMethod !== 'Email' && newUser.signUpMethod !== 'Google') errors.signUpMethod = 'Not a valid sign up method';
    if (newUser.signUpMethod === 'Email'){
        // Email Field
        if (!newUser.hasOwnProperty('email') || isEmpty(newUser.email)) errors.email = 'Must not be empty';
        else if (!isEmail(newUser.email)) errors.email = 'Must be a valid email address';

        // Password fields
        if (!newUser.hasOwnProperty('password') || !newUser.hasOwnProperty('confirmPassword')) errors.password = 'Must not be undefined'
        if (isEmpty(newUser.password) || isEmpty(newUser.confirmPassword)) errors.password = "Can't use empty password"
        if (newUser.password !== newUser.confirmPassword) errors.confirmPassword = 'Passwords must match';
    }
    else if (newUser.signUpMethod === 'Google'){
        // Sign Up Token
        if (!newUser.hasOwnProperty('signUpToken') || isEmpty(newUser.signUpToken)) errors.signUpToken = 'signUpToken not optional';
    }

    // User Type (is Supplier?)
    if (!newUser.hasOwnProperty('isSupplier')) errors.isSupplier = 'Not optional - must indicate true or false (boolean)'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};

exports.reduceUserDetails = (data) => {
    let userDetails = {};
    let errors = {};

    // User Bio
    if(!isEmpty(data.bio)) userDetails.bio = data.bio;

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