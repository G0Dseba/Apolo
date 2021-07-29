package cl.apolo.repository;

import org.springframework.data.repository.CrudRepository;

import cl.apolo.entities.Noticia;


public interface NoticiaRepository	extends CrudRepository<Noticia,Integer> {

}
