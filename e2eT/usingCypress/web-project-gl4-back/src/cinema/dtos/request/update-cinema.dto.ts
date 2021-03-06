import { OmitType, PartialType } from "@nestjs/mapped-types";
import { Cinema } from "src/Models/cinema.model";


export class UpdateCinemaDto extends OmitType(Cinema, ["deletedAt","updatedAt", "createdAt", "isDeleted"]){
}