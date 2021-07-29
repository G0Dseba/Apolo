package cl.apolo.rest;

import java.util.Date;
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

import cl.apolo.entities.Noticia;
import cl.apolo.repository.NoticiaRepository;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
public class NoticiaController {

	@Autowired
	NoticiaRepository noticiarepo;

	@GetMapping("/test3")
	public String test3() {
		try {
			byte[] imagen = Base64.getEncoder().encode("imagen".getBytes());
			Date fecha = new Date(010006);
			Noticia not = new Noticia();
			not.setTitulo("test3");
			not.setSubtitulo("test3");
			not.setNombre("test3");
			not.setImagen(imagen);
			not.setTipo("test3");
			not.setFecha(fecha);
			not.setDetalle("test3");
			not.setAutor("test3");

			noticiarepo.save(not);

			return "exito";

		} catch (Exception e) {
			return "Error";
		}
	}

	@PostMapping(value = "/insertarn", consumes = "application/json")
	public String insertarn(@RequestBody Noticia not) {
		try {

			noticiarepo.save(not);
			return "exito";
		} catch (Exception e) {

			return "error";
		}
	}

	@PutMapping(value = "/actualizarn", consumes = "application/json")
	public String actualizarn(@RequestBody Noticia not) {
		try {

			noticiarepo.save(not);
			return "exito";
		} catch (Exception e) {

			return "error";
		}
	}

	@DeleteMapping(value = "/eliminarn/{id}")
	public String eliminarn(@PathVariable Integer id) {
		try {

			noticiarepo.deleteById(id);
			return "exito";
		} catch (Exception e) {

			return "error";
		}
	}

	@GetMapping("/listarn")
	public List<Noticia> listarn() {
		List<Noticia> retorno = new ArrayList<>();
		try {
			Iterable<Noticia> i = noticiarepo.findAll();
			for (Noticia x : i) {
				retorno.add(x);
			}
		} catch (Exception e) {

		}
		return retorno;
	}

}
