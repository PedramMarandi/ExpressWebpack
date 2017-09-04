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