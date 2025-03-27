import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { EntradaComponent } from './pages/entrada/entrada.component';

export const routes: Routes = [
    {path:"",component:EntradaComponent},
    {path:"catalog",component:CatalogComponent},
    
    {path:"busqueda",component:BusquedaComponent},
    {path:"detalle/:id",component:DetalleComponent}
];
