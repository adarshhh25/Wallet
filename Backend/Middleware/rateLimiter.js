import ratelimit from "../config/uptash.js";

const rateLimiter = async(req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit");

        if(!success) {
            return res.status(429).json({message: "Too many requests, please try again later."});
        }
        next();
    } catch (error) {
        console.log("Error limiting rate:", error);
        next(error);
    }           
}

export default rateLimiter;