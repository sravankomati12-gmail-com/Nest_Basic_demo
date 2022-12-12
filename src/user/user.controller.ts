import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get()
   async  getAllUser(){
        var response= await this.userService.getAlluser()
        return {message:"Get all users",response}
    }
    @Get("/:id")
   async getUserById(@Param() record:any){
        var response=await this.userService.getbyid(record.id)
        return {message:"Get  users by id",response}
    }
    @Post("add")
    addNewUser(@Body() record:any){
        const{name,email,password}=record
        this.userService.addUser({name,email,password})
        return {message:"User is added"}
    }
    @Post("update")
    updateUserById(@Body() record:any){
        const{name,email,password}=record
        this.userService.update(record.id,{name,email,password})
        return {message:"User is details is updated"}
    }
    @Delete("/:id")
    deleteUserById(@Param() record:any){
        this.userService.delete(record.id)
        return {message:"users is deleted"}
    }
}
