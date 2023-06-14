import { Expose, Transform, TransformFnParams, Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

/**
 * @swagger
 *   components:
 *     schemas:
 *       PaginationMeta:
 *         type: object
 *         description: Pagination metadata
 *         properties:
 *           limit:
 *             type: number
 *           offset:
 *             type: number
 *           total:
 *             type: number
 *             read only: true
 */
export class PaginationMeta{
    @IsOptional()
    @IsInt()
    @Transform((param) => Number(param.value || 10))
    @Expose()
    limit?: number = 10;

    @IsOptional()
    @IsInt()
    @Transform((param) => Number(param.value || 1))
    @Expose()
    offset?: number = 1;

    @Expose()
    total?: number;
}