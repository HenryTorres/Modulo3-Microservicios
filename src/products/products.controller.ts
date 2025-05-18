import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    @Get()
    findAll() {
        return 'Lista de todos los productos';
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return `Producto con id: ${id}`;
    }

    @Post()
    create(@Body() data) {
        return data;
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data) {
        return { id, data };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return `Producto ${id} eliminado`;
    }


}