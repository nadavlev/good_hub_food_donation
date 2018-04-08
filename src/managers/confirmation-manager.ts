import User, { UserModel } from "../models/User";

export namespace ConfirmationManager {
    export function getPendingConfirmations(): void {
        User.find({ confirmationStatus: 1 }, (err: any, users: any[]) => {
            if (users.length) {
                const formattedUsers = users.map(user => {
                    const { password, tokens, __v, _id, ...formattedUser } = user._doc;
                    return formattedUser;
                });

                console.log(formattedUsers);
            }
        });
    }
}