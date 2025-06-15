"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
exports.asyncHandler = asyncHandler;
/**
 * asyncHandler is a utility function for simplifying error handling in async Express route handlers.
 *
 * ❓ Purpose:
 * Express does not automatically catch errors thrown inside async functions.
 * Without proper error forwarding (using next(err)), those errors will cause your app to crash or hang.
 *
 * ✅ What This Does:
 * - Wraps any async route/controller function.
 * - Automatically catches any unhandled errors or rejected promises.
 * - Forwards those errors to Express's error-handling middleware using next(err).
 *
 * 🎯 Use Case:
 * Use asyncHandler to wrap your async route handlers, like:
 *
 *    app.get('/api/users/:id', asyncHandler(async (req, res) => {
 *       const user = await User.findById(req.params.id);
 *       res.json(user);
 *    }));
 *
 * This approach keeps your code clean, avoids repetitive try-catch blocks,
 * and ensures that all asynchronous errors are handled gracefully.
 */
