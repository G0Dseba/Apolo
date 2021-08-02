package cl.apolo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.apolo.entities.Producto;

@Repository ("ProductoRepository")
public interface ProductoRepository extends CrudRepository<Producto,Integer> {

}
