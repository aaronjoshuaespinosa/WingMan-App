const loginUser = async (req, res) => {
    res.json({mssg: 'login user.'});
};

const signupUser = async (req, res) => {
    res.json({mssg: 'signup user.'});
};

module.exports = { signupUser, loginUser };