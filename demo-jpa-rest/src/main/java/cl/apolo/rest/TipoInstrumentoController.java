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

import cl.apolo.entities.TipoInstrumento;
import cl.apolo.repository.TipoInstrumentoRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class TipoInstrumentoController {

	@Autowired
	TipoInstrumentoRepository tiporepo;

	@GetMapping("/test2")
	public String test() {
		try {
			TipoInstrumento tipo = new TipoInstrumento();			
			tipo.setNombre("test2");
			
		
			tiporepo.save(tipo);
		
			return "exito";	
		}catch(Exception e) {
			return "Error";
		}
	}
	
	@PostMapping(value ="/insertart", consumes ="application/json")
	public String insertart(@RequestBody TipoInstrumento tipo) {
		try {
			
			tiporepo.save(tipo);
			return"exito";
		}catch(Exception e) {
			return "Error";
		}
	}
	
	@PutMapping(value = "/actualizart", consumes ="application/json")	
	public String actualizart(@RequestBody TipoInstrumento tipo) {
	try {
	
		tiporepo.save(tipo);
		return "exito";
	}catch(Exception e) {
	
		return "error";
	}
}
	@DeleteMapping(value = "/eliminart/{id}" )	
	public String eliminart(@PathVariable Integer id ) {
	try {
	
		tiporepo.deleteById(id);
		return "exito";
	}catch(Exception e) {
	
		return "error";
	}
}
	@GetMapping("/listart")
	public List<TipoInstrumento> listart() {
		List<TipoInstrumento> retorno = new ArrayList<>();
		try {				
			//Java stream
			tiporepo.findAll().forEach(retorno::add);
			//Java normal
//			Iterable<Usuario> i = usuariorepo.findAll();
//			for(Usuario x:i) {
//				retorno.add(x);
//			}		
		}catch(Exception e) {
			
		}
		return retorno;
	}
}
