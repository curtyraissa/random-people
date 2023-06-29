import {Request, Response} from "express";
import httpStatus from "http-status";
import usersRepositories from "../repositories/repository";

async function getPerson(_req: Request, res: Response){
    try{
        const user = await usersRepositories.getRandomUser();
        res.status(httpStatus.OK).send(user);
    }
    catch(error){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const personControllers = {
    getPerson,
}

export default personControllers;