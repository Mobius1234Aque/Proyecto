import { Link, useLocation } from "react-router-dom";

const Bracrum = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Objeto de mapeo para los nombres personalizados
  const nameMap = {
    home: "Inicio",
    Quien: "¿Quienes somos?",
    Milista: "Mis alumnos",
    Preguntas: "Preguntas frecuentes",
    Registro: "Registro",
    Login: "Inicio de Sesion",
    // Agrega más rutas y nombres personalizados aquí
  };

  return (
    <div style={{ padding: "15px" }}>
      <Link className="text-decoration-none text-dark" to="/">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Usa el nombre personalizado si existe, de lo contrario usa el nombre de la ruta
        const displayName = nameMap[name] || name;

        return (
          <span key={name}>
            <span> / </span>
            {isLast ? (
              <span>{displayName}</span>
            ) : (
              <Link to={routeTo}>{displayName}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};
export default Bracrum;
