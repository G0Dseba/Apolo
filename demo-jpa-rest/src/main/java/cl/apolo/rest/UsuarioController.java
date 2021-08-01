package cl.apolo.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import cl.apolo.entities.Usuario;
import cl.apolo.repository.UsuarioRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class UsuarioController {
		@Autowired
		UsuarioRepository usuariorepo;

		@GetMapping("/test")
		public String test() {
			try {
				Usuario usu = new Usuario();
				usu.setContrasena("test");
				usu.setNombre("test");
				usu.setCorreo("test");
				usu.setTelefono("test");
			
				usuariorepo.save(usu);
			
				return "exito";
			
			}catch(Exception e) {
				return "Error";
			}
		}
		@PostMapping(value = "/insertar", consumes ="application/json")	
		public String insertar(@RequestBody Usuario usu) {
		try {
		
			usuariorepo.save(usu);
			return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@PutMapping(value = "/actualizar", consumes ="application/json")	
		public String actualizar(@RequestBody Usuario usu) {
		try {
		
			usuariorepo.save(usu);
			return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@DeleteMapping(value = "/eliminar/{id}" )	
		public String eliminar(@PathVariable Integer id ) {
		try {
		
			usuariorepo.deleteById(id);
			return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@GetMapping("/listar")
		public List<Usuario> listar() {
			List<Usuario> retorno = new ArrayList<>();
			try {				
				//Java stream
				usuariorepo.findAll().forEach(retorno::add);
				//Java normal
//				Iterable<Usuario> i = usuariorepo.findAll();
//				for(Usuario x:i) {
//					retorno.add(x);
//				}		
			}catch(Exception e) {
				
			}
			return retorno;
		}
		
		@PostMapping("/autenticar")
		public Usuario autenticar(@RequestBody Usuario usu){
			Usuario retorno = new Usuario();
			try {
				retorno = usuariorepo.autenticar(usu.getCorreo(), usu.getContrasena());
			}catch(Exception e) {
				System.out.println(e.getMessage());
			}
			return retorno;
		}
		
		
}
