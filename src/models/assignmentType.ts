import * as mongoose from "mongoose";

export type AssignmentType = mongoose.Document & {
    name: string
};

const AssignmentSchema = new mongoose.Schema({
    name: String
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);
export default Assignment;