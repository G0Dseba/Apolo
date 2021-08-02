package cl.apolo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Instrumento implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5194675912365674784L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="cins", unique =true, nullable=false)
	private Integer cins;
    private String nombre;
    private Integer ctins;
	public Instrumento() {
		super();
	}
	public Instrumento(Integer cins, String nombre, Integer ctins) {
		super();
		this.cins = cins;
		this.nombre = nombre;
		this.ctins = ctins;
	}
	public Integer getCins() {
		return cins;
	}
	public void setCins(Integer cins) {
		this.cins = cins;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Integer getCtins() {
		return ctins;
	}
	public void setCtins(Integer ctins) {
		this.ctins = ctins;
	}
	@Override
	public String toString() {
		return "Instrumento [cins=" + cins + ", nombre=" + nombre + ", ctins=" + ctins + "]";
	}
    
}
