import { PartialType } from "@nestjs/mapped-types";
import { ProductCreateDTO } from "./product.create.dto";

export class ProductUpdateDTO extends ProductCreateDTO {
    id: number;
}