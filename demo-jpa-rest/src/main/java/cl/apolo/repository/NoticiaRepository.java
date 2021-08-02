package cl.apolo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cl.apolo.entities.Noticia;


@Repository ("NoticiaRepository")
public interface NoticiaRepository	extends CrudRepository<Noticia,Integer> {

}
