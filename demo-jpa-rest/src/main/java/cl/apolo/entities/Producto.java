package cl.apolo.entities;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Producto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -2095028530891906989L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="cp", unique =true, nullable=false)
	private Integer cp;
	private String titulo;
	private String imagen;
    private String tipo;
    private Integer precio;
    private String detalle;
    private String vendedor;
    private Integer cins;
	public Producto() {
		super();
	}
	public Producto(Integer cp, String titulo, String imagen, String tipo, Integer precio, String detalle,
			String vendedor, Integer cins) {
		super();
		this.cp = cp;
		this.titulo = titulo;
		this.imagen = imagen;
		this.tipo = tipo;
		this.precio = precio;
		this.detalle = detalle;
		this.vendedor = vendedor;
		this.cins = cins;
	}
	public Integer getCp() {
		return cp;
	}
	public void setCp(Integer cp) {
		this.cp = cp;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public Integer getPrecio() {
		return precio;
	}
	public void setPrecio(Integer precio) {
		this.precio = precio;
	}
	public String getDetalle() {
		return detalle;
	}
	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}
	public String getVendedor() {
		return vendedor;
	}
	public void setVendedor(String vendedor) {
		this.vendedor = vendedor;
	}
	public Integer getCins() {
		return cins;
	}
	public void setCins(Integer cins) {
		this.cins = cins;
	}
	@Override
	public String toString() {
		return "Producto [cp=" + cp + ", titulo=" + titulo + ", imagen=" + imagen + ", tipo=" + tipo + ", precio="
				+ precio + ", detalle=" + detalle + ", vendedor=" + vendedor + ", cins=" + cins + "]";
	}
	
	

}
