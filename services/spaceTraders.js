
const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=a7c67995-2754-4785-bf9c-29321191512b`,
    newUser: `https://api.spacetraders.io/users/:username/claim`
};

const getUserProfile = async () => {
    try {
        const response = await fetch(endpoints.userProfile);
        const data = await response.json();
        
        return data;

    } catch (err) {
        console.error(err);
        return {};
    }
}

export default {
    getUserProfile
}