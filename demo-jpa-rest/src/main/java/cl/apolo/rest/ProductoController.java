package cl.apolo.rest;

import java.util.ArrayList;
import java.util.Base64;
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

import cl.apolo.entities.Producto;
import cl.apolo.repository.ProductoRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ProductoController {

	@Autowired
	ProductoRepository productorepo;
	@GetMapping("/test5")
	public String test5() {
		try {
			byte[] imagen = Base64.getEncoder().encode("imagen".getBytes());								
			Producto pro = new Producto();
			pro.setTitulo("test5");			
			pro.setNombre("test5");
			pro.setImagen(imagen);
			pro.setTipo("test5");
			pro.setPrecio(9);
			pro.setDetalle("test5");
			pro.setCins(1);
			
			productorepo.save(pro);
			return "Exito";
		}catch(Exception e) {
			return "Error";
		}
	}
	@PostMapping(value = "/insertarp", consumes ="application/json")	
	public String insertarp(@RequestBody Producto pro) {
		try {
		
			productorepo.save(pro);
		return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@PutMapping(value = "/actualizarp", consumes ="application/json")	
		public String actualizarp(@RequestBody Producto pro) {
		try {
		
		productorepo.save(pro);
			return "exito";
		}catch(Exception e) {
		
			return "error";
		}
	}
		@DeleteMapping(value = "/eliminarp/{id}" )	
		public String eliminarp(@PathVariable Integer id ) {
		try {
		
		productorepo.deleteById(id);
		return "exito";
		}catch(Exception e) {
	
			return "error";
		}
	}
		@GetMapping("/listarp")
		public List<Producto> listarp() {
			List<Producto> retorno = new ArrayList<>();
			try {				
				//Java stream
				productorepo.findAll().forEach(retorno::add);
				//Java normal
		//	Iterable<Producto> i = productorepo.findAll();
			//	for(Producto x:i) {
			//		retorno.add(x);
		//	}		
	}catch(Exception e) {
		
			}
		return retorno;
	}
	
}
