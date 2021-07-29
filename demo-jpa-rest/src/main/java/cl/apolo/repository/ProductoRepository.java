package cl.apolo.repository;

import org.springframework.data.repository.CrudRepository;

import cl.apolo.entities.Producto;

public interface ProductoRepository extends CrudRepository<Producto,Integer> {

}
