import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDcument, userM } from './user.model';
import { StudentDocument } from './student.model';

@Injectable()
export class UserService {
  constructor(
    // @InjectModel('userinfo') private readonly userModel: Model<userDcument>
    @InjectModel('userinfo') private readonly userModel:  Model<StudentDocument>
  ) { }

  getAlluser() {
    return this.userModel.find()
  }
  getbyid(id) {
    return this.userModel.findById(id)
  }
  addUser(record) {
    this.userModel.create(record)
  }
  update(record, id) {
    this.userModel.findByIdAndUpdate(id, record)
  }
  delete(id) {
    this.userModel.findByIdAndDelete(id)
  }
}
