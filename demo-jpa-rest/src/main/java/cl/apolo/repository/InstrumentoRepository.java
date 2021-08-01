package cl.apolo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.apolo.entities.Instrumento;
@Repository ("InstrumentoRepository")
public interface InstrumentoRepository extends CrudRepository<Instrumento,Integer> {

}
