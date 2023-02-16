exports.get404 = (req, res, next) => { // attempting to get data from page
    res.status(404).render('404', { pageTitle: 'Page Not Found' }); // print out for user stating page wasn't found
};