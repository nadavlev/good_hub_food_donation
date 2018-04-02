import { Request, Response, NextFunction } from "express";



// read
// Get all clients if no clientId is selected
// If client Id is not null send a specific client
export let getClient = (req: Request, res: Response, next: NextFunction) => {
    res.send("nadav lev testing");
};

// Create
export let createClient = (req: Request, res: Response, next: NextFunction) => {
   res.send("CreateClient");
};

// Update
// Get client object, validate and update the database
export let updateClient = (req: Request, res: Response, next: NextFunction) => {
    res.send("Update Client");
};

// Delete
export let deleteClient = (req: Request, res: Response, next: NextFunction) => {
    res.send("Delete Client");
};
