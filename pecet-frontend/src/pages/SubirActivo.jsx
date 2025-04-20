import { useState } from "react";
import styles from "../styles/SubirActivo.module.css";
import CustomSelect from "../components/CustomSelect.jsx";

export default function NuevoActivo() {
  const [activo, setActivo] = useState({
    titulo: "",
    descripcion: "",
    autor: "",
    grupo: "",
    fecha: "",
    palabrasClave: "",
    tipo: "",
    estado: "Público",
    enlace: "",
    idioma: "Español",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivo({ ...activo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Activo creado:", activo);
    alert("Activo registrado (simulado en consola).");
  };

  const opcionesTipo = [
    { value: "Documento", label: "📄 Documento" },
    { value: "Video", label: "🎥 Video" },
    { value: "Audio", label: "🎧 Audio" },
    { value: "Imagen", label: "🖼️ Imagen" },
    { value: "Dataset", label: "📊 Dataset" },
    { value: "Software", label: "💻 Software" },
  ];

  const opcionesEstado = [
    { value: "Público", label: "🌐 Público" },
    { value: "Privado", label: "🔒 Privado" },
  ];

  const opcionesIdioma = [
    { value: "Español", label: "🇪🇸 Español" },
    { value: "Inglés", label: "🇬🇧 Inglés" },
    { value: "Otro", label: "🌍 Otro" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Registrar Nuevo Activo</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input
          name="titulo"
          value={activo.titulo}
          onChange={handleChange}
          placeholder="Título"
          required
          className={styles.input}
        />
        <textarea
          name="descripcion"
          value={activo.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          required
          className={`${styles.input} ${styles.textarea}`}
        />
        <input
          name="autor"
          value={activo.autor}
          onChange={handleChange}
          placeholder="Autor"
          required
          className={styles.input}
        />
        <input
          name="grupo"
          value={activo.grupo}
          onChange={handleChange}
          placeholder="Grupo de investigación"
          className={styles.input}
        />
        <input
          type="date"
          name="fecha"
          value={activo.fecha}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="palabrasClave"
          value={activo.palabrasClave}
          onChange={handleChange}
          placeholder="Palabras clave (separadas por coma)"
          className={styles.input}
        />

        <CustomSelect
          label="Tipo de activo"
          name="tipo"
          value={activo.tipo}
          onChange={handleChange}
          options={opcionesTipo}
        />

        <CustomSelect
          label="Estado de visibilidad"
          name="estado"
          value={activo.estado}
          onChange={handleChange}
          options={opcionesEstado}
        />

        <input
          name="enlace"
          value={activo.enlace}
          onChange={handleChange}
          placeholder="URL o ubicación del archivo"
          className={styles.input}
        />

        <CustomSelect
          label="Idioma"
          name="idioma"
          value={activo.idioma}
          onChange={handleChange}
          options={opcionesIdioma}
        />

        <button type="submit" className={styles.button}>
          🚀 Registrar activo
        </button>
      </form>
    </div>
  );
}
