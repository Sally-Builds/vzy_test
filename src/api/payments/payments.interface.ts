import {IsString, IsUUID} from "class-validator";



export class ServiceCreateValidator {
    @IsString()
    service_name!: string;
    @IsString()
    service_description!: string;
    @IsString()
    service_logo!: string;
    @IsString()
    service_color!: string;
}

export class SubServiceCreteValidator {
    @IsString()
    sub_service_name!: string;
    @IsUUID()
    sub_service_parent!: string;
    @IsString()
    sub_service_description!: string;
}