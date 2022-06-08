import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Document } from 'mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { BaseService } from 'src/generics/services/base.service';
import { User } from 'src/Models/user.model';
import { exists } from 'fs';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(@InjectModel(User.name) model: SoftDeleteModel<User & Document>) {
    super(model);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.model.findOne({ email }).exec();
    if (!user) throw new NotFoundException('User not found By email');
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.model.findOne({ username }).exec();
    if (!user) throw new NotFoundException('User not found By username');
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const user = await this.model.findOne({ email }).exec();
    const exists = user !=null;
    return exists;
  }

  async existsByUsername(username: string): Promise<boolean> {
    const user = await this.model.findOne({ username }).exec();
    const exists = user !=null;
    return exists;
  }
}
