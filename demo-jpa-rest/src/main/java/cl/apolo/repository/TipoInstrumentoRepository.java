package cl.apolo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.apolo.entities.TipoInstrumento;


@Repository("TipoInstrumentoRepository")
public interface TipoInstrumentoRepository	extends CrudRepository<TipoInstrumento,Integer> {

}
