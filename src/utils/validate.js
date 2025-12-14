export const checkloginInput = (username, password) => {
   
    let errors = [];
    if (!username) {
        errors.push("Email ID is required");
    }   
    else if (username) {
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!regex.test(username)) {
            errors.push("Email ID is invalid");
        }
    }
    if (!password) {
        errors.push("Password is required");
    }   
    else if (password) {
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
        if (!regex.test(password)) {
            errors.push("Password is invalid");
        }
    }
    return errors;
}
