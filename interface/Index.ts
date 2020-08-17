import { Module } from "../modules/user";


export interface Index{
    getUser(id:number):Module.User
}