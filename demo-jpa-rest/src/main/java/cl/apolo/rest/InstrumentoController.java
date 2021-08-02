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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cl.apolo.entities.Instrumento;
import cl.apolo.repository.InstrumentoRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class InstrumentoController {

		@Autowired
		InstrumentoRepository insrepo;

		@GetMapping("/test4")
		public String test4() {
			try {
				Instrumento ins = new Instrumento();			
				ins.setNombre("test4");
				ins.setCtins(1);
				
			
				insrepo.save(ins);
			
				return "exito";	
			}catch(Exception e) {
				return "Error";
			}
		}
		
		@PostMapping(value ="/insertari", consumes ="application/json")
		public String insertari(@RequestBody Instrumento ins) {
			try {
				
				insrepo.save(ins);
				return"exito";
			}catch(Exception e) {
				return "Error";
			}
		}
		
		@PutMapping(value = "/actualizari", consumes ="application/json")	
		public String actualizari(@RequestBody Instrumento ins) {
		try {
		
			insrepo.save(ins);
			return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@DeleteMapping(value = "/eliminari/{id}" )	
		public String eliminari(@PathVariable Integer id ) {
		try {
		
			insrepo.deleteById(id);
			return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@GetMapping("/listari")
		public List<Instrumento> listari() {
			List<Instrumento> retorno = new ArrayList<>();
			try {				
				//Java stream
				insrepo.findAll().forEach(retorno::add);
				//Java normal
//				Iterable<Usuario> i = usuariorepo.findAll();
//				for(Usuario x:i) {
//					retorno.add(x);
//				}		
			}catch(Exception e) {
				
			}
			return retorno;
		}
}
