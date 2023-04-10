// app getting user input information //
exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req
    //     .get('Cookie')
    //     .split(';')[1]
    //     .trim()
    //     .split('=')[1] === 'true';
    console.log(req.session.isLoggedIn)
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

// logging into the said user account and view account information //
exports.postLogin = (req, res, next) => {
    User.findById('0.7749755406873544')
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save(err => {
                console.log(err);
                res.redirect('/');
            });
        })
        .catch(err => console.log(err));
};

// states that the user has logged out of their account //
exports.postLogout = (req, res, next) => {
    req.session.destroy(() => {
        console.log(err);
        req.redirect('/');
    });
};
        