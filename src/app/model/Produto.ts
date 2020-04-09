import { Departamento } from './Departamento';

export class Produto{
    public id: number;
    public titulo: string;
    public detalhe: string;
    public preco: number;
    public foto1: string;
    public foto2: string;
    public departamento: Departamento;
}