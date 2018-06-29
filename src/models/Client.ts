import * as mongoose from "mongoose";
import { AssignmentType } from "./assignmentType";


export type ClientModel = mongoose.Document & {
    firstName: string,
    lastName: string,
    birthDate: Date,
    addressStreet: string,
    addressNumber: any,
    addressFlore: number,
    addressEntrance: any,
    addressCity: string,
    addressComments: string,
    creationDate: Date,
    creationUser: any,
    updateDate: Date,
    updateUser: any,
    assignmentTypes: AssignmentType[];
};

const ClientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    addressStreet: String,
    addressNumber: String,
    addressFlore: String,
    addressEntrance: String,
    addressCity: String,
    addressComments: String,
    creationDate: Date,
    creationUser: String,
    updateDate: Date,
    updateUser: String,
    needs: String
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;
