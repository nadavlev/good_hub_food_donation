import { Request, Response, NextFunction } from "express";
import { AuthorizationLevel } from "../enums/authorization-level";
import User, { UserModel } from "../models/User";

/**
 * Gets all the User documents from the Users collection.
 * @param req
 * @param res
 */
export let getAllUsers = (req: Request, res: Response) => {
    if (!req.user) {
        // No user is logged in to the session
        return res.sendStatus(403);
    }

    if (req.user.authorizationLevel !== AuthorizationLevel.Admin) {
        req.flash("errors", { msg: "The requested operation is only permitted to admins." });
        return res.redirect("/");
    }
    else {
        // Run empty find query to return all documents under the User's collection
        User.find({}, (err: any, users: any[]) => {
            const formattedUsers = users.map(user => {
                return {
                    email: user.email,
                    facebook: user.facebook,
                    profile: user.profile,
                    creationDate: user["createdAt"],
                    lastUpdateDate: user["updatedAt"],
                    authorizationLevel: user.authorizationLevel,
                    confirmationStatus: user.confirmationStatus
                };
            });
            return res.send(formattedUsers);
        });
    }
};