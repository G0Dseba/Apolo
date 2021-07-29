package cl.apolo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import cl.apolo.entities.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario,Integer>{
	
	@Query("from Usuario u where u.correo=:correo AND u.contrasena=:contrasena")
	Usuario autenticar(@Param("correo") String correo , @Param("contrasena") String contrasena);
	
	
}
