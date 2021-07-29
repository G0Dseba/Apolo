package cl.apolo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Usuario implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 4992327233729402245L;	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="cu", unique =true, nullable=false)
	private Integer cu;
    private String nombre;
    private String correo;
    private String telefono;
    private String contrasena;
    
    public Usuario() {
		super();
	}
    
    
	public Usuario(Integer cu, String nombre, String correo, String telefono, String contrasena) {
		super();
		this.cu = cu;
		this.nombre = nombre;
		this.correo = correo;
		this.telefono = telefono;
		this.contrasena = contrasena;
	}


	public Integer getCu() {
		return cu;
	}
	public void setCu(Integer cu) {
		this.cu = cu;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getContrasena() {
		return contrasena;
	}
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}	
	@Override
	public String toString() {
		return "Usuario [cu=" + cu + ", nombre=" + nombre + ", correo=" + correo + ", telefono=" + telefono
				+ ", contrasena=" + contrasena + "]";
	}
}
