package cl.apolo.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Noticia implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 366852860955414958L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="cn", unique =true, nullable=false)
	private Integer cn;
    private String titulo;
    private String subtitulo;
    private String nombre;
    private byte[] imagen;
    private String tipo;
    private Date fecha;
    private String detalle;
    private String autor;
    
	public Noticia() {
		super();
	}

	public Noticia(Integer cn, String titulo, String subtitulo, String nombre, byte[] imagen, String tipo, Date fecha,
			String detalle, String autor) {
		super();
		this.cn = cn;
		this.titulo = titulo;
		this.subtitulo = subtitulo;
		this.nombre = nombre;
		this.imagen = imagen;
		this.tipo = tipo;
		this.fecha = fecha;
		this.detalle = detalle;
		this.autor = autor;
	}

	public Integer getCn() {
		return cn;
	}

	public void setCn(Integer cn) {
		this.cn = cn;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getSubtitulo() {
		return subtitulo;
	}

	public void setSubtitulo(String subtitulo) {
		this.subtitulo = subtitulo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public byte[] getImagen() {
		return imagen;
	}

	public void setImagen(byte[] imagen) {
		this.imagen = imagen;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	@Override
	public String toString() {
		return "Noticia [cn=" + cn + ", titulo=" + titulo + ", subtitulo=" + subtitulo + ", nombre=" + nombre
				+ ", imagen=" + Arrays.toString(imagen) + ", tipo=" + tipo + ", fecha=" + fecha + ", detalle=" + detalle
				+ ", autor=" + autor + "]";
	}
}
