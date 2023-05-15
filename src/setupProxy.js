// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `https://www.fastmock.site/mock/c00624da6261543b2897e35dff28607c`,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
            onProxyReq(proxyReq, req, res) {
                // add custom header to request
                // proxyReq.setHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6IjIiLCJpc3MiOiJhNGYyNmY2Yy1iMDY2LTQzY2UtYmVhNC03ODdjYTMyNTdkNWUiLCJhdWQiOiJTSEVOU0hJUElOX01BVEVfVVNFUiIsImlhdCI6MTY3NzEzOTMzMCwiZXhwIjoxNjc3MTQ2NTMwfQ.DCCf7UQFdz_eWPmtJJqP2bRFnXjImFvUtNl_wh43C9U');
                // console.log(req)
                // or log the req
            }
        })
    );
};
