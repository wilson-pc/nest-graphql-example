/// <reference types="node" />
import { Cat } from 'src/types/cat';
import { CatDto } from 'src/imputs/createCats';
export declare class AppResolver {
    multi(value: Buffer): string;
    catOne(info: any): Cat;
    catCreate(cat: CatDto): Cat;
}
