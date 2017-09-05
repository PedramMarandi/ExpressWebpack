/**
 * With this fake route client, Express parameters will be binded to our controller function
 * @param {promise} a promiss which is returned by controller 
 * @param {any} params are the req, res, next which are provided by express middleware
 */
const controllerHandler = (promise, params) => async(req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];

    try {
        const result = await promise(...boundParams);        
        return res.json(result || {
            message: 'OK'
        });
    } catch (error) {
        return next(error);
    }
};

const c = controllerHandler;

export default c;