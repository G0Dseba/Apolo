package cl.apolo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TipoInstrumento implements Serializable {	

	/**
	 * 
	 */
	private static final long serialVersionUID = 7999644945060224887L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="ctins", unique =true, nullable=false)
	private Integer ctins;
	private String nombre;
	
	public TipoInstrumento() {
		super();
	}
	public TipoInstrumento(Integer ctins, String nombre) {
		super();
		this.ctins = ctins;
		this.nombre = nombre;
	}
	public Integer getCtins() {
		return ctins;
	}
	public void setCtins(Integer ctins) {
		this.ctins = ctins;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}		
	@Override
	public String toString() {
		return "TipoInstrumento [ctins=" + ctins + ", nombre=" + nombre + "]";
	}
    
}
